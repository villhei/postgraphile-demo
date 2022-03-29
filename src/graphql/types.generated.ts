import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A floating point number that requires more precision than IEEE 754 binary 64 */
  BigFloat: any
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: any
  /** The day, does not include a time. */
  Date: string
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: any
  Year: any
}

export type Actor = Node & {
  __typename?: "Actor"
  actorId: Scalars["Int"]
  /** Reads and enables pagination through a set of `FilmActor`. */
  filmActors: FilmActorsConnection
  firstName: Scalars["String"]
  lastName: Scalars["String"]
  lastUpdate: Scalars["Datetime"]
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
}

export type ActorFilmActorsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<FilmActorCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>
}

/** A condition to be used against `Actor` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ActorCondition = {
  /** Checks for equality with the object’s `actorId` field. */
  actorId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
}

export type ActorInfo = {
  __typename?: "ActorInfo"
  actorId?: Maybe<Scalars["Int"]>
  filmInfo?: Maybe<Scalars["String"]>
  firstName?: Maybe<Scalars["String"]>
  lastName?: Maybe<Scalars["String"]>
}

/**
 * A condition to be used against `ActorInfo` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ActorInfoCondition = {
  /** Checks for equality with the object’s `actorId` field. */
  actorId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `filmInfo` field. */
  filmInfo?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars["String"]>
}

/** A connection to a list of `ActorInfo` values. */
export type ActorInfosConnection = {
  __typename?: "ActorInfosConnection"
  /** A list of edges which contains the `ActorInfo` and cursor to aid in pagination. */
  edges: Array<ActorInfosEdge>
  /** A list of `ActorInfo` objects. */
  nodes: Array<ActorInfo>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `ActorInfo` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `ActorInfo` edge in the connection. */
export type ActorInfosEdge = {
  __typename?: "ActorInfosEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `ActorInfo` at the end of the edge. */
  node: ActorInfo
}

/** Methods to use when ordering `ActorInfo`. */
export enum ActorInfosOrderBy {
  ActorIdAsc = "ACTOR_ID_ASC",
  ActorIdDesc = "ACTOR_ID_DESC",
  FilmInfoAsc = "FILM_INFO_ASC",
  FilmInfoDesc = "FILM_INFO_DESC",
  FirstNameAsc = "FIRST_NAME_ASC",
  FirstNameDesc = "FIRST_NAME_DESC",
  LastNameAsc = "LAST_NAME_ASC",
  LastNameDesc = "LAST_NAME_DESC",
  Natural = "NATURAL",
}

/** An input for mutations affecting `Actor` */
export type ActorInput = {
  actorId?: InputMaybe<Scalars["Int"]>
  firstName: Scalars["String"]
  lastName: Scalars["String"]
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
}

/** Represents an update to a `Actor`. Fields that are set will be updated. */
export type ActorPatch = {
  actorId?: InputMaybe<Scalars["Int"]>
  firstName?: InputMaybe<Scalars["String"]>
  lastName?: InputMaybe<Scalars["String"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
}

/** A connection to a list of `Actor` values. */
export type ActorsConnection = {
  __typename?: "ActorsConnection"
  /** A list of edges which contains the `Actor` and cursor to aid in pagination. */
  edges: Array<ActorsEdge>
  /** A list of `Actor` objects. */
  nodes: Array<Actor>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Actor` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `Actor` edge in the connection. */
export type ActorsEdge = {
  __typename?: "ActorsEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `Actor` at the end of the edge. */
  node: Actor
}

/** Methods to use when ordering `Actor`. */
export enum ActorsOrderBy {
  ActorIdAsc = "ACTOR_ID_ASC",
  ActorIdDesc = "ACTOR_ID_DESC",
  FirstNameAsc = "FIRST_NAME_ASC",
  FirstNameDesc = "FIRST_NAME_DESC",
  LastNameAsc = "LAST_NAME_ASC",
  LastNameDesc = "LAST_NAME_DESC",
  LastUpdateAsc = "LAST_UPDATE_ASC",
  LastUpdateDesc = "LAST_UPDATE_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

export type Address = Node & {
  __typename?: "Address"
  address: Scalars["String"]
  address2?: Maybe<Scalars["String"]>
  addressId: Scalars["Int"]
  /** Reads a single `City` that is related to this `Address`. */
  city?: Maybe<City>
  cityId: Scalars["Int"]
  /** Reads and enables pagination through a set of `Customer`. */
  customers: CustomersConnection
  district: Scalars["String"]
  lastUpdate: Scalars["Datetime"]
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
  phone: Scalars["String"]
  postalCode?: Maybe<Scalars["String"]>
  /** Reads and enables pagination through a set of `Staff`. */
  staffs: StaffConnection
  /** Reads and enables pagination through a set of `Store`. */
  stores: StoresConnection
}

export type AddressCustomersArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<CustomerCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<CustomersOrderBy>>
}

export type AddressStaffsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<StaffCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<StaffOrderBy>>
}

export type AddressStoresArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<StoreCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<StoresOrderBy>>
}

/** A condition to be used against `Address` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AddressCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `address2` field. */
  address2?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `cityId` field. */
  cityId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `district` field. */
  district?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  /** Checks for equality with the object’s `phone` field. */
  phone?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `postalCode` field. */
  postalCode?: InputMaybe<Scalars["String"]>
}

/** An input for mutations affecting `Address` */
export type AddressInput = {
  address: Scalars["String"]
  address2?: InputMaybe<Scalars["String"]>
  addressId?: InputMaybe<Scalars["Int"]>
  cityId: Scalars["Int"]
  district: Scalars["String"]
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  phone: Scalars["String"]
  postalCode?: InputMaybe<Scalars["String"]>
}

/** Represents an update to a `Address`. Fields that are set will be updated. */
export type AddressPatch = {
  address?: InputMaybe<Scalars["String"]>
  address2?: InputMaybe<Scalars["String"]>
  addressId?: InputMaybe<Scalars["Int"]>
  cityId?: InputMaybe<Scalars["Int"]>
  district?: InputMaybe<Scalars["String"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  phone?: InputMaybe<Scalars["String"]>
  postalCode?: InputMaybe<Scalars["String"]>
}

/** A connection to a list of `Address` values. */
export type AddressesConnection = {
  __typename?: "AddressesConnection"
  /** A list of edges which contains the `Address` and cursor to aid in pagination. */
  edges: Array<AddressesEdge>
  /** A list of `Address` objects. */
  nodes: Array<Address>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Address` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `Address` edge in the connection. */
export type AddressesEdge = {
  __typename?: "AddressesEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `Address` at the end of the edge. */
  node: Address
}

/** Methods to use when ordering `Address`. */
export enum AddressesOrderBy {
  Address2Asc = "ADDRESS2_ASC",
  Address2Desc = "ADDRESS2_DESC",
  AddressAsc = "ADDRESS_ASC",
  AddressDesc = "ADDRESS_DESC",
  AddressIdAsc = "ADDRESS_ID_ASC",
  AddressIdDesc = "ADDRESS_ID_DESC",
  CityIdAsc = "CITY_ID_ASC",
  CityIdDesc = "CITY_ID_DESC",
  DistrictAsc = "DISTRICT_ASC",
  DistrictDesc = "DISTRICT_DESC",
  LastUpdateAsc = "LAST_UPDATE_ASC",
  LastUpdateDesc = "LAST_UPDATE_DESC",
  Natural = "NATURAL",
  PhoneAsc = "PHONE_ASC",
  PhoneDesc = "PHONE_DESC",
  PostalCodeAsc = "POSTAL_CODE_ASC",
  PostalCodeDesc = "POSTAL_CODE_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

/** A connection to a list of `Category` values. */
export type CategoriesConnection = {
  __typename?: "CategoriesConnection"
  /** A list of edges which contains the `Category` and cursor to aid in pagination. */
  edges: Array<CategoriesEdge>
  /** A list of `Category` objects. */
  nodes: Array<Category>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Category` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `Category` edge in the connection. */
export type CategoriesEdge = {
  __typename?: "CategoriesEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `Category` at the end of the edge. */
  node: Category
}

/** Methods to use when ordering `Category`. */
export enum CategoriesOrderBy {
  CategoryIdAsc = "CATEGORY_ID_ASC",
  CategoryIdDesc = "CATEGORY_ID_DESC",
  LastUpdateAsc = "LAST_UPDATE_ASC",
  LastUpdateDesc = "LAST_UPDATE_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

export type Category = Node & {
  __typename?: "Category"
  categoryId: Scalars["Int"]
  /** Reads and enables pagination through a set of `FilmCategory`. */
  filmCategories: FilmCategoriesConnection
  lastUpdate: Scalars["Datetime"]
  name: Scalars["String"]
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
}

export type CategoryFilmCategoriesArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<FilmCategoryCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>
}

/**
 * A condition to be used against `Category` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars["String"]>
}

/** An input for mutations affecting `Category` */
export type CategoryInput = {
  categoryId?: InputMaybe<Scalars["Int"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  name: Scalars["String"]
}

/** Represents an update to a `Category`. Fields that are set will be updated. */
export type CategoryPatch = {
  categoryId?: InputMaybe<Scalars["Int"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  name?: InputMaybe<Scalars["String"]>
}

/** A connection to a list of `City` values. */
export type CitiesConnection = {
  __typename?: "CitiesConnection"
  /** A list of edges which contains the `City` and cursor to aid in pagination. */
  edges: Array<CitiesEdge>
  /** A list of `City` objects. */
  nodes: Array<City>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `City` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `City` edge in the connection. */
export type CitiesEdge = {
  __typename?: "CitiesEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `City` at the end of the edge. */
  node: City
}

/** Methods to use when ordering `City`. */
export enum CitiesOrderBy {
  CityAsc = "CITY_ASC",
  CityDesc = "CITY_DESC",
  CityIdAsc = "CITY_ID_ASC",
  CityIdDesc = "CITY_ID_DESC",
  CountryIdAsc = "COUNTRY_ID_ASC",
  CountryIdDesc = "COUNTRY_ID_DESC",
  LastUpdateAsc = "LAST_UPDATE_ASC",
  LastUpdateDesc = "LAST_UPDATE_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

export type City = Node & {
  __typename?: "City"
  /** Reads and enables pagination through a set of `Address`. */
  addresses: AddressesConnection
  city: Scalars["String"]
  cityId: Scalars["Int"]
  /** Reads a single `Country` that is related to this `City`. */
  country?: Maybe<Country>
  countryId: Scalars["Int"]
  lastUpdate: Scalars["Datetime"]
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
}

export type CityAddressesArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<AddressCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<AddressesOrderBy>>
}

/** A condition to be used against `City` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CityCondition = {
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `cityId` field. */
  cityId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
}

/** An input for mutations affecting `City` */
export type CityInput = {
  city: Scalars["String"]
  cityId?: InputMaybe<Scalars["Int"]>
  countryId: Scalars["Int"]
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
}

/** Represents an update to a `City`. Fields that are set will be updated. */
export type CityPatch = {
  city?: InputMaybe<Scalars["String"]>
  cityId?: InputMaybe<Scalars["Int"]>
  countryId?: InputMaybe<Scalars["Int"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
}

/** A connection to a list of `Country` values. */
export type CountriesConnection = {
  __typename?: "CountriesConnection"
  /** A list of edges which contains the `Country` and cursor to aid in pagination. */
  edges: Array<CountriesEdge>
  /** A list of `Country` objects. */
  nodes: Array<Country>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Country` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `Country` edge in the connection. */
export type CountriesEdge = {
  __typename?: "CountriesEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `Country` at the end of the edge. */
  node: Country
}

/** Methods to use when ordering `Country`. */
export enum CountriesOrderBy {
  CountryAsc = "COUNTRY_ASC",
  CountryDesc = "COUNTRY_DESC",
  CountryIdAsc = "COUNTRY_ID_ASC",
  CountryIdDesc = "COUNTRY_ID_DESC",
  LastUpdateAsc = "LAST_UPDATE_ASC",
  LastUpdateDesc = "LAST_UPDATE_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

export type Country = Node & {
  __typename?: "Country"
  /** Reads and enables pagination through a set of `City`. */
  cities: CitiesConnection
  country: Scalars["String"]
  countryId: Scalars["Int"]
  lastUpdate: Scalars["Datetime"]
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
}

export type CountryCitiesArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<CityCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<CitiesOrderBy>>
}

/** A condition to be used against `Country` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CountryCondition = {
  /** Checks for equality with the object’s `country` field. */
  country?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `countryId` field. */
  countryId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
}

/** An input for mutations affecting `Country` */
export type CountryInput = {
  country: Scalars["String"]
  countryId?: InputMaybe<Scalars["Int"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
}

/** Represents an update to a `Country`. Fields that are set will be updated. */
export type CountryPatch = {
  country?: InputMaybe<Scalars["String"]>
  countryId?: InputMaybe<Scalars["Int"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
}

/** All input for the create `Actor` mutation. */
export type CreateActorInput = {
  /** The `Actor` to be created by this mutation. */
  actor: ActorInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
}

/** The output of our create `Actor` mutation. */
export type CreateActorPayload = {
  __typename?: "CreateActorPayload"
  /** The `Actor` that was created by this mutation. */
  actor?: Maybe<Actor>
  /** An edge for our `Actor`. May be used by Relay 1. */
  actorEdge?: Maybe<ActorsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Actor` mutation. */
export type CreateActorPayloadActorEdgeArgs = {
  orderBy?: InputMaybe<Array<ActorsOrderBy>>
}

/** All input for the create `Address` mutation. */
export type CreateAddressInput = {
  /** The `Address` to be created by this mutation. */
  address: AddressInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
}

/** The output of our create `Address` mutation. */
export type CreateAddressPayload = {
  __typename?: "CreateAddressPayload"
  /** The `Address` that was created by this mutation. */
  address?: Maybe<Address>
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>
  /** Reads a single `City` that is related to this `Address`. */
  city?: Maybe<City>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Address` mutation. */
export type CreateAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>
}

/** All input for the create `Category` mutation. */
export type CreateCategoryInput = {
  /** The `Category` to be created by this mutation. */
  category: CategoryInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
}

/** The output of our create `Category` mutation. */
export type CreateCategoryPayload = {
  __typename?: "CreateCategoryPayload"
  /** The `Category` that was created by this mutation. */
  category?: Maybe<Category>
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Category` mutation. */
export type CreateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>
}

/** All input for the create `City` mutation. */
export type CreateCityInput = {
  /** The `City` to be created by this mutation. */
  city: CityInput
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
}

/** The output of our create `City` mutation. */
export type CreateCityPayload = {
  __typename?: "CreateCityPayload"
  /** The `City` that was created by this mutation. */
  city?: Maybe<City>
  /** An edge for our `City`. May be used by Relay 1. */
  cityEdge?: Maybe<CitiesEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Country` that is related to this `City`. */
  country?: Maybe<Country>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `City` mutation. */
export type CreateCityPayloadCityEdgeArgs = {
  orderBy?: InputMaybe<Array<CitiesOrderBy>>
}

/** All input for the create `Country` mutation. */
export type CreateCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The `Country` to be created by this mutation. */
  country: CountryInput
}

/** The output of our create `Country` mutation. */
export type CreateCountryPayload = {
  __typename?: "CreateCountryPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The `Country` that was created by this mutation. */
  country?: Maybe<Country>
  /** An edge for our `Country`. May be used by Relay 1. */
  countryEdge?: Maybe<CountriesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Country` mutation. */
export type CreateCountryPayloadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<CountriesOrderBy>>
}

/** All input for the create `Customer` mutation. */
export type CreateCustomerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The `Customer` to be created by this mutation. */
  customer: CustomerInput
}

/** The output of our create `Customer` mutation. */
export type CreateCustomerPayload = {
  __typename?: "CreateCustomerPayload"
  /** Reads a single `Address` that is related to this `Customer`. */
  address?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The `Customer` that was created by this mutation. */
  customer?: Maybe<Customer>
  /** An edge for our `Customer`. May be used by Relay 1. */
  customerEdge?: Maybe<CustomersEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Customer` mutation. */
export type CreateCustomerPayloadCustomerEdgeArgs = {
  orderBy?: InputMaybe<Array<CustomersOrderBy>>
}

/** All input for the create `FilmActor` mutation. */
export type CreateFilmActorInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The `FilmActor` to be created by this mutation. */
  filmActor: FilmActorInput
}

/** The output of our create `FilmActor` mutation. */
export type CreateFilmActorPayload = {
  __typename?: "CreateFilmActorPayload"
  /** Reads a single `Actor` that is related to this `FilmActor`. */
  actor?: Maybe<Actor>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Film` that is related to this `FilmActor`. */
  film?: Maybe<Film>
  /** The `FilmActor` that was created by this mutation. */
  filmActor?: Maybe<FilmActor>
  /** An edge for our `FilmActor`. May be used by Relay 1. */
  filmActorEdge?: Maybe<FilmActorsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `FilmActor` mutation. */
export type CreateFilmActorPayloadFilmActorEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>
}

/** All input for the create `FilmCategory` mutation. */
export type CreateFilmCategoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The `FilmCategory` to be created by this mutation. */
  filmCategory: FilmCategoryInput
}

/** The output of our create `FilmCategory` mutation. */
export type CreateFilmCategoryPayload = {
  __typename?: "CreateFilmCategoryPayload"
  /** Reads a single `Category` that is related to this `FilmCategory`. */
  category?: Maybe<Category>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Film` that is related to this `FilmCategory`. */
  film?: Maybe<Film>
  /** The `FilmCategory` that was created by this mutation. */
  filmCategory?: Maybe<FilmCategory>
  /** An edge for our `FilmCategory`. May be used by Relay 1. */
  filmCategoryEdge?: Maybe<FilmCategoriesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `FilmCategory` mutation. */
export type CreateFilmCategoryPayloadFilmCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>
}

/** All input for the create `Film` mutation. */
export type CreateFilmInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The `Film` to be created by this mutation. */
  film: FilmInput
}

/** The output of our create `Film` mutation. */
export type CreateFilmPayload = {
  __typename?: "CreateFilmPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The `Film` that was created by this mutation. */
  film?: Maybe<Film>
  /** An edge for our `Film`. May be used by Relay 1. */
  filmEdge?: Maybe<FilmsEdge>
  /** Reads a single `Language` that is related to this `Film`. */
  language?: Maybe<Language>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Film` mutation. */
export type CreateFilmPayloadFilmEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmsOrderBy>>
}

/** All input for the create `Inventory` mutation. */
export type CreateInventoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The `Inventory` to be created by this mutation. */
  inventory: InventoryInput
}

/** The output of our create `Inventory` mutation. */
export type CreateInventoryPayload = {
  __typename?: "CreateInventoryPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Film` that is related to this `Inventory`. */
  film?: Maybe<Film>
  /** The `Inventory` that was created by this mutation. */
  inventory?: Maybe<Inventory>
  /** An edge for our `Inventory`. May be used by Relay 1. */
  inventoryEdge?: Maybe<InventoriesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Inventory` mutation. */
export type CreateInventoryPayloadInventoryEdgeArgs = {
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>
}

/** All input for the create `Language` mutation. */
export type CreateLanguageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The `Language` to be created by this mutation. */
  language: LanguageInput
}

/** The output of our create `Language` mutation. */
export type CreateLanguagePayload = {
  __typename?: "CreateLanguagePayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The `Language` that was created by this mutation. */
  language?: Maybe<Language>
  /** An edge for our `Language`. May be used by Relay 1. */
  languageEdge?: Maybe<LanguagesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our create `Language` mutation. */
export type CreateLanguagePayloadLanguageEdgeArgs = {
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>
}

/** All input for the create `Payment` mutation. */
export type CreatePaymentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The `Payment` to be created by this mutation. */
  payment: PaymentInput
}

/** The output of our create `Payment` mutation. */
export type CreatePaymentPayload = {
  __typename?: "CreatePaymentPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Customer` that is related to this `Payment`. */
  customer?: Maybe<Customer>
  /** The `Payment` that was created by this mutation. */
  payment?: Maybe<Payment>
  /** An edge for our `Payment`. May be used by Relay 1. */
  paymentEdge?: Maybe<PaymentsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Rental` that is related to this `Payment`. */
  rental?: Maybe<Rental>
  /** Reads a single `Staff` that is related to this `Payment`. */
  staff?: Maybe<Staff>
}

/** The output of our create `Payment` mutation. */
export type CreatePaymentPayloadPaymentEdgeArgs = {
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>
}

/** All input for the create `Rental` mutation. */
export type CreateRentalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The `Rental` to be created by this mutation. */
  rental: RentalInput
}

/** The output of our create `Rental` mutation. */
export type CreateRentalPayload = {
  __typename?: "CreateRentalPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Customer` that is related to this `Rental`. */
  customer?: Maybe<Customer>
  /** Reads a single `Inventory` that is related to this `Rental`. */
  inventory?: Maybe<Inventory>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Rental` that was created by this mutation. */
  rental?: Maybe<Rental>
  /** An edge for our `Rental`. May be used by Relay 1. */
  rentalEdge?: Maybe<RentalsEdge>
  /** Reads a single `Staff` that is related to this `Rental`. */
  staff?: Maybe<Staff>
}

/** The output of our create `Rental` mutation. */
export type CreateRentalPayloadRentalEdgeArgs = {
  orderBy?: InputMaybe<Array<RentalsOrderBy>>
}

/** All input for the create `Staff` mutation. */
export type CreateStaffInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The `Staff` to be created by this mutation. */
  staff: StaffInput
}

/** The output of our create `Staff` mutation. */
export type CreateStaffPayload = {
  __typename?: "CreateStaffPayload"
  /** Reads a single `Address` that is related to this `Staff`. */
  address?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Staff` that was created by this mutation. */
  staff?: Maybe<Staff>
  /** An edge for our `Staff`. May be used by Relay 1. */
  staffEdge?: Maybe<StaffEdge>
}

/** The output of our create `Staff` mutation. */
export type CreateStaffPayloadStaffEdgeArgs = {
  orderBy?: InputMaybe<Array<StaffOrderBy>>
}

/** All input for the create `Store` mutation. */
export type CreateStoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The `Store` to be created by this mutation. */
  store: StoreInput
}

/** The output of our create `Store` mutation. */
export type CreateStorePayload = {
  __typename?: "CreateStorePayload"
  /** Reads a single `Address` that is related to this `Store`. */
  address?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Staff` that is related to this `Store`. */
  managerStaff?: Maybe<Staff>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Store` that was created by this mutation. */
  store?: Maybe<Store>
  /** An edge for our `Store`. May be used by Relay 1. */
  storeEdge?: Maybe<StoresEdge>
}

/** The output of our create `Store` mutation. */
export type CreateStorePayloadStoreEdgeArgs = {
  orderBy?: InputMaybe<Array<StoresOrderBy>>
}

export type Customer = Node & {
  __typename?: "Customer"
  active?: Maybe<Scalars["Int"]>
  activebool: Scalars["Boolean"]
  /** Reads a single `Address` that is related to this `Customer`. */
  address?: Maybe<Address>
  addressId: Scalars["Int"]
  createDate: Scalars["Date"]
  customerId: Scalars["Int"]
  email?: Maybe<Scalars["String"]>
  firstName: Scalars["String"]
  lastName: Scalars["String"]
  lastUpdate?: Maybe<Scalars["Datetime"]>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
  /** Reads and enables pagination through a set of `Payment`. */
  payments: PaymentsConnection
  /** Reads and enables pagination through a set of `Rental`. */
  rentals: RentalsConnection
  storeId: Scalars["Int"]
}

export type CustomerPaymentsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<PaymentCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>
}

export type CustomerRentalsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<RentalCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<RentalsOrderBy>>
}

/**
 * A condition to be used against `Customer` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type CustomerCondition = {
  /** Checks for equality with the object’s `active` field. */
  active?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `activebool` field. */
  activebool?: InputMaybe<Scalars["Boolean"]>
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `createDate` field. */
  createDate?: InputMaybe<Scalars["Date"]>
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars["Int"]>
}

/** An input for mutations affecting `Customer` */
export type CustomerInput = {
  active?: InputMaybe<Scalars["Int"]>
  activebool?: InputMaybe<Scalars["Boolean"]>
  addressId: Scalars["Int"]
  createDate?: InputMaybe<Scalars["Date"]>
  customerId?: InputMaybe<Scalars["Int"]>
  email?: InputMaybe<Scalars["String"]>
  firstName: Scalars["String"]
  lastName: Scalars["String"]
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  storeId: Scalars["Int"]
}

export type CustomerList = {
  __typename?: "CustomerList"
  address?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["Int"]>
  name?: Maybe<Scalars["String"]>
  notes?: Maybe<Scalars["String"]>
  phone?: Maybe<Scalars["String"]>
  sid?: Maybe<Scalars["Int"]>
  zipCode?: Maybe<Scalars["String"]>
}

/**
 * A condition to be used against `CustomerList` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type CustomerListCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `country` field. */
  country?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `notes` field. */
  notes?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `phone` field. */
  phone?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `sid` field. */
  sid?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `zipCode` field. */
  zipCode?: InputMaybe<Scalars["String"]>
}

