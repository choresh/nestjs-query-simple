import { GraphQLClient } from 'graphql-request';
import { GraphQLClientRequestHeaders } from 'graphql-request/build/cjs/types';
import gql from 'graphql-tag';
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

export type CreateManySprintsInput = {
  /** Array of records to create */
  sprints: Array<SprintInput>;
};

export type CreateManyTaskSprintJunctionsInput = {
  /** Array of records to create */
  taskSprintJunctions: Array<TaskSprintJunctionInput>;
};

export type CreateManyTasksInput = {
  /** Array of records to create */
  tasks: Array<TaskInput>;
};

export type CreateManyTenantBillingsInput = {
  /** Array of records to create */
  tenantBillings: Array<TenantBillingInput>;
};

export type CreateManyTenantsInput = {
  /** Array of records to create */
  tenants: Array<TenantInput>;
};

export type CreateManyUsersInput = {
  /** Array of records to create */
  users: Array<UserInput>;
};

export type CreateOneSprintInput = {
  /** The record to create */
  sprint: SprintInput;
};

export type CreateOneTaskInput = {
  /** The record to create */
  task: TaskInput;
};

export type CreateOneTaskSprintJunctionInput = {
  /** The record to create */
  taskSprintJunction: TaskSprintJunctionInput;
};

export type CreateOneTenantBillingInput = {
  /** The record to create */
  tenantBilling: TenantBillingInput;
};

export type CreateOneTenantInput = {
  /** The record to create */
  tenant: TenantInput;
};

export type CreateOneUserInput = {
  /** The record to create */
  user: UserInput;
};

export type DeleteManyResponse = {
  __typename?: 'DeleteManyResponse';
  /** The number of records deleted. */
  deletedCount: Scalars['Int']['output'];
};

export type DeleteManySprintsInput = {
  /** Filter to find records to delete */
  filter: SprintDeleteFilter;
};

export type DeleteManyTaskSprintJunctionsInput = {
  /** Filter to find records to delete */
  filter: TaskSprintJunctionDeleteFilter;
};

export type DeleteManyTasksInput = {
  /** Filter to find records to delete */
  filter: TaskDeleteFilter;
};

export type DeleteManyTenantBillingsInput = {
  /** Filter to find records to delete */
  filter: TenantBillingDeleteFilter;
};

export type DeleteManyTenantsInput = {
  /** Filter to find records to delete */
  filter: TenantDeleteFilter;
};

export type DeleteManyUsersInput = {
  /** Filter to find records to delete */
  filter: UserDeleteFilter;
};

export type DeleteOneSprintInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneTaskInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneTaskSprintJunctionInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneTenantBillingInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneTenantInput = {
  /** The id of the record to delete. */
  id: Scalars['ID']['input'];
};

