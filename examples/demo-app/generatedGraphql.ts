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