/** A connection to a list of `CustomerList` values. */
export type CustomerListsConnection = {
  __typename?: "CustomerListsConnection"
  /** A list of edges which contains the `CustomerList` and cursor to aid in pagination. */
  edges: Array<CustomerListsEdge>
  /** A list of `CustomerList` objects. */
  nodes: Array<CustomerList>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `CustomerList` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `CustomerList` edge in the connection. */
export type CustomerListsEdge = {
  __typename?: "CustomerListsEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `CustomerList` at the end of the edge. */
  node: CustomerList
}

/** Methods to use when ordering `CustomerList`. */
export enum CustomerListsOrderBy {
  AddressAsc = "ADDRESS_ASC",
  AddressDesc = "ADDRESS_DESC",
  CityAsc = "CITY_ASC",
  CityDesc = "CITY_DESC",
  CountryAsc = "COUNTRY_ASC",
  CountryDesc = "COUNTRY_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
  Natural = "NATURAL",
  NotesAsc = "NOTES_ASC",
  NotesDesc = "NOTES_DESC",
  PhoneAsc = "PHONE_ASC",
  PhoneDesc = "PHONE_DESC",
  SidAsc = "SID_ASC",
  SidDesc = "SID_DESC",
  ZipCodeAsc = "ZIP_CODE_ASC",
  ZipCodeDesc = "ZIP_CODE_DESC",
}

/** Represents an update to a `Customer`. Fields that are set will be updated. */
export type CustomerPatch = {
  active?: InputMaybe<Scalars["Int"]>
  activebool?: InputMaybe<Scalars["Boolean"]>
  addressId?: InputMaybe<Scalars["Int"]>
  createDate?: InputMaybe<Scalars["Date"]>
  customerId?: InputMaybe<Scalars["Int"]>
  email?: InputMaybe<Scalars["String"]>
  firstName?: InputMaybe<Scalars["String"]>
  lastName?: InputMaybe<Scalars["String"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  storeId?: InputMaybe<Scalars["Int"]>
}

/** A connection to a list of `Customer` values. */
export type CustomersConnection = {
  __typename?: "CustomersConnection"
  /** A list of edges which contains the `Customer` and cursor to aid in pagination. */
  edges: Array<CustomersEdge>
  /** A list of `Customer` objects. */
  nodes: Array<Customer>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Customer` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `Customer` edge in the connection. */
export type CustomersEdge = {
  __typename?: "CustomersEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `Customer` at the end of the edge. */
  node: Customer
}

/** Methods to use when ordering `Customer`. */
export enum CustomersOrderBy {
  ActiveboolAsc = "ACTIVEBOOL_ASC",
  ActiveboolDesc = "ACTIVEBOOL_DESC",
  ActiveAsc = "ACTIVE_ASC",
  ActiveDesc = "ACTIVE_DESC",
  AddressIdAsc = "ADDRESS_ID_ASC",
  AddressIdDesc = "ADDRESS_ID_DESC",
  CreateDateAsc = "CREATE_DATE_ASC",
  CreateDateDesc = "CREATE_DATE_DESC",
  CustomerIdAsc = "CUSTOMER_ID_ASC",
  CustomerIdDesc = "CUSTOMER_ID_DESC",
  EmailAsc = "EMAIL_ASC",
  EmailDesc = "EMAIL_DESC",
  FirstNameAsc = "FIRST_NAME_ASC",
  FirstNameDesc = "FIRST_NAME_DESC",
  LastNameAsc = "LAST_NAME_ASC",
  LastNameDesc = "LAST_NAME_DESC",
  LastUpdateAsc = "LAST_UPDATE_ASC",
  LastUpdateDesc = "LAST_UPDATE_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  StoreIdAsc = "STORE_ID_ASC",
  StoreIdDesc = "STORE_ID_DESC",
}

/** All input for the `deleteActorByNodeId` mutation. */
export type DeleteActorByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Actor` to be deleted. */
  nodeId: Scalars["ID"]
}

/** All input for the `deleteActor` mutation. */
export type DeleteActorInput = {
  actorId: Scalars["Int"]
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
}

/** The output of our delete `Actor` mutation. */
export type DeleteActorPayload = {
  __typename?: "DeleteActorPayload"
  /** The `Actor` that was deleted by this mutation. */
  actor?: Maybe<Actor>
  /** An edge for our `Actor`. May be used by Relay 1. */
  actorEdge?: Maybe<ActorsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  deletedActorNodeId?: Maybe<Scalars["ID"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Actor` mutation. */
export type DeleteActorPayloadActorEdgeArgs = {
  orderBy?: InputMaybe<Array<ActorsOrderBy>>
}

/** All input for the `deleteAddressByNodeId` mutation. */
export type DeleteAddressByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Address` to be deleted. */
  nodeId: Scalars["ID"]
}

/** All input for the `deleteAddress` mutation. */
export type DeleteAddressInput = {
  addressId: Scalars["Int"]
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
}

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayload = {
  __typename?: "DeleteAddressPayload"
  /** The `Address` that was deleted by this mutation. */
  address?: Maybe<Address>
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>
  /** Reads a single `City` that is related to this `Address`. */
  city?: Maybe<City>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  deletedAddressNodeId?: Maybe<Scalars["ID"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Address` mutation. */
export type DeleteAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>
}

/** All input for the `deleteCategoryByNodeId` mutation. */
export type DeleteCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Category` to be deleted. */
  nodeId: Scalars["ID"]
}

/** All input for the `deleteCategory` mutation. */
export type DeleteCategoryInput = {
  categoryId: Scalars["Int"]
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
}

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayload = {
  __typename?: "DeleteCategoryPayload"
  /** The `Category` that was deleted by this mutation. */
  category?: Maybe<Category>
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  deletedCategoryNodeId?: Maybe<Scalars["ID"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Category` mutation. */
export type DeleteCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>
}

/** All input for the `deleteCityByNodeId` mutation. */
export type DeleteCityByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `City` to be deleted. */
  nodeId: Scalars["ID"]
}

/** All input for the `deleteCity` mutation. */
export type DeleteCityInput = {
  cityId: Scalars["Int"]
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
}

/** The output of our delete `City` mutation. */
export type DeleteCityPayload = {
  __typename?: "DeleteCityPayload"
  /** The `City` that was deleted by this mutation. */
  city?: Maybe<City>
  /** An edge for our `City`. May be used by Relay 1. */
  cityEdge?: Maybe<CitiesEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Country` that is related to this `City`. */
  country?: Maybe<Country>
  deletedCityNodeId?: Maybe<Scalars["ID"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `City` mutation. */
export type DeleteCityPayloadCityEdgeArgs = {
  orderBy?: InputMaybe<Array<CitiesOrderBy>>
}

/** All input for the `deleteCountryByNodeId` mutation. */
export type DeleteCountryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Country` to be deleted. */
  nodeId: Scalars["ID"]
}

/** All input for the `deleteCountry` mutation. */
export type DeleteCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  countryId: Scalars["Int"]
}

/** The output of our delete `Country` mutation. */
export type DeleteCountryPayload = {
  __typename?: "DeleteCountryPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The `Country` that was deleted by this mutation. */
  country?: Maybe<Country>
  /** An edge for our `Country`. May be used by Relay 1. */
  countryEdge?: Maybe<CountriesEdge>
  deletedCountryNodeId?: Maybe<Scalars["ID"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Country` mutation. */
export type DeleteCountryPayloadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<CountriesOrderBy>>
}

/** All input for the `deleteCustomerByNodeId` mutation. */
export type DeleteCustomerByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Customer` to be deleted. */
  nodeId: Scalars["ID"]
}

/** All input for the `deleteCustomer` mutation. */
export type DeleteCustomerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  customerId: Scalars["Int"]
}

/** The output of our delete `Customer` mutation. */
export type DeleteCustomerPayload = {
  __typename?: "DeleteCustomerPayload"
  /** Reads a single `Address` that is related to this `Customer`. */
  address?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The `Customer` that was deleted by this mutation. */
  customer?: Maybe<Customer>
  /** An edge for our `Customer`. May be used by Relay 1. */
  customerEdge?: Maybe<CustomersEdge>
  deletedCustomerNodeId?: Maybe<Scalars["ID"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Customer` mutation. */
export type DeleteCustomerPayloadCustomerEdgeArgs = {
  orderBy?: InputMaybe<Array<CustomersOrderBy>>
}

/** All input for the `deleteFilmActorByNodeId` mutation. */
export type DeleteFilmActorByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `FilmActor` to be deleted. */
  nodeId: Scalars["ID"]
}

/** All input for the `deleteFilmActor` mutation. */
export type DeleteFilmActorInput = {
  actorId: Scalars["Int"]
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  filmId: Scalars["Int"]
}

/** The output of our delete `FilmActor` mutation. */
export type DeleteFilmActorPayload = {
  __typename?: "DeleteFilmActorPayload"
  /** Reads a single `Actor` that is related to this `FilmActor`. */
  actor?: Maybe<Actor>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  deletedFilmActorNodeId?: Maybe<Scalars["ID"]>
  /** Reads a single `Film` that is related to this `FilmActor`. */
  film?: Maybe<Film>
  /** The `FilmActor` that was deleted by this mutation. */
  filmActor?: Maybe<FilmActor>
  /** An edge for our `FilmActor`. May be used by Relay 1. */
  filmActorEdge?: Maybe<FilmActorsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `FilmActor` mutation. */
export type DeleteFilmActorPayloadFilmActorEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>
}

/** All input for the `deleteFilmByNodeId` mutation. */
export type DeleteFilmByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Film` to be deleted. */
  nodeId: Scalars["ID"]
}

/** All input for the `deleteFilmCategoryByNodeId` mutation. */
export type DeleteFilmCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `FilmCategory` to be deleted. */
  nodeId: Scalars["ID"]
}

/** All input for the `deleteFilmCategory` mutation. */
export type DeleteFilmCategoryInput = {
  categoryId: Scalars["Int"]
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  filmId: Scalars["Int"]
}

/** The output of our delete `FilmCategory` mutation. */
export type DeleteFilmCategoryPayload = {
  __typename?: "DeleteFilmCategoryPayload"
  /** Reads a single `Category` that is related to this `FilmCategory`. */
  category?: Maybe<Category>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  deletedFilmCategoryNodeId?: Maybe<Scalars["ID"]>
  /** Reads a single `Film` that is related to this `FilmCategory`. */
  film?: Maybe<Film>
  /** The `FilmCategory` that was deleted by this mutation. */
  filmCategory?: Maybe<FilmCategory>
  /** An edge for our `FilmCategory`. May be used by Relay 1. */
  filmCategoryEdge?: Maybe<FilmCategoriesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `FilmCategory` mutation. */
export type DeleteFilmCategoryPayloadFilmCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>
}

/** All input for the `deleteFilm` mutation. */
export type DeleteFilmInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  filmId: Scalars["Int"]
}

/** The output of our delete `Film` mutation. */
export type DeleteFilmPayload = {
  __typename?: "DeleteFilmPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  deletedFilmNodeId?: Maybe<Scalars["ID"]>
  /** The `Film` that was deleted by this mutation. */
  film?: Maybe<Film>
  /** An edge for our `Film`. May be used by Relay 1. */
  filmEdge?: Maybe<FilmsEdge>
  /** Reads a single `Language` that is related to this `Film`. */
  language?: Maybe<Language>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Film` mutation. */
export type DeleteFilmPayloadFilmEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmsOrderBy>>
}

/** All input for the `deleteInventoryByNodeId` mutation. */
export type DeleteInventoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Inventory` to be deleted. */
  nodeId: Scalars["ID"]
}

/** All input for the `deleteInventory` mutation. */
export type DeleteInventoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  inventoryId: Scalars["Int"]
}

/** The output of our delete `Inventory` mutation. */
export type DeleteInventoryPayload = {
  __typename?: "DeleteInventoryPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  deletedInventoryNodeId?: Maybe<Scalars["ID"]>
  /** Reads a single `Film` that is related to this `Inventory`. */
  film?: Maybe<Film>
  /** The `Inventory` that was deleted by this mutation. */
  inventory?: Maybe<Inventory>
  /** An edge for our `Inventory`. May be used by Relay 1. */
  inventoryEdge?: Maybe<InventoriesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Inventory` mutation. */
export type DeleteInventoryPayloadInventoryEdgeArgs = {
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>
}

/** All input for the `deleteLanguageByNodeId` mutation. */
export type DeleteLanguageByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Language` to be deleted. */
  nodeId: Scalars["ID"]
}

/** All input for the `deleteLanguage` mutation. */
export type DeleteLanguageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  languageId: Scalars["Int"]
}

/** The output of our delete `Language` mutation. */
export type DeleteLanguagePayload = {
  __typename?: "DeleteLanguagePayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  deletedLanguageNodeId?: Maybe<Scalars["ID"]>
  /** The `Language` that was deleted by this mutation. */
  language?: Maybe<Language>
  /** An edge for our `Language`. May be used by Relay 1. */
  languageEdge?: Maybe<LanguagesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our delete `Language` mutation. */
export type DeleteLanguagePayloadLanguageEdgeArgs = {
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>
}

/** All input for the `deletePaymentByNodeId` mutation. */
export type DeletePaymentByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Payment` to be deleted. */
  nodeId: Scalars["ID"]
}

/** All input for the `deletePayment` mutation. */
export type DeletePaymentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  paymentId: Scalars["Int"]
}

/** The output of our delete `Payment` mutation. */
export type DeletePaymentPayload = {
  __typename?: "DeletePaymentPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Customer` that is related to this `Payment`. */
  customer?: Maybe<Customer>
  deletedPaymentNodeId?: Maybe<Scalars["ID"]>
  /** The `Payment` that was deleted by this mutation. */
  payment?: Maybe<Payment>
  /** An edge for our `Payment`. May be used by Relay 1. */
  paymentEdge?: Maybe<PaymentsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Rental` that is related to this `Payment`. */
  rental?: Maybe<Rental>
  /** Reads a single `Staff` that is related to this `Payment`. */
  staff?: Maybe<Staff>
}

/** The output of our delete `Payment` mutation. */
export type DeletePaymentPayloadPaymentEdgeArgs = {
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>
}

/** All input for the `deleteRentalByNodeId` mutation. */
export type DeleteRentalByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Rental` to be deleted. */
  nodeId: Scalars["ID"]
}

/** All input for the `deleteRental` mutation. */
export type DeleteRentalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  rentalId: Scalars["Int"]
}

/** The output of our delete `Rental` mutation. */
export type DeleteRentalPayload = {
  __typename?: "DeleteRentalPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Customer` that is related to this `Rental`. */
  customer?: Maybe<Customer>
  deletedRentalNodeId?: Maybe<Scalars["ID"]>
  /** Reads a single `Inventory` that is related to this `Rental`. */
  inventory?: Maybe<Inventory>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Rental` that was deleted by this mutation. */
  rental?: Maybe<Rental>
  /** An edge for our `Rental`. May be used by Relay 1. */
  rentalEdge?: Maybe<RentalsEdge>
  /** Reads a single `Staff` that is related to this `Rental`. */
  staff?: Maybe<Staff>
}

/** The output of our delete `Rental` mutation. */
export type DeleteRentalPayloadRentalEdgeArgs = {
  orderBy?: InputMaybe<Array<RentalsOrderBy>>
}

/** All input for the `deleteStaffByNodeId` mutation. */
export type DeleteStaffByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Staff` to be deleted. */
  nodeId: Scalars["ID"]
}

/** All input for the `deleteStaff` mutation. */
export type DeleteStaffInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  staffId: Scalars["Int"]
}