export type DeleteOneUserInput = {
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

export type GenderInfo = {
  __typename?: 'GenderInfo';
  avgAge: Scalars['Float']['output'];
  count: Scalars['Float']['output'];
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
  createManySprints: Array<Sprint>;
  createManyTaskSprintJunctions: Array<TaskSprintJunction>;
  createManyTasks: Array<Task>;
  createManyTenantBillings: Array<TenantBilling>;
  createManyTenants: Array<Tenant>;
  createManyUsers: Array<User>;
  createOneSprint: Sprint;
  createOneTask: Task;
  createOneTaskSprintJunction: TaskSprintJunction;
  createOneTenant: Tenant;
  createOneTenantBilling: TenantBilling;
  createOneUser: User;
  deleteManySprints: DeleteManyResponse;
  deleteManyTaskSprintJunctions: DeleteManyResponse;
  deleteManyTasks: DeleteManyResponse;
  deleteManyTenantBillings: DeleteManyResponse;
  deleteManyTenants: DeleteManyResponse;
  deleteManyUsers: DeleteManyResponse;
  deleteOneSprint: SprintDeleteResponse;
  deleteOneTask: TaskDeleteResponse;
  deleteOneTaskSprintJunction: TaskSprintJunctionDeleteResponse;
  deleteOneTenant: TenantDeleteResponse;
  deleteOneTenantBilling: TenantBillingDeleteResponse;
  deleteOneUser: UserDeleteResponse;
  updateManySprints: UpdateManyResponse;
  updateManyTaskSprintJunctions: UpdateManyResponse;
  updateManyTasks: UpdateManyResponse;
  updateManyTenantBillings: UpdateManyResponse;
  updateManyTenants: UpdateManyResponse;
  updateManyUsers: UpdateManyResponse;
  updateOneSprint: Sprint;
  updateOneTask: Task;
  updateOneTaskSprintJunction: TaskSprintJunction;
  updateOneTenant: Tenant;
  updateOneTenantBilling: TenantBilling;
  updateOneUser: User;
};


export type MutationCreateManySprintsArgs = {
  input: CreateManySprintsInput;
};


export type MutationCreateManyTaskSprintJunctionsArgs = {
  input: CreateManyTaskSprintJunctionsInput;
};


export type MutationCreateManyTasksArgs = {
  input: CreateManyTasksInput;
};


export type MutationCreateManyTenantBillingsArgs = {
  input: CreateManyTenantBillingsInput;
};


export type MutationCreateManyTenantsArgs = {
  input: CreateManyTenantsInput;
};


export type MutationCreateManyUsersArgs = {
  input: CreateManyUsersInput;
};


export type MutationCreateOneSprintArgs = {
  input: CreateOneSprintInput;
};


export type MutationCreateOneTaskArgs = {
  input: CreateOneTaskInput;
};


export type MutationCreateOneTaskSprintJunctionArgs = {
  input: CreateOneTaskSprintJunctionInput;
};


export type MutationCreateOneTenantArgs = {
  input: CreateOneTenantInput;
};


export type MutationCreateOneTenantBillingArgs = {
  input: CreateOneTenantBillingInput;
};


export type MutationCreateOneUserArgs = {
  input: CreateOneUserInput;
};


export type MutationDeleteManySprintsArgs = {
  input: DeleteManySprintsInput;
};


export type MutationDeleteManyTaskSprintJunctionsArgs = {
  input: DeleteManyTaskSprintJunctionsInput;
};


export type MutationDeleteManyTasksArgs = {
  input: DeleteManyTasksInput;
};


export type MutationDeleteManyTenantBillingsArgs = {
  input: DeleteManyTenantBillingsInput;
};


export type MutationDeleteManyTenantsArgs = {
  input: DeleteManyTenantsInput;
};


export type MutationDeleteManyUsersArgs = {
  input: DeleteManyUsersInput;
};


export type MutationDeleteOneSprintArgs = {
  input: DeleteOneSprintInput;
};


export type MutationDeleteOneTaskArgs = {
  input: DeleteOneTaskInput;
};


export type MutationDeleteOneTaskSprintJunctionArgs = {
  input: DeleteOneTaskSprintJunctionInput;
};


export type MutationDeleteOneTenantArgs = {
  input: DeleteOneTenantInput;
};


export type MutationDeleteOneTenantBillingArgs = {
  input: DeleteOneTenantBillingInput;
};


export type MutationDeleteOneUserArgs = {
  input: DeleteOneUserInput;
};


export type MutationUpdateManySprintsArgs = {
  input: UpdateManySprintsInput;
};


export type MutationUpdateManyTaskSprintJunctionsArgs = {
  input: UpdateManyTaskSprintJunctionsInput;
};


export type MutationUpdateManyTasksArgs = {
  input: UpdateManyTasksInput;
};


export type MutationUpdateManyTenantBillingsArgs = {
  input: UpdateManyTenantBillingsInput;
};


export type MutationUpdateManyTenantsArgs = {
  input: UpdateManyTenantsInput;
};


export type MutationUpdateManyUsersArgs = {
  input: UpdateManyUsersInput;
};


export type MutationUpdateOneSprintArgs = {
  input: UpdateOneSprintInput;
};


export type MutationUpdateOneTaskArgs = {
  input: UpdateOneTaskInput;
};


export type MutationUpdateOneTaskSprintJunctionArgs = {
  input: UpdateOneTaskSprintJunctionInput;
};


export type MutationUpdateOneTenantArgs = {
  input: UpdateOneTenantInput;
};


export type MutationUpdateOneTenantBillingArgs = {
  input: UpdateOneTenantBillingInput;
};


export type MutationUpdateOneUserArgs = {
  input: UpdateOneUserInput;
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
  demonstrateComplexQuery: UsersInfo;
  demonstrateTransactionBlock: Array<User>;
  demonstrateTransactionFlow: Array<User>;
  demonstrateTransactionLock: Array<User>;
  sprint: Sprint;
  sprints: SprintConnection;
  task: Task;
  taskSprintJunction: TaskSprintJunction;
  taskSprintJunctions: TaskSprintJunctionConnection;
  tasks: TaskConnection;
  tenant: Tenant;
  tenantBilling: TenantBilling;
  tenantBillings: TenantBillingConnection;
  tenants: TenantConnection;
  user: User;
  userByIndex: User;
  users: UserConnection;
};


export type QuerySprintArgs = {
  id: Scalars['ID']['input'];
};


export type QuerySprintsArgs = {
  filter?: SprintFilter;
  paging?: OffsetPaging;
  sorting?: Array<SprintSort>;
};


export type QueryTaskArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskSprintJunctionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTaskSprintJunctionsArgs = {
  filter?: TaskSprintJunctionFilter;
  paging?: OffsetPaging;
  sorting?: Array<TaskSprintJunctionSort>;
};


export type QueryTasksArgs = {
  filter?: TaskFilter;
  paging?: OffsetPaging;
  sorting?: Array<TaskSort>;
};


export type QueryTenantArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTenantBillingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryTenantBillingsArgs = {
  filter?: TenantBillingFilter;
  paging?: OffsetPaging;
  sorting?: Array<TenantBillingSort>;
};


export type QueryTenantsArgs = {
  filter?: TenantFilter;
  paging?: OffsetPaging;
  sorting?: Array<TenantSort>;
};


export type QueryUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryUserByIndexArgs = {
  name: Scalars['String']['input'];
  tenanId: Scalars['String']['input'];
};


export type QueryUsersArgs = {
  filter?: UserFilter;
  paging?: OffsetPaging;
  sorting?: Array<UserSort>;
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
  taskSprintJunctions: SprintTaskSprintJunctionsConnection;
};


export type SprintTaskSprintJunctionsArgs = {
  filter?: TaskSprintJunctionFilter;
  paging?: OffsetPaging;
  sorting?: Array<TaskSprintJunctionSort>;
};

export type SprintConnection = {
  __typename?: 'SprintConnection';
  /** Array of nodes. */
  nodes: Array<Sprint>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type SprintDatoFilterComparison = {
  eq?: InputMaybe<SprintNonEmbeddedInput>;
  gt?: InputMaybe<SprintNonEmbeddedInput>;
  gte?: InputMaybe<SprintNonEmbeddedInput>;
  iLike?: InputMaybe<SprintNonEmbeddedInput>;
  in?: InputMaybe<Array<SprintNonEmbeddedInput>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<SprintNonEmbeddedInput>;
  lt?: InputMaybe<SprintNonEmbeddedInput>;
  lte?: InputMaybe<SprintNonEmbeddedInput>;
  neq?: InputMaybe<SprintNonEmbeddedInput>;
  notILike?: InputMaybe<SprintNonEmbeddedInput>;
  notIn?: InputMaybe<Array<SprintNonEmbeddedInput>>;
  notLike?: InputMaybe<SprintNonEmbeddedInput>;
};

export type SprintDeleteFilter = {
  and?: InputMaybe<Array<SprintDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SprintDeleteFilter>>;
};

export type SprintDeleteResponse = {
  __typename?: 'SprintDeleteResponse';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  taskSprintJunctions?: Maybe<Array<TaskSprintJunction>>;
};

export type SprintFilter = {
  and?: InputMaybe<Array<SprintFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SprintFilter>>;
  taskSprintJunctions?: InputMaybe<SprintFilterTaskSprintJunctionFilter>;
};

export type SprintFilterTaskSprintJunctionFilter = {
  and?: InputMaybe<Array<SprintFilterTaskSprintJunctionFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<SprintFilterTaskSprintJunctionFilter>>;
  sprint?: InputMaybe<SprintDatoFilterComparison>;
  sprintId?: InputMaybe<StringFieldComparison>;
  task?: InputMaybe<TaskDatoFilterComparison>;
  taskId?: InputMaybe<StringFieldComparison>;
};

export type SprintInput = {
  name: Scalars['String']['input'];
};

export type SprintNonEmbeddedInput = {
  name: Scalars['String']['input'];
  taskSprintJunctions?: InputMaybe<Array<TaskSprintJunctionNonEmbeddedInput>>;
};

export type SprintSort = {
  direction: SortDirection;
  field: SprintSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum SprintSortFields {
  Id = 'id',
  Name = 'name'
}

export type SprintTaskSprintJunctionsConnection = {
  __typename?: 'SprintTaskSprintJunctionsConnection';
  /** Array of nodes. */
  nodes: Array<TaskSprintJunction>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type SprintUpdate = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type SprintUpdateFilter = {
  and?: InputMaybe<Array<SprintUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<SprintUpdateFilter>>;
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
  taskSprintJunctions: TaskTaskSprintJunctionsConnection;
  user: User;
  userId: Scalars['String']['output'];
};


export type TaskTaskSprintJunctionsArgs = {
  filter?: TaskSprintJunctionFilter;
  paging?: OffsetPaging;
  sorting?: Array<TaskSprintJunctionSort>;
};

export type TaskComment = {
  __typename?: 'TaskComment';
  id: Scalars['ID']['output'];
  text: Scalars['String']['output'];
};

export type TaskCommentEmbeddedInput = {
  text: Scalars['String']['input'];
};

export type TaskCommentInput = {
  text: Scalars['String']['input'];
};

export type TaskCommentUpdate = {
  text: Scalars['String']['input'];
};

export type TaskConnection = {
  __typename?: 'TaskConnection';
  /** Array of nodes. */
  nodes: Array<Task>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type TaskDatoFilterComparison = {
  eq?: InputMaybe<TaskNonEmbeddedInput>;
  gt?: InputMaybe<TaskNonEmbeddedInput>;
  gte?: InputMaybe<TaskNonEmbeddedInput>;
  iLike?: InputMaybe<TaskNonEmbeddedInput>;
  in?: InputMaybe<Array<TaskNonEmbeddedInput>>;
  is?: InputMaybe<Scalars['Boolean']['input']>;
  isNot?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<TaskNonEmbeddedInput>;
  lt?: InputMaybe<TaskNonEmbeddedInput>;
  lte?: InputMaybe<TaskNonEmbeddedInput>;
  neq?: InputMaybe<TaskNonEmbeddedInput>;
  notILike?: InputMaybe<TaskNonEmbeddedInput>;
  notIn?: InputMaybe<Array<TaskNonEmbeddedInput>>;
  notLike?: InputMaybe<TaskNonEmbeddedInput>;
};

export type TaskDeleteFilter = {
  and?: InputMaybe<Array<TaskDeleteFilter>>;
  details?: InputMaybe<TaskDeleteFilterTaskDetailsDeleteFilter>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskDeleteFilter>>;
  user?: InputMaybe<UserDatoFilterComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type TaskDeleteFilterTaskDetailsDeleteFilter = {
  and?: InputMaybe<Array<TaskDeleteFilterTaskDetailsDeleteFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskDeleteFilterTaskDetailsDeleteFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type TaskDeleteResponse = {
  __typename?: 'TaskDeleteResponse';
  comments?: Maybe<Array<TaskComment>>;
  details?: Maybe<TaskDetails>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  taskSprintJunctions?: Maybe<Array<TaskSprintJunction>>;
  user?: Maybe<User>;
  userId?: Maybe<Scalars['String']['output']>;
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

export type TaskDetailsInput = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type TaskDetailsUpdate = {
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
};

export type TaskFilter = {
  and?: InputMaybe<Array<TaskFilter>>;
  details?: InputMaybe<TaskFilterTaskDetailsFilter>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskFilter>>;
  taskSprintJunctions?: InputMaybe<TaskFilterTaskSprintJunctionFilter>;
  user?: InputMaybe<UserDatoFilterComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type TaskFilterTaskDetailsFilter = {
  and?: InputMaybe<Array<TaskFilterTaskDetailsFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskFilterTaskDetailsFilter>>;
  title?: InputMaybe<StringFieldComparison>;
};

export type TaskFilterTaskSprintJunctionFilter = {
  and?: InputMaybe<Array<TaskFilterTaskSprintJunctionFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskFilterTaskSprintJunctionFilter>>;
  sprint?: InputMaybe<SprintDatoFilterComparison>;
  sprintId?: InputMaybe<StringFieldComparison>;
  task?: InputMaybe<TaskDatoFilterComparison>;
  taskId?: InputMaybe<StringFieldComparison>;
};

export type TaskInput = {
  comments: Array<TaskCommentInput>;
  details: TaskDetailsInput;
  name: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type TaskNonEmbeddedInput = {
  comments?: InputMaybe<Array<TaskCommentEmbeddedInput>>;
  details: TaskDetailsEmbeddedInput;
  name: Scalars['String']['input'];
  taskSprintJunctions?: InputMaybe<Array<TaskSprintJunctionNonEmbeddedInput>>;
  user: UserNonEmbeddedInput;
  userId: Scalars['String']['input'];
};

export type TaskSort = {
  direction: SortDirection;
  field: TaskSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TaskSortFields {
  Details = 'details',
  Id = 'id',
  Name = 'name',
  User = 'user',
  UserId = 'userId'
}

export type TaskSprintJunction = {
  __typename?: 'TaskSprintJunction';
  id: Scalars['ID']['output'];
  sprint: Sprint;
  sprintId: Scalars['String']['output'];
  task: Task;
  taskId: Scalars['String']['output'];
};

export type TaskSprintJunctionConnection = {
  __typename?: 'TaskSprintJunctionConnection';
  /** Array of nodes. */
  nodes: Array<TaskSprintJunction>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type TaskSprintJunctionDeleteFilter = {
  and?: InputMaybe<Array<TaskSprintJunctionDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskSprintJunctionDeleteFilter>>;
  sprint?: InputMaybe<SprintDatoFilterComparison>;
  sprintId?: InputMaybe<StringFieldComparison>;
  task?: InputMaybe<TaskDatoFilterComparison>;
  taskId?: InputMaybe<StringFieldComparison>;
};

export type TaskSprintJunctionDeleteResponse = {
  __typename?: 'TaskSprintJunctionDeleteResponse';
  id?: Maybe<Scalars['ID']['output']>;
  sprint?: Maybe<Sprint>;
  sprintId?: Maybe<Scalars['String']['output']>;
  task?: Maybe<Task>;
  taskId?: Maybe<Scalars['String']['output']>;
};

export type TaskSprintJunctionFilter = {
  and?: InputMaybe<Array<TaskSprintJunctionFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskSprintJunctionFilter>>;
  sprint?: InputMaybe<SprintDatoFilterComparison>;
  sprintId?: InputMaybe<StringFieldComparison>;
  task?: InputMaybe<TaskDatoFilterComparison>;
  taskId?: InputMaybe<StringFieldComparison>;
};

export type TaskSprintJunctionInput = {
  sprintId: Scalars['String']['input'];
  taskId: Scalars['String']['input'];
};

export type TaskSprintJunctionNonEmbeddedInput = {
  sprint: SprintNonEmbeddedInput;
  sprintId: Scalars['String']['input'];
  task: TaskNonEmbeddedInput;
  taskId: Scalars['String']['input'];
};

export type TaskSprintJunctionSort = {
  direction: SortDirection;
  field: TaskSprintJunctionSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TaskSprintJunctionSortFields {
  Id = 'id',
  Sprint = 'sprint',
  SprintId = 'sprintId',
  Task = 'task',
  TaskId = 'taskId'
}

export type TaskSprintJunctionUpdate = {
  sprintId: Scalars['String']['input'];
  taskId?: InputMaybe<Scalars['String']['input']>;
};

export type TaskSprintJunctionUpdateFilter = {
  and?: InputMaybe<Array<TaskSprintJunctionUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskSprintJunctionUpdateFilter>>;
  sprint?: InputMaybe<SprintDatoFilterComparison>;
  sprintId?: InputMaybe<StringFieldComparison>;
  task?: InputMaybe<TaskDatoFilterComparison>;
  taskId?: InputMaybe<StringFieldComparison>;
};

export type TaskTaskSprintJunctionsConnection = {
  __typename?: 'TaskTaskSprintJunctionsConnection';
  /** Array of nodes. */
  nodes: Array<TaskSprintJunction>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type TaskUpdate = {
  comments?: InputMaybe<Array<TaskCommentUpdate>>;
  details?: InputMaybe<TaskDetailsUpdate>;
  name?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type TaskUpdateFilter = {
  and?: InputMaybe<Array<TaskUpdateFilter>>;
  details?: InputMaybe<TaskUpdateFilterTaskDetailsUpdateFilter>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<TaskUpdateFilter>>;
  user?: InputMaybe<UserDatoFilterComparison>;
  userId?: InputMaybe<StringFieldComparison>;
};

export type TaskUpdateFilterTaskDetailsUpdateFilter = {
  and?: InputMaybe<Array<TaskUpdateFilterTaskDetailsUpdateFilter>>;
  description?: InputMaybe<StringFieldComparison>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TaskUpdateFilterTaskDetailsUpdateFilter>>;
  title?: InputMaybe<StringFieldComparison>;
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

export type TenantBillingConnection = {
  __typename?: 'TenantBillingConnection';
  /** Array of nodes. */
  nodes: Array<TenantBilling>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type TenantBillingDeleteFilter = {
  and?: InputMaybe<Array<TenantBillingDeleteFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TenantBillingDeleteFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  taxNumber?: InputMaybe<StringFieldComparison>;
  tenant?: InputMaybe<TenantDatoFilterComparison>;
  tenantId?: InputMaybe<StringFieldComparison>;
};

export type TenantBillingDeleteResponse = {
  __typename?: 'TenantBillingDeleteResponse';
  id?: Maybe<Scalars['ID']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  taxNumber?: Maybe<Scalars['String']['output']>;
  tenant?: Maybe<Tenant>;
  tenantId?: Maybe<Scalars['String']['output']>;
};

export type TenantBillingFilter = {
  and?: InputMaybe<Array<TenantBillingFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TenantBillingFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  taxNumber?: InputMaybe<StringFieldComparison>;
  tenant?: InputMaybe<TenantDatoFilterComparison>;
  tenantId?: InputMaybe<StringFieldComparison>;
};

export type TenantBillingInput = {
  phoneNumber: Scalars['String']['input'];
  taxNumber: Scalars['String']['input'];
  tenantId: Scalars['String']['input'];
};

export type TenantBillingNonEmbeddedInput = {
  phoneNumber: Scalars['String']['input'];
  taxNumber: Scalars['String']['input'];
  tenant: TenantNonEmbeddedInput;
  tenantId: Scalars['String']['input'];
};

export type TenantBillingSort = {
  direction: SortDirection;
  field: TenantBillingSortFields;
  nulls?: InputMaybe<SortNulls>;
};

export enum TenantBillingSortFields {
  Id = 'id',
  PhoneNumber = 'phoneNumber',
  TaxNumber = 'taxNumber',
  Tenant = 'tenant',
  TenantId = 'tenantId'
}

export type TenantBillingUpdate = {
  phoneNumber: Scalars['String']['input'];
  taxNumber: Scalars['String']['input'];
};

export type TenantBillingUpdateFilter = {
  and?: InputMaybe<Array<TenantBillingUpdateFilter>>;
  id?: InputMaybe<IdFilterComparison>;
  or?: InputMaybe<Array<TenantBillingUpdateFilter>>;
  phoneNumber?: InputMaybe<StringFieldComparison>;
  taxNumber?: InputMaybe<StringFieldComparison>;
  tenant?: InputMaybe<TenantDatoFilterComparison>;
  tenantId?: InputMaybe<StringFieldComparison>;
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

export type UpdateManySprintsInput = {
  /** Filter used to find fields to update */
  filter: SprintUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: SprintUpdate;
};

export type UpdateManyTaskSprintJunctionsInput = {
  /** Filter used to find fields to update */
  filter: TaskSprintJunctionUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: TaskSprintJunctionUpdate;
};

export type UpdateManyTasksInput = {
  /** Filter used to find fields to update */
  filter: TaskUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: TaskUpdate;
};

export type UpdateManyTenantBillingsInput = {
  /** Filter used to find fields to update */
  filter: TenantBillingUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: TenantBillingUpdate;
};

export type UpdateManyTenantsInput = {
  /** Filter used to find fields to update */
  filter: TenantUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: TenantUpdate;
};

export type UpdateManyUsersInput = {
  /** Filter used to find fields to update */
  filter: UserUpdateFilter;
  /** The update to apply to all records found using the filter */
  update: UserUpdate;
};

export type UpdateOneSprintInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: SprintUpdate;
};

export type UpdateOneTaskInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: TaskUpdate;
};

export type UpdateOneTaskSprintJunctionInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: TaskSprintJunctionUpdate;
};

export type UpdateOneTenantBillingInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: TenantBillingUpdate;
};

export type UpdateOneTenantInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: TenantUpdate;
};

export type UpdateOneUserInput = {
  /** The id of the record to update */
  id: Scalars['ID']['input'];
  /** The update to apply. */
  update: UserUpdate;
};

export type User = {
  __typename?: 'User';
  age: Scalars['Float']['output'];
  gender: Gender;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  tasks: UserTasksConnection;
  tenant: Tenant;
  tenantId: Scalars['String']['output'];
};


export type UserTasksArgs = {
  filter?: TaskFilter;
  paging?: OffsetPaging;
  sorting?: Array<TaskSort>;
};

export type UserConnection = {
  __typename?: 'UserConnection';
  /** Array of nodes. */
  nodes: Array<User>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
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

export type UserDeleteFilter = {
  age?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<UserDeleteFilter>>;
  gender?: InputMaybe<GenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserDeleteFilter>>;
  tenant?: InputMaybe<TenantDatoFilterComparison>;
  tenantId?: InputMaybe<StringFieldComparison>;
};

export type UserDeleteResponse = {
  __typename?: 'UserDeleteResponse';
  age?: Maybe<Scalars['Float']['output']>;
  gender?: Maybe<Gender>;
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  tasks?: Maybe<Array<Task>>;
  tenant?: Maybe<Tenant>;
  tenantId?: Maybe<Scalars['String']['output']>;
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

export type UserInput = {
  age: Scalars['Float']['input'];
  gender: Gender;
  name: Scalars['String']['input'];
  tenantId: Scalars['String']['input'];
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

export type UserTasksConnection = {
  __typename?: 'UserTasksConnection';
  /** Array of nodes. */
  nodes: Array<Task>;
  /** Paging information */
  pageInfo: OffsetPageInfo;
};

export type UserUpdate = {
  age?: InputMaybe<Scalars['Float']['input']>;
  gender?: InputMaybe<Gender>;
  name?: InputMaybe<Scalars['String']['input']>;
  tenantId?: InputMaybe<Scalars['String']['input']>;
};

export type UserUpdateFilter = {
  age?: InputMaybe<NumberFieldComparison>;
  and?: InputMaybe<Array<UserUpdateFilter>>;
  gender?: InputMaybe<GenderFilterComparison>;
  id?: InputMaybe<IdFilterComparison>;
  name?: InputMaybe<StringFieldComparison>;
  or?: InputMaybe<Array<UserUpdateFilter>>;
  tenant?: InputMaybe<TenantDatoFilterComparison>;
  tenantId?: InputMaybe<StringFieldComparison>;
};

export type UsersInfo = {
  __typename?: 'UsersInfo';
  females: GenderInfo;
  males: GenderInfo;
};

export type CreateManySprintsMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  input: CreateManySprintsInput;
}>;


export type CreateManySprintsMutation = { __typename?: 'Mutation', createManySprints: Array<{ __typename?: 'Sprint', id: string, name: string, taskSprintJunctions: { __typename?: 'SprintTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } }> };

export type CreateManyTaskSprintJunctionsMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: TaskSprintJunctionFilter;
  sorting1: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  input: CreateManyTaskSprintJunctionsInput;
}>;


export type CreateManyTaskSprintJunctionsMutation = { __typename?: 'Mutation', createManyTaskSprintJunctions: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string } | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } }, sprint: { __typename?: 'Sprint', id: string, name: string } }> };

export type CreateManyTasksMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: UserFilter;
  sorting1: Array<UserSort> | UserSort;
  paging2: OffsetPaging;
  filter2: TaskSprintJunctionFilter;
  sorting2: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  input: CreateManyTasksInput;
}>;


export type CreateManyTasksMutation = { __typename?: 'Mutation', createManyTasks: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } }> };

export type CreateManyTenantBillingsMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: UserFilter;
  sorting: Array<UserSort> | UserSort;
  input: CreateManyTenantBillingsInput;
}>;


export type CreateManyTenantBillingsMutation = { __typename?: 'Mutation', createManyTenantBillings: Array<{ __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } }> };

export type CreateManyTenantsMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: UserFilter;
  sorting1: Array<UserSort> | UserSort;
  input: CreateManyTenantsInput;
}>;


export type CreateManyTenantsMutation = { __typename?: 'Mutation', createManyTenants: Array<{ __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string } | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null }> };

export type CreateManyUsersMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  paging1: OffsetPaging;
  filter1: TaskFilter;
  sorting1: Array<TaskSort> | TaskSort;
  paging2: OffsetPaging;
  filter2: UserFilter;
  sorting2: Array<UserSort> | UserSort;
  input: CreateManyUsersInput;
}>;


export type CreateManyUsersMutation = { __typename?: 'Mutation', createManyUsers: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string }> } }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } }> };

