// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class UniswapFactory extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UniswapFactory entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UniswapFactory must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UniswapFactory", id.toString(), this);
    }
  }

  static load(id: string): UniswapFactory | null {
    return changetype<UniswapFactory | null>(store.get("UniswapFactory", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get pairCount(): i32 {
    let value = this.get("pairCount");
    return value!.toI32();
  }

  set pairCount(value: i32) {
    this.set("pairCount", Value.fromI32(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value!.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get decimals(): BigInt {
    let value = this.get("decimals");
    return value!.toBigInt();
  }

  set decimals(value: BigInt) {
    this.set("decimals", Value.fromBigInt(value));
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value!.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get pairBase(): Array<string> {
    let value = this.get("pairBase");
    return value!.toStringArray();
  }

  set pairBase(value: Array<string>) {
    this.set("pairBase", Value.fromStringArray(value));
  }

  get pairQuote(): Array<string> {
    let value = this.get("pairQuote");
    return value!.toStringArray();
  }

  set pairQuote(value: Array<string>) {
    this.set("pairQuote", Value.fromStringArray(value));
  }
}

export class Pair extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Pair entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Pair must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Pair", id.toString(), this);
    }
  }

  static load(id: string): Pair | null {
    return changetype<Pair | null>(store.get("Pair", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token0(): string {
    let value = this.get("token0");
    return value!.toString();
  }

  set token0(value: string) {
    this.set("token0", Value.fromString(value));
  }

  get token1(): string {
    let value = this.get("token1");
    return value!.toString();
  }

  set token1(value: string) {
    this.set("token1", Value.fromString(value));
  }

  get reserve0(): BigDecimal {
    let value = this.get("reserve0");
    return value!.toBigDecimal();
  }

  set reserve0(value: BigDecimal) {
    this.set("reserve0", Value.fromBigDecimal(value));
  }

  get reserve1(): BigDecimal {
    let value = this.get("reserve1");
    return value!.toBigDecimal();
  }

  set reserve1(value: BigDecimal) {
    this.set("reserve1", Value.fromBigDecimal(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value!.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get txCount(): BigInt {
    let value = this.get("txCount");
    return value!.toBigInt();
  }

  set txCount(value: BigInt) {
    this.set("txCount", Value.fromBigInt(value));
  }

  get liquidityProviderCount(): BigInt {
    let value = this.get("liquidityProviderCount");
    return value!.toBigInt();
  }

  set liquidityProviderCount(value: BigInt) {
    this.set("liquidityProviderCount", Value.fromBigInt(value));
  }

  get createdAtTimestamp(): BigInt {
    let value = this.get("createdAtTimestamp");
    return value!.toBigInt();
  }

  set createdAtTimestamp(value: BigInt) {
    this.set("createdAtTimestamp", Value.fromBigInt(value));
  }

  get createdAtBlockNumber(): BigInt {
    let value = this.get("createdAtBlockNumber");
    return value!.toBigInt();
  }

  set createdAtBlockNumber(value: BigInt) {
    this.set("createdAtBlockNumber", Value.fromBigInt(value));
  }
}