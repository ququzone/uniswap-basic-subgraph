import { request, gql } from 'graphql-request'
import * as path from 'path'
import * as csvWriter from 'csv-writer'

const pairs = [{
  name: "CIOTX-WIOTX",
  address: "0xa41412dafd1f1c0ae90f9fe7f137ea10a1bb5daa",
}, {
  name: "USDT-WIOTX",
  address: "0xe82b7054471d3f5cc825c50350da3bca64f7be4e",
}, {
  name: "ETH-WIOTX",
  address: "0x543f4e80a0c2e226008f65f96964235523d16329",
}, {
  name: "USDC-WIOTX",
  address: "0x68bf247e1f763cb157b2b5f1b927dff4522723d5",
}, {
  name: "CYC-WIOTX",
  address: "0x1381b170681074fedaf1c4e35be1880bc4e85c4a",
}, {
  name: "USDT-BUSD_b",
  address: "0x903a4d3be1623fc1ff1cd2b6fc7fb02a4b1846e1",
}, {
  name: "BNB-WIOTX",
  address: "0xa1313c9e020df867d90afb72a19882f5dd81a3f9",
}, {
  name: "GFT-WIOTX",
  address: "0x53bdd401a871bd0f84e94619edcc0c24489d4aab",
}, {
  name: "WIOTX-ioBUSD",
  address: "0x2a7775e754ca239c54030d7d804c7cb49cb38567",
}, {
  name: "BUSD_b-WIOTX",
  address: "0x6bdefe87c4b18726002d3505b3251c89c8004c6a",
}, {
  name: "WIOTX-WBTC",
  address: "0x2217b9e27a11f20b681b4dd72153f3b37127a2f3",
}, {
  name: "USDT_m-WIOTX",
  address: "0xb30ddcc6df9839669f50ec9202828826ec36ef7c",
}, {
  name: "DAI_m-WIOTX",
  address: "0xd40bfd9bffc798b5183cbe27d877562fb09c8958",
}, {
  name: "TEX-USDT",
  address: "0x687b69f1375b052a3e043ce4ef7b4bb92a1120cb",
}, {
  name: "USDT_b-WIOTX",
  address: "0x9e774a0c1e61c415e2a9f3c020caae8701c6122e",
}, {
  name: "BUSD_b-ZM",
  address: "0x594d07abe1369c8dd72d6fd05eaccd633e6f5540",
}, {
  name: "MTGO-WIOTX",
  address: "0x2a382b6d2dac1cba6e4820fd04e3c2c14e1aa7b2",
}, {
  name: "WIOTX-ZM",
  address: "0x3396d2ec0dd33e6a86bd201208aec8415b0b2991",
}, {
  name: "MCN-WIOTX",
  address: "0x5bf28ee36e4a1efe5f7d7052a5fc099f9df9c802",
}, {
  name: "Matic-WIOTX",
  address: "0xde3f860cd89bf503a44ebaa2f3930f645a21a9a5",
}]

const query = gql`
  query userLiquidities($pair: String!, $skip: Int!) {
    userLiquidities(where: {pair: $pair}, first: 1000, skip: $skip orderBy: liquidity orderDirection: desc) {
      user
      liquidity
    }
  }
`

async function main() {
  for (let p = 0; p < pairs.length; p++) {
    const writer = csvWriter.createObjectCsvWriter({
      path: path.resolve(__dirname, `${pairs[p].name}.csv`),
      header: [
        { id: 'account', title: 'account' },
        { id: 'liquidity', title: 'liquidity' },
      ],
    })
  
    const records = []
    let i = 0
    let skip = 0
    while (true) {
      let c = 0
      const response = await request('https://graph.mainnet.iotex.io/subgraphs/name/mimo/basic', query, {pair: pairs[p].address, skip: skip})
      for (; c < response.userLiquidities.length; c++) {
        records.push({account: response.userLiquidities[c].user, liquidity: response.userLiquidities[c].liquidity})
      }
      if (c != 1000) {
        break
      }
      i++
      skip = 1000 * i
    }
    await writer.writeRecords(records)
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => { 
    console.error(error)
    process.exit(1)
  })