/** The output of our delete `Staff` mutation. */
export type DeleteStaffPayload = {
  __typename?: "DeleteStaffPayload"
  /** Reads a single `Address` that is related to this `Staff`. */
  address?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  deletedStaffNodeId?: Maybe<Scalars["ID"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Staff` that was deleted by this mutation. */
  staff?: Maybe<Staff>
  /** An edge for our `Staff`. May be used by Relay 1. */
  staffEdge?: Maybe<StaffEdge>
}

/** The output of our delete `Staff` mutation. */
export type DeleteStaffPayloadStaffEdgeArgs = {
  orderBy?: InputMaybe<Array<StaffOrderBy>>
}

/** All input for the `deleteStoreByNodeId` mutation. */
export type DeleteStoreByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Store` to be deleted. */
  nodeId: Scalars["ID"]
}

/** All input for the `deleteStore` mutation. */
export type DeleteStoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  storeId: Scalars["Int"]
}

/** The output of our delete `Store` mutation. */
export type DeleteStorePayload = {
  __typename?: "DeleteStorePayload"
  /** Reads a single `Address` that is related to this `Store`. */
  address?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  deletedStoreNodeId?: Maybe<Scalars["ID"]>
  /** Reads a single `Staff` that is related to this `Store`. */
  managerStaff?: Maybe<Staff>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Store` that was deleted by this mutation. */
  store?: Maybe<Store>
  /** An edge for our `Store`. May be used by Relay 1. */
  storeEdge?: Maybe<StoresEdge>
}

/** The output of our delete `Store` mutation. */
export type DeleteStorePayloadStoreEdgeArgs = {
  orderBy?: InputMaybe<Array<StoresOrderBy>>
}

export type Film = Node & {
  __typename?: "Film"
  description?: Maybe<Scalars["String"]>
  /** Reads and enables pagination through a set of `FilmActor`. */
  filmActors: FilmActorsConnection
  /** Reads and enables pagination through a set of `FilmCategory`. */
  filmCategories: FilmCategoriesConnection
  filmId: Scalars["Int"]
  fulltext: Scalars["String"]
  /** Reads and enables pagination through a set of `Inventory`. */
  inventories: InventoriesConnection
  /** Reads a single `Language` that is related to this `Film`. */
  language?: Maybe<Language>
  languageId: Scalars["Int"]
  lastUpdate: Scalars["Datetime"]
  length?: Maybe<Scalars["Int"]>
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
  rating?: Maybe<MpaaRating>
  releaseYear?: Maybe<Scalars["Year"]>
  rentalDuration: Scalars["Int"]
  rentalRate: Scalars["BigFloat"]
  replacementCost: Scalars["BigFloat"]
  specialFeatures?: Maybe<Array<Maybe<Scalars["String"]>>>
  title: Scalars["String"]
}

export type FilmFilmActorsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<FilmActorCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>
}

export type FilmFilmCategoriesArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<FilmCategoryCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>
}

export type FilmInventoriesArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<InventoryCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>
}

export type FilmActor = Node & {
  __typename?: "FilmActor"
  /** Reads a single `Actor` that is related to this `FilmActor`. */
  actor?: Maybe<Actor>
  actorId: Scalars["Int"]
  /** Reads a single `Film` that is related to this `FilmActor`. */
  film?: Maybe<Film>
  filmId: Scalars["Int"]
  lastUpdate: Scalars["Datetime"]
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
}

/**
 * A condition to be used against `FilmActor` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FilmActorCondition = {
  /** Checks for equality with the object’s `actorId` field. */
  actorId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
}

/** An input for mutations affecting `FilmActor` */
export type FilmActorInput = {
  actorId: Scalars["Int"]
  filmId: Scalars["Int"]
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
}

/** Represents an update to a `FilmActor`. Fields that are set will be updated. */
export type FilmActorPatch = {
  actorId?: InputMaybe<Scalars["Int"]>
  filmId?: InputMaybe<Scalars["Int"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
}

/** A connection to a list of `FilmActor` values. */
export type FilmActorsConnection = {
  __typename?: "FilmActorsConnection"
  /** A list of edges which contains the `FilmActor` and cursor to aid in pagination. */
  edges: Array<FilmActorsEdge>
  /** A list of `FilmActor` objects. */
  nodes: Array<FilmActor>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `FilmActor` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `FilmActor` edge in the connection. */
export type FilmActorsEdge = {
  __typename?: "FilmActorsEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `FilmActor` at the end of the edge. */
  node: FilmActor
}

/** Methods to use when ordering `FilmActor`. */
export enum FilmActorsOrderBy {
  ActorIdAsc = "ACTOR_ID_ASC",
  ActorIdDesc = "ACTOR_ID_DESC",
  FilmIdAsc = "FILM_ID_ASC",
  FilmIdDesc = "FILM_ID_DESC",
  LastUpdateAsc = "LAST_UPDATE_ASC",
  LastUpdateDesc = "LAST_UPDATE_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

/** A connection to a list of `FilmCategory` values. */
export type FilmCategoriesConnection = {
  __typename?: "FilmCategoriesConnection"
  /** A list of edges which contains the `FilmCategory` and cursor to aid in pagination. */
  edges: Array<FilmCategoriesEdge>
  /** A list of `FilmCategory` objects. */
  nodes: Array<FilmCategory>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `FilmCategory` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `FilmCategory` edge in the connection. */
export type FilmCategoriesEdge = {
  __typename?: "FilmCategoriesEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `FilmCategory` at the end of the edge. */
  node: FilmCategory
}

/** Methods to use when ordering `FilmCategory`. */
export enum FilmCategoriesOrderBy {
  CategoryIdAsc = "CATEGORY_ID_ASC",
  CategoryIdDesc = "CATEGORY_ID_DESC",
  FilmIdAsc = "FILM_ID_ASC",
  FilmIdDesc = "FILM_ID_DESC",
  LastUpdateAsc = "LAST_UPDATE_ASC",
  LastUpdateDesc = "LAST_UPDATE_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

export type FilmCategory = Node & {
  __typename?: "FilmCategory"
  /** Reads a single `Category` that is related to this `FilmCategory`. */
  category?: Maybe<Category>
  categoryId: Scalars["Int"]
  /** Reads a single `Film` that is related to this `FilmCategory`. */
  film?: Maybe<Film>
  filmId: Scalars["Int"]
  lastUpdate: Scalars["Datetime"]
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
}

/**
 * A condition to be used against `FilmCategory` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type FilmCategoryCondition = {
  /** Checks for equality with the object’s `categoryId` field. */
  categoryId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
}

/** An input for mutations affecting `FilmCategory` */
export type FilmCategoryInput = {
  categoryId: Scalars["Int"]
  filmId: Scalars["Int"]
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
}

/** Represents an update to a `FilmCategory`. Fields that are set will be updated. */
export type FilmCategoryPatch = {
  categoryId?: InputMaybe<Scalars["Int"]>
  filmId?: InputMaybe<Scalars["Int"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
}

/** A condition to be used against `Film` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type FilmCondition = {
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `fulltext` field. */
  fulltext?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `languageId` field. */
  languageId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  /** Checks for equality with the object’s `length` field. */
  length?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `rating` field. */
  rating?: InputMaybe<MpaaRating>
  /** Checks for equality with the object’s `releaseYear` field. */
  releaseYear?: InputMaybe<Scalars["Year"]>
  /** Checks for equality with the object’s `rentalDuration` field. */
  rentalDuration?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `rentalRate` field. */
  rentalRate?: InputMaybe<Scalars["BigFloat"]>
  /** Checks for equality with the object’s `replacementCost` field. */
  replacementCost?: InputMaybe<Scalars["BigFloat"]>
  /** Checks for equality with the object’s `specialFeatures` field. */
  specialFeatures?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars["String"]>
}

/** All input for the `filmInStock` mutation. */
export type FilmInStockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  pFilmId?: InputMaybe<Scalars["Int"]>
  pStoreId?: InputMaybe<Scalars["Int"]>
}

/** The output of our `filmInStock` mutation. */
export type FilmInStockPayload = {
  __typename?: "FilmInStockPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  pFilmCounts?: Maybe<Array<Maybe<Scalars["Int"]>>>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** An input for mutations affecting `Film` */
export type FilmInput = {
  description?: InputMaybe<Scalars["String"]>
  filmId?: InputMaybe<Scalars["Int"]>
  fulltext: Scalars["String"]
  languageId: Scalars["Int"]
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  length?: InputMaybe<Scalars["Int"]>
  rating?: InputMaybe<MpaaRating>
  releaseYear?: InputMaybe<Scalars["Year"]>
  rentalDuration?: InputMaybe<Scalars["Int"]>
  rentalRate?: InputMaybe<Scalars["BigFloat"]>
  replacementCost?: InputMaybe<Scalars["BigFloat"]>
  specialFeatures?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  title: Scalars["String"]
}

export type FilmList = {
  __typename?: "FilmList"
  actors?: Maybe<Scalars["String"]>
  category?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  fid?: Maybe<Scalars["Int"]>
  length?: Maybe<Scalars["Int"]>
  price?: Maybe<Scalars["BigFloat"]>
  rating?: Maybe<MpaaRating>
  title?: Maybe<Scalars["String"]>
}

/**
 * A condition to be used against `FilmList` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type FilmListCondition = {
  /** Checks for equality with the object’s `actors` field. */
  actors?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `category` field. */
  category?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `fid` field. */
  fid?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `length` field. */
  length?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `price` field. */
  price?: InputMaybe<Scalars["BigFloat"]>
  /** Checks for equality with the object’s `rating` field. */
  rating?: InputMaybe<MpaaRating>
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars["String"]>
}

/** A connection to a list of `FilmList` values. */
export type FilmListsConnection = {
  __typename?: "FilmListsConnection"
  /** A list of edges which contains the `FilmList` and cursor to aid in pagination. */
  edges: Array<FilmListsEdge>
  /** A list of `FilmList` objects. */
  nodes: Array<FilmList>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `FilmList` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `FilmList` edge in the connection. */
export type FilmListsEdge = {
  __typename?: "FilmListsEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `FilmList` at the end of the edge. */
  node: FilmList
}

/** Methods to use when ordering `FilmList`. */
export enum FilmListsOrderBy {
  ActorsAsc = "ACTORS_ASC",
  ActorsDesc = "ACTORS_DESC",
  CategoryAsc = "CATEGORY_ASC",
  CategoryDesc = "CATEGORY_DESC",
  DescriptionAsc = "DESCRIPTION_ASC",
  DescriptionDesc = "DESCRIPTION_DESC",
  FidAsc = "FID_ASC",
  FidDesc = "FID_DESC",
  LengthAsc = "LENGTH_ASC",
  LengthDesc = "LENGTH_DESC",
  Natural = "NATURAL",
  PriceAsc = "PRICE_ASC",
  PriceDesc = "PRICE_DESC",
  RatingAsc = "RATING_ASC",
  RatingDesc = "RATING_DESC",
  TitleAsc = "TITLE_ASC",
  TitleDesc = "TITLE_DESC",
}

/** All input for the `filmNotInStock` mutation. */
export type FilmNotInStockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  pFilmId?: InputMaybe<Scalars["Int"]>
  pStoreId?: InputMaybe<Scalars["Int"]>
}

/** The output of our `filmNotInStock` mutation. */
export type FilmNotInStockPayload = {
  __typename?: "FilmNotInStockPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  pFilmCounts?: Maybe<Array<Maybe<Scalars["Int"]>>>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** Represents an update to a `Film`. Fields that are set will be updated. */
export type FilmPatch = {
  description?: InputMaybe<Scalars["String"]>
  filmId?: InputMaybe<Scalars["Int"]>
  fulltext?: InputMaybe<Scalars["String"]>
  languageId?: InputMaybe<Scalars["Int"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  length?: InputMaybe<Scalars["Int"]>
  rating?: InputMaybe<MpaaRating>
  releaseYear?: InputMaybe<Scalars["Year"]>
  rentalDuration?: InputMaybe<Scalars["Int"]>
  rentalRate?: InputMaybe<Scalars["BigFloat"]>
  replacementCost?: InputMaybe<Scalars["BigFloat"]>
  specialFeatures?: InputMaybe<Array<InputMaybe<Scalars["String"]>>>
  title?: InputMaybe<Scalars["String"]>
}

/** A connection to a list of `Film` values. */
export type FilmsConnection = {
  __typename?: "FilmsConnection"
  /** A list of edges which contains the `Film` and cursor to aid in pagination. */
  edges: Array<FilmsEdge>
  /** A list of `Film` objects. */
  nodes: Array<Film>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Film` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `Film` edge in the connection. */
export type FilmsEdge = {
  __typename?: "FilmsEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `Film` at the end of the edge. */
  node: Film
}

/** Methods to use when ordering `Film`. */
export enum FilmsOrderBy {
  DescriptionAsc = "DESCRIPTION_ASC",
  DescriptionDesc = "DESCRIPTION_DESC",
  FilmIdAsc = "FILM_ID_ASC",
  FilmIdDesc = "FILM_ID_DESC",
  FulltextAsc = "FULLTEXT_ASC",
  FulltextDesc = "FULLTEXT_DESC",
  LanguageIdAsc = "LANGUAGE_ID_ASC",
  LanguageIdDesc = "LANGUAGE_ID_DESC",
  LastUpdateAsc = "LAST_UPDATE_ASC",
  LastUpdateDesc = "LAST_UPDATE_DESC",
  LengthAsc = "LENGTH_ASC",
  LengthDesc = "LENGTH_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  RatingAsc = "RATING_ASC",
  RatingDesc = "RATING_DESC",
  ReleaseYearAsc = "RELEASE_YEAR_ASC",
  ReleaseYearDesc = "RELEASE_YEAR_DESC",
  RentalDurationAsc = "RENTAL_DURATION_ASC",
  RentalDurationDesc = "RENTAL_DURATION_DESC",
  RentalRateAsc = "RENTAL_RATE_ASC",
  RentalRateDesc = "RENTAL_RATE_DESC",
  ReplacementCostAsc = "REPLACEMENT_COST_ASC",
  ReplacementCostDesc = "REPLACEMENT_COST_DESC",
  SpecialFeaturesAsc = "SPECIAL_FEATURES_ASC",
  SpecialFeaturesDesc = "SPECIAL_FEATURES_DESC",
  TitleAsc = "TITLE_ASC",
  TitleDesc = "TITLE_DESC",
}

/** All input for the `getCustomerBalance` mutation. */
export type GetCustomerBalanceInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  pCustomerId?: InputMaybe<Scalars["Int"]>
  pEffectiveDate?: InputMaybe<Scalars["Datetime"]>
}

