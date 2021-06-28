/** @since 1.0.0 */

// -----------------------------------------------------------------------------
// Internal
// -----------------------------------------------------------------------------

type ImplNot<B extends boolean> = If<B, false, true>

type ImplAnd<B1 extends boolean, B2 extends boolean> = If<B1, B2, false>

type ImplOr<B1 extends boolean, B2 extends boolean> = If<B1, true, B2>

type ImplXor<B1 extends boolean, B2 extends boolean> = If<B1, Not<B2>, B2>

type ImplIf<B extends boolean, T, E> = B extends true ? T : E

type ImplIfNot<B extends boolean, T, E> = If<Not<B>, T, E>

type ImplAll<BS extends boolean[]> = BS extends [infer head, ...infer tail]
  ? head extends true
    ? tail extends boolean[]
      ? ImplAll<tail>
      : never
    : false
  : true

type ImplSome<BS extends boolean[]> = BS extends [infer head, ...infer tail]
  ? head extends true
    ? true
    : tail extends boolean[]
    ? ImplAll<tail>
    : never
  : false

// -----------------------------------------------------------------------------
// API
// -----------------------------------------------------------------------------

/**
 * @example
 *   import { Not } from 'ts-typelevel-boolean'
 *   import { assert as typeAssert } from 'conditional-type-checks'
 *
 *   typeAssert<Not<true>>(false)
 *   typeAssert<Not<false>>(true)
 */
export type Not<B extends boolean> = ImplNot<B>

/**
 * @example
 *   import { And } from 'ts-typelevel-boolean'
 *   import { assert as typeAssert } from 'conditional-type-checks'
 *
 *   typeAssert<And<false, false>>(false)
 *   typeAssert<And<false, true>>(false)
 *   typeAssert<And<true, false>>(false)
 *   typeAssert<And<true, true>>(true)
 */
export type And<B1 extends boolean, B2 extends boolean> = ImplAnd<B1, B2>

/**
 * @example
 *   import { Or } from 'ts-typelevel-boolean'
 *   import { assert as typeAssert } from 'conditional-type-checks'
 *
 *   typeAssert<Or<false, false>>(false)
 *   typeAssert<Or<false, true>>(true)
 *   typeAssert<Or<true, false>>(true)
 *   typeAssert<Or<true, true>>(true)
 */
export type Or<B1 extends boolean, B2 extends boolean> = ImplOr<B1, B2>

/**
 * @example
 *   import { Xor } from 'ts-typelevel-boolean'
 *   import { assert as typeAssert } from 'conditional-type-checks'
 *
 *   typeAssert<Xor<false, false>>(false)
 *   typeAssert<Xor<false, true>>(true)
 *   typeAssert<Xor<true, false>>(true)
 *   typeAssert<Xor<true, true>>(false)
 */
export type Xor<B1 extends boolean, B2 extends boolean> = ImplXor<B1, B2>

/**
 * @example
 *   import { If } from 'ts-typelevel-boolean'
 *   import { assert as typeAssert, IsExact } from 'conditional-type-checks'
 *
 *   typeAssert<IsExact<If<true, 'A', 'B'>, 'A'>>(true)
 *   typeAssert<IsExact<If<false, 'A', 'B'>, 'B'>>(true)
 */
export type If<B extends boolean, T, E> = ImplIf<B, T, E>

/**
 * @example
 *   import { IfNot } from 'ts-typelevel-boolean'
 *   import { assert as typeAssert, IsExact } from 'conditional-type-checks'
 *
 *   typeAssert<IsExact<IfNot<true, 'A', 'B'>, 'B'>>(true)
 *   typeAssert<IsExact<IfNot<false, 'A', 'B'>, 'A'>>(true)
 */
export type IfNot<B extends boolean, T, E> = ImplIfNot<B, T, E>

/**
 * @example
 *   import { All } from 'ts-typelevel-boolean'
 *   import { assert as typeAssert } from 'conditional-type-checks'
 *
 *   typeAssert<All<[true, true, true]>>(true)
 *   typeAssert<All<[true, false, true]>>(false)
 *   typeAssert<All<[false, false, false]>>(false)
 */
export type All<BS extends boolean[]> = ImplAll<BS>

/**
 * @example
 *   import { Some } from 'ts-typelevel-boolean'
 *   import { assert as typeAssert } from 'conditional-type-checks'
 *
 *   typeAssert<Some<[true, true, true]>>(true)
 *   typeAssert<Some<[true, false, true]>>(true)
 *   typeAssert<Some<[false, false, false]>>(false)
 */
export type Some<BS extends boolean[]> = ImplSome<BS>