export type CreateOneSprintMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  input: CreateOneSprintInput;
}>;


export type CreateOneSprintMutation = { __typename?: 'Mutation', createOneSprint: { __typename?: 'Sprint', id: string, name: string, taskSprintJunctions: { __typename?: 'SprintTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } } };

export type CreateOneTaskMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: UserFilter;
  sorting1: Array<UserSort> | UserSort;
  paging2: OffsetPaging;
  filter2: TaskSprintJunctionFilter;
  sorting2: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  input: CreateOneTaskInput;
}>;


export type CreateOneTaskMutation = { __typename?: 'Mutation', createOneTask: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } } };

export type CreateOneTaskSprintJunctionMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: TaskSprintJunctionFilter;
  sorting1: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  input: CreateOneTaskSprintJunctionInput;
}>;


export type CreateOneTaskSprintJunctionMutation = { __typename?: 'Mutation', createOneTaskSprintJunction: { __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string } | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } }, sprint: { __typename?: 'Sprint', id: string, name: string } } };

export type CreateOneTenantMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: UserFilter;
  sorting1: Array<UserSort> | UserSort;
  input: CreateOneTenantInput;
}>;


export type CreateOneTenantMutation = { __typename?: 'Mutation', createOneTenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string } | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } };

export type CreateOneTenantBillingMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: UserFilter;
  sorting: Array<UserSort> | UserSort;
  input: CreateOneTenantBillingInput;
}>;


export type CreateOneTenantBillingMutation = { __typename?: 'Mutation', createOneTenantBilling: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } } };

export type CreateOneUserMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  paging1: OffsetPaging;
  filter1: TaskFilter;
  sorting1: Array<TaskSort> | TaskSort;
  paging2: OffsetPaging;
  filter2: UserFilter;
  sorting2: Array<UserSort> | UserSort;
  input: CreateOneUserInput;
}>;


export type CreateOneUserMutation = { __typename?: 'Mutation', createOneUser: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string }> } }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } } };

export type DeleteManySprintsMutationVariables = Exact<{
  input: DeleteManySprintsInput;
}>;


export type DeleteManySprintsMutation = { __typename?: 'Mutation', deleteManySprints: { __typename?: 'DeleteManyResponse', deletedCount: number } };

export type DeleteManyTaskSprintJunctionsMutationVariables = Exact<{
  input: DeleteManyTaskSprintJunctionsInput;
}>;


export type DeleteManyTaskSprintJunctionsMutation = { __typename?: 'Mutation', deleteManyTaskSprintJunctions: { __typename?: 'DeleteManyResponse', deletedCount: number } };

export type DeleteManyTasksMutationVariables = Exact<{
  input: DeleteManyTasksInput;
}>;


export type DeleteManyTasksMutation = { __typename?: 'Mutation', deleteManyTasks: { __typename?: 'DeleteManyResponse', deletedCount: number } };

export type DeleteManyTenantBillingsMutationVariables = Exact<{
  input: DeleteManyTenantBillingsInput;
}>;


export type DeleteManyTenantBillingsMutation = { __typename?: 'Mutation', deleteManyTenantBillings: { __typename?: 'DeleteManyResponse', deletedCount: number } };

export type DeleteManyTenantsMutationVariables = Exact<{
  input: DeleteManyTenantsInput;
}>;


export type DeleteManyTenantsMutation = { __typename?: 'Mutation', deleteManyTenants: { __typename?: 'DeleteManyResponse', deletedCount: number } };

export type DeleteManyUsersMutationVariables = Exact<{
  input: DeleteManyUsersInput;
}>;


export type DeleteManyUsersMutation = { __typename?: 'Mutation', deleteManyUsers: { __typename?: 'DeleteManyResponse', deletedCount: number } };

export type DeleteOneSprintMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  input: DeleteOneSprintInput;
}>;


export type DeleteOneSprintMutation = { __typename?: 'Mutation', deleteOneSprint: { __typename?: 'SprintDeleteResponse', id?: string | null, name?: string | null, taskSprintJunctions?: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string }> } }, sprint: { __typename?: 'Sprint', id: string, name: string } }> | null } };

export type DeleteOneTaskMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: UserFilter;
  sorting1: Array<UserSort> | UserSort;
  paging2: OffsetPaging;
  filter2: TaskSprintJunctionFilter;
  sorting2: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  input: DeleteOneTaskInput;
}>;


export type DeleteOneTaskMutation = { __typename?: 'Mutation', deleteOneTask: { __typename?: 'TaskDeleteResponse', id?: string | null, name?: string | null, userId?: string | null, user?: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } } | null, details?: { __typename?: 'TaskDetails', id: string, title: string, description: string } | null, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions?: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string }> } }, sprint: { __typename?: 'Sprint', id: string, name: string } }> | null } };

export type DeleteOneTaskSprintJunctionMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: TaskSprintJunctionFilter;
  sorting1: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  input: DeleteOneTaskSprintJunctionInput;
}>;


export type DeleteOneTaskSprintJunctionMutation = { __typename?: 'Mutation', deleteOneTaskSprintJunction: { __typename?: 'TaskSprintJunctionDeleteResponse', id?: string | null, taskId?: string | null, sprintId?: string | null, task?: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string } | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } } | null, sprint?: { __typename?: 'Sprint', id: string, name: string } | null } };

export type DeleteOneTenantMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: UserFilter;
  sorting1: Array<UserSort> | UserSort;
  input: DeleteOneTenantInput;
}>;


export type DeleteOneTenantMutation = { __typename?: 'Mutation', deleteOneTenant: { __typename?: 'TenantDeleteResponse', id?: string | null, name?: string | null, tenantBillingId?: string | null, users?: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } }> | null, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string } | null } };

export type DeleteOneTenantBillingMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: UserFilter;
  sorting: Array<UserSort> | UserSort;
  input: DeleteOneTenantBillingInput;
}>;


export type DeleteOneTenantBillingMutation = { __typename?: 'Mutation', deleteOneTenantBilling: { __typename?: 'TenantBillingDeleteResponse', id?: string | null, taxNumber?: string | null, phoneNumber?: string | null, tenantId?: string | null, tenant?: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } | null } };

export type DeleteOneUserMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: TaskSprintJunctionFilter;
  sorting1: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  input: DeleteOneUserInput;
}>;


export type DeleteOneUserMutation = { __typename?: 'Mutation', deleteOneUser: { __typename?: 'UserDeleteResponse', id?: string | null, name?: string | null, tenantId?: string | null, gender?: Gender | null, age?: number | null, tasks?: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string } | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } }> | null, tenant?: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } | null } };

export type UpdateManySprintsMutationVariables = Exact<{
  input: UpdateManySprintsInput;
}>;


export type UpdateManySprintsMutation = { __typename?: 'Mutation', updateManySprints: { __typename?: 'UpdateManyResponse', updatedCount: number } };

export type UpdateManyTaskSprintJunctionsMutationVariables = Exact<{
  input: UpdateManyTaskSprintJunctionsInput;
}>;


export type UpdateManyTaskSprintJunctionsMutation = { __typename?: 'Mutation', updateManyTaskSprintJunctions: { __typename?: 'UpdateManyResponse', updatedCount: number } };

export type UpdateManyTasksMutationVariables = Exact<{
  input: UpdateManyTasksInput;
}>;


export type UpdateManyTasksMutation = { __typename?: 'Mutation', updateManyTasks: { __typename?: 'UpdateManyResponse', updatedCount: number } };

export type UpdateManyTenantBillingsMutationVariables = Exact<{
  input: UpdateManyTenantBillingsInput;
}>;


export type UpdateManyTenantBillingsMutation = { __typename?: 'Mutation', updateManyTenantBillings: { __typename?: 'UpdateManyResponse', updatedCount: number } };

export type UpdateManyTenantsMutationVariables = Exact<{
  input: UpdateManyTenantsInput;
}>;


export type UpdateManyTenantsMutation = { __typename?: 'Mutation', updateManyTenants: { __typename?: 'UpdateManyResponse', updatedCount: number } };

export type UpdateManyUsersMutationVariables = Exact<{
  input: UpdateManyUsersInput;
}>;


export type UpdateManyUsersMutation = { __typename?: 'Mutation', updateManyUsers: { __typename?: 'UpdateManyResponse', updatedCount: number } };

export type UpdateOneSprintMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  input: UpdateOneSprintInput;
}>;


export type UpdateOneSprintMutation = { __typename?: 'Mutation', updateOneSprint: { __typename?: 'Sprint', id: string, name: string, taskSprintJunctions: { __typename?: 'SprintTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } } };

export type UpdateOneTaskMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: UserFilter;
  sorting1: Array<UserSort> | UserSort;
  paging2: OffsetPaging;
  filter2: TaskSprintJunctionFilter;
  sorting2: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  input: UpdateOneTaskInput;
}>;


export type UpdateOneTaskMutation = { __typename?: 'Mutation', updateOneTask: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } } };

export type UpdateOneTaskSprintJunctionMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: TaskSprintJunctionFilter;
  sorting1: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  input: UpdateOneTaskSprintJunctionInput;
}>;


export type UpdateOneTaskSprintJunctionMutation = { __typename?: 'Mutation', updateOneTaskSprintJunction: { __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string } | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } }, sprint: { __typename?: 'Sprint', id: string, name: string } } };

export type UpdateOneTenantMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: UserFilter;
  sorting1: Array<UserSort> | UserSort;
  input: UpdateOneTenantInput;
}>;


export type UpdateOneTenantMutation = { __typename?: 'Mutation', updateOneTenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string } | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } };

export type UpdateOneTenantBillingMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: UserFilter;
  sorting: Array<UserSort> | UserSort;
  input: UpdateOneTenantBillingInput;
}>;


export type UpdateOneTenantBillingMutation = { __typename?: 'Mutation', updateOneTenantBilling: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } } };

export type UpdateOneUserMutationVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  paging1: OffsetPaging;
  filter1: TaskFilter;
  sorting1: Array<TaskSort> | TaskSort;
  paging2: OffsetPaging;
  filter2: UserFilter;
  sorting2: Array<UserSort> | UserSort;
  input: UpdateOneUserInput;
}>;


export type UpdateOneUserMutation = { __typename?: 'Mutation', updateOneUser: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string }> } }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } } };

export type DemonstrateComplexQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type DemonstrateComplexQueryQuery = { __typename?: 'Query', demonstrateComplexQuery: { __typename?: 'UsersInfo', females: { __typename?: 'GenderInfo', count: number, avgAge: number }, males: { __typename?: 'GenderInfo', count: number, avgAge: number } } };

export type DemonstrateTransactionBlockQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  paging1: OffsetPaging;
  filter1: TaskFilter;
  sorting1: Array<TaskSort> | TaskSort;
  paging2: OffsetPaging;
  filter2: UserFilter;
  sorting2: Array<UserSort> | UserSort;
}>;


export type DemonstrateTransactionBlockQuery = { __typename?: 'Query', demonstrateTransactionBlock: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string }> } }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } }> };

export type DemonstrateTransactionFlowQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  paging1: OffsetPaging;
  filter1: TaskFilter;
  sorting1: Array<TaskSort> | TaskSort;
  paging2: OffsetPaging;
  filter2: UserFilter;
  sorting2: Array<UserSort> | UserSort;
}>;


export type DemonstrateTransactionFlowQuery = { __typename?: 'Query', demonstrateTransactionFlow: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string }> } }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } }> };

export type DemonstrateTransactionLockQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  paging1: OffsetPaging;
  filter1: TaskFilter;
  sorting1: Array<TaskSort> | TaskSort;
  paging2: OffsetPaging;
  filter2: UserFilter;
  sorting2: Array<UserSort> | UserSort;
}>;


export type DemonstrateTransactionLockQuery = { __typename?: 'Query', demonstrateTransactionLock: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string }> } }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } }> };

export type SprintQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  id: Scalars['ID']['input'];
}>;


export type SprintQuery = { __typename?: 'Query', sprint: { __typename?: 'Sprint', id: string, name: string, taskSprintJunctions: { __typename?: 'SprintTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } } };

export type SprintsQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  paging1: OffsetPaging;
  filter1: SprintFilter;
  sorting1: Array<SprintSort> | SprintSort;
}>;


export type SprintsQuery = { __typename?: 'Query', sprints: { __typename?: 'SprintConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Sprint', id: string, name: string, taskSprintJunctions: { __typename?: 'SprintTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } }> } };

export type TaskQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: UserFilter;
  sorting1: Array<UserSort> | UserSort;
  paging2: OffsetPaging;
  filter2: TaskSprintJunctionFilter;
  sorting2: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  id: Scalars['ID']['input'];
}>;


export type TaskQuery = { __typename?: 'Query', task: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } } };

export type TaskSprintJunctionQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: TaskSprintJunctionFilter;
  sorting1: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  id: Scalars['ID']['input'];
}>;


export type TaskSprintJunctionQuery = { __typename?: 'Query', taskSprintJunction: { __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string } | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } }, sprint: { __typename?: 'Sprint', id: string, name: string } } };

export type TaskSprintJunctionsQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
}>;


export type TaskSprintJunctionsQuery = { __typename?: 'Query', taskSprintJunctions: { __typename?: 'TaskSprintJunctionConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } };

export type TasksQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  paging1: OffsetPaging;
  filter1: TaskFilter;
  sorting1: Array<TaskSort> | TaskSort;
}>;


export type TasksQuery = { __typename?: 'Query', tasks: { __typename?: 'TaskConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string } | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string, task: { __typename?: 'Task', id: string, name: string, userId: string }, sprint: { __typename?: 'Sprint', id: string, name: string } }> } }> } };

export type TenantQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: UserFilter;
  sorting1: Array<UserSort> | UserSort;
  id: Scalars['ID']['input'];
}>;


export type TenantQuery = { __typename?: 'Query', tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string } | null } }> } } };

export type TenantBillingQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: UserFilter;
  sorting: Array<UserSort> | UserSort;
  id: Scalars['ID']['input'];
}>;


export type TenantBillingQuery = { __typename?: 'Query', tenantBilling: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string } | null } } };

export type TenantBillingsQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: UserFilter;
  sorting: Array<UserSort> | UserSort;
  paging1: OffsetPaging;
  filter1: TenantBillingFilter;
  sorting1: Array<TenantBillingSort> | TenantBillingSort;
}>;


export type TenantBillingsQuery = { __typename?: 'Query', tenantBillings: { __typename?: 'TenantBillingConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } }> } };

export type TenantsQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: UserFilter;
  sorting: Array<UserSort> | UserSort;
  paging1: OffsetPaging;
  filter1: TenantFilter;
  sorting1: Array<TenantSort> | TenantSort;
}>;


export type TenantsQuery = { __typename?: 'Query', tenants: { __typename?: 'TenantConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string } | null } } | null }> } };

export type UserQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  paging1: OffsetPaging;
  filter1: TaskFilter;
  sorting1: Array<TaskSort> | TaskSort;
  id: Scalars['ID']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string }> } }> } } };

export type UserByIndexQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskSprintJunctionFilter;
  sorting: Array<TaskSprintJunctionSort> | TaskSprintJunctionSort;
  paging1: OffsetPaging;
  filter1: TaskFilter;
  sorting1: Array<TaskSort> | TaskSort;
  paging2: OffsetPaging;
  filter2: UserFilter;
  sorting2: Array<UserSort> | UserSort;
  tenanId: Scalars['String']['input'];
  name: Scalars['String']['input'];
}>;


export type UserByIndexQuery = { __typename?: 'Query', userByIndex: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null, taskSprintJunctions: { __typename?: 'TaskTaskSprintJunctionsConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'TaskSprintJunction', id: string, taskId: string, sprintId: string }> } }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, users: { __typename?: 'TenantUsersConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } }> }, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } } };

