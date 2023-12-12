export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateManyTenantsInput = {
  /** Array of records to create */
  tenants: Array<TenantInput>;
};

export type CreateOneTenantInput = {
  /** The record to create */
  tenant: TenantInput;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int']['output'];
};

export type DeleteManyTenantsInput = {
  /** Filter to find records to delete */
  filter: TenantDeleteFilter;
};

export type DeleteOneTenantInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export enum Gender {
  Female = 'female',
  Male = 'male'
}

export type GenderFilterComparison = {
  eq?: InputMaybe<Gender>;
  gt?: InputMaybe<Gender>;
  gte?: InputMaybe<Gender>;
  iLike?: InputMaybe<Gender>;
  in?: InputMaybe<Array<Gender>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Gender>;
  lt?: InputMaybe<Gender>;
  lte?: InputMaybe<Gender>;
  neq?: InputMaybe<Gender>;
  notILike?: InputMaybe<Gender>;
  notIn?: InputMaybe<Array<Gender>>;
  notLike?: InputMaybe<Gender>;
};

export type IdFilterComparison = {
  eq?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  iLike?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  neq?: InputMaybe<Scalars['ID']['input']>;
  notILike?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
  notLike?: InputMaybe<Scalars['ID']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyTenants: Array<Tenant>;
  createOneTenant: Tenant;
  deleteManyTenants: DeleteManyResponse;
  deleteOneTenant: TenantDeleteResponse;
  updateManyTenants: UpdateManyResponse;
  updateOneTenant: Tenant;
};


export type MutationCreateManyTenantsArgs = {
  input: CreateManyTenantsInput;
};


export type MutationCreateOneTenantArgs = {
  input: CreateOneTenantInput;
};


export type MutationDeleteManyTenantsArgs = {
  input: DeleteManyTenantsInput;
};


export type MutationDeleteOneTenantArgs = {
  input: DeleteOneTenantInput;
};


export type MutationUpdateManyTenantsArgs = {
  input: UpdateManyTenantsInput;
};


export type MutationUpdateOneTenantArgs = {
  input: UpdateOneTenantInput;
};

export type NumberFieldComparison = {
  between?: InputMaybe<NumberFieldComparisonBetween>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
  notBetween?: InputMaybe<NumberFieldComparisonBetween>;
  notIn?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type NumberFieldComparisonBetween = {
  lower: Scalars['Float']['input'];
  upper: Scalars['Float']['input'];
};

export type OffsetPageInfo = {
  __typename?: 'OffsetPageInfo';
  /** true if paging forward and there are more records. */
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  /** true if paging backwards and there are more records. */
  hasPreviousPage?: Maybe<Scalars['Boolean']['output']>;
};

export type OffsetPaging = {
  /** Limit the number of records returned */
  limit?: InputMaybe<Scalars['Int']['input']>;
  /** Offset to start returning records from */
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  tenant: Tenant;
  tenants: TenantConnection;
};


export type QueryTenantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTenantsArgs = {
  filter?: TenantFilter;
  paging?: OffsetPaging;
  sorting?: Array<TenantSort>;
};

/** Sort Directions */
export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

/** Sort Nulls Options */
export enum SortNulls {
  NullsFirst = 'NULLS_FIRST',
  NullsLast = 'NULLS_LAST'
}

export type Sprint = {
  __typename?: 'Sprint';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  taskSprintJunctions?: Maybe<Array<TaskSprintJunction>>;
};

export type SprintNonEmbeddedInput = {
  name: Scalars['String']['input'];
  taskSprintJunctions?: InputMaybe<Array<TaskSprintJunctionNonEmbeddedInput>>;
};

export type StringFieldComparison = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  iLike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  notILike?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  notLike?: InputMaybe<Scalars['String']['input']>;
};

export type Task = {
  __typename?: 'Task';
  comments?: Maybe<Array<TaskComment>>;
  details: TaskDetails;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  taskSprintJunctions?: Maybe<Array<TaskSprintJunction>>;
  user: User;
  userId: Scalars['String']['output'];
};

