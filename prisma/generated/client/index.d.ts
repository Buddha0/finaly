
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model Bid
 * 
 */
export type Bid = $Result.DefaultSelection<Prisma.$BidPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model Dispute
 * 
 */
export type Dispute = $Result.DefaultSelection<Prisma.$DisputePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  POSTER: 'POSTER',
  DOER: 'DOER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const AssignmentStatus: {
  OPEN: 'OPEN',
  ASSIGNED: 'ASSIGNED',
  IN_PROGRESS: 'IN_PROGRESS',
  UNDER_REVIEW: 'UNDER_REVIEW',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  REFUNDED: 'REFUNDED',
  DISPUTED: 'DISPUTED',
  RELEASED: 'RELEASED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const DisputeStatus: {
  OPEN: 'OPEN',
  RESOLVED_REFUND: 'RESOLVED_REFUND',
  RESOLVED_RELEASE: 'RESOLVED_RELEASE',
  CANCELLED: 'CANCELLED'
};

export type DisputeStatus = (typeof DisputeStatus)[keyof typeof DisputeStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type AssignmentStatus = $Enums.AssignmentStatus

export const AssignmentStatus: typeof $Enums.AssignmentStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type DisputeStatus = $Enums.DisputeStatus

export const DisputeStatus: typeof $Enums.DisputeStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bid`: Exposes CRUD operations for the **Bid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bids
    * const bids = await prisma.bid.findMany()
    * ```
    */
  get bid(): Prisma.BidDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dispute`: Exposes CRUD operations for the **Dispute** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disputes
    * const disputes = await prisma.dispute.findMany()
    * ```
    */
  get dispute(): Prisma.DisputeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Assignment: 'Assignment',
    Bid: 'Bid',
    Submission: 'Submission',
    Review: 'Review',
    Message: 'Message',
    Payment: 'Payment',
    Dispute: 'Dispute'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "assignment" | "bid" | "submission" | "review" | "message" | "payment" | "dispute"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      Bid: {
        payload: Prisma.$BidPayload<ExtArgs>
        fields: Prisma.BidFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BidFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BidFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findFirst: {
            args: Prisma.BidFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BidFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          findMany: {
            args: Prisma.BidFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          create: {
            args: Prisma.BidCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          createMany: {
            args: Prisma.BidCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BidCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          delete: {
            args: Prisma.BidDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          update: {
            args: Prisma.BidUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          deleteMany: {
            args: Prisma.BidDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BidUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BidUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>[]
          }
          upsert: {
            args: Prisma.BidUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BidPayload>
          }
          aggregate: {
            args: Prisma.BidAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBid>
          }
          groupBy: {
            args: Prisma.BidGroupByArgs<ExtArgs>
            result: $Utils.Optional<BidGroupByOutputType>[]
          }
          count: {
            args: Prisma.BidCountArgs<ExtArgs>
            result: $Utils.Optional<BidCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      Dispute: {
        payload: Prisma.$DisputePayload<ExtArgs>
        fields: Prisma.DisputeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DisputeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DisputeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          findFirst: {
            args: Prisma.DisputeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DisputeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          findMany: {
            args: Prisma.DisputeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>[]
          }
          create: {
            args: Prisma.DisputeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          createMany: {
            args: Prisma.DisputeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DisputeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>[]
          }
          delete: {
            args: Prisma.DisputeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          update: {
            args: Prisma.DisputeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          deleteMany: {
            args: Prisma.DisputeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DisputeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DisputeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>[]
          }
          upsert: {
            args: Prisma.DisputeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DisputePayload>
          }
          aggregate: {
            args: Prisma.DisputeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDispute>
          }
          groupBy: {
            args: Prisma.DisputeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DisputeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DisputeCountArgs<ExtArgs>
            result: $Utils.Optional<DisputeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    assignment?: AssignmentOmit
    bid?: BidOmit
    submission?: SubmissionOmit
    review?: ReviewOmit
    message?: MessageOmit
    payment?: PaymentOmit
    dispute?: DisputeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    postedAssignments: number
    acceptedAssignments: number
    submissions: number
    bids: number
    reviews: number
    receivedReviews: number
    messages: number
    receivedMessages: number
    sentPayments: number
    receivedPayments: number
    disputes: number
    resolvedDisputes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedAssignments?: boolean | UserCountOutputTypeCountPostedAssignmentsArgs
    acceptedAssignments?: boolean | UserCountOutputTypeCountAcceptedAssignmentsArgs
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    bids?: boolean | UserCountOutputTypeCountBidsArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    receivedReviews?: boolean | UserCountOutputTypeCountReceivedReviewsArgs
    messages?: boolean | UserCountOutputTypeCountMessagesArgs
    receivedMessages?: boolean | UserCountOutputTypeCountReceivedMessagesArgs
    sentPayments?: boolean | UserCountOutputTypeCountSentPaymentsArgs
    receivedPayments?: boolean | UserCountOutputTypeCountReceivedPaymentsArgs
    disputes?: boolean | UserCountOutputTypeCountDisputesArgs
    resolvedDisputes?: boolean | UserCountOutputTypeCountResolvedDisputesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostedAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAcceptedAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSentPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReceivedPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDisputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResolvedDisputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeWhereInput
  }


  /**
   * Count Type AssignmentCountOutputType
   */

  export type AssignmentCountOutputType = {
    submissions: number
    bids: number
    reviews: number
    messages: number
    disputes: number
  }

  export type AssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | AssignmentCountOutputTypeCountSubmissionsArgs
    bids?: boolean | AssignmentCountOutputTypeCountBidsArgs
    reviews?: boolean | AssignmentCountOutputTypeCountReviewsArgs
    messages?: boolean | AssignmentCountOutputTypeCountMessagesArgs
    disputes?: boolean | AssignmentCountOutputTypeCountDisputesArgs
  }

  // Custom InputTypes
  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentCountOutputType
     */
    select?: AssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountBidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountDisputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    rating: number | null
    accountBalance: number | null
  }

  export type UserSumAggregateOutputType = {
    rating: number | null
    accountBalance: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    role: $Enums.Role | null
    bio: string | null
    skills: string | null
    rating: number | null
    verificationStatus: string | null
    rejectionReason: string | null
    accountBalance: number | null
    stripeConnectAccountId: string | null
    stripeAccountVerified: boolean | null
    clerkId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    image: string | null
    role: $Enums.Role | null
    bio: string | null
    skills: string | null
    rating: number | null
    verificationStatus: string | null
    rejectionReason: string | null
    accountBalance: number | null
    stripeConnectAccountId: string | null
    stripeAccountVerified: boolean | null
    clerkId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    image: number
    role: number
    bio: number
    skills: number
    rating: number
    citizenshipPhotos: number
    verificationStatus: number
    rejectionReason: number
    accountBalance: number
    stripeConnectAccountId: number
    stripeAccountVerified: number
    clerkId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    rating?: true
    accountBalance?: true
  }

  export type UserSumAggregateInputType = {
    rating?: true
    accountBalance?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    bio?: true
    skills?: true
    rating?: true
    verificationStatus?: true
    rejectionReason?: true
    accountBalance?: true
    stripeConnectAccountId?: true
    stripeAccountVerified?: true
    clerkId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    bio?: true
    skills?: true
    rating?: true
    verificationStatus?: true
    rejectionReason?: true
    accountBalance?: true
    stripeConnectAccountId?: true
    stripeAccountVerified?: true
    clerkId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    image?: true
    role?: true
    bio?: true
    skills?: true
    rating?: true
    citizenshipPhotos?: true
    verificationStatus?: true
    rejectionReason?: true
    accountBalance?: true
    stripeConnectAccountId?: true
    stripeAccountVerified?: true
    clerkId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    image: string | null
    role: $Enums.Role
    bio: string | null
    skills: string | null
    rating: number | null
    citizenshipPhotos: JsonValue | null
    verificationStatus: string | null
    rejectionReason: string | null
    accountBalance: number
    stripeConnectAccountId: string | null
    stripeAccountVerified: boolean | null
    clerkId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    bio?: boolean
    skills?: boolean
    rating?: boolean
    citizenshipPhotos?: boolean
    verificationStatus?: boolean
    rejectionReason?: boolean
    accountBalance?: boolean
    stripeConnectAccountId?: boolean
    stripeAccountVerified?: boolean
    clerkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    postedAssignments?: boolean | User$postedAssignmentsArgs<ExtArgs>
    acceptedAssignments?: boolean | User$acceptedAssignmentsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    bids?: boolean | User$bidsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    receivedReviews?: boolean | User$receivedReviewsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    sentPayments?: boolean | User$sentPaymentsArgs<ExtArgs>
    receivedPayments?: boolean | User$receivedPaymentsArgs<ExtArgs>
    disputes?: boolean | User$disputesArgs<ExtArgs>
    resolvedDisputes?: boolean | User$resolvedDisputesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    bio?: boolean
    skills?: boolean
    rating?: boolean
    citizenshipPhotos?: boolean
    verificationStatus?: boolean
    rejectionReason?: boolean
    accountBalance?: boolean
    stripeConnectAccountId?: boolean
    stripeAccountVerified?: boolean
    clerkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    bio?: boolean
    skills?: boolean
    rating?: boolean
    citizenshipPhotos?: boolean
    verificationStatus?: boolean
    rejectionReason?: boolean
    accountBalance?: boolean
    stripeConnectAccountId?: boolean
    stripeAccountVerified?: boolean
    clerkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    role?: boolean
    bio?: boolean
    skills?: boolean
    rating?: boolean
    citizenshipPhotos?: boolean
    verificationStatus?: boolean
    rejectionReason?: boolean
    accountBalance?: boolean
    stripeConnectAccountId?: boolean
    stripeAccountVerified?: boolean
    clerkId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "image" | "role" | "bio" | "skills" | "rating" | "citizenshipPhotos" | "verificationStatus" | "rejectionReason" | "accountBalance" | "stripeConnectAccountId" | "stripeAccountVerified" | "clerkId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postedAssignments?: boolean | User$postedAssignmentsArgs<ExtArgs>
    acceptedAssignments?: boolean | User$acceptedAssignmentsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    bids?: boolean | User$bidsArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    receivedReviews?: boolean | User$receivedReviewsArgs<ExtArgs>
    messages?: boolean | User$messagesArgs<ExtArgs>
    receivedMessages?: boolean | User$receivedMessagesArgs<ExtArgs>
    sentPayments?: boolean | User$sentPaymentsArgs<ExtArgs>
    receivedPayments?: boolean | User$receivedPaymentsArgs<ExtArgs>
    disputes?: boolean | User$disputesArgs<ExtArgs>
    resolvedDisputes?: boolean | User$resolvedDisputesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      postedAssignments: Prisma.$AssignmentPayload<ExtArgs>[]
      acceptedAssignments: Prisma.$AssignmentPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      bids: Prisma.$BidPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      receivedReviews: Prisma.$ReviewPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
      sentPayments: Prisma.$PaymentPayload<ExtArgs>[]
      receivedPayments: Prisma.$PaymentPayload<ExtArgs>[]
      disputes: Prisma.$DisputePayload<ExtArgs>[]
      resolvedDisputes: Prisma.$DisputePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string | null
      image: string | null
      role: $Enums.Role
      bio: string | null
      skills: string | null
      rating: number | null
      citizenshipPhotos: Prisma.JsonValue | null
      verificationStatus: string | null
      rejectionReason: string | null
      accountBalance: number
      stripeConnectAccountId: string | null
      stripeAccountVerified: boolean | null
      clerkId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postedAssignments<T extends User$postedAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$postedAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    acceptedAssignments<T extends User$acceptedAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$acceptedAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bids<T extends User$bidsArgs<ExtArgs> = {}>(args?: Subset<T, User$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedReviews<T extends User$receivedReviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedReviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends User$messagesArgs<ExtArgs> = {}>(args?: Subset<T, User$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends User$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sentPayments<T extends User$sentPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$sentPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedPayments<T extends User$receivedPaymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$receivedPaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    disputes<T extends User$disputesArgs<ExtArgs> = {}>(args?: Subset<T, User$disputesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resolvedDisputes<T extends User$resolvedDisputesArgs<ExtArgs> = {}>(args?: Subset<T, User$resolvedDisputesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly bio: FieldRef<"User", 'String'>
    readonly skills: FieldRef<"User", 'String'>
    readonly rating: FieldRef<"User", 'Float'>
    readonly citizenshipPhotos: FieldRef<"User", 'Json'>
    readonly verificationStatus: FieldRef<"User", 'String'>
    readonly rejectionReason: FieldRef<"User", 'String'>
    readonly accountBalance: FieldRef<"User", 'Float'>
    readonly stripeConnectAccountId: FieldRef<"User", 'String'>
    readonly stripeAccountVerified: FieldRef<"User", 'Boolean'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.postedAssignments
   */
  export type User$postedAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * User.acceptedAssignments
   */
  export type User$acceptedAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.bids
   */
  export type User$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.receivedReviews
   */
  export type User$receivedReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.messages
   */
  export type User$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.receivedMessages
   */
  export type User$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.sentPayments
   */
  export type User$sentPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.receivedPayments
   */
  export type User$receivedPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.disputes
   */
  export type User$disputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    where?: DisputeWhereInput
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    cursor?: DisputeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * User.resolvedDisputes
   */
  export type User$resolvedDisputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    where?: DisputeWhereInput
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    cursor?: DisputeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentAvgAggregateOutputType = {
    budget: number | null
  }

  export type AssignmentSumAggregateOutputType = {
    budget: number | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    budget: number | null
    deadline: Date | null
    priority: string | null
    additional: string | null
    status: $Enums.AssignmentStatus | null
    posterId: string | null
    doerId: string | null
    stripePaymentIntentId: string | null
    acceptedBidId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    category: string | null
    budget: number | null
    deadline: Date | null
    priority: string | null
    additional: string | null
    status: $Enums.AssignmentStatus | null
    posterId: string | null
    doerId: string | null
    stripePaymentIntentId: string | null
    acceptedBidId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    title: number
    description: number
    category: number
    budget: number
    deadline: number
    priority: number
    attachments: number
    additional: number
    status: number
    posterId: number
    doerId: number
    stripePaymentIntentId: number
    acceptedBidId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssignmentAvgAggregateInputType = {
    budget?: true
  }

  export type AssignmentSumAggregateInputType = {
    budget?: true
  }

  export type AssignmentMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    budget?: true
    deadline?: true
    priority?: true
    additional?: true
    status?: true
    posterId?: true
    doerId?: true
    stripePaymentIntentId?: true
    acceptedBidId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    budget?: true
    deadline?: true
    priority?: true
    additional?: true
    status?: true
    posterId?: true
    doerId?: true
    stripePaymentIntentId?: true
    acceptedBidId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    category?: true
    budget?: true
    deadline?: true
    priority?: true
    attachments?: true
    additional?: true
    status?: true
    posterId?: true
    doerId?: true
    stripePaymentIntentId?: true
    acceptedBidId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _avg?: AssignmentAvgAggregateInputType
    _sum?: AssignmentSumAggregateInputType
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date
    priority: string
    attachments: JsonValue | null
    additional: string | null
    status: $Enums.AssignmentStatus
    posterId: string
    doerId: string | null
    stripePaymentIntentId: string | null
    acceptedBidId: string | null
    createdAt: Date
    updatedAt: Date
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    budget?: boolean
    deadline?: boolean
    priority?: boolean
    attachments?: boolean
    additional?: boolean
    status?: boolean
    posterId?: boolean
    doerId?: boolean
    stripePaymentIntentId?: boolean
    acceptedBidId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    poster?: boolean | UserDefaultArgs<ExtArgs>
    doer?: boolean | Assignment$doerArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    bids?: boolean | Assignment$bidsArgs<ExtArgs>
    reviews?: boolean | Assignment$reviewsArgs<ExtArgs>
    messages?: boolean | Assignment$messagesArgs<ExtArgs>
    payment?: boolean | Assignment$paymentArgs<ExtArgs>
    disputes?: boolean | Assignment$disputesArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    budget?: boolean
    deadline?: boolean
    priority?: boolean
    attachments?: boolean
    additional?: boolean
    status?: boolean
    posterId?: boolean
    doerId?: boolean
    stripePaymentIntentId?: boolean
    acceptedBidId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    poster?: boolean | UserDefaultArgs<ExtArgs>
    doer?: boolean | Assignment$doerArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    budget?: boolean
    deadline?: boolean
    priority?: boolean
    attachments?: boolean
    additional?: boolean
    status?: boolean
    posterId?: boolean
    doerId?: boolean
    stripePaymentIntentId?: boolean
    acceptedBidId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    poster?: boolean | UserDefaultArgs<ExtArgs>
    doer?: boolean | Assignment$doerArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    budget?: boolean
    deadline?: boolean
    priority?: boolean
    attachments?: boolean
    additional?: boolean
    status?: boolean
    posterId?: boolean
    doerId?: boolean
    stripePaymentIntentId?: boolean
    acceptedBidId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "category" | "budget" | "deadline" | "priority" | "attachments" | "additional" | "status" | "posterId" | "doerId" | "stripePaymentIntentId" | "acceptedBidId" | "createdAt" | "updatedAt", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poster?: boolean | UserDefaultArgs<ExtArgs>
    doer?: boolean | Assignment$doerArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    bids?: boolean | Assignment$bidsArgs<ExtArgs>
    reviews?: boolean | Assignment$reviewsArgs<ExtArgs>
    messages?: boolean | Assignment$messagesArgs<ExtArgs>
    payment?: boolean | Assignment$paymentArgs<ExtArgs>
    disputes?: boolean | Assignment$disputesArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poster?: boolean | UserDefaultArgs<ExtArgs>
    doer?: boolean | Assignment$doerArgs<ExtArgs>
  }
  export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    poster?: boolean | UserDefaultArgs<ExtArgs>
    doer?: boolean | Assignment$doerArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      poster: Prisma.$UserPayload<ExtArgs>
      doer: Prisma.$UserPayload<ExtArgs> | null
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      bids: Prisma.$BidPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      payment: Prisma.$PaymentPayload<ExtArgs> | null
      disputes: Prisma.$DisputePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      category: string
      budget: number
      deadline: Date
      priority: string
      attachments: Prisma.JsonValue | null
      additional: string | null
      status: $Enums.AssignmentStatus
      posterId: string
      doerId: string | null
      stripePaymentIntentId: string | null
      acceptedBidId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {AssignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    poster<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    doer<T extends Assignment$doerArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$doerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    submissions<T extends Assignment$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    bids<T extends Assignment$bidsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$bidsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Assignment$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Assignment$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Assignment$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    disputes<T extends Assignment$disputesArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$disputesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'String'>
    readonly title: FieldRef<"Assignment", 'String'>
    readonly description: FieldRef<"Assignment", 'String'>
    readonly category: FieldRef<"Assignment", 'String'>
    readonly budget: FieldRef<"Assignment", 'Float'>
    readonly deadline: FieldRef<"Assignment", 'DateTime'>
    readonly priority: FieldRef<"Assignment", 'String'>
    readonly attachments: FieldRef<"Assignment", 'Json'>
    readonly additional: FieldRef<"Assignment", 'String'>
    readonly status: FieldRef<"Assignment", 'AssignmentStatus'>
    readonly posterId: FieldRef<"Assignment", 'String'>
    readonly doerId: FieldRef<"Assignment", 'String'>
    readonly stripePaymentIntentId: FieldRef<"Assignment", 'String'>
    readonly acceptedBidId: FieldRef<"Assignment", 'String'>
    readonly createdAt: FieldRef<"Assignment", 'DateTime'>
    readonly updatedAt: FieldRef<"Assignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment updateManyAndReturn
   */
  export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment.doer
   */
  export type Assignment$doerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Assignment.submissions
   */
  export type Assignment$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Assignment.bids
   */
  export type Assignment$bidsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    where?: BidWhereInput
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    cursor?: BidWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Assignment.reviews
   */
  export type Assignment$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Assignment.messages
   */
  export type Assignment$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Assignment.payment
   */
  export type Assignment$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Assignment.disputes
   */
  export type Assignment$disputesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    where?: DisputeWhereInput
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    cursor?: DisputeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Bid
   */

  export type AggregateBid = {
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  export type BidAvgAggregateOutputType = {
    bidAmount: number | null
  }

  export type BidSumAggregateOutputType = {
    bidAmount: number | null
  }

  export type BidMinAggregateOutputType = {
    id: string | null
    content: string | null
    bidAmount: number | null
    status: string | null
    assignmentId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BidMaxAggregateOutputType = {
    id: string | null
    content: string | null
    bidAmount: number | null
    status: string | null
    assignmentId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BidCountAggregateOutputType = {
    id: number
    content: number
    bidAmount: number
    status: number
    assignmentId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BidAvgAggregateInputType = {
    bidAmount?: true
  }

  export type BidSumAggregateInputType = {
    bidAmount?: true
  }

  export type BidMinAggregateInputType = {
    id?: true
    content?: true
    bidAmount?: true
    status?: true
    assignmentId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BidMaxAggregateInputType = {
    id?: true
    content?: true
    bidAmount?: true
    status?: true
    assignmentId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BidCountAggregateInputType = {
    id?: true
    content?: true
    bidAmount?: true
    status?: true
    assignmentId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BidAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bid to aggregate.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bids
    **/
    _count?: true | BidCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BidAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BidSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BidMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BidMaxAggregateInputType
  }

  export type GetBidAggregateType<T extends BidAggregateArgs> = {
        [P in keyof T & keyof AggregateBid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBid[P]>
      : GetScalarType<T[P], AggregateBid[P]>
  }




  export type BidGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BidWhereInput
    orderBy?: BidOrderByWithAggregationInput | BidOrderByWithAggregationInput[]
    by: BidScalarFieldEnum[] | BidScalarFieldEnum
    having?: BidScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BidCountAggregateInputType | true
    _avg?: BidAvgAggregateInputType
    _sum?: BidSumAggregateInputType
    _min?: BidMinAggregateInputType
    _max?: BidMaxAggregateInputType
  }

  export type BidGroupByOutputType = {
    id: string
    content: string
    bidAmount: number
    status: string
    assignmentId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: BidCountAggregateOutputType | null
    _avg: BidAvgAggregateOutputType | null
    _sum: BidSumAggregateOutputType | null
    _min: BidMinAggregateOutputType | null
    _max: BidMaxAggregateOutputType | null
  }

  type GetBidGroupByPayload<T extends BidGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BidGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BidGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BidGroupByOutputType[P]>
            : GetScalarType<T[P], BidGroupByOutputType[P]>
        }
      >
    >


  export type BidSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    bidAmount?: boolean
    status?: boolean
    assignmentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    bidAmount?: boolean
    status?: boolean
    assignmentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    bidAmount?: boolean
    status?: boolean
    assignmentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bid"]>

  export type BidSelectScalar = {
    id?: boolean
    content?: boolean
    bidAmount?: boolean
    status?: boolean
    assignmentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BidOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "bidAmount" | "status" | "assignmentId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["bid"]>
  export type BidInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BidIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BidIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BidPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bid"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      bidAmount: number
      status: string
      assignmentId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bid"]>
    composites: {}
  }

  type BidGetPayload<S extends boolean | null | undefined | BidDefaultArgs> = $Result.GetResult<Prisma.$BidPayload, S>

  type BidCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BidFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BidCountAggregateInputType | true
    }

  export interface BidDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bid'], meta: { name: 'Bid' } }
    /**
     * Find zero or one Bid that matches the filter.
     * @param {BidFindUniqueArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BidFindUniqueArgs>(args: SelectSubset<T, BidFindUniqueArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bid that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BidFindUniqueOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BidFindUniqueOrThrowArgs>(args: SelectSubset<T, BidFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BidFindFirstArgs>(args?: SelectSubset<T, BidFindFirstArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindFirstOrThrowArgs} args - Arguments to find a Bid
     * @example
     * // Get one Bid
     * const bid = await prisma.bid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BidFindFirstOrThrowArgs>(args?: SelectSubset<T, BidFindFirstOrThrowArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bids
     * const bids = await prisma.bid.findMany()
     * 
     * // Get first 10 Bids
     * const bids = await prisma.bid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bidWithIdOnly = await prisma.bid.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BidFindManyArgs>(args?: SelectSubset<T, BidFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bid.
     * @param {BidCreateArgs} args - Arguments to create a Bid.
     * @example
     * // Create one Bid
     * const Bid = await prisma.bid.create({
     *   data: {
     *     // ... data to create a Bid
     *   }
     * })
     * 
     */
    create<T extends BidCreateArgs>(args: SelectSubset<T, BidCreateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bids.
     * @param {BidCreateManyArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BidCreateManyArgs>(args?: SelectSubset<T, BidCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bids and returns the data saved in the database.
     * @param {BidCreateManyAndReturnArgs} args - Arguments to create many Bids.
     * @example
     * // Create many Bids
     * const bid = await prisma.bid.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BidCreateManyAndReturnArgs>(args?: SelectSubset<T, BidCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bid.
     * @param {BidDeleteArgs} args - Arguments to delete one Bid.
     * @example
     * // Delete one Bid
     * const Bid = await prisma.bid.delete({
     *   where: {
     *     // ... filter to delete one Bid
     *   }
     * })
     * 
     */
    delete<T extends BidDeleteArgs>(args: SelectSubset<T, BidDeleteArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bid.
     * @param {BidUpdateArgs} args - Arguments to update one Bid.
     * @example
     * // Update one Bid
     * const bid = await prisma.bid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BidUpdateArgs>(args: SelectSubset<T, BidUpdateArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bids.
     * @param {BidDeleteManyArgs} args - Arguments to filter Bids to delete.
     * @example
     * // Delete a few Bids
     * const { count } = await prisma.bid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BidDeleteManyArgs>(args?: SelectSubset<T, BidDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BidUpdateManyArgs>(args: SelectSubset<T, BidUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bids and returns the data updated in the database.
     * @param {BidUpdateManyAndReturnArgs} args - Arguments to update many Bids.
     * @example
     * // Update many Bids
     * const bid = await prisma.bid.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bids and only return the `id`
     * const bidWithIdOnly = await prisma.bid.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BidUpdateManyAndReturnArgs>(args: SelectSubset<T, BidUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bid.
     * @param {BidUpsertArgs} args - Arguments to update or create a Bid.
     * @example
     * // Update or create a Bid
     * const bid = await prisma.bid.upsert({
     *   create: {
     *     // ... data to create a Bid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bid we want to update
     *   }
     * })
     */
    upsert<T extends BidUpsertArgs>(args: SelectSubset<T, BidUpsertArgs<ExtArgs>>): Prisma__BidClient<$Result.GetResult<Prisma.$BidPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidCountArgs} args - Arguments to filter Bids to count.
     * @example
     * // Count the number of Bids
     * const count = await prisma.bid.count({
     *   where: {
     *     // ... the filter for the Bids we want to count
     *   }
     * })
    **/
    count<T extends BidCountArgs>(
      args?: Subset<T, BidCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BidCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BidAggregateArgs>(args: Subset<T, BidAggregateArgs>): Prisma.PrismaPromise<GetBidAggregateType<T>>

    /**
     * Group by Bid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BidGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BidGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BidGroupByArgs['orderBy'] }
        : { orderBy?: BidGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BidGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBidGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bid model
   */
  readonly fields: BidFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BidClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bid model
   */
  interface BidFieldRefs {
    readonly id: FieldRef<"Bid", 'String'>
    readonly content: FieldRef<"Bid", 'String'>
    readonly bidAmount: FieldRef<"Bid", 'Float'>
    readonly status: FieldRef<"Bid", 'String'>
    readonly assignmentId: FieldRef<"Bid", 'String'>
    readonly userId: FieldRef<"Bid", 'String'>
    readonly createdAt: FieldRef<"Bid", 'DateTime'>
    readonly updatedAt: FieldRef<"Bid", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bid findUnique
   */
  export type BidFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findUniqueOrThrow
   */
  export type BidFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid findFirst
   */
  export type BidFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findFirstOrThrow
   */
  export type BidFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bid to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bids.
     */
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid findMany
   */
  export type BidFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter, which Bids to fetch.
     */
    where?: BidWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bids to fetch.
     */
    orderBy?: BidOrderByWithRelationInput | BidOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bids.
     */
    cursor?: BidWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bids.
     */
    skip?: number
    distinct?: BidScalarFieldEnum | BidScalarFieldEnum[]
  }

  /**
   * Bid create
   */
  export type BidCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to create a Bid.
     */
    data: XOR<BidCreateInput, BidUncheckedCreateInput>
  }

  /**
   * Bid createMany
   */
  export type BidCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bid createManyAndReturn
   */
  export type BidCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * The data used to create many Bids.
     */
    data: BidCreateManyInput | BidCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid update
   */
  export type BidUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The data needed to update a Bid.
     */
    data: XOR<BidUpdateInput, BidUncheckedUpdateInput>
    /**
     * Choose, which Bid to update.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid updateMany
   */
  export type BidUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to update.
     */
    limit?: number
  }

  /**
   * Bid updateManyAndReturn
   */
  export type BidUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * The data used to update Bids.
     */
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyInput>
    /**
     * Filter which Bids to update
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bid upsert
   */
  export type BidUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * The filter to search for the Bid to update in case it exists.
     */
    where: BidWhereUniqueInput
    /**
     * In case the Bid found by the `where` argument doesn't exist, create a new Bid with this data.
     */
    create: XOR<BidCreateInput, BidUncheckedCreateInput>
    /**
     * In case the Bid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BidUpdateInput, BidUncheckedUpdateInput>
  }

  /**
   * Bid delete
   */
  export type BidDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
    /**
     * Filter which Bid to delete.
     */
    where: BidWhereUniqueInput
  }

  /**
   * Bid deleteMany
   */
  export type BidDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bids to delete
     */
    where?: BidWhereInput
    /**
     * Limit how many Bids to delete.
     */
    limit?: number
  }

  /**
   * Bid without action
   */
  export type BidDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bid
     */
    select?: BidSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bid
     */
    omit?: BidOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BidInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    content: string | null
    status: string | null
    feedback: string | null
    assignmentId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    content: string | null
    status: string | null
    feedback: string | null
    assignmentId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    content: number
    attachments: number
    status: number
    feedback: number
    assignmentId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    content?: true
    status?: true
    feedback?: true
    assignmentId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    content?: true
    status?: true
    feedback?: true
    assignmentId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    content?: true
    attachments?: true
    status?: true
    feedback?: true
    assignmentId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    content: string
    attachments: JsonValue | null
    status: string
    feedback: string | null
    assignmentId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    attachments?: boolean
    status?: boolean
    feedback?: boolean
    assignmentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    attachments?: boolean
    status?: boolean
    feedback?: boolean
    assignmentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    attachments?: boolean
    status?: boolean
    feedback?: boolean
    assignmentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    content?: boolean
    attachments?: boolean
    status?: boolean
    feedback?: boolean
    assignmentId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "attachments" | "status" | "feedback" | "assignmentId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      attachments: Prisma.JsonValue | null
      status: string
      feedback: string | null
      assignmentId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly content: FieldRef<"Submission", 'String'>
    readonly attachments: FieldRef<"Submission", 'Json'>
    readonly status: FieldRef<"Submission", 'String'>
    readonly feedback: FieldRef<"Submission", 'String'>
    readonly assignmentId: FieldRef<"Submission", 'String'>
    readonly userId: FieldRef<"Submission", 'String'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    assignmentId: string | null
    reviewerId: string | null
    receiverId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    assignmentId: string | null
    reviewerId: string | null
    receiverId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    assignmentId: number
    reviewerId: number
    receiverId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    assignmentId?: true
    reviewerId?: true
    receiverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    assignmentId?: true
    reviewerId?: true
    receiverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    assignmentId?: true
    reviewerId?: true
    receiverId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    rating: number
    comment: string | null
    assignmentId: string
    reviewerId: string
    receiverId: string
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    assignmentId?: boolean
    reviewerId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    assignmentId?: boolean
    reviewerId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    assignmentId?: boolean
    reviewerId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    assignmentId?: boolean
    reviewerId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "assignmentId" | "reviewerId" | "receiverId" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    reviewer?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
      reviewer: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      comment: string | null
      assignmentId: string
      reviewerId: string
      receiverId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Float'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly assignmentId: FieldRef<"Review", 'String'>
    readonly reviewerId: FieldRef<"Review", 'String'>
    readonly receiverId: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    content: string | null
    isRead: boolean | null
    assignmentId: string | null
    senderId: string | null
    receiverId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    content: string | null
    isRead: boolean | null
    assignmentId: string | null
    senderId: string | null
    receiverId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    isRead: number
    fileUrls: number
    assignmentId: number
    senderId: number
    receiverId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    isRead?: true
    assignmentId?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    isRead?: true
    assignmentId?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    isRead?: true
    fileUrls?: true
    assignmentId?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    content: string
    isRead: boolean
    fileUrls: JsonValue | null
    assignmentId: string | null
    senderId: string
    receiverId: string
    createdAt: Date
    updatedAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isRead?: boolean
    fileUrls?: boolean
    assignmentId?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | Message$assignmentArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isRead?: boolean
    fileUrls?: boolean
    assignmentId?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | Message$assignmentArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    isRead?: boolean
    fileUrls?: boolean
    assignmentId?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | Message$assignmentArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    isRead?: boolean
    fileUrls?: boolean
    assignmentId?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "isRead" | "fileUrls" | "assignmentId" | "senderId" | "receiverId" | "createdAt" | "updatedAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | Message$assignmentArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | Message$assignmentArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | Message$assignmentArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs> | null
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      content: string
      isRead: boolean
      fileUrls: Prisma.JsonValue | null
      assignmentId: string | null
      senderId: string
      receiverId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends Message$assignmentArgs<ExtArgs> = {}>(args?: Subset<T, Message$assignmentArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly fileUrls: FieldRef<"Message", 'Json'>
    readonly assignmentId: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly receiverId: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message.assignment
   */
  export type Message$assignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    stripePaymentId: string | null
    stripeRefundId: string | null
    assignmentId: string | null
    senderId: string | null
    receiverId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    status: $Enums.PaymentStatus | null
    stripePaymentId: string | null
    stripeRefundId: string | null
    assignmentId: string | null
    senderId: string | null
    receiverId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    amount: number
    status: number
    stripePaymentId: number
    stripeRefundId: number
    assignmentId: number
    senderId: number
    receiverId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    stripePaymentId?: true
    stripeRefundId?: true
    assignmentId?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    stripePaymentId?: true
    stripeRefundId?: true
    assignmentId?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    stripePaymentId?: true
    stripeRefundId?: true
    assignmentId?: true
    senderId?: true
    receiverId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    amount: number
    status: $Enums.PaymentStatus
    stripePaymentId: string | null
    stripeRefundId: string | null
    assignmentId: string
    senderId: string
    receiverId: string
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    stripePaymentId?: boolean
    stripeRefundId?: boolean
    assignmentId?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    dispute?: boolean | Payment$disputeArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    stripePaymentId?: boolean
    stripeRefundId?: boolean
    assignmentId?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    stripePaymentId?: boolean
    stripeRefundId?: boolean
    assignmentId?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    amount?: boolean
    status?: boolean
    stripePaymentId?: boolean
    stripeRefundId?: boolean
    assignmentId?: boolean
    senderId?: boolean
    receiverId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "status" | "stripePaymentId" | "stripeRefundId" | "assignmentId" | "senderId" | "receiverId" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
    dispute?: boolean | Payment$disputeArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    sender?: boolean | UserDefaultArgs<ExtArgs>
    receiver?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
      sender: Prisma.$UserPayload<ExtArgs>
      receiver: Prisma.$UserPayload<ExtArgs>
      dispute: Prisma.$DisputePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      status: $Enums.PaymentStatus
      stripePaymentId: string | null
      stripeRefundId: string | null
      assignmentId: string
      senderId: string
      receiverId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sender<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    dispute<T extends Payment$disputeArgs<ExtArgs> = {}>(args?: Subset<T, Payment$disputeArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly stripePaymentId: FieldRef<"Payment", 'String'>
    readonly stripeRefundId: FieldRef<"Payment", 'String'>
    readonly assignmentId: FieldRef<"Payment", 'String'>
    readonly senderId: FieldRef<"Payment", 'String'>
    readonly receiverId: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.dispute
   */
  export type Payment$disputeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    where?: DisputeWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model Dispute
   */

  export type AggregateDispute = {
    _count: DisputeCountAggregateOutputType | null
    _min: DisputeMinAggregateOutputType | null
    _max: DisputeMaxAggregateOutputType | null
  }

  export type DisputeMinAggregateOutputType = {
    id: string | null
    reason: string | null
    status: $Enums.DisputeStatus | null
    resolution: string | null
    assignmentId: string | null
    paymentId: string | null
    initiatorId: string | null
    resolvedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisputeMaxAggregateOutputType = {
    id: string | null
    reason: string | null
    status: $Enums.DisputeStatus | null
    resolution: string | null
    assignmentId: string | null
    paymentId: string | null
    initiatorId: string | null
    resolvedById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DisputeCountAggregateOutputType = {
    id: number
    reason: number
    evidence: number
    status: number
    resolution: number
    assignmentId: number
    paymentId: number
    initiatorId: number
    resolvedById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DisputeMinAggregateInputType = {
    id?: true
    reason?: true
    status?: true
    resolution?: true
    assignmentId?: true
    paymentId?: true
    initiatorId?: true
    resolvedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisputeMaxAggregateInputType = {
    id?: true
    reason?: true
    status?: true
    resolution?: true
    assignmentId?: true
    paymentId?: true
    initiatorId?: true
    resolvedById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DisputeCountAggregateInputType = {
    id?: true
    reason?: true
    evidence?: true
    status?: true
    resolution?: true
    assignmentId?: true
    paymentId?: true
    initiatorId?: true
    resolvedById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DisputeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dispute to aggregate.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Disputes
    **/
    _count?: true | DisputeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisputeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisputeMaxAggregateInputType
  }

  export type GetDisputeAggregateType<T extends DisputeAggregateArgs> = {
        [P in keyof T & keyof AggregateDispute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDispute[P]>
      : GetScalarType<T[P], AggregateDispute[P]>
  }




  export type DisputeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DisputeWhereInput
    orderBy?: DisputeOrderByWithAggregationInput | DisputeOrderByWithAggregationInput[]
    by: DisputeScalarFieldEnum[] | DisputeScalarFieldEnum
    having?: DisputeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisputeCountAggregateInputType | true
    _min?: DisputeMinAggregateInputType
    _max?: DisputeMaxAggregateInputType
  }

  export type DisputeGroupByOutputType = {
    id: string
    reason: string
    evidence: JsonValue | null
    status: $Enums.DisputeStatus
    resolution: string | null
    assignmentId: string
    paymentId: string
    initiatorId: string
    resolvedById: string | null
    createdAt: Date
    updatedAt: Date
    _count: DisputeCountAggregateOutputType | null
    _min: DisputeMinAggregateOutputType | null
    _max: DisputeMaxAggregateOutputType | null
  }

  type GetDisputeGroupByPayload<T extends DisputeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DisputeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisputeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisputeGroupByOutputType[P]>
            : GetScalarType<T[P], DisputeGroupByOutputType[P]>
        }
      >
    >


  export type DisputeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    evidence?: boolean
    status?: boolean
    resolution?: boolean
    assignmentId?: boolean
    paymentId?: boolean
    initiatorId?: boolean
    resolvedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    resolvedBy?: boolean | Dispute$resolvedByArgs<ExtArgs>
  }, ExtArgs["result"]["dispute"]>

  export type DisputeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    evidence?: boolean
    status?: boolean
    resolution?: boolean
    assignmentId?: boolean
    paymentId?: boolean
    initiatorId?: boolean
    resolvedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    resolvedBy?: boolean | Dispute$resolvedByArgs<ExtArgs>
  }, ExtArgs["result"]["dispute"]>

  export type DisputeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    evidence?: boolean
    status?: boolean
    resolution?: boolean
    assignmentId?: boolean
    paymentId?: boolean
    initiatorId?: boolean
    resolvedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    resolvedBy?: boolean | Dispute$resolvedByArgs<ExtArgs>
  }, ExtArgs["result"]["dispute"]>

  export type DisputeSelectScalar = {
    id?: boolean
    reason?: boolean
    evidence?: boolean
    status?: boolean
    resolution?: boolean
    assignmentId?: boolean
    paymentId?: boolean
    initiatorId?: boolean
    resolvedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DisputeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reason" | "evidence" | "status" | "resolution" | "assignmentId" | "paymentId" | "initiatorId" | "resolvedById" | "createdAt" | "updatedAt", ExtArgs["result"]["dispute"]>
  export type DisputeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    resolvedBy?: boolean | Dispute$resolvedByArgs<ExtArgs>
  }
  export type DisputeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    resolvedBy?: boolean | Dispute$resolvedByArgs<ExtArgs>
  }
  export type DisputeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    payment?: boolean | PaymentDefaultArgs<ExtArgs>
    initiator?: boolean | UserDefaultArgs<ExtArgs>
    resolvedBy?: boolean | Dispute$resolvedByArgs<ExtArgs>
  }

  export type $DisputePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dispute"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs>
      initiator: Prisma.$UserPayload<ExtArgs>
      resolvedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reason: string
      evidence: Prisma.JsonValue | null
      status: $Enums.DisputeStatus
      resolution: string | null
      assignmentId: string
      paymentId: string
      initiatorId: string
      resolvedById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["dispute"]>
    composites: {}
  }

  type DisputeGetPayload<S extends boolean | null | undefined | DisputeDefaultArgs> = $Result.GetResult<Prisma.$DisputePayload, S>

  type DisputeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DisputeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DisputeCountAggregateInputType | true
    }

  export interface DisputeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dispute'], meta: { name: 'Dispute' } }
    /**
     * Find zero or one Dispute that matches the filter.
     * @param {DisputeFindUniqueArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DisputeFindUniqueArgs>(args: SelectSubset<T, DisputeFindUniqueArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dispute that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DisputeFindUniqueOrThrowArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DisputeFindUniqueOrThrowArgs>(args: SelectSubset<T, DisputeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispute that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeFindFirstArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DisputeFindFirstArgs>(args?: SelectSubset<T, DisputeFindFirstArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dispute that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeFindFirstOrThrowArgs} args - Arguments to find a Dispute
     * @example
     * // Get one Dispute
     * const dispute = await prisma.dispute.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DisputeFindFirstOrThrowArgs>(args?: SelectSubset<T, DisputeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Disputes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disputes
     * const disputes = await prisma.dispute.findMany()
     * 
     * // Get first 10 Disputes
     * const disputes = await prisma.dispute.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const disputeWithIdOnly = await prisma.dispute.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DisputeFindManyArgs>(args?: SelectSubset<T, DisputeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dispute.
     * @param {DisputeCreateArgs} args - Arguments to create a Dispute.
     * @example
     * // Create one Dispute
     * const Dispute = await prisma.dispute.create({
     *   data: {
     *     // ... data to create a Dispute
     *   }
     * })
     * 
     */
    create<T extends DisputeCreateArgs>(args: SelectSubset<T, DisputeCreateArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Disputes.
     * @param {DisputeCreateManyArgs} args - Arguments to create many Disputes.
     * @example
     * // Create many Disputes
     * const dispute = await prisma.dispute.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DisputeCreateManyArgs>(args?: SelectSubset<T, DisputeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Disputes and returns the data saved in the database.
     * @param {DisputeCreateManyAndReturnArgs} args - Arguments to create many Disputes.
     * @example
     * // Create many Disputes
     * const dispute = await prisma.dispute.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Disputes and only return the `id`
     * const disputeWithIdOnly = await prisma.dispute.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DisputeCreateManyAndReturnArgs>(args?: SelectSubset<T, DisputeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dispute.
     * @param {DisputeDeleteArgs} args - Arguments to delete one Dispute.
     * @example
     * // Delete one Dispute
     * const Dispute = await prisma.dispute.delete({
     *   where: {
     *     // ... filter to delete one Dispute
     *   }
     * })
     * 
     */
    delete<T extends DisputeDeleteArgs>(args: SelectSubset<T, DisputeDeleteArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dispute.
     * @param {DisputeUpdateArgs} args - Arguments to update one Dispute.
     * @example
     * // Update one Dispute
     * const dispute = await prisma.dispute.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DisputeUpdateArgs>(args: SelectSubset<T, DisputeUpdateArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Disputes.
     * @param {DisputeDeleteManyArgs} args - Arguments to filter Disputes to delete.
     * @example
     * // Delete a few Disputes
     * const { count } = await prisma.dispute.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DisputeDeleteManyArgs>(args?: SelectSubset<T, DisputeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disputes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disputes
     * const dispute = await prisma.dispute.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DisputeUpdateManyArgs>(args: SelectSubset<T, DisputeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disputes and returns the data updated in the database.
     * @param {DisputeUpdateManyAndReturnArgs} args - Arguments to update many Disputes.
     * @example
     * // Update many Disputes
     * const dispute = await prisma.dispute.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Disputes and only return the `id`
     * const disputeWithIdOnly = await prisma.dispute.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DisputeUpdateManyAndReturnArgs>(args: SelectSubset<T, DisputeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dispute.
     * @param {DisputeUpsertArgs} args - Arguments to update or create a Dispute.
     * @example
     * // Update or create a Dispute
     * const dispute = await prisma.dispute.upsert({
     *   create: {
     *     // ... data to create a Dispute
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dispute we want to update
     *   }
     * })
     */
    upsert<T extends DisputeUpsertArgs>(args: SelectSubset<T, DisputeUpsertArgs<ExtArgs>>): Prisma__DisputeClient<$Result.GetResult<Prisma.$DisputePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Disputes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeCountArgs} args - Arguments to filter Disputes to count.
     * @example
     * // Count the number of Disputes
     * const count = await prisma.dispute.count({
     *   where: {
     *     // ... the filter for the Disputes we want to count
     *   }
     * })
    **/
    count<T extends DisputeCountArgs>(
      args?: Subset<T, DisputeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisputeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dispute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisputeAggregateArgs>(args: Subset<T, DisputeAggregateArgs>): Prisma.PrismaPromise<GetDisputeAggregateType<T>>

    /**
     * Group by Dispute.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisputeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisputeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisputeGroupByArgs['orderBy'] }
        : { orderBy?: DisputeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisputeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisputeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dispute model
   */
  readonly fields: DisputeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dispute.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DisputeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends PaymentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaymentDefaultArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    initiator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    resolvedBy<T extends Dispute$resolvedByArgs<ExtArgs> = {}>(args?: Subset<T, Dispute$resolvedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dispute model
   */
  interface DisputeFieldRefs {
    readonly id: FieldRef<"Dispute", 'String'>
    readonly reason: FieldRef<"Dispute", 'String'>
    readonly evidence: FieldRef<"Dispute", 'Json'>
    readonly status: FieldRef<"Dispute", 'DisputeStatus'>
    readonly resolution: FieldRef<"Dispute", 'String'>
    readonly assignmentId: FieldRef<"Dispute", 'String'>
    readonly paymentId: FieldRef<"Dispute", 'String'>
    readonly initiatorId: FieldRef<"Dispute", 'String'>
    readonly resolvedById: FieldRef<"Dispute", 'String'>
    readonly createdAt: FieldRef<"Dispute", 'DateTime'>
    readonly updatedAt: FieldRef<"Dispute", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Dispute findUnique
   */
  export type DisputeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute findUniqueOrThrow
   */
  export type DisputeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute findFirst
   */
  export type DisputeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disputes.
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disputes.
     */
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Dispute findFirstOrThrow
   */
  export type DisputeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Dispute to fetch.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Disputes.
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Disputes.
     */
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Dispute findMany
   */
  export type DisputeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter, which Disputes to fetch.
     */
    where?: DisputeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Disputes to fetch.
     */
    orderBy?: DisputeOrderByWithRelationInput | DisputeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Disputes.
     */
    cursor?: DisputeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Disputes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Disputes.
     */
    skip?: number
    distinct?: DisputeScalarFieldEnum | DisputeScalarFieldEnum[]
  }

  /**
   * Dispute create
   */
  export type DisputeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * The data needed to create a Dispute.
     */
    data: XOR<DisputeCreateInput, DisputeUncheckedCreateInput>
  }

  /**
   * Dispute createMany
   */
  export type DisputeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Disputes.
     */
    data: DisputeCreateManyInput | DisputeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dispute createManyAndReturn
   */
  export type DisputeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * The data used to create many Disputes.
     */
    data: DisputeCreateManyInput | DisputeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispute update
   */
  export type DisputeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * The data needed to update a Dispute.
     */
    data: XOR<DisputeUpdateInput, DisputeUncheckedUpdateInput>
    /**
     * Choose, which Dispute to update.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute updateMany
   */
  export type DisputeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Disputes.
     */
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyInput>
    /**
     * Filter which Disputes to update
     */
    where?: DisputeWhereInput
    /**
     * Limit how many Disputes to update.
     */
    limit?: number
  }

  /**
   * Dispute updateManyAndReturn
   */
  export type DisputeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * The data used to update Disputes.
     */
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyInput>
    /**
     * Filter which Disputes to update
     */
    where?: DisputeWhereInput
    /**
     * Limit how many Disputes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dispute upsert
   */
  export type DisputeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * The filter to search for the Dispute to update in case it exists.
     */
    where: DisputeWhereUniqueInput
    /**
     * In case the Dispute found by the `where` argument doesn't exist, create a new Dispute with this data.
     */
    create: XOR<DisputeCreateInput, DisputeUncheckedCreateInput>
    /**
     * In case the Dispute was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DisputeUpdateInput, DisputeUncheckedUpdateInput>
  }

  /**
   * Dispute delete
   */
  export type DisputeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
    /**
     * Filter which Dispute to delete.
     */
    where: DisputeWhereUniqueInput
  }

  /**
   * Dispute deleteMany
   */
  export type DisputeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Disputes to delete
     */
    where?: DisputeWhereInput
    /**
     * Limit how many Disputes to delete.
     */
    limit?: number
  }

  /**
   * Dispute.resolvedBy
   */
  export type Dispute$resolvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Dispute without action
   */
  export type DisputeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dispute
     */
    select?: DisputeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dispute
     */
    omit?: DisputeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DisputeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    image: 'image',
    role: 'role',
    bio: 'bio',
    skills: 'skills',
    rating: 'rating',
    citizenshipPhotos: 'citizenshipPhotos',
    verificationStatus: 'verificationStatus',
    rejectionReason: 'rejectionReason',
    accountBalance: 'accountBalance',
    stripeConnectAccountId: 'stripeConnectAccountId',
    stripeAccountVerified: 'stripeAccountVerified',
    clerkId: 'clerkId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    category: 'category',
    budget: 'budget',
    deadline: 'deadline',
    priority: 'priority',
    attachments: 'attachments',
    additional: 'additional',
    status: 'status',
    posterId: 'posterId',
    doerId: 'doerId',
    stripePaymentIntentId: 'stripePaymentIntentId',
    acceptedBidId: 'acceptedBidId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const BidScalarFieldEnum: {
    id: 'id',
    content: 'content',
    bidAmount: 'bidAmount',
    status: 'status',
    assignmentId: 'assignmentId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BidScalarFieldEnum = (typeof BidScalarFieldEnum)[keyof typeof BidScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    content: 'content',
    attachments: 'attachments',
    status: 'status',
    feedback: 'feedback',
    assignmentId: 'assignmentId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    assignmentId: 'assignmentId',
    reviewerId: 'reviewerId',
    receiverId: 'receiverId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    isRead: 'isRead',
    fileUrls: 'fileUrls',
    assignmentId: 'assignmentId',
    senderId: 'senderId',
    receiverId: 'receiverId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    status: 'status',
    stripePaymentId: 'stripePaymentId',
    stripeRefundId: 'stripeRefundId',
    assignmentId: 'assignmentId',
    senderId: 'senderId',
    receiverId: 'receiverId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const DisputeScalarFieldEnum: {
    id: 'id',
    reason: 'reason',
    evidence: 'evidence',
    status: 'status',
    resolution: 'resolution',
    assignmentId: 'assignmentId',
    paymentId: 'paymentId',
    initiatorId: 'initiatorId',
    resolvedById: 'resolvedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DisputeScalarFieldEnum = (typeof DisputeScalarFieldEnum)[keyof typeof DisputeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AssignmentStatus'
   */
  export type EnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus'>
    


  /**
   * Reference to a field of type 'AssignmentStatus[]'
   */
  export type ListEnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'DisputeStatus'
   */
  export type EnumDisputeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisputeStatus'>
    


  /**
   * Reference to a field of type 'DisputeStatus[]'
   */
  export type ListEnumDisputeStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DisputeStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    bio?: StringNullableFilter<"User"> | string | null
    skills?: StringNullableFilter<"User"> | string | null
    rating?: FloatNullableFilter<"User"> | number | null
    citizenshipPhotos?: JsonNullableFilter<"User">
    verificationStatus?: StringNullableFilter<"User"> | string | null
    rejectionReason?: StringNullableFilter<"User"> | string | null
    accountBalance?: FloatFilter<"User"> | number
    stripeConnectAccountId?: StringNullableFilter<"User"> | string | null
    stripeAccountVerified?: BoolNullableFilter<"User"> | boolean | null
    clerkId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    postedAssignments?: AssignmentListRelationFilter
    acceptedAssignments?: AssignmentListRelationFilter
    submissions?: SubmissionListRelationFilter
    bids?: BidListRelationFilter
    reviews?: ReviewListRelationFilter
    receivedReviews?: ReviewListRelationFilter
    messages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    sentPayments?: PaymentListRelationFilter
    receivedPayments?: PaymentListRelationFilter
    disputes?: DisputeListRelationFilter
    resolvedDisputes?: DisputeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    citizenshipPhotos?: SortOrderInput | SortOrder
    verificationStatus?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    accountBalance?: SortOrder
    stripeConnectAccountId?: SortOrderInput | SortOrder
    stripeAccountVerified?: SortOrderInput | SortOrder
    clerkId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    postedAssignments?: AssignmentOrderByRelationAggregateInput
    acceptedAssignments?: AssignmentOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
    bids?: BidOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    receivedReviews?: ReviewOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
    sentPayments?: PaymentOrderByRelationAggregateInput
    receivedPayments?: PaymentOrderByRelationAggregateInput
    disputes?: DisputeOrderByRelationAggregateInput
    resolvedDisputes?: DisputeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    bio?: StringNullableFilter<"User"> | string | null
    skills?: StringNullableFilter<"User"> | string | null
    rating?: FloatNullableFilter<"User"> | number | null
    citizenshipPhotos?: JsonNullableFilter<"User">
    verificationStatus?: StringNullableFilter<"User"> | string | null
    rejectionReason?: StringNullableFilter<"User"> | string | null
    accountBalance?: FloatFilter<"User"> | number
    stripeConnectAccountId?: StringNullableFilter<"User"> | string | null
    stripeAccountVerified?: BoolNullableFilter<"User"> | boolean | null
    clerkId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    postedAssignments?: AssignmentListRelationFilter
    acceptedAssignments?: AssignmentListRelationFilter
    submissions?: SubmissionListRelationFilter
    bids?: BidListRelationFilter
    reviews?: ReviewListRelationFilter
    receivedReviews?: ReviewListRelationFilter
    messages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
    sentPayments?: PaymentListRelationFilter
    receivedPayments?: PaymentListRelationFilter
    disputes?: DisputeListRelationFilter
    resolvedDisputes?: DisputeListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    role?: SortOrder
    bio?: SortOrderInput | SortOrder
    skills?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    citizenshipPhotos?: SortOrderInput | SortOrder
    verificationStatus?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    accountBalance?: SortOrder
    stripeConnectAccountId?: SortOrderInput | SortOrder
    stripeAccountVerified?: SortOrderInput | SortOrder
    clerkId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    skills?: StringNullableWithAggregatesFilter<"User"> | string | null
    rating?: FloatNullableWithAggregatesFilter<"User"> | number | null
    citizenshipPhotos?: JsonNullableWithAggregatesFilter<"User">
    verificationStatus?: StringNullableWithAggregatesFilter<"User"> | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"User"> | string | null
    accountBalance?: FloatWithAggregatesFilter<"User"> | number
    stripeConnectAccountId?: StringNullableWithAggregatesFilter<"User"> | string | null
    stripeAccountVerified?: BoolNullableWithAggregatesFilter<"User"> | boolean | null
    clerkId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringFilter<"Assignment"> | string
    category?: StringFilter<"Assignment"> | string
    budget?: FloatFilter<"Assignment"> | number
    deadline?: DateTimeFilter<"Assignment"> | Date | string
    priority?: StringFilter<"Assignment"> | string
    attachments?: JsonNullableFilter<"Assignment">
    additional?: StringNullableFilter<"Assignment"> | string | null
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    posterId?: StringFilter<"Assignment"> | string
    doerId?: StringNullableFilter<"Assignment"> | string | null
    stripePaymentIntentId?: StringNullableFilter<"Assignment"> | string | null
    acceptedBidId?: StringNullableFilter<"Assignment"> | string | null
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
    poster?: XOR<UserScalarRelationFilter, UserWhereInput>
    doer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    submissions?: SubmissionListRelationFilter
    bids?: BidListRelationFilter
    reviews?: ReviewListRelationFilter
    messages?: MessageListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    disputes?: DisputeListRelationFilter
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    budget?: SortOrder
    deadline?: SortOrder
    priority?: SortOrder
    attachments?: SortOrderInput | SortOrder
    additional?: SortOrderInput | SortOrder
    status?: SortOrder
    posterId?: SortOrder
    doerId?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    acceptedBidId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    poster?: UserOrderByWithRelationInput
    doer?: UserOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
    bids?: BidOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    payment?: PaymentOrderByWithRelationInput
    disputes?: DisputeOrderByRelationAggregateInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    title?: StringFilter<"Assignment"> | string
    description?: StringFilter<"Assignment"> | string
    category?: StringFilter<"Assignment"> | string
    budget?: FloatFilter<"Assignment"> | number
    deadline?: DateTimeFilter<"Assignment"> | Date | string
    priority?: StringFilter<"Assignment"> | string
    attachments?: JsonNullableFilter<"Assignment">
    additional?: StringNullableFilter<"Assignment"> | string | null
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    posterId?: StringFilter<"Assignment"> | string
    doerId?: StringNullableFilter<"Assignment"> | string | null
    stripePaymentIntentId?: StringNullableFilter<"Assignment"> | string | null
    acceptedBidId?: StringNullableFilter<"Assignment"> | string | null
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
    poster?: XOR<UserScalarRelationFilter, UserWhereInput>
    doer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    submissions?: SubmissionListRelationFilter
    bids?: BidListRelationFilter
    reviews?: ReviewListRelationFilter
    messages?: MessageListRelationFilter
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    disputes?: DisputeListRelationFilter
  }, "id">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    budget?: SortOrder
    deadline?: SortOrder
    priority?: SortOrder
    attachments?: SortOrderInput | SortOrder
    additional?: SortOrderInput | SortOrder
    status?: SortOrder
    posterId?: SortOrder
    doerId?: SortOrderInput | SortOrder
    stripePaymentIntentId?: SortOrderInput | SortOrder
    acceptedBidId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _avg?: AssignmentAvgOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
    _sum?: AssignmentSumOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Assignment"> | string
    title?: StringWithAggregatesFilter<"Assignment"> | string
    description?: StringWithAggregatesFilter<"Assignment"> | string
    category?: StringWithAggregatesFilter<"Assignment"> | string
    budget?: FloatWithAggregatesFilter<"Assignment"> | number
    deadline?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    priority?: StringWithAggregatesFilter<"Assignment"> | string
    attachments?: JsonNullableWithAggregatesFilter<"Assignment">
    additional?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    status?: EnumAssignmentStatusWithAggregatesFilter<"Assignment"> | $Enums.AssignmentStatus
    posterId?: StringWithAggregatesFilter<"Assignment"> | string
    doerId?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    stripePaymentIntentId?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    acceptedBidId?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
  }

  export type BidWhereInput = {
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    id?: StringFilter<"Bid"> | string
    content?: StringFilter<"Bid"> | string
    bidAmount?: FloatFilter<"Bid"> | number
    status?: StringFilter<"Bid"> | string
    assignmentId?: StringFilter<"Bid"> | string
    userId?: StringFilter<"Bid"> | string
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    updatedAt?: DateTimeFilter<"Bid"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BidOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    bidAmount?: SortOrder
    status?: SortOrder
    assignmentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BidWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BidWhereInput | BidWhereInput[]
    OR?: BidWhereInput[]
    NOT?: BidWhereInput | BidWhereInput[]
    content?: StringFilter<"Bid"> | string
    bidAmount?: FloatFilter<"Bid"> | number
    status?: StringFilter<"Bid"> | string
    assignmentId?: StringFilter<"Bid"> | string
    userId?: StringFilter<"Bid"> | string
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    updatedAt?: DateTimeFilter<"Bid"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type BidOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    bidAmount?: SortOrder
    status?: SortOrder
    assignmentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BidCountOrderByAggregateInput
    _avg?: BidAvgOrderByAggregateInput
    _max?: BidMaxOrderByAggregateInput
    _min?: BidMinOrderByAggregateInput
    _sum?: BidSumOrderByAggregateInput
  }

  export type BidScalarWhereWithAggregatesInput = {
    AND?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    OR?: BidScalarWhereWithAggregatesInput[]
    NOT?: BidScalarWhereWithAggregatesInput | BidScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Bid"> | string
    content?: StringWithAggregatesFilter<"Bid"> | string
    bidAmount?: FloatWithAggregatesFilter<"Bid"> | number
    status?: StringWithAggregatesFilter<"Bid"> | string
    assignmentId?: StringWithAggregatesFilter<"Bid"> | string
    userId?: StringWithAggregatesFilter<"Bid"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Bid"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bid"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    content?: StringFilter<"Submission"> | string
    attachments?: JsonNullableFilter<"Submission">
    status?: StringFilter<"Submission"> | string
    feedback?: StringNullableFilter<"Submission"> | string | null
    assignmentId?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    attachments?: SortOrderInput | SortOrder
    status?: SortOrder
    feedback?: SortOrderInput | SortOrder
    assignmentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    content?: StringFilter<"Submission"> | string
    attachments?: JsonNullableFilter<"Submission">
    status?: StringFilter<"Submission"> | string
    feedback?: StringNullableFilter<"Submission"> | string | null
    assignmentId?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    attachments?: SortOrderInput | SortOrder
    status?: SortOrder
    feedback?: SortOrderInput | SortOrder
    assignmentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    content?: StringWithAggregatesFilter<"Submission"> | string
    attachments?: JsonNullableWithAggregatesFilter<"Submission">
    status?: StringWithAggregatesFilter<"Submission"> | string
    feedback?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    assignmentId?: StringWithAggregatesFilter<"Submission"> | string
    userId?: StringWithAggregatesFilter<"Submission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    assignmentId?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    receiverId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    assignmentId?: SortOrder
    reviewerId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: FloatFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    assignmentId?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    receiverId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    reviewer?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    assignmentId?: SortOrder
    reviewerId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    rating?: FloatWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    assignmentId?: StringWithAggregatesFilter<"Review"> | string
    reviewerId?: StringWithAggregatesFilter<"Review"> | string
    receiverId?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    fileUrls?: JsonNullableFilter<"Message">
    assignmentId?: StringNullableFilter<"Message"> | string | null
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    assignment?: XOR<AssignmentNullableScalarRelationFilter, AssignmentWhereInput> | null
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    fileUrls?: SortOrderInput | SortOrder
    assignmentId?: SortOrderInput | SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    fileUrls?: JsonNullableFilter<"Message">
    assignmentId?: StringNullableFilter<"Message"> | string | null
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    assignment?: XOR<AssignmentNullableScalarRelationFilter, AssignmentWhereInput> | null
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    fileUrls?: SortOrderInput | SortOrder
    assignmentId?: SortOrderInput | SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    content?: StringWithAggregatesFilter<"Message"> | string
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    fileUrls?: JsonNullableWithAggregatesFilter<"Message">
    assignmentId?: StringNullableWithAggregatesFilter<"Message"> | string | null
    senderId?: StringWithAggregatesFilter<"Message"> | string
    receiverId?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    stripePaymentId?: StringNullableFilter<"Payment"> | string | null
    stripeRefundId?: StringNullableFilter<"Payment"> | string | null
    assignmentId?: StringFilter<"Payment"> | string
    senderId?: StringFilter<"Payment"> | string
    receiverId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    dispute?: XOR<DisputeNullableScalarRelationFilter, DisputeWhereInput> | null
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    stripePaymentId?: SortOrderInput | SortOrder
    stripeRefundId?: SortOrderInput | SortOrder
    assignmentId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    sender?: UserOrderByWithRelationInput
    receiver?: UserOrderByWithRelationInput
    dispute?: DisputeOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    assignmentId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    stripePaymentId?: StringNullableFilter<"Payment"> | string | null
    stripeRefundId?: StringNullableFilter<"Payment"> | string | null
    senderId?: StringFilter<"Payment"> | string
    receiverId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    sender?: XOR<UserScalarRelationFilter, UserWhereInput>
    receiver?: XOR<UserScalarRelationFilter, UserWhereInput>
    dispute?: XOR<DisputeNullableScalarRelationFilter, DisputeWhereInput> | null
  }, "id" | "assignmentId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    stripePaymentId?: SortOrderInput | SortOrder
    stripeRefundId?: SortOrderInput | SortOrder
    assignmentId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    stripePaymentId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    stripeRefundId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    assignmentId?: StringWithAggregatesFilter<"Payment"> | string
    senderId?: StringWithAggregatesFilter<"Payment"> | string
    receiverId?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type DisputeWhereInput = {
    AND?: DisputeWhereInput | DisputeWhereInput[]
    OR?: DisputeWhereInput[]
    NOT?: DisputeWhereInput | DisputeWhereInput[]
    id?: StringFilter<"Dispute"> | string
    reason?: StringFilter<"Dispute"> | string
    evidence?: JsonNullableFilter<"Dispute">
    status?: EnumDisputeStatusFilter<"Dispute"> | $Enums.DisputeStatus
    resolution?: StringNullableFilter<"Dispute"> | string | null
    assignmentId?: StringFilter<"Dispute"> | string
    paymentId?: StringFilter<"Dispute"> | string
    initiatorId?: StringFilter<"Dispute"> | string
    resolvedById?: StringNullableFilter<"Dispute"> | string | null
    createdAt?: DateTimeFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeFilter<"Dispute"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    initiator?: XOR<UserScalarRelationFilter, UserWhereInput>
    resolvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type DisputeOrderByWithRelationInput = {
    id?: SortOrder
    reason?: SortOrder
    evidence?: SortOrderInput | SortOrder
    status?: SortOrder
    resolution?: SortOrderInput | SortOrder
    assignmentId?: SortOrder
    paymentId?: SortOrder
    initiatorId?: SortOrder
    resolvedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    initiator?: UserOrderByWithRelationInput
    resolvedBy?: UserOrderByWithRelationInput
  }

  export type DisputeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paymentId?: string
    AND?: DisputeWhereInput | DisputeWhereInput[]
    OR?: DisputeWhereInput[]
    NOT?: DisputeWhereInput | DisputeWhereInput[]
    reason?: StringFilter<"Dispute"> | string
    evidence?: JsonNullableFilter<"Dispute">
    status?: EnumDisputeStatusFilter<"Dispute"> | $Enums.DisputeStatus
    resolution?: StringNullableFilter<"Dispute"> | string | null
    assignmentId?: StringFilter<"Dispute"> | string
    initiatorId?: StringFilter<"Dispute"> | string
    resolvedById?: StringNullableFilter<"Dispute"> | string | null
    createdAt?: DateTimeFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeFilter<"Dispute"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    payment?: XOR<PaymentScalarRelationFilter, PaymentWhereInput>
    initiator?: XOR<UserScalarRelationFilter, UserWhereInput>
    resolvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "paymentId">

  export type DisputeOrderByWithAggregationInput = {
    id?: SortOrder
    reason?: SortOrder
    evidence?: SortOrderInput | SortOrder
    status?: SortOrder
    resolution?: SortOrderInput | SortOrder
    assignmentId?: SortOrder
    paymentId?: SortOrder
    initiatorId?: SortOrder
    resolvedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DisputeCountOrderByAggregateInput
    _max?: DisputeMaxOrderByAggregateInput
    _min?: DisputeMinOrderByAggregateInput
  }

  export type DisputeScalarWhereWithAggregatesInput = {
    AND?: DisputeScalarWhereWithAggregatesInput | DisputeScalarWhereWithAggregatesInput[]
    OR?: DisputeScalarWhereWithAggregatesInput[]
    NOT?: DisputeScalarWhereWithAggregatesInput | DisputeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dispute"> | string
    reason?: StringWithAggregatesFilter<"Dispute"> | string
    evidence?: JsonNullableWithAggregatesFilter<"Dispute">
    status?: EnumDisputeStatusWithAggregatesFilter<"Dispute"> | $Enums.DisputeStatus
    resolution?: StringNullableWithAggregatesFilter<"Dispute"> | string | null
    assignmentId?: StringWithAggregatesFilter<"Dispute"> | string
    paymentId?: StringWithAggregatesFilter<"Dispute"> | string
    initiatorId?: StringWithAggregatesFilter<"Dispute"> | string
    resolvedById?: StringNullableWithAggregatesFilter<"Dispute"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dispute"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentCreateNestedManyWithoutDoerInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutReceiverInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceiverInput
    disputes?: DisputeCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentUncheckedCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentUncheckedCreateNestedManyWithoutDoerInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentUncheckedCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceiverInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutReceiverNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUncheckedUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUncheckedUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUncheckedUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster: UserCreateNestedOneWithoutPostedAssignmentsInput
    doer?: UserCreateNestedOneWithoutAcceptedAssignmentsInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
    bids?: BidCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewCreateNestedManyWithoutAssignmentInput
    messages?: MessageCreateNestedManyWithoutAssignmentInput
    payment?: PaymentCreateNestedOneWithoutAssignmentInput
    disputes?: DisputeCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    posterId: string
    doerId?: string | null
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
    bids?: BidUncheckedCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAssignmentInput
    messages?: MessageUncheckedCreateNestedManyWithoutAssignmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutAssignmentInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: UserUpdateOneRequiredWithoutPostedAssignmentsNestedInput
    doer?: UserUpdateOneWithoutAcceptedAssignmentsNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
    bids?: BidUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUpdateOneWithoutAssignmentNestedInput
    disputes?: DisputeUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    posterId?: StringFieldUpdateOperationsInput | string
    doerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
    bids?: BidUncheckedUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutAssignmentNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentCreateManyInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    posterId: string
    doerId?: string | null
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    posterId?: StringFieldUpdateOperationsInput | string
    doerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateInput = {
    id?: string
    content: string
    bidAmount: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutBidsInput
    user: UserCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateInput = {
    id?: string
    content: string
    bidAmount: number
    status?: string
    assignmentId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    bidAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutBidsNestedInput
    user?: UserUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    bidAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidCreateManyInput = {
    id?: string
    content: string
    bidAmount: number
    status?: string
    assignmentId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    bidAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    bidAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    content: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionsInput
    user: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    content: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    feedback?: string | null
    assignmentId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyInput = {
    id?: string
    content: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    feedback?: string | null
    assignmentId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutReviewsInput
    reviewer: UserCreateNestedOneWithoutReviewsInput
    receiver: UserCreateNestedOneWithoutReceivedReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    assignmentId: string
    reviewerId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutReviewsNestedInput
    reviewer?: UserUpdateOneRequiredWithoutReviewsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    rating: number
    comment?: string | null
    assignmentId: string
    reviewerId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    content: string
    isRead?: boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment?: AssignmentCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    content: string
    isRead?: boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    assignmentId?: string | null
    senderId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    assignmentId?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    content: string
    isRead?: boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    assignmentId?: string | null
    senderId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    assignmentId?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    stripePaymentId?: string | null
    stripeRefundId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutPaymentInput
    sender: UserCreateNestedOneWithoutSentPaymentsInput
    receiver: UserCreateNestedOneWithoutReceivedPaymentsInput
    dispute?: DisputeCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    stripePaymentId?: string | null
    stripeRefundId?: string | null
    assignmentId: string
    senderId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dispute?: DisputeUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutPaymentNestedInput
    sender?: UserUpdateOneRequiredWithoutSentPaymentsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedPaymentsNestedInput
    dispute?: DisputeUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispute?: DisputeUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    stripePaymentId?: string | null
    stripeRefundId?: string | null
    assignmentId: string
    senderId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeCreateInput = {
    id?: string
    reason: string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.DisputeStatus
    resolution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutDisputesInput
    payment: PaymentCreateNestedOneWithoutDisputeInput
    initiator: UserCreateNestedOneWithoutDisputesInput
    resolvedBy?: UserCreateNestedOneWithoutResolvedDisputesInput
  }

  export type DisputeUncheckedCreateInput = {
    id?: string
    reason: string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.DisputeStatus
    resolution?: string | null
    assignmentId: string
    paymentId: string
    initiatorId: string
    resolvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutDisputesNestedInput
    payment?: PaymentUpdateOneRequiredWithoutDisputeNestedInput
    initiator?: UserUpdateOneRequiredWithoutDisputesNestedInput
    resolvedBy?: UserUpdateOneWithoutResolvedDisputesNestedInput
  }

  export type DisputeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    initiatorId?: StringFieldUpdateOperationsInput | string
    resolvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeCreateManyInput = {
    id?: string
    reason: string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.DisputeStatus
    resolution?: string | null
    assignmentId: string
    paymentId: string
    initiatorId: string
    resolvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    initiatorId?: StringFieldUpdateOperationsInput | string
    resolvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type BidListRelationFilter = {
    every?: BidWhereInput
    some?: BidWhereInput
    none?: BidWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type DisputeListRelationFilter = {
    every?: DisputeWhereInput
    some?: DisputeWhereInput
    none?: DisputeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BidOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DisputeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    skills?: SortOrder
    rating?: SortOrder
    citizenshipPhotos?: SortOrder
    verificationStatus?: SortOrder
    rejectionReason?: SortOrder
    accountBalance?: SortOrder
    stripeConnectAccountId?: SortOrder
    stripeAccountVerified?: SortOrder
    clerkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    rating?: SortOrder
    accountBalance?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    skills?: SortOrder
    rating?: SortOrder
    verificationStatus?: SortOrder
    rejectionReason?: SortOrder
    accountBalance?: SortOrder
    stripeConnectAccountId?: SortOrder
    stripeAccountVerified?: SortOrder
    clerkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    role?: SortOrder
    bio?: SortOrder
    skills?: SortOrder
    rating?: SortOrder
    verificationStatus?: SortOrder
    rejectionReason?: SortOrder
    accountBalance?: SortOrder
    stripeConnectAccountId?: SortOrder
    stripeAccountVerified?: SortOrder
    clerkId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    rating?: SortOrder
    accountBalance?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    budget?: SortOrder
    deadline?: SortOrder
    priority?: SortOrder
    attachments?: SortOrder
    additional?: SortOrder
    status?: SortOrder
    posterId?: SortOrder
    doerId?: SortOrder
    stripePaymentIntentId?: SortOrder
    acceptedBidId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentAvgOrderByAggregateInput = {
    budget?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    budget?: SortOrder
    deadline?: SortOrder
    priority?: SortOrder
    additional?: SortOrder
    status?: SortOrder
    posterId?: SortOrder
    doerId?: SortOrder
    stripePaymentIntentId?: SortOrder
    acceptedBidId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    budget?: SortOrder
    deadline?: SortOrder
    priority?: SortOrder
    additional?: SortOrder
    status?: SortOrder
    posterId?: SortOrder
    doerId?: SortOrder
    stripePaymentIntentId?: SortOrder
    acceptedBidId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentSumOrderByAggregateInput = {
    budget?: SortOrder
  }

  export type EnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type AssignmentScalarRelationFilter = {
    is?: AssignmentWhereInput
    isNot?: AssignmentWhereInput
  }

  export type BidCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    bidAmount?: SortOrder
    status?: SortOrder
    assignmentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BidAvgOrderByAggregateInput = {
    bidAmount?: SortOrder
  }

  export type BidMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    bidAmount?: SortOrder
    status?: SortOrder
    assignmentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BidMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    bidAmount?: SortOrder
    status?: SortOrder
    assignmentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BidSumOrderByAggregateInput = {
    bidAmount?: SortOrder
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    attachments?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    assignmentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    assignmentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    status?: SortOrder
    feedback?: SortOrder
    assignmentId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    assignmentId?: SortOrder
    reviewerId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    assignmentId?: SortOrder
    reviewerId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    assignmentId?: SortOrder
    reviewerId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AssignmentNullableScalarRelationFilter = {
    is?: AssignmentWhereInput | null
    isNot?: AssignmentWhereInput | null
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    fileUrls?: SortOrder
    assignmentId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    assignmentId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    assignmentId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type DisputeNullableScalarRelationFilter = {
    is?: DisputeWhereInput | null
    isNot?: DisputeWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    stripePaymentId?: SortOrder
    stripeRefundId?: SortOrder
    assignmentId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    stripePaymentId?: SortOrder
    stripeRefundId?: SortOrder
    assignmentId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    stripePaymentId?: SortOrder
    stripeRefundId?: SortOrder
    assignmentId?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumDisputeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusFilter<$PrismaModel> | $Enums.DisputeStatus
  }

  export type PaymentScalarRelationFilter = {
    is?: PaymentWhereInput
    isNot?: PaymentWhereInput
  }

  export type DisputeCountOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    evidence?: SortOrder
    status?: SortOrder
    resolution?: SortOrder
    assignmentId?: SortOrder
    paymentId?: SortOrder
    initiatorId?: SortOrder
    resolvedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisputeMaxOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    resolution?: SortOrder
    assignmentId?: SortOrder
    paymentId?: SortOrder
    initiatorId?: SortOrder
    resolvedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DisputeMinOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    resolution?: SortOrder
    assignmentId?: SortOrder
    paymentId?: SortOrder
    initiatorId?: SortOrder
    resolvedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDisputeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusWithAggregatesFilter<$PrismaModel> | $Enums.DisputeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisputeStatusFilter<$PrismaModel>
    _max?: NestedEnumDisputeStatusFilter<$PrismaModel>
  }

  export type AssignmentCreateNestedManyWithoutPosterInput = {
    create?: XOR<AssignmentCreateWithoutPosterInput, AssignmentUncheckedCreateWithoutPosterInput> | AssignmentCreateWithoutPosterInput[] | AssignmentUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutPosterInput | AssignmentCreateOrConnectWithoutPosterInput[]
    createMany?: AssignmentCreateManyPosterInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutDoerInput = {
    create?: XOR<AssignmentCreateWithoutDoerInput, AssignmentUncheckedCreateWithoutDoerInput> | AssignmentCreateWithoutDoerInput[] | AssignmentUncheckedCreateWithoutDoerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutDoerInput | AssignmentCreateOrConnectWithoutDoerInput[]
    createMany?: AssignmentCreateManyDoerInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type BidCreateNestedManyWithoutUserInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput> | ReviewCreateWithoutReceiverInput[] | ReviewUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReceiverInput | ReviewCreateOrConnectWithoutReceiverInput[]
    createMany?: ReviewCreateManyReceiverInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutSenderInput = {
    create?: XOR<PaymentCreateWithoutSenderInput, PaymentUncheckedCreateWithoutSenderInput> | PaymentCreateWithoutSenderInput[] | PaymentUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSenderInput | PaymentCreateOrConnectWithoutSenderInput[]
    createMany?: PaymentCreateManySenderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PaymentCreateWithoutReceiverInput, PaymentUncheckedCreateWithoutReceiverInput> | PaymentCreateWithoutReceiverInput[] | PaymentUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReceiverInput | PaymentCreateOrConnectWithoutReceiverInput[]
    createMany?: PaymentCreateManyReceiverInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type DisputeCreateNestedManyWithoutInitiatorInput = {
    create?: XOR<DisputeCreateWithoutInitiatorInput, DisputeUncheckedCreateWithoutInitiatorInput> | DisputeCreateWithoutInitiatorInput[] | DisputeUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutInitiatorInput | DisputeCreateOrConnectWithoutInitiatorInput[]
    createMany?: DisputeCreateManyInitiatorInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type DisputeCreateNestedManyWithoutResolvedByInput = {
    create?: XOR<DisputeCreateWithoutResolvedByInput, DisputeUncheckedCreateWithoutResolvedByInput> | DisputeCreateWithoutResolvedByInput[] | DisputeUncheckedCreateWithoutResolvedByInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutResolvedByInput | DisputeCreateOrConnectWithoutResolvedByInput[]
    createMany?: DisputeCreateManyResolvedByInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutPosterInput = {
    create?: XOR<AssignmentCreateWithoutPosterInput, AssignmentUncheckedCreateWithoutPosterInput> | AssignmentCreateWithoutPosterInput[] | AssignmentUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutPosterInput | AssignmentCreateOrConnectWithoutPosterInput[]
    createMany?: AssignmentCreateManyPosterInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutDoerInput = {
    create?: XOR<AssignmentCreateWithoutDoerInput, AssignmentUncheckedCreateWithoutDoerInput> | AssignmentCreateWithoutDoerInput[] | AssignmentUncheckedCreateWithoutDoerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutDoerInput | AssignmentCreateOrConnectWithoutDoerInput[]
    createMany?: AssignmentCreateManyDoerInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput> | ReviewCreateWithoutReceiverInput[] | ReviewUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReceiverInput | ReviewCreateOrConnectWithoutReceiverInput[]
    createMany?: ReviewCreateManyReceiverInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<PaymentCreateWithoutSenderInput, PaymentUncheckedCreateWithoutSenderInput> | PaymentCreateWithoutSenderInput[] | PaymentUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSenderInput | PaymentCreateOrConnectWithoutSenderInput[]
    createMany?: PaymentCreateManySenderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<PaymentCreateWithoutReceiverInput, PaymentUncheckedCreateWithoutReceiverInput> | PaymentCreateWithoutReceiverInput[] | PaymentUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReceiverInput | PaymentCreateOrConnectWithoutReceiverInput[]
    createMany?: PaymentCreateManyReceiverInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type DisputeUncheckedCreateNestedManyWithoutInitiatorInput = {
    create?: XOR<DisputeCreateWithoutInitiatorInput, DisputeUncheckedCreateWithoutInitiatorInput> | DisputeCreateWithoutInitiatorInput[] | DisputeUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutInitiatorInput | DisputeCreateOrConnectWithoutInitiatorInput[]
    createMany?: DisputeCreateManyInitiatorInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type DisputeUncheckedCreateNestedManyWithoutResolvedByInput = {
    create?: XOR<DisputeCreateWithoutResolvedByInput, DisputeUncheckedCreateWithoutResolvedByInput> | DisputeCreateWithoutResolvedByInput[] | DisputeUncheckedCreateWithoutResolvedByInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutResolvedByInput | DisputeCreateOrConnectWithoutResolvedByInput[]
    createMany?: DisputeCreateManyResolvedByInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AssignmentUpdateManyWithoutPosterNestedInput = {
    create?: XOR<AssignmentCreateWithoutPosterInput, AssignmentUncheckedCreateWithoutPosterInput> | AssignmentCreateWithoutPosterInput[] | AssignmentUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutPosterInput | AssignmentCreateOrConnectWithoutPosterInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutPosterInput | AssignmentUpsertWithWhereUniqueWithoutPosterInput[]
    createMany?: AssignmentCreateManyPosterInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutPosterInput | AssignmentUpdateWithWhereUniqueWithoutPosterInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutPosterInput | AssignmentUpdateManyWithWhereWithoutPosterInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutDoerNestedInput = {
    create?: XOR<AssignmentCreateWithoutDoerInput, AssignmentUncheckedCreateWithoutDoerInput> | AssignmentCreateWithoutDoerInput[] | AssignmentUncheckedCreateWithoutDoerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutDoerInput | AssignmentCreateOrConnectWithoutDoerInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutDoerInput | AssignmentUpsertWithWhereUniqueWithoutDoerInput[]
    createMany?: AssignmentCreateManyDoerInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutDoerInput | AssignmentUpdateWithWhereUniqueWithoutDoerInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutDoerInput | AssignmentUpdateManyWithWhereWithoutDoerInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type BidUpdateManyWithoutUserNestedInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutUserInput | BidUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutUserInput | BidUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BidUpdateManyWithWhereWithoutUserInput | BidUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput> | ReviewCreateWithoutReceiverInput[] | ReviewUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReceiverInput | ReviewCreateOrConnectWithoutReceiverInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReceiverInput | ReviewUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ReviewCreateManyReceiverInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReceiverInput | ReviewUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReceiverInput | ReviewUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutSenderNestedInput = {
    create?: XOR<PaymentCreateWithoutSenderInput, PaymentUncheckedCreateWithoutSenderInput> | PaymentCreateWithoutSenderInput[] | PaymentUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSenderInput | PaymentCreateOrConnectWithoutSenderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSenderInput | PaymentUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: PaymentCreateManySenderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSenderInput | PaymentUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSenderInput | PaymentUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PaymentCreateWithoutReceiverInput, PaymentUncheckedCreateWithoutReceiverInput> | PaymentCreateWithoutReceiverInput[] | PaymentUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReceiverInput | PaymentCreateOrConnectWithoutReceiverInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutReceiverInput | PaymentUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PaymentCreateManyReceiverInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutReceiverInput | PaymentUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutReceiverInput | PaymentUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type DisputeUpdateManyWithoutInitiatorNestedInput = {
    create?: XOR<DisputeCreateWithoutInitiatorInput, DisputeUncheckedCreateWithoutInitiatorInput> | DisputeCreateWithoutInitiatorInput[] | DisputeUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutInitiatorInput | DisputeCreateOrConnectWithoutInitiatorInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutInitiatorInput | DisputeUpsertWithWhereUniqueWithoutInitiatorInput[]
    createMany?: DisputeCreateManyInitiatorInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutInitiatorInput | DisputeUpdateWithWhereUniqueWithoutInitiatorInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutInitiatorInput | DisputeUpdateManyWithWhereWithoutInitiatorInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type DisputeUpdateManyWithoutResolvedByNestedInput = {
    create?: XOR<DisputeCreateWithoutResolvedByInput, DisputeUncheckedCreateWithoutResolvedByInput> | DisputeCreateWithoutResolvedByInput[] | DisputeUncheckedCreateWithoutResolvedByInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutResolvedByInput | DisputeCreateOrConnectWithoutResolvedByInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutResolvedByInput | DisputeUpsertWithWhereUniqueWithoutResolvedByInput[]
    createMany?: DisputeCreateManyResolvedByInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutResolvedByInput | DisputeUpdateWithWhereUniqueWithoutResolvedByInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutResolvedByInput | DisputeUpdateManyWithWhereWithoutResolvedByInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutPosterNestedInput = {
    create?: XOR<AssignmentCreateWithoutPosterInput, AssignmentUncheckedCreateWithoutPosterInput> | AssignmentCreateWithoutPosterInput[] | AssignmentUncheckedCreateWithoutPosterInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutPosterInput | AssignmentCreateOrConnectWithoutPosterInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutPosterInput | AssignmentUpsertWithWhereUniqueWithoutPosterInput[]
    createMany?: AssignmentCreateManyPosterInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutPosterInput | AssignmentUpdateWithWhereUniqueWithoutPosterInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutPosterInput | AssignmentUpdateManyWithWhereWithoutPosterInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutDoerNestedInput = {
    create?: XOR<AssignmentCreateWithoutDoerInput, AssignmentUncheckedCreateWithoutDoerInput> | AssignmentCreateWithoutDoerInput[] | AssignmentUncheckedCreateWithoutDoerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutDoerInput | AssignmentCreateOrConnectWithoutDoerInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutDoerInput | AssignmentUpsertWithWhereUniqueWithoutDoerInput[]
    createMany?: AssignmentCreateManyDoerInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutDoerInput | AssignmentUpdateWithWhereUniqueWithoutDoerInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutDoerInput | AssignmentUpdateManyWithWhereWithoutDoerInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput> | BidCreateWithoutUserInput[] | BidUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BidCreateOrConnectWithoutUserInput | BidCreateOrConnectWithoutUserInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutUserInput | BidUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BidCreateManyUserInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutUserInput | BidUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BidUpdateManyWithWhereWithoutUserInput | BidUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput> | ReviewCreateWithoutReviewerInput[] | ReviewUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerInput | ReviewCreateOrConnectWithoutReviewerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerInput | ReviewUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: ReviewCreateManyReviewerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerInput | ReviewUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerInput | ReviewUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput> | ReviewCreateWithoutReceiverInput[] | ReviewUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReceiverInput | ReviewCreateOrConnectWithoutReceiverInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReceiverInput | ReviewUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: ReviewCreateManyReceiverInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReceiverInput | ReviewUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReceiverInput | ReviewUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<PaymentCreateWithoutSenderInput, PaymentUncheckedCreateWithoutSenderInput> | PaymentCreateWithoutSenderInput[] | PaymentUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutSenderInput | PaymentCreateOrConnectWithoutSenderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutSenderInput | PaymentUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: PaymentCreateManySenderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutSenderInput | PaymentUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutSenderInput | PaymentUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<PaymentCreateWithoutReceiverInput, PaymentUncheckedCreateWithoutReceiverInput> | PaymentCreateWithoutReceiverInput[] | PaymentUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutReceiverInput | PaymentCreateOrConnectWithoutReceiverInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutReceiverInput | PaymentUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: PaymentCreateManyReceiverInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutReceiverInput | PaymentUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutReceiverInput | PaymentUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type DisputeUncheckedUpdateManyWithoutInitiatorNestedInput = {
    create?: XOR<DisputeCreateWithoutInitiatorInput, DisputeUncheckedCreateWithoutInitiatorInput> | DisputeCreateWithoutInitiatorInput[] | DisputeUncheckedCreateWithoutInitiatorInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutInitiatorInput | DisputeCreateOrConnectWithoutInitiatorInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutInitiatorInput | DisputeUpsertWithWhereUniqueWithoutInitiatorInput[]
    createMany?: DisputeCreateManyInitiatorInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutInitiatorInput | DisputeUpdateWithWhereUniqueWithoutInitiatorInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutInitiatorInput | DisputeUpdateManyWithWhereWithoutInitiatorInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type DisputeUncheckedUpdateManyWithoutResolvedByNestedInput = {
    create?: XOR<DisputeCreateWithoutResolvedByInput, DisputeUncheckedCreateWithoutResolvedByInput> | DisputeCreateWithoutResolvedByInput[] | DisputeUncheckedCreateWithoutResolvedByInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutResolvedByInput | DisputeCreateOrConnectWithoutResolvedByInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutResolvedByInput | DisputeUpsertWithWhereUniqueWithoutResolvedByInput[]
    createMany?: DisputeCreateManyResolvedByInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutResolvedByInput | DisputeUpdateWithWhereUniqueWithoutResolvedByInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutResolvedByInput | DisputeUpdateManyWithWhereWithoutResolvedByInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostedAssignmentsInput = {
    create?: XOR<UserCreateWithoutPostedAssignmentsInput, UserUncheckedCreateWithoutPostedAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostedAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAcceptedAssignmentsInput = {
    create?: XOR<UserCreateWithoutAcceptedAssignmentsInput, UserUncheckedCreateWithoutAcceptedAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAcceptedAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type BidCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<BidCreateWithoutAssignmentInput, BidUncheckedCreateWithoutAssignmentInput> | BidCreateWithoutAssignmentInput[] | BidUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAssignmentInput | BidCreateOrConnectWithoutAssignmentInput[]
    createMany?: BidCreateManyAssignmentInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<ReviewCreateWithoutAssignmentInput, ReviewUncheckedCreateWithoutAssignmentInput> | ReviewCreateWithoutAssignmentInput[] | ReviewUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAssignmentInput | ReviewCreateOrConnectWithoutAssignmentInput[]
    createMany?: ReviewCreateManyAssignmentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<MessageCreateWithoutAssignmentInput, MessageUncheckedCreateWithoutAssignmentInput> | MessageCreateWithoutAssignmentInput[] | MessageUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAssignmentInput | MessageCreateOrConnectWithoutAssignmentInput[]
    createMany?: MessageCreateManyAssignmentInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type PaymentCreateNestedOneWithoutAssignmentInput = {
    create?: XOR<PaymentCreateWithoutAssignmentInput, PaymentUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutAssignmentInput
    connect?: PaymentWhereUniqueInput
  }

  export type DisputeCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<DisputeCreateWithoutAssignmentInput, DisputeUncheckedCreateWithoutAssignmentInput> | DisputeCreateWithoutAssignmentInput[] | DisputeUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutAssignmentInput | DisputeCreateOrConnectWithoutAssignmentInput[]
    createMany?: DisputeCreateManyAssignmentInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type BidUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<BidCreateWithoutAssignmentInput, BidUncheckedCreateWithoutAssignmentInput> | BidCreateWithoutAssignmentInput[] | BidUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAssignmentInput | BidCreateOrConnectWithoutAssignmentInput[]
    createMany?: BidCreateManyAssignmentInputEnvelope
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<ReviewCreateWithoutAssignmentInput, ReviewUncheckedCreateWithoutAssignmentInput> | ReviewCreateWithoutAssignmentInput[] | ReviewUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAssignmentInput | ReviewCreateOrConnectWithoutAssignmentInput[]
    createMany?: ReviewCreateManyAssignmentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<MessageCreateWithoutAssignmentInput, MessageUncheckedCreateWithoutAssignmentInput> | MessageCreateWithoutAssignmentInput[] | MessageUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAssignmentInput | MessageCreateOrConnectWithoutAssignmentInput[]
    createMany?: MessageCreateManyAssignmentInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedOneWithoutAssignmentInput = {
    create?: XOR<PaymentCreateWithoutAssignmentInput, PaymentUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutAssignmentInput
    connect?: PaymentWhereUniqueInput
  }

  export type DisputeUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<DisputeCreateWithoutAssignmentInput, DisputeUncheckedCreateWithoutAssignmentInput> | DisputeCreateWithoutAssignmentInput[] | DisputeUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutAssignmentInput | DisputeCreateOrConnectWithoutAssignmentInput[]
    createMany?: DisputeCreateManyAssignmentInputEnvelope
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
  }

  export type EnumAssignmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssignmentStatus
  }

  export type UserUpdateOneRequiredWithoutPostedAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutPostedAssignmentsInput, UserUncheckedCreateWithoutPostedAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostedAssignmentsInput
    upsert?: UserUpsertWithoutPostedAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostedAssignmentsInput, UserUpdateWithoutPostedAssignmentsInput>, UserUncheckedUpdateWithoutPostedAssignmentsInput>
  }

  export type UserUpdateOneWithoutAcceptedAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutAcceptedAssignmentsInput, UserUncheckedCreateWithoutAcceptedAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAcceptedAssignmentsInput
    upsert?: UserUpsertWithoutAcceptedAssignmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAcceptedAssignmentsInput, UserUpdateWithoutAcceptedAssignmentsInput>, UserUncheckedUpdateWithoutAcceptedAssignmentsInput>
  }

  export type SubmissionUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutAssignmentInput | SubmissionUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutAssignmentInput | SubmissionUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutAssignmentInput | SubmissionUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type BidUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<BidCreateWithoutAssignmentInput, BidUncheckedCreateWithoutAssignmentInput> | BidCreateWithoutAssignmentInput[] | BidUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAssignmentInput | BidCreateOrConnectWithoutAssignmentInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutAssignmentInput | BidUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: BidCreateManyAssignmentInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutAssignmentInput | BidUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: BidUpdateManyWithWhereWithoutAssignmentInput | BidUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<ReviewCreateWithoutAssignmentInput, ReviewUncheckedCreateWithoutAssignmentInput> | ReviewCreateWithoutAssignmentInput[] | ReviewUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAssignmentInput | ReviewCreateOrConnectWithoutAssignmentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAssignmentInput | ReviewUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: ReviewCreateManyAssignmentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAssignmentInput | ReviewUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAssignmentInput | ReviewUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<MessageCreateWithoutAssignmentInput, MessageUncheckedCreateWithoutAssignmentInput> | MessageCreateWithoutAssignmentInput[] | MessageUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAssignmentInput | MessageCreateOrConnectWithoutAssignmentInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutAssignmentInput | MessageUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: MessageCreateManyAssignmentInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutAssignmentInput | MessageUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutAssignmentInput | MessageUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type PaymentUpdateOneWithoutAssignmentNestedInput = {
    create?: XOR<PaymentCreateWithoutAssignmentInput, PaymentUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutAssignmentInput
    upsert?: PaymentUpsertWithoutAssignmentInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutAssignmentInput, PaymentUpdateWithoutAssignmentInput>, PaymentUncheckedUpdateWithoutAssignmentInput>
  }

  export type DisputeUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<DisputeCreateWithoutAssignmentInput, DisputeUncheckedCreateWithoutAssignmentInput> | DisputeCreateWithoutAssignmentInput[] | DisputeUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutAssignmentInput | DisputeCreateOrConnectWithoutAssignmentInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutAssignmentInput | DisputeUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: DisputeCreateManyAssignmentInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutAssignmentInput | DisputeUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutAssignmentInput | DisputeUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutAssignmentInput | SubmissionUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutAssignmentInput | SubmissionUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutAssignmentInput | SubmissionUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type BidUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<BidCreateWithoutAssignmentInput, BidUncheckedCreateWithoutAssignmentInput> | BidCreateWithoutAssignmentInput[] | BidUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: BidCreateOrConnectWithoutAssignmentInput | BidCreateOrConnectWithoutAssignmentInput[]
    upsert?: BidUpsertWithWhereUniqueWithoutAssignmentInput | BidUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: BidCreateManyAssignmentInputEnvelope
    set?: BidWhereUniqueInput | BidWhereUniqueInput[]
    disconnect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    delete?: BidWhereUniqueInput | BidWhereUniqueInput[]
    connect?: BidWhereUniqueInput | BidWhereUniqueInput[]
    update?: BidUpdateWithWhereUniqueWithoutAssignmentInput | BidUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: BidUpdateManyWithWhereWithoutAssignmentInput | BidUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: BidScalarWhereInput | BidScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<ReviewCreateWithoutAssignmentInput, ReviewUncheckedCreateWithoutAssignmentInput> | ReviewCreateWithoutAssignmentInput[] | ReviewUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAssignmentInput | ReviewCreateOrConnectWithoutAssignmentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAssignmentInput | ReviewUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: ReviewCreateManyAssignmentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAssignmentInput | ReviewUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAssignmentInput | ReviewUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<MessageCreateWithoutAssignmentInput, MessageUncheckedCreateWithoutAssignmentInput> | MessageCreateWithoutAssignmentInput[] | MessageUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAssignmentInput | MessageCreateOrConnectWithoutAssignmentInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutAssignmentInput | MessageUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: MessageCreateManyAssignmentInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutAssignmentInput | MessageUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutAssignmentInput | MessageUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateOneWithoutAssignmentNestedInput = {
    create?: XOR<PaymentCreateWithoutAssignmentInput, PaymentUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutAssignmentInput
    upsert?: PaymentUpsertWithoutAssignmentInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutAssignmentInput, PaymentUpdateWithoutAssignmentInput>, PaymentUncheckedUpdateWithoutAssignmentInput>
  }

  export type DisputeUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<DisputeCreateWithoutAssignmentInput, DisputeUncheckedCreateWithoutAssignmentInput> | DisputeCreateWithoutAssignmentInput[] | DisputeUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: DisputeCreateOrConnectWithoutAssignmentInput | DisputeCreateOrConnectWithoutAssignmentInput[]
    upsert?: DisputeUpsertWithWhereUniqueWithoutAssignmentInput | DisputeUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: DisputeCreateManyAssignmentInputEnvelope
    set?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    disconnect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    delete?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    connect?: DisputeWhereUniqueInput | DisputeWhereUniqueInput[]
    update?: DisputeUpdateWithWhereUniqueWithoutAssignmentInput | DisputeUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: DisputeUpdateManyWithWhereWithoutAssignmentInput | DisputeUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
  }

  export type AssignmentCreateNestedOneWithoutBidsInput = {
    create?: XOR<AssignmentCreateWithoutBidsInput, AssignmentUncheckedCreateWithoutBidsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutBidsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBidsInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput
    connect?: UserWhereUniqueInput
  }

  export type AssignmentUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<AssignmentCreateWithoutBidsInput, AssignmentUncheckedCreateWithoutBidsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutBidsInput
    upsert?: AssignmentUpsertWithoutBidsInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutBidsInput, AssignmentUpdateWithoutBidsInput>, AssignmentUncheckedUpdateWithoutBidsInput>
  }

  export type UserUpdateOneRequiredWithoutBidsNestedInput = {
    create?: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBidsInput
    upsert?: UserUpsertWithoutBidsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBidsInput, UserUpdateWithoutBidsInput>, UserUncheckedUpdateWithoutBidsInput>
  }

  export type AssignmentCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    upsert?: AssignmentUpsertWithoutSubmissionsInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutSubmissionsInput, AssignmentUpdateWithoutSubmissionsInput>, AssignmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type AssignmentCreateNestedOneWithoutReviewsInput = {
    create?: XOR<AssignmentCreateWithoutReviewsInput, AssignmentUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutReviewsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedReviewsInput = {
    create?: XOR<UserCreateWithoutReceivedReviewsInput, UserUncheckedCreateWithoutReceivedReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type AssignmentUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<AssignmentCreateWithoutReviewsInput, AssignmentUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutReviewsInput
    upsert?: AssignmentUpsertWithoutReviewsInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutReviewsInput, AssignmentUpdateWithoutReviewsInput>, AssignmentUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedReviewsInput, UserUncheckedCreateWithoutReceivedReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedReviewsInput
    upsert?: UserUpsertWithoutReceivedReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedReviewsInput, UserUpdateWithoutReceivedReviewsInput>, UserUncheckedUpdateWithoutReceivedReviewsInput>
  }

  export type AssignmentCreateNestedOneWithoutMessagesInput = {
    create?: XOR<AssignmentCreateWithoutMessagesInput, AssignmentUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutMessagesInput
    connect?: AssignmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessagesInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AssignmentUpdateOneWithoutMessagesNestedInput = {
    create?: XOR<AssignmentCreateWithoutMessagesInput, AssignmentUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutMessagesInput
    upsert?: AssignmentUpsertWithoutMessagesInput
    disconnect?: AssignmentWhereInput | boolean
    delete?: AssignmentWhereInput | boolean
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutMessagesInput, AssignmentUpdateWithoutMessagesInput>, AssignmentUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessagesInput
    upsert?: UserUpsertWithoutMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessagesInput, UserUpdateWithoutMessagesInput>, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedMessagesInput
    upsert?: UserUpsertWithoutReceivedMessagesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedMessagesInput, UserUpdateWithoutReceivedMessagesInput>, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type AssignmentCreateNestedOneWithoutPaymentInput = {
    create?: XOR<AssignmentCreateWithoutPaymentInput, AssignmentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutPaymentInput
    connect?: AssignmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSentPaymentsInput = {
    create?: XOR<UserCreateWithoutSentPaymentsInput, UserUncheckedCreateWithoutSentPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReceivedPaymentsInput = {
    create?: XOR<UserCreateWithoutReceivedPaymentsInput, UserUncheckedCreateWithoutReceivedPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type DisputeCreateNestedOneWithoutPaymentInput = {
    create?: XOR<DisputeCreateWithoutPaymentInput, DisputeUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: DisputeCreateOrConnectWithoutPaymentInput
    connect?: DisputeWhereUniqueInput
  }

  export type DisputeUncheckedCreateNestedOneWithoutPaymentInput = {
    create?: XOR<DisputeCreateWithoutPaymentInput, DisputeUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: DisputeCreateOrConnectWithoutPaymentInput
    connect?: DisputeWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type AssignmentUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<AssignmentCreateWithoutPaymentInput, AssignmentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutPaymentInput
    upsert?: AssignmentUpsertWithoutPaymentInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutPaymentInput, AssignmentUpdateWithoutPaymentInput>, AssignmentUncheckedUpdateWithoutPaymentInput>
  }

  export type UserUpdateOneRequiredWithoutSentPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutSentPaymentsInput, UserUncheckedCreateWithoutSentPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSentPaymentsInput
    upsert?: UserUpsertWithoutSentPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSentPaymentsInput, UserUpdateWithoutSentPaymentsInput>, UserUncheckedUpdateWithoutSentPaymentsInput>
  }

  export type UserUpdateOneRequiredWithoutReceivedPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutReceivedPaymentsInput, UserUncheckedCreateWithoutReceivedPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReceivedPaymentsInput
    upsert?: UserUpsertWithoutReceivedPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReceivedPaymentsInput, UserUpdateWithoutReceivedPaymentsInput>, UserUncheckedUpdateWithoutReceivedPaymentsInput>
  }

  export type DisputeUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<DisputeCreateWithoutPaymentInput, DisputeUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: DisputeCreateOrConnectWithoutPaymentInput
    upsert?: DisputeUpsertWithoutPaymentInput
    disconnect?: DisputeWhereInput | boolean
    delete?: DisputeWhereInput | boolean
    connect?: DisputeWhereUniqueInput
    update?: XOR<XOR<DisputeUpdateToOneWithWhereWithoutPaymentInput, DisputeUpdateWithoutPaymentInput>, DisputeUncheckedUpdateWithoutPaymentInput>
  }

  export type DisputeUncheckedUpdateOneWithoutPaymentNestedInput = {
    create?: XOR<DisputeCreateWithoutPaymentInput, DisputeUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: DisputeCreateOrConnectWithoutPaymentInput
    upsert?: DisputeUpsertWithoutPaymentInput
    disconnect?: DisputeWhereInput | boolean
    delete?: DisputeWhereInput | boolean
    connect?: DisputeWhereUniqueInput
    update?: XOR<XOR<DisputeUpdateToOneWithWhereWithoutPaymentInput, DisputeUpdateWithoutPaymentInput>, DisputeUncheckedUpdateWithoutPaymentInput>
  }

  export type AssignmentCreateNestedOneWithoutDisputesInput = {
    create?: XOR<AssignmentCreateWithoutDisputesInput, AssignmentUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutDisputesInput
    connect?: AssignmentWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutDisputeInput = {
    create?: XOR<PaymentCreateWithoutDisputeInput, PaymentUncheckedCreateWithoutDisputeInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutDisputeInput
    connect?: PaymentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDisputesInput = {
    create?: XOR<UserCreateWithoutDisputesInput, UserUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDisputesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResolvedDisputesInput = {
    create?: XOR<UserCreateWithoutResolvedDisputesInput, UserUncheckedCreateWithoutResolvedDisputesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResolvedDisputesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumDisputeStatusFieldUpdateOperationsInput = {
    set?: $Enums.DisputeStatus
  }

  export type AssignmentUpdateOneRequiredWithoutDisputesNestedInput = {
    create?: XOR<AssignmentCreateWithoutDisputesInput, AssignmentUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutDisputesInput
    upsert?: AssignmentUpsertWithoutDisputesInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutDisputesInput, AssignmentUpdateWithoutDisputesInput>, AssignmentUncheckedUpdateWithoutDisputesInput>
  }

  export type PaymentUpdateOneRequiredWithoutDisputeNestedInput = {
    create?: XOR<PaymentCreateWithoutDisputeInput, PaymentUncheckedCreateWithoutDisputeInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutDisputeInput
    upsert?: PaymentUpsertWithoutDisputeInput
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutDisputeInput, PaymentUpdateWithoutDisputeInput>, PaymentUncheckedUpdateWithoutDisputeInput>
  }

  export type UserUpdateOneRequiredWithoutDisputesNestedInput = {
    create?: XOR<UserCreateWithoutDisputesInput, UserUncheckedCreateWithoutDisputesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDisputesInput
    upsert?: UserUpsertWithoutDisputesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDisputesInput, UserUpdateWithoutDisputesInput>, UserUncheckedUpdateWithoutDisputesInput>
  }

  export type UserUpdateOneWithoutResolvedDisputesNestedInput = {
    create?: XOR<UserCreateWithoutResolvedDisputesInput, UserUncheckedCreateWithoutResolvedDisputesInput>
    connectOrCreate?: UserCreateOrConnectWithoutResolvedDisputesInput
    upsert?: UserUpsertWithoutResolvedDisputesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResolvedDisputesInput, UserUpdateWithoutResolvedDisputesInput>, UserUncheckedUpdateWithoutResolvedDisputesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumDisputeStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusFilter<$PrismaModel> | $Enums.DisputeStatus
  }

  export type NestedEnumDisputeStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DisputeStatus | EnumDisputeStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DisputeStatus[] | ListEnumDisputeStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDisputeStatusWithAggregatesFilter<$PrismaModel> | $Enums.DisputeStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDisputeStatusFilter<$PrismaModel>
    _max?: NestedEnumDisputeStatusFilter<$PrismaModel>
  }

  export type AssignmentCreateWithoutPosterInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    doer?: UserCreateNestedOneWithoutAcceptedAssignmentsInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
    bids?: BidCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewCreateNestedManyWithoutAssignmentInput
    messages?: MessageCreateNestedManyWithoutAssignmentInput
    payment?: PaymentCreateNestedOneWithoutAssignmentInput
    disputes?: DisputeCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutPosterInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    doerId?: string | null
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
    bids?: BidUncheckedCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAssignmentInput
    messages?: MessageUncheckedCreateNestedManyWithoutAssignmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutAssignmentInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutPosterInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutPosterInput, AssignmentUncheckedCreateWithoutPosterInput>
  }

  export type AssignmentCreateManyPosterInputEnvelope = {
    data: AssignmentCreateManyPosterInput | AssignmentCreateManyPosterInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutDoerInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster: UserCreateNestedOneWithoutPostedAssignmentsInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
    bids?: BidCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewCreateNestedManyWithoutAssignmentInput
    messages?: MessageCreateNestedManyWithoutAssignmentInput
    payment?: PaymentCreateNestedOneWithoutAssignmentInput
    disputes?: DisputeCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutDoerInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    posterId: string
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
    bids?: BidUncheckedCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAssignmentInput
    messages?: MessageUncheckedCreateNestedManyWithoutAssignmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutAssignmentInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutDoerInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutDoerInput, AssignmentUncheckedCreateWithoutDoerInput>
  }

  export type AssignmentCreateManyDoerInputEnvelope = {
    data: AssignmentCreateManyDoerInput | AssignmentCreateManyDoerInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    content: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    feedback?: string | null
    assignmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BidCreateWithoutUserInput = {
    id?: string
    content: string
    bidAmount: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateWithoutUserInput = {
    id?: string
    content: string
    bidAmount: number
    status?: string
    assignmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidCreateOrConnectWithoutUserInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput>
  }

  export type BidCreateManyUserInputEnvelope = {
    data: BidCreateManyUserInput | BidCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReviewerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutReviewsInput
    receiver: UserCreateNestedOneWithoutReceivedReviewsInput
  }

  export type ReviewUncheckedCreateWithoutReviewerInput = {
    id?: string
    rating: number
    comment?: string | null
    assignmentId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewCreateManyReviewerInputEnvelope = {
    data: ReviewCreateManyReviewerInput | ReviewCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReceiverInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutReviewsInput
    reviewer: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutReceiverInput = {
    id?: string
    rating: number
    comment?: string | null
    assignmentId: string
    reviewerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutReceiverInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput>
  }

  export type ReviewCreateManyReceiverInputEnvelope = {
    data: ReviewCreateManyReceiverInput | ReviewCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    content: string
    isRead?: boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment?: AssignmentCreateNestedOneWithoutMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    content: string
    isRead?: boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    assignmentId?: string | null
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    id?: string
    content: string
    isRead?: boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment?: AssignmentCreateNestedOneWithoutMessagesInput
    sender: UserCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    content: string
    isRead?: boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    assignmentId?: string | null
    senderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutSenderInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    stripePaymentId?: string | null
    stripeRefundId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutPaymentInput
    receiver: UserCreateNestedOneWithoutReceivedPaymentsInput
    dispute?: DisputeCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutSenderInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    stripePaymentId?: string | null
    stripeRefundId?: string | null
    assignmentId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dispute?: DisputeUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutSenderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutSenderInput, PaymentUncheckedCreateWithoutSenderInput>
  }

  export type PaymentCreateManySenderInputEnvelope = {
    data: PaymentCreateManySenderInput | PaymentCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutReceiverInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    stripePaymentId?: string | null
    stripeRefundId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutPaymentInput
    sender: UserCreateNestedOneWithoutSentPaymentsInput
    dispute?: DisputeCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutReceiverInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    stripePaymentId?: string | null
    stripeRefundId?: string | null
    assignmentId: string
    senderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dispute?: DisputeUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutReceiverInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutReceiverInput, PaymentUncheckedCreateWithoutReceiverInput>
  }

  export type PaymentCreateManyReceiverInputEnvelope = {
    data: PaymentCreateManyReceiverInput | PaymentCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type DisputeCreateWithoutInitiatorInput = {
    id?: string
    reason: string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.DisputeStatus
    resolution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutDisputesInput
    payment: PaymentCreateNestedOneWithoutDisputeInput
    resolvedBy?: UserCreateNestedOneWithoutResolvedDisputesInput
  }

  export type DisputeUncheckedCreateWithoutInitiatorInput = {
    id?: string
    reason: string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.DisputeStatus
    resolution?: string | null
    assignmentId: string
    paymentId: string
    resolvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeCreateOrConnectWithoutInitiatorInput = {
    where: DisputeWhereUniqueInput
    create: XOR<DisputeCreateWithoutInitiatorInput, DisputeUncheckedCreateWithoutInitiatorInput>
  }

  export type DisputeCreateManyInitiatorInputEnvelope = {
    data: DisputeCreateManyInitiatorInput | DisputeCreateManyInitiatorInput[]
    skipDuplicates?: boolean
  }

  export type DisputeCreateWithoutResolvedByInput = {
    id?: string
    reason: string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.DisputeStatus
    resolution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutDisputesInput
    payment: PaymentCreateNestedOneWithoutDisputeInput
    initiator: UserCreateNestedOneWithoutDisputesInput
  }

  export type DisputeUncheckedCreateWithoutResolvedByInput = {
    id?: string
    reason: string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.DisputeStatus
    resolution?: string | null
    assignmentId: string
    paymentId: string
    initiatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeCreateOrConnectWithoutResolvedByInput = {
    where: DisputeWhereUniqueInput
    create: XOR<DisputeCreateWithoutResolvedByInput, DisputeUncheckedCreateWithoutResolvedByInput>
  }

  export type DisputeCreateManyResolvedByInputEnvelope = {
    data: DisputeCreateManyResolvedByInput | DisputeCreateManyResolvedByInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentUpsertWithWhereUniqueWithoutPosterInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutPosterInput, AssignmentUncheckedUpdateWithoutPosterInput>
    create: XOR<AssignmentCreateWithoutPosterInput, AssignmentUncheckedCreateWithoutPosterInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutPosterInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutPosterInput, AssignmentUncheckedUpdateWithoutPosterInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutPosterInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutPosterInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: StringFilter<"Assignment"> | string
    title?: StringFilter<"Assignment"> | string
    description?: StringFilter<"Assignment"> | string
    category?: StringFilter<"Assignment"> | string
    budget?: FloatFilter<"Assignment"> | number
    deadline?: DateTimeFilter<"Assignment"> | Date | string
    priority?: StringFilter<"Assignment"> | string
    attachments?: JsonNullableFilter<"Assignment">
    additional?: StringNullableFilter<"Assignment"> | string | null
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    posterId?: StringFilter<"Assignment"> | string
    doerId?: StringNullableFilter<"Assignment"> | string | null
    stripePaymentIntentId?: StringNullableFilter<"Assignment"> | string | null
    acceptedBidId?: StringNullableFilter<"Assignment"> | string | null
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
  }

  export type AssignmentUpsertWithWhereUniqueWithoutDoerInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutDoerInput, AssignmentUncheckedUpdateWithoutDoerInput>
    create: XOR<AssignmentCreateWithoutDoerInput, AssignmentUncheckedCreateWithoutDoerInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutDoerInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutDoerInput, AssignmentUncheckedUpdateWithoutDoerInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutDoerInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutDoerInput>
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    content?: StringFilter<"Submission"> | string
    attachments?: JsonNullableFilter<"Submission">
    status?: StringFilter<"Submission"> | string
    feedback?: StringNullableFilter<"Submission"> | string | null
    assignmentId?: StringFilter<"Submission"> | string
    userId?: StringFilter<"Submission"> | string
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type BidUpsertWithWhereUniqueWithoutUserInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutUserInput, BidUncheckedUpdateWithoutUserInput>
    create: XOR<BidCreateWithoutUserInput, BidUncheckedCreateWithoutUserInput>
  }

  export type BidUpdateWithWhereUniqueWithoutUserInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutUserInput, BidUncheckedUpdateWithoutUserInput>
  }

  export type BidUpdateManyWithWhereWithoutUserInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutUserInput>
  }

  export type BidScalarWhereInput = {
    AND?: BidScalarWhereInput | BidScalarWhereInput[]
    OR?: BidScalarWhereInput[]
    NOT?: BidScalarWhereInput | BidScalarWhereInput[]
    id?: StringFilter<"Bid"> | string
    content?: StringFilter<"Bid"> | string
    bidAmount?: FloatFilter<"Bid"> | number
    status?: StringFilter<"Bid"> | string
    assignmentId?: StringFilter<"Bid"> | string
    userId?: StringFilter<"Bid"> | string
    createdAt?: DateTimeFilter<"Bid"> | Date | string
    updatedAt?: DateTimeFilter<"Bid"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
    create: XOR<ReviewCreateWithoutReviewerInput, ReviewUncheckedCreateWithoutReviewerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerInput, ReviewUncheckedUpdateWithoutReviewerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: FloatFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    assignmentId?: StringFilter<"Review"> | string
    reviewerId?: StringFilter<"Review"> | string
    receiverId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutReceiverInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReceiverInput, ReviewUncheckedUpdateWithoutReceiverInput>
    create: XOR<ReviewCreateWithoutReceiverInput, ReviewUncheckedCreateWithoutReceiverInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReceiverInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReceiverInput, ReviewUncheckedUpdateWithoutReceiverInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReceiverInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReceiverInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    content?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    fileUrls?: JsonNullableFilter<"Message">
    assignmentId?: StringNullableFilter<"Message"> | string | null
    senderId?: StringFilter<"Message"> | string
    receiverId?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    updatedAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutSenderInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutSenderInput, PaymentUncheckedUpdateWithoutSenderInput>
    create: XOR<PaymentCreateWithoutSenderInput, PaymentUncheckedCreateWithoutSenderInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutSenderInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutSenderInput, PaymentUncheckedUpdateWithoutSenderInput>
  }

  export type PaymentUpdateManyWithWhereWithoutSenderInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutSenderInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    stripePaymentId?: StringNullableFilter<"Payment"> | string | null
    stripeRefundId?: StringNullableFilter<"Payment"> | string | null
    assignmentId?: StringFilter<"Payment"> | string
    senderId?: StringFilter<"Payment"> | string
    receiverId?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutReceiverInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutReceiverInput, PaymentUncheckedUpdateWithoutReceiverInput>
    create: XOR<PaymentCreateWithoutReceiverInput, PaymentUncheckedCreateWithoutReceiverInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutReceiverInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutReceiverInput, PaymentUncheckedUpdateWithoutReceiverInput>
  }

  export type PaymentUpdateManyWithWhereWithoutReceiverInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutReceiverInput>
  }

  export type DisputeUpsertWithWhereUniqueWithoutInitiatorInput = {
    where: DisputeWhereUniqueInput
    update: XOR<DisputeUpdateWithoutInitiatorInput, DisputeUncheckedUpdateWithoutInitiatorInput>
    create: XOR<DisputeCreateWithoutInitiatorInput, DisputeUncheckedCreateWithoutInitiatorInput>
  }

  export type DisputeUpdateWithWhereUniqueWithoutInitiatorInput = {
    where: DisputeWhereUniqueInput
    data: XOR<DisputeUpdateWithoutInitiatorInput, DisputeUncheckedUpdateWithoutInitiatorInput>
  }

  export type DisputeUpdateManyWithWhereWithoutInitiatorInput = {
    where: DisputeScalarWhereInput
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyWithoutInitiatorInput>
  }

  export type DisputeScalarWhereInput = {
    AND?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
    OR?: DisputeScalarWhereInput[]
    NOT?: DisputeScalarWhereInput | DisputeScalarWhereInput[]
    id?: StringFilter<"Dispute"> | string
    reason?: StringFilter<"Dispute"> | string
    evidence?: JsonNullableFilter<"Dispute">
    status?: EnumDisputeStatusFilter<"Dispute"> | $Enums.DisputeStatus
    resolution?: StringNullableFilter<"Dispute"> | string | null
    assignmentId?: StringFilter<"Dispute"> | string
    paymentId?: StringFilter<"Dispute"> | string
    initiatorId?: StringFilter<"Dispute"> | string
    resolvedById?: StringNullableFilter<"Dispute"> | string | null
    createdAt?: DateTimeFilter<"Dispute"> | Date | string
    updatedAt?: DateTimeFilter<"Dispute"> | Date | string
  }

  export type DisputeUpsertWithWhereUniqueWithoutResolvedByInput = {
    where: DisputeWhereUniqueInput
    update: XOR<DisputeUpdateWithoutResolvedByInput, DisputeUncheckedUpdateWithoutResolvedByInput>
    create: XOR<DisputeCreateWithoutResolvedByInput, DisputeUncheckedCreateWithoutResolvedByInput>
  }

  export type DisputeUpdateWithWhereUniqueWithoutResolvedByInput = {
    where: DisputeWhereUniqueInput
    data: XOR<DisputeUpdateWithoutResolvedByInput, DisputeUncheckedUpdateWithoutResolvedByInput>
  }

  export type DisputeUpdateManyWithWhereWithoutResolvedByInput = {
    where: DisputeScalarWhereInput
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyWithoutResolvedByInput>
  }

  export type UserCreateWithoutPostedAssignmentsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acceptedAssignments?: AssignmentCreateNestedManyWithoutDoerInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutReceiverInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceiverInput
    disputes?: DisputeCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateWithoutPostedAssignmentsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acceptedAssignments?: AssignmentUncheckedCreateNestedManyWithoutDoerInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentUncheckedCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceiverInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserCreateOrConnectWithoutPostedAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostedAssignmentsInput, UserUncheckedCreateWithoutPostedAssignmentsInput>
  }

  export type UserCreateWithoutAcceptedAssignmentsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentCreateNestedManyWithoutPosterInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutReceiverInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceiverInput
    disputes?: DisputeCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateWithoutAcceptedAssignmentsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentUncheckedCreateNestedManyWithoutPosterInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentUncheckedCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceiverInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserCreateOrConnectWithoutAcceptedAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAcceptedAssignmentsInput, UserUncheckedCreateWithoutAcceptedAssignmentsInput>
  }

  export type SubmissionCreateWithoutAssignmentInput = {
    id?: string
    content: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    feedback?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutAssignmentInput = {
    id?: string
    content: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    feedback?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutAssignmentInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput>
  }

  export type SubmissionCreateManyAssignmentInputEnvelope = {
    data: SubmissionCreateManyAssignmentInput | SubmissionCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type BidCreateWithoutAssignmentInput = {
    id?: string
    content: string
    bidAmount: number
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBidsInput
  }

  export type BidUncheckedCreateWithoutAssignmentInput = {
    id?: string
    content: string
    bidAmount: number
    status?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidCreateOrConnectWithoutAssignmentInput = {
    where: BidWhereUniqueInput
    create: XOR<BidCreateWithoutAssignmentInput, BidUncheckedCreateWithoutAssignmentInput>
  }

  export type BidCreateManyAssignmentInputEnvelope = {
    data: BidCreateManyAssignmentInput | BidCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutAssignmentInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewer: UserCreateNestedOneWithoutReviewsInput
    receiver: UserCreateNestedOneWithoutReceivedReviewsInput
  }

  export type ReviewUncheckedCreateWithoutAssignmentInput = {
    id?: string
    rating: number
    comment?: string | null
    reviewerId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutAssignmentInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutAssignmentInput, ReviewUncheckedCreateWithoutAssignmentInput>
  }

  export type ReviewCreateManyAssignmentInputEnvelope = {
    data: ReviewCreateManyAssignmentInput | ReviewCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutAssignmentInput = {
    id?: string
    content: string
    isRead?: boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutMessagesInput
    receiver: UserCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutAssignmentInput = {
    id?: string
    content: string
    isRead?: boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    senderId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutAssignmentInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutAssignmentInput, MessageUncheckedCreateWithoutAssignmentInput>
  }

  export type MessageCreateManyAssignmentInputEnvelope = {
    data: MessageCreateManyAssignmentInput | MessageCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutAssignmentInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    stripePaymentId?: string | null
    stripeRefundId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sender: UserCreateNestedOneWithoutSentPaymentsInput
    receiver: UserCreateNestedOneWithoutReceivedPaymentsInput
    dispute?: DisputeCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutAssignmentInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    stripePaymentId?: string | null
    stripeRefundId?: string | null
    senderId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    dispute?: DisputeUncheckedCreateNestedOneWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutAssignmentInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutAssignmentInput, PaymentUncheckedCreateWithoutAssignmentInput>
  }

  export type DisputeCreateWithoutAssignmentInput = {
    id?: string
    reason: string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.DisputeStatus
    resolution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment: PaymentCreateNestedOneWithoutDisputeInput
    initiator: UserCreateNestedOneWithoutDisputesInput
    resolvedBy?: UserCreateNestedOneWithoutResolvedDisputesInput
  }

  export type DisputeUncheckedCreateWithoutAssignmentInput = {
    id?: string
    reason: string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.DisputeStatus
    resolution?: string | null
    paymentId: string
    initiatorId: string
    resolvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeCreateOrConnectWithoutAssignmentInput = {
    where: DisputeWhereUniqueInput
    create: XOR<DisputeCreateWithoutAssignmentInput, DisputeUncheckedCreateWithoutAssignmentInput>
  }

  export type DisputeCreateManyAssignmentInputEnvelope = {
    data: DisputeCreateManyAssignmentInput | DisputeCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPostedAssignmentsInput = {
    update: XOR<UserUpdateWithoutPostedAssignmentsInput, UserUncheckedUpdateWithoutPostedAssignmentsInput>
    create: XOR<UserCreateWithoutPostedAssignmentsInput, UserUncheckedCreateWithoutPostedAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostedAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostedAssignmentsInput, UserUncheckedUpdateWithoutPostedAssignmentsInput>
  }

  export type UserUpdateWithoutPostedAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAssignments?: AssignmentUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutReceiverNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateWithoutPostedAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedAssignments?: AssignmentUncheckedUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUncheckedUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUpsertWithoutAcceptedAssignmentsInput = {
    update: XOR<UserUpdateWithoutAcceptedAssignmentsInput, UserUncheckedUpdateWithoutAcceptedAssignmentsInput>
    create: XOR<UserCreateWithoutAcceptedAssignmentsInput, UserUncheckedCreateWithoutAcceptedAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAcceptedAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAcceptedAssignmentsInput, UserUncheckedUpdateWithoutAcceptedAssignmentsInput>
  }

  export type UserUpdateWithoutAcceptedAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUpdateManyWithoutPosterNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutReceiverNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAcceptedAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUncheckedUpdateManyWithoutPosterNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUncheckedUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutAssignmentInput, SubmissionUncheckedUpdateWithoutAssignmentInput>
    create: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutAssignmentInput, SubmissionUncheckedUpdateWithoutAssignmentInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutAssignmentInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type BidUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: BidWhereUniqueInput
    update: XOR<BidUpdateWithoutAssignmentInput, BidUncheckedUpdateWithoutAssignmentInput>
    create: XOR<BidCreateWithoutAssignmentInput, BidUncheckedCreateWithoutAssignmentInput>
  }

  export type BidUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: BidWhereUniqueInput
    data: XOR<BidUpdateWithoutAssignmentInput, BidUncheckedUpdateWithoutAssignmentInput>
  }

  export type BidUpdateManyWithWhereWithoutAssignmentInput = {
    where: BidScalarWhereInput
    data: XOR<BidUpdateManyMutationInput, BidUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutAssignmentInput, ReviewUncheckedUpdateWithoutAssignmentInput>
    create: XOR<ReviewCreateWithoutAssignmentInput, ReviewUncheckedCreateWithoutAssignmentInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutAssignmentInput, ReviewUncheckedUpdateWithoutAssignmentInput>
  }

  export type ReviewUpdateManyWithWhereWithoutAssignmentInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutAssignmentInput, MessageUncheckedUpdateWithoutAssignmentInput>
    create: XOR<MessageCreateWithoutAssignmentInput, MessageUncheckedCreateWithoutAssignmentInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutAssignmentInput, MessageUncheckedUpdateWithoutAssignmentInput>
  }

  export type MessageUpdateManyWithWhereWithoutAssignmentInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type PaymentUpsertWithoutAssignmentInput = {
    update: XOR<PaymentUpdateWithoutAssignmentInput, PaymentUncheckedUpdateWithoutAssignmentInput>
    create: XOR<PaymentCreateWithoutAssignmentInput, PaymentUncheckedCreateWithoutAssignmentInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutAssignmentInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutAssignmentInput, PaymentUncheckedUpdateWithoutAssignmentInput>
  }

  export type PaymentUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutSentPaymentsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedPaymentsNestedInput
    dispute?: DisputeUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispute?: DisputeUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type DisputeUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: DisputeWhereUniqueInput
    update: XOR<DisputeUpdateWithoutAssignmentInput, DisputeUncheckedUpdateWithoutAssignmentInput>
    create: XOR<DisputeCreateWithoutAssignmentInput, DisputeUncheckedCreateWithoutAssignmentInput>
  }

  export type DisputeUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: DisputeWhereUniqueInput
    data: XOR<DisputeUpdateWithoutAssignmentInput, DisputeUncheckedUpdateWithoutAssignmentInput>
  }

  export type DisputeUpdateManyWithWhereWithoutAssignmentInput = {
    where: DisputeScalarWhereInput
    data: XOR<DisputeUpdateManyMutationInput, DisputeUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type AssignmentCreateWithoutBidsInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster: UserCreateNestedOneWithoutPostedAssignmentsInput
    doer?: UserCreateNestedOneWithoutAcceptedAssignmentsInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewCreateNestedManyWithoutAssignmentInput
    messages?: MessageCreateNestedManyWithoutAssignmentInput
    payment?: PaymentCreateNestedOneWithoutAssignmentInput
    disputes?: DisputeCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutBidsInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    posterId: string
    doerId?: string | null
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAssignmentInput
    messages?: MessageUncheckedCreateNestedManyWithoutAssignmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutAssignmentInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutBidsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutBidsInput, AssignmentUncheckedCreateWithoutBidsInput>
  }

  export type UserCreateWithoutBidsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentCreateNestedManyWithoutDoerInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutReceiverInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceiverInput
    disputes?: DisputeCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateWithoutBidsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentUncheckedCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentUncheckedCreateNestedManyWithoutDoerInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentUncheckedCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceiverInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserCreateOrConnectWithoutBidsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
  }

  export type AssignmentUpsertWithoutBidsInput = {
    update: XOR<AssignmentUpdateWithoutBidsInput, AssignmentUncheckedUpdateWithoutBidsInput>
    create: XOR<AssignmentCreateWithoutBidsInput, AssignmentUncheckedCreateWithoutBidsInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutBidsInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutBidsInput, AssignmentUncheckedUpdateWithoutBidsInput>
  }

  export type AssignmentUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: UserUpdateOneRequiredWithoutPostedAssignmentsNestedInput
    doer?: UserUpdateOneWithoutAcceptedAssignmentsNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUpdateOneWithoutAssignmentNestedInput
    disputes?: DisputeUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    posterId?: StringFieldUpdateOperationsInput | string
    doerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutAssignmentNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type UserUpsertWithoutBidsInput = {
    update: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>
    create: XOR<UserCreateWithoutBidsInput, UserUncheckedCreateWithoutBidsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBidsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBidsInput, UserUncheckedUpdateWithoutBidsInput>
  }

  export type UserUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutReceiverNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateWithoutBidsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUncheckedUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUncheckedUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUncheckedUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type AssignmentCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster: UserCreateNestedOneWithoutPostedAssignmentsInput
    doer?: UserCreateNestedOneWithoutAcceptedAssignmentsInput
    bids?: BidCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewCreateNestedManyWithoutAssignmentInput
    messages?: MessageCreateNestedManyWithoutAssignmentInput
    payment?: PaymentCreateNestedOneWithoutAssignmentInput
    disputes?: DisputeCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    posterId: string
    doerId?: string | null
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    bids?: BidUncheckedCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAssignmentInput
    messages?: MessageUncheckedCreateNestedManyWithoutAssignmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutAssignmentInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutSubmissionsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutSubmissionsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentCreateNestedManyWithoutDoerInput
    bids?: BidCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutReceiverInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceiverInput
    disputes?: DisputeCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentUncheckedCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentUncheckedCreateNestedManyWithoutDoerInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentUncheckedCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceiverInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type AssignmentUpsertWithoutSubmissionsInput = {
    update: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type AssignmentUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: UserUpdateOneRequiredWithoutPostedAssignmentsNestedInput
    doer?: UserUpdateOneWithoutAcceptedAssignmentsNestedInput
    bids?: BidUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUpdateOneWithoutAssignmentNestedInput
    disputes?: DisputeUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    posterId?: StringFieldUpdateOperationsInput | string
    doerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bids?: BidUncheckedUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutAssignmentNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUpdateManyWithoutDoerNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutReceiverNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUncheckedUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUncheckedUpdateManyWithoutDoerNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUncheckedUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type AssignmentCreateWithoutReviewsInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster: UserCreateNestedOneWithoutPostedAssignmentsInput
    doer?: UserCreateNestedOneWithoutAcceptedAssignmentsInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
    bids?: BidCreateNestedManyWithoutAssignmentInput
    messages?: MessageCreateNestedManyWithoutAssignmentInput
    payment?: PaymentCreateNestedOneWithoutAssignmentInput
    disputes?: DisputeCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutReviewsInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    posterId: string
    doerId?: string | null
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
    bids?: BidUncheckedCreateNestedManyWithoutAssignmentInput
    messages?: MessageUncheckedCreateNestedManyWithoutAssignmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutAssignmentInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutReviewsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutReviewsInput, AssignmentUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentCreateNestedManyWithoutDoerInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    receivedReviews?: ReviewCreateNestedManyWithoutReceiverInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceiverInput
    disputes?: DisputeCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentUncheckedCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentUncheckedCreateNestedManyWithoutDoerInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentUncheckedCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceiverInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReceivedReviewsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentCreateNestedManyWithoutDoerInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceiverInput
    disputes?: DisputeCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateWithoutReceivedReviewsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentUncheckedCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentUncheckedCreateNestedManyWithoutDoerInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentUncheckedCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceiverInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserCreateOrConnectWithoutReceivedReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedReviewsInput, UserUncheckedCreateWithoutReceivedReviewsInput>
  }

  export type AssignmentUpsertWithoutReviewsInput = {
    update: XOR<AssignmentUpdateWithoutReviewsInput, AssignmentUncheckedUpdateWithoutReviewsInput>
    create: XOR<AssignmentCreateWithoutReviewsInput, AssignmentUncheckedCreateWithoutReviewsInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutReviewsInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutReviewsInput, AssignmentUncheckedUpdateWithoutReviewsInput>
  }

  export type AssignmentUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: UserUpdateOneRequiredWithoutPostedAssignmentsNestedInput
    doer?: UserUpdateOneWithoutAcceptedAssignmentsNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
    bids?: BidUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUpdateOneWithoutAssignmentNestedInput
    disputes?: DisputeUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    posterId?: StringFieldUpdateOperationsInput | string
    doerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
    bids?: BidUncheckedUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutAssignmentNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    receivedReviews?: ReviewUpdateManyWithoutReceiverNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUncheckedUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUncheckedUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUncheckedUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUpsertWithoutReceivedReviewsInput = {
    update: XOR<UserUpdateWithoutReceivedReviewsInput, UserUncheckedUpdateWithoutReceivedReviewsInput>
    create: XOR<UserCreateWithoutReceivedReviewsInput, UserUncheckedCreateWithoutReceivedReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedReviewsInput, UserUncheckedUpdateWithoutReceivedReviewsInput>
  }

  export type UserUpdateWithoutReceivedReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUncheckedUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUncheckedUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUncheckedUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type AssignmentCreateWithoutMessagesInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster: UserCreateNestedOneWithoutPostedAssignmentsInput
    doer?: UserCreateNestedOneWithoutAcceptedAssignmentsInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
    bids?: BidCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewCreateNestedManyWithoutAssignmentInput
    payment?: PaymentCreateNestedOneWithoutAssignmentInput
    disputes?: DisputeCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutMessagesInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    posterId: string
    doerId?: string | null
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
    bids?: BidUncheckedCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAssignmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutAssignmentInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutMessagesInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutMessagesInput, AssignmentUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutMessagesInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentCreateNestedManyWithoutDoerInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutReceiverInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceiverInput
    disputes?: DisputeCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateWithoutMessagesInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentUncheckedCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentUncheckedCreateNestedManyWithoutDoerInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentUncheckedCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceiverInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserCreateOrConnectWithoutMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
  }

  export type UserCreateWithoutReceivedMessagesInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentCreateNestedManyWithoutDoerInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutReceiverInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    sentPayments?: PaymentCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceiverInput
    disputes?: DisputeCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateWithoutReceivedMessagesInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentUncheckedCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentUncheckedCreateNestedManyWithoutDoerInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    sentPayments?: PaymentUncheckedCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceiverInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserCreateOrConnectWithoutReceivedMessagesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type AssignmentUpsertWithoutMessagesInput = {
    update: XOR<AssignmentUpdateWithoutMessagesInput, AssignmentUncheckedUpdateWithoutMessagesInput>
    create: XOR<AssignmentCreateWithoutMessagesInput, AssignmentUncheckedCreateWithoutMessagesInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutMessagesInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutMessagesInput, AssignmentUncheckedUpdateWithoutMessagesInput>
  }

  export type AssignmentUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: UserUpdateOneRequiredWithoutPostedAssignmentsNestedInput
    doer?: UserUpdateOneWithoutAcceptedAssignmentsNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
    bids?: BidUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUpdateOneWithoutAssignmentNestedInput
    disputes?: DisputeUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    posterId?: StringFieldUpdateOperationsInput | string
    doerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
    bids?: BidUncheckedUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutAssignmentNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type UserUpsertWithoutMessagesInput = {
    update: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
    create: XOR<UserCreateWithoutMessagesInput, UserUncheckedCreateWithoutMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessagesInput, UserUncheckedUpdateWithoutMessagesInput>
  }

  export type UserUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutReceiverNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUncheckedUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUncheckedUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUncheckedUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUpsertWithoutReceivedMessagesInput = {
    update: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<UserCreateWithoutReceivedMessagesInput, UserUncheckedCreateWithoutReceivedMessagesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedMessagesInput, UserUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type UserUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutReceiverNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    sentPayments?: PaymentUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUncheckedUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUncheckedUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    sentPayments?: PaymentUncheckedUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type AssignmentCreateWithoutPaymentInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster: UserCreateNestedOneWithoutPostedAssignmentsInput
    doer?: UserCreateNestedOneWithoutAcceptedAssignmentsInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
    bids?: BidCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewCreateNestedManyWithoutAssignmentInput
    messages?: MessageCreateNestedManyWithoutAssignmentInput
    disputes?: DisputeCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutPaymentInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    posterId: string
    doerId?: string | null
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
    bids?: BidUncheckedCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAssignmentInput
    messages?: MessageUncheckedCreateNestedManyWithoutAssignmentInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutPaymentInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutPaymentInput, AssignmentUncheckedCreateWithoutPaymentInput>
  }

  export type UserCreateWithoutSentPaymentsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentCreateNestedManyWithoutDoerInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutReceiverInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceiverInput
    disputes?: DisputeCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateWithoutSentPaymentsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentUncheckedCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentUncheckedCreateNestedManyWithoutDoerInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceiverInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserCreateOrConnectWithoutSentPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSentPaymentsInput, UserUncheckedCreateWithoutSentPaymentsInput>
  }

  export type UserCreateWithoutReceivedPaymentsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentCreateNestedManyWithoutDoerInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutReceiverInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentCreateNestedManyWithoutSenderInput
    disputes?: DisputeCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateWithoutReceivedPaymentsInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentUncheckedCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentUncheckedCreateNestedManyWithoutDoerInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentUncheckedCreateNestedManyWithoutSenderInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutInitiatorInput
    resolvedDisputes?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserCreateOrConnectWithoutReceivedPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReceivedPaymentsInput, UserUncheckedCreateWithoutReceivedPaymentsInput>
  }

  export type DisputeCreateWithoutPaymentInput = {
    id?: string
    reason: string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.DisputeStatus
    resolution?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutDisputesInput
    initiator: UserCreateNestedOneWithoutDisputesInput
    resolvedBy?: UserCreateNestedOneWithoutResolvedDisputesInput
  }

  export type DisputeUncheckedCreateWithoutPaymentInput = {
    id?: string
    reason: string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.DisputeStatus
    resolution?: string | null
    assignmentId: string
    initiatorId: string
    resolvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeCreateOrConnectWithoutPaymentInput = {
    where: DisputeWhereUniqueInput
    create: XOR<DisputeCreateWithoutPaymentInput, DisputeUncheckedCreateWithoutPaymentInput>
  }

  export type AssignmentUpsertWithoutPaymentInput = {
    update: XOR<AssignmentUpdateWithoutPaymentInput, AssignmentUncheckedUpdateWithoutPaymentInput>
    create: XOR<AssignmentCreateWithoutPaymentInput, AssignmentUncheckedCreateWithoutPaymentInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutPaymentInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutPaymentInput, AssignmentUncheckedUpdateWithoutPaymentInput>
  }

  export type AssignmentUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: UserUpdateOneRequiredWithoutPostedAssignmentsNestedInput
    doer?: UserUpdateOneWithoutAcceptedAssignmentsNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
    bids?: BidUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUpdateManyWithoutAssignmentNestedInput
    disputes?: DisputeUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    posterId?: StringFieldUpdateOperationsInput | string
    doerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
    bids?: BidUncheckedUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAssignmentNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type UserUpsertWithoutSentPaymentsInput = {
    update: XOR<UserUpdateWithoutSentPaymentsInput, UserUncheckedUpdateWithoutSentPaymentsInput>
    create: XOR<UserCreateWithoutSentPaymentsInput, UserUncheckedCreateWithoutSentPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSentPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSentPaymentsInput, UserUncheckedUpdateWithoutSentPaymentsInput>
  }

  export type UserUpdateWithoutSentPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutReceiverNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateWithoutSentPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUncheckedUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUncheckedUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUpsertWithoutReceivedPaymentsInput = {
    update: XOR<UserUpdateWithoutReceivedPaymentsInput, UserUncheckedUpdateWithoutReceivedPaymentsInput>
    create: XOR<UserCreateWithoutReceivedPaymentsInput, UserUncheckedCreateWithoutReceivedPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReceivedPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReceivedPaymentsInput, UserUncheckedUpdateWithoutReceivedPaymentsInput>
  }

  export type UserUpdateWithoutReceivedPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutReceiverNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUpdateManyWithoutSenderNestedInput
    disputes?: DisputeUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateWithoutReceivedPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUncheckedUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUncheckedUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUncheckedUpdateManyWithoutSenderNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutInitiatorNestedInput
    resolvedDisputes?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type DisputeUpsertWithoutPaymentInput = {
    update: XOR<DisputeUpdateWithoutPaymentInput, DisputeUncheckedUpdateWithoutPaymentInput>
    create: XOR<DisputeCreateWithoutPaymentInput, DisputeUncheckedCreateWithoutPaymentInput>
    where?: DisputeWhereInput
  }

  export type DisputeUpdateToOneWithWhereWithoutPaymentInput = {
    where?: DisputeWhereInput
    data: XOR<DisputeUpdateWithoutPaymentInput, DisputeUncheckedUpdateWithoutPaymentInput>
  }

  export type DisputeUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutDisputesNestedInput
    initiator?: UserUpdateOneRequiredWithoutDisputesNestedInput
    resolvedBy?: UserUpdateOneWithoutResolvedDisputesNestedInput
  }

  export type DisputeUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    initiatorId?: StringFieldUpdateOperationsInput | string
    resolvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateWithoutDisputesInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    poster: UserCreateNestedOneWithoutPostedAssignmentsInput
    doer?: UserCreateNestedOneWithoutAcceptedAssignmentsInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
    bids?: BidCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewCreateNestedManyWithoutAssignmentInput
    messages?: MessageCreateNestedManyWithoutAssignmentInput
    payment?: PaymentCreateNestedOneWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutDisputesInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    posterId: string
    doerId?: string | null
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
    bids?: BidUncheckedCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAssignmentInput
    messages?: MessageUncheckedCreateNestedManyWithoutAssignmentInput
    payment?: PaymentUncheckedCreateNestedOneWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutDisputesInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutDisputesInput, AssignmentUncheckedCreateWithoutDisputesInput>
  }

  export type PaymentCreateWithoutDisputeInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    stripePaymentId?: string | null
    stripeRefundId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutPaymentInput
    sender: UserCreateNestedOneWithoutSentPaymentsInput
    receiver: UserCreateNestedOneWithoutReceivedPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutDisputeInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    stripePaymentId?: string | null
    stripeRefundId?: string | null
    assignmentId: string
    senderId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutDisputeInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutDisputeInput, PaymentUncheckedCreateWithoutDisputeInput>
  }

  export type UserCreateWithoutDisputesInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentCreateNestedManyWithoutDoerInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutReceiverInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceiverInput
    resolvedDisputes?: DisputeCreateNestedManyWithoutResolvedByInput
  }

  export type UserUncheckedCreateWithoutDisputesInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentUncheckedCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentUncheckedCreateNestedManyWithoutDoerInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentUncheckedCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceiverInput
    resolvedDisputes?: DisputeUncheckedCreateNestedManyWithoutResolvedByInput
  }

  export type UserCreateOrConnectWithoutDisputesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDisputesInput, UserUncheckedCreateWithoutDisputesInput>
  }

  export type UserCreateWithoutResolvedDisputesInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentCreateNestedManyWithoutDoerInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    bids?: BidCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewCreateNestedManyWithoutReceiverInput
    messages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentCreateNestedManyWithoutReceiverInput
    disputes?: DisputeCreateNestedManyWithoutInitiatorInput
  }

  export type UserUncheckedCreateWithoutResolvedDisputesInput = {
    id: string
    name?: string | null
    email?: string | null
    image?: string | null
    role?: $Enums.Role
    bio?: string | null
    skills?: string | null
    rating?: number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: string | null
    rejectionReason?: string | null
    accountBalance?: number
    stripeConnectAccountId?: string | null
    stripeAccountVerified?: boolean | null
    clerkId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postedAssignments?: AssignmentUncheckedCreateNestedManyWithoutPosterInput
    acceptedAssignments?: AssignmentUncheckedCreateNestedManyWithoutDoerInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    bids?: BidUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutReviewerInput
    receivedReviews?: ReviewUncheckedCreateNestedManyWithoutReceiverInput
    messages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
    sentPayments?: PaymentUncheckedCreateNestedManyWithoutSenderInput
    receivedPayments?: PaymentUncheckedCreateNestedManyWithoutReceiverInput
    disputes?: DisputeUncheckedCreateNestedManyWithoutInitiatorInput
  }

  export type UserCreateOrConnectWithoutResolvedDisputesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResolvedDisputesInput, UserUncheckedCreateWithoutResolvedDisputesInput>
  }

  export type AssignmentUpsertWithoutDisputesInput = {
    update: XOR<AssignmentUpdateWithoutDisputesInput, AssignmentUncheckedUpdateWithoutDisputesInput>
    create: XOR<AssignmentCreateWithoutDisputesInput, AssignmentUncheckedCreateWithoutDisputesInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutDisputesInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutDisputesInput, AssignmentUncheckedUpdateWithoutDisputesInput>
  }

  export type AssignmentUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: UserUpdateOneRequiredWithoutPostedAssignmentsNestedInput
    doer?: UserUpdateOneWithoutAcceptedAssignmentsNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
    bids?: BidUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUpdateOneWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    posterId?: StringFieldUpdateOperationsInput | string
    doerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
    bids?: BidUncheckedUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutAssignmentNestedInput
  }

  export type PaymentUpsertWithoutDisputeInput = {
    update: XOR<PaymentUpdateWithoutDisputeInput, PaymentUncheckedUpdateWithoutDisputeInput>
    create: XOR<PaymentCreateWithoutDisputeInput, PaymentUncheckedCreateWithoutDisputeInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutDisputeInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutDisputeInput, PaymentUncheckedUpdateWithoutDisputeInput>
  }

  export type PaymentUpdateWithoutDisputeInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutPaymentNestedInput
    sender?: UserUpdateOneRequiredWithoutSentPaymentsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutDisputeInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutDisputesInput = {
    update: XOR<UserUpdateWithoutDisputesInput, UserUncheckedUpdateWithoutDisputesInput>
    create: XOR<UserCreateWithoutDisputesInput, UserUncheckedCreateWithoutDisputesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDisputesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDisputesInput, UserUncheckedUpdateWithoutDisputesInput>
  }

  export type UserUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutReceiverNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceiverNestedInput
    resolvedDisputes?: DisputeUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUncheckedUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUncheckedUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUncheckedUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceiverNestedInput
    resolvedDisputes?: DisputeUncheckedUpdateManyWithoutResolvedByNestedInput
  }

  export type UserUpsertWithoutResolvedDisputesInput = {
    update: XOR<UserUpdateWithoutResolvedDisputesInput, UserUncheckedUpdateWithoutResolvedDisputesInput>
    create: XOR<UserCreateWithoutResolvedDisputesInput, UserUncheckedCreateWithoutResolvedDisputesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResolvedDisputesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResolvedDisputesInput, UserUncheckedUpdateWithoutResolvedDisputesInput>
  }

  export type UserUpdateWithoutResolvedDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    bids?: BidUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUpdateManyWithoutReceiverNestedInput
    messages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUpdateManyWithoutInitiatorNestedInput
  }

  export type UserUncheckedUpdateWithoutResolvedDisputesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    skills?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    citizenshipPhotos?: NullableJsonNullValueInput | InputJsonValue
    verificationStatus?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    accountBalance?: FloatFieldUpdateOperationsInput | number
    stripeConnectAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeAccountVerified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    clerkId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postedAssignments?: AssignmentUncheckedUpdateManyWithoutPosterNestedInput
    acceptedAssignments?: AssignmentUncheckedUpdateManyWithoutDoerNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    bids?: BidUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutReviewerNestedInput
    receivedReviews?: ReviewUncheckedUpdateManyWithoutReceiverNestedInput
    messages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
    sentPayments?: PaymentUncheckedUpdateManyWithoutSenderNestedInput
    receivedPayments?: PaymentUncheckedUpdateManyWithoutReceiverNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutInitiatorNestedInput
  }

  export type AssignmentCreateManyPosterInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    doerId?: string | null
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentCreateManyDoerInput = {
    id?: string
    title: string
    description: string
    category: string
    budget: number
    deadline: Date | string
    priority: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: string | null
    status?: $Enums.AssignmentStatus
    posterId: string
    stripePaymentIntentId?: string | null
    acceptedBidId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    content: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    feedback?: string | null
    assignmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidCreateManyUserInput = {
    id?: string
    content: string
    bidAmount: number
    status?: string
    assignmentId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyReviewerInput = {
    id?: string
    rating: number
    comment?: string | null
    assignmentId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyReceiverInput = {
    id?: string
    rating: number
    comment?: string | null
    assignmentId: string
    reviewerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManySenderInput = {
    id?: string
    content: string
    isRead?: boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    assignmentId?: string | null
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManyReceiverInput = {
    id?: string
    content: string
    isRead?: boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    assignmentId?: string | null
    senderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManySenderInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    stripePaymentId?: string | null
    stripeRefundId?: string | null
    assignmentId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateManyReceiverInput = {
    id?: string
    amount: number
    status?: $Enums.PaymentStatus
    stripePaymentId?: string | null
    stripeRefundId?: string | null
    assignmentId: string
    senderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeCreateManyInitiatorInput = {
    id?: string
    reason: string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.DisputeStatus
    resolution?: string | null
    assignmentId: string
    paymentId: string
    resolvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeCreateManyResolvedByInput = {
    id?: string
    reason: string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.DisputeStatus
    resolution?: string | null
    assignmentId: string
    paymentId: string
    initiatorId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentUpdateWithoutPosterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doer?: UserUpdateOneWithoutAcceptedAssignmentsNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
    bids?: BidUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUpdateOneWithoutAssignmentNestedInput
    disputes?: DisputeUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutPosterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    doerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
    bids?: BidUncheckedUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutAssignmentNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutPosterInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    doerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutDoerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    poster?: UserUpdateOneRequiredWithoutPostedAssignmentsNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
    bids?: BidUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUpdateOneWithoutAssignmentNestedInput
    disputes?: DisputeUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutDoerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    posterId?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
    bids?: BidUncheckedUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAssignmentNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAssignmentNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutAssignmentNestedInput
    disputes?: DisputeUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutDoerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    budget?: FloatFieldUpdateOperationsInput | number
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    priority?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    additional?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    posterId?: StringFieldUpdateOperationsInput | string
    stripePaymentIntentId?: NullableStringFieldUpdateOperationsInput | string | null
    acceptedBidId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    bidAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    bidAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    bidAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutReviewsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutReviewsNestedInput
    reviewer?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneWithoutMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    assignmentId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    assignmentId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneWithoutMessagesNestedInput
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    assignmentId?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    assignmentId?: NullableStringFieldUpdateOperationsInput | string | null
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutPaymentNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedPaymentsNestedInput
    dispute?: DisputeUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispute?: DisputeUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutPaymentNestedInput
    sender?: UserUpdateOneRequiredWithoutSentPaymentsNestedInput
    dispute?: DisputeUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dispute?: DisputeUncheckedUpdateOneWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    stripePaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeRefundId?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUpdateWithoutInitiatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutDisputesNestedInput
    payment?: PaymentUpdateOneRequiredWithoutDisputeNestedInput
    resolvedBy?: UserUpdateOneWithoutResolvedDisputesNestedInput
  }

  export type DisputeUncheckedUpdateWithoutInitiatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    resolvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUncheckedUpdateManyWithoutInitiatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    resolvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUpdateWithoutResolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutDisputesNestedInput
    payment?: PaymentUpdateOneRequiredWithoutDisputeNestedInput
    initiator?: UserUpdateOneRequiredWithoutDisputesNestedInput
  }

  export type DisputeUncheckedUpdateWithoutResolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    initiatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUncheckedUpdateManyWithoutResolvedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    assignmentId?: StringFieldUpdateOperationsInput | string
    paymentId?: StringFieldUpdateOperationsInput | string
    initiatorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyAssignmentInput = {
    id?: string
    content: string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: string
    feedback?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BidCreateManyAssignmentInput = {
    id?: string
    content: string
    bidAmount: number
    status?: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyAssignmentInput = {
    id?: string
    rating: number
    comment?: string | null
    reviewerId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MessageCreateManyAssignmentInput = {
    id?: string
    content: string
    isRead?: boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    senderId: string
    receiverId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DisputeCreateManyAssignmentInput = {
    id?: string
    reason: string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.DisputeStatus
    resolution?: string | null
    paymentId: string
    initiatorId: string
    resolvedById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    attachments?: NullableJsonNullValueInput | InputJsonValue
    status?: StringFieldUpdateOperationsInput | string
    feedback?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    bidAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBidsNestedInput
  }

  export type BidUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    bidAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BidUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    bidAmount?: FloatFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewer?: UserUpdateOneRequiredWithoutReviewsNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    reviewerId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: UserUpdateOneRequiredWithoutMessagesNestedInput
    receiver?: UserUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    fileUrls?: NullableJsonNullValueInput | InputJsonValue
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PaymentUpdateOneRequiredWithoutDisputeNestedInput
    initiator?: UserUpdateOneRequiredWithoutDisputesNestedInput
    resolvedBy?: UserUpdateOneWithoutResolvedDisputesNestedInput
  }

  export type DisputeUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: StringFieldUpdateOperationsInput | string
    initiatorId?: StringFieldUpdateOperationsInput | string
    resolvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DisputeUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    evidence?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumDisputeStatusFieldUpdateOperationsInput | $Enums.DisputeStatus
    resolution?: NullableStringFieldUpdateOperationsInput | string | null
    paymentId?: StringFieldUpdateOperationsInput | string
    initiatorId?: StringFieldUpdateOperationsInput | string
    resolvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}