export type UsersQueryVariables = Exact<{
  paging: OffsetPaging;
  filter: TaskFilter;
  sorting: Array<TaskSort> | TaskSort;
  paging1: OffsetPaging;
  filter1: UserFilter;
  sorting1: Array<UserSort> | UserSort;
}>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UserConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number, tasks: { __typename?: 'UserTasksConnection', pageInfo: { __typename?: 'OffsetPageInfo', hasNextPage?: boolean | null, hasPreviousPage?: boolean | null }, nodes: Array<{ __typename?: 'Task', id: string, name: string, userId: string, user: { __typename?: 'User', id: string, name: string, tenantId: string, gender: Gender, age: number }, details: { __typename?: 'TaskDetails', id: string, title: string, description: string }, comments?: Array<{ __typename?: 'TaskComment', id: string, text: string }> | null }> }, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null, tenantBilling?: { __typename?: 'TenantBilling', id: string, taxNumber: string, phoneNumber: string, tenantId: string, tenant: { __typename?: 'Tenant', id: string, name: string, tenantBillingId?: string | null } } | null } }> } };


export const CreateManySprintsDocument = gql`
    mutation createManySprints($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!, $input: CreateManySprintsInput!) {
  createManySprints(input: $input) {
    id
    name
    taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        taskId
        sprintId
        task {
          id
          name
          userId
          user {
            id
            name
            tenantId
            gender
            age
          }
          details {
            id
            title
            description
          }
          comments {
            id
            text
          }
        }
        sprint {
          id
          name
        }
      }
    }
  }
}
    `;
export const CreateManyTaskSprintJunctionsDocument = gql`
    mutation createManyTaskSprintJunctions($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: TaskSprintJunctionFilter!, $sorting1: [TaskSprintJunctionSort!]!, $input: CreateManyTaskSprintJunctionsInput!) {
  createManyTaskSprintJunctions(input: $input) {
    id
    taskId
    sprintId
    task {
      id
      name
      userId
      user {
        id
        name
        tasks(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            userId
          }
        }
        tenantId
        tenant {
          id
          name
          tenantBilling {
            id
            taxNumber
            phoneNumber
            tenantId
          }
          tenantBillingId
        }
        gender
        age
      }
      details {
        id
        title
        description
      }
      comments {
        id
        text
      }
      taskSprintJunctions(paging: $paging1, filter: $filter1, sorting: $sorting1) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          taskId
          sprintId
          task {
            id
            name
            userId
          }
          sprint {
            id
            name
          }
        }
      }
    }
    sprint {
      id
      name
    }
  }
}
    `;
export const CreateManyTasksDocument = gql`
    mutation createManyTasks($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: UserFilter!, $sorting1: [UserSort!]!, $paging2: OffsetPaging!, $filter2: TaskSprintJunctionFilter!, $sorting2: [TaskSprintJunctionSort!]!, $input: CreateManyTasksInput!) {
  createManyTasks(input: $input) {
    id
    name
    userId
    user {
      id
      name
      tasks(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          userId
          user {
            id
            name
            tenantId
            gender
            age
          }
          details {
            id
            title
            description
          }
          comments {
            id
            text
          }
        }
      }
      tenantId
      tenant {
        id
        name
        users(paging: $paging1, filter: $filter1, sorting: $sorting1) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            tenantId
            gender
            age
          }
        }
        tenantBilling {
          id
          taxNumber
          phoneNumber
          tenant {
            id
            name
            tenantBillingId
          }
          tenantId
        }
        tenantBillingId
      }
      gender
      age
    }
    details {
      id
      title
      description
    }
    comments {
      id
      text
    }
    taskSprintJunctions(paging: $paging2, filter: $filter2, sorting: $sorting2) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        taskId
        sprintId
        task {
          id
          name
          userId
          user {
            id
            name
            tenantId
            gender
            age
          }
          details {
            id
            title
            description
          }
          comments {
            id
            text
          }
        }
        sprint {
          id
          name
        }
      }
    }
  }
}
    `;
export const CreateManyTenantBillingsDocument = gql`
    mutation createManyTenantBillings($paging: OffsetPaging!, $filter: UserFilter!, $sorting: [UserSort!]!, $input: CreateManyTenantBillingsInput!) {
  createManyTenantBillings(input: $input) {
    id
    taxNumber
    phoneNumber
    tenant {
      id
      name
      users(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
      }
      tenantBilling {
        id
        taxNumber
        phoneNumber
        tenant {
          id
          name
          tenantBillingId
        }
        tenantId
      }
      tenantBillingId
    }
    tenantId
  }
}
    `;
export const CreateManyTenantsDocument = gql`
    mutation createManyTenants($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: UserFilter!, $sorting1: [UserSort!]!, $input: CreateManyTenantsInput!) {
  createManyTenants(input: $input) {
    id
    name
    users(paging: $paging1, filter: $filter1, sorting: $sorting1) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        name
        tasks(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            userId
          }
        }
        tenantId
        tenant {
          id
          name
          tenantBilling {
            id
            taxNumber
            phoneNumber
            tenantId
          }
          tenantBillingId
        }
        gender
        age
      }
    }
    tenantBilling {
      id
      taxNumber
      phoneNumber
      tenant {
        id
        name
        tenantBillingId
      }
      tenantId
    }
    tenantBillingId
  }
}
    `;
export const CreateManyUsersDocument = gql`
    mutation createManyUsers($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!, $paging1: OffsetPaging!, $filter1: TaskFilter!, $sorting1: [TaskSort!]!, $paging2: OffsetPaging!, $filter2: UserFilter!, $sorting2: [UserSort!]!, $input: CreateManyUsersInput!) {
  createManyUsers(input: $input) {
    id
    name
    tasks(paging: $paging1, filter: $filter1, sorting: $sorting1) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        name
        userId
        user {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
        details {
          id
          title
          description
        }
        comments {
          id
          text
        }
        taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            taskId
            sprintId
          }
        }
      }
    }
    tenantId
    tenant {
      id
      name
      users(paging: $paging2, filter: $filter2, sorting: $sorting2) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
      }
      tenantBilling {
        id
        taxNumber
        phoneNumber
        tenant {
          id
          name
          tenantBillingId
        }
        tenantId
      }
      tenantBillingId
    }
    gender
    age
  }
}
    `;
export const CreateOneSprintDocument = gql`
    mutation createOneSprint($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!, $input: CreateOneSprintInput!) {
  createOneSprint(input: $input) {
    id
    name
    taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        taskId
        sprintId
        task {
          id
          name
          userId
          user {
            id
            name
            tenantId
            gender
            age
          }
          details {
            id
            title
            description
          }
          comments {
            id
            text
          }
        }
        sprint {
          id
          name
        }
      }
    }
  }
}
    `;
export const CreateOneTaskDocument = gql`
    mutation createOneTask($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: UserFilter!, $sorting1: [UserSort!]!, $paging2: OffsetPaging!, $filter2: TaskSprintJunctionFilter!, $sorting2: [TaskSprintJunctionSort!]!, $input: CreateOneTaskInput!) {
  createOneTask(input: $input) {
    id
    name
    userId
    user {
      id
      name
      tasks(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          userId
          user {
            id
            name
            tenantId
            gender
            age
          }
          details {
            id
            title
            description
          }
          comments {
            id
            text
          }
        }
      }
      tenantId
      tenant {
        id
        name
        users(paging: $paging1, filter: $filter1, sorting: $sorting1) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            tenantId
            gender
            age
          }
        }
        tenantBilling {
          id
          taxNumber
          phoneNumber
          tenant {
            id
            name
            tenantBillingId
          }
          tenantId
        }
        tenantBillingId
      }
      gender
      age
    }
    details {
      id
      title
      description
    }
    comments {
      id
      text
    }
    taskSprintJunctions(paging: $paging2, filter: $filter2, sorting: $sorting2) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        taskId
        sprintId
        task {
          id
          name
          userId
          user {
            id
            name
            tenantId
            gender
            age
          }
          details {
            id
            title
            description
          }
          comments {
            id
            text
          }
        }
        sprint {
          id
          name
        }
      }
    }
  }
}
    `;
export const CreateOneTaskSprintJunctionDocument = gql`
    mutation createOneTaskSprintJunction($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: TaskSprintJunctionFilter!, $sorting1: [TaskSprintJunctionSort!]!, $input: CreateOneTaskSprintJunctionInput!) {
  createOneTaskSprintJunction(input: $input) {
    id
    taskId
    sprintId
    task {
      id
      name
      userId
      user {
        id
        name
        tasks(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            userId
          }
        }
        tenantId
        tenant {
          id
          name
          tenantBilling {
            id
            taxNumber
            phoneNumber
            tenantId
          }
          tenantBillingId
        }
        gender
        age
      }
      details {
        id
        title
        description
      }
      comments {
        id
        text
      }
      taskSprintJunctions(paging: $paging1, filter: $filter1, sorting: $sorting1) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          taskId
          sprintId
          task {
            id
            name
            userId
          }
          sprint {
            id
            name
          }
        }
      }
    }
    sprint {
      id
      name
    }
  }
}
    `;
export const CreateOneTenantDocument = gql`
    mutation createOneTenant($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: UserFilter!, $sorting1: [UserSort!]!, $input: CreateOneTenantInput!) {
  createOneTenant(input: $input) {
    id
    name
    users(paging: $paging1, filter: $filter1, sorting: $sorting1) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        name
        tasks(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            userId
          }
        }
        tenantId
        tenant {
          id
          name
          tenantBilling {
            id
            taxNumber
            phoneNumber
            tenantId
          }
          tenantBillingId
        }
        gender
        age
      }
    }
    tenantBilling {
      id
      taxNumber
      phoneNumber
      tenant {
        id
        name
        tenantBillingId
      }
      tenantId
    }
    tenantBillingId
  }
}
    `;
export const CreateOneTenantBillingDocument = gql`
    mutation createOneTenantBilling($paging: OffsetPaging!, $filter: UserFilter!, $sorting: [UserSort!]!, $input: CreateOneTenantBillingInput!) {
  createOneTenantBilling(input: $input) {
    id
    taxNumber
    phoneNumber
    tenant {
      id
      name
      users(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
      }
      tenantBilling {
        id
        taxNumber
        phoneNumber
        tenant {
          id
          name
          tenantBillingId
        }
        tenantId
      }
      tenantBillingId
    }
    tenantId
  }
}
    `;
export const CreateOneUserDocument = gql`
    mutation createOneUser($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!, $paging1: OffsetPaging!, $filter1: TaskFilter!, $sorting1: [TaskSort!]!, $paging2: OffsetPaging!, $filter2: UserFilter!, $sorting2: [UserSort!]!, $input: CreateOneUserInput!) {
  createOneUser(input: $input) {
    id
    name
    tasks(paging: $paging1, filter: $filter1, sorting: $sorting1) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        name
        userId
        user {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
        details {
          id
          title
          description
        }
        comments {
          id
          text
        }
        taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            taskId
            sprintId
          }
        }
      }
    }
    tenantId
    tenant {
      id
      name
      users(paging: $paging2, filter: $filter2, sorting: $sorting2) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
      }
      tenantBilling {
        id
        taxNumber
        phoneNumber
        tenant {
          id
          name
          tenantBillingId
        }
        tenantId
      }
      tenantBillingId
    }
    gender
    age
  }
}
    `;
export const DeleteManySprintsDocument = gql`
    mutation deleteManySprints($input: DeleteManySprintsInput!) {
  deleteManySprints(input: $input) {
    deletedCount
  }
}
    `;
export const DeleteManyTaskSprintJunctionsDocument = gql`
    mutation deleteManyTaskSprintJunctions($input: DeleteManyTaskSprintJunctionsInput!) {
  deleteManyTaskSprintJunctions(input: $input) {
    deletedCount
  }
}
    `;
