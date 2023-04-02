import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateToDoOutput = {
  __typename?: 'CreateToDoOutput';
  success?: Maybe<Scalars['Boolean']>;
};

export type ListToDoInput = {
  completed?: InputMaybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: CreateToDoOutput;
  deleteTodo?: Maybe<DeleteToDoOutput>;
  myMutation?: Maybe<Scalars['String']>;
  updateToDo?: Maybe<UpdateToDoOutput>;
};


export type MutationCreateTodoArgs = {
  input: CreateToDoInput;
};


export type MutationDeleteTodoArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateToDoArgs = {
  input: UpdateToDoInput;
};

export type Query = {
  __typename?: 'Query';
  listTodos?: Maybe<Array<Maybe<ToDo>>>;
  myQuery?: Maybe<Scalars['String']>;
};


export type QueryListTodosArgs = {
  input?: InputMaybe<ListToDoInput>;
};

export type ToDo = {
  __typename?: 'ToDo';
  completed: Scalars['Boolean'];
  id: Scalars['ID'];
  title: Scalars['String'];
  userId?: Maybe<Scalars['ID']>;
};

export type CreateToDoInput = {
  title: Scalars['String'];
};

export type DeleteToDoOutput = {
  __typename?: 'deleteToDoOutput';
  success?: Maybe<Scalars['Boolean']>;
};

export type UpdateToDoInput = {
  completed: Scalars['Boolean'];
};

export type UpdateToDoOutput = {
  __typename?: 'updateToDoOutput';
  success?: Maybe<Scalars['Boolean']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateToDoOutput: ResolverTypeWrapper<CreateToDoOutput>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  ListToDoInput: ListToDoInput;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ToDo: ResolverTypeWrapper<ToDo>;
  createToDoInput: CreateToDoInput;
  deleteToDoOutput: ResolverTypeWrapper<DeleteToDoOutput>;
  updateToDoInput: UpdateToDoInput;
  updateToDoOutput: ResolverTypeWrapper<UpdateToDoOutput>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CreateToDoOutput: CreateToDoOutput;
  ID: Scalars['ID'];
  ListToDoInput: ListToDoInput;
  Mutation: {};
  Query: {};
  String: Scalars['String'];
  ToDo: ToDo;
  createToDoInput: CreateToDoInput;
  deleteToDoOutput: DeleteToDoOutput;
  updateToDoInput: UpdateToDoInput;
  updateToDoOutput: UpdateToDoOutput;
};

export type CreateToDoOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateToDoOutput'] = ResolversParentTypes['CreateToDoOutput']> = {
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createTodo?: Resolver<ResolversTypes['CreateToDoOutput'], ParentType, ContextType, RequireFields<MutationCreateTodoArgs, 'input'>>;
  deleteTodo?: Resolver<Maybe<ResolversTypes['deleteToDoOutput']>, ParentType, ContextType, RequireFields<MutationDeleteTodoArgs, 'id'>>;
  myMutation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updateToDo?: Resolver<Maybe<ResolversTypes['updateToDoOutput']>, ParentType, ContextType, RequireFields<MutationUpdateToDoArgs, 'input'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  listTodos?: Resolver<Maybe<Array<Maybe<ResolversTypes['ToDo']>>>, ParentType, ContextType, Partial<QueryListTodosArgs>>;
  myQuery?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type ToDoResolvers<ContextType = any, ParentType extends ResolversParentTypes['ToDo'] = ResolversParentTypes['ToDo']> = {
  completed?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DeleteToDoOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['deleteToDoOutput'] = ResolversParentTypes['deleteToDoOutput']> = {
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UpdateToDoOutputResolvers<ContextType = any, ParentType extends ResolversParentTypes['updateToDoOutput'] = ResolversParentTypes['updateToDoOutput']> = {
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  CreateToDoOutput?: CreateToDoOutputResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ToDo?: ToDoResolvers<ContextType>;
  deleteToDoOutput?: DeleteToDoOutputResolvers<ContextType>;
  updateToDoOutput?: UpdateToDoOutputResolvers<ContextType>;
};

