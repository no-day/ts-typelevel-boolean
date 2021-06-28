---
title: index.ts
nav_order: 1
parent: Modules
---

## index overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [utils](#utils)
  - [All (type alias)](#all-type-alias)
  - [And (type alias)](#and-type-alias)
  - [If (type alias)](#if-type-alias)
  - [IfNot (type alias)](#ifnot-type-alias)
  - [Not (type alias)](#not-type-alias)
  - [Or (type alias)](#or-type-alias)
  - [Some (type alias)](#some-type-alias)
  - [Xor (type alias)](#xor-type-alias)

---

# utils

## All (type alias)

**Signature**

```ts
export type All<BS extends boolean[]> = ImplAll<BS>
```

**Example**

```ts
import { All } from 'ts-typelevel-boolean'
import { assert as typeAssert } from 'conditional-type-checks'

typeAssert<All<[true, true, true]>>(true)
typeAssert<All<[true, false, true]>>(false)
typeAssert<All<[false, false, false]>>(false)
```

## And (type alias)

**Signature**

```ts
export type And<B1 extends boolean, B2 extends boolean> = ImplAnd<B1, B2>
```

**Example**

```ts
import { And } from 'ts-typelevel-boolean'
import { assert as typeAssert } from 'conditional-type-checks'

typeAssert<And<false, false>>(false)
typeAssert<And<false, true>>(false)
typeAssert<And<true, false>>(false)
typeAssert<And<true, true>>(true)
```

## If (type alias)

**Signature**

```ts
export type If<B extends boolean, T, E> = ImplIf<B, T, E>
```

**Example**

```ts
import { If } from 'ts-typelevel-boolean'
import { assert as typeAssert, IsExact } from 'conditional-type-checks'

typeAssert<IsExact<If<true, 'A', 'B'>, 'A'>>(true)
typeAssert<IsExact<If<false, 'A', 'B'>, 'B'>>(true)
```

## IfNot (type alias)

**Signature**

```ts
export type IfNot<B extends boolean, T, E> = ImplIfNot<B, T, E>
```

**Example**

```ts
import { IfNot } from 'ts-typelevel-boolean'
import { assert as typeAssert, IsExact } from 'conditional-type-checks'

typeAssert<IsExact<IfNot<true, 'A', 'B'>, 'B'>>(true)
typeAssert<IsExact<IfNot<false, 'A', 'B'>, 'A'>>(true)
```

## Not (type alias)

**Signature**

```ts
export type Not<B extends boolean> = ImplNot<B>
```

**Example**

```ts
import { Not } from 'ts-typelevel-boolean'
import { assert as typeAssert } from 'conditional-type-checks'

typeAssert<Not<true>>(false)
typeAssert<Not<false>>(true)
```

## Or (type alias)

**Signature**

```ts
export type Or<B1 extends boolean, B2 extends boolean> = ImplOr<B1, B2>
```

**Example**

```ts
import { Or } from 'ts-typelevel-boolean'
import { assert as typeAssert } from 'conditional-type-checks'

typeAssert<Or<false, false>>(false)
typeAssert<Or<false, true>>(true)
typeAssert<Or<true, false>>(true)
typeAssert<Or<true, true>>(true)
```

## Some (type alias)

**Signature**

```ts
export type Some<BS extends boolean[]> = ImplSome<BS>
```

**Example**

```ts
import { Some } from 'ts-typelevel-boolean'
import { assert as typeAssert } from 'conditional-type-checks'

typeAssert<Some<[true, true, true]>>(true)
typeAssert<Some<[true, false, true]>>(true)
typeAssert<Some<[false, false, false]>>(false)
```

## Xor (type alias)

**Signature**

```ts
export type Xor<B1 extends boolean, B2 extends boolean> = ImplXor<B1, B2>
```

**Example**

```ts
import { Xor } from 'ts-typelevel-boolean'
import { assert as typeAssert } from 'conditional-type-checks'

typeAssert<Xor<false, false>>(false)
typeAssert<Xor<false, true>>(true)
typeAssert<Xor<true, false>>(true)
typeAssert<Xor<true, true>>(false)
```