export const DeleteManyTasksDocument = gql`
    mutation deleteManyTasks($input: DeleteManyTasksInput!) {
  deleteManyTasks(input: $input) {
    deletedCount
  }
}
    `;
export const DeleteManyTenantBillingsDocument = gql`
    mutation deleteManyTenantBillings($input: DeleteManyTenantBillingsInput!) {
  deleteManyTenantBillings(input: $input) {
    deletedCount
  }
}
    `;
export const DeleteManyTenantsDocument = gql`
    mutation deleteManyTenants($input: DeleteManyTenantsInput!) {
  deleteManyTenants(input: $input) {
    deletedCount
  }
}
    `;
export const DeleteManyUsersDocument = gql`
    mutation deleteManyUsers($input: DeleteManyUsersInput!) {
  deleteManyUsers(input: $input) {
    deletedCount
  }
}
    `;
export const DeleteOneSprintDocument = gql`
    mutation deleteOneSprint($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!, $input: DeleteOneSprintInput!) {
  deleteOneSprint(input: $input) {
    id
    name
    taskSprintJunctions {
      id
      taskId
      sprintId
      task {
        id
        name
        userId
        user {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
        details {
          id
          title
          description
        }
        comments {
          id
          text
        }
        taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            taskId
            sprintId
          }
        }
      }
      sprint {
        id
        name
      }
    }
  }
}
    `;
export const DeleteOneTaskDocument = gql`
    mutation deleteOneTask($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: UserFilter!, $sorting1: [UserSort!]!, $paging2: OffsetPaging!, $filter2: TaskSprintJunctionFilter!, $sorting2: [TaskSprintJunctionSort!]!, $input: DeleteOneTaskInput!) {
  deleteOneTask(input: $input) {
    id
    name
    userId
    user {
      id
      name
      tasks(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          userId
          user {
            id
            name
            tenantId
            gender
            age
          }
          details {
            id
            title
            description
          }
          comments {
            id
            text
          }
        }
      }
      tenantId
      tenant {
        id
        name
        users(paging: $paging1, filter: $filter1, sorting: $sorting1) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            tenantId
            gender
            age
          }
        }
        tenantBilling {
          id
          taxNumber
          phoneNumber
          tenant {
            id
            name
            tenantBillingId
          }
          tenantId
        }
        tenantBillingId
      }
      gender
      age
    }
    details {
      id
      title
      description
    }
    comments {
      id
      text
    }
    taskSprintJunctions {
      id
      taskId
      sprintId
      task {
        id
        name
        userId
        user {
          id
          name
          tenantId
          gender
          age
        }
        details {
          id
          title
          description
        }
        comments {
          id
          text
        }
        taskSprintJunctions(paging: $paging2, filter: $filter2, sorting: $sorting2) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            taskId
            sprintId
          }
        }
      }
      sprint {
        id
        name
      }
    }
  }
}
    `;
export const DeleteOneTaskSprintJunctionDocument = gql`
    mutation deleteOneTaskSprintJunction($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: TaskSprintJunctionFilter!, $sorting1: [TaskSprintJunctionSort!]!, $input: DeleteOneTaskSprintJunctionInput!) {
  deleteOneTaskSprintJunction(input: $input) {
    id
    taskId
    sprintId
    task {
      id
      name
      userId
      user {
        id
        name
        tasks(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            userId
          }
        }
        tenantId
        tenant {
          id
          name
          tenantBilling {
            id
            taxNumber
            phoneNumber
            tenantId
          }
          tenantBillingId
        }
        gender
        age
      }
      details {
        id
        title
        description
      }
      comments {
        id
        text
      }
      taskSprintJunctions(paging: $paging1, filter: $filter1, sorting: $sorting1) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          taskId
          sprintId
          task {
            id
            name
            userId
          }
          sprint {
            id
            name
          }
        }
      }
    }
    sprint {
      id
      name
    }
  }
}
    `;
export const DeleteOneTenantDocument = gql`
    mutation deleteOneTenant($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: UserFilter!, $sorting1: [UserSort!]!, $input: DeleteOneTenantInput!) {
  deleteOneTenant(input: $input) {
    id
    name
    users {
      id
      name
      tasks(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          userId
          user {
            id
            name
            tenantId
            gender
            age
          }
          details {
            id
            title
            description
          }
          comments {
            id
            text
          }
        }
      }
      tenantId
      tenant {
        id
        name
        users(paging: $paging1, filter: $filter1, sorting: $sorting1) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            tenantId
            gender
            age
          }
        }
        tenantBilling {
          id
          taxNumber
          phoneNumber
          tenant {
            id
            name
            tenantBillingId
          }
          tenantId
        }
        tenantBillingId
      }
      gender
      age
    }
    tenantBilling {
      id
      taxNumber
      phoneNumber
      tenantId
    }
    tenantBillingId
  }
}
    `;
export const DeleteOneTenantBillingDocument = gql`
    mutation deleteOneTenantBilling($paging: OffsetPaging!, $filter: UserFilter!, $sorting: [UserSort!]!, $input: DeleteOneTenantBillingInput!) {
  deleteOneTenantBilling(input: $input) {
    id
    taxNumber
    phoneNumber
    tenant {
      id
      name
      users(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
      }
      tenantBilling {
        id
        taxNumber
        phoneNumber
        tenant {
          id
          name
          tenantBillingId
        }
        tenantId
      }
      tenantBillingId
    }
    tenantId
  }
}
    `;
export const DeleteOneUserDocument = gql`
    mutation deleteOneUser($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: TaskSprintJunctionFilter!, $sorting1: [TaskSprintJunctionSort!]!, $input: DeleteOneUserInput!) {
  deleteOneUser(input: $input) {
    id
    name
    tasks {
      id
      name
      userId
      user {
        id
        name
        tasks(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            userId
          }
        }
        tenantId
        tenant {
          id
          name
          tenantBilling {
            id
            taxNumber
            phoneNumber
            tenantId
          }
          tenantBillingId
        }
        gender
        age
      }
      details {
        id
        title
        description
      }
      comments {
        id
        text
      }
      taskSprintJunctions(paging: $paging1, filter: $filter1, sorting: $sorting1) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          taskId
          sprintId
          task {
            id
            name
            userId
          }
          sprint {
            id
            name
          }
        }
      }
    }
    tenantId
    tenant {
      id
      name
      tenantBillingId
    }
    gender
    age
  }
}
    `;
export const UpdateManySprintsDocument = gql`
    mutation updateManySprints($input: UpdateManySprintsInput!) {
  updateManySprints(input: $input) {
    updatedCount
  }
}
    `;
export const UpdateManyTaskSprintJunctionsDocument = gql`
    mutation updateManyTaskSprintJunctions($input: UpdateManyTaskSprintJunctionsInput!) {
  updateManyTaskSprintJunctions(input: $input) {
    updatedCount
  }
}
    `;
export const UpdateManyTasksDocument = gql`
    mutation updateManyTasks($input: UpdateManyTasksInput!) {
  updateManyTasks(input: $input) {
    updatedCount
  }
}
    `;
export const UpdateManyTenantBillingsDocument = gql`
    mutation updateManyTenantBillings($input: UpdateManyTenantBillingsInput!) {
  updateManyTenantBillings(input: $input) {
    updatedCount
  }
}
    `;
export const UpdateManyTenantsDocument = gql`
    mutation updateManyTenants($input: UpdateManyTenantsInput!) {
  updateManyTenants(input: $input) {
    updatedCount
  }
}
    `;
export const UpdateManyUsersDocument = gql`
    mutation updateManyUsers($input: UpdateManyUsersInput!) {
  updateManyUsers(input: $input) {
    updatedCount
  }
}
    `;
export const UpdateOneSprintDocument = gql`
    mutation updateOneSprint($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!, $input: UpdateOneSprintInput!) {
  updateOneSprint(input: $input) {
    id
    name
    taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        taskId
        sprintId
        task {
          id
          name
          userId
          user {
            id
            name
            tenantId
            gender
            age
          }
          details {
            id
            title
            description
          }
          comments {
            id
            text
          }
        }
        sprint {
          id
          name
        }
      }
    }
  }
}
    `;
export const UpdateOneTaskDocument = gql`
    mutation updateOneTask($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: UserFilter!, $sorting1: [UserSort!]!, $paging2: OffsetPaging!, $filter2: TaskSprintJunctionFilter!, $sorting2: [TaskSprintJunctionSort!]!, $input: UpdateOneTaskInput!) {
  updateOneTask(input: $input) {
    id
    name
    userId
    user {
      id
      name
      tasks(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          userId
          user {
            id
            name
            tenantId
            gender
            age
          }
          details {
            id
            title
            description
          }
          comments {
            id
            text
          }
        }
      }
      tenantId
      tenant {
        id
        name
        users(paging: $paging1, filter: $filter1, sorting: $sorting1) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            tenantId
            gender
            age
          }
        }
        tenantBilling {
          id
          taxNumber
          phoneNumber
          tenant {
            id
            name
            tenantBillingId
          }
          tenantId
        }
        tenantBillingId
      }
      gender
      age
    }
    details {
      id
      title
      description
    }
    comments {
      id
      text
    }
    taskSprintJunctions(paging: $paging2, filter: $filter2, sorting: $sorting2) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        taskId
        sprintId
        task {
          id
          name
          userId
          user {
            id
            name
            tenantId
            gender
            age
          }
          details {
            id
            title
            description
          }
          comments {
            id
            text
          }
        }
        sprint {
          id
          name
        }
      }
    }
  }
}
    `;
export const UpdateOneTaskSprintJunctionDocument = gql`
    mutation updateOneTaskSprintJunction($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: TaskSprintJunctionFilter!, $sorting1: [TaskSprintJunctionSort!]!, $input: UpdateOneTaskSprintJunctionInput!) {
  updateOneTaskSprintJunction(input: $input) {
    id
    taskId
    sprintId
    task {
      id
      name
      userId
      user {
        id
        name
        tasks(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            userId
          }
        }
        tenantId
        tenant {
          id
          name
          tenantBilling {
            id
            taxNumber
            phoneNumber
            tenantId
          }
          tenantBillingId
        }
        gender
        age
      }
      details {
        id
        title
        description
      }
      comments {
        id
        text
      }
      taskSprintJunctions(paging: $paging1, filter: $filter1, sorting: $sorting1) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          taskId
          sprintId
          task {
            id
            name
            userId
          }
          sprint {
            id
            name
          }
        }
      }
    }
    sprint {
      id
      name
    }
  }
}
    `;
export const UpdateOneTenantDocument = gql`
    mutation updateOneTenant($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: UserFilter!, $sorting1: [UserSort!]!, $input: UpdateOneTenantInput!) {
  updateOneTenant(input: $input) {
    id
    name
    users(paging: $paging1, filter: $filter1, sorting: $sorting1) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        name
        tasks(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            userId
          }
        }
        tenantId
        tenant {
          id
          name
          tenantBilling {
            id
            taxNumber
            phoneNumber
            tenantId
          }
          tenantBillingId
        }
        gender
        age
      }
    }
    tenantBilling {
      id
      taxNumber
      phoneNumber
      tenant {
        id
        name
        tenantBillingId
      }
      tenantId
    }
    tenantBillingId
  }
}
    `;
export const UpdateOneTenantBillingDocument = gql`
    mutation updateOneTenantBilling($paging: OffsetPaging!, $filter: UserFilter!, $sorting: [UserSort!]!, $input: UpdateOneTenantBillingInput!) {
  updateOneTenantBilling(input: $input) {
    id
    taxNumber
    phoneNumber
    tenant {
      id
      name
      users(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
      }
      tenantBilling {
        id
        taxNumber
        phoneNumber
        tenant {
          id
          name
          tenantBillingId
        }
        tenantId
      }
      tenantBillingId
    }
    tenantId
  }
}
    `;