/** The output of our `getCustomerBalance` mutation. */
export type GetCustomerBalancePayload = {
  __typename?: "GetCustomerBalancePayload"
  bigFloat?: Maybe<Scalars["BigFloat"]>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** A connection to a list of `Inventory` values. */
export type InventoriesConnection = {
  __typename?: "InventoriesConnection"
  /** A list of edges which contains the `Inventory` and cursor to aid in pagination. */
  edges: Array<InventoriesEdge>
  /** A list of `Inventory` objects. */
  nodes: Array<Inventory>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Inventory` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `Inventory` edge in the connection. */
export type InventoriesEdge = {
  __typename?: "InventoriesEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `Inventory` at the end of the edge. */
  node: Inventory
}

/** Methods to use when ordering `Inventory`. */
export enum InventoriesOrderBy {
  FilmIdAsc = "FILM_ID_ASC",
  FilmIdDesc = "FILM_ID_DESC",
  InventoryIdAsc = "INVENTORY_ID_ASC",
  InventoryIdDesc = "INVENTORY_ID_DESC",
  LastUpdateAsc = "LAST_UPDATE_ASC",
  LastUpdateDesc = "LAST_UPDATE_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  StoreIdAsc = "STORE_ID_ASC",
  StoreIdDesc = "STORE_ID_DESC",
}

export type Inventory = Node & {
  __typename?: "Inventory"
  /** Reads a single `Film` that is related to this `Inventory`. */
  film?: Maybe<Film>
  filmId: Scalars["Int"]
  inventoryId: Scalars["Int"]
  lastUpdate: Scalars["Datetime"]
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
  /** Reads and enables pagination through a set of `Rental`. */
  rentals: RentalsConnection
  storeId: Scalars["Int"]
}

export type InventoryRentalsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<RentalCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<RentalsOrderBy>>
}

/**
 * A condition to be used against `Inventory` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type InventoryCondition = {
  /** Checks for equality with the object’s `filmId` field. */
  filmId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `inventoryId` field. */
  inventoryId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars["Int"]>
}

/** All input for the `inventoryHeldByCustomer` mutation. */
export type InventoryHeldByCustomerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  pInventoryId?: InputMaybe<Scalars["Int"]>
}

/** The output of our `inventoryHeldByCustomer` mutation. */
export type InventoryHeldByCustomerPayload = {
  __typename?: "InventoryHeldByCustomerPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  integer?: Maybe<Scalars["Int"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** All input for the `inventoryInStock` mutation. */
export type InventoryInStockInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  pInventoryId?: InputMaybe<Scalars["Int"]>
}

/** The output of our `inventoryInStock` mutation. */
export type InventoryInStockPayload = {
  __typename?: "InventoryInStockPayload"
  boolean?: Maybe<Scalars["Boolean"]>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** An input for mutations affecting `Inventory` */
export type InventoryInput = {
  filmId: Scalars["Int"]
  inventoryId?: InputMaybe<Scalars["Int"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  storeId: Scalars["Int"]
}

/** Represents an update to a `Inventory`. Fields that are set will be updated. */
export type InventoryPatch = {
  filmId?: InputMaybe<Scalars["Int"]>
  inventoryId?: InputMaybe<Scalars["Int"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  storeId?: InputMaybe<Scalars["Int"]>
}

export type Language = Node & {
  __typename?: "Language"
  /** Reads and enables pagination through a set of `Film`. */
  films: FilmsConnection
  languageId: Scalars["Int"]
  lastUpdate: Scalars["Datetime"]
  name: Scalars["String"]
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
}

export type LanguageFilmsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<FilmCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<FilmsOrderBy>>
}

/**
 * A condition to be used against `Language` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type LanguageCondition = {
  /** Checks for equality with the object’s `languageId` field. */
  languageId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars["String"]>
}

/** An input for mutations affecting `Language` */
export type LanguageInput = {
  languageId?: InputMaybe<Scalars["Int"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  name: Scalars["String"]
}

/** Represents an update to a `Language`. Fields that are set will be updated. */
export type LanguagePatch = {
  languageId?: InputMaybe<Scalars["Int"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  name?: InputMaybe<Scalars["String"]>
}

/** A connection to a list of `Language` values. */
export type LanguagesConnection = {
  __typename?: "LanguagesConnection"
  /** A list of edges which contains the `Language` and cursor to aid in pagination. */
  edges: Array<LanguagesEdge>
  /** A list of `Language` objects. */
  nodes: Array<Language>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Language` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `Language` edge in the connection. */
export type LanguagesEdge = {
  __typename?: "LanguagesEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `Language` at the end of the edge. */
  node: Language
}

/** Methods to use when ordering `Language`. */
export enum LanguagesOrderBy {
  LanguageIdAsc = "LANGUAGE_ID_ASC",
  LanguageIdDesc = "LANGUAGE_ID_DESC",
  LastUpdateAsc = "LAST_UPDATE_ASC",
  LastUpdateDesc = "LAST_UPDATE_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
}

export enum MpaaRating {
  G = "G",
  Nc_17 = "NC_17",
  Pg = "PG",
  Pg_13 = "PG_13",
  R = "R",
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: "Mutation"
  /** Creates a single `Actor`. */
  createActor?: Maybe<CreateActorPayload>
  /** Creates a single `Address`. */
  createAddress?: Maybe<CreateAddressPayload>
  /** Creates a single `Category`. */
  createCategory?: Maybe<CreateCategoryPayload>
  /** Creates a single `City`. */
  createCity?: Maybe<CreateCityPayload>
  /** Creates a single `Country`. */
  createCountry?: Maybe<CreateCountryPayload>
  /** Creates a single `Customer`. */
  createCustomer?: Maybe<CreateCustomerPayload>
  /** Creates a single `Film`. */
  createFilm?: Maybe<CreateFilmPayload>
  /** Creates a single `FilmActor`. */
  createFilmActor?: Maybe<CreateFilmActorPayload>
  /** Creates a single `FilmCategory`. */
  createFilmCategory?: Maybe<CreateFilmCategoryPayload>
  /** Creates a single `Inventory`. */
  createInventory?: Maybe<CreateInventoryPayload>
  /** Creates a single `Language`. */
  createLanguage?: Maybe<CreateLanguagePayload>
  /** Creates a single `Payment`. */
  createPayment?: Maybe<CreatePaymentPayload>
  /** Creates a single `Rental`. */
  createRental?: Maybe<CreateRentalPayload>
  /** Creates a single `Staff`. */
  createStaff?: Maybe<CreateStaffPayload>
  /** Creates a single `Store`. */
  createStore?: Maybe<CreateStorePayload>
  /** Deletes a single `Actor` using a unique key. */
  deleteActor?: Maybe<DeleteActorPayload>
  /** Deletes a single `Actor` using its globally unique id. */
  deleteActorByNodeId?: Maybe<DeleteActorPayload>
  /** Deletes a single `Address` using a unique key. */
  deleteAddress?: Maybe<DeleteAddressPayload>
  /** Deletes a single `Address` using its globally unique id. */
  deleteAddressByNodeId?: Maybe<DeleteAddressPayload>
  /** Deletes a single `Category` using a unique key. */
  deleteCategory?: Maybe<DeleteCategoryPayload>
  /** Deletes a single `Category` using its globally unique id. */
  deleteCategoryByNodeId?: Maybe<DeleteCategoryPayload>
  /** Deletes a single `City` using a unique key. */
  deleteCity?: Maybe<DeleteCityPayload>
  /** Deletes a single `City` using its globally unique id. */
  deleteCityByNodeId?: Maybe<DeleteCityPayload>
  /** Deletes a single `Country` using a unique key. */
  deleteCountry?: Maybe<DeleteCountryPayload>
  /** Deletes a single `Country` using its globally unique id. */
  deleteCountryByNodeId?: Maybe<DeleteCountryPayload>
  /** Deletes a single `Customer` using a unique key. */
  deleteCustomer?: Maybe<DeleteCustomerPayload>
  /** Deletes a single `Customer` using its globally unique id. */
  deleteCustomerByNodeId?: Maybe<DeleteCustomerPayload>
  /** Deletes a single `Film` using a unique key. */
  deleteFilm?: Maybe<DeleteFilmPayload>
  /** Deletes a single `FilmActor` using a unique key. */
  deleteFilmActor?: Maybe<DeleteFilmActorPayload>
  /** Deletes a single `FilmActor` using its globally unique id. */
  deleteFilmActorByNodeId?: Maybe<DeleteFilmActorPayload>
  /** Deletes a single `Film` using its globally unique id. */
  deleteFilmByNodeId?: Maybe<DeleteFilmPayload>
  /** Deletes a single `FilmCategory` using a unique key. */
  deleteFilmCategory?: Maybe<DeleteFilmCategoryPayload>
  /** Deletes a single `FilmCategory` using its globally unique id. */
  deleteFilmCategoryByNodeId?: Maybe<DeleteFilmCategoryPayload>
  /** Deletes a single `Inventory` using a unique key. */
  deleteInventory?: Maybe<DeleteInventoryPayload>
  /** Deletes a single `Inventory` using its globally unique id. */
  deleteInventoryByNodeId?: Maybe<DeleteInventoryPayload>
  /** Deletes a single `Language` using a unique key. */
  deleteLanguage?: Maybe<DeleteLanguagePayload>
  /** Deletes a single `Language` using its globally unique id. */
  deleteLanguageByNodeId?: Maybe<DeleteLanguagePayload>
  /** Deletes a single `Payment` using a unique key. */
  deletePayment?: Maybe<DeletePaymentPayload>
  /** Deletes a single `Payment` using its globally unique id. */
  deletePaymentByNodeId?: Maybe<DeletePaymentPayload>
  /** Deletes a single `Rental` using a unique key. */
  deleteRental?: Maybe<DeleteRentalPayload>
  /** Deletes a single `Rental` using its globally unique id. */
  deleteRentalByNodeId?: Maybe<DeleteRentalPayload>
  /** Deletes a single `Staff` using a unique key. */
  deleteStaff?: Maybe<DeleteStaffPayload>
  /** Deletes a single `Staff` using its globally unique id. */
  deleteStaffByNodeId?: Maybe<DeleteStaffPayload>
  /** Deletes a single `Store` using a unique key. */
  deleteStore?: Maybe<DeleteStorePayload>
  /** Deletes a single `Store` using its globally unique id. */
  deleteStoreByNodeId?: Maybe<DeleteStorePayload>
  filmInStock?: Maybe<FilmInStockPayload>
  filmNotInStock?: Maybe<FilmNotInStockPayload>
  getCustomerBalance?: Maybe<GetCustomerBalancePayload>
  inventoryHeldByCustomer?: Maybe<InventoryHeldByCustomerPayload>
  inventoryInStock?: Maybe<InventoryInStockPayload>
  rewardsReport?: Maybe<RewardsReportPayload>
  /** Updates a single `Actor` using a unique key and a patch. */
  updateActor?: Maybe<UpdateActorPayload>
  /** Updates a single `Actor` using its globally unique id and a patch. */
  updateActorByNodeId?: Maybe<UpdateActorPayload>
  /** Updates a single `Address` using a unique key and a patch. */
  updateAddress?: Maybe<UpdateAddressPayload>
  /** Updates a single `Address` using its globally unique id and a patch. */
  updateAddressByNodeId?: Maybe<UpdateAddressPayload>
  /** Updates a single `Category` using a unique key and a patch. */
  updateCategory?: Maybe<UpdateCategoryPayload>
  /** Updates a single `Category` using its globally unique id and a patch. */
  updateCategoryByNodeId?: Maybe<UpdateCategoryPayload>
  /** Updates a single `City` using a unique key and a patch. */
  updateCity?: Maybe<UpdateCityPayload>
  /** Updates a single `City` using its globally unique id and a patch. */
  updateCityByNodeId?: Maybe<UpdateCityPayload>
  /** Updates a single `Country` using a unique key and a patch. */
  updateCountry?: Maybe<UpdateCountryPayload>
  /** Updates a single `Country` using its globally unique id and a patch. */
  updateCountryByNodeId?: Maybe<UpdateCountryPayload>
  /** Updates a single `Customer` using a unique key and a patch. */
  updateCustomer?: Maybe<UpdateCustomerPayload>
  /** Updates a single `Customer` using its globally unique id and a patch. */
  updateCustomerByNodeId?: Maybe<UpdateCustomerPayload>
  /** Updates a single `Film` using a unique key and a patch. */
  updateFilm?: Maybe<UpdateFilmPayload>
  /** Updates a single `FilmActor` using a unique key and a patch. */
  updateFilmActor?: Maybe<UpdateFilmActorPayload>
  /** Updates a single `FilmActor` using its globally unique id and a patch. */
  updateFilmActorByNodeId?: Maybe<UpdateFilmActorPayload>
  /** Updates a single `Film` using its globally unique id and a patch. */
  updateFilmByNodeId?: Maybe<UpdateFilmPayload>
  /** Updates a single `FilmCategory` using a unique key and a patch. */
  updateFilmCategory?: Maybe<UpdateFilmCategoryPayload>
  /** Updates a single `FilmCategory` using its globally unique id and a patch. */
  updateFilmCategoryByNodeId?: Maybe<UpdateFilmCategoryPayload>
  /** Updates a single `Inventory` using a unique key and a patch. */
  updateInventory?: Maybe<UpdateInventoryPayload>
  /** Updates a single `Inventory` using its globally unique id and a patch. */
  updateInventoryByNodeId?: Maybe<UpdateInventoryPayload>
  /** Updates a single `Language` using a unique key and a patch. */
  updateLanguage?: Maybe<UpdateLanguagePayload>
  /** Updates a single `Language` using its globally unique id and a patch. */
  updateLanguageByNodeId?: Maybe<UpdateLanguagePayload>
  /** Updates a single `Payment` using a unique key and a patch. */
  updatePayment?: Maybe<UpdatePaymentPayload>
  /** Updates a single `Payment` using its globally unique id and a patch. */
  updatePaymentByNodeId?: Maybe<UpdatePaymentPayload>
  /** Updates a single `Rental` using a unique key and a patch. */
  updateRental?: Maybe<UpdateRentalPayload>
  /** Updates a single `Rental` using its globally unique id and a patch. */
  updateRentalByNodeId?: Maybe<UpdateRentalPayload>
  /** Updates a single `Staff` using a unique key and a patch. */
  updateStaff?: Maybe<UpdateStaffPayload>
  /** Updates a single `Staff` using its globally unique id and a patch. */
  updateStaffByNodeId?: Maybe<UpdateStaffPayload>
  /** Updates a single `Store` using a unique key and a patch. */
  updateStore?: Maybe<UpdateStorePayload>
  /** Updates a single `Store` using its globally unique id and a patch. */
  updateStoreByNodeId?: Maybe<UpdateStorePayload>
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateActorArgs = {
  input: CreateActorInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAddressArgs = {
  input: CreateAddressInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCategoryArgs = {
  input: CreateCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCityArgs = {
  input: CreateCityInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCountryArgs = {
  input: CreateCountryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCustomerArgs = {
  input: CreateCustomerInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFilmArgs = {
  input: CreateFilmInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFilmActorArgs = {
  input: CreateFilmActorInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateFilmCategoryArgs = {
  input: CreateFilmCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateInventoryArgs = {
  input: CreateInventoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateLanguageArgs = {
  input: CreateLanguageInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreatePaymentArgs = {
  input: CreatePaymentInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateRentalArgs = {
  input: CreateRentalInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateStaffArgs = {
  input: CreateStaffInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateStoreArgs = {
  input: CreateStoreInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteActorArgs = {
  input: DeleteActorInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteActorByNodeIdArgs = {
  input: DeleteActorByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressArgs = {
  input: DeleteAddressInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAddressByNodeIdArgs = {
  input: DeleteAddressByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryArgs = {
  input: DeleteCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCategoryByNodeIdArgs = {
  input: DeleteCategoryByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCityArgs = {
  input: DeleteCityInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCityByNodeIdArgs = {
  input: DeleteCityByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCountryArgs = {
  input: DeleteCountryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCountryByNodeIdArgs = {
  input: DeleteCountryByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCustomerArgs = {
  input: DeleteCustomerInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCustomerByNodeIdArgs = {
  input: DeleteCustomerByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmArgs = {
  input: DeleteFilmInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmActorArgs = {
  input: DeleteFilmActorInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmActorByNodeIdArgs = {
  input: DeleteFilmActorByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmByNodeIdArgs = {
  input: DeleteFilmByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmCategoryArgs = {
  input: DeleteFilmCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteFilmCategoryByNodeIdArgs = {
  input: DeleteFilmCategoryByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInventoryArgs = {
  input: DeleteInventoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInventoryByNodeIdArgs = {
  input: DeleteInventoryByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLanguageArgs = {
  input: DeleteLanguageInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteLanguageByNodeIdArgs = {
  input: DeleteLanguageByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePaymentArgs = {
  input: DeletePaymentInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeletePaymentByNodeIdArgs = {
  input: DeletePaymentByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRentalArgs = {
  input: DeleteRentalInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteRentalByNodeIdArgs = {
  input: DeleteRentalByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStaffArgs = {
  input: DeleteStaffInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStaffByNodeIdArgs = {
  input: DeleteStaffByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStoreArgs = {
  input: DeleteStoreInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteStoreByNodeIdArgs = {
  input: DeleteStoreByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationFilmInStockArgs = {
  input: FilmInStockInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationFilmNotInStockArgs = {
  input: FilmNotInStockInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationGetCustomerBalanceArgs = {
  input: GetCustomerBalanceInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationInventoryHeldByCustomerArgs = {
  input: InventoryHeldByCustomerInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationInventoryInStockArgs = {
  input: InventoryInStockInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationRewardsReportArgs = {
  input: RewardsReportInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateActorArgs = {
  input: UpdateActorInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateActorByNodeIdArgs = {
  input: UpdateActorByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAddressByNodeIdArgs = {
  input: UpdateAddressByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryArgs = {
  input: UpdateCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCategoryByNodeIdArgs = {
  input: UpdateCategoryByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCityArgs = {
  input: UpdateCityInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCityByNodeIdArgs = {
  input: UpdateCityByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCountryArgs = {
  input: UpdateCountryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCountryByNodeIdArgs = {
  input: UpdateCountryByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCustomerArgs = {
  input: UpdateCustomerInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCustomerByNodeIdArgs = {
  input: UpdateCustomerByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmArgs = {
  input: UpdateFilmInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmActorArgs = {
  input: UpdateFilmActorInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmActorByNodeIdArgs = {
  input: UpdateFilmActorByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmByNodeIdArgs = {
  input: UpdateFilmByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmCategoryArgs = {
  input: UpdateFilmCategoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateFilmCategoryByNodeIdArgs = {
  input: UpdateFilmCategoryByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInventoryArgs = {
  input: UpdateInventoryInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInventoryByNodeIdArgs = {
  input: UpdateInventoryByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLanguageArgs = {
  input: UpdateLanguageInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateLanguageByNodeIdArgs = {
  input: UpdateLanguageByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePaymentArgs = {
  input: UpdatePaymentInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdatePaymentByNodeIdArgs = {
  input: UpdatePaymentByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRentalArgs = {
  input: UpdateRentalInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateRentalByNodeIdArgs = {
  input: UpdateRentalByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStaffArgs = {
  input: UpdateStaffInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStaffByNodeIdArgs = {
  input: UpdateStaffByNodeIdInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStoreArgs = {
  input: UpdateStoreInput
}

/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateStoreByNodeIdArgs = {
  input: UpdateStoreByNodeIdInput
}

export type NicerButSlowerFilmList = {
  __typename?: "NicerButSlowerFilmList"
  actors?: Maybe<Scalars["String"]>
  category?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  fid?: Maybe<Scalars["Int"]>
  length?: Maybe<Scalars["Int"]>
  price?: Maybe<Scalars["BigFloat"]>
  rating?: Maybe<MpaaRating>
  title?: Maybe<Scalars["String"]>
}

/**
 * A condition to be used against `NicerButSlowerFilmList` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type NicerButSlowerFilmListCondition = {
  /** Checks for equality with the object’s `actors` field. */
  actors?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `category` field. */
  category?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `description` field. */
  description?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `fid` field. */
  fid?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `length` field. */
  length?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `price` field. */
  price?: InputMaybe<Scalars["BigFloat"]>
  /** Checks for equality with the object’s `rating` field. */
  rating?: InputMaybe<MpaaRating>
  /** Checks for equality with the object’s `title` field. */
  title?: InputMaybe<Scalars["String"]>
}

/** A connection to a list of `NicerButSlowerFilmList` values. */
export type NicerButSlowerFilmListsConnection = {
  __typename?: "NicerButSlowerFilmListsConnection"
  /** A list of edges which contains the `NicerButSlowerFilmList` and cursor to aid in pagination. */
  edges: Array<NicerButSlowerFilmListsEdge>
  /** A list of `NicerButSlowerFilmList` objects. */
  nodes: Array<NicerButSlowerFilmList>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `NicerButSlowerFilmList` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `NicerButSlowerFilmList` edge in the connection. */
export type NicerButSlowerFilmListsEdge = {
  __typename?: "NicerButSlowerFilmListsEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `NicerButSlowerFilmList` at the end of the edge. */
  node: NicerButSlowerFilmList
}

/** Methods to use when ordering `NicerButSlowerFilmList`. */
export enum NicerButSlowerFilmListsOrderBy {
  ActorsAsc = "ACTORS_ASC",
  ActorsDesc = "ACTORS_DESC",
  CategoryAsc = "CATEGORY_ASC",
  CategoryDesc = "CATEGORY_DESC",
  DescriptionAsc = "DESCRIPTION_ASC",
  DescriptionDesc = "DESCRIPTION_DESC",
  FidAsc = "FID_ASC",
  FidDesc = "FID_DESC",
  LengthAsc = "LENGTH_ASC",
  LengthDesc = "LENGTH_DESC",
  Natural = "NATURAL",
  PriceAsc = "PRICE_ASC",
  PriceDesc = "PRICE_DESC",
  RatingAsc = "RATING_ASC",
  RatingDesc = "RATING_DESC",
  TitleAsc = "TITLE_ASC",
  TitleDesc = "TITLE_DESC",
}

/** An object with a globally unique `ID`. */
export type Node = {
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: "PageInfo"
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["Cursor"]>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["Cursor"]>
}

export type Payment = Node & {
  __typename?: "Payment"
  amount: Scalars["BigFloat"]
  /** Reads a single `Customer` that is related to this `Payment`. */
  customer?: Maybe<Customer>
  customerId: Scalars["Int"]
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
  paymentDate: Scalars["Datetime"]
  paymentId: Scalars["Int"]
  /** Reads a single `Rental` that is related to this `Payment`. */
  rental?: Maybe<Rental>
  rentalId: Scalars["Int"]
  /** Reads a single `Staff` that is related to this `Payment`. */
  staff?: Maybe<Staff>
  staffId: Scalars["Int"]
}

/** A condition to be used against `Payment` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type PaymentCondition = {
  /** Checks for equality with the object’s `amount` field. */
  amount?: InputMaybe<Scalars["BigFloat"]>
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `paymentDate` field. */
  paymentDate?: InputMaybe<Scalars["Datetime"]>
  /** Checks for equality with the object’s `paymentId` field. */
  paymentId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `rentalId` field. */
  rentalId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars["Int"]>
}

/** An input for mutations affecting `Payment` */
export type PaymentInput = {
  amount: Scalars["BigFloat"]
  customerId: Scalars["Int"]
  paymentDate: Scalars["Datetime"]
  paymentId?: InputMaybe<Scalars["Int"]>
  rentalId: Scalars["Int"]
  staffId: Scalars["Int"]
}

/** Represents an update to a `Payment`. Fields that are set will be updated. */
export type PaymentPatch = {
  amount?: InputMaybe<Scalars["BigFloat"]>
  customerId?: InputMaybe<Scalars["Int"]>
  paymentDate?: InputMaybe<Scalars["Datetime"]>
  paymentId?: InputMaybe<Scalars["Int"]>
  rentalId?: InputMaybe<Scalars["Int"]>
  staffId?: InputMaybe<Scalars["Int"]>
}

/** A connection to a list of `Payment` values. */
export type PaymentsConnection = {
  __typename?: "PaymentsConnection"
  /** A list of edges which contains the `Payment` and cursor to aid in pagination. */
  edges: Array<PaymentsEdge>
  /** A list of `Payment` objects. */
  nodes: Array<Payment>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Payment` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `Payment` edge in the connection. */
export type PaymentsEdge = {
  __typename?: "PaymentsEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `Payment` at the end of the edge. */
  node: Payment
}

/** Methods to use when ordering `Payment`. */
export enum PaymentsOrderBy {
  AmountAsc = "AMOUNT_ASC",
  AmountDesc = "AMOUNT_DESC",
  CustomerIdAsc = "CUSTOMER_ID_ASC",
  CustomerIdDesc = "CUSTOMER_ID_DESC",
  Natural = "NATURAL",
  PaymentDateAsc = "PAYMENT_DATE_ASC",
  PaymentDateDesc = "PAYMENT_DATE_DESC",
  PaymentIdAsc = "PAYMENT_ID_ASC",
  PaymentIdDesc = "PAYMENT_ID_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  RentalIdAsc = "RENTAL_ID_ASC",
  RentalIdDesc = "RENTAL_ID_DESC",
  StaffIdAsc = "STAFF_ID_ASC",
  StaffIdDesc = "STAFF_ID_DESC",
}

/** The root query type which gives access points into the data universe. */
export type Query = Node & {
  __typename?: "Query"
  _groupConcat?: Maybe<Scalars["String"]>
  actor?: Maybe<Actor>
  /** Reads a single `Actor` using its globally unique `ID`. */
  actorByNodeId?: Maybe<Actor>
  /** Reads and enables pagination through a set of `ActorInfo`. */
  actorInfos?: Maybe<ActorInfosConnection>
  /** Reads and enables pagination through a set of `Actor`. */
  actors?: Maybe<ActorsConnection>
  address?: Maybe<Address>
  /** Reads a single `Address` using its globally unique `ID`. */
  addressByNodeId?: Maybe<Address>
  /** Reads and enables pagination through a set of `Address`. */
  addresses?: Maybe<AddressesConnection>
  /** Reads and enables pagination through a set of `Category`. */
  categories?: Maybe<CategoriesConnection>
  category?: Maybe<Category>
  /** Reads a single `Category` using its globally unique `ID`. */
  categoryByNodeId?: Maybe<Category>
  /** Reads and enables pagination through a set of `City`. */
  cities?: Maybe<CitiesConnection>
  city?: Maybe<City>
  /** Reads a single `City` using its globally unique `ID`. */
  cityByNodeId?: Maybe<City>
  /** Reads and enables pagination through a set of `Country`. */
  countries?: Maybe<CountriesConnection>
  country?: Maybe<Country>
  /** Reads a single `Country` using its globally unique `ID`. */
  countryByNodeId?: Maybe<Country>
  customer?: Maybe<Customer>
  /** Reads a single `Customer` using its globally unique `ID`. */
  customerByNodeId?: Maybe<Customer>
  /** Reads and enables pagination through a set of `CustomerList`. */
  customerLists?: Maybe<CustomerListsConnection>
  /** Reads and enables pagination through a set of `Customer`. */
  customers?: Maybe<CustomersConnection>
  film?: Maybe<Film>
  filmActor?: Maybe<FilmActor>
  /** Reads a single `FilmActor` using its globally unique `ID`. */
  filmActorByNodeId?: Maybe<FilmActor>
  /** Reads and enables pagination through a set of `FilmActor`. */
  filmActors?: Maybe<FilmActorsConnection>
  /** Reads a single `Film` using its globally unique `ID`. */
  filmByNodeId?: Maybe<Film>
  /** Reads and enables pagination through a set of `FilmCategory`. */
  filmCategories?: Maybe<FilmCategoriesConnection>
  filmCategory?: Maybe<FilmCategory>
  /** Reads a single `FilmCategory` using its globally unique `ID`. */
  filmCategoryByNodeId?: Maybe<FilmCategory>
  /** Reads and enables pagination through a set of `FilmList`. */
  filmLists?: Maybe<FilmListsConnection>
  /** Reads and enables pagination through a set of `Film`. */
  films?: Maybe<FilmsConnection>
  /** Reads and enables pagination through a set of `Inventory`. */
  inventories?: Maybe<InventoriesConnection>
  inventory?: Maybe<Inventory>
  /** Reads a single `Inventory` using its globally unique `ID`. */
  inventoryByNodeId?: Maybe<Inventory>
  language?: Maybe<Language>
  /** Reads a single `Language` using its globally unique `ID`. */
  languageByNodeId?: Maybe<Language>
  /** Reads and enables pagination through a set of `Language`. */
  languages?: Maybe<LanguagesConnection>
  lastDay?: Maybe<Scalars["Date"]>
  /** Reads and enables pagination through a set of `NicerButSlowerFilmList`. */
  nicerButSlowerFilmLists?: Maybe<NicerButSlowerFilmListsConnection>
  /** Fetches an object given its globally unique `ID`. */
  node?: Maybe<Node>
  /** The root query type must be a `Node` to work well with Relay 1 mutations. This just resolves to `query`. */
  nodeId: Scalars["ID"]
  payment?: Maybe<Payment>
  /** Reads a single `Payment` using its globally unique `ID`. */
  paymentByNodeId?: Maybe<Payment>
  /** Reads and enables pagination through a set of `Payment`. */
  payments?: Maybe<PaymentsConnection>
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query
  rental?: Maybe<Rental>
  /** Reads a single `Rental` using its globally unique `ID`. */
  rentalByNodeId?: Maybe<Rental>
  /** Reads and enables pagination through a set of `Rental`. */
  rentals?: Maybe<RentalsConnection>
  /** Reads and enables pagination through a set of `SalesByFilmCategory`. */
  salesByFilmCategories?: Maybe<SalesByFilmCategoriesConnection>
  /** Reads and enables pagination through a set of `SalesByStore`. */
  salesByStores?: Maybe<SalesByStoresConnection>
  staff?: Maybe<Staff>
  /** Reads a single `Staff` using its globally unique `ID`. */
  staffByNodeId?: Maybe<Staff>
  /** Reads and enables pagination through a set of `StaffList`. */
  staffLists?: Maybe<StaffListsConnection>
  /** Reads and enables pagination through a set of `Staff`. */
  staffs?: Maybe<StaffConnection>
  store?: Maybe<Store>
  /** Reads a single `Store` using its globally unique `ID`. */
  storeByNodeId?: Maybe<Store>
  /** Reads and enables pagination through a set of `Store`. */
  stores?: Maybe<StoresConnection>
}

/** The root query type which gives access points into the data universe. */
export type Query_GroupConcatArgs = {
  arg0?: InputMaybe<Scalars["String"]>
  arg1?: InputMaybe<Scalars["String"]>
}

/** The root query type which gives access points into the data universe. */
export type QueryActorArgs = {
  actorId: Scalars["Int"]
}

/** The root query type which gives access points into the data universe. */
export type QueryActorByNodeIdArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryActorInfosArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<ActorInfoCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<ActorInfosOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryActorsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<ActorCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<ActorsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryAddressArgs = {
  addressId: Scalars["Int"]
}

/** The root query type which gives access points into the data universe. */
export type QueryAddressByNodeIdArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryAddressesArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<AddressCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<AddressesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryCategoriesArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<CategoryCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryCategoryArgs = {
  categoryId: Scalars["Int"]
}

/** The root query type which gives access points into the data universe. */
export type QueryCategoryByNodeIdArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryCitiesArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<CityCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<CitiesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryCityArgs = {
  cityId: Scalars["Int"]
}

/** The root query type which gives access points into the data universe. */
export type QueryCityByNodeIdArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryCountriesArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<CountryCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<CountriesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryCountryArgs = {
  countryId: Scalars["Int"]
}

/** The root query type which gives access points into the data universe. */
export type QueryCountryByNodeIdArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryCustomerArgs = {
  customerId: Scalars["Int"]
}

/** The root query type which gives access points into the data universe. */
export type QueryCustomerByNodeIdArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryCustomerListsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<CustomerListCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<CustomerListsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryCustomersArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<CustomerCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<CustomersOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryFilmArgs = {
  filmId: Scalars["Int"]
}

/** The root query type which gives access points into the data universe. */
export type QueryFilmActorArgs = {
  actorId: Scalars["Int"]
  filmId: Scalars["Int"]
}

/** The root query type which gives access points into the data universe. */
export type QueryFilmActorByNodeIdArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryFilmActorsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<FilmActorCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryFilmByNodeIdArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryFilmCategoriesArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<FilmCategoryCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryFilmCategoryArgs = {
  categoryId: Scalars["Int"]
  filmId: Scalars["Int"]
}

/** The root query type which gives access points into the data universe. */
export type QueryFilmCategoryByNodeIdArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryFilmListsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<FilmListCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<FilmListsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryFilmsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<FilmCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<FilmsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryInventoriesArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<InventoryCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryInventoryArgs = {
  inventoryId: Scalars["Int"]
}

/** The root query type which gives access points into the data universe. */
export type QueryInventoryByNodeIdArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryLanguageArgs = {
  languageId: Scalars["Int"]
}

/** The root query type which gives access points into the data universe. */
export type QueryLanguageByNodeIdArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryLanguagesArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<LanguageCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryLastDayArgs = {
  arg0: Scalars["Datetime"]
}

/** The root query type which gives access points into the data universe. */
export type QueryNicerButSlowerFilmListsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<NicerButSlowerFilmListCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<NicerButSlowerFilmListsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryNodeArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryPaymentArgs = {
  paymentId: Scalars["Int"]
}

/** The root query type which gives access points into the data universe. */
export type QueryPaymentByNodeIdArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryPaymentsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<PaymentCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryRentalArgs = {
  rentalId: Scalars["Int"]
}

/** The root query type which gives access points into the data universe. */
export type QueryRentalByNodeIdArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryRentalsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<RentalCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<RentalsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QuerySalesByFilmCategoriesArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<SalesByFilmCategoryCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<SalesByFilmCategoriesOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QuerySalesByStoresArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<SalesByStoreCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<SalesByStoresOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryStaffArgs = {
  staffId: Scalars["Int"]
}

/** The root query type which gives access points into the data universe. */
export type QueryStaffByNodeIdArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryStaffListsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<StaffListCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<StaffListsOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryStaffsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<StaffCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<StaffOrderBy>>
}

/** The root query type which gives access points into the data universe. */
export type QueryStoreArgs = {
  storeId: Scalars["Int"]
}

/** The root query type which gives access points into the data universe. */
export type QueryStoreByNodeIdArgs = {
  nodeId: Scalars["ID"]
}

/** The root query type which gives access points into the data universe. */
export type QueryStoresArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<StoreCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<StoresOrderBy>>
}

export type Rental = Node & {
  __typename?: "Rental"
  /** Reads a single `Customer` that is related to this `Rental`. */
  customer?: Maybe<Customer>
  customerId: Scalars["Int"]
  /** Reads a single `Inventory` that is related to this `Rental`. */
  inventory?: Maybe<Inventory>
  inventoryId: Scalars["Int"]
  lastUpdate: Scalars["Datetime"]
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
  /** Reads and enables pagination through a set of `Payment`. */
  payments: PaymentsConnection
  rentalDate: Scalars["Datetime"]
  rentalId: Scalars["Int"]
  returnDate?: Maybe<Scalars["Datetime"]>
  /** Reads a single `Staff` that is related to this `Rental`. */
  staff?: Maybe<Staff>
  staffId: Scalars["Int"]
}

export type RentalPaymentsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<PaymentCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>
}

/** A condition to be used against `Rental` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type RentalCondition = {
  /** Checks for equality with the object’s `customerId` field. */
  customerId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `inventoryId` field. */
  inventoryId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  /** Checks for equality with the object’s `rentalDate` field. */
  rentalDate?: InputMaybe<Scalars["Datetime"]>
  /** Checks for equality with the object’s `rentalId` field. */
  rentalId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `returnDate` field. */
  returnDate?: InputMaybe<Scalars["Datetime"]>
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars["Int"]>
}

/** An input for mutations affecting `Rental` */
export type RentalInput = {
  customerId: Scalars["Int"]
  inventoryId: Scalars["Int"]
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  rentalDate: Scalars["Datetime"]
  rentalId?: InputMaybe<Scalars["Int"]>
  returnDate?: InputMaybe<Scalars["Datetime"]>
  staffId: Scalars["Int"]
}

/** Represents an update to a `Rental`. Fields that are set will be updated. */
export type RentalPatch = {
  customerId?: InputMaybe<Scalars["Int"]>
  inventoryId?: InputMaybe<Scalars["Int"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  rentalDate?: InputMaybe<Scalars["Datetime"]>
  rentalId?: InputMaybe<Scalars["Int"]>
  returnDate?: InputMaybe<Scalars["Datetime"]>
  staffId?: InputMaybe<Scalars["Int"]>
}

/** A connection to a list of `Rental` values. */
export type RentalsConnection = {
  __typename?: "RentalsConnection"
  /** A list of edges which contains the `Rental` and cursor to aid in pagination. */
  edges: Array<RentalsEdge>
  /** A list of `Rental` objects. */
  nodes: Array<Rental>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Rental` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `Rental` edge in the connection. */
export type RentalsEdge = {
  __typename?: "RentalsEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `Rental` at the end of the edge. */
  node: Rental
}

/** Methods to use when ordering `Rental`. */
export enum RentalsOrderBy {
  CustomerIdAsc = "CUSTOMER_ID_ASC",
  CustomerIdDesc = "CUSTOMER_ID_DESC",
  InventoryIdAsc = "INVENTORY_ID_ASC",
  InventoryIdDesc = "INVENTORY_ID_DESC",
  LastUpdateAsc = "LAST_UPDATE_ASC",
  LastUpdateDesc = "LAST_UPDATE_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  RentalDateAsc = "RENTAL_DATE_ASC",
  RentalDateDesc = "RENTAL_DATE_DESC",
  RentalIdAsc = "RENTAL_ID_ASC",
  RentalIdDesc = "RENTAL_ID_DESC",
  ReturnDateAsc = "RETURN_DATE_ASC",
  ReturnDateDesc = "RETURN_DATE_DESC",
  StaffIdAsc = "STAFF_ID_ASC",
  StaffIdDesc = "STAFF_ID_DESC",
}

/** All input for the `rewardsReport` mutation. */
export type RewardsReportInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  minDollarAmountPurchased?: InputMaybe<Scalars["BigFloat"]>
  minMonthlyPurchases?: InputMaybe<Scalars["Int"]>
}

/** The output of our `rewardsReport` mutation. */
export type RewardsReportPayload = {
  __typename?: "RewardsReportPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  customers?: Maybe<Array<Customer>>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** A connection to a list of `SalesByFilmCategory` values. */
export type SalesByFilmCategoriesConnection = {
  __typename?: "SalesByFilmCategoriesConnection"
  /** A list of edges which contains the `SalesByFilmCategory` and cursor to aid in pagination. */
  edges: Array<SalesByFilmCategoriesEdge>
  /** A list of `SalesByFilmCategory` objects. */
  nodes: Array<SalesByFilmCategory>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `SalesByFilmCategory` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `SalesByFilmCategory` edge in the connection. */
export type SalesByFilmCategoriesEdge = {
  __typename?: "SalesByFilmCategoriesEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `SalesByFilmCategory` at the end of the edge. */
  node: SalesByFilmCategory
}

/** Methods to use when ordering `SalesByFilmCategory`. */
export enum SalesByFilmCategoriesOrderBy {
  CategoryAsc = "CATEGORY_ASC",
  CategoryDesc = "CATEGORY_DESC",
  Natural = "NATURAL",
  TotalSalesAsc = "TOTAL_SALES_ASC",
  TotalSalesDesc = "TOTAL_SALES_DESC",
}

export type SalesByFilmCategory = {
  __typename?: "SalesByFilmCategory"
  category?: Maybe<Scalars["String"]>
  totalSales?: Maybe<Scalars["BigFloat"]>
}

/**
 * A condition to be used against `SalesByFilmCategory` object types. All fields
 * are tested for equality and combined with a logical ‘and.’
 */
export type SalesByFilmCategoryCondition = {
  /** Checks for equality with the object’s `category` field. */
  category?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `totalSales` field. */
  totalSales?: InputMaybe<Scalars["BigFloat"]>
}

export type SalesByStore = {
  __typename?: "SalesByStore"
  manager?: Maybe<Scalars["String"]>
  store?: Maybe<Scalars["String"]>
  totalSales?: Maybe<Scalars["BigFloat"]>
}

/**
 * A condition to be used against `SalesByStore` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type SalesByStoreCondition = {
  /** Checks for equality with the object’s `manager` field. */
  manager?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `store` field. */
  store?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `totalSales` field. */
  totalSales?: InputMaybe<Scalars["BigFloat"]>
}

/** A connection to a list of `SalesByStore` values. */
export type SalesByStoresConnection = {
  __typename?: "SalesByStoresConnection"
  /** A list of edges which contains the `SalesByStore` and cursor to aid in pagination. */
  edges: Array<SalesByStoresEdge>
  /** A list of `SalesByStore` objects. */
  nodes: Array<SalesByStore>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `SalesByStore` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `SalesByStore` edge in the connection. */
export type SalesByStoresEdge = {
  __typename?: "SalesByStoresEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `SalesByStore` at the end of the edge. */
  node: SalesByStore
}

/** Methods to use when ordering `SalesByStore`. */
export enum SalesByStoresOrderBy {
  ManagerAsc = "MANAGER_ASC",
  ManagerDesc = "MANAGER_DESC",
  Natural = "NATURAL",
  StoreAsc = "STORE_ASC",
  StoreDesc = "STORE_DESC",
  TotalSalesAsc = "TOTAL_SALES_ASC",
  TotalSalesDesc = "TOTAL_SALES_DESC",
}

export type Staff = Node & {
  __typename?: "Staff"
  active: Scalars["Boolean"]
  /** Reads a single `Address` that is related to this `Staff`. */
  address?: Maybe<Address>
  addressId: Scalars["Int"]
  email?: Maybe<Scalars["String"]>
  firstName: Scalars["String"]
  lastName: Scalars["String"]
  lastUpdate: Scalars["Datetime"]
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
  password?: Maybe<Scalars["String"]>
  /** Reads and enables pagination through a set of `Payment`. */
  payments: PaymentsConnection
  picture?: Maybe<Scalars["String"]>
  /** Reads and enables pagination through a set of `Rental`. */
  rentals: RentalsConnection
  staffId: Scalars["Int"]
  storeId: Scalars["Int"]
  /** Reads and enables pagination through a set of `Store`. */
  storesByManagerStaffId: StoresConnection
  username: Scalars["String"]
}

export type StaffPaymentsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<PaymentCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>
}

export type StaffRentalsArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<RentalCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<RentalsOrderBy>>
}

export type StaffStoresByManagerStaffIdArgs = {
  after?: InputMaybe<Scalars["Cursor"]>
  before?: InputMaybe<Scalars["Cursor"]>
  condition?: InputMaybe<StoreCondition>
  first?: InputMaybe<Scalars["Int"]>
  last?: InputMaybe<Scalars["Int"]>
  offset?: InputMaybe<Scalars["Int"]>
  orderBy?: InputMaybe<Array<StoresOrderBy>>
}

/** A condition to be used against `Staff` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type StaffCondition = {
  /** Checks for equality with the object’s `active` field. */
  active?: InputMaybe<Scalars["Boolean"]>
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `firstName` field. */
  firstName?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `lastName` field. */
  lastName?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  /** Checks for equality with the object’s `password` field. */
  password?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `picture` field. */
  picture?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `staffId` field. */
  staffId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `username` field. */
  username?: InputMaybe<Scalars["String"]>
}

/** A connection to a list of `Staff` values. */
export type StaffConnection = {
  __typename?: "StaffConnection"
  /** A list of edges which contains the `Staff` and cursor to aid in pagination. */
  edges: Array<StaffEdge>
  /** A list of `Staff` objects. */
  nodes: Array<Staff>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Staff` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `Staff` edge in the connection. */
export type StaffEdge = {
  __typename?: "StaffEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `Staff` at the end of the edge. */
  node: Staff
}

/** An input for mutations affecting `Staff` */
export type StaffInput = {
  active?: InputMaybe<Scalars["Boolean"]>
  addressId: Scalars["Int"]
  email?: InputMaybe<Scalars["String"]>
  firstName: Scalars["String"]
  lastName: Scalars["String"]
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  password?: InputMaybe<Scalars["String"]>
  picture?: InputMaybe<Scalars["String"]>
  staffId?: InputMaybe<Scalars["Int"]>
  storeId: Scalars["Int"]
  username: Scalars["String"]
}

export type StaffList = {
  __typename?: "StaffList"
  address?: Maybe<Scalars["String"]>
  city?: Maybe<Scalars["String"]>
  country?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["Int"]>
  name?: Maybe<Scalars["String"]>
  phone?: Maybe<Scalars["String"]>
  sid?: Maybe<Scalars["Int"]>
  zipCode?: Maybe<Scalars["String"]>
}

/**
 * A condition to be used against `StaffList` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type StaffListCondition = {
  /** Checks for equality with the object’s `address` field. */
  address?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `city` field. */
  city?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `country` field. */
  country?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `name` field. */
  name?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `phone` field. */
  phone?: InputMaybe<Scalars["String"]>
  /** Checks for equality with the object’s `sid` field. */
  sid?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `zipCode` field. */
  zipCode?: InputMaybe<Scalars["String"]>
}

/** A connection to a list of `StaffList` values. */
export type StaffListsConnection = {
  __typename?: "StaffListsConnection"
  /** A list of edges which contains the `StaffList` and cursor to aid in pagination. */
  edges: Array<StaffListsEdge>
  /** A list of `StaffList` objects. */
  nodes: Array<StaffList>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `StaffList` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `StaffList` edge in the connection. */
export type StaffListsEdge = {
  __typename?: "StaffListsEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `StaffList` at the end of the edge. */
  node: StaffList
}

/** Methods to use when ordering `StaffList`. */
export enum StaffListsOrderBy {
  AddressAsc = "ADDRESS_ASC",
  AddressDesc = "ADDRESS_DESC",
  CityAsc = "CITY_ASC",
  CityDesc = "CITY_DESC",
  CountryAsc = "COUNTRY_ASC",
  CountryDesc = "COUNTRY_DESC",
  IdAsc = "ID_ASC",
  IdDesc = "ID_DESC",
  NameAsc = "NAME_ASC",
  NameDesc = "NAME_DESC",
  Natural = "NATURAL",
  PhoneAsc = "PHONE_ASC",
  PhoneDesc = "PHONE_DESC",
  SidAsc = "SID_ASC",
  SidDesc = "SID_DESC",
  ZipCodeAsc = "ZIP_CODE_ASC",
  ZipCodeDesc = "ZIP_CODE_DESC",
}

/** Methods to use when ordering `Staff`. */
export enum StaffOrderBy {
  ActiveAsc = "ACTIVE_ASC",
  ActiveDesc = "ACTIVE_DESC",
  AddressIdAsc = "ADDRESS_ID_ASC",
  AddressIdDesc = "ADDRESS_ID_DESC",
  EmailAsc = "EMAIL_ASC",
  EmailDesc = "EMAIL_DESC",
  FirstNameAsc = "FIRST_NAME_ASC",
  FirstNameDesc = "FIRST_NAME_DESC",
  LastNameAsc = "LAST_NAME_ASC",
  LastNameDesc = "LAST_NAME_DESC",
  LastUpdateAsc = "LAST_UPDATE_ASC",
  LastUpdateDesc = "LAST_UPDATE_DESC",
  Natural = "NATURAL",
  PasswordAsc = "PASSWORD_ASC",
  PasswordDesc = "PASSWORD_DESC",
  PictureAsc = "PICTURE_ASC",
  PictureDesc = "PICTURE_DESC",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  StaffIdAsc = "STAFF_ID_ASC",
  StaffIdDesc = "STAFF_ID_DESC",
  StoreIdAsc = "STORE_ID_ASC",
  StoreIdDesc = "STORE_ID_DESC",
  UsernameAsc = "USERNAME_ASC",
  UsernameDesc = "USERNAME_DESC",
}

/** Represents an update to a `Staff`. Fields that are set will be updated. */
export type StaffPatch = {
  active?: InputMaybe<Scalars["Boolean"]>
  addressId?: InputMaybe<Scalars["Int"]>
  email?: InputMaybe<Scalars["String"]>
  firstName?: InputMaybe<Scalars["String"]>
  lastName?: InputMaybe<Scalars["String"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  password?: InputMaybe<Scalars["String"]>
  picture?: InputMaybe<Scalars["String"]>
  staffId?: InputMaybe<Scalars["Int"]>
  storeId?: InputMaybe<Scalars["Int"]>
  username?: InputMaybe<Scalars["String"]>
}

export type Store = Node & {
  __typename?: "Store"
  /** Reads a single `Address` that is related to this `Store`. */
  address?: Maybe<Address>
  addressId: Scalars["Int"]
  lastUpdate: Scalars["Datetime"]
  /** Reads a single `Staff` that is related to this `Store`. */
  managerStaff?: Maybe<Staff>
  managerStaffId: Scalars["Int"]
  /** A globally unique identifier. Can be used in various places throughout the system to identify this single value. */
  nodeId: Scalars["ID"]
  storeId: Scalars["Int"]
}

/** A condition to be used against `Store` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type StoreCondition = {
  /** Checks for equality with the object’s `addressId` field. */
  addressId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `lastUpdate` field. */
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  /** Checks for equality with the object’s `managerStaffId` field. */
  managerStaffId?: InputMaybe<Scalars["Int"]>
  /** Checks for equality with the object’s `storeId` field. */
  storeId?: InputMaybe<Scalars["Int"]>
}

/** An input for mutations affecting `Store` */
export type StoreInput = {
  addressId: Scalars["Int"]
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  managerStaffId: Scalars["Int"]
  storeId?: InputMaybe<Scalars["Int"]>
}

/** Represents an update to a `Store`. Fields that are set will be updated. */
export type StorePatch = {
  addressId?: InputMaybe<Scalars["Int"]>
  lastUpdate?: InputMaybe<Scalars["Datetime"]>
  managerStaffId?: InputMaybe<Scalars["Int"]>
  storeId?: InputMaybe<Scalars["Int"]>
}

/** A connection to a list of `Store` values. */
export type StoresConnection = {
  __typename?: "StoresConnection"
  /** A list of edges which contains the `Store` and cursor to aid in pagination. */
  edges: Array<StoresEdge>
  /** A list of `Store` objects. */
  nodes: Array<Store>
  /** Information to aid in pagination. */
  pageInfo: PageInfo
  /** The count of *all* `Store` you could get from the connection. */
  totalCount: Scalars["Int"]
}

/** A `Store` edge in the connection. */
export type StoresEdge = {
  __typename?: "StoresEdge"
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars["Cursor"]>
  /** The `Store` at the end of the edge. */
  node: Store
}

/** Methods to use when ordering `Store`. */
export enum StoresOrderBy {
  AddressIdAsc = "ADDRESS_ID_ASC",
  AddressIdDesc = "ADDRESS_ID_DESC",
  LastUpdateAsc = "LAST_UPDATE_ASC",
  LastUpdateDesc = "LAST_UPDATE_DESC",
  ManagerStaffIdAsc = "MANAGER_STAFF_ID_ASC",
  ManagerStaffIdDesc = "MANAGER_STAFF_ID_DESC",
  Natural = "NATURAL",
  PrimaryKeyAsc = "PRIMARY_KEY_ASC",
  PrimaryKeyDesc = "PRIMARY_KEY_DESC",
  StoreIdAsc = "STORE_ID_ASC",
  StoreIdDesc = "STORE_ID_DESC",
}

/** All input for the `updateActorByNodeId` mutation. */
export type UpdateActorByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Actor` to be updated. */
  nodeId: Scalars["ID"]
  /** An object where the defined keys will be set on the `Actor` being updated. */
  patch: ActorPatch
}

/** All input for the `updateActor` mutation. */
export type UpdateActorInput = {
  actorId: Scalars["Int"]
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** An object where the defined keys will be set on the `Actor` being updated. */
  patch: ActorPatch
}

/** The output of our update `Actor` mutation. */
export type UpdateActorPayload = {
  __typename?: "UpdateActorPayload"
  /** The `Actor` that was updated by this mutation. */
  actor?: Maybe<Actor>
  /** An edge for our `Actor`. May be used by Relay 1. */
  actorEdge?: Maybe<ActorsEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Actor` mutation. */
export type UpdateActorPayloadActorEdgeArgs = {
  orderBy?: InputMaybe<Array<ActorsOrderBy>>
}

/** All input for the `updateAddressByNodeId` mutation. */
export type UpdateAddressByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Address` to be updated. */
  nodeId: Scalars["ID"]
  /** An object where the defined keys will be set on the `Address` being updated. */
  patch: AddressPatch
}

/** All input for the `updateAddress` mutation. */
export type UpdateAddressInput = {
  addressId: Scalars["Int"]
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** An object where the defined keys will be set on the `Address` being updated. */
  patch: AddressPatch
}

/** The output of our update `Address` mutation. */
export type UpdateAddressPayload = {
  __typename?: "UpdateAddressPayload"
  /** The `Address` that was updated by this mutation. */
  address?: Maybe<Address>
  /** An edge for our `Address`. May be used by Relay 1. */
  addressEdge?: Maybe<AddressesEdge>
  /** Reads a single `City` that is related to this `Address`. */
  city?: Maybe<City>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Address` mutation. */
export type UpdateAddressPayloadAddressEdgeArgs = {
  orderBy?: InputMaybe<Array<AddressesOrderBy>>
}

/** All input for the `updateCategoryByNodeId` mutation. */
export type UpdateCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Category` to be updated. */
  nodeId: Scalars["ID"]
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch
}

/** All input for the `updateCategory` mutation. */
export type UpdateCategoryInput = {
  categoryId: Scalars["Int"]
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** An object where the defined keys will be set on the `Category` being updated. */
  patch: CategoryPatch
}

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayload = {
  __typename?: "UpdateCategoryPayload"
  /** The `Category` that was updated by this mutation. */
  category?: Maybe<Category>
  /** An edge for our `Category`. May be used by Relay 1. */
  categoryEdge?: Maybe<CategoriesEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Category` mutation. */
export type UpdateCategoryPayloadCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<CategoriesOrderBy>>
}

/** All input for the `updateCityByNodeId` mutation. */
export type UpdateCityByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `City` to be updated. */
  nodeId: Scalars["ID"]
  /** An object where the defined keys will be set on the `City` being updated. */
  patch: CityPatch
}

/** All input for the `updateCity` mutation. */
export type UpdateCityInput = {
  cityId: Scalars["Int"]
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** An object where the defined keys will be set on the `City` being updated. */
  patch: CityPatch
}

/** The output of our update `City` mutation. */
export type UpdateCityPayload = {
  __typename?: "UpdateCityPayload"
  /** The `City` that was updated by this mutation. */
  city?: Maybe<City>
  /** An edge for our `City`. May be used by Relay 1. */
  cityEdge?: Maybe<CitiesEdge>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Country` that is related to this `City`. */
  country?: Maybe<Country>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `City` mutation. */
export type UpdateCityPayloadCityEdgeArgs = {
  orderBy?: InputMaybe<Array<CitiesOrderBy>>
}

/** All input for the `updateCountryByNodeId` mutation. */
export type UpdateCountryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Country` to be updated. */
  nodeId: Scalars["ID"]
  /** An object where the defined keys will be set on the `Country` being updated. */
  patch: CountryPatch
}

/** All input for the `updateCountry` mutation. */
export type UpdateCountryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  countryId: Scalars["Int"]
  /** An object where the defined keys will be set on the `Country` being updated. */
  patch: CountryPatch
}

/** The output of our update `Country` mutation. */
export type UpdateCountryPayload = {
  __typename?: "UpdateCountryPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The `Country` that was updated by this mutation. */
  country?: Maybe<Country>
  /** An edge for our `Country`. May be used by Relay 1. */
  countryEdge?: Maybe<CountriesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Country` mutation. */
export type UpdateCountryPayloadCountryEdgeArgs = {
  orderBy?: InputMaybe<Array<CountriesOrderBy>>
}

/** All input for the `updateCustomerByNodeId` mutation. */
export type UpdateCustomerByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Customer` to be updated. */
  nodeId: Scalars["ID"]
  /** An object where the defined keys will be set on the `Customer` being updated. */
  patch: CustomerPatch
}

/** All input for the `updateCustomer` mutation. */
export type UpdateCustomerInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  customerId: Scalars["Int"]
  /** An object where the defined keys will be set on the `Customer` being updated. */
  patch: CustomerPatch
}

/** The output of our update `Customer` mutation. */
export type UpdateCustomerPayload = {
  __typename?: "UpdateCustomerPayload"
  /** Reads a single `Address` that is related to this `Customer`. */
  address?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The `Customer` that was updated by this mutation. */
  customer?: Maybe<Customer>
  /** An edge for our `Customer`. May be used by Relay 1. */
  customerEdge?: Maybe<CustomersEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Customer` mutation. */
export type UpdateCustomerPayloadCustomerEdgeArgs = {
  orderBy?: InputMaybe<Array<CustomersOrderBy>>
}

/** All input for the `updateFilmActorByNodeId` mutation. */
export type UpdateFilmActorByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `FilmActor` to be updated. */
  nodeId: Scalars["ID"]
  /** An object where the defined keys will be set on the `FilmActor` being updated. */
  patch: FilmActorPatch
}

/** All input for the `updateFilmActor` mutation. */
export type UpdateFilmActorInput = {
  actorId: Scalars["Int"]
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  filmId: Scalars["Int"]
  /** An object where the defined keys will be set on the `FilmActor` being updated. */
  patch: FilmActorPatch
}

/** The output of our update `FilmActor` mutation. */
export type UpdateFilmActorPayload = {
  __typename?: "UpdateFilmActorPayload"
  /** Reads a single `Actor` that is related to this `FilmActor`. */
  actor?: Maybe<Actor>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Film` that is related to this `FilmActor`. */
  film?: Maybe<Film>
  /** The `FilmActor` that was updated by this mutation. */
  filmActor?: Maybe<FilmActor>
  /** An edge for our `FilmActor`. May be used by Relay 1. */
  filmActorEdge?: Maybe<FilmActorsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `FilmActor` mutation. */
export type UpdateFilmActorPayloadFilmActorEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmActorsOrderBy>>
}

/** All input for the `updateFilmByNodeId` mutation. */
export type UpdateFilmByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Film` to be updated. */
  nodeId: Scalars["ID"]
  /** An object where the defined keys will be set on the `Film` being updated. */
  patch: FilmPatch
}

/** All input for the `updateFilmCategoryByNodeId` mutation. */
export type UpdateFilmCategoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `FilmCategory` to be updated. */
  nodeId: Scalars["ID"]
  /** An object where the defined keys will be set on the `FilmCategory` being updated. */
  patch: FilmCategoryPatch
}

/** All input for the `updateFilmCategory` mutation. */
export type UpdateFilmCategoryInput = {
  categoryId: Scalars["Int"]
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  filmId: Scalars["Int"]
  /** An object where the defined keys will be set on the `FilmCategory` being updated. */
  patch: FilmCategoryPatch
}

/** The output of our update `FilmCategory` mutation. */
export type UpdateFilmCategoryPayload = {
  __typename?: "UpdateFilmCategoryPayload"
  /** Reads a single `Category` that is related to this `FilmCategory`. */
  category?: Maybe<Category>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Film` that is related to this `FilmCategory`. */
  film?: Maybe<Film>
  /** The `FilmCategory` that was updated by this mutation. */
  filmCategory?: Maybe<FilmCategory>
  /** An edge for our `FilmCategory`. May be used by Relay 1. */
  filmCategoryEdge?: Maybe<FilmCategoriesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `FilmCategory` mutation. */
export type UpdateFilmCategoryPayloadFilmCategoryEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmCategoriesOrderBy>>
}

/** All input for the `updateFilm` mutation. */
export type UpdateFilmInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  filmId: Scalars["Int"]
  /** An object where the defined keys will be set on the `Film` being updated. */
  patch: FilmPatch
}

/** The output of our update `Film` mutation. */
export type UpdateFilmPayload = {
  __typename?: "UpdateFilmPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The `Film` that was updated by this mutation. */
  film?: Maybe<Film>
  /** An edge for our `Film`. May be used by Relay 1. */
  filmEdge?: Maybe<FilmsEdge>
  /** Reads a single `Language` that is related to this `Film`. */
  language?: Maybe<Language>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Film` mutation. */
export type UpdateFilmPayloadFilmEdgeArgs = {
  orderBy?: InputMaybe<Array<FilmsOrderBy>>
}

/** All input for the `updateInventoryByNodeId` mutation. */
export type UpdateInventoryByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Inventory` to be updated. */
  nodeId: Scalars["ID"]
  /** An object where the defined keys will be set on the `Inventory` being updated. */
  patch: InventoryPatch
}

/** All input for the `updateInventory` mutation. */
export type UpdateInventoryInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  inventoryId: Scalars["Int"]
  /** An object where the defined keys will be set on the `Inventory` being updated. */
  patch: InventoryPatch
}

/** The output of our update `Inventory` mutation. */
export type UpdateInventoryPayload = {
  __typename?: "UpdateInventoryPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Film` that is related to this `Inventory`. */
  film?: Maybe<Film>
  /** The `Inventory` that was updated by this mutation. */
  inventory?: Maybe<Inventory>
  /** An edge for our `Inventory`. May be used by Relay 1. */
  inventoryEdge?: Maybe<InventoriesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Inventory` mutation. */
export type UpdateInventoryPayloadInventoryEdgeArgs = {
  orderBy?: InputMaybe<Array<InventoriesOrderBy>>
}

/** All input for the `updateLanguageByNodeId` mutation. */
export type UpdateLanguageByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Language` to be updated. */
  nodeId: Scalars["ID"]
  /** An object where the defined keys will be set on the `Language` being updated. */
  patch: LanguagePatch
}

/** All input for the `updateLanguage` mutation. */
export type UpdateLanguageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  languageId: Scalars["Int"]
  /** An object where the defined keys will be set on the `Language` being updated. */
  patch: LanguagePatch
}

/** The output of our update `Language` mutation. */
export type UpdateLanguagePayload = {
  __typename?: "UpdateLanguagePayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** The `Language` that was updated by this mutation. */
  language?: Maybe<Language>
  /** An edge for our `Language`. May be used by Relay 1. */
  languageEdge?: Maybe<LanguagesEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
}

/** The output of our update `Language` mutation. */
export type UpdateLanguagePayloadLanguageEdgeArgs = {
  orderBy?: InputMaybe<Array<LanguagesOrderBy>>
}

/** All input for the `updatePaymentByNodeId` mutation. */
export type UpdatePaymentByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Payment` to be updated. */
  nodeId: Scalars["ID"]
  /** An object where the defined keys will be set on the `Payment` being updated. */
  patch: PaymentPatch
}

/** All input for the `updatePayment` mutation. */
export type UpdatePaymentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** An object where the defined keys will be set on the `Payment` being updated. */
  patch: PaymentPatch
  paymentId: Scalars["Int"]
}

/** The output of our update `Payment` mutation. */
export type UpdatePaymentPayload = {
  __typename?: "UpdatePaymentPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Customer` that is related to this `Payment`. */
  customer?: Maybe<Customer>
  /** The `Payment` that was updated by this mutation. */
  payment?: Maybe<Payment>
  /** An edge for our `Payment`. May be used by Relay 1. */
  paymentEdge?: Maybe<PaymentsEdge>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** Reads a single `Rental` that is related to this `Payment`. */
  rental?: Maybe<Rental>
  /** Reads a single `Staff` that is related to this `Payment`. */
  staff?: Maybe<Staff>
}

/** The output of our update `Payment` mutation. */
export type UpdatePaymentPayloadPaymentEdgeArgs = {
  orderBy?: InputMaybe<Array<PaymentsOrderBy>>
}

/** All input for the `updateRentalByNodeId` mutation. */
export type UpdateRentalByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Rental` to be updated. */
  nodeId: Scalars["ID"]
  /** An object where the defined keys will be set on the `Rental` being updated. */
  patch: RentalPatch
}

/** All input for the `updateRental` mutation. */
export type UpdateRentalInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** An object where the defined keys will be set on the `Rental` being updated. */
  patch: RentalPatch
  rentalId: Scalars["Int"]
}

/** The output of our update `Rental` mutation. */
export type UpdateRentalPayload = {
  __typename?: "UpdateRentalPayload"
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Customer` that is related to this `Rental`. */
  customer?: Maybe<Customer>
  /** Reads a single `Inventory` that is related to this `Rental`. */
  inventory?: Maybe<Inventory>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Rental` that was updated by this mutation. */
  rental?: Maybe<Rental>
  /** An edge for our `Rental`. May be used by Relay 1. */
  rentalEdge?: Maybe<RentalsEdge>
  /** Reads a single `Staff` that is related to this `Rental`. */
  staff?: Maybe<Staff>
}

/** The output of our update `Rental` mutation. */
export type UpdateRentalPayloadRentalEdgeArgs = {
  orderBy?: InputMaybe<Array<RentalsOrderBy>>
}

/** All input for the `updateStaffByNodeId` mutation. */
export type UpdateStaffByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Staff` to be updated. */
  nodeId: Scalars["ID"]
  /** An object where the defined keys will be set on the `Staff` being updated. */
  patch: StaffPatch
}

/** All input for the `updateStaff` mutation. */
export type UpdateStaffInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** An object where the defined keys will be set on the `Staff` being updated. */
  patch: StaffPatch
  staffId: Scalars["Int"]
}

/** The output of our update `Staff` mutation. */
export type UpdateStaffPayload = {
  __typename?: "UpdateStaffPayload"
  /** Reads a single `Address` that is related to this `Staff`. */
  address?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Staff` that was updated by this mutation. */
  staff?: Maybe<Staff>
  /** An edge for our `Staff`. May be used by Relay 1. */
  staffEdge?: Maybe<StaffEdge>
}

/** The output of our update `Staff` mutation. */
export type UpdateStaffPayloadStaffEdgeArgs = {
  orderBy?: InputMaybe<Array<StaffOrderBy>>
}

/** All input for the `updateStoreByNodeId` mutation. */
export type UpdateStoreByNodeIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** The globally unique `ID` which will identify a single `Store` to be updated. */
  nodeId: Scalars["ID"]
  /** An object where the defined keys will be set on the `Store` being updated. */
  patch: StorePatch
}

/** All input for the `updateStore` mutation. */
export type UpdateStoreInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars["String"]>
  /** An object where the defined keys will be set on the `Store` being updated. */
  patch: StorePatch
  storeId: Scalars["Int"]
}

/** The output of our update `Store` mutation. */
export type UpdateStorePayload = {
  __typename?: "UpdateStorePayload"
  /** Reads a single `Address` that is related to this `Store`. */
  address?: Maybe<Address>
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars["String"]>
  /** Reads a single `Staff` that is related to this `Store`. */
  managerStaff?: Maybe<Staff>
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>
  /** The `Store` that was updated by this mutation. */
  store?: Maybe<Store>
  /** An edge for our `Store`. May be used by Relay 1. */
  storeEdge?: Maybe<StoresEdge>
}

/** The output of our update `Store` mutation. */
export type UpdateStorePayloadStoreEdgeArgs = {
  orderBy?: InputMaybe<Array<StoresOrderBy>>
}

export type ActorNameFragment = {
  __typename?: "Actor"
  actorId: number
  firstName: string
  lastName: string
}

export type FilmListDescriptionFragment = {
  __typename?: "Film"
  title: string
  filmId: number
  length?: number | null
  description?: string | null
  filmActors: {
    __typename?: "FilmActorsConnection"
    nodes: Array<{
      __typename?: "FilmActor"
      actor?: {
        __typename?: "Actor"
        actorId: number
        firstName: string
        lastName: string
      } | null
    }>
  }
}

export type FilmsQueryVariables = Exact<{ [key: string]: never }>

export type FilmsQuery = {
  __typename?: "Query"
  films?: {
    __typename?: "FilmsConnection"
    nodes: Array<{
      __typename?: "Film"
      title: string
      filmId: number
      length?: number | null
      description?: string | null
      filmActors: {
        __typename?: "FilmActorsConnection"
        nodes: Array<{
          __typename?: "FilmActor"
          actor?: {
            __typename?: "Actor"
            actorId: number
            firstName: string
            lastName: string
          } | null
        }>
      }
    }>
  } | null
}

export const ActorNameFragmentDoc = gql`
  fragment ActorName on Actor {
    actorId
    firstName
    lastName
  }
`
export const FilmListDescriptionFragmentDoc = gql`
  fragment FilmListDescription on Film {
    title
    filmId
    length
    description
    filmActors(first: 10) {
      nodes {
        actor {
          ...ActorName
        }
      }
    }
  }
  ${ActorNameFragmentDoc}
`
export const FilmsDocument = gql`
  query Films {
    films(first: 10, orderBy: LENGTH_DESC) {
      nodes {
        ...FilmListDescription
      }
    }
  }
  ${FilmListDescriptionFragmentDoc}
`

/**
 * __useFilmsQuery__
 *
 * To run a query within a React component, call `useFilmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFilmsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFilmsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFilmsQuery(
  baseOptions?: Apollo.QueryHookOptions<FilmsQuery, FilmsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<FilmsQuery, FilmsQueryVariables>(
    FilmsDocument,
    options
  )
}
export function useFilmsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<FilmsQuery, FilmsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<FilmsQuery, FilmsQueryVariables>(
    FilmsDocument,
    options
  )
}
export type FilmsQueryHookResult = ReturnType<typeof useFilmsQuery>
export type FilmsLazyQueryHookResult = ReturnType<typeof useFilmsLazyQuery>
export type FilmsQueryResult = Apollo.QueryResult<
  FilmsQuery,
  FilmsQueryVariables
>