export type TaskComment = {
  __typename?: 'TaskComment';
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type TaskCommentEmbeddedInput = {
  text: Scalars['String']['input'];
};

export type TaskDetails = {
  __typename?: 'TaskDetails';
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type TaskDetailsEmbeddedInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type TaskNonEmbeddedInput = {
  comments?: InputMaybe<Array<TaskCommentEmbeddedInput>>;
  details: TaskDetailsEmbeddedInput;
  name: Scalars['String']['input'];
  taskSprintJunctions?: InputMaybe<Array<TaskSprintJunctionNonEmbeddedInput>>;
  user: UserNonEmbeddedInput;
  userId: Scalars['String']['input'];
};

export type TaskSprintJunction = {
  __typename?: 'TaskSprintJunction';
  id: Scalars['ID']['output'];
  sprint: Sprint;
  sprintId: Scalars['String']['output'];
  task: Task;
  taskId: Scalars['String']['output'];
};

export type TaskSprintJunctionNonEmbeddedInput = {
  sprint: SprintNonEmbeddedInput;
  sprintId: Scalars['String']['input'];
  task: TaskNonEmbeddedInput;
  taskId: Scalars['String']['input'];
};

export type Tenant = {
  __typename?: 'Tenant';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tenantBilling?: Maybe<TenantBilling>;
  tenantBillingId?: Maybe<Scalars['String']['output']>;
  users: TenantUsersConnection;
};


export type TenantUsersArgs = {
  filter?: UserFilter;
  paging?: OffsetPaging;
  sorting?: Array<UserSort>;
};

export type TenantBilling = {
  __typename?: 'TenantBilling';
  id: Scalars['ID']['output'];
  phoneNumber: Scalars['String']['output'];
  taxNumber: Scalars['String']['output'];
  tenant: Tenant;
  tenantId: Scalars['String']['output'];
};

export type TenantBillingNonEmbeddedInput = {
  phoneNumber: Scalars['String']['input'];
  taxNumber: Scalars['String']['input'];
  tenant: TenantNonEmbeddedInput;
  tenantId: Scalars['String']['input'];
};

export type TenantConnection = {
  __typename?: 'TenantConnection';
  /** Array of nodes. */
  nodes: Array<Tenant>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type TenantDatoFilterComparison = {
  eq?: InputMaybe<TenantNonEmbeddedInput>;
  gt?: InputMaybe<TenantNonEmbeddedInput>;
  gte?: InputMaybe<TenantNonEmbeddedInput>;
  iLike?: InputMaybe<TenantNonEmbeddedInput>;
  in?: InputMaybe<Array<TenantNonEmbeddedInput>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<TenantNonEmbeddedInput>;
  lt?: InputMaybe<TenantNonEmbeddedInput>;
  lte?: InputMaybe<TenantNonEmbeddedInput>;
  neq?: InputMaybe<TenantNonEmbeddedInput>;
  notILike?: InputMaybe<TenantNonEmbeddedInput>;
  notIn?: InputMaybe<Array<TenantNonEmbeddedInput>>;
  notLike?: InputMaybe<TenantNonEmbeddedInput>;
};

export type TenantDeleteFilter = {
  and?: InputMaybe<Array<TenantDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TenantDeleteFilter>>;
};

export type TenantDeleteResponse = {
  __typename?: 'TenantDeleteResponse';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tenantBilling?: Maybe<TenantBilling>;
  tenantBillingId?: Maybe<Scalars['String']['output']>;
  users?: Maybe<Array<User>>;
};

export type TenantFilter = {
  and?: InputMaybe<Array<TenantFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TenantFilter>>;
  tenantBilling?: InputMaybe<TenantFilterTenantBillingFilter>;
  users?: InputMaybe<TenantFilterUserFilter>;
};

export type TenantFilterTenantBillingFilter = {
  and?: InputMaybe<Array<TenantFilterTenantBillingFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TenantFilterTenantBillingFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  taxNumber?: InputMaybe<StringFieldComparison>;
  tenant?: InputMaybe<TenantDatoFilterComparison>;
  tenantId?: InputMaybe<StringFieldComparison>;
};

export type TenantFilterUserFilter = {
  age?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<TenantFilterUserFilter>>;
  gender?: InputMaybe<GenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TenantFilterUserFilter>>;
  tenant?: InputMaybe<TenantDatoFilterComparison>;
  tenantId?: InputMaybe<StringFieldComparison>;
};

export type TenantInput = {
  name: Scalars['String']['input'];
};

export type TenantNonEmbeddedInput = {
  name: Scalars['String']['input'];
  tenantBilling?: InputMaybe<TenantBillingNonEmbeddedInput>;
  tenantBillingId?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<UserNonEmbeddedInput>>;
};

export type TenantSort = {
  direction: SortDirection;
  field: TenantSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TenantSortFields {
  Id = 'id',
  Name = 'name'
}

export type TenantUpdate = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type TenantUpdateFilter = {
  and?: InputMaybe<Array<TenantUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TenantUpdateFilter>>;
};

export type TenantUsersConnection = {
  __typename?: 'TenantUsersConnection';
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type UpdateManyResponse = {
  __typename?: 'UpdateManyResponse';
  /** The number of records updated. */
  updatedCount: Scalars['Int']['output'];
};

export type UpdateManyTenantsInput = {
  /** Filter used to find fields to update */
  filter: TenantUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: TenantUpdate;
};

export type UpdateOneTenantInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: TenantUpdate;
};

export type User = {
  __typename?: 'User';
  age: Scalars['Float']['output'];
  gender: Gender;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tasks?: Maybe<Array<Task>>;
  tenant: Tenant;
  tenantId: Scalars['String']['output'];
};

export type UserDatoFilterComparison = {
  eq?: InputMaybe<UserNonEmbeddedInput>;
  gt?: InputMaybe<UserNonEmbeddedInput>;
  gte?: InputMaybe<UserNonEmbeddedInput>;
  iLike?: InputMaybe<UserNonEmbeddedInput>;
  in?: InputMaybe<Array<UserNonEmbeddedInput>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<UserNonEmbeddedInput>;
  lt?: InputMaybe<UserNonEmbeddedInput>;
  lte?: InputMaybe<UserNonEmbeddedInput>;
  neq?: InputMaybe<UserNonEmbeddedInput>;
  notILike?: InputMaybe<UserNonEmbeddedInput>;
  notIn?: InputMaybe<Array<UserNonEmbeddedInput>>;
  notLike?: InputMaybe<UserNonEmbeddedInput>;
};

export type UserFilter = {
  age?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<UserFilter>>;
  gender?: InputMaybe<GenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilter>>;
  tasks?: InputMaybe<UserFilterTaskFilter>;
  tenant?: InputMaybe<TenantDatoFilterComparison>;
  tenantId?: InputMaybe<StringFieldComparison>;
};

export type UserFilterTaskFilter = {
  and?: InputMaybe<Array<UserFilterTaskFilter>>;
  details?: InputMaybe<UserFilterTaskFilterTaskDetailsFilter>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserFilterTaskFilter>>;
  user?: InputMaybe<UserDatoFilterComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type UserFilterTaskFilterTaskDetailsFilter = {
  and?: InputMaybe<Array<UserFilterTaskFilterTaskDetailsFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<UserFilterTaskFilterTaskDetailsFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type UserNonEmbeddedInput = {
  age: Scalars['Float']['input'];
  gender: Gender;
  name: Scalars['String']['input'];
  tasks?: InputMaybe<Array<TaskNonEmbeddedInput>>;
  tenant: TenantNonEmbeddedInput;
  tenantId: Scalars['String']['input'];
};

export type UserSort = {
  direction: SortDirection;
  field: UserSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum UserSortFields {
  Age = 'age',
  Gender = 'gender',
  Id = 'id',
  Name = 'name',
  Tenant = 'tenant',
  TenantId = 'tenantId'
}