export const UpdateOneUserDocument = gql`
    mutation updateOneUser($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!, $paging1: OffsetPaging!, $filter1: TaskFilter!, $sorting1: [TaskSort!]!, $paging2: OffsetPaging!, $filter2: UserFilter!, $sorting2: [UserSort!]!, $input: UpdateOneUserInput!) {
  updateOneUser(input: $input) {
    id
    name
    tasks(paging: $paging1, filter: $filter1, sorting: $sorting1) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        name
        userId
        user {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
        details {
          id
          title
          description
        }
        comments {
          id
          text
        }
        taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            taskId
            sprintId
          }
        }
      }
    }
    tenantId
    tenant {
      id
      name
      users(paging: $paging2, filter: $filter2, sorting: $sorting2) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
      }
      tenantBilling {
        id
        taxNumber
        phoneNumber
        tenant {
          id
          name
          tenantBillingId
        }
        tenantId
      }
      tenantBillingId
    }
    gender
    age
  }
}
    `;
export const DemonstrateComplexQueryDocument = gql`
    query demonstrateComplexQuery {
  demonstrateComplexQuery {
    females {
      count
      avgAge
    }
    males {
      count
      avgAge
    }
  }
}
    `;
export const DemonstrateTransactionBlockDocument = gql`
    query demonstrateTransactionBlock($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!, $paging1: OffsetPaging!, $filter1: TaskFilter!, $sorting1: [TaskSort!]!, $paging2: OffsetPaging!, $filter2: UserFilter!, $sorting2: [UserSort!]!) {
  demonstrateTransactionBlock {
    id
    name
    tasks(paging: $paging1, filter: $filter1, sorting: $sorting1) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        name
        userId
        user {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
        details {
          id
          title
          description
        }
        comments {
          id
          text
        }
        taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            taskId
            sprintId
          }
        }
      }
    }
    tenantId
    tenant {
      id
      name
      users(paging: $paging2, filter: $filter2, sorting: $sorting2) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
      }
      tenantBilling {
        id
        taxNumber
        phoneNumber
        tenant {
          id
          name
          tenantBillingId
        }
        tenantId
      }
      tenantBillingId
    }
    gender
    age
  }
}
    `;
export const DemonstrateTransactionFlowDocument = gql`
    query demonstrateTransactionFlow($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!, $paging1: OffsetPaging!, $filter1: TaskFilter!, $sorting1: [TaskSort!]!, $paging2: OffsetPaging!, $filter2: UserFilter!, $sorting2: [UserSort!]!) {
  demonstrateTransactionFlow {
    id
    name
    tasks(paging: $paging1, filter: $filter1, sorting: $sorting1) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        name
        userId
        user {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
        details {
          id
          title
          description
        }
        comments {
          id
          text
        }
        taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            taskId
            sprintId
          }
        }
      }
    }
    tenantId
    tenant {
      id
      name
      users(paging: $paging2, filter: $filter2, sorting: $sorting2) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
      }
      tenantBilling {
        id
        taxNumber
        phoneNumber
        tenant {
          id
          name
          tenantBillingId
        }
        tenantId
      }
      tenantBillingId
    }
    gender
    age
  }
}
    `;
export const DemonstrateTransactionLockDocument = gql`
    query demonstrateTransactionLock($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!, $paging1: OffsetPaging!, $filter1: TaskFilter!, $sorting1: [TaskSort!]!, $paging2: OffsetPaging!, $filter2: UserFilter!, $sorting2: [UserSort!]!) {
  demonstrateTransactionLock {
    id
    name
    tasks(paging: $paging1, filter: $filter1, sorting: $sorting1) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        name
        userId
        user {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
        details {
          id
          title
          description
        }
        comments {
          id
          text
        }
        taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            taskId
            sprintId
          }
        }
      }
    }
    tenantId
    tenant {
      id
      name
      users(paging: $paging2, filter: $filter2, sorting: $sorting2) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
      }
      tenantBilling {
        id
        taxNumber
        phoneNumber
        tenant {
          id
          name
          tenantBillingId
        }
        tenantId
      }
      tenantBillingId
    }
    gender
    age
  }
}
    `;
export const SprintDocument = gql`
    query sprint($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!, $id: ID!) {
  sprint(id: $id) {
    id
    name
    taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        taskId
        sprintId
        task {
          id
          name
          userId
          user {
            id
            name
            tenantId
            gender
            age
          }
          details {
            id
            title
            description
          }
          comments {
            id
            text
          }
        }
        sprint {
          id
          name
        }
      }
    }
  }
}
    `;
export const SprintsDocument = gql`
    query sprints($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!, $paging1: OffsetPaging!, $filter1: SprintFilter!, $sorting1: [SprintSort!]!) {
  sprints(paging: $paging1, filter: $filter1, sorting: $sorting1) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      name
      taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          taskId
          sprintId
          task {
            id
            name
            userId
          }
          sprint {
            id
            name
          }
        }
      }
    }
  }
}
    `;
export const TaskDocument = gql`
    query task($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: UserFilter!, $sorting1: [UserSort!]!, $paging2: OffsetPaging!, $filter2: TaskSprintJunctionFilter!, $sorting2: [TaskSprintJunctionSort!]!, $id: ID!) {
  task(id: $id) {
    id
    name
    userId
    user {
      id
      name
      tasks(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          userId
          user {
            id
            name
            tenantId
            gender
            age
          }
          details {
            id
            title
            description
          }
          comments {
            id
            text
          }
        }
      }
      tenantId
      tenant {
        id
        name
        users(paging: $paging1, filter: $filter1, sorting: $sorting1) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            tenantId
            gender
            age
          }
        }
        tenantBilling {
          id
          taxNumber
          phoneNumber
          tenant {
            id
            name
            tenantBillingId
          }
          tenantId
        }
        tenantBillingId
      }
      gender
      age
    }
    details {
      id
      title
      description
    }
    comments {
      id
      text
    }
    taskSprintJunctions(paging: $paging2, filter: $filter2, sorting: $sorting2) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        taskId
        sprintId
        task {
          id
          name
          userId
        }
        sprint {
          id
          name
        }
      }
    }
  }
}
    `;
export const TaskSprintJunctionDocument = gql`
    query taskSprintJunction($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: TaskSprintJunctionFilter!, $sorting1: [TaskSprintJunctionSort!]!, $id: ID!) {
  taskSprintJunction(id: $id) {
    id
    taskId
    sprintId
    task {
      id
      name
      userId
      user {
        id
        name
        tasks(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            userId
          }
        }
        tenantId
        tenant {
          id
          name
          tenantBilling {
            id
            taxNumber
            phoneNumber
            tenantId
          }
          tenantBillingId
        }
        gender
        age
      }
      details {
        id
        title
        description
      }
      comments {
        id
        text
      }
      taskSprintJunctions(paging: $paging1, filter: $filter1, sorting: $sorting1) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          taskId
          sprintId
          task {
            id
            name
            userId
          }
          sprint {
            id
            name
          }
        }
      }
    }
    sprint {
      id
      name
    }
  }
}
    `;
export const TaskSprintJunctionsDocument = gql`
    query taskSprintJunctions($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!) {
  taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      taskId
      sprintId
      task {
        id
        name
        userId
        user {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
        details {
          id
          title
          description
        }
        comments {
          id
          text
        }
      }
      sprint {
        id
        name
      }
    }
  }
}
    `;
export const TasksDocument = gql`
    query tasks($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!, $paging1: OffsetPaging!, $filter1: TaskFilter!, $sorting1: [TaskSort!]!) {
  tasks(paging: $paging1, filter: $filter1, sorting: $sorting1) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      name
      userId
      user {
        id
        name
        tenantId
        tenant {
          id
          name
          tenantBilling {
            id
            taxNumber
            phoneNumber
            tenantId
          }
          tenantBillingId
        }
        gender
        age
      }
      details {
        id
        title
        description
      }
      comments {
        id
        text
      }
      taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          taskId
          sprintId
          task {
            id
            name
            userId
          }
          sprint {
            id
            name
          }
        }
      }
    }
  }
}
    `;
export const TenantDocument = gql`
    query tenant($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: UserFilter!, $sorting1: [UserSort!]!, $id: ID!) {
  tenant(id: $id) {
    id
    name
    users(paging: $paging1, filter: $filter1, sorting: $sorting1) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        name
        tasks(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            userId
          }
        }
        tenantId
        tenant {
          id
          name
          tenantBilling {
            id
            taxNumber
            phoneNumber
            tenantId
          }
          tenantBillingId
        }
        gender
        age
      }
    }
    tenantBillingId
  }
}
    `;
export const TenantBillingDocument = gql`
    query tenantBilling($paging: OffsetPaging!, $filter: UserFilter!, $sorting: [UserSort!]!, $id: ID!) {
  tenantBilling(id: $id) {
    id
    taxNumber
    phoneNumber
    tenant {
      id
      name
      users(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
      }
      tenantBilling {
        id
        taxNumber
        phoneNumber
        tenantId
      }
      tenantBillingId
    }
    tenantId
  }
}
    `;
export const TenantBillingsDocument = gql`
    query tenantBillings($paging: OffsetPaging!, $filter: UserFilter!, $sorting: [UserSort!]!, $paging1: OffsetPaging!, $filter1: TenantBillingFilter!, $sorting1: [TenantBillingSort!]!) {
  tenantBillings(paging: $paging1, filter: $filter1, sorting: $sorting1) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      taxNumber
      phoneNumber
      tenant {
        id
        name
        users(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            name
            tenantId
            gender
            age
          }
        }
        tenantBilling {
          id
          taxNumber
          phoneNumber
          tenant {
            id
            name
            tenantBillingId
          }
          tenantId
        }
        tenantBillingId
      }
      tenantId
    }
  }
}
    `;
export const TenantsDocument = gql`
    query tenants($paging: OffsetPaging!, $filter: UserFilter!, $sorting: [UserSort!]!, $paging1: OffsetPaging!, $filter1: TenantFilter!, $sorting1: [TenantSort!]!) {
  tenants(paging: $paging1, filter: $filter1, sorting: $sorting1) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      name
      users(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
      }
      tenantBilling {
        id
        taxNumber
        phoneNumber
        tenant {
          id
          name
          tenantBilling {
            id
            taxNumber
            phoneNumber
            tenantId
          }
          tenantBillingId
        }
        tenantId
      }
      tenantBillingId
    }
  }
}
    `;
export const UserDocument = gql`
    query user($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!, $paging1: OffsetPaging!, $filter1: TaskFilter!, $sorting1: [TaskSort!]!, $id: ID!) {
  user(id: $id) {
    id
    name
    tasks(paging: $paging1, filter: $filter1, sorting: $sorting1) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        name
        userId
        user {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
        details {
          id
          title
          description
        }
        comments {
          id
          text
        }
        taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            taskId
            sprintId
          }
        }
      }
    }
    tenantId
    gender
    age
  }
}
    `;
