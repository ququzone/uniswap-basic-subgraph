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

  get lastBlock(): BigInt {
    let value = this.get("lastBlock");
    return value!.toBigInt();
  }

  set lastBlock(value: BigInt) {
    this.set("lastBlock", Value.fromBigInt(value));
  }

  get completed(): boolean {
    let value = this.get("completed");
    return value!.toBoolean();
  }

  set completed(value: boolean) {
    this.set("completed", Value.fromBoolean(value));
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
}

export class Swapper extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Swapper entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Swapper must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Swapper", id.toString(), this);
    }
  }

  static load(id: string): Swapper | null {
    return changetype<Swapper | null>(store.get("Swapper", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): BigInt {
    let value = this.get("count");
    return value!.toBigInt();
  }

  set count(value: BigInt) {
    this.set("count", Value.fromBigInt(value));
  }
}

export class UserLiquidity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserLiquidity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserLiquidity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserLiquidity", id.toString(), this);
    }
  }

  static load(id: string): UserLiquidity | null {
    return changetype<UserLiquidity | null>(store.get("UserLiquidity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get pair(): Bytes {
    let value = this.get("pair");
    return value!.toBytes();
  }

  set pair(value: Bytes) {
    this.set("pair", Value.fromBytes(value));
  }

  get liquidity(): BigInt {
    let value = this.get("liquidity");
    return value!.toBigInt();
  }

  set liquidity(value: BigInt) {
    this.set("liquidity", Value.fromBigInt(value));
  }
}
