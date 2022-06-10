import { request, gql } from 'graphql-request'
import * as path from 'path'
import * as csvWriter from 'csv-writer'

const query = gql`
  query fetchSwapper($skip: Int!) {
    swappers(first: 1000, skip: $skip orderBy: count orderDirection: desc) {
      id
      count
    }
  }
`

async function main() {
  const writer = csvWriter.createObjectCsvWriter({
    path: path.resolve(__dirname, 'swappers.csv'),
    header: [
      { id: 'account', title: 'account' },
      { id: 'count', title: 'count' },
    ],
  })

  const records = []
  let i = 0
  let skip = 0
  while (true) {
    let c = 0
    const response = await request('https://graph.mainnet.iotex.io/subgraphs/name/mimo/basic', query, {skip: skip})
    for (; c < response.swappers.length; c++) {
      records.push({account: response.swappers[c].id, count: response.swappers[c].count})
    }
    if (c != 1000) {
      break
    }
    i++
    skip = 1000 * i
  }
  await writer.writeRecords(records)
}

main()
  .then(() => process.exit(0))
  .catch((error) => { 
    console.error(error)
    process.exit(1)
  })