export const UserByIndexDocument = gql`
    query userByIndex($paging: OffsetPaging!, $filter: TaskSprintJunctionFilter!, $sorting: [TaskSprintJunctionSort!]!, $paging1: OffsetPaging!, $filter1: TaskFilter!, $sorting1: [TaskSort!]!, $paging2: OffsetPaging!, $filter2: UserFilter!, $sorting2: [UserSort!]!, $tenanId: String!, $name: String!) {
  userByIndex(tenanId: $tenanId, name: $name) {
    id
    name
    tasks(paging: $paging1, filter: $filter1, sorting: $sorting1) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        id
        name
        userId
        user {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
        details {
          id
          title
          description
        }
        comments {
          id
          text
        }
        taskSprintJunctions(paging: $paging, filter: $filter, sorting: $sorting) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          nodes {
            id
            taskId
            sprintId
          }
        }
      }
    }
    tenantId
    tenant {
      id
      name
      users(paging: $paging2, filter: $filter2, sorting: $sorting2) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          tenantId
          tenant {
            id
            name
            tenantBillingId
          }
          gender
          age
        }
      }
      tenantBilling {
        id
        taxNumber
        phoneNumber
        tenant {
          id
          name
          tenantBillingId
        }
        tenantId
      }
      tenantBillingId
    }
    gender
    age
  }
}
    `;
export const UsersDocument = gql`
    query users($paging: OffsetPaging!, $filter: TaskFilter!, $sorting: [TaskSort!]!, $paging1: OffsetPaging!, $filter1: UserFilter!, $sorting1: [UserSort!]!) {
  users(paging: $paging1, filter: $filter1, sorting: $sorting1) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    nodes {
      id
      name
      tasks(paging: $paging, filter: $filter, sorting: $sorting) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        nodes {
          id
          name
          userId
          user {
            id
            name
            tenantId
            gender
            age
          }
          details {
            id
            title
            description
          }
          comments {
            id
            text
          }
        }
      }
      tenantId
      tenant {
        id
        name
        tenantBilling {
          id
          taxNumber
          phoneNumber
          tenant {
            id
            name
            tenantBillingId
          }
          tenantId
        }
        tenantBillingId
      }
      gender
      age
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createManySprints(variables: CreateManySprintsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateManySprintsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateManySprintsMutation>(CreateManySprintsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createManySprints', 'mutation', variables);
    },
    createManyTaskSprintJunctions(variables: CreateManyTaskSprintJunctionsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateManyTaskSprintJunctionsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateManyTaskSprintJunctionsMutation>(CreateManyTaskSprintJunctionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createManyTaskSprintJunctions', 'mutation', variables);
    },
    createManyTasks(variables: CreateManyTasksMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateManyTasksMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateManyTasksMutation>(CreateManyTasksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createManyTasks', 'mutation', variables);
    },
    createManyTenantBillings(variables: CreateManyTenantBillingsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateManyTenantBillingsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateManyTenantBillingsMutation>(CreateManyTenantBillingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createManyTenantBillings', 'mutation', variables);
    },
    createManyTenants(variables: CreateManyTenantsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateManyTenantsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateManyTenantsMutation>(CreateManyTenantsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createManyTenants', 'mutation', variables);
    },
    createManyUsers(variables: CreateManyUsersMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateManyUsersMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateManyUsersMutation>(CreateManyUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createManyUsers', 'mutation', variables);
    },
    createOneSprint(variables: CreateOneSprintMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateOneSprintMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOneSprintMutation>(CreateOneSprintDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOneSprint', 'mutation', variables);
    },
    createOneTask(variables: CreateOneTaskMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateOneTaskMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOneTaskMutation>(CreateOneTaskDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOneTask', 'mutation', variables);
    },
    createOneTaskSprintJunction(variables: CreateOneTaskSprintJunctionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateOneTaskSprintJunctionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOneTaskSprintJunctionMutation>(CreateOneTaskSprintJunctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOneTaskSprintJunction', 'mutation', variables);
    },
    createOneTenant(variables: CreateOneTenantMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateOneTenantMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOneTenantMutation>(CreateOneTenantDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOneTenant', 'mutation', variables);
    },
    createOneTenantBilling(variables: CreateOneTenantBillingMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateOneTenantBillingMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOneTenantBillingMutation>(CreateOneTenantBillingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOneTenantBilling', 'mutation', variables);
    },
    createOneUser(variables: CreateOneUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateOneUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateOneUserMutation>(CreateOneUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createOneUser', 'mutation', variables);
    },
    deleteManySprints(variables: DeleteManySprintsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteManySprintsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteManySprintsMutation>(DeleteManySprintsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteManySprints', 'mutation', variables);
    },
    deleteManyTaskSprintJunctions(variables: DeleteManyTaskSprintJunctionsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteManyTaskSprintJunctionsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteManyTaskSprintJunctionsMutation>(DeleteManyTaskSprintJunctionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteManyTaskSprintJunctions', 'mutation', variables);
    },
    deleteManyTasks(variables: DeleteManyTasksMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteManyTasksMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteManyTasksMutation>(DeleteManyTasksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteManyTasks', 'mutation', variables);
    },
    deleteManyTenantBillings(variables: DeleteManyTenantBillingsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteManyTenantBillingsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteManyTenantBillingsMutation>(DeleteManyTenantBillingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteManyTenantBillings', 'mutation', variables);
    },
    deleteManyTenants(variables: DeleteManyTenantsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteManyTenantsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteManyTenantsMutation>(DeleteManyTenantsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteManyTenants', 'mutation', variables);
    },
    deleteManyUsers(variables: DeleteManyUsersMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteManyUsersMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteManyUsersMutation>(DeleteManyUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteManyUsers', 'mutation', variables);
    },
    deleteOneSprint(variables: DeleteOneSprintMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteOneSprintMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOneSprintMutation>(DeleteOneSprintDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteOneSprint', 'mutation', variables);
    },
    deleteOneTask(variables: DeleteOneTaskMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteOneTaskMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOneTaskMutation>(DeleteOneTaskDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteOneTask', 'mutation', variables);
    },
    deleteOneTaskSprintJunction(variables: DeleteOneTaskSprintJunctionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteOneTaskSprintJunctionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOneTaskSprintJunctionMutation>(DeleteOneTaskSprintJunctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteOneTaskSprintJunction', 'mutation', variables);
    },
    deleteOneTenant(variables: DeleteOneTenantMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteOneTenantMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOneTenantMutation>(DeleteOneTenantDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteOneTenant', 'mutation', variables);
    },
    deleteOneTenantBilling(variables: DeleteOneTenantBillingMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteOneTenantBillingMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOneTenantBillingMutation>(DeleteOneTenantBillingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteOneTenantBilling', 'mutation', variables);
    },
    deleteOneUser(variables: DeleteOneUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteOneUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteOneUserMutation>(DeleteOneUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteOneUser', 'mutation', variables);
    },
    updateManySprints(variables: UpdateManySprintsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateManySprintsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateManySprintsMutation>(UpdateManySprintsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateManySprints', 'mutation', variables);
    },
    updateManyTaskSprintJunctions(variables: UpdateManyTaskSprintJunctionsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateManyTaskSprintJunctionsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateManyTaskSprintJunctionsMutation>(UpdateManyTaskSprintJunctionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateManyTaskSprintJunctions', 'mutation', variables);
    },
    updateManyTasks(variables: UpdateManyTasksMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateManyTasksMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateManyTasksMutation>(UpdateManyTasksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateManyTasks', 'mutation', variables);
    },
    updateManyTenantBillings(variables: UpdateManyTenantBillingsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateManyTenantBillingsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateManyTenantBillingsMutation>(UpdateManyTenantBillingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateManyTenantBillings', 'mutation', variables);
    },
    updateManyTenants(variables: UpdateManyTenantsMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateManyTenantsMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateManyTenantsMutation>(UpdateManyTenantsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateManyTenants', 'mutation', variables);
    },
    updateManyUsers(variables: UpdateManyUsersMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateManyUsersMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateManyUsersMutation>(UpdateManyUsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateManyUsers', 'mutation', variables);
    },
    updateOneSprint(variables: UpdateOneSprintMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateOneSprintMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateOneSprintMutation>(UpdateOneSprintDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateOneSprint', 'mutation', variables);
    },
    updateOneTask(variables: UpdateOneTaskMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateOneTaskMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateOneTaskMutation>(UpdateOneTaskDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateOneTask', 'mutation', variables);
    },
    updateOneTaskSprintJunction(variables: UpdateOneTaskSprintJunctionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateOneTaskSprintJunctionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateOneTaskSprintJunctionMutation>(UpdateOneTaskSprintJunctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateOneTaskSprintJunction', 'mutation', variables);
    },
    updateOneTenant(variables: UpdateOneTenantMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateOneTenantMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateOneTenantMutation>(UpdateOneTenantDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateOneTenant', 'mutation', variables);
    },
    updateOneTenantBilling(variables: UpdateOneTenantBillingMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateOneTenantBillingMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateOneTenantBillingMutation>(UpdateOneTenantBillingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateOneTenantBilling', 'mutation', variables);
    },
    updateOneUser(variables: UpdateOneUserMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateOneUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateOneUserMutation>(UpdateOneUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateOneUser', 'mutation', variables);
    },
    demonstrateComplexQuery(variables?: DemonstrateComplexQueryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DemonstrateComplexQueryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DemonstrateComplexQueryQuery>(DemonstrateComplexQueryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'demonstrateComplexQuery', 'query', variables);
    },
    demonstrateTransactionBlock(variables: DemonstrateTransactionBlockQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DemonstrateTransactionBlockQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DemonstrateTransactionBlockQuery>(DemonstrateTransactionBlockDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'demonstrateTransactionBlock', 'query', variables);
    },
    demonstrateTransactionFlow(variables: DemonstrateTransactionFlowQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DemonstrateTransactionFlowQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DemonstrateTransactionFlowQuery>(DemonstrateTransactionFlowDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'demonstrateTransactionFlow', 'query', variables);
    },
    demonstrateTransactionLock(variables: DemonstrateTransactionLockQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DemonstrateTransactionLockQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DemonstrateTransactionLockQuery>(DemonstrateTransactionLockDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'demonstrateTransactionLock', 'query', variables);
    },
    sprint(variables: SprintQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SprintQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SprintQuery>(SprintDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sprint', 'query', variables);
    },
    sprints(variables: SprintsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<SprintsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<SprintsQuery>(SprintsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'sprints', 'query', variables);
    },
    task(variables: TaskQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TaskQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TaskQuery>(TaskDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'task', 'query', variables);
    },
    taskSprintJunction(variables: TaskSprintJunctionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TaskSprintJunctionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TaskSprintJunctionQuery>(TaskSprintJunctionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'taskSprintJunction', 'query', variables);
    },
    taskSprintJunctions(variables: TaskSprintJunctionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TaskSprintJunctionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TaskSprintJunctionsQuery>(TaskSprintJunctionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'taskSprintJunctions', 'query', variables);
    },
    tasks(variables: TasksQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TasksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TasksQuery>(TasksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tasks', 'query', variables);
    },
    tenant(variables: TenantQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TenantQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TenantQuery>(TenantDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tenant', 'query', variables);
    },
    tenantBilling(variables: TenantBillingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TenantBillingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TenantBillingQuery>(TenantBillingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tenantBilling', 'query', variables);
    },
    tenantBillings(variables: TenantBillingsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TenantBillingsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TenantBillingsQuery>(TenantBillingsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tenantBillings', 'query', variables);
    },
    tenants(variables: TenantsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<TenantsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<TenantsQuery>(TenantsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'tenants', 'query', variables);
    },
    user(variables: UserQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserQuery>(UserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'user', 'query', variables);
    },
    userByIndex(variables: UserByIndexQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UserByIndexQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UserByIndexQuery>(UserByIndexDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'userByIndex', 'query', variables);
    },
    users(variables: UsersQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UsersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<UsersQuery>(UsersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'users', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;