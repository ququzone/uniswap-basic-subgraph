import * as path from 'path'
import * as fs from 'fs'
import * as csvWriter from 'csv-writer'
import csvParser from 'csv-parser'
import { Decimal } from 'decimal.js';

const pairs = [{
  name: "CIOTX-WIOTX",
  address: "0xa41412dafd1f1c0ae90f9fe7f137ea10a1bb5daa",
  liquidity: 4868613,
}, {
  name: "USDT-WIOTX",
  address: "0xe82b7054471d3f5cc825c50350da3bca64f7be4e",
  liquidity: 1305926,
}, {
  name: "ETH-WIOTX",
  address: "0x543f4e80a0c2e226008f65f96964235523d16329",
  liquidity: 1005225,
}, {
  name: "USDC-WIOTX",
  address: "0x68bf247e1f763cb157b2b5f1b927dff4522723d5",
  liquidity: 709289,
}, {
  name: "CYC-WIOTX",
  address: "0x1381b170681074fedaf1c4e35be1880bc4e85c4a",
  liquidity: 619787,
}, {
  name: "USDT-BUSD_b",
  address: "0x903a4d3be1623fc1ff1cd2b6fc7fb02a4b1846e1",
  liquidity: 424189,
}, {
  name: "BNB-WIOTX",
  address: "0xa1313c9e020df867d90afb72a19882f5dd81a3f9",
  liquidity: 332637,
}, {
  name: "GFT-WIOTX",
  address: "0x53bdd401a871bd0f84e94619edcc0c24489d4aab",
  liquidity: 296733,
}, {
  name: "WIOTX-ioBUSD",
  address: "0x2a7775e754ca239c54030d7d804c7cb49cb38567",
  liquidity: 281995,
}, {
  name: "BUSD_b-WIOTX",
  address: "0x6bdefe87c4b18726002d3505b3251c89c8004c6a",
  liquidity: 243938,
}, {
  name: "WIOTX-WBTC",
  address: "0x2217b9e27a11f20b681b4dd72153f3b37127a2f3",
  liquidity: 203474,
}, {
  name: "USDT_m-WIOTX",
  address: "0xb30ddcc6df9839669f50ec9202828826ec36ef7c",
  liquidity: 129247,
}, {
  name: "DAI_m-WIOTX",
  address: "0xd40bfd9bffc798b5183cbe27d877562fb09c8958",
  liquidity: 122189,
}, {
  name: "TEX-USDT",
  address: "0x687b69f1375b052a3e043ce4ef7b4bb92a1120cb",
  liquidity: 132221,
}, {
  name: "USDT_b-WIOTX",
  address: "0x9e774a0c1e61c415e2a9f3c020caae8701c6122e",
  liquidity: 95925,
}, {
  name: "BUSD_b-ZM",
  address: "0x594d07abe1369c8dd72d6fd05eaccd633e6f5540",
  liquidity: 94808,
}, {
  name: "MTGO-WIOTX",
  address: "0x2a382b6d2dac1cba6e4820fd04e3c2c14e1aa7b2",
  liquidity: 52587,
}, {
  name: "WIOTX-ZM",
  address: "0x3396d2ec0dd33e6a86bd201208aec8415b0b2991",
  liquidity: 50697,
}, {
  name: "MCN-WIOTX",
  address: "0x5bf28ee36e4a1efe5f7d7052a5fc099f9df9c802",
  liquidity: 34452,
}, {
  name: "Matic-WIOTX",
  address: "0xde3f860cd89bf503a44ebaa2f3930f645a21a9a5",
  liquidity: 30440,
}]

async function main() {
  const results = {}
  for (let i = 0; i < pairs.length; i++) {
    await new Promise((resolve, reject) => {
      const totalValue = new Decimal(pairs[i].liquidity)
      let total = new Decimal(0)
      // @ts-ignore
      const records = []
      fs.createReadStream(path.resolve(__dirname, `data/${pairs[i].name}.csv`))
        .pipe(csvParser())
        // @ts-ignore
        .on('data', (data) => {
          const liquidity = new Decimal(data.liquidity)
          records.push({account: data.account, liquidity: liquidity})
          total = total.add(liquidity)
        })
        .on('end', () => {
          const per = totalValue.div(total)
          for (let r = 0; r < records.length; r++) {
            // @ts-ignore
            const uv = per.mul(records[r].liquidity)
            // @ts-ignore
            if (results[records[r].account]) {
              // @ts-ignore
              results[records[r].account] = new Decimal(results[records[r].account]).add(uv).toFixed(5)
            } else {
              // @ts-ignore
              results[records[r].account] = uv.toFixed(5)
            }
          }
          resolve(true)
        })
    })
  }

  const writer = csvWriter.createObjectCsvWriter({
    path: path.resolve(__dirname, `total.csv`),
    header: [
      { id: 'account', title: 'account' },
      { id: 'liquidity', title: 'liquidity' },
    ],
  })
  // @ts-ignore
  const d = Object.entries(results).sort((a, b) => new Number(b[1]) - new Number(a[1])).map(a => {
    // @ts-ignore
    return {account: a[0], liquidity: `${a[1]}`}
  })
  await writer.writeRecords(d)
}

main()
  .then(() => process.exit(0))
  .catch((error) => { 
    console.error(error)
    process.exit(1)
  })
