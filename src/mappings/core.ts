import { Swap, Transfer } from "../types/templates/Pair/Pair"
import { Swapper, UserLiquidity } from '../types/schema'

import { 
  ADDRESS_ZERO,
  END_BLOCK,
  ONE_BI,
  ZERO_BI,
} from "./helpers"
import { BigInt, Bytes } from "@graphprotocol/graph-ts"

export function handleSwap(event: Swap): void {
  if(event.block.number.gt(END_BLOCK)) {
    return;
  }

  let swapper = Swapper.load(event.transaction.from.toHexString())
  if (swapper === null) {
    swapper = new Swapper(event.transaction.from.toHexString())
    swapper.count = ZERO_BI
  }
  swapper.count = swapper.count.plus(ONE_BI)
  swapper.save()
}

function saveUserLiquidity(pair: string, account: string, amount: BigInt): void {
  let ul = UserLiquidity.load(pair + "-" + account)
  if (ul === null) {
    ul = new UserLiquidity(pair + "-" + account)
    ul.pair = Bytes.fromHexString(pair)
    ul.user = Bytes.fromHexString(account)
    ul.liquidity = ZERO_BI
  }
  ul.liquidity = ul.liquidity.plus(amount)
  ul.save()
}

export function handleTransfer(event: Transfer): void {
  if(event.block.number.gt(END_BLOCK)) {
    return;
  }

  let from = event.params.from.toHexString()
  if (from !== ADDRESS_ZERO) {
    saveUserLiquidity(event.address.toHexString(), from, event.params.value.neg())
  }

  let to = event.params.to.toHexString()
  if (from !== ADDRESS_ZERO) {
    saveUserLiquidity(event.address.toHexString(), to, event.params.value)
  }
}