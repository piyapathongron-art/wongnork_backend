
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Restaurant
 * 
 */
export type Restaurant = $Result.DefaultSelection<Prisma.$RestaurantPayload>
/**
 * Model OperatingHour
 * 
 */
export type OperatingHour = $Result.DefaultSelection<Prisma.$OperatingHourPayload>
/**
 * Model RestaurantImage
 * 
 */
export type RestaurantImage = $Result.DefaultSelection<Prisma.$RestaurantImagePayload>
/**
 * Model SavedRestaurant
 * 
 */
export type SavedRestaurant = $Result.DefaultSelection<Prisma.$SavedRestaurantPayload>
/**
 * Model Menu
 * 
 */
export type Menu = $Result.DefaultSelection<Prisma.$MenuPayload>
/**
 * Model Party
 * 
 */
export type Party = $Result.DefaultSelection<Prisma.$PartyPayload>
/**
 * Model PartyCustomItem
 * 
 */
export type PartyCustomItem = $Result.DefaultSelection<Prisma.$PartyCustomItemPayload>
/**
 * Model PartyMember
 * 
 */
export type PartyMember = $Result.DefaultSelection<Prisma.$PartyMemberPayload>
/**
 * Model MemberOrderItem
 * 
 */
export type MemberOrderItem = $Result.DefaultSelection<Prisma.$MemberOrderItemPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  OWNER: 'OWNER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Provider: {
  LOCAL: 'LOCAL',
  GOOGLE: 'GOOGLE'
};

export type Provider = (typeof Provider)[keyof typeof Provider]


export const PartyStatus: {
  OPEN: 'OPEN',
  FULL: 'FULL',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type PartyStatus = (typeof PartyStatus)[keyof typeof PartyStatus]


export const DayOfWeek: {
  MONDAY: 'MONDAY',
  TUESDAY: 'TUESDAY',
  WEDNESDAY: 'WEDNESDAY',
  THURSDAY: 'THURSDAY',
  FRIDAY: 'FRIDAY',
  SATURDAY: 'SATURDAY',
  SUNDAY: 'SUNDAY'
};

export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Provider = $Enums.Provider

export const Provider: typeof $Enums.Provider

export type PartyStatus = $Enums.PartyStatus

export const PartyStatus: typeof $Enums.PartyStatus

export type DayOfWeek = $Enums.DayOfWeek

export const DayOfWeek: typeof $Enums.DayOfWeek

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
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
   * `prisma.restaurant`: Exposes CRUD operations for the **Restaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Restaurants
    * const restaurants = await prisma.restaurant.findMany()
    * ```
    */
  get restaurant(): Prisma.RestaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operatingHour`: Exposes CRUD operations for the **OperatingHour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OperatingHours
    * const operatingHours = await prisma.operatingHour.findMany()
    * ```
    */
  get operatingHour(): Prisma.OperatingHourDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.restaurantImage`: Exposes CRUD operations for the **RestaurantImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RestaurantImages
    * const restaurantImages = await prisma.restaurantImage.findMany()
    * ```
    */
  get restaurantImage(): Prisma.RestaurantImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.savedRestaurant`: Exposes CRUD operations for the **SavedRestaurant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SavedRestaurants
    * const savedRestaurants = await prisma.savedRestaurant.findMany()
    * ```
    */
  get savedRestaurant(): Prisma.SavedRestaurantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.menu`: Exposes CRUD operations for the **Menu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Menus
    * const menus = await prisma.menu.findMany()
    * ```
    */
  get menu(): Prisma.MenuDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.party`: Exposes CRUD operations for the **Party** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Parties
    * const parties = await prisma.party.findMany()
    * ```
    */
  get party(): Prisma.PartyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partyCustomItem`: Exposes CRUD operations for the **PartyCustomItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartyCustomItems
    * const partyCustomItems = await prisma.partyCustomItem.findMany()
    * ```
    */
  get partyCustomItem(): Prisma.PartyCustomItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partyMember`: Exposes CRUD operations for the **PartyMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PartyMembers
    * const partyMembers = await prisma.partyMember.findMany()
    * ```
    */
  get partyMember(): Prisma.PartyMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.memberOrderItem`: Exposes CRUD operations for the **MemberOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MemberOrderItems
    * const memberOrderItems = await prisma.memberOrderItem.findMany()
    * ```
    */
  get memberOrderItem(): Prisma.MemberOrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Restaurant: 'Restaurant',
    OperatingHour: 'OperatingHour',
    RestaurantImage: 'RestaurantImage',
    SavedRestaurant: 'SavedRestaurant',
    Menu: 'Menu',
    Party: 'Party',
    PartyCustomItem: 'PartyCustomItem',
    PartyMember: 'PartyMember',
    MemberOrderItem: 'MemberOrderItem',
    Review: 'Review'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "restaurant" | "operatingHour" | "restaurantImage" | "savedRestaurant" | "menu" | "party" | "partyCustomItem" | "partyMember" | "memberOrderItem" | "review"
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
      Restaurant: {
        payload: Prisma.$RestaurantPayload<ExtArgs>
        fields: Prisma.RestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findFirst: {
            args: Prisma.RestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          findMany: {
            args: Prisma.RestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>[]
          }
          create: {
            args: Prisma.RestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          createMany: {
            args: Prisma.RestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          update: {
            args: Prisma.RestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          deleteMany: {
            args: Prisma.RestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantPayload>
          }
          aggregate: {
            args: Prisma.RestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurant>
          }
          groupBy: {
            args: Prisma.RestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantCountAggregateOutputType> | number
          }
        }
      }
      OperatingHour: {
        payload: Prisma.$OperatingHourPayload<ExtArgs>
        fields: Prisma.OperatingHourFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OperatingHourFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHourPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OperatingHourFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHourPayload>
          }
          findFirst: {
            args: Prisma.OperatingHourFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHourPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OperatingHourFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHourPayload>
          }
          findMany: {
            args: Prisma.OperatingHourFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHourPayload>[]
          }
          create: {
            args: Prisma.OperatingHourCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHourPayload>
          }
          createMany: {
            args: Prisma.OperatingHourCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OperatingHourDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHourPayload>
          }
          update: {
            args: Prisma.OperatingHourUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHourPayload>
          }
          deleteMany: {
            args: Prisma.OperatingHourDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OperatingHourUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OperatingHourUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OperatingHourPayload>
          }
          aggregate: {
            args: Prisma.OperatingHourAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperatingHour>
          }
          groupBy: {
            args: Prisma.OperatingHourGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperatingHourGroupByOutputType>[]
          }
          count: {
            args: Prisma.OperatingHourCountArgs<ExtArgs>
            result: $Utils.Optional<OperatingHourCountAggregateOutputType> | number
          }
        }
      }
      RestaurantImage: {
        payload: Prisma.$RestaurantImagePayload<ExtArgs>
        fields: Prisma.RestaurantImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RestaurantImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RestaurantImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantImagePayload>
          }
          findFirst: {
            args: Prisma.RestaurantImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RestaurantImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantImagePayload>
          }
          findMany: {
            args: Prisma.RestaurantImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantImagePayload>[]
          }
          create: {
            args: Prisma.RestaurantImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantImagePayload>
          }
          createMany: {
            args: Prisma.RestaurantImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RestaurantImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantImagePayload>
          }
          update: {
            args: Prisma.RestaurantImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantImagePayload>
          }
          deleteMany: {
            args: Prisma.RestaurantImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RestaurantImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RestaurantImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RestaurantImagePayload>
          }
          aggregate: {
            args: Prisma.RestaurantImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRestaurantImage>
          }
          groupBy: {
            args: Prisma.RestaurantImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<RestaurantImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.RestaurantImageCountArgs<ExtArgs>
            result: $Utils.Optional<RestaurantImageCountAggregateOutputType> | number
          }
        }
      }
      SavedRestaurant: {
        payload: Prisma.$SavedRestaurantPayload<ExtArgs>
        fields: Prisma.SavedRestaurantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SavedRestaurantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRestaurantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SavedRestaurantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRestaurantPayload>
          }
          findFirst: {
            args: Prisma.SavedRestaurantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRestaurantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SavedRestaurantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRestaurantPayload>
          }
          findMany: {
            args: Prisma.SavedRestaurantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRestaurantPayload>[]
          }
          create: {
            args: Prisma.SavedRestaurantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRestaurantPayload>
          }
          createMany: {
            args: Prisma.SavedRestaurantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SavedRestaurantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRestaurantPayload>
          }
          update: {
            args: Prisma.SavedRestaurantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRestaurantPayload>
          }
          deleteMany: {
            args: Prisma.SavedRestaurantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SavedRestaurantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SavedRestaurantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SavedRestaurantPayload>
          }
          aggregate: {
            args: Prisma.SavedRestaurantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSavedRestaurant>
          }
          groupBy: {
            args: Prisma.SavedRestaurantGroupByArgs<ExtArgs>
            result: $Utils.Optional<SavedRestaurantGroupByOutputType>[]
          }
          count: {
            args: Prisma.SavedRestaurantCountArgs<ExtArgs>
            result: $Utils.Optional<SavedRestaurantCountAggregateOutputType> | number
          }
        }
      }
      Menu: {
        payload: Prisma.$MenuPayload<ExtArgs>
        fields: Prisma.MenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MenuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MenuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findFirst: {
            args: Prisma.MenuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MenuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          findMany: {
            args: Prisma.MenuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>[]
          }
          create: {
            args: Prisma.MenuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          createMany: {
            args: Prisma.MenuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MenuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          update: {
            args: Prisma.MenuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          deleteMany: {
            args: Prisma.MenuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MenuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MenuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MenuPayload>
          }
          aggregate: {
            args: Prisma.MenuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMenu>
          }
          groupBy: {
            args: Prisma.MenuGroupByArgs<ExtArgs>
            result: $Utils.Optional<MenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MenuCountArgs<ExtArgs>
            result: $Utils.Optional<MenuCountAggregateOutputType> | number
          }
        }
      }
      Party: {
        payload: Prisma.$PartyPayload<ExtArgs>
        fields: Prisma.PartyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          findFirst: {
            args: Prisma.PartyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          findMany: {
            args: Prisma.PartyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>[]
          }
          create: {
            args: Prisma.PartyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          createMany: {
            args: Prisma.PartyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PartyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          update: {
            args: Prisma.PartyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          deleteMany: {
            args: Prisma.PartyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyPayload>
          }
          aggregate: {
            args: Prisma.PartyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParty>
          }
          groupBy: {
            args: Prisma.PartyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartyCountArgs<ExtArgs>
            result: $Utils.Optional<PartyCountAggregateOutputType> | number
          }
        }
      }
      PartyCustomItem: {
        payload: Prisma.$PartyCustomItemPayload<ExtArgs>
        fields: Prisma.PartyCustomItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartyCustomItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyCustomItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartyCustomItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyCustomItemPayload>
          }
          findFirst: {
            args: Prisma.PartyCustomItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyCustomItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartyCustomItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyCustomItemPayload>
          }
          findMany: {
            args: Prisma.PartyCustomItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyCustomItemPayload>[]
          }
          create: {
            args: Prisma.PartyCustomItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyCustomItemPayload>
          }
          createMany: {
            args: Prisma.PartyCustomItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PartyCustomItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyCustomItemPayload>
          }
          update: {
            args: Prisma.PartyCustomItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyCustomItemPayload>
          }
          deleteMany: {
            args: Prisma.PartyCustomItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartyCustomItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartyCustomItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyCustomItemPayload>
          }
          aggregate: {
            args: Prisma.PartyCustomItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartyCustomItem>
          }
          groupBy: {
            args: Prisma.PartyCustomItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartyCustomItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartyCustomItemCountArgs<ExtArgs>
            result: $Utils.Optional<PartyCustomItemCountAggregateOutputType> | number
          }
        }
      }
      PartyMember: {
        payload: Prisma.$PartyMemberPayload<ExtArgs>
        fields: Prisma.PartyMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartyMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartyMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>
          }
          findFirst: {
            args: Prisma.PartyMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartyMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>
          }
          findMany: {
            args: Prisma.PartyMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>[]
          }
          create: {
            args: Prisma.PartyMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>
          }
          createMany: {
            args: Prisma.PartyMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PartyMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>
          }
          update: {
            args: Prisma.PartyMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>
          }
          deleteMany: {
            args: Prisma.PartyMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartyMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PartyMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartyMemberPayload>
          }
          aggregate: {
            args: Prisma.PartyMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartyMember>
          }
          groupBy: {
            args: Prisma.PartyMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartyMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartyMemberCountArgs<ExtArgs>
            result: $Utils.Optional<PartyMemberCountAggregateOutputType> | number
          }
        }
      }
      MemberOrderItem: {
        payload: Prisma.$MemberOrderItemPayload<ExtArgs>
        fields: Prisma.MemberOrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberOrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberOrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberOrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberOrderItemPayload>
          }
          findFirst: {
            args: Prisma.MemberOrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberOrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberOrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberOrderItemPayload>
          }
          findMany: {
            args: Prisma.MemberOrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberOrderItemPayload>[]
          }
          create: {
            args: Prisma.MemberOrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberOrderItemPayload>
          }
          createMany: {
            args: Prisma.MemberOrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MemberOrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberOrderItemPayload>
          }
          update: {
            args: Prisma.MemberOrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberOrderItemPayload>
          }
          deleteMany: {
            args: Prisma.MemberOrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberOrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemberOrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberOrderItemPayload>
          }
          aggregate: {
            args: Prisma.MemberOrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMemberOrderItem>
          }
          groupBy: {
            args: Prisma.MemberOrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberOrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberOrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<MemberOrderItemCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    restaurant?: RestaurantOmit
    operatingHour?: OperatingHourOmit
    restaurantImage?: RestaurantImageOmit
    savedRestaurant?: SavedRestaurantOmit
    menu?: MenuOmit
    party?: PartyOmit
    partyCustomItem?: PartyCustomItemOmit
    partyMember?: PartyMemberOmit
    memberOrderItem?: MemberOrderItemOmit
    review?: ReviewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    reviews: number
    partiesLed: number
    joinedParties: number
    ownedRestaurants: number
    savedRestaurants: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    partiesLed?: boolean | UserCountOutputTypeCountPartiesLedArgs
    joinedParties?: boolean | UserCountOutputTypeCountJoinedPartiesArgs
    ownedRestaurants?: boolean | UserCountOutputTypeCountOwnedRestaurantsArgs
    savedRestaurants?: boolean | UserCountOutputTypeCountSavedRestaurantsArgs
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
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPartiesLedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJoinedPartiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartyMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedRestaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSavedRestaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedRestaurantWhereInput
  }


  /**
   * Count Type RestaurantCountOutputType
   */

  export type RestaurantCountOutputType = {
    images: number
    reviews: number
    menus: number
    parties: number
    operatingHours: number
    savedBy: number
  }

  export type RestaurantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | RestaurantCountOutputTypeCountImagesArgs
    reviews?: boolean | RestaurantCountOutputTypeCountReviewsArgs
    menus?: boolean | RestaurantCountOutputTypeCountMenusArgs
    parties?: boolean | RestaurantCountOutputTypeCountPartiesArgs
    operatingHours?: boolean | RestaurantCountOutputTypeCountOperatingHoursArgs
    savedBy?: boolean | RestaurantCountOutputTypeCountSavedByArgs
  }

  // Custom InputTypes
  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantCountOutputType
     */
    select?: RestaurantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantImageWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountPartiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartyWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountOperatingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperatingHourWhereInput
  }

  /**
   * RestaurantCountOutputType without action
   */
  export type RestaurantCountOutputTypeCountSavedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedRestaurantWhereInput
  }


  /**
   * Count Type MenuCountOutputType
   */

  export type MenuCountOutputType = {
    orderItems: number
  }

  export type MenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | MenuCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MenuCountOutputType
     */
    select?: MenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MenuCountOutputType without action
   */
  export type MenuCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberOrderItemWhereInput
  }


  /**
   * Count Type PartyCountOutputType
   */

  export type PartyCountOutputType = {
    members: number
    customItems: number
  }

  export type PartyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | PartyCountOutputTypeCountMembersArgs
    customItems?: boolean | PartyCountOutputTypeCountCustomItemsArgs
  }

  // Custom InputTypes
  /**
   * PartyCountOutputType without action
   */
  export type PartyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCountOutputType
     */
    select?: PartyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartyCountOutputType without action
   */
  export type PartyCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartyMemberWhereInput
  }

  /**
   * PartyCountOutputType without action
   */
  export type PartyCountOutputTypeCountCustomItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartyCustomItemWhereInput
  }


  /**
   * Count Type PartyCustomItemCountOutputType
   */

  export type PartyCustomItemCountOutputType = {
    orderItems: number
  }

  export type PartyCustomItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | PartyCustomItemCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * PartyCustomItemCountOutputType without action
   */
  export type PartyCustomItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCustomItemCountOutputType
     */
    select?: PartyCustomItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartyCustomItemCountOutputType without action
   */
  export type PartyCustomItemCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberOrderItemWhereInput
  }


  /**
   * Count Type PartyMemberCountOutputType
   */

  export type PartyMemberCountOutputType = {
    orderItems: number
  }

  export type PartyMemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | PartyMemberCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * PartyMemberCountOutputType without action
   */
  export type PartyMemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMemberCountOutputType
     */
    select?: PartyMemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PartyMemberCountOutputType without action
   */
  export type PartyMemberCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberOrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    avatarUrl: string | null
    role: $Enums.Role | null
    provider: $Enums.Provider | null
    googleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    avatarUrl: string | null
    role: $Enums.Role | null
    provider: $Enums.Provider | null
    googleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    avatarUrl: number
    role: number
    provider: number
    googleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatarUrl?: true
    role?: true
    provider?: true
    googleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatarUrl?: true
    role?: true
    provider?: true
    googleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    avatarUrl?: true
    role?: true
    provider?: true
    googleId?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string | null
    name: string
    avatarUrl: string | null
    role: $Enums.Role
    provider: $Enums.Provider
    googleId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    name?: boolean
    avatarUrl?: boolean
    role?: boolean
    provider?: boolean
    googleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    partiesLed?: boolean | User$partiesLedArgs<ExtArgs>
    joinedParties?: boolean | User$joinedPartiesArgs<ExtArgs>
    ownedRestaurants?: boolean | User$ownedRestaurantsArgs<ExtArgs>
    savedRestaurants?: boolean | User$savedRestaurantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    avatarUrl?: boolean
    role?: boolean
    provider?: boolean
    googleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "avatarUrl" | "role" | "provider" | "googleId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    partiesLed?: boolean | User$partiesLedArgs<ExtArgs>
    joinedParties?: boolean | User$joinedPartiesArgs<ExtArgs>
    ownedRestaurants?: boolean | User$ownedRestaurantsArgs<ExtArgs>
    savedRestaurants?: boolean | User$savedRestaurantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      partiesLed: Prisma.$PartyPayload<ExtArgs>[]
      joinedParties: Prisma.$PartyMemberPayload<ExtArgs>[]
      ownedRestaurants: Prisma.$RestaurantPayload<ExtArgs>[]
      savedRestaurants: Prisma.$SavedRestaurantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string | null
      name: string
      avatarUrl: string | null
      role: $Enums.Role
      provider: $Enums.Provider
      googleId: string | null
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
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partiesLed<T extends User$partiesLedArgs<ExtArgs> = {}>(args?: Subset<T, User$partiesLedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    joinedParties<T extends User$joinedPartiesArgs<ExtArgs> = {}>(args?: Subset<T, User$joinedPartiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ownedRestaurants<T extends User$ownedRestaurantsArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedRestaurantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedRestaurants<T extends User$savedRestaurantsArgs<ExtArgs> = {}>(args?: Subset<T, User$savedRestaurantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedRestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly provider: FieldRef<"User", 'Provider'>
    readonly googleId: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.partiesLed
   */
  export type User$partiesLedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    where?: PartyWhereInput
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    cursor?: PartyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartyScalarFieldEnum | PartyScalarFieldEnum[]
  }

  /**
   * User.joinedParties
   */
  export type User$joinedPartiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    where?: PartyMemberWhereInput
    orderBy?: PartyMemberOrderByWithRelationInput | PartyMemberOrderByWithRelationInput[]
    cursor?: PartyMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartyMemberScalarFieldEnum | PartyMemberScalarFieldEnum[]
  }

  /**
   * User.ownedRestaurants
   */
  export type User$ownedRestaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    cursor?: RestaurantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * User.savedRestaurants
   */
  export type User$savedRestaurantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRestaurant
     */
    select?: SavedRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRestaurant
     */
    omit?: SavedRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRestaurantInclude<ExtArgs> | null
    where?: SavedRestaurantWhereInput
    orderBy?: SavedRestaurantOrderByWithRelationInput | SavedRestaurantOrderByWithRelationInput[]
    cursor?: SavedRestaurantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedRestaurantScalarFieldEnum | SavedRestaurantScalarFieldEnum[]
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
   * Model Restaurant
   */

  export type AggregateRestaurant = {
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  export type RestaurantAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type RestaurantSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type RestaurantMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    lat: number | null
    lng: number | null
    category: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RestaurantMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    lat: number | null
    lng: number | null
    category: string | null
    ownerId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type RestaurantCountAggregateOutputType = {
    id: number
    name: number
    description: number
    lat: number
    lng: number
    category: number
    ownerId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type RestaurantAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type RestaurantSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type RestaurantMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    lat?: true
    lng?: true
    category?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RestaurantMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    lat?: true
    lng?: true
    category?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type RestaurantCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    lat?: true
    lng?: true
    category?: true
    ownerId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type RestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurant to aggregate.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Restaurants
    **/
    _count?: true | RestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RestaurantAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RestaurantSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantMaxAggregateInputType
  }

  export type GetRestaurantAggregateType<T extends RestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurant[P]>
      : GetScalarType<T[P], AggregateRestaurant[P]>
  }




  export type RestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantWhereInput
    orderBy?: RestaurantOrderByWithAggregationInput | RestaurantOrderByWithAggregationInput[]
    by: RestaurantScalarFieldEnum[] | RestaurantScalarFieldEnum
    having?: RestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantCountAggregateInputType | true
    _avg?: RestaurantAvgAggregateInputType
    _sum?: RestaurantSumAggregateInputType
    _min?: RestaurantMinAggregateInputType
    _max?: RestaurantMaxAggregateInputType
  }

  export type RestaurantGroupByOutputType = {
    id: string
    name: string
    description: string | null
    lat: number
    lng: number
    category: string | null
    ownerId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: RestaurantCountAggregateOutputType | null
    _avg: RestaurantAvgAggregateOutputType | null
    _sum: RestaurantSumAggregateOutputType | null
    _min: RestaurantMinAggregateOutputType | null
    _max: RestaurantMaxAggregateOutputType | null
  }

  type GetRestaurantGroupByPayload<T extends RestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    lat?: boolean
    lng?: boolean
    category?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    images?: boolean | Restaurant$imagesArgs<ExtArgs>
    reviews?: boolean | Restaurant$reviewsArgs<ExtArgs>
    menus?: boolean | Restaurant$menusArgs<ExtArgs>
    parties?: boolean | Restaurant$partiesArgs<ExtArgs>
    operatingHours?: boolean | Restaurant$operatingHoursArgs<ExtArgs>
    owner?: boolean | Restaurant$ownerArgs<ExtArgs>
    savedBy?: boolean | Restaurant$savedByArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurant"]>



  export type RestaurantSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    lat?: boolean
    lng?: boolean
    category?: boolean
    ownerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type RestaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "lat" | "lng" | "category" | "ownerId" | "createdAt" | "updatedAt" | "deletedAt", ExtArgs["result"]["restaurant"]>
  export type RestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    images?: boolean | Restaurant$imagesArgs<ExtArgs>
    reviews?: boolean | Restaurant$reviewsArgs<ExtArgs>
    menus?: boolean | Restaurant$menusArgs<ExtArgs>
    parties?: boolean | Restaurant$partiesArgs<ExtArgs>
    operatingHours?: boolean | Restaurant$operatingHoursArgs<ExtArgs>
    owner?: boolean | Restaurant$ownerArgs<ExtArgs>
    savedBy?: boolean | Restaurant$savedByArgs<ExtArgs>
    _count?: boolean | RestaurantCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Restaurant"
    objects: {
      images: Prisma.$RestaurantImagePayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      menus: Prisma.$MenuPayload<ExtArgs>[]
      parties: Prisma.$PartyPayload<ExtArgs>[]
      operatingHours: Prisma.$OperatingHourPayload<ExtArgs>[]
      owner: Prisma.$UserPayload<ExtArgs> | null
      savedBy: Prisma.$SavedRestaurantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      lat: number
      lng: number
      category: string | null
      ownerId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["restaurant"]>
    composites: {}
  }

  type RestaurantGetPayload<S extends boolean | null | undefined | RestaurantDefaultArgs> = $Result.GetResult<Prisma.$RestaurantPayload, S>

  type RestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantCountAggregateInputType | true
    }

  export interface RestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Restaurant'], meta: { name: 'Restaurant' } }
    /**
     * Find zero or one Restaurant that matches the filter.
     * @param {RestaurantFindUniqueArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantFindUniqueArgs>(args: SelectSubset<T, RestaurantFindUniqueArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Restaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantFindUniqueOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantFindFirstArgs>(args?: SelectSubset<T, RestaurantFindFirstArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Restaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindFirstOrThrowArgs} args - Arguments to find a Restaurant
     * @example
     * // Get one Restaurant
     * const restaurant = await prisma.restaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Restaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Restaurants
     * const restaurants = await prisma.restaurant.findMany()
     * 
     * // Get first 10 Restaurants
     * const restaurants = await prisma.restaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantWithIdOnly = await prisma.restaurant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantFindManyArgs>(args?: SelectSubset<T, RestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Restaurant.
     * @param {RestaurantCreateArgs} args - Arguments to create a Restaurant.
     * @example
     * // Create one Restaurant
     * const Restaurant = await prisma.restaurant.create({
     *   data: {
     *     // ... data to create a Restaurant
     *   }
     * })
     * 
     */
    create<T extends RestaurantCreateArgs>(args: SelectSubset<T, RestaurantCreateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Restaurants.
     * @param {RestaurantCreateManyArgs} args - Arguments to create many Restaurants.
     * @example
     * // Create many Restaurants
     * const restaurant = await prisma.restaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantCreateManyArgs>(args?: SelectSubset<T, RestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Restaurant.
     * @param {RestaurantDeleteArgs} args - Arguments to delete one Restaurant.
     * @example
     * // Delete one Restaurant
     * const Restaurant = await prisma.restaurant.delete({
     *   where: {
     *     // ... filter to delete one Restaurant
     *   }
     * })
     * 
     */
    delete<T extends RestaurantDeleteArgs>(args: SelectSubset<T, RestaurantDeleteArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Restaurant.
     * @param {RestaurantUpdateArgs} args - Arguments to update one Restaurant.
     * @example
     * // Update one Restaurant
     * const restaurant = await prisma.restaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantUpdateArgs>(args: SelectSubset<T, RestaurantUpdateArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Restaurants.
     * @param {RestaurantDeleteManyArgs} args - Arguments to filter Restaurants to delete.
     * @example
     * // Delete a few Restaurants
     * const { count } = await prisma.restaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantDeleteManyArgs>(args?: SelectSubset<T, RestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Restaurants
     * const restaurant = await prisma.restaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantUpdateManyArgs>(args: SelectSubset<T, RestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Restaurant.
     * @param {RestaurantUpsertArgs} args - Arguments to update or create a Restaurant.
     * @example
     * // Update or create a Restaurant
     * const restaurant = await prisma.restaurant.upsert({
     *   create: {
     *     // ... data to create a Restaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Restaurant we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantUpsertArgs>(args: SelectSubset<T, RestaurantUpsertArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Restaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantCountArgs} args - Arguments to filter Restaurants to count.
     * @example
     * // Count the number of Restaurants
     * const count = await prisma.restaurant.count({
     *   where: {
     *     // ... the filter for the Restaurants we want to count
     *   }
     * })
    **/
    count<T extends RestaurantCountArgs>(
      args?: Subset<T, RestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantAggregateArgs>(args: Subset<T, RestaurantAggregateArgs>): Prisma.PrismaPromise<GetRestaurantAggregateType<T>>

    /**
     * Group by Restaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantGroupByArgs} args - Group by arguments.
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
      T extends RestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Restaurant model
   */
  readonly fields: RestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Restaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    images<T extends Restaurant$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Restaurant$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    menus<T extends Restaurant$menusArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$menusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    parties<T extends Restaurant$partiesArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$partiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    operatingHours<T extends Restaurant$operatingHoursArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$operatingHoursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatingHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    owner<T extends Restaurant$ownerArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$ownerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    savedBy<T extends Restaurant$savedByArgs<ExtArgs> = {}>(args?: Subset<T, Restaurant$savedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedRestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Restaurant model
   */
  interface RestaurantFieldRefs {
    readonly id: FieldRef<"Restaurant", 'String'>
    readonly name: FieldRef<"Restaurant", 'String'>
    readonly description: FieldRef<"Restaurant", 'String'>
    readonly lat: FieldRef<"Restaurant", 'Float'>
    readonly lng: FieldRef<"Restaurant", 'Float'>
    readonly category: FieldRef<"Restaurant", 'String'>
    readonly ownerId: FieldRef<"Restaurant", 'String'>
    readonly createdAt: FieldRef<"Restaurant", 'DateTime'>
    readonly updatedAt: FieldRef<"Restaurant", 'DateTime'>
    readonly deletedAt: FieldRef<"Restaurant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Restaurant findUnique
   */
  export type RestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findUniqueOrThrow
   */
  export type RestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant findFirst
   */
  export type RestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findFirstOrThrow
   */
  export type RestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurant to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant findMany
   */
  export type RestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter, which Restaurants to fetch.
     */
    where?: RestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Restaurants to fetch.
     */
    orderBy?: RestaurantOrderByWithRelationInput | RestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Restaurants.
     */
    cursor?: RestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Restaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Restaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Restaurants.
     */
    distinct?: RestaurantScalarFieldEnum | RestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant create
   */
  export type RestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a Restaurant.
     */
    data: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
  }

  /**
   * Restaurant createMany
   */
  export type RestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Restaurants.
     */
    data: RestaurantCreateManyInput | RestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Restaurant update
   */
  export type RestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a Restaurant.
     */
    data: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
    /**
     * Choose, which Restaurant to update.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant updateMany
   */
  export type RestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Restaurants.
     */
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyInput>
    /**
     * Filter which Restaurants to update
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to update.
     */
    limit?: number
  }

  /**
   * Restaurant upsert
   */
  export type RestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the Restaurant to update in case it exists.
     */
    where: RestaurantWhereUniqueInput
    /**
     * In case the Restaurant found by the `where` argument doesn't exist, create a new Restaurant with this data.
     */
    create: XOR<RestaurantCreateInput, RestaurantUncheckedCreateInput>
    /**
     * In case the Restaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantUpdateInput, RestaurantUncheckedUpdateInput>
  }

  /**
   * Restaurant delete
   */
  export type RestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
    /**
     * Filter which Restaurant to delete.
     */
    where: RestaurantWhereUniqueInput
  }

  /**
   * Restaurant deleteMany
   */
  export type RestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Restaurants to delete
     */
    where?: RestaurantWhereInput
    /**
     * Limit how many Restaurants to delete.
     */
    limit?: number
  }

  /**
   * Restaurant.images
   */
  export type Restaurant$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantImage
     */
    select?: RestaurantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantImage
     */
    omit?: RestaurantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantImageInclude<ExtArgs> | null
    where?: RestaurantImageWhereInput
    orderBy?: RestaurantImageOrderByWithRelationInput | RestaurantImageOrderByWithRelationInput[]
    cursor?: RestaurantImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RestaurantImageScalarFieldEnum | RestaurantImageScalarFieldEnum[]
  }

  /**
   * Restaurant.reviews
   */
  export type Restaurant$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Restaurant.menus
   */
  export type Restaurant$menusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    cursor?: MenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Restaurant.parties
   */
  export type Restaurant$partiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    where?: PartyWhereInput
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    cursor?: PartyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartyScalarFieldEnum | PartyScalarFieldEnum[]
  }

  /**
   * Restaurant.operatingHours
   */
  export type Restaurant$operatingHoursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHour
     */
    select?: OperatingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHour
     */
    omit?: OperatingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHourInclude<ExtArgs> | null
    where?: OperatingHourWhereInput
    orderBy?: OperatingHourOrderByWithRelationInput | OperatingHourOrderByWithRelationInput[]
    cursor?: OperatingHourWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OperatingHourScalarFieldEnum | OperatingHourScalarFieldEnum[]
  }

  /**
   * Restaurant.owner
   */
  export type Restaurant$ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Restaurant.savedBy
   */
  export type Restaurant$savedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRestaurant
     */
    select?: SavedRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRestaurant
     */
    omit?: SavedRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRestaurantInclude<ExtArgs> | null
    where?: SavedRestaurantWhereInput
    orderBy?: SavedRestaurantOrderByWithRelationInput | SavedRestaurantOrderByWithRelationInput[]
    cursor?: SavedRestaurantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SavedRestaurantScalarFieldEnum | SavedRestaurantScalarFieldEnum[]
  }

  /**
   * Restaurant without action
   */
  export type RestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Restaurant
     */
    select?: RestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Restaurant
     */
    omit?: RestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantInclude<ExtArgs> | null
  }


  /**
   * Model OperatingHour
   */

  export type AggregateOperatingHour = {
    _count: OperatingHourCountAggregateOutputType | null
    _min: OperatingHourMinAggregateOutputType | null
    _max: OperatingHourMaxAggregateOutputType | null
  }

  export type OperatingHourMinAggregateOutputType = {
    id: string | null
    day: $Enums.DayOfWeek | null
    openTime: string | null
    closeTime: string | null
    isClosed: boolean | null
    restaurantId: string | null
  }

  export type OperatingHourMaxAggregateOutputType = {
    id: string | null
    day: $Enums.DayOfWeek | null
    openTime: string | null
    closeTime: string | null
    isClosed: boolean | null
    restaurantId: string | null
  }

  export type OperatingHourCountAggregateOutputType = {
    id: number
    day: number
    openTime: number
    closeTime: number
    isClosed: number
    restaurantId: number
    _all: number
  }


  export type OperatingHourMinAggregateInputType = {
    id?: true
    day?: true
    openTime?: true
    closeTime?: true
    isClosed?: true
    restaurantId?: true
  }

  export type OperatingHourMaxAggregateInputType = {
    id?: true
    day?: true
    openTime?: true
    closeTime?: true
    isClosed?: true
    restaurantId?: true
  }

  export type OperatingHourCountAggregateInputType = {
    id?: true
    day?: true
    openTime?: true
    closeTime?: true
    isClosed?: true
    restaurantId?: true
    _all?: true
  }

  export type OperatingHourAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OperatingHour to aggregate.
     */
    where?: OperatingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatingHours to fetch.
     */
    orderBy?: OperatingHourOrderByWithRelationInput | OperatingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OperatingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OperatingHours
    **/
    _count?: true | OperatingHourCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperatingHourMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperatingHourMaxAggregateInputType
  }

  export type GetOperatingHourAggregateType<T extends OperatingHourAggregateArgs> = {
        [P in keyof T & keyof AggregateOperatingHour]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperatingHour[P]>
      : GetScalarType<T[P], AggregateOperatingHour[P]>
  }




  export type OperatingHourGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OperatingHourWhereInput
    orderBy?: OperatingHourOrderByWithAggregationInput | OperatingHourOrderByWithAggregationInput[]
    by: OperatingHourScalarFieldEnum[] | OperatingHourScalarFieldEnum
    having?: OperatingHourScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperatingHourCountAggregateInputType | true
    _min?: OperatingHourMinAggregateInputType
    _max?: OperatingHourMaxAggregateInputType
  }

  export type OperatingHourGroupByOutputType = {
    id: string
    day: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed: boolean
    restaurantId: string
    _count: OperatingHourCountAggregateOutputType | null
    _min: OperatingHourMinAggregateOutputType | null
    _max: OperatingHourMaxAggregateOutputType | null
  }

  type GetOperatingHourGroupByPayload<T extends OperatingHourGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperatingHourGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperatingHourGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperatingHourGroupByOutputType[P]>
            : GetScalarType<T[P], OperatingHourGroupByOutputType[P]>
        }
      >
    >


  export type OperatingHourSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    day?: boolean
    openTime?: boolean
    closeTime?: boolean
    isClosed?: boolean
    restaurantId?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["operatingHour"]>



  export type OperatingHourSelectScalar = {
    id?: boolean
    day?: boolean
    openTime?: boolean
    closeTime?: boolean
    isClosed?: boolean
    restaurantId?: boolean
  }

  export type OperatingHourOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "day" | "openTime" | "closeTime" | "isClosed" | "restaurantId", ExtArgs["result"]["operatingHour"]>
  export type OperatingHourInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $OperatingHourPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OperatingHour"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      day: $Enums.DayOfWeek
      openTime: string
      closeTime: string
      isClosed: boolean
      restaurantId: string
    }, ExtArgs["result"]["operatingHour"]>
    composites: {}
  }

  type OperatingHourGetPayload<S extends boolean | null | undefined | OperatingHourDefaultArgs> = $Result.GetResult<Prisma.$OperatingHourPayload, S>

  type OperatingHourCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OperatingHourFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperatingHourCountAggregateInputType | true
    }

  export interface OperatingHourDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OperatingHour'], meta: { name: 'OperatingHour' } }
    /**
     * Find zero or one OperatingHour that matches the filter.
     * @param {OperatingHourFindUniqueArgs} args - Arguments to find a OperatingHour
     * @example
     * // Get one OperatingHour
     * const operatingHour = await prisma.operatingHour.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OperatingHourFindUniqueArgs>(args: SelectSubset<T, OperatingHourFindUniqueArgs<ExtArgs>>): Prisma__OperatingHourClient<$Result.GetResult<Prisma.$OperatingHourPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OperatingHour that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OperatingHourFindUniqueOrThrowArgs} args - Arguments to find a OperatingHour
     * @example
     * // Get one OperatingHour
     * const operatingHour = await prisma.operatingHour.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OperatingHourFindUniqueOrThrowArgs>(args: SelectSubset<T, OperatingHourFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OperatingHourClient<$Result.GetResult<Prisma.$OperatingHourPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OperatingHour that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHourFindFirstArgs} args - Arguments to find a OperatingHour
     * @example
     * // Get one OperatingHour
     * const operatingHour = await prisma.operatingHour.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OperatingHourFindFirstArgs>(args?: SelectSubset<T, OperatingHourFindFirstArgs<ExtArgs>>): Prisma__OperatingHourClient<$Result.GetResult<Prisma.$OperatingHourPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OperatingHour that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHourFindFirstOrThrowArgs} args - Arguments to find a OperatingHour
     * @example
     * // Get one OperatingHour
     * const operatingHour = await prisma.operatingHour.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OperatingHourFindFirstOrThrowArgs>(args?: SelectSubset<T, OperatingHourFindFirstOrThrowArgs<ExtArgs>>): Prisma__OperatingHourClient<$Result.GetResult<Prisma.$OperatingHourPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OperatingHours that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHourFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OperatingHours
     * const operatingHours = await prisma.operatingHour.findMany()
     * 
     * // Get first 10 OperatingHours
     * const operatingHours = await prisma.operatingHour.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operatingHourWithIdOnly = await prisma.operatingHour.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OperatingHourFindManyArgs>(args?: SelectSubset<T, OperatingHourFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OperatingHourPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OperatingHour.
     * @param {OperatingHourCreateArgs} args - Arguments to create a OperatingHour.
     * @example
     * // Create one OperatingHour
     * const OperatingHour = await prisma.operatingHour.create({
     *   data: {
     *     // ... data to create a OperatingHour
     *   }
     * })
     * 
     */
    create<T extends OperatingHourCreateArgs>(args: SelectSubset<T, OperatingHourCreateArgs<ExtArgs>>): Prisma__OperatingHourClient<$Result.GetResult<Prisma.$OperatingHourPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OperatingHours.
     * @param {OperatingHourCreateManyArgs} args - Arguments to create many OperatingHours.
     * @example
     * // Create many OperatingHours
     * const operatingHour = await prisma.operatingHour.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OperatingHourCreateManyArgs>(args?: SelectSubset<T, OperatingHourCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OperatingHour.
     * @param {OperatingHourDeleteArgs} args - Arguments to delete one OperatingHour.
     * @example
     * // Delete one OperatingHour
     * const OperatingHour = await prisma.operatingHour.delete({
     *   where: {
     *     // ... filter to delete one OperatingHour
     *   }
     * })
     * 
     */
    delete<T extends OperatingHourDeleteArgs>(args: SelectSubset<T, OperatingHourDeleteArgs<ExtArgs>>): Prisma__OperatingHourClient<$Result.GetResult<Prisma.$OperatingHourPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OperatingHour.
     * @param {OperatingHourUpdateArgs} args - Arguments to update one OperatingHour.
     * @example
     * // Update one OperatingHour
     * const operatingHour = await prisma.operatingHour.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OperatingHourUpdateArgs>(args: SelectSubset<T, OperatingHourUpdateArgs<ExtArgs>>): Prisma__OperatingHourClient<$Result.GetResult<Prisma.$OperatingHourPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OperatingHours.
     * @param {OperatingHourDeleteManyArgs} args - Arguments to filter OperatingHours to delete.
     * @example
     * // Delete a few OperatingHours
     * const { count } = await prisma.operatingHour.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OperatingHourDeleteManyArgs>(args?: SelectSubset<T, OperatingHourDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OperatingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHourUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OperatingHours
     * const operatingHour = await prisma.operatingHour.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OperatingHourUpdateManyArgs>(args: SelectSubset<T, OperatingHourUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OperatingHour.
     * @param {OperatingHourUpsertArgs} args - Arguments to update or create a OperatingHour.
     * @example
     * // Update or create a OperatingHour
     * const operatingHour = await prisma.operatingHour.upsert({
     *   create: {
     *     // ... data to create a OperatingHour
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OperatingHour we want to update
     *   }
     * })
     */
    upsert<T extends OperatingHourUpsertArgs>(args: SelectSubset<T, OperatingHourUpsertArgs<ExtArgs>>): Prisma__OperatingHourClient<$Result.GetResult<Prisma.$OperatingHourPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OperatingHours.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHourCountArgs} args - Arguments to filter OperatingHours to count.
     * @example
     * // Count the number of OperatingHours
     * const count = await prisma.operatingHour.count({
     *   where: {
     *     // ... the filter for the OperatingHours we want to count
     *   }
     * })
    **/
    count<T extends OperatingHourCountArgs>(
      args?: Subset<T, OperatingHourCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperatingHourCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OperatingHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHourAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OperatingHourAggregateArgs>(args: Subset<T, OperatingHourAggregateArgs>): Prisma.PrismaPromise<GetOperatingHourAggregateType<T>>

    /**
     * Group by OperatingHour.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatingHourGroupByArgs} args - Group by arguments.
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
      T extends OperatingHourGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OperatingHourGroupByArgs['orderBy'] }
        : { orderBy?: OperatingHourGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OperatingHourGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperatingHourGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OperatingHour model
   */
  readonly fields: OperatingHourFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OperatingHour.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OperatingHourClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OperatingHour model
   */
  interface OperatingHourFieldRefs {
    readonly id: FieldRef<"OperatingHour", 'String'>
    readonly day: FieldRef<"OperatingHour", 'DayOfWeek'>
    readonly openTime: FieldRef<"OperatingHour", 'String'>
    readonly closeTime: FieldRef<"OperatingHour", 'String'>
    readonly isClosed: FieldRef<"OperatingHour", 'Boolean'>
    readonly restaurantId: FieldRef<"OperatingHour", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OperatingHour findUnique
   */
  export type OperatingHourFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHour
     */
    select?: OperatingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHour
     */
    omit?: OperatingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHourInclude<ExtArgs> | null
    /**
     * Filter, which OperatingHour to fetch.
     */
    where: OperatingHourWhereUniqueInput
  }

  /**
   * OperatingHour findUniqueOrThrow
   */
  export type OperatingHourFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHour
     */
    select?: OperatingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHour
     */
    omit?: OperatingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHourInclude<ExtArgs> | null
    /**
     * Filter, which OperatingHour to fetch.
     */
    where: OperatingHourWhereUniqueInput
  }

  /**
   * OperatingHour findFirst
   */
  export type OperatingHourFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHour
     */
    select?: OperatingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHour
     */
    omit?: OperatingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHourInclude<ExtArgs> | null
    /**
     * Filter, which OperatingHour to fetch.
     */
    where?: OperatingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatingHours to fetch.
     */
    orderBy?: OperatingHourOrderByWithRelationInput | OperatingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OperatingHours.
     */
    cursor?: OperatingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperatingHours.
     */
    distinct?: OperatingHourScalarFieldEnum | OperatingHourScalarFieldEnum[]
  }

  /**
   * OperatingHour findFirstOrThrow
   */
  export type OperatingHourFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHour
     */
    select?: OperatingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHour
     */
    omit?: OperatingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHourInclude<ExtArgs> | null
    /**
     * Filter, which OperatingHour to fetch.
     */
    where?: OperatingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatingHours to fetch.
     */
    orderBy?: OperatingHourOrderByWithRelationInput | OperatingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OperatingHours.
     */
    cursor?: OperatingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperatingHours.
     */
    distinct?: OperatingHourScalarFieldEnum | OperatingHourScalarFieldEnum[]
  }

  /**
   * OperatingHour findMany
   */
  export type OperatingHourFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHour
     */
    select?: OperatingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHour
     */
    omit?: OperatingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHourInclude<ExtArgs> | null
    /**
     * Filter, which OperatingHours to fetch.
     */
    where?: OperatingHourWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OperatingHours to fetch.
     */
    orderBy?: OperatingHourOrderByWithRelationInput | OperatingHourOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OperatingHours.
     */
    cursor?: OperatingHourWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OperatingHours from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OperatingHours.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OperatingHours.
     */
    distinct?: OperatingHourScalarFieldEnum | OperatingHourScalarFieldEnum[]
  }

  /**
   * OperatingHour create
   */
  export type OperatingHourCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHour
     */
    select?: OperatingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHour
     */
    omit?: OperatingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHourInclude<ExtArgs> | null
    /**
     * The data needed to create a OperatingHour.
     */
    data: XOR<OperatingHourCreateInput, OperatingHourUncheckedCreateInput>
  }

  /**
   * OperatingHour createMany
   */
  export type OperatingHourCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OperatingHours.
     */
    data: OperatingHourCreateManyInput | OperatingHourCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OperatingHour update
   */
  export type OperatingHourUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHour
     */
    select?: OperatingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHour
     */
    omit?: OperatingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHourInclude<ExtArgs> | null
    /**
     * The data needed to update a OperatingHour.
     */
    data: XOR<OperatingHourUpdateInput, OperatingHourUncheckedUpdateInput>
    /**
     * Choose, which OperatingHour to update.
     */
    where: OperatingHourWhereUniqueInput
  }

  /**
   * OperatingHour updateMany
   */
  export type OperatingHourUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OperatingHours.
     */
    data: XOR<OperatingHourUpdateManyMutationInput, OperatingHourUncheckedUpdateManyInput>
    /**
     * Filter which OperatingHours to update
     */
    where?: OperatingHourWhereInput
    /**
     * Limit how many OperatingHours to update.
     */
    limit?: number
  }

  /**
   * OperatingHour upsert
   */
  export type OperatingHourUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHour
     */
    select?: OperatingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHour
     */
    omit?: OperatingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHourInclude<ExtArgs> | null
    /**
     * The filter to search for the OperatingHour to update in case it exists.
     */
    where: OperatingHourWhereUniqueInput
    /**
     * In case the OperatingHour found by the `where` argument doesn't exist, create a new OperatingHour with this data.
     */
    create: XOR<OperatingHourCreateInput, OperatingHourUncheckedCreateInput>
    /**
     * In case the OperatingHour was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OperatingHourUpdateInput, OperatingHourUncheckedUpdateInput>
  }

  /**
   * OperatingHour delete
   */
  export type OperatingHourDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHour
     */
    select?: OperatingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHour
     */
    omit?: OperatingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHourInclude<ExtArgs> | null
    /**
     * Filter which OperatingHour to delete.
     */
    where: OperatingHourWhereUniqueInput
  }

  /**
   * OperatingHour deleteMany
   */
  export type OperatingHourDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OperatingHours to delete
     */
    where?: OperatingHourWhereInput
    /**
     * Limit how many OperatingHours to delete.
     */
    limit?: number
  }

  /**
   * OperatingHour without action
   */
  export type OperatingHourDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OperatingHour
     */
    select?: OperatingHourSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OperatingHour
     */
    omit?: OperatingHourOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OperatingHourInclude<ExtArgs> | null
  }


  /**
   * Model RestaurantImage
   */

  export type AggregateRestaurantImage = {
    _count: RestaurantImageCountAggregateOutputType | null
    _min: RestaurantImageMinAggregateOutputType | null
    _max: RestaurantImageMaxAggregateOutputType | null
  }

  export type RestaurantImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    isCover: boolean | null
    restaurantId: string | null
    createdAt: Date | null
  }

  export type RestaurantImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    isCover: boolean | null
    restaurantId: string | null
    createdAt: Date | null
  }

  export type RestaurantImageCountAggregateOutputType = {
    id: number
    url: number
    isCover: number
    restaurantId: number
    createdAt: number
    _all: number
  }


  export type RestaurantImageMinAggregateInputType = {
    id?: true
    url?: true
    isCover?: true
    restaurantId?: true
    createdAt?: true
  }

  export type RestaurantImageMaxAggregateInputType = {
    id?: true
    url?: true
    isCover?: true
    restaurantId?: true
    createdAt?: true
  }

  export type RestaurantImageCountAggregateInputType = {
    id?: true
    url?: true
    isCover?: true
    restaurantId?: true
    createdAt?: true
    _all?: true
  }

  export type RestaurantImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantImage to aggregate.
     */
    where?: RestaurantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantImages to fetch.
     */
    orderBy?: RestaurantImageOrderByWithRelationInput | RestaurantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RestaurantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RestaurantImages
    **/
    _count?: true | RestaurantImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RestaurantImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RestaurantImageMaxAggregateInputType
  }

  export type GetRestaurantImageAggregateType<T extends RestaurantImageAggregateArgs> = {
        [P in keyof T & keyof AggregateRestaurantImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRestaurantImage[P]>
      : GetScalarType<T[P], AggregateRestaurantImage[P]>
  }




  export type RestaurantImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RestaurantImageWhereInput
    orderBy?: RestaurantImageOrderByWithAggregationInput | RestaurantImageOrderByWithAggregationInput[]
    by: RestaurantImageScalarFieldEnum[] | RestaurantImageScalarFieldEnum
    having?: RestaurantImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RestaurantImageCountAggregateInputType | true
    _min?: RestaurantImageMinAggregateInputType
    _max?: RestaurantImageMaxAggregateInputType
  }

  export type RestaurantImageGroupByOutputType = {
    id: string
    url: string
    isCover: boolean
    restaurantId: string
    createdAt: Date
    _count: RestaurantImageCountAggregateOutputType | null
    _min: RestaurantImageMinAggregateOutputType | null
    _max: RestaurantImageMaxAggregateOutputType | null
  }

  type GetRestaurantImageGroupByPayload<T extends RestaurantImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RestaurantImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RestaurantImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RestaurantImageGroupByOutputType[P]>
            : GetScalarType<T[P], RestaurantImageGroupByOutputType[P]>
        }
      >
    >


  export type RestaurantImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    isCover?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["restaurantImage"]>



  export type RestaurantImageSelectScalar = {
    id?: boolean
    url?: boolean
    isCover?: boolean
    restaurantId?: boolean
    createdAt?: boolean
  }

  export type RestaurantImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "isCover" | "restaurantId" | "createdAt", ExtArgs["result"]["restaurantImage"]>
  export type RestaurantImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $RestaurantImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RestaurantImage"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      isCover: boolean
      restaurantId: string
      createdAt: Date
    }, ExtArgs["result"]["restaurantImage"]>
    composites: {}
  }

  type RestaurantImageGetPayload<S extends boolean | null | undefined | RestaurantImageDefaultArgs> = $Result.GetResult<Prisma.$RestaurantImagePayload, S>

  type RestaurantImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RestaurantImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RestaurantImageCountAggregateInputType | true
    }

  export interface RestaurantImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RestaurantImage'], meta: { name: 'RestaurantImage' } }
    /**
     * Find zero or one RestaurantImage that matches the filter.
     * @param {RestaurantImageFindUniqueArgs} args - Arguments to find a RestaurantImage
     * @example
     * // Get one RestaurantImage
     * const restaurantImage = await prisma.restaurantImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RestaurantImageFindUniqueArgs>(args: SelectSubset<T, RestaurantImageFindUniqueArgs<ExtArgs>>): Prisma__RestaurantImageClient<$Result.GetResult<Prisma.$RestaurantImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RestaurantImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RestaurantImageFindUniqueOrThrowArgs} args - Arguments to find a RestaurantImage
     * @example
     * // Get one RestaurantImage
     * const restaurantImage = await prisma.restaurantImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RestaurantImageFindUniqueOrThrowArgs>(args: SelectSubset<T, RestaurantImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RestaurantImageClient<$Result.GetResult<Prisma.$RestaurantImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestaurantImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantImageFindFirstArgs} args - Arguments to find a RestaurantImage
     * @example
     * // Get one RestaurantImage
     * const restaurantImage = await prisma.restaurantImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RestaurantImageFindFirstArgs>(args?: SelectSubset<T, RestaurantImageFindFirstArgs<ExtArgs>>): Prisma__RestaurantImageClient<$Result.GetResult<Prisma.$RestaurantImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RestaurantImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantImageFindFirstOrThrowArgs} args - Arguments to find a RestaurantImage
     * @example
     * // Get one RestaurantImage
     * const restaurantImage = await prisma.restaurantImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RestaurantImageFindFirstOrThrowArgs>(args?: SelectSubset<T, RestaurantImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__RestaurantImageClient<$Result.GetResult<Prisma.$RestaurantImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RestaurantImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RestaurantImages
     * const restaurantImages = await prisma.restaurantImage.findMany()
     * 
     * // Get first 10 RestaurantImages
     * const restaurantImages = await prisma.restaurantImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const restaurantImageWithIdOnly = await prisma.restaurantImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RestaurantImageFindManyArgs>(args?: SelectSubset<T, RestaurantImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RestaurantImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RestaurantImage.
     * @param {RestaurantImageCreateArgs} args - Arguments to create a RestaurantImage.
     * @example
     * // Create one RestaurantImage
     * const RestaurantImage = await prisma.restaurantImage.create({
     *   data: {
     *     // ... data to create a RestaurantImage
     *   }
     * })
     * 
     */
    create<T extends RestaurantImageCreateArgs>(args: SelectSubset<T, RestaurantImageCreateArgs<ExtArgs>>): Prisma__RestaurantImageClient<$Result.GetResult<Prisma.$RestaurantImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RestaurantImages.
     * @param {RestaurantImageCreateManyArgs} args - Arguments to create many RestaurantImages.
     * @example
     * // Create many RestaurantImages
     * const restaurantImage = await prisma.restaurantImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RestaurantImageCreateManyArgs>(args?: SelectSubset<T, RestaurantImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RestaurantImage.
     * @param {RestaurantImageDeleteArgs} args - Arguments to delete one RestaurantImage.
     * @example
     * // Delete one RestaurantImage
     * const RestaurantImage = await prisma.restaurantImage.delete({
     *   where: {
     *     // ... filter to delete one RestaurantImage
     *   }
     * })
     * 
     */
    delete<T extends RestaurantImageDeleteArgs>(args: SelectSubset<T, RestaurantImageDeleteArgs<ExtArgs>>): Prisma__RestaurantImageClient<$Result.GetResult<Prisma.$RestaurantImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RestaurantImage.
     * @param {RestaurantImageUpdateArgs} args - Arguments to update one RestaurantImage.
     * @example
     * // Update one RestaurantImage
     * const restaurantImage = await prisma.restaurantImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RestaurantImageUpdateArgs>(args: SelectSubset<T, RestaurantImageUpdateArgs<ExtArgs>>): Prisma__RestaurantImageClient<$Result.GetResult<Prisma.$RestaurantImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RestaurantImages.
     * @param {RestaurantImageDeleteManyArgs} args - Arguments to filter RestaurantImages to delete.
     * @example
     * // Delete a few RestaurantImages
     * const { count } = await prisma.restaurantImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RestaurantImageDeleteManyArgs>(args?: SelectSubset<T, RestaurantImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RestaurantImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RestaurantImages
     * const restaurantImage = await prisma.restaurantImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RestaurantImageUpdateManyArgs>(args: SelectSubset<T, RestaurantImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RestaurantImage.
     * @param {RestaurantImageUpsertArgs} args - Arguments to update or create a RestaurantImage.
     * @example
     * // Update or create a RestaurantImage
     * const restaurantImage = await prisma.restaurantImage.upsert({
     *   create: {
     *     // ... data to create a RestaurantImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RestaurantImage we want to update
     *   }
     * })
     */
    upsert<T extends RestaurantImageUpsertArgs>(args: SelectSubset<T, RestaurantImageUpsertArgs<ExtArgs>>): Prisma__RestaurantImageClient<$Result.GetResult<Prisma.$RestaurantImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RestaurantImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantImageCountArgs} args - Arguments to filter RestaurantImages to count.
     * @example
     * // Count the number of RestaurantImages
     * const count = await prisma.restaurantImage.count({
     *   where: {
     *     // ... the filter for the RestaurantImages we want to count
     *   }
     * })
    **/
    count<T extends RestaurantImageCountArgs>(
      args?: Subset<T, RestaurantImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RestaurantImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RestaurantImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RestaurantImageAggregateArgs>(args: Subset<T, RestaurantImageAggregateArgs>): Prisma.PrismaPromise<GetRestaurantImageAggregateType<T>>

    /**
     * Group by RestaurantImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RestaurantImageGroupByArgs} args - Group by arguments.
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
      T extends RestaurantImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RestaurantImageGroupByArgs['orderBy'] }
        : { orderBy?: RestaurantImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RestaurantImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRestaurantImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RestaurantImage model
   */
  readonly fields: RestaurantImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RestaurantImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RestaurantImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RestaurantImage model
   */
  interface RestaurantImageFieldRefs {
    readonly id: FieldRef<"RestaurantImage", 'String'>
    readonly url: FieldRef<"RestaurantImage", 'String'>
    readonly isCover: FieldRef<"RestaurantImage", 'Boolean'>
    readonly restaurantId: FieldRef<"RestaurantImage", 'String'>
    readonly createdAt: FieldRef<"RestaurantImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RestaurantImage findUnique
   */
  export type RestaurantImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantImage
     */
    select?: RestaurantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantImage
     */
    omit?: RestaurantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantImageInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantImage to fetch.
     */
    where: RestaurantImageWhereUniqueInput
  }

  /**
   * RestaurantImage findUniqueOrThrow
   */
  export type RestaurantImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantImage
     */
    select?: RestaurantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantImage
     */
    omit?: RestaurantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantImageInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantImage to fetch.
     */
    where: RestaurantImageWhereUniqueInput
  }

  /**
   * RestaurantImage findFirst
   */
  export type RestaurantImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantImage
     */
    select?: RestaurantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantImage
     */
    omit?: RestaurantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantImageInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantImage to fetch.
     */
    where?: RestaurantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantImages to fetch.
     */
    orderBy?: RestaurantImageOrderByWithRelationInput | RestaurantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestaurantImages.
     */
    cursor?: RestaurantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantImages.
     */
    distinct?: RestaurantImageScalarFieldEnum | RestaurantImageScalarFieldEnum[]
  }

  /**
   * RestaurantImage findFirstOrThrow
   */
  export type RestaurantImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantImage
     */
    select?: RestaurantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantImage
     */
    omit?: RestaurantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantImageInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantImage to fetch.
     */
    where?: RestaurantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantImages to fetch.
     */
    orderBy?: RestaurantImageOrderByWithRelationInput | RestaurantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RestaurantImages.
     */
    cursor?: RestaurantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantImages.
     */
    distinct?: RestaurantImageScalarFieldEnum | RestaurantImageScalarFieldEnum[]
  }

  /**
   * RestaurantImage findMany
   */
  export type RestaurantImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantImage
     */
    select?: RestaurantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantImage
     */
    omit?: RestaurantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantImageInclude<ExtArgs> | null
    /**
     * Filter, which RestaurantImages to fetch.
     */
    where?: RestaurantImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RestaurantImages to fetch.
     */
    orderBy?: RestaurantImageOrderByWithRelationInput | RestaurantImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RestaurantImages.
     */
    cursor?: RestaurantImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RestaurantImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RestaurantImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RestaurantImages.
     */
    distinct?: RestaurantImageScalarFieldEnum | RestaurantImageScalarFieldEnum[]
  }

  /**
   * RestaurantImage create
   */
  export type RestaurantImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantImage
     */
    select?: RestaurantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantImage
     */
    omit?: RestaurantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantImageInclude<ExtArgs> | null
    /**
     * The data needed to create a RestaurantImage.
     */
    data: XOR<RestaurantImageCreateInput, RestaurantImageUncheckedCreateInput>
  }

  /**
   * RestaurantImage createMany
   */
  export type RestaurantImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RestaurantImages.
     */
    data: RestaurantImageCreateManyInput | RestaurantImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RestaurantImage update
   */
  export type RestaurantImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantImage
     */
    select?: RestaurantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantImage
     */
    omit?: RestaurantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantImageInclude<ExtArgs> | null
    /**
     * The data needed to update a RestaurantImage.
     */
    data: XOR<RestaurantImageUpdateInput, RestaurantImageUncheckedUpdateInput>
    /**
     * Choose, which RestaurantImage to update.
     */
    where: RestaurantImageWhereUniqueInput
  }

  /**
   * RestaurantImage updateMany
   */
  export type RestaurantImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RestaurantImages.
     */
    data: XOR<RestaurantImageUpdateManyMutationInput, RestaurantImageUncheckedUpdateManyInput>
    /**
     * Filter which RestaurantImages to update
     */
    where?: RestaurantImageWhereInput
    /**
     * Limit how many RestaurantImages to update.
     */
    limit?: number
  }

  /**
   * RestaurantImage upsert
   */
  export type RestaurantImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantImage
     */
    select?: RestaurantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantImage
     */
    omit?: RestaurantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantImageInclude<ExtArgs> | null
    /**
     * The filter to search for the RestaurantImage to update in case it exists.
     */
    where: RestaurantImageWhereUniqueInput
    /**
     * In case the RestaurantImage found by the `where` argument doesn't exist, create a new RestaurantImage with this data.
     */
    create: XOR<RestaurantImageCreateInput, RestaurantImageUncheckedCreateInput>
    /**
     * In case the RestaurantImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RestaurantImageUpdateInput, RestaurantImageUncheckedUpdateInput>
  }

  /**
   * RestaurantImage delete
   */
  export type RestaurantImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantImage
     */
    select?: RestaurantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantImage
     */
    omit?: RestaurantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantImageInclude<ExtArgs> | null
    /**
     * Filter which RestaurantImage to delete.
     */
    where: RestaurantImageWhereUniqueInput
  }

  /**
   * RestaurantImage deleteMany
   */
  export type RestaurantImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RestaurantImages to delete
     */
    where?: RestaurantImageWhereInput
    /**
     * Limit how many RestaurantImages to delete.
     */
    limit?: number
  }

  /**
   * RestaurantImage without action
   */
  export type RestaurantImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RestaurantImage
     */
    select?: RestaurantImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RestaurantImage
     */
    omit?: RestaurantImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RestaurantImageInclude<ExtArgs> | null
  }


  /**
   * Model SavedRestaurant
   */

  export type AggregateSavedRestaurant = {
    _count: SavedRestaurantCountAggregateOutputType | null
    _min: SavedRestaurantMinAggregateOutputType | null
    _max: SavedRestaurantMaxAggregateOutputType | null
  }

  export type SavedRestaurantMinAggregateOutputType = {
    id: string | null
    userId: string | null
    restaurantId: string | null
    savedAt: Date | null
  }

  export type SavedRestaurantMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    restaurantId: string | null
    savedAt: Date | null
  }

  export type SavedRestaurantCountAggregateOutputType = {
    id: number
    userId: number
    restaurantId: number
    savedAt: number
    _all: number
  }


  export type SavedRestaurantMinAggregateInputType = {
    id?: true
    userId?: true
    restaurantId?: true
    savedAt?: true
  }

  export type SavedRestaurantMaxAggregateInputType = {
    id?: true
    userId?: true
    restaurantId?: true
    savedAt?: true
  }

  export type SavedRestaurantCountAggregateInputType = {
    id?: true
    userId?: true
    restaurantId?: true
    savedAt?: true
    _all?: true
  }

  export type SavedRestaurantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedRestaurant to aggregate.
     */
    where?: SavedRestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedRestaurants to fetch.
     */
    orderBy?: SavedRestaurantOrderByWithRelationInput | SavedRestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SavedRestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedRestaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedRestaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SavedRestaurants
    **/
    _count?: true | SavedRestaurantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SavedRestaurantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SavedRestaurantMaxAggregateInputType
  }

  export type GetSavedRestaurantAggregateType<T extends SavedRestaurantAggregateArgs> = {
        [P in keyof T & keyof AggregateSavedRestaurant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSavedRestaurant[P]>
      : GetScalarType<T[P], AggregateSavedRestaurant[P]>
  }




  export type SavedRestaurantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SavedRestaurantWhereInput
    orderBy?: SavedRestaurantOrderByWithAggregationInput | SavedRestaurantOrderByWithAggregationInput[]
    by: SavedRestaurantScalarFieldEnum[] | SavedRestaurantScalarFieldEnum
    having?: SavedRestaurantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SavedRestaurantCountAggregateInputType | true
    _min?: SavedRestaurantMinAggregateInputType
    _max?: SavedRestaurantMaxAggregateInputType
  }

  export type SavedRestaurantGroupByOutputType = {
    id: string
    userId: string
    restaurantId: string
    savedAt: Date
    _count: SavedRestaurantCountAggregateOutputType | null
    _min: SavedRestaurantMinAggregateOutputType | null
    _max: SavedRestaurantMaxAggregateOutputType | null
  }

  type GetSavedRestaurantGroupByPayload<T extends SavedRestaurantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SavedRestaurantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SavedRestaurantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SavedRestaurantGroupByOutputType[P]>
            : GetScalarType<T[P], SavedRestaurantGroupByOutputType[P]>
        }
      >
    >


  export type SavedRestaurantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    restaurantId?: boolean
    savedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["savedRestaurant"]>



  export type SavedRestaurantSelectScalar = {
    id?: boolean
    userId?: boolean
    restaurantId?: boolean
    savedAt?: boolean
  }

  export type SavedRestaurantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "restaurantId" | "savedAt", ExtArgs["result"]["savedRestaurant"]>
  export type SavedRestaurantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $SavedRestaurantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SavedRestaurant"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      restaurantId: string
      savedAt: Date
    }, ExtArgs["result"]["savedRestaurant"]>
    composites: {}
  }

  type SavedRestaurantGetPayload<S extends boolean | null | undefined | SavedRestaurantDefaultArgs> = $Result.GetResult<Prisma.$SavedRestaurantPayload, S>

  type SavedRestaurantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SavedRestaurantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SavedRestaurantCountAggregateInputType | true
    }

  export interface SavedRestaurantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SavedRestaurant'], meta: { name: 'SavedRestaurant' } }
    /**
     * Find zero or one SavedRestaurant that matches the filter.
     * @param {SavedRestaurantFindUniqueArgs} args - Arguments to find a SavedRestaurant
     * @example
     * // Get one SavedRestaurant
     * const savedRestaurant = await prisma.savedRestaurant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SavedRestaurantFindUniqueArgs>(args: SelectSubset<T, SavedRestaurantFindUniqueArgs<ExtArgs>>): Prisma__SavedRestaurantClient<$Result.GetResult<Prisma.$SavedRestaurantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SavedRestaurant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SavedRestaurantFindUniqueOrThrowArgs} args - Arguments to find a SavedRestaurant
     * @example
     * // Get one SavedRestaurant
     * const savedRestaurant = await prisma.savedRestaurant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SavedRestaurantFindUniqueOrThrowArgs>(args: SelectSubset<T, SavedRestaurantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SavedRestaurantClient<$Result.GetResult<Prisma.$SavedRestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedRestaurant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRestaurantFindFirstArgs} args - Arguments to find a SavedRestaurant
     * @example
     * // Get one SavedRestaurant
     * const savedRestaurant = await prisma.savedRestaurant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SavedRestaurantFindFirstArgs>(args?: SelectSubset<T, SavedRestaurantFindFirstArgs<ExtArgs>>): Prisma__SavedRestaurantClient<$Result.GetResult<Prisma.$SavedRestaurantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SavedRestaurant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRestaurantFindFirstOrThrowArgs} args - Arguments to find a SavedRestaurant
     * @example
     * // Get one SavedRestaurant
     * const savedRestaurant = await prisma.savedRestaurant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SavedRestaurantFindFirstOrThrowArgs>(args?: SelectSubset<T, SavedRestaurantFindFirstOrThrowArgs<ExtArgs>>): Prisma__SavedRestaurantClient<$Result.GetResult<Prisma.$SavedRestaurantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SavedRestaurants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRestaurantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SavedRestaurants
     * const savedRestaurants = await prisma.savedRestaurant.findMany()
     * 
     * // Get first 10 SavedRestaurants
     * const savedRestaurants = await prisma.savedRestaurant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const savedRestaurantWithIdOnly = await prisma.savedRestaurant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SavedRestaurantFindManyArgs>(args?: SelectSubset<T, SavedRestaurantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SavedRestaurantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SavedRestaurant.
     * @param {SavedRestaurantCreateArgs} args - Arguments to create a SavedRestaurant.
     * @example
     * // Create one SavedRestaurant
     * const SavedRestaurant = await prisma.savedRestaurant.create({
     *   data: {
     *     // ... data to create a SavedRestaurant
     *   }
     * })
     * 
     */
    create<T extends SavedRestaurantCreateArgs>(args: SelectSubset<T, SavedRestaurantCreateArgs<ExtArgs>>): Prisma__SavedRestaurantClient<$Result.GetResult<Prisma.$SavedRestaurantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SavedRestaurants.
     * @param {SavedRestaurantCreateManyArgs} args - Arguments to create many SavedRestaurants.
     * @example
     * // Create many SavedRestaurants
     * const savedRestaurant = await prisma.savedRestaurant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SavedRestaurantCreateManyArgs>(args?: SelectSubset<T, SavedRestaurantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SavedRestaurant.
     * @param {SavedRestaurantDeleteArgs} args - Arguments to delete one SavedRestaurant.
     * @example
     * // Delete one SavedRestaurant
     * const SavedRestaurant = await prisma.savedRestaurant.delete({
     *   where: {
     *     // ... filter to delete one SavedRestaurant
     *   }
     * })
     * 
     */
    delete<T extends SavedRestaurantDeleteArgs>(args: SelectSubset<T, SavedRestaurantDeleteArgs<ExtArgs>>): Prisma__SavedRestaurantClient<$Result.GetResult<Prisma.$SavedRestaurantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SavedRestaurant.
     * @param {SavedRestaurantUpdateArgs} args - Arguments to update one SavedRestaurant.
     * @example
     * // Update one SavedRestaurant
     * const savedRestaurant = await prisma.savedRestaurant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SavedRestaurantUpdateArgs>(args: SelectSubset<T, SavedRestaurantUpdateArgs<ExtArgs>>): Prisma__SavedRestaurantClient<$Result.GetResult<Prisma.$SavedRestaurantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SavedRestaurants.
     * @param {SavedRestaurantDeleteManyArgs} args - Arguments to filter SavedRestaurants to delete.
     * @example
     * // Delete a few SavedRestaurants
     * const { count } = await prisma.savedRestaurant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SavedRestaurantDeleteManyArgs>(args?: SelectSubset<T, SavedRestaurantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SavedRestaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRestaurantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SavedRestaurants
     * const savedRestaurant = await prisma.savedRestaurant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SavedRestaurantUpdateManyArgs>(args: SelectSubset<T, SavedRestaurantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SavedRestaurant.
     * @param {SavedRestaurantUpsertArgs} args - Arguments to update or create a SavedRestaurant.
     * @example
     * // Update or create a SavedRestaurant
     * const savedRestaurant = await prisma.savedRestaurant.upsert({
     *   create: {
     *     // ... data to create a SavedRestaurant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SavedRestaurant we want to update
     *   }
     * })
     */
    upsert<T extends SavedRestaurantUpsertArgs>(args: SelectSubset<T, SavedRestaurantUpsertArgs<ExtArgs>>): Prisma__SavedRestaurantClient<$Result.GetResult<Prisma.$SavedRestaurantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SavedRestaurants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRestaurantCountArgs} args - Arguments to filter SavedRestaurants to count.
     * @example
     * // Count the number of SavedRestaurants
     * const count = await prisma.savedRestaurant.count({
     *   where: {
     *     // ... the filter for the SavedRestaurants we want to count
     *   }
     * })
    **/
    count<T extends SavedRestaurantCountArgs>(
      args?: Subset<T, SavedRestaurantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SavedRestaurantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SavedRestaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRestaurantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SavedRestaurantAggregateArgs>(args: Subset<T, SavedRestaurantAggregateArgs>): Prisma.PrismaPromise<GetSavedRestaurantAggregateType<T>>

    /**
     * Group by SavedRestaurant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SavedRestaurantGroupByArgs} args - Group by arguments.
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
      T extends SavedRestaurantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SavedRestaurantGroupByArgs['orderBy'] }
        : { orderBy?: SavedRestaurantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SavedRestaurantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSavedRestaurantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SavedRestaurant model
   */
  readonly fields: SavedRestaurantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SavedRestaurant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SavedRestaurantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SavedRestaurant model
   */
  interface SavedRestaurantFieldRefs {
    readonly id: FieldRef<"SavedRestaurant", 'String'>
    readonly userId: FieldRef<"SavedRestaurant", 'String'>
    readonly restaurantId: FieldRef<"SavedRestaurant", 'String'>
    readonly savedAt: FieldRef<"SavedRestaurant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SavedRestaurant findUnique
   */
  export type SavedRestaurantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRestaurant
     */
    select?: SavedRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRestaurant
     */
    omit?: SavedRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRestaurantInclude<ExtArgs> | null
    /**
     * Filter, which SavedRestaurant to fetch.
     */
    where: SavedRestaurantWhereUniqueInput
  }

  /**
   * SavedRestaurant findUniqueOrThrow
   */
  export type SavedRestaurantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRestaurant
     */
    select?: SavedRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRestaurant
     */
    omit?: SavedRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRestaurantInclude<ExtArgs> | null
    /**
     * Filter, which SavedRestaurant to fetch.
     */
    where: SavedRestaurantWhereUniqueInput
  }

  /**
   * SavedRestaurant findFirst
   */
  export type SavedRestaurantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRestaurant
     */
    select?: SavedRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRestaurant
     */
    omit?: SavedRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRestaurantInclude<ExtArgs> | null
    /**
     * Filter, which SavedRestaurant to fetch.
     */
    where?: SavedRestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedRestaurants to fetch.
     */
    orderBy?: SavedRestaurantOrderByWithRelationInput | SavedRestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedRestaurants.
     */
    cursor?: SavedRestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedRestaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedRestaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedRestaurants.
     */
    distinct?: SavedRestaurantScalarFieldEnum | SavedRestaurantScalarFieldEnum[]
  }

  /**
   * SavedRestaurant findFirstOrThrow
   */
  export type SavedRestaurantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRestaurant
     */
    select?: SavedRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRestaurant
     */
    omit?: SavedRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRestaurantInclude<ExtArgs> | null
    /**
     * Filter, which SavedRestaurant to fetch.
     */
    where?: SavedRestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedRestaurants to fetch.
     */
    orderBy?: SavedRestaurantOrderByWithRelationInput | SavedRestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SavedRestaurants.
     */
    cursor?: SavedRestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedRestaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedRestaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedRestaurants.
     */
    distinct?: SavedRestaurantScalarFieldEnum | SavedRestaurantScalarFieldEnum[]
  }

  /**
   * SavedRestaurant findMany
   */
  export type SavedRestaurantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRestaurant
     */
    select?: SavedRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRestaurant
     */
    omit?: SavedRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRestaurantInclude<ExtArgs> | null
    /**
     * Filter, which SavedRestaurants to fetch.
     */
    where?: SavedRestaurantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SavedRestaurants to fetch.
     */
    orderBy?: SavedRestaurantOrderByWithRelationInput | SavedRestaurantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SavedRestaurants.
     */
    cursor?: SavedRestaurantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SavedRestaurants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SavedRestaurants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SavedRestaurants.
     */
    distinct?: SavedRestaurantScalarFieldEnum | SavedRestaurantScalarFieldEnum[]
  }

  /**
   * SavedRestaurant create
   */
  export type SavedRestaurantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRestaurant
     */
    select?: SavedRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRestaurant
     */
    omit?: SavedRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRestaurantInclude<ExtArgs> | null
    /**
     * The data needed to create a SavedRestaurant.
     */
    data: XOR<SavedRestaurantCreateInput, SavedRestaurantUncheckedCreateInput>
  }

  /**
   * SavedRestaurant createMany
   */
  export type SavedRestaurantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SavedRestaurants.
     */
    data: SavedRestaurantCreateManyInput | SavedRestaurantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SavedRestaurant update
   */
  export type SavedRestaurantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRestaurant
     */
    select?: SavedRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRestaurant
     */
    omit?: SavedRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRestaurantInclude<ExtArgs> | null
    /**
     * The data needed to update a SavedRestaurant.
     */
    data: XOR<SavedRestaurantUpdateInput, SavedRestaurantUncheckedUpdateInput>
    /**
     * Choose, which SavedRestaurant to update.
     */
    where: SavedRestaurantWhereUniqueInput
  }

  /**
   * SavedRestaurant updateMany
   */
  export type SavedRestaurantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SavedRestaurants.
     */
    data: XOR<SavedRestaurantUpdateManyMutationInput, SavedRestaurantUncheckedUpdateManyInput>
    /**
     * Filter which SavedRestaurants to update
     */
    where?: SavedRestaurantWhereInput
    /**
     * Limit how many SavedRestaurants to update.
     */
    limit?: number
  }

  /**
   * SavedRestaurant upsert
   */
  export type SavedRestaurantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRestaurant
     */
    select?: SavedRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRestaurant
     */
    omit?: SavedRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRestaurantInclude<ExtArgs> | null
    /**
     * The filter to search for the SavedRestaurant to update in case it exists.
     */
    where: SavedRestaurantWhereUniqueInput
    /**
     * In case the SavedRestaurant found by the `where` argument doesn't exist, create a new SavedRestaurant with this data.
     */
    create: XOR<SavedRestaurantCreateInput, SavedRestaurantUncheckedCreateInput>
    /**
     * In case the SavedRestaurant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SavedRestaurantUpdateInput, SavedRestaurantUncheckedUpdateInput>
  }

  /**
   * SavedRestaurant delete
   */
  export type SavedRestaurantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRestaurant
     */
    select?: SavedRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRestaurant
     */
    omit?: SavedRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRestaurantInclude<ExtArgs> | null
    /**
     * Filter which SavedRestaurant to delete.
     */
    where: SavedRestaurantWhereUniqueInput
  }

  /**
   * SavedRestaurant deleteMany
   */
  export type SavedRestaurantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SavedRestaurants to delete
     */
    where?: SavedRestaurantWhereInput
    /**
     * Limit how many SavedRestaurants to delete.
     */
    limit?: number
  }

  /**
   * SavedRestaurant without action
   */
  export type SavedRestaurantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SavedRestaurant
     */
    select?: SavedRestaurantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SavedRestaurant
     */
    omit?: SavedRestaurantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SavedRestaurantInclude<ExtArgs> | null
  }


  /**
   * Model Menu
   */

  export type AggregateMenu = {
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  export type MenuAvgAggregateOutputType = {
    price: number | null
  }

  export type MenuSumAggregateOutputType = {
    price: number | null
  }

  export type MenuMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    category: string | null
    imageUrl: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: number | null
    category: string | null
    imageUrl: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MenuCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    category: number
    imageUrl: number
    restaurantId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MenuAvgAggregateInputType = {
    price?: true
  }

  export type MenuSumAggregateInputType = {
    price?: true
  }

  export type MenuMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    category?: true
    imageUrl?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    category?: true
    imageUrl?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MenuCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    category?: true
    imageUrl?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menu to aggregate.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Menus
    **/
    _count?: true | MenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MenuMaxAggregateInputType
  }

  export type GetMenuAggregateType<T extends MenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMenu[P]>
      : GetScalarType<T[P], AggregateMenu[P]>
  }




  export type MenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MenuWhereInput
    orderBy?: MenuOrderByWithAggregationInput | MenuOrderByWithAggregationInput[]
    by: MenuScalarFieldEnum[] | MenuScalarFieldEnum
    having?: MenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MenuCountAggregateInputType | true
    _avg?: MenuAvgAggregateInputType
    _sum?: MenuSumAggregateInputType
    _min?: MenuMinAggregateInputType
    _max?: MenuMaxAggregateInputType
  }

  export type MenuGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price: number
    category: string
    imageUrl: string | null
    restaurantId: string
    createdAt: Date
    updatedAt: Date
    _count: MenuCountAggregateOutputType | null
    _avg: MenuAvgAggregateOutputType | null
    _sum: MenuSumAggregateOutputType | null
    _min: MenuMinAggregateOutputType | null
    _max: MenuMaxAggregateOutputType | null
  }

  type GetMenuGroupByPayload<T extends MenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MenuGroupByOutputType[P]>
            : GetScalarType<T[P], MenuGroupByOutputType[P]>
        }
      >
    >


  export type MenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    imageUrl?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    orderItems?: boolean | Menu$orderItemsArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["menu"]>



  export type MenuSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    category?: boolean
    imageUrl?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MenuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "category" | "imageUrl" | "restaurantId" | "createdAt" | "updatedAt", ExtArgs["result"]["menu"]>
  export type MenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    orderItems?: boolean | Menu$orderItemsArgs<ExtArgs>
    _count?: boolean | MenuCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Menu"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      orderItems: Prisma.$MemberOrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: number
      category: string
      imageUrl: string | null
      restaurantId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["menu"]>
    composites: {}
  }

  type MenuGetPayload<S extends boolean | null | undefined | MenuDefaultArgs> = $Result.GetResult<Prisma.$MenuPayload, S>

  type MenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MenuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MenuCountAggregateInputType | true
    }

  export interface MenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Menu'], meta: { name: 'Menu' } }
    /**
     * Find zero or one Menu that matches the filter.
     * @param {MenuFindUniqueArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MenuFindUniqueArgs>(args: SelectSubset<T, MenuFindUniqueArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Menu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MenuFindUniqueOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MenuFindUniqueOrThrowArgs>(args: SelectSubset<T, MenuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MenuFindFirstArgs>(args?: SelectSubset<T, MenuFindFirstArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Menu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindFirstOrThrowArgs} args - Arguments to find a Menu
     * @example
     * // Get one Menu
     * const menu = await prisma.menu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MenuFindFirstOrThrowArgs>(args?: SelectSubset<T, MenuFindFirstOrThrowArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Menus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Menus
     * const menus = await prisma.menu.findMany()
     * 
     * // Get first 10 Menus
     * const menus = await prisma.menu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const menuWithIdOnly = await prisma.menu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MenuFindManyArgs>(args?: SelectSubset<T, MenuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Menu.
     * @param {MenuCreateArgs} args - Arguments to create a Menu.
     * @example
     * // Create one Menu
     * const Menu = await prisma.menu.create({
     *   data: {
     *     // ... data to create a Menu
     *   }
     * })
     * 
     */
    create<T extends MenuCreateArgs>(args: SelectSubset<T, MenuCreateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Menus.
     * @param {MenuCreateManyArgs} args - Arguments to create many Menus.
     * @example
     * // Create many Menus
     * const menu = await prisma.menu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MenuCreateManyArgs>(args?: SelectSubset<T, MenuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Menu.
     * @param {MenuDeleteArgs} args - Arguments to delete one Menu.
     * @example
     * // Delete one Menu
     * const Menu = await prisma.menu.delete({
     *   where: {
     *     // ... filter to delete one Menu
     *   }
     * })
     * 
     */
    delete<T extends MenuDeleteArgs>(args: SelectSubset<T, MenuDeleteArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Menu.
     * @param {MenuUpdateArgs} args - Arguments to update one Menu.
     * @example
     * // Update one Menu
     * const menu = await prisma.menu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MenuUpdateArgs>(args: SelectSubset<T, MenuUpdateArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Menus.
     * @param {MenuDeleteManyArgs} args - Arguments to filter Menus to delete.
     * @example
     * // Delete a few Menus
     * const { count } = await prisma.menu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MenuDeleteManyArgs>(args?: SelectSubset<T, MenuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Menus
     * const menu = await prisma.menu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MenuUpdateManyArgs>(args: SelectSubset<T, MenuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Menu.
     * @param {MenuUpsertArgs} args - Arguments to update or create a Menu.
     * @example
     * // Update or create a Menu
     * const menu = await prisma.menu.upsert({
     *   create: {
     *     // ... data to create a Menu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Menu we want to update
     *   }
     * })
     */
    upsert<T extends MenuUpsertArgs>(args: SelectSubset<T, MenuUpsertArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Menus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuCountArgs} args - Arguments to filter Menus to count.
     * @example
     * // Count the number of Menus
     * const count = await prisma.menu.count({
     *   where: {
     *     // ... the filter for the Menus we want to count
     *   }
     * })
    **/
    count<T extends MenuCountArgs>(
      args?: Subset<T, MenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MenuAggregateArgs>(args: Subset<T, MenuAggregateArgs>): Prisma.PrismaPromise<GetMenuAggregateType<T>>

    /**
     * Group by Menu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MenuGroupByArgs} args - Group by arguments.
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
      T extends MenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MenuGroupByArgs['orderBy'] }
        : { orderBy?: MenuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Menu model
   */
  readonly fields: MenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Menu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends Menu$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Menu$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Menu model
   */
  interface MenuFieldRefs {
    readonly id: FieldRef<"Menu", 'String'>
    readonly name: FieldRef<"Menu", 'String'>
    readonly description: FieldRef<"Menu", 'String'>
    readonly price: FieldRef<"Menu", 'Float'>
    readonly category: FieldRef<"Menu", 'String'>
    readonly imageUrl: FieldRef<"Menu", 'String'>
    readonly restaurantId: FieldRef<"Menu", 'String'>
    readonly createdAt: FieldRef<"Menu", 'DateTime'>
    readonly updatedAt: FieldRef<"Menu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Menu findUnique
   */
  export type MenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findUniqueOrThrow
   */
  export type MenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu findFirst
   */
  export type MenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findFirstOrThrow
   */
  export type MenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menu to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu findMany
   */
  export type MenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter, which Menus to fetch.
     */
    where?: MenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Menus to fetch.
     */
    orderBy?: MenuOrderByWithRelationInput | MenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Menus.
     */
    cursor?: MenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Menus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Menus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Menus.
     */
    distinct?: MenuScalarFieldEnum | MenuScalarFieldEnum[]
  }

  /**
   * Menu create
   */
  export type MenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to create a Menu.
     */
    data: XOR<MenuCreateInput, MenuUncheckedCreateInput>
  }

  /**
   * Menu createMany
   */
  export type MenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Menus.
     */
    data: MenuCreateManyInput | MenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Menu update
   */
  export type MenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The data needed to update a Menu.
     */
    data: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
    /**
     * Choose, which Menu to update.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu updateMany
   */
  export type MenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Menus.
     */
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyInput>
    /**
     * Filter which Menus to update
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to update.
     */
    limit?: number
  }

  /**
   * Menu upsert
   */
  export type MenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * The filter to search for the Menu to update in case it exists.
     */
    where: MenuWhereUniqueInput
    /**
     * In case the Menu found by the `where` argument doesn't exist, create a new Menu with this data.
     */
    create: XOR<MenuCreateInput, MenuUncheckedCreateInput>
    /**
     * In case the Menu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MenuUpdateInput, MenuUncheckedUpdateInput>
  }

  /**
   * Menu delete
   */
  export type MenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    /**
     * Filter which Menu to delete.
     */
    where: MenuWhereUniqueInput
  }

  /**
   * Menu deleteMany
   */
  export type MenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Menus to delete
     */
    where?: MenuWhereInput
    /**
     * Limit how many Menus to delete.
     */
    limit?: number
  }

  /**
   * Menu.orderItems
   */
  export type Menu$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberOrderItem
     */
    select?: MemberOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberOrderItem
     */
    omit?: MemberOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberOrderItemInclude<ExtArgs> | null
    where?: MemberOrderItemWhereInput
    orderBy?: MemberOrderItemOrderByWithRelationInput | MemberOrderItemOrderByWithRelationInput[]
    cursor?: MemberOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberOrderItemScalarFieldEnum | MemberOrderItemScalarFieldEnum[]
  }

  /**
   * Menu without action
   */
  export type MenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
  }


  /**
   * Model Party
   */

  export type AggregateParty = {
    _count: PartyCountAggregateOutputType | null
    _avg: PartyAvgAggregateOutputType | null
    _sum: PartySumAggregateOutputType | null
    _min: PartyMinAggregateOutputType | null
    _max: PartyMaxAggregateOutputType | null
  }

  export type PartyAvgAggregateOutputType = {
    maxParticipants: number | null
    serviceCharge: number | null
    vat: number | null
  }

  export type PartySumAggregateOutputType = {
    maxParticipants: number | null
    serviceCharge: number | null
    vat: number | null
  }

  export type PartyMinAggregateOutputType = {
    id: string | null
    name: string | null
    details: string | null
    meetupTime: Date | null
    maxParticipants: number | null
    status: $Enums.PartyStatus | null
    contactInfo: string | null
    serviceCharge: number | null
    vat: number | null
    restaurantId: string | null
    leaderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartyMaxAggregateOutputType = {
    id: string | null
    name: string | null
    details: string | null
    meetupTime: Date | null
    maxParticipants: number | null
    status: $Enums.PartyStatus | null
    contactInfo: string | null
    serviceCharge: number | null
    vat: number | null
    restaurantId: string | null
    leaderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartyCountAggregateOutputType = {
    id: number
    name: number
    details: number
    meetupTime: number
    maxParticipants: number
    status: number
    contactInfo: number
    serviceCharge: number
    vat: number
    restaurantId: number
    leaderId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartyAvgAggregateInputType = {
    maxParticipants?: true
    serviceCharge?: true
    vat?: true
  }

  export type PartySumAggregateInputType = {
    maxParticipants?: true
    serviceCharge?: true
    vat?: true
  }

  export type PartyMinAggregateInputType = {
    id?: true
    name?: true
    details?: true
    meetupTime?: true
    maxParticipants?: true
    status?: true
    contactInfo?: true
    serviceCharge?: true
    vat?: true
    restaurantId?: true
    leaderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartyMaxAggregateInputType = {
    id?: true
    name?: true
    details?: true
    meetupTime?: true
    maxParticipants?: true
    status?: true
    contactInfo?: true
    serviceCharge?: true
    vat?: true
    restaurantId?: true
    leaderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartyCountAggregateInputType = {
    id?: true
    name?: true
    details?: true
    meetupTime?: true
    maxParticipants?: true
    status?: true
    contactInfo?: true
    serviceCharge?: true
    vat?: true
    restaurantId?: true
    leaderId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Party to aggregate.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Parties
    **/
    _count?: true | PartyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartyMaxAggregateInputType
  }

  export type GetPartyAggregateType<T extends PartyAggregateArgs> = {
        [P in keyof T & keyof AggregateParty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParty[P]>
      : GetScalarType<T[P], AggregateParty[P]>
  }




  export type PartyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartyWhereInput
    orderBy?: PartyOrderByWithAggregationInput | PartyOrderByWithAggregationInput[]
    by: PartyScalarFieldEnum[] | PartyScalarFieldEnum
    having?: PartyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartyCountAggregateInputType | true
    _avg?: PartyAvgAggregateInputType
    _sum?: PartySumAggregateInputType
    _min?: PartyMinAggregateInputType
    _max?: PartyMaxAggregateInputType
  }

  export type PartyGroupByOutputType = {
    id: string
    name: string | null
    details: string | null
    meetupTime: Date
    maxParticipants: number
    status: $Enums.PartyStatus
    contactInfo: string
    serviceCharge: number
    vat: number
    restaurantId: string
    leaderId: string
    createdAt: Date
    updatedAt: Date
    _count: PartyCountAggregateOutputType | null
    _avg: PartyAvgAggregateOutputType | null
    _sum: PartySumAggregateOutputType | null
    _min: PartyMinAggregateOutputType | null
    _max: PartyMaxAggregateOutputType | null
  }

  type GetPartyGroupByPayload<T extends PartyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartyGroupByOutputType[P]>
            : GetScalarType<T[P], PartyGroupByOutputType[P]>
        }
      >
    >


  export type PartySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    details?: boolean
    meetupTime?: boolean
    maxParticipants?: boolean
    status?: boolean
    contactInfo?: boolean
    serviceCharge?: boolean
    vat?: boolean
    restaurantId?: boolean
    leaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    leader?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Party$membersArgs<ExtArgs>
    customItems?: boolean | Party$customItemsArgs<ExtArgs>
    _count?: boolean | PartyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["party"]>



  export type PartySelectScalar = {
    id?: boolean
    name?: boolean
    details?: boolean
    meetupTime?: boolean
    maxParticipants?: boolean
    status?: boolean
    contactInfo?: boolean
    serviceCharge?: boolean
    vat?: boolean
    restaurantId?: boolean
    leaderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "details" | "meetupTime" | "maxParticipants" | "status" | "contactInfo" | "serviceCharge" | "vat" | "restaurantId" | "leaderId" | "createdAt" | "updatedAt", ExtArgs["result"]["party"]>
  export type PartyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
    leader?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Party$membersArgs<ExtArgs>
    customItems?: boolean | Party$customItemsArgs<ExtArgs>
    _count?: boolean | PartyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PartyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Party"
    objects: {
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
      leader: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$PartyMemberPayload<ExtArgs>[]
      customItems: Prisma.$PartyCustomItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      details: string | null
      meetupTime: Date
      maxParticipants: number
      status: $Enums.PartyStatus
      contactInfo: string
      serviceCharge: number
      vat: number
      restaurantId: string
      leaderId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["party"]>
    composites: {}
  }

  type PartyGetPayload<S extends boolean | null | undefined | PartyDefaultArgs> = $Result.GetResult<Prisma.$PartyPayload, S>

  type PartyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartyCountAggregateInputType | true
    }

  export interface PartyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Party'], meta: { name: 'Party' } }
    /**
     * Find zero or one Party that matches the filter.
     * @param {PartyFindUniqueArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartyFindUniqueArgs>(args: SelectSubset<T, PartyFindUniqueArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Party that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartyFindUniqueOrThrowArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartyFindUniqueOrThrowArgs>(args: SelectSubset<T, PartyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Party that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyFindFirstArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartyFindFirstArgs>(args?: SelectSubset<T, PartyFindFirstArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Party that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyFindFirstOrThrowArgs} args - Arguments to find a Party
     * @example
     * // Get one Party
     * const party = await prisma.party.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartyFindFirstOrThrowArgs>(args?: SelectSubset<T, PartyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Parties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parties
     * const parties = await prisma.party.findMany()
     * 
     * // Get first 10 Parties
     * const parties = await prisma.party.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partyWithIdOnly = await prisma.party.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartyFindManyArgs>(args?: SelectSubset<T, PartyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Party.
     * @param {PartyCreateArgs} args - Arguments to create a Party.
     * @example
     * // Create one Party
     * const Party = await prisma.party.create({
     *   data: {
     *     // ... data to create a Party
     *   }
     * })
     * 
     */
    create<T extends PartyCreateArgs>(args: SelectSubset<T, PartyCreateArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Parties.
     * @param {PartyCreateManyArgs} args - Arguments to create many Parties.
     * @example
     * // Create many Parties
     * const party = await prisma.party.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartyCreateManyArgs>(args?: SelectSubset<T, PartyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Party.
     * @param {PartyDeleteArgs} args - Arguments to delete one Party.
     * @example
     * // Delete one Party
     * const Party = await prisma.party.delete({
     *   where: {
     *     // ... filter to delete one Party
     *   }
     * })
     * 
     */
    delete<T extends PartyDeleteArgs>(args: SelectSubset<T, PartyDeleteArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Party.
     * @param {PartyUpdateArgs} args - Arguments to update one Party.
     * @example
     * // Update one Party
     * const party = await prisma.party.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartyUpdateArgs>(args: SelectSubset<T, PartyUpdateArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Parties.
     * @param {PartyDeleteManyArgs} args - Arguments to filter Parties to delete.
     * @example
     * // Delete a few Parties
     * const { count } = await prisma.party.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartyDeleteManyArgs>(args?: SelectSubset<T, PartyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Parties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parties
     * const party = await prisma.party.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartyUpdateManyArgs>(args: SelectSubset<T, PartyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Party.
     * @param {PartyUpsertArgs} args - Arguments to update or create a Party.
     * @example
     * // Update or create a Party
     * const party = await prisma.party.upsert({
     *   create: {
     *     // ... data to create a Party
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Party we want to update
     *   }
     * })
     */
    upsert<T extends PartyUpsertArgs>(args: SelectSubset<T, PartyUpsertArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Parties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyCountArgs} args - Arguments to filter Parties to count.
     * @example
     * // Count the number of Parties
     * const count = await prisma.party.count({
     *   where: {
     *     // ... the filter for the Parties we want to count
     *   }
     * })
    **/
    count<T extends PartyCountArgs>(
      args?: Subset<T, PartyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Party.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartyAggregateArgs>(args: Subset<T, PartyAggregateArgs>): Prisma.PrismaPromise<GetPartyAggregateType<T>>

    /**
     * Group by Party.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyGroupByArgs} args - Group by arguments.
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
      T extends PartyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartyGroupByArgs['orderBy'] }
        : { orderBy?: PartyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Party model
   */
  readonly fields: PartyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Party.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leader<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Party$membersArgs<ExtArgs> = {}>(args?: Subset<T, Party$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customItems<T extends Party$customItemsArgs<ExtArgs> = {}>(args?: Subset<T, Party$customItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyCustomItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Party model
   */
  interface PartyFieldRefs {
    readonly id: FieldRef<"Party", 'String'>
    readonly name: FieldRef<"Party", 'String'>
    readonly details: FieldRef<"Party", 'String'>
    readonly meetupTime: FieldRef<"Party", 'DateTime'>
    readonly maxParticipants: FieldRef<"Party", 'Int'>
    readonly status: FieldRef<"Party", 'PartyStatus'>
    readonly contactInfo: FieldRef<"Party", 'String'>
    readonly serviceCharge: FieldRef<"Party", 'Float'>
    readonly vat: FieldRef<"Party", 'Float'>
    readonly restaurantId: FieldRef<"Party", 'String'>
    readonly leaderId: FieldRef<"Party", 'String'>
    readonly createdAt: FieldRef<"Party", 'DateTime'>
    readonly updatedAt: FieldRef<"Party", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Party findUnique
   */
  export type PartyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter, which Party to fetch.
     */
    where: PartyWhereUniqueInput
  }

  /**
   * Party findUniqueOrThrow
   */
  export type PartyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter, which Party to fetch.
     */
    where: PartyWhereUniqueInput
  }

  /**
   * Party findFirst
   */
  export type PartyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter, which Party to fetch.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parties.
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parties.
     */
    distinct?: PartyScalarFieldEnum | PartyScalarFieldEnum[]
  }

  /**
   * Party findFirstOrThrow
   */
  export type PartyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter, which Party to fetch.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Parties.
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parties.
     */
    distinct?: PartyScalarFieldEnum | PartyScalarFieldEnum[]
  }

  /**
   * Party findMany
   */
  export type PartyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter, which Parties to fetch.
     */
    where?: PartyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Parties to fetch.
     */
    orderBy?: PartyOrderByWithRelationInput | PartyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Parties.
     */
    cursor?: PartyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Parties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Parties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Parties.
     */
    distinct?: PartyScalarFieldEnum | PartyScalarFieldEnum[]
  }

  /**
   * Party create
   */
  export type PartyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * The data needed to create a Party.
     */
    data: XOR<PartyCreateInput, PartyUncheckedCreateInput>
  }

  /**
   * Party createMany
   */
  export type PartyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Parties.
     */
    data: PartyCreateManyInput | PartyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Party update
   */
  export type PartyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * The data needed to update a Party.
     */
    data: XOR<PartyUpdateInput, PartyUncheckedUpdateInput>
    /**
     * Choose, which Party to update.
     */
    where: PartyWhereUniqueInput
  }

  /**
   * Party updateMany
   */
  export type PartyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Parties.
     */
    data: XOR<PartyUpdateManyMutationInput, PartyUncheckedUpdateManyInput>
    /**
     * Filter which Parties to update
     */
    where?: PartyWhereInput
    /**
     * Limit how many Parties to update.
     */
    limit?: number
  }

  /**
   * Party upsert
   */
  export type PartyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * The filter to search for the Party to update in case it exists.
     */
    where: PartyWhereUniqueInput
    /**
     * In case the Party found by the `where` argument doesn't exist, create a new Party with this data.
     */
    create: XOR<PartyCreateInput, PartyUncheckedCreateInput>
    /**
     * In case the Party was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartyUpdateInput, PartyUncheckedUpdateInput>
  }

  /**
   * Party delete
   */
  export type PartyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
    /**
     * Filter which Party to delete.
     */
    where: PartyWhereUniqueInput
  }

  /**
   * Party deleteMany
   */
  export type PartyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Parties to delete
     */
    where?: PartyWhereInput
    /**
     * Limit how many Parties to delete.
     */
    limit?: number
  }

  /**
   * Party.members
   */
  export type Party$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    where?: PartyMemberWhereInput
    orderBy?: PartyMemberOrderByWithRelationInput | PartyMemberOrderByWithRelationInput[]
    cursor?: PartyMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartyMemberScalarFieldEnum | PartyMemberScalarFieldEnum[]
  }

  /**
   * Party.customItems
   */
  export type Party$customItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCustomItem
     */
    select?: PartyCustomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyCustomItem
     */
    omit?: PartyCustomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyCustomItemInclude<ExtArgs> | null
    where?: PartyCustomItemWhereInput
    orderBy?: PartyCustomItemOrderByWithRelationInput | PartyCustomItemOrderByWithRelationInput[]
    cursor?: PartyCustomItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartyCustomItemScalarFieldEnum | PartyCustomItemScalarFieldEnum[]
  }

  /**
   * Party without action
   */
  export type PartyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Party
     */
    select?: PartySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Party
     */
    omit?: PartyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyInclude<ExtArgs> | null
  }


  /**
   * Model PartyCustomItem
   */

  export type AggregatePartyCustomItem = {
    _count: PartyCustomItemCountAggregateOutputType | null
    _avg: PartyCustomItemAvgAggregateOutputType | null
    _sum: PartyCustomItemSumAggregateOutputType | null
    _min: PartyCustomItemMinAggregateOutputType | null
    _max: PartyCustomItemMaxAggregateOutputType | null
  }

  export type PartyCustomItemAvgAggregateOutputType = {
    price: number | null
  }

  export type PartyCustomItemSumAggregateOutputType = {
    price: number | null
  }

  export type PartyCustomItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    partyId: string | null
    createdAt: Date | null
  }

  export type PartyCustomItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    partyId: string | null
    createdAt: Date | null
  }

  export type PartyCustomItemCountAggregateOutputType = {
    id: number
    name: number
    price: number
    partyId: number
    createdAt: number
    _all: number
  }


  export type PartyCustomItemAvgAggregateInputType = {
    price?: true
  }

  export type PartyCustomItemSumAggregateInputType = {
    price?: true
  }

  export type PartyCustomItemMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    partyId?: true
    createdAt?: true
  }

  export type PartyCustomItemMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    partyId?: true
    createdAt?: true
  }

  export type PartyCustomItemCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    partyId?: true
    createdAt?: true
    _all?: true
  }

  export type PartyCustomItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartyCustomItem to aggregate.
     */
    where?: PartyCustomItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyCustomItems to fetch.
     */
    orderBy?: PartyCustomItemOrderByWithRelationInput | PartyCustomItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartyCustomItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyCustomItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyCustomItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartyCustomItems
    **/
    _count?: true | PartyCustomItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartyCustomItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartyCustomItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartyCustomItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartyCustomItemMaxAggregateInputType
  }

  export type GetPartyCustomItemAggregateType<T extends PartyCustomItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePartyCustomItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartyCustomItem[P]>
      : GetScalarType<T[P], AggregatePartyCustomItem[P]>
  }




  export type PartyCustomItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartyCustomItemWhereInput
    orderBy?: PartyCustomItemOrderByWithAggregationInput | PartyCustomItemOrderByWithAggregationInput[]
    by: PartyCustomItemScalarFieldEnum[] | PartyCustomItemScalarFieldEnum
    having?: PartyCustomItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartyCustomItemCountAggregateInputType | true
    _avg?: PartyCustomItemAvgAggregateInputType
    _sum?: PartyCustomItemSumAggregateInputType
    _min?: PartyCustomItemMinAggregateInputType
    _max?: PartyCustomItemMaxAggregateInputType
  }

  export type PartyCustomItemGroupByOutputType = {
    id: string
    name: string
    price: number
    partyId: string
    createdAt: Date
    _count: PartyCustomItemCountAggregateOutputType | null
    _avg: PartyCustomItemAvgAggregateOutputType | null
    _sum: PartyCustomItemSumAggregateOutputType | null
    _min: PartyCustomItemMinAggregateOutputType | null
    _max: PartyCustomItemMaxAggregateOutputType | null
  }

  type GetPartyCustomItemGroupByPayload<T extends PartyCustomItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartyCustomItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartyCustomItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartyCustomItemGroupByOutputType[P]>
            : GetScalarType<T[P], PartyCustomItemGroupByOutputType[P]>
        }
      >
    >


  export type PartyCustomItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    partyId?: boolean
    createdAt?: boolean
    party?: boolean | PartyDefaultArgs<ExtArgs>
    orderItems?: boolean | PartyCustomItem$orderItemsArgs<ExtArgs>
    _count?: boolean | PartyCustomItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partyCustomItem"]>



  export type PartyCustomItemSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    partyId?: boolean
    createdAt?: boolean
  }

  export type PartyCustomItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "partyId" | "createdAt", ExtArgs["result"]["partyCustomItem"]>
  export type PartyCustomItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    party?: boolean | PartyDefaultArgs<ExtArgs>
    orderItems?: boolean | PartyCustomItem$orderItemsArgs<ExtArgs>
    _count?: boolean | PartyCustomItemCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PartyCustomItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartyCustomItem"
    objects: {
      party: Prisma.$PartyPayload<ExtArgs>
      orderItems: Prisma.$MemberOrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      partyId: string
      createdAt: Date
    }, ExtArgs["result"]["partyCustomItem"]>
    composites: {}
  }

  type PartyCustomItemGetPayload<S extends boolean | null | undefined | PartyCustomItemDefaultArgs> = $Result.GetResult<Prisma.$PartyCustomItemPayload, S>

  type PartyCustomItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartyCustomItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartyCustomItemCountAggregateInputType | true
    }

  export interface PartyCustomItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartyCustomItem'], meta: { name: 'PartyCustomItem' } }
    /**
     * Find zero or one PartyCustomItem that matches the filter.
     * @param {PartyCustomItemFindUniqueArgs} args - Arguments to find a PartyCustomItem
     * @example
     * // Get one PartyCustomItem
     * const partyCustomItem = await prisma.partyCustomItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartyCustomItemFindUniqueArgs>(args: SelectSubset<T, PartyCustomItemFindUniqueArgs<ExtArgs>>): Prisma__PartyCustomItemClient<$Result.GetResult<Prisma.$PartyCustomItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PartyCustomItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartyCustomItemFindUniqueOrThrowArgs} args - Arguments to find a PartyCustomItem
     * @example
     * // Get one PartyCustomItem
     * const partyCustomItem = await prisma.partyCustomItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartyCustomItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PartyCustomItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartyCustomItemClient<$Result.GetResult<Prisma.$PartyCustomItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartyCustomItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyCustomItemFindFirstArgs} args - Arguments to find a PartyCustomItem
     * @example
     * // Get one PartyCustomItem
     * const partyCustomItem = await prisma.partyCustomItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartyCustomItemFindFirstArgs>(args?: SelectSubset<T, PartyCustomItemFindFirstArgs<ExtArgs>>): Prisma__PartyCustomItemClient<$Result.GetResult<Prisma.$PartyCustomItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartyCustomItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyCustomItemFindFirstOrThrowArgs} args - Arguments to find a PartyCustomItem
     * @example
     * // Get one PartyCustomItem
     * const partyCustomItem = await prisma.partyCustomItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartyCustomItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PartyCustomItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartyCustomItemClient<$Result.GetResult<Prisma.$PartyCustomItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PartyCustomItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyCustomItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartyCustomItems
     * const partyCustomItems = await prisma.partyCustomItem.findMany()
     * 
     * // Get first 10 PartyCustomItems
     * const partyCustomItems = await prisma.partyCustomItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partyCustomItemWithIdOnly = await prisma.partyCustomItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartyCustomItemFindManyArgs>(args?: SelectSubset<T, PartyCustomItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyCustomItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PartyCustomItem.
     * @param {PartyCustomItemCreateArgs} args - Arguments to create a PartyCustomItem.
     * @example
     * // Create one PartyCustomItem
     * const PartyCustomItem = await prisma.partyCustomItem.create({
     *   data: {
     *     // ... data to create a PartyCustomItem
     *   }
     * })
     * 
     */
    create<T extends PartyCustomItemCreateArgs>(args: SelectSubset<T, PartyCustomItemCreateArgs<ExtArgs>>): Prisma__PartyCustomItemClient<$Result.GetResult<Prisma.$PartyCustomItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PartyCustomItems.
     * @param {PartyCustomItemCreateManyArgs} args - Arguments to create many PartyCustomItems.
     * @example
     * // Create many PartyCustomItems
     * const partyCustomItem = await prisma.partyCustomItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartyCustomItemCreateManyArgs>(args?: SelectSubset<T, PartyCustomItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PartyCustomItem.
     * @param {PartyCustomItemDeleteArgs} args - Arguments to delete one PartyCustomItem.
     * @example
     * // Delete one PartyCustomItem
     * const PartyCustomItem = await prisma.partyCustomItem.delete({
     *   where: {
     *     // ... filter to delete one PartyCustomItem
     *   }
     * })
     * 
     */
    delete<T extends PartyCustomItemDeleteArgs>(args: SelectSubset<T, PartyCustomItemDeleteArgs<ExtArgs>>): Prisma__PartyCustomItemClient<$Result.GetResult<Prisma.$PartyCustomItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PartyCustomItem.
     * @param {PartyCustomItemUpdateArgs} args - Arguments to update one PartyCustomItem.
     * @example
     * // Update one PartyCustomItem
     * const partyCustomItem = await prisma.partyCustomItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartyCustomItemUpdateArgs>(args: SelectSubset<T, PartyCustomItemUpdateArgs<ExtArgs>>): Prisma__PartyCustomItemClient<$Result.GetResult<Prisma.$PartyCustomItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PartyCustomItems.
     * @param {PartyCustomItemDeleteManyArgs} args - Arguments to filter PartyCustomItems to delete.
     * @example
     * // Delete a few PartyCustomItems
     * const { count } = await prisma.partyCustomItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartyCustomItemDeleteManyArgs>(args?: SelectSubset<T, PartyCustomItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartyCustomItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyCustomItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartyCustomItems
     * const partyCustomItem = await prisma.partyCustomItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartyCustomItemUpdateManyArgs>(args: SelectSubset<T, PartyCustomItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PartyCustomItem.
     * @param {PartyCustomItemUpsertArgs} args - Arguments to update or create a PartyCustomItem.
     * @example
     * // Update or create a PartyCustomItem
     * const partyCustomItem = await prisma.partyCustomItem.upsert({
     *   create: {
     *     // ... data to create a PartyCustomItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartyCustomItem we want to update
     *   }
     * })
     */
    upsert<T extends PartyCustomItemUpsertArgs>(args: SelectSubset<T, PartyCustomItemUpsertArgs<ExtArgs>>): Prisma__PartyCustomItemClient<$Result.GetResult<Prisma.$PartyCustomItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PartyCustomItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyCustomItemCountArgs} args - Arguments to filter PartyCustomItems to count.
     * @example
     * // Count the number of PartyCustomItems
     * const count = await prisma.partyCustomItem.count({
     *   where: {
     *     // ... the filter for the PartyCustomItems we want to count
     *   }
     * })
    **/
    count<T extends PartyCustomItemCountArgs>(
      args?: Subset<T, PartyCustomItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartyCustomItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartyCustomItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyCustomItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartyCustomItemAggregateArgs>(args: Subset<T, PartyCustomItemAggregateArgs>): Prisma.PrismaPromise<GetPartyCustomItemAggregateType<T>>

    /**
     * Group by PartyCustomItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyCustomItemGroupByArgs} args - Group by arguments.
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
      T extends PartyCustomItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartyCustomItemGroupByArgs['orderBy'] }
        : { orderBy?: PartyCustomItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartyCustomItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartyCustomItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartyCustomItem model
   */
  readonly fields: PartyCustomItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartyCustomItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartyCustomItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    party<T extends PartyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartyDefaultArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends PartyCustomItem$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, PartyCustomItem$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PartyCustomItem model
   */
  interface PartyCustomItemFieldRefs {
    readonly id: FieldRef<"PartyCustomItem", 'String'>
    readonly name: FieldRef<"PartyCustomItem", 'String'>
    readonly price: FieldRef<"PartyCustomItem", 'Float'>
    readonly partyId: FieldRef<"PartyCustomItem", 'String'>
    readonly createdAt: FieldRef<"PartyCustomItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PartyCustomItem findUnique
   */
  export type PartyCustomItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCustomItem
     */
    select?: PartyCustomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyCustomItem
     */
    omit?: PartyCustomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyCustomItemInclude<ExtArgs> | null
    /**
     * Filter, which PartyCustomItem to fetch.
     */
    where: PartyCustomItemWhereUniqueInput
  }

  /**
   * PartyCustomItem findUniqueOrThrow
   */
  export type PartyCustomItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCustomItem
     */
    select?: PartyCustomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyCustomItem
     */
    omit?: PartyCustomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyCustomItemInclude<ExtArgs> | null
    /**
     * Filter, which PartyCustomItem to fetch.
     */
    where: PartyCustomItemWhereUniqueInput
  }

  /**
   * PartyCustomItem findFirst
   */
  export type PartyCustomItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCustomItem
     */
    select?: PartyCustomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyCustomItem
     */
    omit?: PartyCustomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyCustomItemInclude<ExtArgs> | null
    /**
     * Filter, which PartyCustomItem to fetch.
     */
    where?: PartyCustomItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyCustomItems to fetch.
     */
    orderBy?: PartyCustomItemOrderByWithRelationInput | PartyCustomItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartyCustomItems.
     */
    cursor?: PartyCustomItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyCustomItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyCustomItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartyCustomItems.
     */
    distinct?: PartyCustomItemScalarFieldEnum | PartyCustomItemScalarFieldEnum[]
  }

  /**
   * PartyCustomItem findFirstOrThrow
   */
  export type PartyCustomItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCustomItem
     */
    select?: PartyCustomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyCustomItem
     */
    omit?: PartyCustomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyCustomItemInclude<ExtArgs> | null
    /**
     * Filter, which PartyCustomItem to fetch.
     */
    where?: PartyCustomItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyCustomItems to fetch.
     */
    orderBy?: PartyCustomItemOrderByWithRelationInput | PartyCustomItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartyCustomItems.
     */
    cursor?: PartyCustomItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyCustomItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyCustomItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartyCustomItems.
     */
    distinct?: PartyCustomItemScalarFieldEnum | PartyCustomItemScalarFieldEnum[]
  }

  /**
   * PartyCustomItem findMany
   */
  export type PartyCustomItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCustomItem
     */
    select?: PartyCustomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyCustomItem
     */
    omit?: PartyCustomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyCustomItemInclude<ExtArgs> | null
    /**
     * Filter, which PartyCustomItems to fetch.
     */
    where?: PartyCustomItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyCustomItems to fetch.
     */
    orderBy?: PartyCustomItemOrderByWithRelationInput | PartyCustomItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartyCustomItems.
     */
    cursor?: PartyCustomItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyCustomItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyCustomItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartyCustomItems.
     */
    distinct?: PartyCustomItemScalarFieldEnum | PartyCustomItemScalarFieldEnum[]
  }

  /**
   * PartyCustomItem create
   */
  export type PartyCustomItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCustomItem
     */
    select?: PartyCustomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyCustomItem
     */
    omit?: PartyCustomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyCustomItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PartyCustomItem.
     */
    data: XOR<PartyCustomItemCreateInput, PartyCustomItemUncheckedCreateInput>
  }

  /**
   * PartyCustomItem createMany
   */
  export type PartyCustomItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartyCustomItems.
     */
    data: PartyCustomItemCreateManyInput | PartyCustomItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartyCustomItem update
   */
  export type PartyCustomItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCustomItem
     */
    select?: PartyCustomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyCustomItem
     */
    omit?: PartyCustomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyCustomItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PartyCustomItem.
     */
    data: XOR<PartyCustomItemUpdateInput, PartyCustomItemUncheckedUpdateInput>
    /**
     * Choose, which PartyCustomItem to update.
     */
    where: PartyCustomItemWhereUniqueInput
  }

  /**
   * PartyCustomItem updateMany
   */
  export type PartyCustomItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartyCustomItems.
     */
    data: XOR<PartyCustomItemUpdateManyMutationInput, PartyCustomItemUncheckedUpdateManyInput>
    /**
     * Filter which PartyCustomItems to update
     */
    where?: PartyCustomItemWhereInput
    /**
     * Limit how many PartyCustomItems to update.
     */
    limit?: number
  }

  /**
   * PartyCustomItem upsert
   */
  export type PartyCustomItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCustomItem
     */
    select?: PartyCustomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyCustomItem
     */
    omit?: PartyCustomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyCustomItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PartyCustomItem to update in case it exists.
     */
    where: PartyCustomItemWhereUniqueInput
    /**
     * In case the PartyCustomItem found by the `where` argument doesn't exist, create a new PartyCustomItem with this data.
     */
    create: XOR<PartyCustomItemCreateInput, PartyCustomItemUncheckedCreateInput>
    /**
     * In case the PartyCustomItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartyCustomItemUpdateInput, PartyCustomItemUncheckedUpdateInput>
  }

  /**
   * PartyCustomItem delete
   */
  export type PartyCustomItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCustomItem
     */
    select?: PartyCustomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyCustomItem
     */
    omit?: PartyCustomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyCustomItemInclude<ExtArgs> | null
    /**
     * Filter which PartyCustomItem to delete.
     */
    where: PartyCustomItemWhereUniqueInput
  }

  /**
   * PartyCustomItem deleteMany
   */
  export type PartyCustomItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartyCustomItems to delete
     */
    where?: PartyCustomItemWhereInput
    /**
     * Limit how many PartyCustomItems to delete.
     */
    limit?: number
  }

  /**
   * PartyCustomItem.orderItems
   */
  export type PartyCustomItem$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberOrderItem
     */
    select?: MemberOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberOrderItem
     */
    omit?: MemberOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberOrderItemInclude<ExtArgs> | null
    where?: MemberOrderItemWhereInput
    orderBy?: MemberOrderItemOrderByWithRelationInput | MemberOrderItemOrderByWithRelationInput[]
    cursor?: MemberOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberOrderItemScalarFieldEnum | MemberOrderItemScalarFieldEnum[]
  }

  /**
   * PartyCustomItem without action
   */
  export type PartyCustomItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCustomItem
     */
    select?: PartyCustomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyCustomItem
     */
    omit?: PartyCustomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyCustomItemInclude<ExtArgs> | null
  }


  /**
   * Model PartyMember
   */

  export type AggregatePartyMember = {
    _count: PartyMemberCountAggregateOutputType | null
    _min: PartyMemberMinAggregateOutputType | null
    _max: PartyMemberMaxAggregateOutputType | null
  }

  export type PartyMemberMinAggregateOutputType = {
    id: string | null
    joinedAt: Date | null
    partyId: string | null
    userId: string | null
  }

  export type PartyMemberMaxAggregateOutputType = {
    id: string | null
    joinedAt: Date | null
    partyId: string | null
    userId: string | null
  }

  export type PartyMemberCountAggregateOutputType = {
    id: number
    joinedAt: number
    partyId: number
    userId: number
    _all: number
  }


  export type PartyMemberMinAggregateInputType = {
    id?: true
    joinedAt?: true
    partyId?: true
    userId?: true
  }

  export type PartyMemberMaxAggregateInputType = {
    id?: true
    joinedAt?: true
    partyId?: true
    userId?: true
  }

  export type PartyMemberCountAggregateInputType = {
    id?: true
    joinedAt?: true
    partyId?: true
    userId?: true
    _all?: true
  }

  export type PartyMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartyMember to aggregate.
     */
    where?: PartyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyMembers to fetch.
     */
    orderBy?: PartyMemberOrderByWithRelationInput | PartyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PartyMembers
    **/
    _count?: true | PartyMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartyMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartyMemberMaxAggregateInputType
  }

  export type GetPartyMemberAggregateType<T extends PartyMemberAggregateArgs> = {
        [P in keyof T & keyof AggregatePartyMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartyMember[P]>
      : GetScalarType<T[P], AggregatePartyMember[P]>
  }




  export type PartyMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartyMemberWhereInput
    orderBy?: PartyMemberOrderByWithAggregationInput | PartyMemberOrderByWithAggregationInput[]
    by: PartyMemberScalarFieldEnum[] | PartyMemberScalarFieldEnum
    having?: PartyMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartyMemberCountAggregateInputType | true
    _min?: PartyMemberMinAggregateInputType
    _max?: PartyMemberMaxAggregateInputType
  }

  export type PartyMemberGroupByOutputType = {
    id: string
    joinedAt: Date
    partyId: string
    userId: string
    _count: PartyMemberCountAggregateOutputType | null
    _min: PartyMemberMinAggregateOutputType | null
    _max: PartyMemberMaxAggregateOutputType | null
  }

  type GetPartyMemberGroupByPayload<T extends PartyMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartyMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartyMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartyMemberGroupByOutputType[P]>
            : GetScalarType<T[P], PartyMemberGroupByOutputType[P]>
        }
      >
    >


  export type PartyMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    joinedAt?: boolean
    partyId?: boolean
    userId?: boolean
    party?: boolean | PartyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    orderItems?: boolean | PartyMember$orderItemsArgs<ExtArgs>
    _count?: boolean | PartyMemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partyMember"]>



  export type PartyMemberSelectScalar = {
    id?: boolean
    joinedAt?: boolean
    partyId?: boolean
    userId?: boolean
  }

  export type PartyMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "joinedAt" | "partyId" | "userId", ExtArgs["result"]["partyMember"]>
  export type PartyMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    party?: boolean | PartyDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    orderItems?: boolean | PartyMember$orderItemsArgs<ExtArgs>
    _count?: boolean | PartyMemberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PartyMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PartyMember"
    objects: {
      party: Prisma.$PartyPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      orderItems: Prisma.$MemberOrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      joinedAt: Date
      partyId: string
      userId: string
    }, ExtArgs["result"]["partyMember"]>
    composites: {}
  }

  type PartyMemberGetPayload<S extends boolean | null | undefined | PartyMemberDefaultArgs> = $Result.GetResult<Prisma.$PartyMemberPayload, S>

  type PartyMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartyMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartyMemberCountAggregateInputType | true
    }

  export interface PartyMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PartyMember'], meta: { name: 'PartyMember' } }
    /**
     * Find zero or one PartyMember that matches the filter.
     * @param {PartyMemberFindUniqueArgs} args - Arguments to find a PartyMember
     * @example
     * // Get one PartyMember
     * const partyMember = await prisma.partyMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartyMemberFindUniqueArgs>(args: SelectSubset<T, PartyMemberFindUniqueArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PartyMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartyMemberFindUniqueOrThrowArgs} args - Arguments to find a PartyMember
     * @example
     * // Get one PartyMember
     * const partyMember = await prisma.partyMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartyMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, PartyMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartyMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberFindFirstArgs} args - Arguments to find a PartyMember
     * @example
     * // Get one PartyMember
     * const partyMember = await prisma.partyMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartyMemberFindFirstArgs>(args?: SelectSubset<T, PartyMemberFindFirstArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PartyMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberFindFirstOrThrowArgs} args - Arguments to find a PartyMember
     * @example
     * // Get one PartyMember
     * const partyMember = await prisma.partyMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartyMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, PartyMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PartyMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PartyMembers
     * const partyMembers = await prisma.partyMember.findMany()
     * 
     * // Get first 10 PartyMembers
     * const partyMembers = await prisma.partyMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partyMemberWithIdOnly = await prisma.partyMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartyMemberFindManyArgs>(args?: SelectSubset<T, PartyMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PartyMember.
     * @param {PartyMemberCreateArgs} args - Arguments to create a PartyMember.
     * @example
     * // Create one PartyMember
     * const PartyMember = await prisma.partyMember.create({
     *   data: {
     *     // ... data to create a PartyMember
     *   }
     * })
     * 
     */
    create<T extends PartyMemberCreateArgs>(args: SelectSubset<T, PartyMemberCreateArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PartyMembers.
     * @param {PartyMemberCreateManyArgs} args - Arguments to create many PartyMembers.
     * @example
     * // Create many PartyMembers
     * const partyMember = await prisma.partyMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartyMemberCreateManyArgs>(args?: SelectSubset<T, PartyMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PartyMember.
     * @param {PartyMemberDeleteArgs} args - Arguments to delete one PartyMember.
     * @example
     * // Delete one PartyMember
     * const PartyMember = await prisma.partyMember.delete({
     *   where: {
     *     // ... filter to delete one PartyMember
     *   }
     * })
     * 
     */
    delete<T extends PartyMemberDeleteArgs>(args: SelectSubset<T, PartyMemberDeleteArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PartyMember.
     * @param {PartyMemberUpdateArgs} args - Arguments to update one PartyMember.
     * @example
     * // Update one PartyMember
     * const partyMember = await prisma.partyMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartyMemberUpdateArgs>(args: SelectSubset<T, PartyMemberUpdateArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PartyMembers.
     * @param {PartyMemberDeleteManyArgs} args - Arguments to filter PartyMembers to delete.
     * @example
     * // Delete a few PartyMembers
     * const { count } = await prisma.partyMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartyMemberDeleteManyArgs>(args?: SelectSubset<T, PartyMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PartyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PartyMembers
     * const partyMember = await prisma.partyMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartyMemberUpdateManyArgs>(args: SelectSubset<T, PartyMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PartyMember.
     * @param {PartyMemberUpsertArgs} args - Arguments to update or create a PartyMember.
     * @example
     * // Update or create a PartyMember
     * const partyMember = await prisma.partyMember.upsert({
     *   create: {
     *     // ... data to create a PartyMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PartyMember we want to update
     *   }
     * })
     */
    upsert<T extends PartyMemberUpsertArgs>(args: SelectSubset<T, PartyMemberUpsertArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PartyMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberCountArgs} args - Arguments to filter PartyMembers to count.
     * @example
     * // Count the number of PartyMembers
     * const count = await prisma.partyMember.count({
     *   where: {
     *     // ... the filter for the PartyMembers we want to count
     *   }
     * })
    **/
    count<T extends PartyMemberCountArgs>(
      args?: Subset<T, PartyMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartyMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PartyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartyMemberAggregateArgs>(args: Subset<T, PartyMemberAggregateArgs>): Prisma.PrismaPromise<GetPartyMemberAggregateType<T>>

    /**
     * Group by PartyMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartyMemberGroupByArgs} args - Group by arguments.
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
      T extends PartyMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartyMemberGroupByArgs['orderBy'] }
        : { orderBy?: PartyMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartyMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartyMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PartyMember model
   */
  readonly fields: PartyMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PartyMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartyMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    party<T extends PartyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartyDefaultArgs<ExtArgs>>): Prisma__PartyClient<$Result.GetResult<Prisma.$PartyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends PartyMember$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, PartyMember$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the PartyMember model
   */
  interface PartyMemberFieldRefs {
    readonly id: FieldRef<"PartyMember", 'String'>
    readonly joinedAt: FieldRef<"PartyMember", 'DateTime'>
    readonly partyId: FieldRef<"PartyMember", 'String'>
    readonly userId: FieldRef<"PartyMember", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PartyMember findUnique
   */
  export type PartyMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * Filter, which PartyMember to fetch.
     */
    where: PartyMemberWhereUniqueInput
  }

  /**
   * PartyMember findUniqueOrThrow
   */
  export type PartyMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * Filter, which PartyMember to fetch.
     */
    where: PartyMemberWhereUniqueInput
  }

  /**
   * PartyMember findFirst
   */
  export type PartyMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * Filter, which PartyMember to fetch.
     */
    where?: PartyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyMembers to fetch.
     */
    orderBy?: PartyMemberOrderByWithRelationInput | PartyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartyMembers.
     */
    cursor?: PartyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartyMembers.
     */
    distinct?: PartyMemberScalarFieldEnum | PartyMemberScalarFieldEnum[]
  }

  /**
   * PartyMember findFirstOrThrow
   */
  export type PartyMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * Filter, which PartyMember to fetch.
     */
    where?: PartyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyMembers to fetch.
     */
    orderBy?: PartyMemberOrderByWithRelationInput | PartyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PartyMembers.
     */
    cursor?: PartyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartyMembers.
     */
    distinct?: PartyMemberScalarFieldEnum | PartyMemberScalarFieldEnum[]
  }

  /**
   * PartyMember findMany
   */
  export type PartyMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * Filter, which PartyMembers to fetch.
     */
    where?: PartyMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PartyMembers to fetch.
     */
    orderBy?: PartyMemberOrderByWithRelationInput | PartyMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PartyMembers.
     */
    cursor?: PartyMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PartyMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PartyMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PartyMembers.
     */
    distinct?: PartyMemberScalarFieldEnum | PartyMemberScalarFieldEnum[]
  }

  /**
   * PartyMember create
   */
  export type PartyMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a PartyMember.
     */
    data: XOR<PartyMemberCreateInput, PartyMemberUncheckedCreateInput>
  }

  /**
   * PartyMember createMany
   */
  export type PartyMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PartyMembers.
     */
    data: PartyMemberCreateManyInput | PartyMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PartyMember update
   */
  export type PartyMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a PartyMember.
     */
    data: XOR<PartyMemberUpdateInput, PartyMemberUncheckedUpdateInput>
    /**
     * Choose, which PartyMember to update.
     */
    where: PartyMemberWhereUniqueInput
  }

  /**
   * PartyMember updateMany
   */
  export type PartyMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PartyMembers.
     */
    data: XOR<PartyMemberUpdateManyMutationInput, PartyMemberUncheckedUpdateManyInput>
    /**
     * Filter which PartyMembers to update
     */
    where?: PartyMemberWhereInput
    /**
     * Limit how many PartyMembers to update.
     */
    limit?: number
  }

  /**
   * PartyMember upsert
   */
  export type PartyMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the PartyMember to update in case it exists.
     */
    where: PartyMemberWhereUniqueInput
    /**
     * In case the PartyMember found by the `where` argument doesn't exist, create a new PartyMember with this data.
     */
    create: XOR<PartyMemberCreateInput, PartyMemberUncheckedCreateInput>
    /**
     * In case the PartyMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartyMemberUpdateInput, PartyMemberUncheckedUpdateInput>
  }

  /**
   * PartyMember delete
   */
  export type PartyMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
    /**
     * Filter which PartyMember to delete.
     */
    where: PartyMemberWhereUniqueInput
  }

  /**
   * PartyMember deleteMany
   */
  export type PartyMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PartyMembers to delete
     */
    where?: PartyMemberWhereInput
    /**
     * Limit how many PartyMembers to delete.
     */
    limit?: number
  }

  /**
   * PartyMember.orderItems
   */
  export type PartyMember$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberOrderItem
     */
    select?: MemberOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberOrderItem
     */
    omit?: MemberOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberOrderItemInclude<ExtArgs> | null
    where?: MemberOrderItemWhereInput
    orderBy?: MemberOrderItemOrderByWithRelationInput | MemberOrderItemOrderByWithRelationInput[]
    cursor?: MemberOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberOrderItemScalarFieldEnum | MemberOrderItemScalarFieldEnum[]
  }

  /**
   * PartyMember without action
   */
  export type PartyMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyMember
     */
    select?: PartyMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyMember
     */
    omit?: PartyMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyMemberInclude<ExtArgs> | null
  }


  /**
   * Model MemberOrderItem
   */

  export type AggregateMemberOrderItem = {
    _count: MemberOrderItemCountAggregateOutputType | null
    _min: MemberOrderItemMinAggregateOutputType | null
    _max: MemberOrderItemMaxAggregateOutputType | null
  }

  export type MemberOrderItemMinAggregateOutputType = {
    id: string | null
    memberId: string | null
    menuId: string | null
    customItemId: string | null
    createdAt: Date | null
  }

  export type MemberOrderItemMaxAggregateOutputType = {
    id: string | null
    memberId: string | null
    menuId: string | null
    customItemId: string | null
    createdAt: Date | null
  }

  export type MemberOrderItemCountAggregateOutputType = {
    id: number
    memberId: number
    menuId: number
    customItemId: number
    createdAt: number
    _all: number
  }


  export type MemberOrderItemMinAggregateInputType = {
    id?: true
    memberId?: true
    menuId?: true
    customItemId?: true
    createdAt?: true
  }

  export type MemberOrderItemMaxAggregateInputType = {
    id?: true
    memberId?: true
    menuId?: true
    customItemId?: true
    createdAt?: true
  }

  export type MemberOrderItemCountAggregateInputType = {
    id?: true
    memberId?: true
    menuId?: true
    customItemId?: true
    createdAt?: true
    _all?: true
  }

  export type MemberOrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberOrderItem to aggregate.
     */
    where?: MemberOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberOrderItems to fetch.
     */
    orderBy?: MemberOrderItemOrderByWithRelationInput | MemberOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MemberOrderItems
    **/
    _count?: true | MemberOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberOrderItemMaxAggregateInputType
  }

  export type GetMemberOrderItemAggregateType<T extends MemberOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMemberOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMemberOrderItem[P]>
      : GetScalarType<T[P], AggregateMemberOrderItem[P]>
  }




  export type MemberOrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberOrderItemWhereInput
    orderBy?: MemberOrderItemOrderByWithAggregationInput | MemberOrderItemOrderByWithAggregationInput[]
    by: MemberOrderItemScalarFieldEnum[] | MemberOrderItemScalarFieldEnum
    having?: MemberOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberOrderItemCountAggregateInputType | true
    _min?: MemberOrderItemMinAggregateInputType
    _max?: MemberOrderItemMaxAggregateInputType
  }

  export type MemberOrderItemGroupByOutputType = {
    id: string
    memberId: string
    menuId: string | null
    customItemId: string | null
    createdAt: Date
    _count: MemberOrderItemCountAggregateOutputType | null
    _min: MemberOrderItemMinAggregateOutputType | null
    _max: MemberOrderItemMaxAggregateOutputType | null
  }

  type GetMemberOrderItemGroupByPayload<T extends MemberOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], MemberOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type MemberOrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    memberId?: boolean
    menuId?: boolean
    customItemId?: boolean
    createdAt?: boolean
    menu?: boolean | MemberOrderItem$menuArgs<ExtArgs>
    customItem?: boolean | MemberOrderItem$customItemArgs<ExtArgs>
    member?: boolean | PartyMemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["memberOrderItem"]>



  export type MemberOrderItemSelectScalar = {
    id?: boolean
    memberId?: boolean
    menuId?: boolean
    customItemId?: boolean
    createdAt?: boolean
  }

  export type MemberOrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "memberId" | "menuId" | "customItemId" | "createdAt", ExtArgs["result"]["memberOrderItem"]>
  export type MemberOrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    menu?: boolean | MemberOrderItem$menuArgs<ExtArgs>
    customItem?: boolean | MemberOrderItem$customItemArgs<ExtArgs>
    member?: boolean | PartyMemberDefaultArgs<ExtArgs>
  }

  export type $MemberOrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MemberOrderItem"
    objects: {
      menu: Prisma.$MenuPayload<ExtArgs> | null
      customItem: Prisma.$PartyCustomItemPayload<ExtArgs> | null
      member: Prisma.$PartyMemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      memberId: string
      menuId: string | null
      customItemId: string | null
      createdAt: Date
    }, ExtArgs["result"]["memberOrderItem"]>
    composites: {}
  }

  type MemberOrderItemGetPayload<S extends boolean | null | undefined | MemberOrderItemDefaultArgs> = $Result.GetResult<Prisma.$MemberOrderItemPayload, S>

  type MemberOrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberOrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberOrderItemCountAggregateInputType | true
    }

  export interface MemberOrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MemberOrderItem'], meta: { name: 'MemberOrderItem' } }
    /**
     * Find zero or one MemberOrderItem that matches the filter.
     * @param {MemberOrderItemFindUniqueArgs} args - Arguments to find a MemberOrderItem
     * @example
     * // Get one MemberOrderItem
     * const memberOrderItem = await prisma.memberOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberOrderItemFindUniqueArgs>(args: SelectSubset<T, MemberOrderItemFindUniqueArgs<ExtArgs>>): Prisma__MemberOrderItemClient<$Result.GetResult<Prisma.$MemberOrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MemberOrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberOrderItemFindUniqueOrThrowArgs} args - Arguments to find a MemberOrderItem
     * @example
     * // Get one MemberOrderItem
     * const memberOrderItem = await prisma.memberOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberOrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberOrderItemClient<$Result.GetResult<Prisma.$MemberOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberOrderItemFindFirstArgs} args - Arguments to find a MemberOrderItem
     * @example
     * // Get one MemberOrderItem
     * const memberOrderItem = await prisma.memberOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberOrderItemFindFirstArgs>(args?: SelectSubset<T, MemberOrderItemFindFirstArgs<ExtArgs>>): Prisma__MemberOrderItemClient<$Result.GetResult<Prisma.$MemberOrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MemberOrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberOrderItemFindFirstOrThrowArgs} args - Arguments to find a MemberOrderItem
     * @example
     * // Get one MemberOrderItem
     * const memberOrderItem = await prisma.memberOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberOrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberOrderItemClient<$Result.GetResult<Prisma.$MemberOrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MemberOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberOrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MemberOrderItems
     * const memberOrderItems = await prisma.memberOrderItem.findMany()
     * 
     * // Get first 10 MemberOrderItems
     * const memberOrderItems = await prisma.memberOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberOrderItemWithIdOnly = await prisma.memberOrderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberOrderItemFindManyArgs>(args?: SelectSubset<T, MemberOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MemberOrderItem.
     * @param {MemberOrderItemCreateArgs} args - Arguments to create a MemberOrderItem.
     * @example
     * // Create one MemberOrderItem
     * const MemberOrderItem = await prisma.memberOrderItem.create({
     *   data: {
     *     // ... data to create a MemberOrderItem
     *   }
     * })
     * 
     */
    create<T extends MemberOrderItemCreateArgs>(args: SelectSubset<T, MemberOrderItemCreateArgs<ExtArgs>>): Prisma__MemberOrderItemClient<$Result.GetResult<Prisma.$MemberOrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MemberOrderItems.
     * @param {MemberOrderItemCreateManyArgs} args - Arguments to create many MemberOrderItems.
     * @example
     * // Create many MemberOrderItems
     * const memberOrderItem = await prisma.memberOrderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberOrderItemCreateManyArgs>(args?: SelectSubset<T, MemberOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MemberOrderItem.
     * @param {MemberOrderItemDeleteArgs} args - Arguments to delete one MemberOrderItem.
     * @example
     * // Delete one MemberOrderItem
     * const MemberOrderItem = await prisma.memberOrderItem.delete({
     *   where: {
     *     // ... filter to delete one MemberOrderItem
     *   }
     * })
     * 
     */
    delete<T extends MemberOrderItemDeleteArgs>(args: SelectSubset<T, MemberOrderItemDeleteArgs<ExtArgs>>): Prisma__MemberOrderItemClient<$Result.GetResult<Prisma.$MemberOrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MemberOrderItem.
     * @param {MemberOrderItemUpdateArgs} args - Arguments to update one MemberOrderItem.
     * @example
     * // Update one MemberOrderItem
     * const memberOrderItem = await prisma.memberOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberOrderItemUpdateArgs>(args: SelectSubset<T, MemberOrderItemUpdateArgs<ExtArgs>>): Prisma__MemberOrderItemClient<$Result.GetResult<Prisma.$MemberOrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MemberOrderItems.
     * @param {MemberOrderItemDeleteManyArgs} args - Arguments to filter MemberOrderItems to delete.
     * @example
     * // Delete a few MemberOrderItems
     * const { count } = await prisma.memberOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberOrderItemDeleteManyArgs>(args?: SelectSubset<T, MemberOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MemberOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MemberOrderItems
     * const memberOrderItem = await prisma.memberOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberOrderItemUpdateManyArgs>(args: SelectSubset<T, MemberOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MemberOrderItem.
     * @param {MemberOrderItemUpsertArgs} args - Arguments to update or create a MemberOrderItem.
     * @example
     * // Update or create a MemberOrderItem
     * const memberOrderItem = await prisma.memberOrderItem.upsert({
     *   create: {
     *     // ... data to create a MemberOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MemberOrderItem we want to update
     *   }
     * })
     */
    upsert<T extends MemberOrderItemUpsertArgs>(args: SelectSubset<T, MemberOrderItemUpsertArgs<ExtArgs>>): Prisma__MemberOrderItemClient<$Result.GetResult<Prisma.$MemberOrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MemberOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberOrderItemCountArgs} args - Arguments to filter MemberOrderItems to count.
     * @example
     * // Count the number of MemberOrderItems
     * const count = await prisma.memberOrderItem.count({
     *   where: {
     *     // ... the filter for the MemberOrderItems we want to count
     *   }
     * })
    **/
    count<T extends MemberOrderItemCountArgs>(
      args?: Subset<T, MemberOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MemberOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberOrderItemAggregateArgs>(args: Subset<T, MemberOrderItemAggregateArgs>): Prisma.PrismaPromise<GetMemberOrderItemAggregateType<T>>

    /**
     * Group by MemberOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberOrderItemGroupByArgs} args - Group by arguments.
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
      T extends MemberOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: MemberOrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MemberOrderItem model
   */
  readonly fields: MemberOrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MemberOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberOrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    menu<T extends MemberOrderItem$menuArgs<ExtArgs> = {}>(args?: Subset<T, MemberOrderItem$menuArgs<ExtArgs>>): Prisma__MenuClient<$Result.GetResult<Prisma.$MenuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    customItem<T extends MemberOrderItem$customItemArgs<ExtArgs> = {}>(args?: Subset<T, MemberOrderItem$customItemArgs<ExtArgs>>): Prisma__PartyCustomItemClient<$Result.GetResult<Prisma.$PartyCustomItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    member<T extends PartyMemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PartyMemberDefaultArgs<ExtArgs>>): Prisma__PartyMemberClient<$Result.GetResult<Prisma.$PartyMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the MemberOrderItem model
   */
  interface MemberOrderItemFieldRefs {
    readonly id: FieldRef<"MemberOrderItem", 'String'>
    readonly memberId: FieldRef<"MemberOrderItem", 'String'>
    readonly menuId: FieldRef<"MemberOrderItem", 'String'>
    readonly customItemId: FieldRef<"MemberOrderItem", 'String'>
    readonly createdAt: FieldRef<"MemberOrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MemberOrderItem findUnique
   */
  export type MemberOrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberOrderItem
     */
    select?: MemberOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberOrderItem
     */
    omit?: MemberOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which MemberOrderItem to fetch.
     */
    where: MemberOrderItemWhereUniqueInput
  }

  /**
   * MemberOrderItem findUniqueOrThrow
   */
  export type MemberOrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberOrderItem
     */
    select?: MemberOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberOrderItem
     */
    omit?: MemberOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which MemberOrderItem to fetch.
     */
    where: MemberOrderItemWhereUniqueInput
  }

  /**
   * MemberOrderItem findFirst
   */
  export type MemberOrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberOrderItem
     */
    select?: MemberOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberOrderItem
     */
    omit?: MemberOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which MemberOrderItem to fetch.
     */
    where?: MemberOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberOrderItems to fetch.
     */
    orderBy?: MemberOrderItemOrderByWithRelationInput | MemberOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberOrderItems.
     */
    cursor?: MemberOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberOrderItems.
     */
    distinct?: MemberOrderItemScalarFieldEnum | MemberOrderItemScalarFieldEnum[]
  }

  /**
   * MemberOrderItem findFirstOrThrow
   */
  export type MemberOrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberOrderItem
     */
    select?: MemberOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberOrderItem
     */
    omit?: MemberOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which MemberOrderItem to fetch.
     */
    where?: MemberOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberOrderItems to fetch.
     */
    orderBy?: MemberOrderItemOrderByWithRelationInput | MemberOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MemberOrderItems.
     */
    cursor?: MemberOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberOrderItems.
     */
    distinct?: MemberOrderItemScalarFieldEnum | MemberOrderItemScalarFieldEnum[]
  }

  /**
   * MemberOrderItem findMany
   */
  export type MemberOrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberOrderItem
     */
    select?: MemberOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberOrderItem
     */
    omit?: MemberOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which MemberOrderItems to fetch.
     */
    where?: MemberOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MemberOrderItems to fetch.
     */
    orderBy?: MemberOrderItemOrderByWithRelationInput | MemberOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MemberOrderItems.
     */
    cursor?: MemberOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MemberOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MemberOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MemberOrderItems.
     */
    distinct?: MemberOrderItemScalarFieldEnum | MemberOrderItemScalarFieldEnum[]
  }

  /**
   * MemberOrderItem create
   */
  export type MemberOrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberOrderItem
     */
    select?: MemberOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberOrderItem
     */
    omit?: MemberOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MemberOrderItem.
     */
    data: XOR<MemberOrderItemCreateInput, MemberOrderItemUncheckedCreateInput>
  }

  /**
   * MemberOrderItem createMany
   */
  export type MemberOrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MemberOrderItems.
     */
    data: MemberOrderItemCreateManyInput | MemberOrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MemberOrderItem update
   */
  export type MemberOrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberOrderItem
     */
    select?: MemberOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberOrderItem
     */
    omit?: MemberOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MemberOrderItem.
     */
    data: XOR<MemberOrderItemUpdateInput, MemberOrderItemUncheckedUpdateInput>
    /**
     * Choose, which MemberOrderItem to update.
     */
    where: MemberOrderItemWhereUniqueInput
  }

  /**
   * MemberOrderItem updateMany
   */
  export type MemberOrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MemberOrderItems.
     */
    data: XOR<MemberOrderItemUpdateManyMutationInput, MemberOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which MemberOrderItems to update
     */
    where?: MemberOrderItemWhereInput
    /**
     * Limit how many MemberOrderItems to update.
     */
    limit?: number
  }

  /**
   * MemberOrderItem upsert
   */
  export type MemberOrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberOrderItem
     */
    select?: MemberOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberOrderItem
     */
    omit?: MemberOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberOrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MemberOrderItem to update in case it exists.
     */
    where: MemberOrderItemWhereUniqueInput
    /**
     * In case the MemberOrderItem found by the `where` argument doesn't exist, create a new MemberOrderItem with this data.
     */
    create: XOR<MemberOrderItemCreateInput, MemberOrderItemUncheckedCreateInput>
    /**
     * In case the MemberOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberOrderItemUpdateInput, MemberOrderItemUncheckedUpdateInput>
  }

  /**
   * MemberOrderItem delete
   */
  export type MemberOrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberOrderItem
     */
    select?: MemberOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberOrderItem
     */
    omit?: MemberOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberOrderItemInclude<ExtArgs> | null
    /**
     * Filter which MemberOrderItem to delete.
     */
    where: MemberOrderItemWhereUniqueInput
  }

  /**
   * MemberOrderItem deleteMany
   */
  export type MemberOrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MemberOrderItems to delete
     */
    where?: MemberOrderItemWhereInput
    /**
     * Limit how many MemberOrderItems to delete.
     */
    limit?: number
  }

  /**
   * MemberOrderItem.menu
   */
  export type MemberOrderItem$menuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Menu
     */
    select?: MenuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Menu
     */
    omit?: MenuOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MenuInclude<ExtArgs> | null
    where?: MenuWhereInput
  }

  /**
   * MemberOrderItem.customItem
   */
  export type MemberOrderItem$customItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PartyCustomItem
     */
    select?: PartyCustomItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PartyCustomItem
     */
    omit?: PartyCustomItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartyCustomItemInclude<ExtArgs> | null
    where?: PartyCustomItemWhereInput
  }

  /**
   * MemberOrderItem without action
   */
  export type MemberOrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberOrderItem
     */
    select?: MemberOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MemberOrderItem
     */
    omit?: MemberOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberOrderItemInclude<ExtArgs> | null
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
    userId: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    userId: string | null
    restaurantId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    userId: number
    restaurantId: number
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
    userId?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    restaurantId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    userId?: true
    restaurantId?: true
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
    userId: string
    restaurantId: string
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
    userId?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>



  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    userId?: boolean
    restaurantId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "comment" | "userId" | "restaurantId" | "createdAt" | "updatedAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    restaurant?: boolean | RestaurantDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      restaurant: Prisma.$RestaurantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      comment: string | null
      userId: string
      restaurantId: string
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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    restaurant<T extends RestaurantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RestaurantDefaultArgs<ExtArgs>>): Prisma__RestaurantClient<$Result.GetResult<Prisma.$RestaurantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly restaurantId: FieldRef<"Review", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
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
    email: 'email',
    password: 'password',
    name: 'name',
    avatarUrl: 'avatarUrl',
    role: 'role',
    provider: 'provider',
    googleId: 'googleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RestaurantScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    lat: 'lat',
    lng: 'lng',
    category: 'category',
    ownerId: 'ownerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type RestaurantScalarFieldEnum = (typeof RestaurantScalarFieldEnum)[keyof typeof RestaurantScalarFieldEnum]


  export const OperatingHourScalarFieldEnum: {
    id: 'id',
    day: 'day',
    openTime: 'openTime',
    closeTime: 'closeTime',
    isClosed: 'isClosed',
    restaurantId: 'restaurantId'
  };

  export type OperatingHourScalarFieldEnum = (typeof OperatingHourScalarFieldEnum)[keyof typeof OperatingHourScalarFieldEnum]


  export const RestaurantImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    isCover: 'isCover',
    restaurantId: 'restaurantId',
    createdAt: 'createdAt'
  };

  export type RestaurantImageScalarFieldEnum = (typeof RestaurantImageScalarFieldEnum)[keyof typeof RestaurantImageScalarFieldEnum]


  export const SavedRestaurantScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    restaurantId: 'restaurantId',
    savedAt: 'savedAt'
  };

  export type SavedRestaurantScalarFieldEnum = (typeof SavedRestaurantScalarFieldEnum)[keyof typeof SavedRestaurantScalarFieldEnum]


  export const MenuScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    category: 'category',
    imageUrl: 'imageUrl',
    restaurantId: 'restaurantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MenuScalarFieldEnum = (typeof MenuScalarFieldEnum)[keyof typeof MenuScalarFieldEnum]


  export const PartyScalarFieldEnum: {
    id: 'id',
    name: 'name',
    details: 'details',
    meetupTime: 'meetupTime',
    maxParticipants: 'maxParticipants',
    status: 'status',
    contactInfo: 'contactInfo',
    serviceCharge: 'serviceCharge',
    vat: 'vat',
    restaurantId: 'restaurantId',
    leaderId: 'leaderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartyScalarFieldEnum = (typeof PartyScalarFieldEnum)[keyof typeof PartyScalarFieldEnum]


  export const PartyCustomItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    partyId: 'partyId',
    createdAt: 'createdAt'
  };

  export type PartyCustomItemScalarFieldEnum = (typeof PartyCustomItemScalarFieldEnum)[keyof typeof PartyCustomItemScalarFieldEnum]


  export const PartyMemberScalarFieldEnum: {
    id: 'id',
    joinedAt: 'joinedAt',
    partyId: 'partyId',
    userId: 'userId'
  };

  export type PartyMemberScalarFieldEnum = (typeof PartyMemberScalarFieldEnum)[keyof typeof PartyMemberScalarFieldEnum]


  export const MemberOrderItemScalarFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    menuId: 'menuId',
    customItemId: 'customItemId',
    createdAt: 'createdAt'
  };

  export type MemberOrderItemScalarFieldEnum = (typeof MemberOrderItemScalarFieldEnum)[keyof typeof MemberOrderItemScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    userId: 'userId',
    restaurantId: 'restaurantId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    avatarUrl: 'avatarUrl',
    googleId: 'googleId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RestaurantOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    ownerId: 'ownerId'
  };

  export type RestaurantOrderByRelevanceFieldEnum = (typeof RestaurantOrderByRelevanceFieldEnum)[keyof typeof RestaurantOrderByRelevanceFieldEnum]


  export const OperatingHourOrderByRelevanceFieldEnum: {
    id: 'id',
    openTime: 'openTime',
    closeTime: 'closeTime',
    restaurantId: 'restaurantId'
  };

  export type OperatingHourOrderByRelevanceFieldEnum = (typeof OperatingHourOrderByRelevanceFieldEnum)[keyof typeof OperatingHourOrderByRelevanceFieldEnum]


  export const RestaurantImageOrderByRelevanceFieldEnum: {
    id: 'id',
    url: 'url',
    restaurantId: 'restaurantId'
  };

  export type RestaurantImageOrderByRelevanceFieldEnum = (typeof RestaurantImageOrderByRelevanceFieldEnum)[keyof typeof RestaurantImageOrderByRelevanceFieldEnum]


  export const SavedRestaurantOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    restaurantId: 'restaurantId'
  };

  export type SavedRestaurantOrderByRelevanceFieldEnum = (typeof SavedRestaurantOrderByRelevanceFieldEnum)[keyof typeof SavedRestaurantOrderByRelevanceFieldEnum]


  export const MenuOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    imageUrl: 'imageUrl',
    restaurantId: 'restaurantId'
  };

  export type MenuOrderByRelevanceFieldEnum = (typeof MenuOrderByRelevanceFieldEnum)[keyof typeof MenuOrderByRelevanceFieldEnum]


  export const PartyOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    details: 'details',
    contactInfo: 'contactInfo',
    restaurantId: 'restaurantId',
    leaderId: 'leaderId'
  };

  export type PartyOrderByRelevanceFieldEnum = (typeof PartyOrderByRelevanceFieldEnum)[keyof typeof PartyOrderByRelevanceFieldEnum]


  export const PartyCustomItemOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    partyId: 'partyId'
  };

  export type PartyCustomItemOrderByRelevanceFieldEnum = (typeof PartyCustomItemOrderByRelevanceFieldEnum)[keyof typeof PartyCustomItemOrderByRelevanceFieldEnum]


  export const PartyMemberOrderByRelevanceFieldEnum: {
    id: 'id',
    partyId: 'partyId',
    userId: 'userId'
  };

  export type PartyMemberOrderByRelevanceFieldEnum = (typeof PartyMemberOrderByRelevanceFieldEnum)[keyof typeof PartyMemberOrderByRelevanceFieldEnum]


  export const MemberOrderItemOrderByRelevanceFieldEnum: {
    id: 'id',
    memberId: 'memberId',
    menuId: 'menuId',
    customItemId: 'customItemId'
  };

  export type MemberOrderItemOrderByRelevanceFieldEnum = (typeof MemberOrderItemOrderByRelevanceFieldEnum)[keyof typeof MemberOrderItemOrderByRelevanceFieldEnum]


  export const ReviewOrderByRelevanceFieldEnum: {
    id: 'id',
    comment: 'comment',
    userId: 'userId',
    restaurantId: 'restaurantId'
  };

  export type ReviewOrderByRelevanceFieldEnum = (typeof ReviewOrderByRelevanceFieldEnum)[keyof typeof ReviewOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Provider'
   */
  export type EnumProviderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Provider'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DayOfWeek'
   */
  export type EnumDayOfWeekFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DayOfWeek'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'PartyStatus'
   */
  export type EnumPartyStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PartyStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    googleId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewListRelationFilter
    partiesLed?: PartyListRelationFilter
    joinedParties?: PartyMemberListRelationFilter
    ownedRestaurants?: RestaurantListRelationFilter
    savedRestaurants?: SavedRestaurantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    provider?: SortOrder
    googleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    partiesLed?: PartyOrderByRelationAggregateInput
    joinedParties?: PartyMemberOrderByRelationAggregateInput
    ownedRestaurants?: RestaurantOrderByRelationAggregateInput
    savedRestaurants?: SavedRestaurantOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    googleId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    name?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    provider?: EnumProviderFilter<"User"> | $Enums.Provider
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewListRelationFilter
    partiesLed?: PartyListRelationFilter
    joinedParties?: PartyMemberListRelationFilter
    ownedRestaurants?: RestaurantListRelationFilter
    savedRestaurants?: SavedRestaurantListRelationFilter
  }, "id" | "email" | "googleId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    name?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    role?: SortOrder
    provider?: SortOrder
    googleId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    provider?: EnumProviderWithAggregatesFilter<"User"> | $Enums.Provider
    googleId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RestaurantWhereInput = {
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    id?: StringFilter<"Restaurant"> | string
    name?: StringFilter<"Restaurant"> | string
    description?: StringNullableFilter<"Restaurant"> | string | null
    lat?: FloatFilter<"Restaurant"> | number
    lng?: FloatFilter<"Restaurant"> | number
    category?: StringNullableFilter<"Restaurant"> | string | null
    ownerId?: StringNullableFilter<"Restaurant"> | string | null
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Restaurant"> | Date | string | null
    images?: RestaurantImageListRelationFilter
    reviews?: ReviewListRelationFilter
    menus?: MenuListRelationFilter
    parties?: PartyListRelationFilter
    operatingHours?: OperatingHourListRelationFilter
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    savedBy?: SavedRestaurantListRelationFilter
  }

  export type RestaurantOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    lat?: SortOrder
    lng?: SortOrder
    category?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    images?: RestaurantImageOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    menus?: MenuOrderByRelationAggregateInput
    parties?: PartyOrderByRelationAggregateInput
    operatingHours?: OperatingHourOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
    savedBy?: SavedRestaurantOrderByRelationAggregateInput
    _relevance?: RestaurantOrderByRelevanceInput
  }

  export type RestaurantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RestaurantWhereInput | RestaurantWhereInput[]
    OR?: RestaurantWhereInput[]
    NOT?: RestaurantWhereInput | RestaurantWhereInput[]
    name?: StringFilter<"Restaurant"> | string
    description?: StringNullableFilter<"Restaurant"> | string | null
    lat?: FloatFilter<"Restaurant"> | number
    lng?: FloatFilter<"Restaurant"> | number
    category?: StringNullableFilter<"Restaurant"> | string | null
    ownerId?: StringNullableFilter<"Restaurant"> | string | null
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Restaurant"> | Date | string | null
    images?: RestaurantImageListRelationFilter
    reviews?: ReviewListRelationFilter
    menus?: MenuListRelationFilter
    parties?: PartyListRelationFilter
    operatingHours?: OperatingHourListRelationFilter
    owner?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    savedBy?: SavedRestaurantListRelationFilter
  }, "id">

  export type RestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    lat?: SortOrder
    lng?: SortOrder
    category?: SortOrderInput | SortOrder
    ownerId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: RestaurantCountOrderByAggregateInput
    _avg?: RestaurantAvgOrderByAggregateInput
    _max?: RestaurantMaxOrderByAggregateInput
    _min?: RestaurantMinOrderByAggregateInput
    _sum?: RestaurantSumOrderByAggregateInput
  }

  export type RestaurantScalarWhereWithAggregatesInput = {
    AND?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    OR?: RestaurantScalarWhereWithAggregatesInput[]
    NOT?: RestaurantScalarWhereWithAggregatesInput | RestaurantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Restaurant"> | string
    name?: StringWithAggregatesFilter<"Restaurant"> | string
    description?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    lat?: FloatWithAggregatesFilter<"Restaurant"> | number
    lng?: FloatWithAggregatesFilter<"Restaurant"> | number
    category?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    ownerId?: StringNullableWithAggregatesFilter<"Restaurant"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Restaurant"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Restaurant"> | Date | string | null
  }

  export type OperatingHourWhereInput = {
    AND?: OperatingHourWhereInput | OperatingHourWhereInput[]
    OR?: OperatingHourWhereInput[]
    NOT?: OperatingHourWhereInput | OperatingHourWhereInput[]
    id?: StringFilter<"OperatingHour"> | string
    day?: EnumDayOfWeekFilter<"OperatingHour"> | $Enums.DayOfWeek
    openTime?: StringFilter<"OperatingHour"> | string
    closeTime?: StringFilter<"OperatingHour"> | string
    isClosed?: BoolFilter<"OperatingHour"> | boolean
    restaurantId?: StringFilter<"OperatingHour"> | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }

  export type OperatingHourOrderByWithRelationInput = {
    id?: SortOrder
    day?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    restaurantId?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    _relevance?: OperatingHourOrderByRelevanceInput
  }

  export type OperatingHourWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OperatingHourWhereInput | OperatingHourWhereInput[]
    OR?: OperatingHourWhereInput[]
    NOT?: OperatingHourWhereInput | OperatingHourWhereInput[]
    day?: EnumDayOfWeekFilter<"OperatingHour"> | $Enums.DayOfWeek
    openTime?: StringFilter<"OperatingHour"> | string
    closeTime?: StringFilter<"OperatingHour"> | string
    isClosed?: BoolFilter<"OperatingHour"> | boolean
    restaurantId?: StringFilter<"OperatingHour"> | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }, "id">

  export type OperatingHourOrderByWithAggregationInput = {
    id?: SortOrder
    day?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    restaurantId?: SortOrder
    _count?: OperatingHourCountOrderByAggregateInput
    _max?: OperatingHourMaxOrderByAggregateInput
    _min?: OperatingHourMinOrderByAggregateInput
  }

  export type OperatingHourScalarWhereWithAggregatesInput = {
    AND?: OperatingHourScalarWhereWithAggregatesInput | OperatingHourScalarWhereWithAggregatesInput[]
    OR?: OperatingHourScalarWhereWithAggregatesInput[]
    NOT?: OperatingHourScalarWhereWithAggregatesInput | OperatingHourScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OperatingHour"> | string
    day?: EnumDayOfWeekWithAggregatesFilter<"OperatingHour"> | $Enums.DayOfWeek
    openTime?: StringWithAggregatesFilter<"OperatingHour"> | string
    closeTime?: StringWithAggregatesFilter<"OperatingHour"> | string
    isClosed?: BoolWithAggregatesFilter<"OperatingHour"> | boolean
    restaurantId?: StringWithAggregatesFilter<"OperatingHour"> | string
  }

  export type RestaurantImageWhereInput = {
    AND?: RestaurantImageWhereInput | RestaurantImageWhereInput[]
    OR?: RestaurantImageWhereInput[]
    NOT?: RestaurantImageWhereInput | RestaurantImageWhereInput[]
    id?: StringFilter<"RestaurantImage"> | string
    url?: StringFilter<"RestaurantImage"> | string
    isCover?: BoolFilter<"RestaurantImage"> | boolean
    restaurantId?: StringFilter<"RestaurantImage"> | string
    createdAt?: DateTimeFilter<"RestaurantImage"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }

  export type RestaurantImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    isCover?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    _relevance?: RestaurantImageOrderByRelevanceInput
  }

  export type RestaurantImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RestaurantImageWhereInput | RestaurantImageWhereInput[]
    OR?: RestaurantImageWhereInput[]
    NOT?: RestaurantImageWhereInput | RestaurantImageWhereInput[]
    url?: StringFilter<"RestaurantImage"> | string
    isCover?: BoolFilter<"RestaurantImage"> | boolean
    restaurantId?: StringFilter<"RestaurantImage"> | string
    createdAt?: DateTimeFilter<"RestaurantImage"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }, "id">

  export type RestaurantImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    isCover?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    _count?: RestaurantImageCountOrderByAggregateInput
    _max?: RestaurantImageMaxOrderByAggregateInput
    _min?: RestaurantImageMinOrderByAggregateInput
  }

  export type RestaurantImageScalarWhereWithAggregatesInput = {
    AND?: RestaurantImageScalarWhereWithAggregatesInput | RestaurantImageScalarWhereWithAggregatesInput[]
    OR?: RestaurantImageScalarWhereWithAggregatesInput[]
    NOT?: RestaurantImageScalarWhereWithAggregatesInput | RestaurantImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RestaurantImage"> | string
    url?: StringWithAggregatesFilter<"RestaurantImage"> | string
    isCover?: BoolWithAggregatesFilter<"RestaurantImage"> | boolean
    restaurantId?: StringWithAggregatesFilter<"RestaurantImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RestaurantImage"> | Date | string
  }

  export type SavedRestaurantWhereInput = {
    AND?: SavedRestaurantWhereInput | SavedRestaurantWhereInput[]
    OR?: SavedRestaurantWhereInput[]
    NOT?: SavedRestaurantWhereInput | SavedRestaurantWhereInput[]
    id?: StringFilter<"SavedRestaurant"> | string
    userId?: StringFilter<"SavedRestaurant"> | string
    restaurantId?: StringFilter<"SavedRestaurant"> | string
    savedAt?: DateTimeFilter<"SavedRestaurant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }

  export type SavedRestaurantOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    restaurantId?: SortOrder
    savedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    restaurant?: RestaurantOrderByWithRelationInput
    _relevance?: SavedRestaurantOrderByRelevanceInput
  }

  export type SavedRestaurantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_restaurantId?: SavedRestaurantUserIdRestaurantIdCompoundUniqueInput
    AND?: SavedRestaurantWhereInput | SavedRestaurantWhereInput[]
    OR?: SavedRestaurantWhereInput[]
    NOT?: SavedRestaurantWhereInput | SavedRestaurantWhereInput[]
    userId?: StringFilter<"SavedRestaurant"> | string
    restaurantId?: StringFilter<"SavedRestaurant"> | string
    savedAt?: DateTimeFilter<"SavedRestaurant"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }, "id" | "userId_restaurantId">

  export type SavedRestaurantOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    restaurantId?: SortOrder
    savedAt?: SortOrder
    _count?: SavedRestaurantCountOrderByAggregateInput
    _max?: SavedRestaurantMaxOrderByAggregateInput
    _min?: SavedRestaurantMinOrderByAggregateInput
  }

  export type SavedRestaurantScalarWhereWithAggregatesInput = {
    AND?: SavedRestaurantScalarWhereWithAggregatesInput | SavedRestaurantScalarWhereWithAggregatesInput[]
    OR?: SavedRestaurantScalarWhereWithAggregatesInput[]
    NOT?: SavedRestaurantScalarWhereWithAggregatesInput | SavedRestaurantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SavedRestaurant"> | string
    userId?: StringWithAggregatesFilter<"SavedRestaurant"> | string
    restaurantId?: StringWithAggregatesFilter<"SavedRestaurant"> | string
    savedAt?: DateTimeWithAggregatesFilter<"SavedRestaurant"> | Date | string
  }

  export type MenuWhereInput = {
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    id?: StringFilter<"Menu"> | string
    name?: StringFilter<"Menu"> | string
    description?: StringNullableFilter<"Menu"> | string | null
    price?: FloatFilter<"Menu"> | number
    category?: StringFilter<"Menu"> | string
    imageUrl?: StringNullableFilter<"Menu"> | string | null
    restaurantId?: StringFilter<"Menu"> | string
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeFilter<"Menu"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    orderItems?: MemberOrderItemListRelationFilter
  }

  export type MenuOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    orderItems?: MemberOrderItemOrderByRelationAggregateInput
    _relevance?: MenuOrderByRelevanceInput
  }

  export type MenuWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MenuWhereInput | MenuWhereInput[]
    OR?: MenuWhereInput[]
    NOT?: MenuWhereInput | MenuWhereInput[]
    name?: StringFilter<"Menu"> | string
    description?: StringNullableFilter<"Menu"> | string | null
    price?: FloatFilter<"Menu"> | number
    category?: StringFilter<"Menu"> | string
    imageUrl?: StringNullableFilter<"Menu"> | string | null
    restaurantId?: StringFilter<"Menu"> | string
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeFilter<"Menu"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    orderItems?: MemberOrderItemListRelationFilter
  }, "id">

  export type MenuOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MenuCountOrderByAggregateInput
    _avg?: MenuAvgOrderByAggregateInput
    _max?: MenuMaxOrderByAggregateInput
    _min?: MenuMinOrderByAggregateInput
    _sum?: MenuSumOrderByAggregateInput
  }

  export type MenuScalarWhereWithAggregatesInput = {
    AND?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    OR?: MenuScalarWhereWithAggregatesInput[]
    NOT?: MenuScalarWhereWithAggregatesInput | MenuScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Menu"> | string
    name?: StringWithAggregatesFilter<"Menu"> | string
    description?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    price?: FloatWithAggregatesFilter<"Menu"> | number
    category?: StringWithAggregatesFilter<"Menu"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Menu"> | string | null
    restaurantId?: StringWithAggregatesFilter<"Menu"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Menu"> | Date | string
  }

  export type PartyWhereInput = {
    AND?: PartyWhereInput | PartyWhereInput[]
    OR?: PartyWhereInput[]
    NOT?: PartyWhereInput | PartyWhereInput[]
    id?: StringFilter<"Party"> | string
    name?: StringNullableFilter<"Party"> | string | null
    details?: StringNullableFilter<"Party"> | string | null
    meetupTime?: DateTimeFilter<"Party"> | Date | string
    maxParticipants?: IntFilter<"Party"> | number
    status?: EnumPartyStatusFilter<"Party"> | $Enums.PartyStatus
    contactInfo?: StringFilter<"Party"> | string
    serviceCharge?: FloatFilter<"Party"> | number
    vat?: FloatFilter<"Party"> | number
    restaurantId?: StringFilter<"Party"> | string
    leaderId?: StringFilter<"Party"> | string
    createdAt?: DateTimeFilter<"Party"> | Date | string
    updatedAt?: DateTimeFilter<"Party"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    leader?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: PartyMemberListRelationFilter
    customItems?: PartyCustomItemListRelationFilter
  }

  export type PartyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    meetupTime?: SortOrder
    maxParticipants?: SortOrder
    status?: SortOrder
    contactInfo?: SortOrder
    serviceCharge?: SortOrder
    vat?: SortOrder
    restaurantId?: SortOrder
    leaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    restaurant?: RestaurantOrderByWithRelationInput
    leader?: UserOrderByWithRelationInput
    members?: PartyMemberOrderByRelationAggregateInput
    customItems?: PartyCustomItemOrderByRelationAggregateInput
    _relevance?: PartyOrderByRelevanceInput
  }

  export type PartyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PartyWhereInput | PartyWhereInput[]
    OR?: PartyWhereInput[]
    NOT?: PartyWhereInput | PartyWhereInput[]
    name?: StringNullableFilter<"Party"> | string | null
    details?: StringNullableFilter<"Party"> | string | null
    meetupTime?: DateTimeFilter<"Party"> | Date | string
    maxParticipants?: IntFilter<"Party"> | number
    status?: EnumPartyStatusFilter<"Party"> | $Enums.PartyStatus
    contactInfo?: StringFilter<"Party"> | string
    serviceCharge?: FloatFilter<"Party"> | number
    vat?: FloatFilter<"Party"> | number
    restaurantId?: StringFilter<"Party"> | string
    leaderId?: StringFilter<"Party"> | string
    createdAt?: DateTimeFilter<"Party"> | Date | string
    updatedAt?: DateTimeFilter<"Party"> | Date | string
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
    leader?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: PartyMemberListRelationFilter
    customItems?: PartyCustomItemListRelationFilter
  }, "id">

  export type PartyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    meetupTime?: SortOrder
    maxParticipants?: SortOrder
    status?: SortOrder
    contactInfo?: SortOrder
    serviceCharge?: SortOrder
    vat?: SortOrder
    restaurantId?: SortOrder
    leaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartyCountOrderByAggregateInput
    _avg?: PartyAvgOrderByAggregateInput
    _max?: PartyMaxOrderByAggregateInput
    _min?: PartyMinOrderByAggregateInput
    _sum?: PartySumOrderByAggregateInput
  }

  export type PartyScalarWhereWithAggregatesInput = {
    AND?: PartyScalarWhereWithAggregatesInput | PartyScalarWhereWithAggregatesInput[]
    OR?: PartyScalarWhereWithAggregatesInput[]
    NOT?: PartyScalarWhereWithAggregatesInput | PartyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Party"> | string
    name?: StringNullableWithAggregatesFilter<"Party"> | string | null
    details?: StringNullableWithAggregatesFilter<"Party"> | string | null
    meetupTime?: DateTimeWithAggregatesFilter<"Party"> | Date | string
    maxParticipants?: IntWithAggregatesFilter<"Party"> | number
    status?: EnumPartyStatusWithAggregatesFilter<"Party"> | $Enums.PartyStatus
    contactInfo?: StringWithAggregatesFilter<"Party"> | string
    serviceCharge?: FloatWithAggregatesFilter<"Party"> | number
    vat?: FloatWithAggregatesFilter<"Party"> | number
    restaurantId?: StringWithAggregatesFilter<"Party"> | string
    leaderId?: StringWithAggregatesFilter<"Party"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Party"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Party"> | Date | string
  }

  export type PartyCustomItemWhereInput = {
    AND?: PartyCustomItemWhereInput | PartyCustomItemWhereInput[]
    OR?: PartyCustomItemWhereInput[]
    NOT?: PartyCustomItemWhereInput | PartyCustomItemWhereInput[]
    id?: StringFilter<"PartyCustomItem"> | string
    name?: StringFilter<"PartyCustomItem"> | string
    price?: FloatFilter<"PartyCustomItem"> | number
    partyId?: StringFilter<"PartyCustomItem"> | string
    createdAt?: DateTimeFilter<"PartyCustomItem"> | Date | string
    party?: XOR<PartyScalarRelationFilter, PartyWhereInput>
    orderItems?: MemberOrderItemListRelationFilter
  }

  export type PartyCustomItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    partyId?: SortOrder
    createdAt?: SortOrder
    party?: PartyOrderByWithRelationInput
    orderItems?: MemberOrderItemOrderByRelationAggregateInput
    _relevance?: PartyCustomItemOrderByRelevanceInput
  }

  export type PartyCustomItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PartyCustomItemWhereInput | PartyCustomItemWhereInput[]
    OR?: PartyCustomItemWhereInput[]
    NOT?: PartyCustomItemWhereInput | PartyCustomItemWhereInput[]
    name?: StringFilter<"PartyCustomItem"> | string
    price?: FloatFilter<"PartyCustomItem"> | number
    partyId?: StringFilter<"PartyCustomItem"> | string
    createdAt?: DateTimeFilter<"PartyCustomItem"> | Date | string
    party?: XOR<PartyScalarRelationFilter, PartyWhereInput>
    orderItems?: MemberOrderItemListRelationFilter
  }, "id">

  export type PartyCustomItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    partyId?: SortOrder
    createdAt?: SortOrder
    _count?: PartyCustomItemCountOrderByAggregateInput
    _avg?: PartyCustomItemAvgOrderByAggregateInput
    _max?: PartyCustomItemMaxOrderByAggregateInput
    _min?: PartyCustomItemMinOrderByAggregateInput
    _sum?: PartyCustomItemSumOrderByAggregateInput
  }

  export type PartyCustomItemScalarWhereWithAggregatesInput = {
    AND?: PartyCustomItemScalarWhereWithAggregatesInput | PartyCustomItemScalarWhereWithAggregatesInput[]
    OR?: PartyCustomItemScalarWhereWithAggregatesInput[]
    NOT?: PartyCustomItemScalarWhereWithAggregatesInput | PartyCustomItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PartyCustomItem"> | string
    name?: StringWithAggregatesFilter<"PartyCustomItem"> | string
    price?: FloatWithAggregatesFilter<"PartyCustomItem"> | number
    partyId?: StringWithAggregatesFilter<"PartyCustomItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PartyCustomItem"> | Date | string
  }

  export type PartyMemberWhereInput = {
    AND?: PartyMemberWhereInput | PartyMemberWhereInput[]
    OR?: PartyMemberWhereInput[]
    NOT?: PartyMemberWhereInput | PartyMemberWhereInput[]
    id?: StringFilter<"PartyMember"> | string
    joinedAt?: DateTimeFilter<"PartyMember"> | Date | string
    partyId?: StringFilter<"PartyMember"> | string
    userId?: StringFilter<"PartyMember"> | string
    party?: XOR<PartyScalarRelationFilter, PartyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    orderItems?: MemberOrderItemListRelationFilter
  }

  export type PartyMemberOrderByWithRelationInput = {
    id?: SortOrder
    joinedAt?: SortOrder
    partyId?: SortOrder
    userId?: SortOrder
    party?: PartyOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    orderItems?: MemberOrderItemOrderByRelationAggregateInput
    _relevance?: PartyMemberOrderByRelevanceInput
  }

  export type PartyMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    partyId_userId?: PartyMemberPartyIdUserIdCompoundUniqueInput
    AND?: PartyMemberWhereInput | PartyMemberWhereInput[]
    OR?: PartyMemberWhereInput[]
    NOT?: PartyMemberWhereInput | PartyMemberWhereInput[]
    joinedAt?: DateTimeFilter<"PartyMember"> | Date | string
    partyId?: StringFilter<"PartyMember"> | string
    userId?: StringFilter<"PartyMember"> | string
    party?: XOR<PartyScalarRelationFilter, PartyWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    orderItems?: MemberOrderItemListRelationFilter
  }, "id" | "partyId_userId">

  export type PartyMemberOrderByWithAggregationInput = {
    id?: SortOrder
    joinedAt?: SortOrder
    partyId?: SortOrder
    userId?: SortOrder
    _count?: PartyMemberCountOrderByAggregateInput
    _max?: PartyMemberMaxOrderByAggregateInput
    _min?: PartyMemberMinOrderByAggregateInput
  }

  export type PartyMemberScalarWhereWithAggregatesInput = {
    AND?: PartyMemberScalarWhereWithAggregatesInput | PartyMemberScalarWhereWithAggregatesInput[]
    OR?: PartyMemberScalarWhereWithAggregatesInput[]
    NOT?: PartyMemberScalarWhereWithAggregatesInput | PartyMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PartyMember"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"PartyMember"> | Date | string
    partyId?: StringWithAggregatesFilter<"PartyMember"> | string
    userId?: StringWithAggregatesFilter<"PartyMember"> | string
  }

  export type MemberOrderItemWhereInput = {
    AND?: MemberOrderItemWhereInput | MemberOrderItemWhereInput[]
    OR?: MemberOrderItemWhereInput[]
    NOT?: MemberOrderItemWhereInput | MemberOrderItemWhereInput[]
    id?: StringFilter<"MemberOrderItem"> | string
    memberId?: StringFilter<"MemberOrderItem"> | string
    menuId?: StringNullableFilter<"MemberOrderItem"> | string | null
    customItemId?: StringNullableFilter<"MemberOrderItem"> | string | null
    createdAt?: DateTimeFilter<"MemberOrderItem"> | Date | string
    menu?: XOR<MenuNullableScalarRelationFilter, MenuWhereInput> | null
    customItem?: XOR<PartyCustomItemNullableScalarRelationFilter, PartyCustomItemWhereInput> | null
    member?: XOR<PartyMemberScalarRelationFilter, PartyMemberWhereInput>
  }

  export type MemberOrderItemOrderByWithRelationInput = {
    id?: SortOrder
    memberId?: SortOrder
    menuId?: SortOrderInput | SortOrder
    customItemId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    menu?: MenuOrderByWithRelationInput
    customItem?: PartyCustomItemOrderByWithRelationInput
    member?: PartyMemberOrderByWithRelationInput
    _relevance?: MemberOrderItemOrderByRelevanceInput
  }

  export type MemberOrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    memberId_menuId?: MemberOrderItemMemberIdMenuIdCompoundUniqueInput
    memberId_customItemId?: MemberOrderItemMemberIdCustomItemIdCompoundUniqueInput
    AND?: MemberOrderItemWhereInput | MemberOrderItemWhereInput[]
    OR?: MemberOrderItemWhereInput[]
    NOT?: MemberOrderItemWhereInput | MemberOrderItemWhereInput[]
    memberId?: StringFilter<"MemberOrderItem"> | string
    menuId?: StringNullableFilter<"MemberOrderItem"> | string | null
    customItemId?: StringNullableFilter<"MemberOrderItem"> | string | null
    createdAt?: DateTimeFilter<"MemberOrderItem"> | Date | string
    menu?: XOR<MenuNullableScalarRelationFilter, MenuWhereInput> | null
    customItem?: XOR<PartyCustomItemNullableScalarRelationFilter, PartyCustomItemWhereInput> | null
    member?: XOR<PartyMemberScalarRelationFilter, PartyMemberWhereInput>
  }, "id" | "memberId_menuId" | "memberId_customItemId">

  export type MemberOrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    memberId?: SortOrder
    menuId?: SortOrderInput | SortOrder
    customItemId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MemberOrderItemCountOrderByAggregateInput
    _max?: MemberOrderItemMaxOrderByAggregateInput
    _min?: MemberOrderItemMinOrderByAggregateInput
  }

  export type MemberOrderItemScalarWhereWithAggregatesInput = {
    AND?: MemberOrderItemScalarWhereWithAggregatesInput | MemberOrderItemScalarWhereWithAggregatesInput[]
    OR?: MemberOrderItemScalarWhereWithAggregatesInput[]
    NOT?: MemberOrderItemScalarWhereWithAggregatesInput | MemberOrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MemberOrderItem"> | string
    memberId?: StringWithAggregatesFilter<"MemberOrderItem"> | string
    menuId?: StringNullableWithAggregatesFilter<"MemberOrderItem"> | string | null
    customItemId?: StringNullableWithAggregatesFilter<"MemberOrderItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MemberOrderItem"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    userId?: StringFilter<"Review"> | string
    restaurantId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    userId?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    restaurant?: RestaurantOrderByWithRelationInput
    _relevance?: ReviewOrderByRelevanceInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    userId?: StringFilter<"Review"> | string
    restaurantId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    restaurant?: XOR<RestaurantScalarRelationFilter, RestaurantWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    userId?: SortOrder
    restaurantId?: SortOrder
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
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    userId?: StringWithAggregatesFilter<"Review"> | string
    restaurantId?: StringWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    avatarUrl?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    partiesLed?: PartyCreateNestedManyWithoutLeaderInput
    joinedParties?: PartyMemberCreateNestedManyWithoutUserInput
    ownedRestaurants?: RestaurantCreateNestedManyWithoutOwnerInput
    savedRestaurants?: SavedRestaurantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    avatarUrl?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    partiesLed?: PartyUncheckedCreateNestedManyWithoutLeaderInput
    joinedParties?: PartyMemberUncheckedCreateNestedManyWithoutUserInput
    ownedRestaurants?: RestaurantUncheckedCreateNestedManyWithoutOwnerInput
    savedRestaurants?: SavedRestaurantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    partiesLed?: PartyUpdateManyWithoutLeaderNestedInput
    joinedParties?: PartyMemberUpdateManyWithoutUserNestedInput
    ownedRestaurants?: RestaurantUpdateManyWithoutOwnerNestedInput
    savedRestaurants?: SavedRestaurantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    partiesLed?: PartyUncheckedUpdateManyWithoutLeaderNestedInput
    joinedParties?: PartyMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedRestaurants?: RestaurantUncheckedUpdateManyWithoutOwnerNestedInput
    savedRestaurants?: SavedRestaurantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    avatarUrl?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantCreateInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RestaurantImageCreateNestedManyWithoutRestaurantInput
    reviews?: ReviewCreateNestedManyWithoutRestaurantInput
    menus?: MenuCreateNestedManyWithoutRestaurantInput
    parties?: PartyCreateNestedManyWithoutRestaurantInput
    operatingHours?: OperatingHourCreateNestedManyWithoutRestaurantInput
    owner?: UserCreateNestedOneWithoutOwnedRestaurantsInput
    savedBy?: SavedRestaurantCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RestaurantImageUncheckedCreateNestedManyWithoutRestaurantInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutRestaurantInput
    menus?: MenuUncheckedCreateNestedManyWithoutRestaurantInput
    parties?: PartyUncheckedCreateNestedManyWithoutRestaurantInput
    operatingHours?: OperatingHourUncheckedCreateNestedManyWithoutRestaurantInput
    savedBy?: SavedRestaurantUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RestaurantImageUpdateManyWithoutRestaurantNestedInput
    reviews?: ReviewUpdateManyWithoutRestaurantNestedInput
    menus?: MenuUpdateManyWithoutRestaurantNestedInput
    parties?: PartyUpdateManyWithoutRestaurantNestedInput
    operatingHours?: OperatingHourUpdateManyWithoutRestaurantNestedInput
    owner?: UserUpdateOneWithoutOwnedRestaurantsNestedInput
    savedBy?: SavedRestaurantUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RestaurantImageUncheckedUpdateManyWithoutRestaurantNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutRestaurantNestedInput
    menus?: MenuUncheckedUpdateManyWithoutRestaurantNestedInput
    parties?: PartyUncheckedUpdateManyWithoutRestaurantNestedInput
    operatingHours?: OperatingHourUncheckedUpdateManyWithoutRestaurantNestedInput
    savedBy?: SavedRestaurantUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type RestaurantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RestaurantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OperatingHourCreateInput = {
    id?: string
    day: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
    restaurant: RestaurantCreateNestedOneWithoutOperatingHoursInput
  }

  export type OperatingHourUncheckedCreateInput = {
    id?: string
    day: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
    restaurantId: string
  }

  export type OperatingHourUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    restaurant?: RestaurantUpdateOneRequiredWithoutOperatingHoursNestedInput
  }

  export type OperatingHourUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: StringFieldUpdateOperationsInput | string
  }

  export type OperatingHourCreateManyInput = {
    id?: string
    day: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
    restaurantId: string
  }

  export type OperatingHourUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OperatingHourUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantImageCreateInput = {
    id?: string
    url: string
    isCover?: boolean
    createdAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutImagesInput
  }

  export type RestaurantImageUncheckedCreateInput = {
    id?: string
    url: string
    isCover?: boolean
    restaurantId: string
    createdAt?: Date | string
  }

  export type RestaurantImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isCover?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutImagesNestedInput
  }

  export type RestaurantImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isCover?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantImageCreateManyInput = {
    id?: string
    url: string
    isCover?: boolean
    restaurantId: string
    createdAt?: Date | string
  }

  export type RestaurantImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isCover?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isCover?: BoolFieldUpdateOperationsInput | boolean
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedRestaurantCreateInput = {
    id?: string
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutSavedRestaurantsInput
    restaurant: RestaurantCreateNestedOneWithoutSavedByInput
  }

  export type SavedRestaurantUncheckedCreateInput = {
    id?: string
    userId: string
    restaurantId: string
    savedAt?: Date | string
  }

  export type SavedRestaurantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedRestaurantsNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedRestaurantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedRestaurantCreateManyInput = {
    id?: string
    userId: string
    restaurantId: string
    savedAt?: Date | string
  }

  export type SavedRestaurantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedRestaurantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    category?: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutMenusInput
    orderItems?: MemberOrderItemCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    category?: string
    imageUrl?: string | null
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: MemberOrderItemUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutMenusNestedInput
    orderItems?: MemberOrderItemUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: MemberOrderItemUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    category?: string
    imageUrl?: string | null
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyCreateInput = {
    id?: string
    name?: string | null
    details?: string | null
    meetupTime: Date | string
    maxParticipants: number
    status?: $Enums.PartyStatus
    contactInfo: string
    serviceCharge?: number
    vat?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutPartiesInput
    leader: UserCreateNestedOneWithoutPartiesLedInput
    members?: PartyMemberCreateNestedManyWithoutPartyInput
    customItems?: PartyCustomItemCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateInput = {
    id?: string
    name?: string | null
    details?: string | null
    meetupTime: Date | string
    maxParticipants: number
    status?: $Enums.PartyStatus
    contactInfo: string
    serviceCharge?: number
    vat?: number
    restaurantId: string
    leaderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: PartyMemberUncheckedCreateNestedManyWithoutPartyInput
    customItems?: PartyCustomItemUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    meetupTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumPartyStatusFieldUpdateOperationsInput | $Enums.PartyStatus
    contactInfo?: StringFieldUpdateOperationsInput | string
    serviceCharge?: FloatFieldUpdateOperationsInput | number
    vat?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutPartiesNestedInput
    leader?: UserUpdateOneRequiredWithoutPartiesLedNestedInput
    members?: PartyMemberUpdateManyWithoutPartyNestedInput
    customItems?: PartyCustomItemUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    meetupTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumPartyStatusFieldUpdateOperationsInput | $Enums.PartyStatus
    contactInfo?: StringFieldUpdateOperationsInput | string
    serviceCharge?: FloatFieldUpdateOperationsInput | number
    vat?: FloatFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    leaderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: PartyMemberUncheckedUpdateManyWithoutPartyNestedInput
    customItems?: PartyCustomItemUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type PartyCreateManyInput = {
    id?: string
    name?: string | null
    details?: string | null
    meetupTime: Date | string
    maxParticipants: number
    status?: $Enums.PartyStatus
    contactInfo: string
    serviceCharge?: number
    vat?: number
    restaurantId: string
    leaderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    meetupTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumPartyStatusFieldUpdateOperationsInput | $Enums.PartyStatus
    contactInfo?: StringFieldUpdateOperationsInput | string
    serviceCharge?: FloatFieldUpdateOperationsInput | number
    vat?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    meetupTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumPartyStatusFieldUpdateOperationsInput | $Enums.PartyStatus
    contactInfo?: StringFieldUpdateOperationsInput | string
    serviceCharge?: FloatFieldUpdateOperationsInput | number
    vat?: FloatFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    leaderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyCustomItemCreateInput = {
    id?: string
    name: string
    price: number
    createdAt?: Date | string
    party: PartyCreateNestedOneWithoutCustomItemsInput
    orderItems?: MemberOrderItemCreateNestedManyWithoutCustomItemInput
  }

  export type PartyCustomItemUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    partyId: string
    createdAt?: Date | string
    orderItems?: MemberOrderItemUncheckedCreateNestedManyWithoutCustomItemInput
  }

  export type PartyCustomItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    party?: PartyUpdateOneRequiredWithoutCustomItemsNestedInput
    orderItems?: MemberOrderItemUpdateManyWithoutCustomItemNestedInput
  }

  export type PartyCustomItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    partyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: MemberOrderItemUncheckedUpdateManyWithoutCustomItemNestedInput
  }

  export type PartyCustomItemCreateManyInput = {
    id?: string
    name: string
    price: number
    partyId: string
    createdAt?: Date | string
  }

  export type PartyCustomItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyCustomItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    partyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyMemberCreateInput = {
    id?: string
    joinedAt?: Date | string
    party: PartyCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutJoinedPartiesInput
    orderItems?: MemberOrderItemCreateNestedManyWithoutMemberInput
  }

  export type PartyMemberUncheckedCreateInput = {
    id?: string
    joinedAt?: Date | string
    partyId: string
    userId: string
    orderItems?: MemberOrderItemUncheckedCreateNestedManyWithoutMemberInput
  }

  export type PartyMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    party?: PartyUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutJoinedPartiesNestedInput
    orderItems?: MemberOrderItemUpdateManyWithoutMemberNestedInput
  }

  export type PartyMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    orderItems?: MemberOrderItemUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type PartyMemberCreateManyInput = {
    id?: string
    joinedAt?: Date | string
    partyId: string
    userId: string
  }

  export type PartyMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MemberOrderItemCreateInput = {
    id?: string
    createdAt?: Date | string
    menu?: MenuCreateNestedOneWithoutOrderItemsInput
    customItem?: PartyCustomItemCreateNestedOneWithoutOrderItemsInput
    member: PartyMemberCreateNestedOneWithoutOrderItemsInput
  }

  export type MemberOrderItemUncheckedCreateInput = {
    id?: string
    memberId: string
    menuId?: string | null
    customItemId?: string | null
    createdAt?: Date | string
  }

  export type MemberOrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: MenuUpdateOneWithoutOrderItemsNestedInput
    customItem?: PartyCustomItemUpdateOneWithoutOrderItemsNestedInput
    member?: PartyMemberUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type MemberOrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    menuId?: NullableStringFieldUpdateOperationsInput | string | null
    customItemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberOrderItemCreateManyInput = {
    id?: string
    memberId: string
    menuId?: string | null
    customItemId?: string | null
    createdAt?: Date | string
  }

  export type MemberOrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberOrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    menuId?: NullableStringFieldUpdateOperationsInput | string | null
    customItemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    restaurant: RestaurantCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    userId: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    restaurant?: RestaurantUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    rating: number
    comment?: string | null
    userId: string
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type PartyListRelationFilter = {
    every?: PartyWhereInput
    some?: PartyWhereInput
    none?: PartyWhereInput
  }

  export type PartyMemberListRelationFilter = {
    every?: PartyMemberWhereInput
    some?: PartyMemberWhereInput
    none?: PartyMemberWhereInput
  }

  export type RestaurantListRelationFilter = {
    every?: RestaurantWhereInput
    some?: RestaurantWhereInput
    none?: RestaurantWhereInput
  }

  export type SavedRestaurantListRelationFilter = {
    every?: SavedRestaurantWhereInput
    some?: SavedRestaurantWhereInput
    none?: SavedRestaurantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartyMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SavedRestaurantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    googleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    googleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    role?: SortOrder
    provider?: SortOrder
    googleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RestaurantImageListRelationFilter = {
    every?: RestaurantImageWhereInput
    some?: RestaurantImageWhereInput
    none?: RestaurantImageWhereInput
  }

  export type MenuListRelationFilter = {
    every?: MenuWhereInput
    some?: MenuWhereInput
    none?: MenuWhereInput
  }

  export type OperatingHourListRelationFilter = {
    every?: OperatingHourWhereInput
    some?: OperatingHourWhereInput
    none?: OperatingHourWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RestaurantImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OperatingHourOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RestaurantOrderByRelevanceInput = {
    fields: RestaurantOrderByRelevanceFieldEnum | RestaurantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    category?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RestaurantAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type RestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    category?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    category?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type RestaurantSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[]
    notIn?: $Enums.DayOfWeek[]
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type RestaurantScalarRelationFilter = {
    is?: RestaurantWhereInput
    isNot?: RestaurantWhereInput
  }

  export type OperatingHourOrderByRelevanceInput = {
    fields: OperatingHourOrderByRelevanceFieldEnum | OperatingHourOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OperatingHourCountOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    restaurantId?: SortOrder
  }

  export type OperatingHourMaxOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    restaurantId?: SortOrder
  }

  export type OperatingHourMinOrderByAggregateInput = {
    id?: SortOrder
    day?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isClosed?: SortOrder
    restaurantId?: SortOrder
  }

  export type EnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[]
    notIn?: $Enums.DayOfWeek[]
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RestaurantImageOrderByRelevanceInput = {
    fields: RestaurantImageOrderByRelevanceFieldEnum | RestaurantImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RestaurantImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    isCover?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
  }

  export type RestaurantImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    isCover?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
  }

  export type RestaurantImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    isCover?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SavedRestaurantOrderByRelevanceInput = {
    fields: SavedRestaurantOrderByRelevanceFieldEnum | SavedRestaurantOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SavedRestaurantUserIdRestaurantIdCompoundUniqueInput = {
    userId: string
    restaurantId: string
  }

  export type SavedRestaurantCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    restaurantId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedRestaurantMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    restaurantId?: SortOrder
    savedAt?: SortOrder
  }

  export type SavedRestaurantMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    restaurantId?: SortOrder
    savedAt?: SortOrder
  }

  export type MemberOrderItemListRelationFilter = {
    every?: MemberOrderItemWhereInput
    some?: MemberOrderItemWhereInput
    none?: MemberOrderItemWhereInput
  }

  export type MemberOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MenuOrderByRelevanceInput = {
    fields: MenuOrderByRelevanceFieldEnum | MenuOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MenuCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type MenuMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MenuSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumPartyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PartyStatus | EnumPartyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PartyStatus[]
    notIn?: $Enums.PartyStatus[]
    not?: NestedEnumPartyStatusFilter<$PrismaModel> | $Enums.PartyStatus
  }

  export type PartyCustomItemListRelationFilter = {
    every?: PartyCustomItemWhereInput
    some?: PartyCustomItemWhereInput
    none?: PartyCustomItemWhereInput
  }

  export type PartyCustomItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartyOrderByRelevanceInput = {
    fields: PartyOrderByRelevanceFieldEnum | PartyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PartyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    details?: SortOrder
    meetupTime?: SortOrder
    maxParticipants?: SortOrder
    status?: SortOrder
    contactInfo?: SortOrder
    serviceCharge?: SortOrder
    vat?: SortOrder
    restaurantId?: SortOrder
    leaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartyAvgOrderByAggregateInput = {
    maxParticipants?: SortOrder
    serviceCharge?: SortOrder
    vat?: SortOrder
  }

  export type PartyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    details?: SortOrder
    meetupTime?: SortOrder
    maxParticipants?: SortOrder
    status?: SortOrder
    contactInfo?: SortOrder
    serviceCharge?: SortOrder
    vat?: SortOrder
    restaurantId?: SortOrder
    leaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    details?: SortOrder
    meetupTime?: SortOrder
    maxParticipants?: SortOrder
    status?: SortOrder
    contactInfo?: SortOrder
    serviceCharge?: SortOrder
    vat?: SortOrder
    restaurantId?: SortOrder
    leaderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartySumOrderByAggregateInput = {
    maxParticipants?: SortOrder
    serviceCharge?: SortOrder
    vat?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPartyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartyStatus | EnumPartyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PartyStatus[]
    notIn?: $Enums.PartyStatus[]
    not?: NestedEnumPartyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PartyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPartyStatusFilter<$PrismaModel>
    _max?: NestedEnumPartyStatusFilter<$PrismaModel>
  }

  export type PartyScalarRelationFilter = {
    is?: PartyWhereInput
    isNot?: PartyWhereInput
  }

  export type PartyCustomItemOrderByRelevanceInput = {
    fields: PartyCustomItemOrderByRelevanceFieldEnum | PartyCustomItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PartyCustomItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    partyId?: SortOrder
    createdAt?: SortOrder
  }

  export type PartyCustomItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PartyCustomItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    partyId?: SortOrder
    createdAt?: SortOrder
  }

  export type PartyCustomItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    partyId?: SortOrder
    createdAt?: SortOrder
  }

  export type PartyCustomItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PartyMemberOrderByRelevanceInput = {
    fields: PartyMemberOrderByRelevanceFieldEnum | PartyMemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PartyMemberPartyIdUserIdCompoundUniqueInput = {
    partyId: string
    userId: string
  }

  export type PartyMemberCountOrderByAggregateInput = {
    id?: SortOrder
    joinedAt?: SortOrder
    partyId?: SortOrder
    userId?: SortOrder
  }

  export type PartyMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    joinedAt?: SortOrder
    partyId?: SortOrder
    userId?: SortOrder
  }

  export type PartyMemberMinOrderByAggregateInput = {
    id?: SortOrder
    joinedAt?: SortOrder
    partyId?: SortOrder
    userId?: SortOrder
  }

  export type MenuNullableScalarRelationFilter = {
    is?: MenuWhereInput | null
    isNot?: MenuWhereInput | null
  }

  export type PartyCustomItemNullableScalarRelationFilter = {
    is?: PartyCustomItemWhereInput | null
    isNot?: PartyCustomItemWhereInput | null
  }

  export type PartyMemberScalarRelationFilter = {
    is?: PartyMemberWhereInput
    isNot?: PartyMemberWhereInput
  }

  export type MemberOrderItemOrderByRelevanceInput = {
    fields: MemberOrderItemOrderByRelevanceFieldEnum | MemberOrderItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MemberOrderItemMemberIdMenuIdCompoundUniqueInput = {
    memberId: string
    menuId: string
  }

  export type MemberOrderItemMemberIdCustomItemIdCompoundUniqueInput = {
    memberId: string
    customItemId: string
  }

  export type MemberOrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    menuId?: SortOrder
    customItemId?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberOrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    menuId?: SortOrder
    customItemId?: SortOrder
    createdAt?: SortOrder
  }

  export type MemberOrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    memberId?: SortOrder
    menuId?: SortOrder
    customItemId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewOrderByRelevanceInput = {
    fields: ReviewOrderByRelevanceFieldEnum | ReviewOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    restaurantId?: SortOrder
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
    userId?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    restaurantId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PartyCreateNestedManyWithoutLeaderInput = {
    create?: XOR<PartyCreateWithoutLeaderInput, PartyUncheckedCreateWithoutLeaderInput> | PartyCreateWithoutLeaderInput[] | PartyUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutLeaderInput | PartyCreateOrConnectWithoutLeaderInput[]
    createMany?: PartyCreateManyLeaderInputEnvelope
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
  }

  export type PartyMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<PartyMemberCreateWithoutUserInput, PartyMemberUncheckedCreateWithoutUserInput> | PartyMemberCreateWithoutUserInput[] | PartyMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartyMemberCreateOrConnectWithoutUserInput | PartyMemberCreateOrConnectWithoutUserInput[]
    createMany?: PartyMemberCreateManyUserInputEnvelope
    connect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
  }

  export type RestaurantCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RestaurantCreateWithoutOwnerInput, RestaurantUncheckedCreateWithoutOwnerInput> | RestaurantCreateWithoutOwnerInput[] | RestaurantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutOwnerInput | RestaurantCreateOrConnectWithoutOwnerInput[]
    createMany?: RestaurantCreateManyOwnerInputEnvelope
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
  }

  export type SavedRestaurantCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedRestaurantCreateWithoutUserInput, SavedRestaurantUncheckedCreateWithoutUserInput> | SavedRestaurantCreateWithoutUserInput[] | SavedRestaurantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedRestaurantCreateOrConnectWithoutUserInput | SavedRestaurantCreateOrConnectWithoutUserInput[]
    createMany?: SavedRestaurantCreateManyUserInputEnvelope
    connect?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type PartyUncheckedCreateNestedManyWithoutLeaderInput = {
    create?: XOR<PartyCreateWithoutLeaderInput, PartyUncheckedCreateWithoutLeaderInput> | PartyCreateWithoutLeaderInput[] | PartyUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutLeaderInput | PartyCreateOrConnectWithoutLeaderInput[]
    createMany?: PartyCreateManyLeaderInputEnvelope
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
  }

  export type PartyMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PartyMemberCreateWithoutUserInput, PartyMemberUncheckedCreateWithoutUserInput> | PartyMemberCreateWithoutUserInput[] | PartyMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartyMemberCreateOrConnectWithoutUserInput | PartyMemberCreateOrConnectWithoutUserInput[]
    createMany?: PartyMemberCreateManyUserInputEnvelope
    connect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
  }

  export type RestaurantUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<RestaurantCreateWithoutOwnerInput, RestaurantUncheckedCreateWithoutOwnerInput> | RestaurantCreateWithoutOwnerInput[] | RestaurantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutOwnerInput | RestaurantCreateOrConnectWithoutOwnerInput[]
    createMany?: RestaurantCreateManyOwnerInputEnvelope
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
  }

  export type SavedRestaurantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SavedRestaurantCreateWithoutUserInput, SavedRestaurantUncheckedCreateWithoutUserInput> | SavedRestaurantCreateWithoutUserInput[] | SavedRestaurantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedRestaurantCreateOrConnectWithoutUserInput | SavedRestaurantCreateOrConnectWithoutUserInput[]
    createMany?: SavedRestaurantCreateManyUserInputEnvelope
    connect?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
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

  export type EnumProviderFieldUpdateOperationsInput = {
    set?: $Enums.Provider
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PartyUpdateManyWithoutLeaderNestedInput = {
    create?: XOR<PartyCreateWithoutLeaderInput, PartyUncheckedCreateWithoutLeaderInput> | PartyCreateWithoutLeaderInput[] | PartyUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutLeaderInput | PartyCreateOrConnectWithoutLeaderInput[]
    upsert?: PartyUpsertWithWhereUniqueWithoutLeaderInput | PartyUpsertWithWhereUniqueWithoutLeaderInput[]
    createMany?: PartyCreateManyLeaderInputEnvelope
    set?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    disconnect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    delete?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    update?: PartyUpdateWithWhereUniqueWithoutLeaderInput | PartyUpdateWithWhereUniqueWithoutLeaderInput[]
    updateMany?: PartyUpdateManyWithWhereWithoutLeaderInput | PartyUpdateManyWithWhereWithoutLeaderInput[]
    deleteMany?: PartyScalarWhereInput | PartyScalarWhereInput[]
  }

  export type PartyMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<PartyMemberCreateWithoutUserInput, PartyMemberUncheckedCreateWithoutUserInput> | PartyMemberCreateWithoutUserInput[] | PartyMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartyMemberCreateOrConnectWithoutUserInput | PartyMemberCreateOrConnectWithoutUserInput[]
    upsert?: PartyMemberUpsertWithWhereUniqueWithoutUserInput | PartyMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PartyMemberCreateManyUserInputEnvelope
    set?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    disconnect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    delete?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    connect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    update?: PartyMemberUpdateWithWhereUniqueWithoutUserInput | PartyMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PartyMemberUpdateManyWithWhereWithoutUserInput | PartyMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PartyMemberScalarWhereInput | PartyMemberScalarWhereInput[]
  }

  export type RestaurantUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RestaurantCreateWithoutOwnerInput, RestaurantUncheckedCreateWithoutOwnerInput> | RestaurantCreateWithoutOwnerInput[] | RestaurantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutOwnerInput | RestaurantCreateOrConnectWithoutOwnerInput[]
    upsert?: RestaurantUpsertWithWhereUniqueWithoutOwnerInput | RestaurantUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RestaurantCreateManyOwnerInputEnvelope
    set?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    disconnect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    delete?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    update?: RestaurantUpdateWithWhereUniqueWithoutOwnerInput | RestaurantUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RestaurantUpdateManyWithWhereWithoutOwnerInput | RestaurantUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
  }

  export type SavedRestaurantUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedRestaurantCreateWithoutUserInput, SavedRestaurantUncheckedCreateWithoutUserInput> | SavedRestaurantCreateWithoutUserInput[] | SavedRestaurantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedRestaurantCreateOrConnectWithoutUserInput | SavedRestaurantCreateOrConnectWithoutUserInput[]
    upsert?: SavedRestaurantUpsertWithWhereUniqueWithoutUserInput | SavedRestaurantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedRestaurantCreateManyUserInputEnvelope
    set?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    disconnect?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    delete?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    connect?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    update?: SavedRestaurantUpdateWithWhereUniqueWithoutUserInput | SavedRestaurantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedRestaurantUpdateManyWithWhereWithoutUserInput | SavedRestaurantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedRestaurantScalarWhereInput | SavedRestaurantScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type PartyUncheckedUpdateManyWithoutLeaderNestedInput = {
    create?: XOR<PartyCreateWithoutLeaderInput, PartyUncheckedCreateWithoutLeaderInput> | PartyCreateWithoutLeaderInput[] | PartyUncheckedCreateWithoutLeaderInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutLeaderInput | PartyCreateOrConnectWithoutLeaderInput[]
    upsert?: PartyUpsertWithWhereUniqueWithoutLeaderInput | PartyUpsertWithWhereUniqueWithoutLeaderInput[]
    createMany?: PartyCreateManyLeaderInputEnvelope
    set?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    disconnect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    delete?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    update?: PartyUpdateWithWhereUniqueWithoutLeaderInput | PartyUpdateWithWhereUniqueWithoutLeaderInput[]
    updateMany?: PartyUpdateManyWithWhereWithoutLeaderInput | PartyUpdateManyWithWhereWithoutLeaderInput[]
    deleteMany?: PartyScalarWhereInput | PartyScalarWhereInput[]
  }

  export type PartyMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PartyMemberCreateWithoutUserInput, PartyMemberUncheckedCreateWithoutUserInput> | PartyMemberCreateWithoutUserInput[] | PartyMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartyMemberCreateOrConnectWithoutUserInput | PartyMemberCreateOrConnectWithoutUserInput[]
    upsert?: PartyMemberUpsertWithWhereUniqueWithoutUserInput | PartyMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PartyMemberCreateManyUserInputEnvelope
    set?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    disconnect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    delete?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    connect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    update?: PartyMemberUpdateWithWhereUniqueWithoutUserInput | PartyMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PartyMemberUpdateManyWithWhereWithoutUserInput | PartyMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PartyMemberScalarWhereInput | PartyMemberScalarWhereInput[]
  }

  export type RestaurantUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<RestaurantCreateWithoutOwnerInput, RestaurantUncheckedCreateWithoutOwnerInput> | RestaurantCreateWithoutOwnerInput[] | RestaurantUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: RestaurantCreateOrConnectWithoutOwnerInput | RestaurantCreateOrConnectWithoutOwnerInput[]
    upsert?: RestaurantUpsertWithWhereUniqueWithoutOwnerInput | RestaurantUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: RestaurantCreateManyOwnerInputEnvelope
    set?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    disconnect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    delete?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    connect?: RestaurantWhereUniqueInput | RestaurantWhereUniqueInput[]
    update?: RestaurantUpdateWithWhereUniqueWithoutOwnerInput | RestaurantUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: RestaurantUpdateManyWithWhereWithoutOwnerInput | RestaurantUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
  }

  export type SavedRestaurantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SavedRestaurantCreateWithoutUserInput, SavedRestaurantUncheckedCreateWithoutUserInput> | SavedRestaurantCreateWithoutUserInput[] | SavedRestaurantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SavedRestaurantCreateOrConnectWithoutUserInput | SavedRestaurantCreateOrConnectWithoutUserInput[]
    upsert?: SavedRestaurantUpsertWithWhereUniqueWithoutUserInput | SavedRestaurantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SavedRestaurantCreateManyUserInputEnvelope
    set?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    disconnect?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    delete?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    connect?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    update?: SavedRestaurantUpdateWithWhereUniqueWithoutUserInput | SavedRestaurantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SavedRestaurantUpdateManyWithWhereWithoutUserInput | SavedRestaurantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SavedRestaurantScalarWhereInput | SavedRestaurantScalarWhereInput[]
  }

  export type RestaurantImageCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<RestaurantImageCreateWithoutRestaurantInput, RestaurantImageUncheckedCreateWithoutRestaurantInput> | RestaurantImageCreateWithoutRestaurantInput[] | RestaurantImageUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantImageCreateOrConnectWithoutRestaurantInput | RestaurantImageCreateOrConnectWithoutRestaurantInput[]
    createMany?: RestaurantImageCreateManyRestaurantInputEnvelope
    connect?: RestaurantImageWhereUniqueInput | RestaurantImageWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<ReviewCreateWithoutRestaurantInput, ReviewUncheckedCreateWithoutRestaurantInput> | ReviewCreateWithoutRestaurantInput[] | ReviewUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRestaurantInput | ReviewCreateOrConnectWithoutRestaurantInput[]
    createMany?: ReviewCreateManyRestaurantInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MenuCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<MenuCreateWithoutRestaurantInput, MenuUncheckedCreateWithoutRestaurantInput> | MenuCreateWithoutRestaurantInput[] | MenuUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutRestaurantInput | MenuCreateOrConnectWithoutRestaurantInput[]
    createMany?: MenuCreateManyRestaurantInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type PartyCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<PartyCreateWithoutRestaurantInput, PartyUncheckedCreateWithoutRestaurantInput> | PartyCreateWithoutRestaurantInput[] | PartyUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutRestaurantInput | PartyCreateOrConnectWithoutRestaurantInput[]
    createMany?: PartyCreateManyRestaurantInputEnvelope
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
  }

  export type OperatingHourCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OperatingHourCreateWithoutRestaurantInput, OperatingHourUncheckedCreateWithoutRestaurantInput> | OperatingHourCreateWithoutRestaurantInput[] | OperatingHourUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OperatingHourCreateOrConnectWithoutRestaurantInput | OperatingHourCreateOrConnectWithoutRestaurantInput[]
    createMany?: OperatingHourCreateManyRestaurantInputEnvelope
    connect?: OperatingHourWhereUniqueInput | OperatingHourWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutOwnedRestaurantsInput = {
    create?: XOR<UserCreateWithoutOwnedRestaurantsInput, UserUncheckedCreateWithoutOwnedRestaurantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedRestaurantsInput
    connect?: UserWhereUniqueInput
  }

  export type SavedRestaurantCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<SavedRestaurantCreateWithoutRestaurantInput, SavedRestaurantUncheckedCreateWithoutRestaurantInput> | SavedRestaurantCreateWithoutRestaurantInput[] | SavedRestaurantUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: SavedRestaurantCreateOrConnectWithoutRestaurantInput | SavedRestaurantCreateOrConnectWithoutRestaurantInput[]
    createMany?: SavedRestaurantCreateManyRestaurantInputEnvelope
    connect?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
  }

  export type RestaurantImageUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<RestaurantImageCreateWithoutRestaurantInput, RestaurantImageUncheckedCreateWithoutRestaurantInput> | RestaurantImageCreateWithoutRestaurantInput[] | RestaurantImageUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantImageCreateOrConnectWithoutRestaurantInput | RestaurantImageCreateOrConnectWithoutRestaurantInput[]
    createMany?: RestaurantImageCreateManyRestaurantInputEnvelope
    connect?: RestaurantImageWhereUniqueInput | RestaurantImageWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<ReviewCreateWithoutRestaurantInput, ReviewUncheckedCreateWithoutRestaurantInput> | ReviewCreateWithoutRestaurantInput[] | ReviewUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRestaurantInput | ReviewCreateOrConnectWithoutRestaurantInput[]
    createMany?: ReviewCreateManyRestaurantInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type MenuUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<MenuCreateWithoutRestaurantInput, MenuUncheckedCreateWithoutRestaurantInput> | MenuCreateWithoutRestaurantInput[] | MenuUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutRestaurantInput | MenuCreateOrConnectWithoutRestaurantInput[]
    createMany?: MenuCreateManyRestaurantInputEnvelope
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
  }

  export type PartyUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<PartyCreateWithoutRestaurantInput, PartyUncheckedCreateWithoutRestaurantInput> | PartyCreateWithoutRestaurantInput[] | PartyUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutRestaurantInput | PartyCreateOrConnectWithoutRestaurantInput[]
    createMany?: PartyCreateManyRestaurantInputEnvelope
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
  }

  export type OperatingHourUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<OperatingHourCreateWithoutRestaurantInput, OperatingHourUncheckedCreateWithoutRestaurantInput> | OperatingHourCreateWithoutRestaurantInput[] | OperatingHourUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OperatingHourCreateOrConnectWithoutRestaurantInput | OperatingHourCreateOrConnectWithoutRestaurantInput[]
    createMany?: OperatingHourCreateManyRestaurantInputEnvelope
    connect?: OperatingHourWhereUniqueInput | OperatingHourWhereUniqueInput[]
  }

  export type SavedRestaurantUncheckedCreateNestedManyWithoutRestaurantInput = {
    create?: XOR<SavedRestaurantCreateWithoutRestaurantInput, SavedRestaurantUncheckedCreateWithoutRestaurantInput> | SavedRestaurantCreateWithoutRestaurantInput[] | SavedRestaurantUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: SavedRestaurantCreateOrConnectWithoutRestaurantInput | SavedRestaurantCreateOrConnectWithoutRestaurantInput[]
    createMany?: SavedRestaurantCreateManyRestaurantInputEnvelope
    connect?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RestaurantImageUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<RestaurantImageCreateWithoutRestaurantInput, RestaurantImageUncheckedCreateWithoutRestaurantInput> | RestaurantImageCreateWithoutRestaurantInput[] | RestaurantImageUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantImageCreateOrConnectWithoutRestaurantInput | RestaurantImageCreateOrConnectWithoutRestaurantInput[]
    upsert?: RestaurantImageUpsertWithWhereUniqueWithoutRestaurantInput | RestaurantImageUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: RestaurantImageCreateManyRestaurantInputEnvelope
    set?: RestaurantImageWhereUniqueInput | RestaurantImageWhereUniqueInput[]
    disconnect?: RestaurantImageWhereUniqueInput | RestaurantImageWhereUniqueInput[]
    delete?: RestaurantImageWhereUniqueInput | RestaurantImageWhereUniqueInput[]
    connect?: RestaurantImageWhereUniqueInput | RestaurantImageWhereUniqueInput[]
    update?: RestaurantImageUpdateWithWhereUniqueWithoutRestaurantInput | RestaurantImageUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: RestaurantImageUpdateManyWithWhereWithoutRestaurantInput | RestaurantImageUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: RestaurantImageScalarWhereInput | RestaurantImageScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<ReviewCreateWithoutRestaurantInput, ReviewUncheckedCreateWithoutRestaurantInput> | ReviewCreateWithoutRestaurantInput[] | ReviewUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRestaurantInput | ReviewCreateOrConnectWithoutRestaurantInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRestaurantInput | ReviewUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: ReviewCreateManyRestaurantInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRestaurantInput | ReviewUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRestaurantInput | ReviewUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MenuUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<MenuCreateWithoutRestaurantInput, MenuUncheckedCreateWithoutRestaurantInput> | MenuCreateWithoutRestaurantInput[] | MenuUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutRestaurantInput | MenuCreateOrConnectWithoutRestaurantInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutRestaurantInput | MenuUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: MenuCreateManyRestaurantInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutRestaurantInput | MenuUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutRestaurantInput | MenuUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type PartyUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<PartyCreateWithoutRestaurantInput, PartyUncheckedCreateWithoutRestaurantInput> | PartyCreateWithoutRestaurantInput[] | PartyUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutRestaurantInput | PartyCreateOrConnectWithoutRestaurantInput[]
    upsert?: PartyUpsertWithWhereUniqueWithoutRestaurantInput | PartyUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: PartyCreateManyRestaurantInputEnvelope
    set?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    disconnect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    delete?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    update?: PartyUpdateWithWhereUniqueWithoutRestaurantInput | PartyUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: PartyUpdateManyWithWhereWithoutRestaurantInput | PartyUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: PartyScalarWhereInput | PartyScalarWhereInput[]
  }

  export type OperatingHourUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OperatingHourCreateWithoutRestaurantInput, OperatingHourUncheckedCreateWithoutRestaurantInput> | OperatingHourCreateWithoutRestaurantInput[] | OperatingHourUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OperatingHourCreateOrConnectWithoutRestaurantInput | OperatingHourCreateOrConnectWithoutRestaurantInput[]
    upsert?: OperatingHourUpsertWithWhereUniqueWithoutRestaurantInput | OperatingHourUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OperatingHourCreateManyRestaurantInputEnvelope
    set?: OperatingHourWhereUniqueInput | OperatingHourWhereUniqueInput[]
    disconnect?: OperatingHourWhereUniqueInput | OperatingHourWhereUniqueInput[]
    delete?: OperatingHourWhereUniqueInput | OperatingHourWhereUniqueInput[]
    connect?: OperatingHourWhereUniqueInput | OperatingHourWhereUniqueInput[]
    update?: OperatingHourUpdateWithWhereUniqueWithoutRestaurantInput | OperatingHourUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OperatingHourUpdateManyWithWhereWithoutRestaurantInput | OperatingHourUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OperatingHourScalarWhereInput | OperatingHourScalarWhereInput[]
  }

  export type UserUpdateOneWithoutOwnedRestaurantsNestedInput = {
    create?: XOR<UserCreateWithoutOwnedRestaurantsInput, UserUncheckedCreateWithoutOwnedRestaurantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedRestaurantsInput
    upsert?: UserUpsertWithoutOwnedRestaurantsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedRestaurantsInput, UserUpdateWithoutOwnedRestaurantsInput>, UserUncheckedUpdateWithoutOwnedRestaurantsInput>
  }

  export type SavedRestaurantUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<SavedRestaurantCreateWithoutRestaurantInput, SavedRestaurantUncheckedCreateWithoutRestaurantInput> | SavedRestaurantCreateWithoutRestaurantInput[] | SavedRestaurantUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: SavedRestaurantCreateOrConnectWithoutRestaurantInput | SavedRestaurantCreateOrConnectWithoutRestaurantInput[]
    upsert?: SavedRestaurantUpsertWithWhereUniqueWithoutRestaurantInput | SavedRestaurantUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: SavedRestaurantCreateManyRestaurantInputEnvelope
    set?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    disconnect?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    delete?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    connect?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    update?: SavedRestaurantUpdateWithWhereUniqueWithoutRestaurantInput | SavedRestaurantUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: SavedRestaurantUpdateManyWithWhereWithoutRestaurantInput | SavedRestaurantUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: SavedRestaurantScalarWhereInput | SavedRestaurantScalarWhereInput[]
  }

  export type RestaurantImageUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<RestaurantImageCreateWithoutRestaurantInput, RestaurantImageUncheckedCreateWithoutRestaurantInput> | RestaurantImageCreateWithoutRestaurantInput[] | RestaurantImageUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: RestaurantImageCreateOrConnectWithoutRestaurantInput | RestaurantImageCreateOrConnectWithoutRestaurantInput[]
    upsert?: RestaurantImageUpsertWithWhereUniqueWithoutRestaurantInput | RestaurantImageUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: RestaurantImageCreateManyRestaurantInputEnvelope
    set?: RestaurantImageWhereUniqueInput | RestaurantImageWhereUniqueInput[]
    disconnect?: RestaurantImageWhereUniqueInput | RestaurantImageWhereUniqueInput[]
    delete?: RestaurantImageWhereUniqueInput | RestaurantImageWhereUniqueInput[]
    connect?: RestaurantImageWhereUniqueInput | RestaurantImageWhereUniqueInput[]
    update?: RestaurantImageUpdateWithWhereUniqueWithoutRestaurantInput | RestaurantImageUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: RestaurantImageUpdateManyWithWhereWithoutRestaurantInput | RestaurantImageUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: RestaurantImageScalarWhereInput | RestaurantImageScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<ReviewCreateWithoutRestaurantInput, ReviewUncheckedCreateWithoutRestaurantInput> | ReviewCreateWithoutRestaurantInput[] | ReviewUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRestaurantInput | ReviewCreateOrConnectWithoutRestaurantInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRestaurantInput | ReviewUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: ReviewCreateManyRestaurantInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRestaurantInput | ReviewUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRestaurantInput | ReviewUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type MenuUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<MenuCreateWithoutRestaurantInput, MenuUncheckedCreateWithoutRestaurantInput> | MenuCreateWithoutRestaurantInput[] | MenuUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: MenuCreateOrConnectWithoutRestaurantInput | MenuCreateOrConnectWithoutRestaurantInput[]
    upsert?: MenuUpsertWithWhereUniqueWithoutRestaurantInput | MenuUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: MenuCreateManyRestaurantInputEnvelope
    set?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    disconnect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    delete?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    connect?: MenuWhereUniqueInput | MenuWhereUniqueInput[]
    update?: MenuUpdateWithWhereUniqueWithoutRestaurantInput | MenuUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: MenuUpdateManyWithWhereWithoutRestaurantInput | MenuUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: MenuScalarWhereInput | MenuScalarWhereInput[]
  }

  export type PartyUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<PartyCreateWithoutRestaurantInput, PartyUncheckedCreateWithoutRestaurantInput> | PartyCreateWithoutRestaurantInput[] | PartyUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: PartyCreateOrConnectWithoutRestaurantInput | PartyCreateOrConnectWithoutRestaurantInput[]
    upsert?: PartyUpsertWithWhereUniqueWithoutRestaurantInput | PartyUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: PartyCreateManyRestaurantInputEnvelope
    set?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    disconnect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    delete?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    connect?: PartyWhereUniqueInput | PartyWhereUniqueInput[]
    update?: PartyUpdateWithWhereUniqueWithoutRestaurantInput | PartyUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: PartyUpdateManyWithWhereWithoutRestaurantInput | PartyUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: PartyScalarWhereInput | PartyScalarWhereInput[]
  }

  export type OperatingHourUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<OperatingHourCreateWithoutRestaurantInput, OperatingHourUncheckedCreateWithoutRestaurantInput> | OperatingHourCreateWithoutRestaurantInput[] | OperatingHourUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: OperatingHourCreateOrConnectWithoutRestaurantInput | OperatingHourCreateOrConnectWithoutRestaurantInput[]
    upsert?: OperatingHourUpsertWithWhereUniqueWithoutRestaurantInput | OperatingHourUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: OperatingHourCreateManyRestaurantInputEnvelope
    set?: OperatingHourWhereUniqueInput | OperatingHourWhereUniqueInput[]
    disconnect?: OperatingHourWhereUniqueInput | OperatingHourWhereUniqueInput[]
    delete?: OperatingHourWhereUniqueInput | OperatingHourWhereUniqueInput[]
    connect?: OperatingHourWhereUniqueInput | OperatingHourWhereUniqueInput[]
    update?: OperatingHourUpdateWithWhereUniqueWithoutRestaurantInput | OperatingHourUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: OperatingHourUpdateManyWithWhereWithoutRestaurantInput | OperatingHourUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: OperatingHourScalarWhereInput | OperatingHourScalarWhereInput[]
  }

  export type SavedRestaurantUncheckedUpdateManyWithoutRestaurantNestedInput = {
    create?: XOR<SavedRestaurantCreateWithoutRestaurantInput, SavedRestaurantUncheckedCreateWithoutRestaurantInput> | SavedRestaurantCreateWithoutRestaurantInput[] | SavedRestaurantUncheckedCreateWithoutRestaurantInput[]
    connectOrCreate?: SavedRestaurantCreateOrConnectWithoutRestaurantInput | SavedRestaurantCreateOrConnectWithoutRestaurantInput[]
    upsert?: SavedRestaurantUpsertWithWhereUniqueWithoutRestaurantInput | SavedRestaurantUpsertWithWhereUniqueWithoutRestaurantInput[]
    createMany?: SavedRestaurantCreateManyRestaurantInputEnvelope
    set?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    disconnect?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    delete?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    connect?: SavedRestaurantWhereUniqueInput | SavedRestaurantWhereUniqueInput[]
    update?: SavedRestaurantUpdateWithWhereUniqueWithoutRestaurantInput | SavedRestaurantUpdateWithWhereUniqueWithoutRestaurantInput[]
    updateMany?: SavedRestaurantUpdateManyWithWhereWithoutRestaurantInput | SavedRestaurantUpdateManyWithWhereWithoutRestaurantInput[]
    deleteMany?: SavedRestaurantScalarWhereInput | SavedRestaurantScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutOperatingHoursInput = {
    create?: XOR<RestaurantCreateWithoutOperatingHoursInput, RestaurantUncheckedCreateWithoutOperatingHoursInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOperatingHoursInput
    connect?: RestaurantWhereUniqueInput
  }

  export type EnumDayOfWeekFieldUpdateOperationsInput = {
    set?: $Enums.DayOfWeek
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RestaurantUpdateOneRequiredWithoutOperatingHoursNestedInput = {
    create?: XOR<RestaurantCreateWithoutOperatingHoursInput, RestaurantUncheckedCreateWithoutOperatingHoursInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutOperatingHoursInput
    upsert?: RestaurantUpsertWithoutOperatingHoursInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutOperatingHoursInput, RestaurantUpdateWithoutOperatingHoursInput>, RestaurantUncheckedUpdateWithoutOperatingHoursInput>
  }

  export type RestaurantCreateNestedOneWithoutImagesInput = {
    create?: XOR<RestaurantCreateWithoutImagesInput, RestaurantUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutImagesInput
    connect?: RestaurantWhereUniqueInput
  }

  export type RestaurantUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<RestaurantCreateWithoutImagesInput, RestaurantUncheckedCreateWithoutImagesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutImagesInput
    upsert?: RestaurantUpsertWithoutImagesInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutImagesInput, RestaurantUpdateWithoutImagesInput>, RestaurantUncheckedUpdateWithoutImagesInput>
  }

  export type UserCreateNestedOneWithoutSavedRestaurantsInput = {
    create?: XOR<UserCreateWithoutSavedRestaurantsInput, UserUncheckedCreateWithoutSavedRestaurantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedRestaurantsInput
    connect?: UserWhereUniqueInput
  }

  export type RestaurantCreateNestedOneWithoutSavedByInput = {
    create?: XOR<RestaurantCreateWithoutSavedByInput, RestaurantUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutSavedByInput
    connect?: RestaurantWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSavedRestaurantsNestedInput = {
    create?: XOR<UserCreateWithoutSavedRestaurantsInput, UserUncheckedCreateWithoutSavedRestaurantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSavedRestaurantsInput
    upsert?: UserUpsertWithoutSavedRestaurantsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSavedRestaurantsInput, UserUpdateWithoutSavedRestaurantsInput>, UserUncheckedUpdateWithoutSavedRestaurantsInput>
  }

  export type RestaurantUpdateOneRequiredWithoutSavedByNestedInput = {
    create?: XOR<RestaurantCreateWithoutSavedByInput, RestaurantUncheckedCreateWithoutSavedByInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutSavedByInput
    upsert?: RestaurantUpsertWithoutSavedByInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutSavedByInput, RestaurantUpdateWithoutSavedByInput>, RestaurantUncheckedUpdateWithoutSavedByInput>
  }

  export type RestaurantCreateNestedOneWithoutMenusInput = {
    create?: XOR<RestaurantCreateWithoutMenusInput, RestaurantUncheckedCreateWithoutMenusInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenusInput
    connect?: RestaurantWhereUniqueInput
  }

  export type MemberOrderItemCreateNestedManyWithoutMenuInput = {
    create?: XOR<MemberOrderItemCreateWithoutMenuInput, MemberOrderItemUncheckedCreateWithoutMenuInput> | MemberOrderItemCreateWithoutMenuInput[] | MemberOrderItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MemberOrderItemCreateOrConnectWithoutMenuInput | MemberOrderItemCreateOrConnectWithoutMenuInput[]
    createMany?: MemberOrderItemCreateManyMenuInputEnvelope
    connect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
  }

  export type MemberOrderItemUncheckedCreateNestedManyWithoutMenuInput = {
    create?: XOR<MemberOrderItemCreateWithoutMenuInput, MemberOrderItemUncheckedCreateWithoutMenuInput> | MemberOrderItemCreateWithoutMenuInput[] | MemberOrderItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MemberOrderItemCreateOrConnectWithoutMenuInput | MemberOrderItemCreateOrConnectWithoutMenuInput[]
    createMany?: MemberOrderItemCreateManyMenuInputEnvelope
    connect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
  }

  export type RestaurantUpdateOneRequiredWithoutMenusNestedInput = {
    create?: XOR<RestaurantCreateWithoutMenusInput, RestaurantUncheckedCreateWithoutMenusInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutMenusInput
    upsert?: RestaurantUpsertWithoutMenusInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutMenusInput, RestaurantUpdateWithoutMenusInput>, RestaurantUncheckedUpdateWithoutMenusInput>
  }

  export type MemberOrderItemUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MemberOrderItemCreateWithoutMenuInput, MemberOrderItemUncheckedCreateWithoutMenuInput> | MemberOrderItemCreateWithoutMenuInput[] | MemberOrderItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MemberOrderItemCreateOrConnectWithoutMenuInput | MemberOrderItemCreateOrConnectWithoutMenuInput[]
    upsert?: MemberOrderItemUpsertWithWhereUniqueWithoutMenuInput | MemberOrderItemUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MemberOrderItemCreateManyMenuInputEnvelope
    set?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    disconnect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    delete?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    connect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    update?: MemberOrderItemUpdateWithWhereUniqueWithoutMenuInput | MemberOrderItemUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MemberOrderItemUpdateManyWithWhereWithoutMenuInput | MemberOrderItemUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MemberOrderItemScalarWhereInput | MemberOrderItemScalarWhereInput[]
  }

  export type MemberOrderItemUncheckedUpdateManyWithoutMenuNestedInput = {
    create?: XOR<MemberOrderItemCreateWithoutMenuInput, MemberOrderItemUncheckedCreateWithoutMenuInput> | MemberOrderItemCreateWithoutMenuInput[] | MemberOrderItemUncheckedCreateWithoutMenuInput[]
    connectOrCreate?: MemberOrderItemCreateOrConnectWithoutMenuInput | MemberOrderItemCreateOrConnectWithoutMenuInput[]
    upsert?: MemberOrderItemUpsertWithWhereUniqueWithoutMenuInput | MemberOrderItemUpsertWithWhereUniqueWithoutMenuInput[]
    createMany?: MemberOrderItemCreateManyMenuInputEnvelope
    set?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    disconnect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    delete?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    connect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    update?: MemberOrderItemUpdateWithWhereUniqueWithoutMenuInput | MemberOrderItemUpdateWithWhereUniqueWithoutMenuInput[]
    updateMany?: MemberOrderItemUpdateManyWithWhereWithoutMenuInput | MemberOrderItemUpdateManyWithWhereWithoutMenuInput[]
    deleteMany?: MemberOrderItemScalarWhereInput | MemberOrderItemScalarWhereInput[]
  }

  export type RestaurantCreateNestedOneWithoutPartiesInput = {
    create?: XOR<RestaurantCreateWithoutPartiesInput, RestaurantUncheckedCreateWithoutPartiesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutPartiesInput
    connect?: RestaurantWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPartiesLedInput = {
    create?: XOR<UserCreateWithoutPartiesLedInput, UserUncheckedCreateWithoutPartiesLedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartiesLedInput
    connect?: UserWhereUniqueInput
  }

  export type PartyMemberCreateNestedManyWithoutPartyInput = {
    create?: XOR<PartyMemberCreateWithoutPartyInput, PartyMemberUncheckedCreateWithoutPartyInput> | PartyMemberCreateWithoutPartyInput[] | PartyMemberUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: PartyMemberCreateOrConnectWithoutPartyInput | PartyMemberCreateOrConnectWithoutPartyInput[]
    createMany?: PartyMemberCreateManyPartyInputEnvelope
    connect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
  }

  export type PartyCustomItemCreateNestedManyWithoutPartyInput = {
    create?: XOR<PartyCustomItemCreateWithoutPartyInput, PartyCustomItemUncheckedCreateWithoutPartyInput> | PartyCustomItemCreateWithoutPartyInput[] | PartyCustomItemUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: PartyCustomItemCreateOrConnectWithoutPartyInput | PartyCustomItemCreateOrConnectWithoutPartyInput[]
    createMany?: PartyCustomItemCreateManyPartyInputEnvelope
    connect?: PartyCustomItemWhereUniqueInput | PartyCustomItemWhereUniqueInput[]
  }

  export type PartyMemberUncheckedCreateNestedManyWithoutPartyInput = {
    create?: XOR<PartyMemberCreateWithoutPartyInput, PartyMemberUncheckedCreateWithoutPartyInput> | PartyMemberCreateWithoutPartyInput[] | PartyMemberUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: PartyMemberCreateOrConnectWithoutPartyInput | PartyMemberCreateOrConnectWithoutPartyInput[]
    createMany?: PartyMemberCreateManyPartyInputEnvelope
    connect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
  }

  export type PartyCustomItemUncheckedCreateNestedManyWithoutPartyInput = {
    create?: XOR<PartyCustomItemCreateWithoutPartyInput, PartyCustomItemUncheckedCreateWithoutPartyInput> | PartyCustomItemCreateWithoutPartyInput[] | PartyCustomItemUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: PartyCustomItemCreateOrConnectWithoutPartyInput | PartyCustomItemCreateOrConnectWithoutPartyInput[]
    createMany?: PartyCustomItemCreateManyPartyInputEnvelope
    connect?: PartyCustomItemWhereUniqueInput | PartyCustomItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPartyStatusFieldUpdateOperationsInput = {
    set?: $Enums.PartyStatus
  }

  export type RestaurantUpdateOneRequiredWithoutPartiesNestedInput = {
    create?: XOR<RestaurantCreateWithoutPartiesInput, RestaurantUncheckedCreateWithoutPartiesInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutPartiesInput
    upsert?: RestaurantUpsertWithoutPartiesInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutPartiesInput, RestaurantUpdateWithoutPartiesInput>, RestaurantUncheckedUpdateWithoutPartiesInput>
  }

  export type UserUpdateOneRequiredWithoutPartiesLedNestedInput = {
    create?: XOR<UserCreateWithoutPartiesLedInput, UserUncheckedCreateWithoutPartiesLedInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartiesLedInput
    upsert?: UserUpsertWithoutPartiesLedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPartiesLedInput, UserUpdateWithoutPartiesLedInput>, UserUncheckedUpdateWithoutPartiesLedInput>
  }

  export type PartyMemberUpdateManyWithoutPartyNestedInput = {
    create?: XOR<PartyMemberCreateWithoutPartyInput, PartyMemberUncheckedCreateWithoutPartyInput> | PartyMemberCreateWithoutPartyInput[] | PartyMemberUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: PartyMemberCreateOrConnectWithoutPartyInput | PartyMemberCreateOrConnectWithoutPartyInput[]
    upsert?: PartyMemberUpsertWithWhereUniqueWithoutPartyInput | PartyMemberUpsertWithWhereUniqueWithoutPartyInput[]
    createMany?: PartyMemberCreateManyPartyInputEnvelope
    set?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    disconnect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    delete?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    connect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    update?: PartyMemberUpdateWithWhereUniqueWithoutPartyInput | PartyMemberUpdateWithWhereUniqueWithoutPartyInput[]
    updateMany?: PartyMemberUpdateManyWithWhereWithoutPartyInput | PartyMemberUpdateManyWithWhereWithoutPartyInput[]
    deleteMany?: PartyMemberScalarWhereInput | PartyMemberScalarWhereInput[]
  }

  export type PartyCustomItemUpdateManyWithoutPartyNestedInput = {
    create?: XOR<PartyCustomItemCreateWithoutPartyInput, PartyCustomItemUncheckedCreateWithoutPartyInput> | PartyCustomItemCreateWithoutPartyInput[] | PartyCustomItemUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: PartyCustomItemCreateOrConnectWithoutPartyInput | PartyCustomItemCreateOrConnectWithoutPartyInput[]
    upsert?: PartyCustomItemUpsertWithWhereUniqueWithoutPartyInput | PartyCustomItemUpsertWithWhereUniqueWithoutPartyInput[]
    createMany?: PartyCustomItemCreateManyPartyInputEnvelope
    set?: PartyCustomItemWhereUniqueInput | PartyCustomItemWhereUniqueInput[]
    disconnect?: PartyCustomItemWhereUniqueInput | PartyCustomItemWhereUniqueInput[]
    delete?: PartyCustomItemWhereUniqueInput | PartyCustomItemWhereUniqueInput[]
    connect?: PartyCustomItemWhereUniqueInput | PartyCustomItemWhereUniqueInput[]
    update?: PartyCustomItemUpdateWithWhereUniqueWithoutPartyInput | PartyCustomItemUpdateWithWhereUniqueWithoutPartyInput[]
    updateMany?: PartyCustomItemUpdateManyWithWhereWithoutPartyInput | PartyCustomItemUpdateManyWithWhereWithoutPartyInput[]
    deleteMany?: PartyCustomItemScalarWhereInput | PartyCustomItemScalarWhereInput[]
  }

  export type PartyMemberUncheckedUpdateManyWithoutPartyNestedInput = {
    create?: XOR<PartyMemberCreateWithoutPartyInput, PartyMemberUncheckedCreateWithoutPartyInput> | PartyMemberCreateWithoutPartyInput[] | PartyMemberUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: PartyMemberCreateOrConnectWithoutPartyInput | PartyMemberCreateOrConnectWithoutPartyInput[]
    upsert?: PartyMemberUpsertWithWhereUniqueWithoutPartyInput | PartyMemberUpsertWithWhereUniqueWithoutPartyInput[]
    createMany?: PartyMemberCreateManyPartyInputEnvelope
    set?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    disconnect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    delete?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    connect?: PartyMemberWhereUniqueInput | PartyMemberWhereUniqueInput[]
    update?: PartyMemberUpdateWithWhereUniqueWithoutPartyInput | PartyMemberUpdateWithWhereUniqueWithoutPartyInput[]
    updateMany?: PartyMemberUpdateManyWithWhereWithoutPartyInput | PartyMemberUpdateManyWithWhereWithoutPartyInput[]
    deleteMany?: PartyMemberScalarWhereInput | PartyMemberScalarWhereInput[]
  }

  export type PartyCustomItemUncheckedUpdateManyWithoutPartyNestedInput = {
    create?: XOR<PartyCustomItemCreateWithoutPartyInput, PartyCustomItemUncheckedCreateWithoutPartyInput> | PartyCustomItemCreateWithoutPartyInput[] | PartyCustomItemUncheckedCreateWithoutPartyInput[]
    connectOrCreate?: PartyCustomItemCreateOrConnectWithoutPartyInput | PartyCustomItemCreateOrConnectWithoutPartyInput[]
    upsert?: PartyCustomItemUpsertWithWhereUniqueWithoutPartyInput | PartyCustomItemUpsertWithWhereUniqueWithoutPartyInput[]
    createMany?: PartyCustomItemCreateManyPartyInputEnvelope
    set?: PartyCustomItemWhereUniqueInput | PartyCustomItemWhereUniqueInput[]
    disconnect?: PartyCustomItemWhereUniqueInput | PartyCustomItemWhereUniqueInput[]
    delete?: PartyCustomItemWhereUniqueInput | PartyCustomItemWhereUniqueInput[]
    connect?: PartyCustomItemWhereUniqueInput | PartyCustomItemWhereUniqueInput[]
    update?: PartyCustomItemUpdateWithWhereUniqueWithoutPartyInput | PartyCustomItemUpdateWithWhereUniqueWithoutPartyInput[]
    updateMany?: PartyCustomItemUpdateManyWithWhereWithoutPartyInput | PartyCustomItemUpdateManyWithWhereWithoutPartyInput[]
    deleteMany?: PartyCustomItemScalarWhereInput | PartyCustomItemScalarWhereInput[]
  }

  export type PartyCreateNestedOneWithoutCustomItemsInput = {
    create?: XOR<PartyCreateWithoutCustomItemsInput, PartyUncheckedCreateWithoutCustomItemsInput>
    connectOrCreate?: PartyCreateOrConnectWithoutCustomItemsInput
    connect?: PartyWhereUniqueInput
  }

  export type MemberOrderItemCreateNestedManyWithoutCustomItemInput = {
    create?: XOR<MemberOrderItemCreateWithoutCustomItemInput, MemberOrderItemUncheckedCreateWithoutCustomItemInput> | MemberOrderItemCreateWithoutCustomItemInput[] | MemberOrderItemUncheckedCreateWithoutCustomItemInput[]
    connectOrCreate?: MemberOrderItemCreateOrConnectWithoutCustomItemInput | MemberOrderItemCreateOrConnectWithoutCustomItemInput[]
    createMany?: MemberOrderItemCreateManyCustomItemInputEnvelope
    connect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
  }

  export type MemberOrderItemUncheckedCreateNestedManyWithoutCustomItemInput = {
    create?: XOR<MemberOrderItemCreateWithoutCustomItemInput, MemberOrderItemUncheckedCreateWithoutCustomItemInput> | MemberOrderItemCreateWithoutCustomItemInput[] | MemberOrderItemUncheckedCreateWithoutCustomItemInput[]
    connectOrCreate?: MemberOrderItemCreateOrConnectWithoutCustomItemInput | MemberOrderItemCreateOrConnectWithoutCustomItemInput[]
    createMany?: MemberOrderItemCreateManyCustomItemInputEnvelope
    connect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
  }

  export type PartyUpdateOneRequiredWithoutCustomItemsNestedInput = {
    create?: XOR<PartyCreateWithoutCustomItemsInput, PartyUncheckedCreateWithoutCustomItemsInput>
    connectOrCreate?: PartyCreateOrConnectWithoutCustomItemsInput
    upsert?: PartyUpsertWithoutCustomItemsInput
    connect?: PartyWhereUniqueInput
    update?: XOR<XOR<PartyUpdateToOneWithWhereWithoutCustomItemsInput, PartyUpdateWithoutCustomItemsInput>, PartyUncheckedUpdateWithoutCustomItemsInput>
  }

  export type MemberOrderItemUpdateManyWithoutCustomItemNestedInput = {
    create?: XOR<MemberOrderItemCreateWithoutCustomItemInput, MemberOrderItemUncheckedCreateWithoutCustomItemInput> | MemberOrderItemCreateWithoutCustomItemInput[] | MemberOrderItemUncheckedCreateWithoutCustomItemInput[]
    connectOrCreate?: MemberOrderItemCreateOrConnectWithoutCustomItemInput | MemberOrderItemCreateOrConnectWithoutCustomItemInput[]
    upsert?: MemberOrderItemUpsertWithWhereUniqueWithoutCustomItemInput | MemberOrderItemUpsertWithWhereUniqueWithoutCustomItemInput[]
    createMany?: MemberOrderItemCreateManyCustomItemInputEnvelope
    set?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    disconnect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    delete?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    connect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    update?: MemberOrderItemUpdateWithWhereUniqueWithoutCustomItemInput | MemberOrderItemUpdateWithWhereUniqueWithoutCustomItemInput[]
    updateMany?: MemberOrderItemUpdateManyWithWhereWithoutCustomItemInput | MemberOrderItemUpdateManyWithWhereWithoutCustomItemInput[]
    deleteMany?: MemberOrderItemScalarWhereInput | MemberOrderItemScalarWhereInput[]
  }

  export type MemberOrderItemUncheckedUpdateManyWithoutCustomItemNestedInput = {
    create?: XOR<MemberOrderItemCreateWithoutCustomItemInput, MemberOrderItemUncheckedCreateWithoutCustomItemInput> | MemberOrderItemCreateWithoutCustomItemInput[] | MemberOrderItemUncheckedCreateWithoutCustomItemInput[]
    connectOrCreate?: MemberOrderItemCreateOrConnectWithoutCustomItemInput | MemberOrderItemCreateOrConnectWithoutCustomItemInput[]
    upsert?: MemberOrderItemUpsertWithWhereUniqueWithoutCustomItemInput | MemberOrderItemUpsertWithWhereUniqueWithoutCustomItemInput[]
    createMany?: MemberOrderItemCreateManyCustomItemInputEnvelope
    set?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    disconnect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    delete?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    connect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    update?: MemberOrderItemUpdateWithWhereUniqueWithoutCustomItemInput | MemberOrderItemUpdateWithWhereUniqueWithoutCustomItemInput[]
    updateMany?: MemberOrderItemUpdateManyWithWhereWithoutCustomItemInput | MemberOrderItemUpdateManyWithWhereWithoutCustomItemInput[]
    deleteMany?: MemberOrderItemScalarWhereInput | MemberOrderItemScalarWhereInput[]
  }

  export type PartyCreateNestedOneWithoutMembersInput = {
    create?: XOR<PartyCreateWithoutMembersInput, PartyUncheckedCreateWithoutMembersInput>
    connectOrCreate?: PartyCreateOrConnectWithoutMembersInput
    connect?: PartyWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutJoinedPartiesInput = {
    create?: XOR<UserCreateWithoutJoinedPartiesInput, UserUncheckedCreateWithoutJoinedPartiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinedPartiesInput
    connect?: UserWhereUniqueInput
  }

  export type MemberOrderItemCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberOrderItemCreateWithoutMemberInput, MemberOrderItemUncheckedCreateWithoutMemberInput> | MemberOrderItemCreateWithoutMemberInput[] | MemberOrderItemUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberOrderItemCreateOrConnectWithoutMemberInput | MemberOrderItemCreateOrConnectWithoutMemberInput[]
    createMany?: MemberOrderItemCreateManyMemberInputEnvelope
    connect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
  }

  export type MemberOrderItemUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MemberOrderItemCreateWithoutMemberInput, MemberOrderItemUncheckedCreateWithoutMemberInput> | MemberOrderItemCreateWithoutMemberInput[] | MemberOrderItemUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberOrderItemCreateOrConnectWithoutMemberInput | MemberOrderItemCreateOrConnectWithoutMemberInput[]
    createMany?: MemberOrderItemCreateManyMemberInputEnvelope
    connect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
  }

  export type PartyUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<PartyCreateWithoutMembersInput, PartyUncheckedCreateWithoutMembersInput>
    connectOrCreate?: PartyCreateOrConnectWithoutMembersInput
    upsert?: PartyUpsertWithoutMembersInput
    connect?: PartyWhereUniqueInput
    update?: XOR<XOR<PartyUpdateToOneWithWhereWithoutMembersInput, PartyUpdateWithoutMembersInput>, PartyUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutJoinedPartiesNestedInput = {
    create?: XOR<UserCreateWithoutJoinedPartiesInput, UserUncheckedCreateWithoutJoinedPartiesInput>
    connectOrCreate?: UserCreateOrConnectWithoutJoinedPartiesInput
    upsert?: UserUpsertWithoutJoinedPartiesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJoinedPartiesInput, UserUpdateWithoutJoinedPartiesInput>, UserUncheckedUpdateWithoutJoinedPartiesInput>
  }

  export type MemberOrderItemUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberOrderItemCreateWithoutMemberInput, MemberOrderItemUncheckedCreateWithoutMemberInput> | MemberOrderItemCreateWithoutMemberInput[] | MemberOrderItemUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberOrderItemCreateOrConnectWithoutMemberInput | MemberOrderItemCreateOrConnectWithoutMemberInput[]
    upsert?: MemberOrderItemUpsertWithWhereUniqueWithoutMemberInput | MemberOrderItemUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberOrderItemCreateManyMemberInputEnvelope
    set?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    disconnect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    delete?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    connect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    update?: MemberOrderItemUpdateWithWhereUniqueWithoutMemberInput | MemberOrderItemUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberOrderItemUpdateManyWithWhereWithoutMemberInput | MemberOrderItemUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberOrderItemScalarWhereInput | MemberOrderItemScalarWhereInput[]
  }

  export type MemberOrderItemUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MemberOrderItemCreateWithoutMemberInput, MemberOrderItemUncheckedCreateWithoutMemberInput> | MemberOrderItemCreateWithoutMemberInput[] | MemberOrderItemUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MemberOrderItemCreateOrConnectWithoutMemberInput | MemberOrderItemCreateOrConnectWithoutMemberInput[]
    upsert?: MemberOrderItemUpsertWithWhereUniqueWithoutMemberInput | MemberOrderItemUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MemberOrderItemCreateManyMemberInputEnvelope
    set?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    disconnect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    delete?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    connect?: MemberOrderItemWhereUniqueInput | MemberOrderItemWhereUniqueInput[]
    update?: MemberOrderItemUpdateWithWhereUniqueWithoutMemberInput | MemberOrderItemUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MemberOrderItemUpdateManyWithWhereWithoutMemberInput | MemberOrderItemUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MemberOrderItemScalarWhereInput | MemberOrderItemScalarWhereInput[]
  }

  export type MenuCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<MenuCreateWithoutOrderItemsInput, MenuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuCreateOrConnectWithoutOrderItemsInput
    connect?: MenuWhereUniqueInput
  }

  export type PartyCustomItemCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<PartyCustomItemCreateWithoutOrderItemsInput, PartyCustomItemUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: PartyCustomItemCreateOrConnectWithoutOrderItemsInput
    connect?: PartyCustomItemWhereUniqueInput
  }

  export type PartyMemberCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<PartyMemberCreateWithoutOrderItemsInput, PartyMemberUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: PartyMemberCreateOrConnectWithoutOrderItemsInput
    connect?: PartyMemberWhereUniqueInput
  }

  export type MenuUpdateOneWithoutOrderItemsNestedInput = {
    create?: XOR<MenuCreateWithoutOrderItemsInput, MenuUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MenuCreateOrConnectWithoutOrderItemsInput
    upsert?: MenuUpsertWithoutOrderItemsInput
    disconnect?: MenuWhereInput | boolean
    delete?: MenuWhereInput | boolean
    connect?: MenuWhereUniqueInput
    update?: XOR<XOR<MenuUpdateToOneWithWhereWithoutOrderItemsInput, MenuUpdateWithoutOrderItemsInput>, MenuUncheckedUpdateWithoutOrderItemsInput>
  }

  export type PartyCustomItemUpdateOneWithoutOrderItemsNestedInput = {
    create?: XOR<PartyCustomItemCreateWithoutOrderItemsInput, PartyCustomItemUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: PartyCustomItemCreateOrConnectWithoutOrderItemsInput
    upsert?: PartyCustomItemUpsertWithoutOrderItemsInput
    disconnect?: PartyCustomItemWhereInput | boolean
    delete?: PartyCustomItemWhereInput | boolean
    connect?: PartyCustomItemWhereUniqueInput
    update?: XOR<XOR<PartyCustomItemUpdateToOneWithWhereWithoutOrderItemsInput, PartyCustomItemUpdateWithoutOrderItemsInput>, PartyCustomItemUncheckedUpdateWithoutOrderItemsInput>
  }

  export type PartyMemberUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<PartyMemberCreateWithoutOrderItemsInput, PartyMemberUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: PartyMemberCreateOrConnectWithoutOrderItemsInput
    upsert?: PartyMemberUpsertWithoutOrderItemsInput
    connect?: PartyMemberWhereUniqueInput
    update?: XOR<XOR<PartyMemberUpdateToOneWithWhereWithoutOrderItemsInput, PartyMemberUpdateWithoutOrderItemsInput>, PartyMemberUncheckedUpdateWithoutOrderItemsInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type RestaurantCreateNestedOneWithoutReviewsInput = {
    create?: XOR<RestaurantCreateWithoutReviewsInput, RestaurantUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutReviewsInput
    connect?: RestaurantWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type RestaurantUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<RestaurantCreateWithoutReviewsInput, RestaurantUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: RestaurantCreateOrConnectWithoutReviewsInput
    upsert?: RestaurantUpsertWithoutReviewsInput
    connect?: RestaurantWhereUniqueInput
    update?: XOR<XOR<RestaurantUpdateToOneWithWhereWithoutReviewsInput, RestaurantUpdateWithoutReviewsInput>, RestaurantUncheckedUpdateWithoutReviewsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumProviderFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderFilter<$PrismaModel> | $Enums.Provider
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumProviderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Provider | EnumProviderFieldRefInput<$PrismaModel>
    in?: $Enums.Provider[]
    notIn?: $Enums.Provider[]
    not?: NestedEnumProviderWithAggregatesFilter<$PrismaModel> | $Enums.Provider
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProviderFilter<$PrismaModel>
    _max?: NestedEnumProviderFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDayOfWeekFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[]
    notIn?: $Enums.DayOfWeek[]
    not?: NestedEnumDayOfWeekFilter<$PrismaModel> | $Enums.DayOfWeek
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DayOfWeek | EnumDayOfWeekFieldRefInput<$PrismaModel>
    in?: $Enums.DayOfWeek[]
    notIn?: $Enums.DayOfWeek[]
    not?: NestedEnumDayOfWeekWithAggregatesFilter<$PrismaModel> | $Enums.DayOfWeek
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDayOfWeekFilter<$PrismaModel>
    _max?: NestedEnumDayOfWeekFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPartyStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PartyStatus | EnumPartyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PartyStatus[]
    notIn?: $Enums.PartyStatus[]
    not?: NestedEnumPartyStatusFilter<$PrismaModel> | $Enums.PartyStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumPartyStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PartyStatus | EnumPartyStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PartyStatus[]
    notIn?: $Enums.PartyStatus[]
    not?: NestedEnumPartyStatusWithAggregatesFilter<$PrismaModel> | $Enums.PartyStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPartyStatusFilter<$PrismaModel>
    _max?: NestedEnumPartyStatusFilter<$PrismaModel>
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    rating: number
    comment?: string | null
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PartyCreateWithoutLeaderInput = {
    id?: string
    name?: string | null
    details?: string | null
    meetupTime: Date | string
    maxParticipants: number
    status?: $Enums.PartyStatus
    contactInfo: string
    serviceCharge?: number
    vat?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutPartiesInput
    members?: PartyMemberCreateNestedManyWithoutPartyInput
    customItems?: PartyCustomItemCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateWithoutLeaderInput = {
    id?: string
    name?: string | null
    details?: string | null
    meetupTime: Date | string
    maxParticipants: number
    status?: $Enums.PartyStatus
    contactInfo: string
    serviceCharge?: number
    vat?: number
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: PartyMemberUncheckedCreateNestedManyWithoutPartyInput
    customItems?: PartyCustomItemUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyCreateOrConnectWithoutLeaderInput = {
    where: PartyWhereUniqueInput
    create: XOR<PartyCreateWithoutLeaderInput, PartyUncheckedCreateWithoutLeaderInput>
  }

  export type PartyCreateManyLeaderInputEnvelope = {
    data: PartyCreateManyLeaderInput | PartyCreateManyLeaderInput[]
    skipDuplicates?: boolean
  }

  export type PartyMemberCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    party: PartyCreateNestedOneWithoutMembersInput
    orderItems?: MemberOrderItemCreateNestedManyWithoutMemberInput
  }

  export type PartyMemberUncheckedCreateWithoutUserInput = {
    id?: string
    joinedAt?: Date | string
    partyId: string
    orderItems?: MemberOrderItemUncheckedCreateNestedManyWithoutMemberInput
  }

  export type PartyMemberCreateOrConnectWithoutUserInput = {
    where: PartyMemberWhereUniqueInput
    create: XOR<PartyMemberCreateWithoutUserInput, PartyMemberUncheckedCreateWithoutUserInput>
  }

  export type PartyMemberCreateManyUserInputEnvelope = {
    data: PartyMemberCreateManyUserInput | PartyMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RestaurantImageCreateNestedManyWithoutRestaurantInput
    reviews?: ReviewCreateNestedManyWithoutRestaurantInput
    menus?: MenuCreateNestedManyWithoutRestaurantInput
    parties?: PartyCreateNestedManyWithoutRestaurantInput
    operatingHours?: OperatingHourCreateNestedManyWithoutRestaurantInput
    savedBy?: SavedRestaurantCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RestaurantImageUncheckedCreateNestedManyWithoutRestaurantInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutRestaurantInput
    menus?: MenuUncheckedCreateNestedManyWithoutRestaurantInput
    parties?: PartyUncheckedCreateNestedManyWithoutRestaurantInput
    operatingHours?: OperatingHourUncheckedCreateNestedManyWithoutRestaurantInput
    savedBy?: SavedRestaurantUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutOwnerInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutOwnerInput, RestaurantUncheckedCreateWithoutOwnerInput>
  }

  export type RestaurantCreateManyOwnerInputEnvelope = {
    data: RestaurantCreateManyOwnerInput | RestaurantCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type SavedRestaurantCreateWithoutUserInput = {
    id?: string
    savedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutSavedByInput
  }

  export type SavedRestaurantUncheckedCreateWithoutUserInput = {
    id?: string
    restaurantId: string
    savedAt?: Date | string
  }

  export type SavedRestaurantCreateOrConnectWithoutUserInput = {
    where: SavedRestaurantWhereUniqueInput
    create: XOR<SavedRestaurantCreateWithoutUserInput, SavedRestaurantUncheckedCreateWithoutUserInput>
  }

  export type SavedRestaurantCreateManyUserInputEnvelope = {
    data: SavedRestaurantCreateManyUserInput | SavedRestaurantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    userId?: StringFilter<"Review"> | string
    restaurantId?: StringFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type PartyUpsertWithWhereUniqueWithoutLeaderInput = {
    where: PartyWhereUniqueInput
    update: XOR<PartyUpdateWithoutLeaderInput, PartyUncheckedUpdateWithoutLeaderInput>
    create: XOR<PartyCreateWithoutLeaderInput, PartyUncheckedCreateWithoutLeaderInput>
  }

  export type PartyUpdateWithWhereUniqueWithoutLeaderInput = {
    where: PartyWhereUniqueInput
    data: XOR<PartyUpdateWithoutLeaderInput, PartyUncheckedUpdateWithoutLeaderInput>
  }

  export type PartyUpdateManyWithWhereWithoutLeaderInput = {
    where: PartyScalarWhereInput
    data: XOR<PartyUpdateManyMutationInput, PartyUncheckedUpdateManyWithoutLeaderInput>
  }

  export type PartyScalarWhereInput = {
    AND?: PartyScalarWhereInput | PartyScalarWhereInput[]
    OR?: PartyScalarWhereInput[]
    NOT?: PartyScalarWhereInput | PartyScalarWhereInput[]
    id?: StringFilter<"Party"> | string
    name?: StringNullableFilter<"Party"> | string | null
    details?: StringNullableFilter<"Party"> | string | null
    meetupTime?: DateTimeFilter<"Party"> | Date | string
    maxParticipants?: IntFilter<"Party"> | number
    status?: EnumPartyStatusFilter<"Party"> | $Enums.PartyStatus
    contactInfo?: StringFilter<"Party"> | string
    serviceCharge?: FloatFilter<"Party"> | number
    vat?: FloatFilter<"Party"> | number
    restaurantId?: StringFilter<"Party"> | string
    leaderId?: StringFilter<"Party"> | string
    createdAt?: DateTimeFilter<"Party"> | Date | string
    updatedAt?: DateTimeFilter<"Party"> | Date | string
  }

  export type PartyMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: PartyMemberWhereUniqueInput
    update: XOR<PartyMemberUpdateWithoutUserInput, PartyMemberUncheckedUpdateWithoutUserInput>
    create: XOR<PartyMemberCreateWithoutUserInput, PartyMemberUncheckedCreateWithoutUserInput>
  }

  export type PartyMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: PartyMemberWhereUniqueInput
    data: XOR<PartyMemberUpdateWithoutUserInput, PartyMemberUncheckedUpdateWithoutUserInput>
  }

  export type PartyMemberUpdateManyWithWhereWithoutUserInput = {
    where: PartyMemberScalarWhereInput
    data: XOR<PartyMemberUpdateManyMutationInput, PartyMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type PartyMemberScalarWhereInput = {
    AND?: PartyMemberScalarWhereInput | PartyMemberScalarWhereInput[]
    OR?: PartyMemberScalarWhereInput[]
    NOT?: PartyMemberScalarWhereInput | PartyMemberScalarWhereInput[]
    id?: StringFilter<"PartyMember"> | string
    joinedAt?: DateTimeFilter<"PartyMember"> | Date | string
    partyId?: StringFilter<"PartyMember"> | string
    userId?: StringFilter<"PartyMember"> | string
  }

  export type RestaurantUpsertWithWhereUniqueWithoutOwnerInput = {
    where: RestaurantWhereUniqueInput
    update: XOR<RestaurantUpdateWithoutOwnerInput, RestaurantUncheckedUpdateWithoutOwnerInput>
    create: XOR<RestaurantCreateWithoutOwnerInput, RestaurantUncheckedCreateWithoutOwnerInput>
  }

  export type RestaurantUpdateWithWhereUniqueWithoutOwnerInput = {
    where: RestaurantWhereUniqueInput
    data: XOR<RestaurantUpdateWithoutOwnerInput, RestaurantUncheckedUpdateWithoutOwnerInput>
  }

  export type RestaurantUpdateManyWithWhereWithoutOwnerInput = {
    where: RestaurantScalarWhereInput
    data: XOR<RestaurantUpdateManyMutationInput, RestaurantUncheckedUpdateManyWithoutOwnerInput>
  }

  export type RestaurantScalarWhereInput = {
    AND?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
    OR?: RestaurantScalarWhereInput[]
    NOT?: RestaurantScalarWhereInput | RestaurantScalarWhereInput[]
    id?: StringFilter<"Restaurant"> | string
    name?: StringFilter<"Restaurant"> | string
    description?: StringNullableFilter<"Restaurant"> | string | null
    lat?: FloatFilter<"Restaurant"> | number
    lng?: FloatFilter<"Restaurant"> | number
    category?: StringNullableFilter<"Restaurant"> | string | null
    ownerId?: StringNullableFilter<"Restaurant"> | string | null
    createdAt?: DateTimeFilter<"Restaurant"> | Date | string
    updatedAt?: DateTimeFilter<"Restaurant"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Restaurant"> | Date | string | null
  }

  export type SavedRestaurantUpsertWithWhereUniqueWithoutUserInput = {
    where: SavedRestaurantWhereUniqueInput
    update: XOR<SavedRestaurantUpdateWithoutUserInput, SavedRestaurantUncheckedUpdateWithoutUserInput>
    create: XOR<SavedRestaurantCreateWithoutUserInput, SavedRestaurantUncheckedCreateWithoutUserInput>
  }

  export type SavedRestaurantUpdateWithWhereUniqueWithoutUserInput = {
    where: SavedRestaurantWhereUniqueInput
    data: XOR<SavedRestaurantUpdateWithoutUserInput, SavedRestaurantUncheckedUpdateWithoutUserInput>
  }

  export type SavedRestaurantUpdateManyWithWhereWithoutUserInput = {
    where: SavedRestaurantScalarWhereInput
    data: XOR<SavedRestaurantUpdateManyMutationInput, SavedRestaurantUncheckedUpdateManyWithoutUserInput>
  }

  export type SavedRestaurantScalarWhereInput = {
    AND?: SavedRestaurantScalarWhereInput | SavedRestaurantScalarWhereInput[]
    OR?: SavedRestaurantScalarWhereInput[]
    NOT?: SavedRestaurantScalarWhereInput | SavedRestaurantScalarWhereInput[]
    id?: StringFilter<"SavedRestaurant"> | string
    userId?: StringFilter<"SavedRestaurant"> | string
    restaurantId?: StringFilter<"SavedRestaurant"> | string
    savedAt?: DateTimeFilter<"SavedRestaurant"> | Date | string
  }

  export type RestaurantImageCreateWithoutRestaurantInput = {
    id?: string
    url: string
    isCover?: boolean
    createdAt?: Date | string
  }

  export type RestaurantImageUncheckedCreateWithoutRestaurantInput = {
    id?: string
    url: string
    isCover?: boolean
    createdAt?: Date | string
  }

  export type RestaurantImageCreateOrConnectWithoutRestaurantInput = {
    where: RestaurantImageWhereUniqueInput
    create: XOR<RestaurantImageCreateWithoutRestaurantInput, RestaurantImageUncheckedCreateWithoutRestaurantInput>
  }

  export type RestaurantImageCreateManyRestaurantInputEnvelope = {
    data: RestaurantImageCreateManyRestaurantInput | RestaurantImageCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutRestaurantInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutRestaurantInput = {
    id?: string
    rating: number
    comment?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutRestaurantInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRestaurantInput, ReviewUncheckedCreateWithoutRestaurantInput>
  }

  export type ReviewCreateManyRestaurantInputEnvelope = {
    data: ReviewCreateManyRestaurantInput | ReviewCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type MenuCreateWithoutRestaurantInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    category?: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: MemberOrderItemCreateNestedManyWithoutMenuInput
  }

  export type MenuUncheckedCreateWithoutRestaurantInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    category?: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: MemberOrderItemUncheckedCreateNestedManyWithoutMenuInput
  }

  export type MenuCreateOrConnectWithoutRestaurantInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutRestaurantInput, MenuUncheckedCreateWithoutRestaurantInput>
  }

  export type MenuCreateManyRestaurantInputEnvelope = {
    data: MenuCreateManyRestaurantInput | MenuCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type PartyCreateWithoutRestaurantInput = {
    id?: string
    name?: string | null
    details?: string | null
    meetupTime: Date | string
    maxParticipants: number
    status?: $Enums.PartyStatus
    contactInfo: string
    serviceCharge?: number
    vat?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    leader: UserCreateNestedOneWithoutPartiesLedInput
    members?: PartyMemberCreateNestedManyWithoutPartyInput
    customItems?: PartyCustomItemCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateWithoutRestaurantInput = {
    id?: string
    name?: string | null
    details?: string | null
    meetupTime: Date | string
    maxParticipants: number
    status?: $Enums.PartyStatus
    contactInfo: string
    serviceCharge?: number
    vat?: number
    leaderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: PartyMemberUncheckedCreateNestedManyWithoutPartyInput
    customItems?: PartyCustomItemUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyCreateOrConnectWithoutRestaurantInput = {
    where: PartyWhereUniqueInput
    create: XOR<PartyCreateWithoutRestaurantInput, PartyUncheckedCreateWithoutRestaurantInput>
  }

  export type PartyCreateManyRestaurantInputEnvelope = {
    data: PartyCreateManyRestaurantInput | PartyCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type OperatingHourCreateWithoutRestaurantInput = {
    id?: string
    day: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
  }

  export type OperatingHourUncheckedCreateWithoutRestaurantInput = {
    id?: string
    day: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
  }

  export type OperatingHourCreateOrConnectWithoutRestaurantInput = {
    where: OperatingHourWhereUniqueInput
    create: XOR<OperatingHourCreateWithoutRestaurantInput, OperatingHourUncheckedCreateWithoutRestaurantInput>
  }

  export type OperatingHourCreateManyRestaurantInputEnvelope = {
    data: OperatingHourCreateManyRestaurantInput | OperatingHourCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutOwnedRestaurantsInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    avatarUrl?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    partiesLed?: PartyCreateNestedManyWithoutLeaderInput
    joinedParties?: PartyMemberCreateNestedManyWithoutUserInput
    savedRestaurants?: SavedRestaurantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOwnedRestaurantsInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    avatarUrl?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    partiesLed?: PartyUncheckedCreateNestedManyWithoutLeaderInput
    joinedParties?: PartyMemberUncheckedCreateNestedManyWithoutUserInput
    savedRestaurants?: SavedRestaurantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOwnedRestaurantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedRestaurantsInput, UserUncheckedCreateWithoutOwnedRestaurantsInput>
  }

  export type SavedRestaurantCreateWithoutRestaurantInput = {
    id?: string
    savedAt?: Date | string
    user: UserCreateNestedOneWithoutSavedRestaurantsInput
  }

  export type SavedRestaurantUncheckedCreateWithoutRestaurantInput = {
    id?: string
    userId: string
    savedAt?: Date | string
  }

  export type SavedRestaurantCreateOrConnectWithoutRestaurantInput = {
    where: SavedRestaurantWhereUniqueInput
    create: XOR<SavedRestaurantCreateWithoutRestaurantInput, SavedRestaurantUncheckedCreateWithoutRestaurantInput>
  }

  export type SavedRestaurantCreateManyRestaurantInputEnvelope = {
    data: SavedRestaurantCreateManyRestaurantInput | SavedRestaurantCreateManyRestaurantInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantImageUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: RestaurantImageWhereUniqueInput
    update: XOR<RestaurantImageUpdateWithoutRestaurantInput, RestaurantImageUncheckedUpdateWithoutRestaurantInput>
    create: XOR<RestaurantImageCreateWithoutRestaurantInput, RestaurantImageUncheckedCreateWithoutRestaurantInput>
  }

  export type RestaurantImageUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: RestaurantImageWhereUniqueInput
    data: XOR<RestaurantImageUpdateWithoutRestaurantInput, RestaurantImageUncheckedUpdateWithoutRestaurantInput>
  }

  export type RestaurantImageUpdateManyWithWhereWithoutRestaurantInput = {
    where: RestaurantImageScalarWhereInput
    data: XOR<RestaurantImageUpdateManyMutationInput, RestaurantImageUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type RestaurantImageScalarWhereInput = {
    AND?: RestaurantImageScalarWhereInput | RestaurantImageScalarWhereInput[]
    OR?: RestaurantImageScalarWhereInput[]
    NOT?: RestaurantImageScalarWhereInput | RestaurantImageScalarWhereInput[]
    id?: StringFilter<"RestaurantImage"> | string
    url?: StringFilter<"RestaurantImage"> | string
    isCover?: BoolFilter<"RestaurantImage"> | boolean
    restaurantId?: StringFilter<"RestaurantImage"> | string
    createdAt?: DateTimeFilter<"RestaurantImage"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutRestaurantInput, ReviewUncheckedUpdateWithoutRestaurantInput>
    create: XOR<ReviewCreateWithoutRestaurantInput, ReviewUncheckedCreateWithoutRestaurantInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutRestaurantInput, ReviewUncheckedUpdateWithoutRestaurantInput>
  }

  export type ReviewUpdateManyWithWhereWithoutRestaurantInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type MenuUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: MenuWhereUniqueInput
    update: XOR<MenuUpdateWithoutRestaurantInput, MenuUncheckedUpdateWithoutRestaurantInput>
    create: XOR<MenuCreateWithoutRestaurantInput, MenuUncheckedCreateWithoutRestaurantInput>
  }

  export type MenuUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: MenuWhereUniqueInput
    data: XOR<MenuUpdateWithoutRestaurantInput, MenuUncheckedUpdateWithoutRestaurantInput>
  }

  export type MenuUpdateManyWithWhereWithoutRestaurantInput = {
    where: MenuScalarWhereInput
    data: XOR<MenuUpdateManyMutationInput, MenuUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type MenuScalarWhereInput = {
    AND?: MenuScalarWhereInput | MenuScalarWhereInput[]
    OR?: MenuScalarWhereInput[]
    NOT?: MenuScalarWhereInput | MenuScalarWhereInput[]
    id?: StringFilter<"Menu"> | string
    name?: StringFilter<"Menu"> | string
    description?: StringNullableFilter<"Menu"> | string | null
    price?: FloatFilter<"Menu"> | number
    category?: StringFilter<"Menu"> | string
    imageUrl?: StringNullableFilter<"Menu"> | string | null
    restaurantId?: StringFilter<"Menu"> | string
    createdAt?: DateTimeFilter<"Menu"> | Date | string
    updatedAt?: DateTimeFilter<"Menu"> | Date | string
  }

  export type PartyUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: PartyWhereUniqueInput
    update: XOR<PartyUpdateWithoutRestaurantInput, PartyUncheckedUpdateWithoutRestaurantInput>
    create: XOR<PartyCreateWithoutRestaurantInput, PartyUncheckedCreateWithoutRestaurantInput>
  }

  export type PartyUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: PartyWhereUniqueInput
    data: XOR<PartyUpdateWithoutRestaurantInput, PartyUncheckedUpdateWithoutRestaurantInput>
  }

  export type PartyUpdateManyWithWhereWithoutRestaurantInput = {
    where: PartyScalarWhereInput
    data: XOR<PartyUpdateManyMutationInput, PartyUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type OperatingHourUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: OperatingHourWhereUniqueInput
    update: XOR<OperatingHourUpdateWithoutRestaurantInput, OperatingHourUncheckedUpdateWithoutRestaurantInput>
    create: XOR<OperatingHourCreateWithoutRestaurantInput, OperatingHourUncheckedCreateWithoutRestaurantInput>
  }

  export type OperatingHourUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: OperatingHourWhereUniqueInput
    data: XOR<OperatingHourUpdateWithoutRestaurantInput, OperatingHourUncheckedUpdateWithoutRestaurantInput>
  }

  export type OperatingHourUpdateManyWithWhereWithoutRestaurantInput = {
    where: OperatingHourScalarWhereInput
    data: XOR<OperatingHourUpdateManyMutationInput, OperatingHourUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type OperatingHourScalarWhereInput = {
    AND?: OperatingHourScalarWhereInput | OperatingHourScalarWhereInput[]
    OR?: OperatingHourScalarWhereInput[]
    NOT?: OperatingHourScalarWhereInput | OperatingHourScalarWhereInput[]
    id?: StringFilter<"OperatingHour"> | string
    day?: EnumDayOfWeekFilter<"OperatingHour"> | $Enums.DayOfWeek
    openTime?: StringFilter<"OperatingHour"> | string
    closeTime?: StringFilter<"OperatingHour"> | string
    isClosed?: BoolFilter<"OperatingHour"> | boolean
    restaurantId?: StringFilter<"OperatingHour"> | string
  }

  export type UserUpsertWithoutOwnedRestaurantsInput = {
    update: XOR<UserUpdateWithoutOwnedRestaurantsInput, UserUncheckedUpdateWithoutOwnedRestaurantsInput>
    create: XOR<UserCreateWithoutOwnedRestaurantsInput, UserUncheckedCreateWithoutOwnedRestaurantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedRestaurantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedRestaurantsInput, UserUncheckedUpdateWithoutOwnedRestaurantsInput>
  }

  export type UserUpdateWithoutOwnedRestaurantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    partiesLed?: PartyUpdateManyWithoutLeaderNestedInput
    joinedParties?: PartyMemberUpdateManyWithoutUserNestedInput
    savedRestaurants?: SavedRestaurantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedRestaurantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    partiesLed?: PartyUncheckedUpdateManyWithoutLeaderNestedInput
    joinedParties?: PartyMemberUncheckedUpdateManyWithoutUserNestedInput
    savedRestaurants?: SavedRestaurantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SavedRestaurantUpsertWithWhereUniqueWithoutRestaurantInput = {
    where: SavedRestaurantWhereUniqueInput
    update: XOR<SavedRestaurantUpdateWithoutRestaurantInput, SavedRestaurantUncheckedUpdateWithoutRestaurantInput>
    create: XOR<SavedRestaurantCreateWithoutRestaurantInput, SavedRestaurantUncheckedCreateWithoutRestaurantInput>
  }

  export type SavedRestaurantUpdateWithWhereUniqueWithoutRestaurantInput = {
    where: SavedRestaurantWhereUniqueInput
    data: XOR<SavedRestaurantUpdateWithoutRestaurantInput, SavedRestaurantUncheckedUpdateWithoutRestaurantInput>
  }

  export type SavedRestaurantUpdateManyWithWhereWithoutRestaurantInput = {
    where: SavedRestaurantScalarWhereInput
    data: XOR<SavedRestaurantUpdateManyMutationInput, SavedRestaurantUncheckedUpdateManyWithoutRestaurantInput>
  }

  export type RestaurantCreateWithoutOperatingHoursInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RestaurantImageCreateNestedManyWithoutRestaurantInput
    reviews?: ReviewCreateNestedManyWithoutRestaurantInput
    menus?: MenuCreateNestedManyWithoutRestaurantInput
    parties?: PartyCreateNestedManyWithoutRestaurantInput
    owner?: UserCreateNestedOneWithoutOwnedRestaurantsInput
    savedBy?: SavedRestaurantCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutOperatingHoursInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RestaurantImageUncheckedCreateNestedManyWithoutRestaurantInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutRestaurantInput
    menus?: MenuUncheckedCreateNestedManyWithoutRestaurantInput
    parties?: PartyUncheckedCreateNestedManyWithoutRestaurantInput
    savedBy?: SavedRestaurantUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutOperatingHoursInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutOperatingHoursInput, RestaurantUncheckedCreateWithoutOperatingHoursInput>
  }

  export type RestaurantUpsertWithoutOperatingHoursInput = {
    update: XOR<RestaurantUpdateWithoutOperatingHoursInput, RestaurantUncheckedUpdateWithoutOperatingHoursInput>
    create: XOR<RestaurantCreateWithoutOperatingHoursInput, RestaurantUncheckedCreateWithoutOperatingHoursInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutOperatingHoursInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutOperatingHoursInput, RestaurantUncheckedUpdateWithoutOperatingHoursInput>
  }

  export type RestaurantUpdateWithoutOperatingHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RestaurantImageUpdateManyWithoutRestaurantNestedInput
    reviews?: ReviewUpdateManyWithoutRestaurantNestedInput
    menus?: MenuUpdateManyWithoutRestaurantNestedInput
    parties?: PartyUpdateManyWithoutRestaurantNestedInput
    owner?: UserUpdateOneWithoutOwnedRestaurantsNestedInput
    savedBy?: SavedRestaurantUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutOperatingHoursInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RestaurantImageUncheckedUpdateManyWithoutRestaurantNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutRestaurantNestedInput
    menus?: MenuUncheckedUpdateManyWithoutRestaurantNestedInput
    parties?: PartyUncheckedUpdateManyWithoutRestaurantNestedInput
    savedBy?: SavedRestaurantUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateWithoutImagesInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviews?: ReviewCreateNestedManyWithoutRestaurantInput
    menus?: MenuCreateNestedManyWithoutRestaurantInput
    parties?: PartyCreateNestedManyWithoutRestaurantInput
    operatingHours?: OperatingHourCreateNestedManyWithoutRestaurantInput
    owner?: UserCreateNestedOneWithoutOwnedRestaurantsInput
    savedBy?: SavedRestaurantCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutImagesInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutRestaurantInput
    menus?: MenuUncheckedCreateNestedManyWithoutRestaurantInput
    parties?: PartyUncheckedCreateNestedManyWithoutRestaurantInput
    operatingHours?: OperatingHourUncheckedCreateNestedManyWithoutRestaurantInput
    savedBy?: SavedRestaurantUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutImagesInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutImagesInput, RestaurantUncheckedCreateWithoutImagesInput>
  }

  export type RestaurantUpsertWithoutImagesInput = {
    update: XOR<RestaurantUpdateWithoutImagesInput, RestaurantUncheckedUpdateWithoutImagesInput>
    create: XOR<RestaurantCreateWithoutImagesInput, RestaurantUncheckedCreateWithoutImagesInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutImagesInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutImagesInput, RestaurantUncheckedUpdateWithoutImagesInput>
  }

  export type RestaurantUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUpdateManyWithoutRestaurantNestedInput
    menus?: MenuUpdateManyWithoutRestaurantNestedInput
    parties?: PartyUpdateManyWithoutRestaurantNestedInput
    operatingHours?: OperatingHourUpdateManyWithoutRestaurantNestedInput
    owner?: UserUpdateOneWithoutOwnedRestaurantsNestedInput
    savedBy?: SavedRestaurantUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutImagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutRestaurantNestedInput
    menus?: MenuUncheckedUpdateManyWithoutRestaurantNestedInput
    parties?: PartyUncheckedUpdateManyWithoutRestaurantNestedInput
    operatingHours?: OperatingHourUncheckedUpdateManyWithoutRestaurantNestedInput
    savedBy?: SavedRestaurantUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type UserCreateWithoutSavedRestaurantsInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    avatarUrl?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    partiesLed?: PartyCreateNestedManyWithoutLeaderInput
    joinedParties?: PartyMemberCreateNestedManyWithoutUserInput
    ownedRestaurants?: RestaurantCreateNestedManyWithoutOwnerInput
  }

  export type UserUncheckedCreateWithoutSavedRestaurantsInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    avatarUrl?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    partiesLed?: PartyUncheckedCreateNestedManyWithoutLeaderInput
    joinedParties?: PartyMemberUncheckedCreateNestedManyWithoutUserInput
    ownedRestaurants?: RestaurantUncheckedCreateNestedManyWithoutOwnerInput
  }

  export type UserCreateOrConnectWithoutSavedRestaurantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSavedRestaurantsInput, UserUncheckedCreateWithoutSavedRestaurantsInput>
  }

  export type RestaurantCreateWithoutSavedByInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RestaurantImageCreateNestedManyWithoutRestaurantInput
    reviews?: ReviewCreateNestedManyWithoutRestaurantInput
    menus?: MenuCreateNestedManyWithoutRestaurantInput
    parties?: PartyCreateNestedManyWithoutRestaurantInput
    operatingHours?: OperatingHourCreateNestedManyWithoutRestaurantInput
    owner?: UserCreateNestedOneWithoutOwnedRestaurantsInput
  }

  export type RestaurantUncheckedCreateWithoutSavedByInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RestaurantImageUncheckedCreateNestedManyWithoutRestaurantInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutRestaurantInput
    menus?: MenuUncheckedCreateNestedManyWithoutRestaurantInput
    parties?: PartyUncheckedCreateNestedManyWithoutRestaurantInput
    operatingHours?: OperatingHourUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutSavedByInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutSavedByInput, RestaurantUncheckedCreateWithoutSavedByInput>
  }

  export type UserUpsertWithoutSavedRestaurantsInput = {
    update: XOR<UserUpdateWithoutSavedRestaurantsInput, UserUncheckedUpdateWithoutSavedRestaurantsInput>
    create: XOR<UserCreateWithoutSavedRestaurantsInput, UserUncheckedCreateWithoutSavedRestaurantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSavedRestaurantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSavedRestaurantsInput, UserUncheckedUpdateWithoutSavedRestaurantsInput>
  }

  export type UserUpdateWithoutSavedRestaurantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    partiesLed?: PartyUpdateManyWithoutLeaderNestedInput
    joinedParties?: PartyMemberUpdateManyWithoutUserNestedInput
    ownedRestaurants?: RestaurantUpdateManyWithoutOwnerNestedInput
  }

  export type UserUncheckedUpdateWithoutSavedRestaurantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    partiesLed?: PartyUncheckedUpdateManyWithoutLeaderNestedInput
    joinedParties?: PartyMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedRestaurants?: RestaurantUncheckedUpdateManyWithoutOwnerNestedInput
  }

  export type RestaurantUpsertWithoutSavedByInput = {
    update: XOR<RestaurantUpdateWithoutSavedByInput, RestaurantUncheckedUpdateWithoutSavedByInput>
    create: XOR<RestaurantCreateWithoutSavedByInput, RestaurantUncheckedCreateWithoutSavedByInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutSavedByInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutSavedByInput, RestaurantUncheckedUpdateWithoutSavedByInput>
  }

  export type RestaurantUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RestaurantImageUpdateManyWithoutRestaurantNestedInput
    reviews?: ReviewUpdateManyWithoutRestaurantNestedInput
    menus?: MenuUpdateManyWithoutRestaurantNestedInput
    parties?: PartyUpdateManyWithoutRestaurantNestedInput
    operatingHours?: OperatingHourUpdateManyWithoutRestaurantNestedInput
    owner?: UserUpdateOneWithoutOwnedRestaurantsNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutSavedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RestaurantImageUncheckedUpdateManyWithoutRestaurantNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutRestaurantNestedInput
    menus?: MenuUncheckedUpdateManyWithoutRestaurantNestedInput
    parties?: PartyUncheckedUpdateManyWithoutRestaurantNestedInput
    operatingHours?: OperatingHourUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantCreateWithoutMenusInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RestaurantImageCreateNestedManyWithoutRestaurantInput
    reviews?: ReviewCreateNestedManyWithoutRestaurantInput
    parties?: PartyCreateNestedManyWithoutRestaurantInput
    operatingHours?: OperatingHourCreateNestedManyWithoutRestaurantInput
    owner?: UserCreateNestedOneWithoutOwnedRestaurantsInput
    savedBy?: SavedRestaurantCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutMenusInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RestaurantImageUncheckedCreateNestedManyWithoutRestaurantInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutRestaurantInput
    parties?: PartyUncheckedCreateNestedManyWithoutRestaurantInput
    operatingHours?: OperatingHourUncheckedCreateNestedManyWithoutRestaurantInput
    savedBy?: SavedRestaurantUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutMenusInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutMenusInput, RestaurantUncheckedCreateWithoutMenusInput>
  }

  export type MemberOrderItemCreateWithoutMenuInput = {
    id?: string
    createdAt?: Date | string
    customItem?: PartyCustomItemCreateNestedOneWithoutOrderItemsInput
    member: PartyMemberCreateNestedOneWithoutOrderItemsInput
  }

  export type MemberOrderItemUncheckedCreateWithoutMenuInput = {
    id?: string
    memberId: string
    customItemId?: string | null
    createdAt?: Date | string
  }

  export type MemberOrderItemCreateOrConnectWithoutMenuInput = {
    where: MemberOrderItemWhereUniqueInput
    create: XOR<MemberOrderItemCreateWithoutMenuInput, MemberOrderItemUncheckedCreateWithoutMenuInput>
  }

  export type MemberOrderItemCreateManyMenuInputEnvelope = {
    data: MemberOrderItemCreateManyMenuInput | MemberOrderItemCreateManyMenuInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutMenusInput = {
    update: XOR<RestaurantUpdateWithoutMenusInput, RestaurantUncheckedUpdateWithoutMenusInput>
    create: XOR<RestaurantCreateWithoutMenusInput, RestaurantUncheckedCreateWithoutMenusInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutMenusInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutMenusInput, RestaurantUncheckedUpdateWithoutMenusInput>
  }

  export type RestaurantUpdateWithoutMenusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RestaurantImageUpdateManyWithoutRestaurantNestedInput
    reviews?: ReviewUpdateManyWithoutRestaurantNestedInput
    parties?: PartyUpdateManyWithoutRestaurantNestedInput
    operatingHours?: OperatingHourUpdateManyWithoutRestaurantNestedInput
    owner?: UserUpdateOneWithoutOwnedRestaurantsNestedInput
    savedBy?: SavedRestaurantUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutMenusInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RestaurantImageUncheckedUpdateManyWithoutRestaurantNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutRestaurantNestedInput
    parties?: PartyUncheckedUpdateManyWithoutRestaurantNestedInput
    operatingHours?: OperatingHourUncheckedUpdateManyWithoutRestaurantNestedInput
    savedBy?: SavedRestaurantUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type MemberOrderItemUpsertWithWhereUniqueWithoutMenuInput = {
    where: MemberOrderItemWhereUniqueInput
    update: XOR<MemberOrderItemUpdateWithoutMenuInput, MemberOrderItemUncheckedUpdateWithoutMenuInput>
    create: XOR<MemberOrderItemCreateWithoutMenuInput, MemberOrderItemUncheckedCreateWithoutMenuInput>
  }

  export type MemberOrderItemUpdateWithWhereUniqueWithoutMenuInput = {
    where: MemberOrderItemWhereUniqueInput
    data: XOR<MemberOrderItemUpdateWithoutMenuInput, MemberOrderItemUncheckedUpdateWithoutMenuInput>
  }

  export type MemberOrderItemUpdateManyWithWhereWithoutMenuInput = {
    where: MemberOrderItemScalarWhereInput
    data: XOR<MemberOrderItemUpdateManyMutationInput, MemberOrderItemUncheckedUpdateManyWithoutMenuInput>
  }

  export type MemberOrderItemScalarWhereInput = {
    AND?: MemberOrderItemScalarWhereInput | MemberOrderItemScalarWhereInput[]
    OR?: MemberOrderItemScalarWhereInput[]
    NOT?: MemberOrderItemScalarWhereInput | MemberOrderItemScalarWhereInput[]
    id?: StringFilter<"MemberOrderItem"> | string
    memberId?: StringFilter<"MemberOrderItem"> | string
    menuId?: StringNullableFilter<"MemberOrderItem"> | string | null
    customItemId?: StringNullableFilter<"MemberOrderItem"> | string | null
    createdAt?: DateTimeFilter<"MemberOrderItem"> | Date | string
  }

  export type RestaurantCreateWithoutPartiesInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RestaurantImageCreateNestedManyWithoutRestaurantInput
    reviews?: ReviewCreateNestedManyWithoutRestaurantInput
    menus?: MenuCreateNestedManyWithoutRestaurantInput
    operatingHours?: OperatingHourCreateNestedManyWithoutRestaurantInput
    owner?: UserCreateNestedOneWithoutOwnedRestaurantsInput
    savedBy?: SavedRestaurantCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutPartiesInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RestaurantImageUncheckedCreateNestedManyWithoutRestaurantInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutRestaurantInput
    menus?: MenuUncheckedCreateNestedManyWithoutRestaurantInput
    operatingHours?: OperatingHourUncheckedCreateNestedManyWithoutRestaurantInput
    savedBy?: SavedRestaurantUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutPartiesInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutPartiesInput, RestaurantUncheckedCreateWithoutPartiesInput>
  }

  export type UserCreateWithoutPartiesLedInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    avatarUrl?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    joinedParties?: PartyMemberCreateNestedManyWithoutUserInput
    ownedRestaurants?: RestaurantCreateNestedManyWithoutOwnerInput
    savedRestaurants?: SavedRestaurantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPartiesLedInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    avatarUrl?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    joinedParties?: PartyMemberUncheckedCreateNestedManyWithoutUserInput
    ownedRestaurants?: RestaurantUncheckedCreateNestedManyWithoutOwnerInput
    savedRestaurants?: SavedRestaurantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPartiesLedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPartiesLedInput, UserUncheckedCreateWithoutPartiesLedInput>
  }

  export type PartyMemberCreateWithoutPartyInput = {
    id?: string
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutJoinedPartiesInput
    orderItems?: MemberOrderItemCreateNestedManyWithoutMemberInput
  }

  export type PartyMemberUncheckedCreateWithoutPartyInput = {
    id?: string
    joinedAt?: Date | string
    userId: string
    orderItems?: MemberOrderItemUncheckedCreateNestedManyWithoutMemberInput
  }

  export type PartyMemberCreateOrConnectWithoutPartyInput = {
    where: PartyMemberWhereUniqueInput
    create: XOR<PartyMemberCreateWithoutPartyInput, PartyMemberUncheckedCreateWithoutPartyInput>
  }

  export type PartyMemberCreateManyPartyInputEnvelope = {
    data: PartyMemberCreateManyPartyInput | PartyMemberCreateManyPartyInput[]
    skipDuplicates?: boolean
  }

  export type PartyCustomItemCreateWithoutPartyInput = {
    id?: string
    name: string
    price: number
    createdAt?: Date | string
    orderItems?: MemberOrderItemCreateNestedManyWithoutCustomItemInput
  }

  export type PartyCustomItemUncheckedCreateWithoutPartyInput = {
    id?: string
    name: string
    price: number
    createdAt?: Date | string
    orderItems?: MemberOrderItemUncheckedCreateNestedManyWithoutCustomItemInput
  }

  export type PartyCustomItemCreateOrConnectWithoutPartyInput = {
    where: PartyCustomItemWhereUniqueInput
    create: XOR<PartyCustomItemCreateWithoutPartyInput, PartyCustomItemUncheckedCreateWithoutPartyInput>
  }

  export type PartyCustomItemCreateManyPartyInputEnvelope = {
    data: PartyCustomItemCreateManyPartyInput | PartyCustomItemCreateManyPartyInput[]
    skipDuplicates?: boolean
  }

  export type RestaurantUpsertWithoutPartiesInput = {
    update: XOR<RestaurantUpdateWithoutPartiesInput, RestaurantUncheckedUpdateWithoutPartiesInput>
    create: XOR<RestaurantCreateWithoutPartiesInput, RestaurantUncheckedCreateWithoutPartiesInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutPartiesInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutPartiesInput, RestaurantUncheckedUpdateWithoutPartiesInput>
  }

  export type RestaurantUpdateWithoutPartiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RestaurantImageUpdateManyWithoutRestaurantNestedInput
    reviews?: ReviewUpdateManyWithoutRestaurantNestedInput
    menus?: MenuUpdateManyWithoutRestaurantNestedInput
    operatingHours?: OperatingHourUpdateManyWithoutRestaurantNestedInput
    owner?: UserUpdateOneWithoutOwnedRestaurantsNestedInput
    savedBy?: SavedRestaurantUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutPartiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RestaurantImageUncheckedUpdateManyWithoutRestaurantNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutRestaurantNestedInput
    menus?: MenuUncheckedUpdateManyWithoutRestaurantNestedInput
    operatingHours?: OperatingHourUncheckedUpdateManyWithoutRestaurantNestedInput
    savedBy?: SavedRestaurantUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type UserUpsertWithoutPartiesLedInput = {
    update: XOR<UserUpdateWithoutPartiesLedInput, UserUncheckedUpdateWithoutPartiesLedInput>
    create: XOR<UserCreateWithoutPartiesLedInput, UserUncheckedCreateWithoutPartiesLedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPartiesLedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPartiesLedInput, UserUncheckedUpdateWithoutPartiesLedInput>
  }

  export type UserUpdateWithoutPartiesLedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    joinedParties?: PartyMemberUpdateManyWithoutUserNestedInput
    ownedRestaurants?: RestaurantUpdateManyWithoutOwnerNestedInput
    savedRestaurants?: SavedRestaurantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPartiesLedInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    joinedParties?: PartyMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedRestaurants?: RestaurantUncheckedUpdateManyWithoutOwnerNestedInput
    savedRestaurants?: SavedRestaurantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PartyMemberUpsertWithWhereUniqueWithoutPartyInput = {
    where: PartyMemberWhereUniqueInput
    update: XOR<PartyMemberUpdateWithoutPartyInput, PartyMemberUncheckedUpdateWithoutPartyInput>
    create: XOR<PartyMemberCreateWithoutPartyInput, PartyMemberUncheckedCreateWithoutPartyInput>
  }

  export type PartyMemberUpdateWithWhereUniqueWithoutPartyInput = {
    where: PartyMemberWhereUniqueInput
    data: XOR<PartyMemberUpdateWithoutPartyInput, PartyMemberUncheckedUpdateWithoutPartyInput>
  }

  export type PartyMemberUpdateManyWithWhereWithoutPartyInput = {
    where: PartyMemberScalarWhereInput
    data: XOR<PartyMemberUpdateManyMutationInput, PartyMemberUncheckedUpdateManyWithoutPartyInput>
  }

  export type PartyCustomItemUpsertWithWhereUniqueWithoutPartyInput = {
    where: PartyCustomItemWhereUniqueInput
    update: XOR<PartyCustomItemUpdateWithoutPartyInput, PartyCustomItemUncheckedUpdateWithoutPartyInput>
    create: XOR<PartyCustomItemCreateWithoutPartyInput, PartyCustomItemUncheckedCreateWithoutPartyInput>
  }

  export type PartyCustomItemUpdateWithWhereUniqueWithoutPartyInput = {
    where: PartyCustomItemWhereUniqueInput
    data: XOR<PartyCustomItemUpdateWithoutPartyInput, PartyCustomItemUncheckedUpdateWithoutPartyInput>
  }

  export type PartyCustomItemUpdateManyWithWhereWithoutPartyInput = {
    where: PartyCustomItemScalarWhereInput
    data: XOR<PartyCustomItemUpdateManyMutationInput, PartyCustomItemUncheckedUpdateManyWithoutPartyInput>
  }

  export type PartyCustomItemScalarWhereInput = {
    AND?: PartyCustomItemScalarWhereInput | PartyCustomItemScalarWhereInput[]
    OR?: PartyCustomItemScalarWhereInput[]
    NOT?: PartyCustomItemScalarWhereInput | PartyCustomItemScalarWhereInput[]
    id?: StringFilter<"PartyCustomItem"> | string
    name?: StringFilter<"PartyCustomItem"> | string
    price?: FloatFilter<"PartyCustomItem"> | number
    partyId?: StringFilter<"PartyCustomItem"> | string
    createdAt?: DateTimeFilter<"PartyCustomItem"> | Date | string
  }

  export type PartyCreateWithoutCustomItemsInput = {
    id?: string
    name?: string | null
    details?: string | null
    meetupTime: Date | string
    maxParticipants: number
    status?: $Enums.PartyStatus
    contactInfo: string
    serviceCharge?: number
    vat?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutPartiesInput
    leader: UserCreateNestedOneWithoutPartiesLedInput
    members?: PartyMemberCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateWithoutCustomItemsInput = {
    id?: string
    name?: string | null
    details?: string | null
    meetupTime: Date | string
    maxParticipants: number
    status?: $Enums.PartyStatus
    contactInfo: string
    serviceCharge?: number
    vat?: number
    restaurantId: string
    leaderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: PartyMemberUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyCreateOrConnectWithoutCustomItemsInput = {
    where: PartyWhereUniqueInput
    create: XOR<PartyCreateWithoutCustomItemsInput, PartyUncheckedCreateWithoutCustomItemsInput>
  }

  export type MemberOrderItemCreateWithoutCustomItemInput = {
    id?: string
    createdAt?: Date | string
    menu?: MenuCreateNestedOneWithoutOrderItemsInput
    member: PartyMemberCreateNestedOneWithoutOrderItemsInput
  }

  export type MemberOrderItemUncheckedCreateWithoutCustomItemInput = {
    id?: string
    memberId: string
    menuId?: string | null
    createdAt?: Date | string
  }

  export type MemberOrderItemCreateOrConnectWithoutCustomItemInput = {
    where: MemberOrderItemWhereUniqueInput
    create: XOR<MemberOrderItemCreateWithoutCustomItemInput, MemberOrderItemUncheckedCreateWithoutCustomItemInput>
  }

  export type MemberOrderItemCreateManyCustomItemInputEnvelope = {
    data: MemberOrderItemCreateManyCustomItemInput | MemberOrderItemCreateManyCustomItemInput[]
    skipDuplicates?: boolean
  }

  export type PartyUpsertWithoutCustomItemsInput = {
    update: XOR<PartyUpdateWithoutCustomItemsInput, PartyUncheckedUpdateWithoutCustomItemsInput>
    create: XOR<PartyCreateWithoutCustomItemsInput, PartyUncheckedCreateWithoutCustomItemsInput>
    where?: PartyWhereInput
  }

  export type PartyUpdateToOneWithWhereWithoutCustomItemsInput = {
    where?: PartyWhereInput
    data: XOR<PartyUpdateWithoutCustomItemsInput, PartyUncheckedUpdateWithoutCustomItemsInput>
  }

  export type PartyUpdateWithoutCustomItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    meetupTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumPartyStatusFieldUpdateOperationsInput | $Enums.PartyStatus
    contactInfo?: StringFieldUpdateOperationsInput | string
    serviceCharge?: FloatFieldUpdateOperationsInput | number
    vat?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutPartiesNestedInput
    leader?: UserUpdateOneRequiredWithoutPartiesLedNestedInput
    members?: PartyMemberUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateWithoutCustomItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    meetupTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumPartyStatusFieldUpdateOperationsInput | $Enums.PartyStatus
    contactInfo?: StringFieldUpdateOperationsInput | string
    serviceCharge?: FloatFieldUpdateOperationsInput | number
    vat?: FloatFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    leaderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: PartyMemberUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type MemberOrderItemUpsertWithWhereUniqueWithoutCustomItemInput = {
    where: MemberOrderItemWhereUniqueInput
    update: XOR<MemberOrderItemUpdateWithoutCustomItemInput, MemberOrderItemUncheckedUpdateWithoutCustomItemInput>
    create: XOR<MemberOrderItemCreateWithoutCustomItemInput, MemberOrderItemUncheckedCreateWithoutCustomItemInput>
  }

  export type MemberOrderItemUpdateWithWhereUniqueWithoutCustomItemInput = {
    where: MemberOrderItemWhereUniqueInput
    data: XOR<MemberOrderItemUpdateWithoutCustomItemInput, MemberOrderItemUncheckedUpdateWithoutCustomItemInput>
  }

  export type MemberOrderItemUpdateManyWithWhereWithoutCustomItemInput = {
    where: MemberOrderItemScalarWhereInput
    data: XOR<MemberOrderItemUpdateManyMutationInput, MemberOrderItemUncheckedUpdateManyWithoutCustomItemInput>
  }

  export type PartyCreateWithoutMembersInput = {
    id?: string
    name?: string | null
    details?: string | null
    meetupTime: Date | string
    maxParticipants: number
    status?: $Enums.PartyStatus
    contactInfo: string
    serviceCharge?: number
    vat?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutPartiesInput
    leader: UserCreateNestedOneWithoutPartiesLedInput
    customItems?: PartyCustomItemCreateNestedManyWithoutPartyInput
  }

  export type PartyUncheckedCreateWithoutMembersInput = {
    id?: string
    name?: string | null
    details?: string | null
    meetupTime: Date | string
    maxParticipants: number
    status?: $Enums.PartyStatus
    contactInfo: string
    serviceCharge?: number
    vat?: number
    restaurantId: string
    leaderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    customItems?: PartyCustomItemUncheckedCreateNestedManyWithoutPartyInput
  }

  export type PartyCreateOrConnectWithoutMembersInput = {
    where: PartyWhereUniqueInput
    create: XOR<PartyCreateWithoutMembersInput, PartyUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutJoinedPartiesInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    avatarUrl?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    partiesLed?: PartyCreateNestedManyWithoutLeaderInput
    ownedRestaurants?: RestaurantCreateNestedManyWithoutOwnerInput
    savedRestaurants?: SavedRestaurantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJoinedPartiesInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    avatarUrl?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    partiesLed?: PartyUncheckedCreateNestedManyWithoutLeaderInput
    ownedRestaurants?: RestaurantUncheckedCreateNestedManyWithoutOwnerInput
    savedRestaurants?: SavedRestaurantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJoinedPartiesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJoinedPartiesInput, UserUncheckedCreateWithoutJoinedPartiesInput>
  }

  export type MemberOrderItemCreateWithoutMemberInput = {
    id?: string
    createdAt?: Date | string
    menu?: MenuCreateNestedOneWithoutOrderItemsInput
    customItem?: PartyCustomItemCreateNestedOneWithoutOrderItemsInput
  }

  export type MemberOrderItemUncheckedCreateWithoutMemberInput = {
    id?: string
    menuId?: string | null
    customItemId?: string | null
    createdAt?: Date | string
  }

  export type MemberOrderItemCreateOrConnectWithoutMemberInput = {
    where: MemberOrderItemWhereUniqueInput
    create: XOR<MemberOrderItemCreateWithoutMemberInput, MemberOrderItemUncheckedCreateWithoutMemberInput>
  }

  export type MemberOrderItemCreateManyMemberInputEnvelope = {
    data: MemberOrderItemCreateManyMemberInput | MemberOrderItemCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type PartyUpsertWithoutMembersInput = {
    update: XOR<PartyUpdateWithoutMembersInput, PartyUncheckedUpdateWithoutMembersInput>
    create: XOR<PartyCreateWithoutMembersInput, PartyUncheckedCreateWithoutMembersInput>
    where?: PartyWhereInput
  }

  export type PartyUpdateToOneWithWhereWithoutMembersInput = {
    where?: PartyWhereInput
    data: XOR<PartyUpdateWithoutMembersInput, PartyUncheckedUpdateWithoutMembersInput>
  }

  export type PartyUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    meetupTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumPartyStatusFieldUpdateOperationsInput | $Enums.PartyStatus
    contactInfo?: StringFieldUpdateOperationsInput | string
    serviceCharge?: FloatFieldUpdateOperationsInput | number
    vat?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutPartiesNestedInput
    leader?: UserUpdateOneRequiredWithoutPartiesLedNestedInput
    customItems?: PartyCustomItemUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    meetupTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumPartyStatusFieldUpdateOperationsInput | $Enums.PartyStatus
    contactInfo?: StringFieldUpdateOperationsInput | string
    serviceCharge?: FloatFieldUpdateOperationsInput | number
    vat?: FloatFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    leaderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customItems?: PartyCustomItemUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type UserUpsertWithoutJoinedPartiesInput = {
    update: XOR<UserUpdateWithoutJoinedPartiesInput, UserUncheckedUpdateWithoutJoinedPartiesInput>
    create: XOR<UserCreateWithoutJoinedPartiesInput, UserUncheckedCreateWithoutJoinedPartiesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJoinedPartiesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJoinedPartiesInput, UserUncheckedUpdateWithoutJoinedPartiesInput>
  }

  export type UserUpdateWithoutJoinedPartiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    partiesLed?: PartyUpdateManyWithoutLeaderNestedInput
    ownedRestaurants?: RestaurantUpdateManyWithoutOwnerNestedInput
    savedRestaurants?: SavedRestaurantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJoinedPartiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    partiesLed?: PartyUncheckedUpdateManyWithoutLeaderNestedInput
    ownedRestaurants?: RestaurantUncheckedUpdateManyWithoutOwnerNestedInput
    savedRestaurants?: SavedRestaurantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MemberOrderItemUpsertWithWhereUniqueWithoutMemberInput = {
    where: MemberOrderItemWhereUniqueInput
    update: XOR<MemberOrderItemUpdateWithoutMemberInput, MemberOrderItemUncheckedUpdateWithoutMemberInput>
    create: XOR<MemberOrderItemCreateWithoutMemberInput, MemberOrderItemUncheckedCreateWithoutMemberInput>
  }

  export type MemberOrderItemUpdateWithWhereUniqueWithoutMemberInput = {
    where: MemberOrderItemWhereUniqueInput
    data: XOR<MemberOrderItemUpdateWithoutMemberInput, MemberOrderItemUncheckedUpdateWithoutMemberInput>
  }

  export type MemberOrderItemUpdateManyWithWhereWithoutMemberInput = {
    where: MemberOrderItemScalarWhereInput
    data: XOR<MemberOrderItemUpdateManyMutationInput, MemberOrderItemUncheckedUpdateManyWithoutMemberInput>
  }

  export type MenuCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    category?: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    restaurant: RestaurantCreateNestedOneWithoutMenusInput
  }

  export type MenuUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    category?: string
    imageUrl?: string | null
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCreateOrConnectWithoutOrderItemsInput = {
    where: MenuWhereUniqueInput
    create: XOR<MenuCreateWithoutOrderItemsInput, MenuUncheckedCreateWithoutOrderItemsInput>
  }

  export type PartyCustomItemCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    price: number
    createdAt?: Date | string
    party: PartyCreateNestedOneWithoutCustomItemsInput
  }

  export type PartyCustomItemUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    price: number
    partyId: string
    createdAt?: Date | string
  }

  export type PartyCustomItemCreateOrConnectWithoutOrderItemsInput = {
    where: PartyCustomItemWhereUniqueInput
    create: XOR<PartyCustomItemCreateWithoutOrderItemsInput, PartyCustomItemUncheckedCreateWithoutOrderItemsInput>
  }

  export type PartyMemberCreateWithoutOrderItemsInput = {
    id?: string
    joinedAt?: Date | string
    party: PartyCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutJoinedPartiesInput
  }

  export type PartyMemberUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    joinedAt?: Date | string
    partyId: string
    userId: string
  }

  export type PartyMemberCreateOrConnectWithoutOrderItemsInput = {
    where: PartyMemberWhereUniqueInput
    create: XOR<PartyMemberCreateWithoutOrderItemsInput, PartyMemberUncheckedCreateWithoutOrderItemsInput>
  }

  export type MenuUpsertWithoutOrderItemsInput = {
    update: XOR<MenuUpdateWithoutOrderItemsInput, MenuUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<MenuCreateWithoutOrderItemsInput, MenuUncheckedCreateWithoutOrderItemsInput>
    where?: MenuWhereInput
  }

  export type MenuUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: MenuWhereInput
    data: XOR<MenuUpdateWithoutOrderItemsInput, MenuUncheckedUpdateWithoutOrderItemsInput>
  }

  export type MenuUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutMenusNestedInput
  }

  export type MenuUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyCustomItemUpsertWithoutOrderItemsInput = {
    update: XOR<PartyCustomItemUpdateWithoutOrderItemsInput, PartyCustomItemUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<PartyCustomItemCreateWithoutOrderItemsInput, PartyCustomItemUncheckedCreateWithoutOrderItemsInput>
    where?: PartyCustomItemWhereInput
  }

  export type PartyCustomItemUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: PartyCustomItemWhereInput
    data: XOR<PartyCustomItemUpdateWithoutOrderItemsInput, PartyCustomItemUncheckedUpdateWithoutOrderItemsInput>
  }

  export type PartyCustomItemUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    party?: PartyUpdateOneRequiredWithoutCustomItemsNestedInput
  }

  export type PartyCustomItemUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    partyId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyMemberUpsertWithoutOrderItemsInput = {
    update: XOR<PartyMemberUpdateWithoutOrderItemsInput, PartyMemberUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<PartyMemberCreateWithoutOrderItemsInput, PartyMemberUncheckedCreateWithoutOrderItemsInput>
    where?: PartyMemberWhereInput
  }

  export type PartyMemberUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: PartyMemberWhereInput
    data: XOR<PartyMemberUpdateWithoutOrderItemsInput, PartyMemberUncheckedUpdateWithoutOrderItemsInput>
  }

  export type PartyMemberUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    party?: PartyUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutJoinedPartiesNestedInput
  }

  export type PartyMemberUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partyId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    avatarUrl?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    partiesLed?: PartyCreateNestedManyWithoutLeaderInput
    joinedParties?: PartyMemberCreateNestedManyWithoutUserInput
    ownedRestaurants?: RestaurantCreateNestedManyWithoutOwnerInput
    savedRestaurants?: SavedRestaurantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    email: string
    password?: string | null
    name: string
    avatarUrl?: string | null
    role?: $Enums.Role
    provider?: $Enums.Provider
    googleId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    partiesLed?: PartyUncheckedCreateNestedManyWithoutLeaderInput
    joinedParties?: PartyMemberUncheckedCreateNestedManyWithoutUserInput
    ownedRestaurants?: RestaurantUncheckedCreateNestedManyWithoutOwnerInput
    savedRestaurants?: SavedRestaurantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type RestaurantCreateWithoutReviewsInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RestaurantImageCreateNestedManyWithoutRestaurantInput
    menus?: MenuCreateNestedManyWithoutRestaurantInput
    parties?: PartyCreateNestedManyWithoutRestaurantInput
    operatingHours?: OperatingHourCreateNestedManyWithoutRestaurantInput
    owner?: UserCreateNestedOneWithoutOwnedRestaurantsInput
    savedBy?: SavedRestaurantCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    ownerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    images?: RestaurantImageUncheckedCreateNestedManyWithoutRestaurantInput
    menus?: MenuUncheckedCreateNestedManyWithoutRestaurantInput
    parties?: PartyUncheckedCreateNestedManyWithoutRestaurantInput
    operatingHours?: OperatingHourUncheckedCreateNestedManyWithoutRestaurantInput
    savedBy?: SavedRestaurantUncheckedCreateNestedManyWithoutRestaurantInput
  }

  export type RestaurantCreateOrConnectWithoutReviewsInput = {
    where: RestaurantWhereUniqueInput
    create: XOR<RestaurantCreateWithoutReviewsInput, RestaurantUncheckedCreateWithoutReviewsInput>
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
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partiesLed?: PartyUpdateManyWithoutLeaderNestedInput
    joinedParties?: PartyMemberUpdateManyWithoutUserNestedInput
    ownedRestaurants?: RestaurantUpdateManyWithoutOwnerNestedInput
    savedRestaurants?: SavedRestaurantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    provider?: EnumProviderFieldUpdateOperationsInput | $Enums.Provider
    googleId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partiesLed?: PartyUncheckedUpdateManyWithoutLeaderNestedInput
    joinedParties?: PartyMemberUncheckedUpdateManyWithoutUserNestedInput
    ownedRestaurants?: RestaurantUncheckedUpdateManyWithoutOwnerNestedInput
    savedRestaurants?: SavedRestaurantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RestaurantUpsertWithoutReviewsInput = {
    update: XOR<RestaurantUpdateWithoutReviewsInput, RestaurantUncheckedUpdateWithoutReviewsInput>
    create: XOR<RestaurantCreateWithoutReviewsInput, RestaurantUncheckedCreateWithoutReviewsInput>
    where?: RestaurantWhereInput
  }

  export type RestaurantUpdateToOneWithWhereWithoutReviewsInput = {
    where?: RestaurantWhereInput
    data: XOR<RestaurantUpdateWithoutReviewsInput, RestaurantUncheckedUpdateWithoutReviewsInput>
  }

  export type RestaurantUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RestaurantImageUpdateManyWithoutRestaurantNestedInput
    menus?: MenuUpdateManyWithoutRestaurantNestedInput
    parties?: PartyUpdateManyWithoutRestaurantNestedInput
    operatingHours?: OperatingHourUpdateManyWithoutRestaurantNestedInput
    owner?: UserUpdateOneWithoutOwnedRestaurantsNestedInput
    savedBy?: SavedRestaurantUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    ownerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RestaurantImageUncheckedUpdateManyWithoutRestaurantNestedInput
    menus?: MenuUncheckedUpdateManyWithoutRestaurantNestedInput
    parties?: PartyUncheckedUpdateManyWithoutRestaurantNestedInput
    operatingHours?: OperatingHourUncheckedUpdateManyWithoutRestaurantNestedInput
    savedBy?: SavedRestaurantUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    rating: number
    comment?: string | null
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyCreateManyLeaderInput = {
    id?: string
    name?: string | null
    details?: string | null
    meetupTime: Date | string
    maxParticipants: number
    status?: $Enums.PartyStatus
    contactInfo: string
    serviceCharge?: number
    vat?: number
    restaurantId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyMemberCreateManyUserInput = {
    id?: string
    joinedAt?: Date | string
    partyId: string
  }

  export type RestaurantCreateManyOwnerInput = {
    id?: string
    name: string
    description?: string | null
    lat: number
    lng: number
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type SavedRestaurantCreateManyUserInput = {
    id?: string
    restaurantId: string
    savedAt?: Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyUpdateWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    meetupTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumPartyStatusFieldUpdateOperationsInput | $Enums.PartyStatus
    contactInfo?: StringFieldUpdateOperationsInput | string
    serviceCharge?: FloatFieldUpdateOperationsInput | number
    vat?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutPartiesNestedInput
    members?: PartyMemberUpdateManyWithoutPartyNestedInput
    customItems?: PartyCustomItemUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    meetupTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumPartyStatusFieldUpdateOperationsInput | $Enums.PartyStatus
    contactInfo?: StringFieldUpdateOperationsInput | string
    serviceCharge?: FloatFieldUpdateOperationsInput | number
    vat?: FloatFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: PartyMemberUncheckedUpdateManyWithoutPartyNestedInput
    customItems?: PartyCustomItemUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateManyWithoutLeaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    meetupTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumPartyStatusFieldUpdateOperationsInput | $Enums.PartyStatus
    contactInfo?: StringFieldUpdateOperationsInput | string
    serviceCharge?: FloatFieldUpdateOperationsInput | number
    vat?: FloatFieldUpdateOperationsInput | number
    restaurantId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    party?: PartyUpdateOneRequiredWithoutMembersNestedInput
    orderItems?: MemberOrderItemUpdateManyWithoutMemberNestedInput
  }

  export type PartyMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partyId?: StringFieldUpdateOperationsInput | string
    orderItems?: MemberOrderItemUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type PartyMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partyId?: StringFieldUpdateOperationsInput | string
  }

  export type RestaurantUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RestaurantImageUpdateManyWithoutRestaurantNestedInput
    reviews?: ReviewUpdateManyWithoutRestaurantNestedInput
    menus?: MenuUpdateManyWithoutRestaurantNestedInput
    parties?: PartyUpdateManyWithoutRestaurantNestedInput
    operatingHours?: OperatingHourUpdateManyWithoutRestaurantNestedInput
    savedBy?: SavedRestaurantUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    images?: RestaurantImageUncheckedUpdateManyWithoutRestaurantNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutRestaurantNestedInput
    menus?: MenuUncheckedUpdateManyWithoutRestaurantNestedInput
    parties?: PartyUncheckedUpdateManyWithoutRestaurantNestedInput
    operatingHours?: OperatingHourUncheckedUpdateManyWithoutRestaurantNestedInput
    savedBy?: SavedRestaurantUncheckedUpdateManyWithoutRestaurantNestedInput
  }

  export type RestaurantUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: FloatFieldUpdateOperationsInput | number
    lng?: FloatFieldUpdateOperationsInput | number
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SavedRestaurantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    restaurant?: RestaurantUpdateOneRequiredWithoutSavedByNestedInput
  }

  export type SavedRestaurantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedRestaurantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    restaurantId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantImageCreateManyRestaurantInput = {
    id?: string
    url: string
    isCover?: boolean
    createdAt?: Date | string
  }

  export type ReviewCreateManyRestaurantInput = {
    id?: string
    rating: number
    comment?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MenuCreateManyRestaurantInput = {
    id?: string
    name: string
    description?: string | null
    price: number
    category?: string
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartyCreateManyRestaurantInput = {
    id?: string
    name?: string | null
    details?: string | null
    meetupTime: Date | string
    maxParticipants: number
    status?: $Enums.PartyStatus
    contactInfo: string
    serviceCharge?: number
    vat?: number
    leaderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OperatingHourCreateManyRestaurantInput = {
    id?: string
    day: $Enums.DayOfWeek
    openTime: string
    closeTime: string
    isClosed?: boolean
  }

  export type SavedRestaurantCreateManyRestaurantInput = {
    id?: string
    userId: string
    savedAt?: Date | string
  }

  export type RestaurantImageUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isCover?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantImageUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isCover?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RestaurantImageUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isCover?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MenuUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: MemberOrderItemUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: MemberOrderItemUncheckedUpdateManyWithoutMenuNestedInput
  }

  export type MenuUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    meetupTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumPartyStatusFieldUpdateOperationsInput | $Enums.PartyStatus
    contactInfo?: StringFieldUpdateOperationsInput | string
    serviceCharge?: FloatFieldUpdateOperationsInput | number
    vat?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    leader?: UserUpdateOneRequiredWithoutPartiesLedNestedInput
    members?: PartyMemberUpdateManyWithoutPartyNestedInput
    customItems?: PartyCustomItemUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    meetupTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumPartyStatusFieldUpdateOperationsInput | $Enums.PartyStatus
    contactInfo?: StringFieldUpdateOperationsInput | string
    serviceCharge?: FloatFieldUpdateOperationsInput | number
    vat?: FloatFieldUpdateOperationsInput | number
    leaderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: PartyMemberUncheckedUpdateManyWithoutPartyNestedInput
    customItems?: PartyCustomItemUncheckedUpdateManyWithoutPartyNestedInput
  }

  export type PartyUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    meetupTime?: DateTimeFieldUpdateOperationsInput | Date | string
    maxParticipants?: IntFieldUpdateOperationsInput | number
    status?: EnumPartyStatusFieldUpdateOperationsInput | $Enums.PartyStatus
    contactInfo?: StringFieldUpdateOperationsInput | string
    serviceCharge?: FloatFieldUpdateOperationsInput | number
    vat?: FloatFieldUpdateOperationsInput | number
    leaderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OperatingHourUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OperatingHourUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type OperatingHourUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    day?: EnumDayOfWeekFieldUpdateOperationsInput | $Enums.DayOfWeek
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isClosed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SavedRestaurantUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSavedRestaurantsNestedInput
  }

  export type SavedRestaurantUncheckedUpdateWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SavedRestaurantUncheckedUpdateManyWithoutRestaurantInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    savedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberOrderItemCreateManyMenuInput = {
    id?: string
    memberId: string
    customItemId?: string | null
    createdAt?: Date | string
  }

  export type MemberOrderItemUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customItem?: PartyCustomItemUpdateOneWithoutOrderItemsNestedInput
    member?: PartyMemberUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type MemberOrderItemUncheckedUpdateWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    customItemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberOrderItemUncheckedUpdateManyWithoutMenuInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    customItemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartyMemberCreateManyPartyInput = {
    id?: string
    joinedAt?: Date | string
    userId: string
  }

  export type PartyCustomItemCreateManyPartyInput = {
    id?: string
    name: string
    price: number
    createdAt?: Date | string
  }

  export type PartyMemberUpdateWithoutPartyInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJoinedPartiesNestedInput
    orderItems?: MemberOrderItemUpdateManyWithoutMemberNestedInput
  }

  export type PartyMemberUncheckedUpdateWithoutPartyInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    orderItems?: MemberOrderItemUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type PartyMemberUncheckedUpdateManyWithoutPartyInput = {
    id?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PartyCustomItemUpdateWithoutPartyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: MemberOrderItemUpdateManyWithoutCustomItemNestedInput
  }

  export type PartyCustomItemUncheckedUpdateWithoutPartyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: MemberOrderItemUncheckedUpdateManyWithoutCustomItemNestedInput
  }

  export type PartyCustomItemUncheckedUpdateManyWithoutPartyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberOrderItemCreateManyCustomItemInput = {
    id?: string
    memberId: string
    menuId?: string | null
    createdAt?: Date | string
  }

  export type MemberOrderItemUpdateWithoutCustomItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: MenuUpdateOneWithoutOrderItemsNestedInput
    member?: PartyMemberUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type MemberOrderItemUncheckedUpdateWithoutCustomItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    menuId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberOrderItemUncheckedUpdateManyWithoutCustomItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    memberId?: StringFieldUpdateOperationsInput | string
    menuId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberOrderItemCreateManyMemberInput = {
    id?: string
    menuId?: string | null
    customItemId?: string | null
    createdAt?: Date | string
  }

  export type MemberOrderItemUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    menu?: MenuUpdateOneWithoutOrderItemsNestedInput
    customItem?: PartyCustomItemUpdateOneWithoutOrderItemsNestedInput
  }

  export type MemberOrderItemUncheckedUpdateWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuId?: NullableStringFieldUpdateOperationsInput | string | null
    customItemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberOrderItemUncheckedUpdateManyWithoutMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    menuId?: NullableStringFieldUpdateOperationsInput | string | null
    customItemId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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