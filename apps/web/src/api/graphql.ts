import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  DateTime: { input: any; output: any };
  JSON: { input: any; output: any };
  Long: { input: any; output: any };
  Upload: { input: any; output: any };
};

export type BooleanFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains: InputMaybe<Scalars['Boolean']['input']>;
  containsi: InputMaybe<Scalars['Boolean']['input']>;
  endsWith: InputMaybe<Scalars['Boolean']['input']>;
  eq: InputMaybe<Scalars['Boolean']['input']>;
  eqi: InputMaybe<Scalars['Boolean']['input']>;
  gt: InputMaybe<Scalars['Boolean']['input']>;
  gte: InputMaybe<Scalars['Boolean']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt: InputMaybe<Scalars['Boolean']['input']>;
  lte: InputMaybe<Scalars['Boolean']['input']>;
  ne: InputMaybe<Scalars['Boolean']['input']>;
  not: InputMaybe<BooleanFilterInput>;
  notContains: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi: InputMaybe<Scalars['Boolean']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith: InputMaybe<Scalars['Boolean']['input']>;
};

export type ComponentStudentCouncilFunctions = {
  __typename?: 'ComponentStudentCouncilFunctions';
  functions: Maybe<FunctionRelationResponseCollection>;
  id: Scalars['ID']['output'];
  term_of_office: Maybe<TermOfOfficeEntityResponse>;
};

export type ComponentStudentCouncilFunctionsFunctionsArgs = {
  filters: InputMaybe<FunctionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ComponentStudentCouncilFunctionsFiltersInput = {
  and: InputMaybe<
    Array<InputMaybe<ComponentStudentCouncilFunctionsFiltersInput>>
  >;
  functions: InputMaybe<FunctionFiltersInput>;
  not: InputMaybe<ComponentStudentCouncilFunctionsFiltersInput>;
  or: InputMaybe<
    Array<InputMaybe<ComponentStudentCouncilFunctionsFiltersInput>>
  >;
  term_of_office: InputMaybe<TermOfOfficeFiltersInput>;
};

export type ComponentStudentCouncilFunctionsInput = {
  functions: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  id: InputMaybe<Scalars['ID']['input']>;
  term_of_office: InputMaybe<Scalars['ID']['input']>;
};

export type DateTimeFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains: InputMaybe<Scalars['DateTime']['input']>;
  containsi: InputMaybe<Scalars['DateTime']['input']>;
  endsWith: InputMaybe<Scalars['DateTime']['input']>;
  eq: InputMaybe<Scalars['DateTime']['input']>;
  eqi: InputMaybe<Scalars['DateTime']['input']>;
  gt: InputMaybe<Scalars['DateTime']['input']>;
  gte: InputMaybe<Scalars['DateTime']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt: InputMaybe<Scalars['DateTime']['input']>;
  lte: InputMaybe<Scalars['DateTime']['input']>;
  ne: InputMaybe<Scalars['DateTime']['input']>;
  not: InputMaybe<DateTimeFilterInput>;
  notContains: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi: InputMaybe<Scalars['DateTime']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Meeting_Place {
  A1r241 = 'a1r241',
  C16r117 = 'c16r117',
  Remote = 'remote',
}

export enum Enum_Student_Department {
  FiliaWJeleniejGorze = 'Filia_w_Jeleniej_Gorze',
  FiliaWLegnicy = 'Filia_w_Legnicy',
  FiliaWWalbrzychu = 'Filia_w_Walbrzychu',
  W1 = 'W1',
  W2 = 'W2',
  W3 = 'W3',
  W4 = 'W4',
  W5 = 'W5',
  W6 = 'W6',
  W7 = 'W7',
  W8 = 'W8',
  W9 = 'W9',
  W10 = 'W10',
  W11 = 'W11',
  W12 = 'W12',
  W13 = 'W13',
}

export type FileInfoInput = {
  alternativeText: InputMaybe<Scalars['String']['input']>;
  caption: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains: InputMaybe<Scalars['Float']['input']>;
  containsi: InputMaybe<Scalars['Float']['input']>;
  endsWith: InputMaybe<Scalars['Float']['input']>;
  eq: InputMaybe<Scalars['Float']['input']>;
  eqi: InputMaybe<Scalars['Float']['input']>;
  gt: InputMaybe<Scalars['Float']['input']>;
  gte: InputMaybe<Scalars['Float']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt: InputMaybe<Scalars['Float']['input']>;
  lte: InputMaybe<Scalars['Float']['input']>;
  ne: InputMaybe<Scalars['Float']['input']>;
  not: InputMaybe<FloatFilterInput>;
  notContains: InputMaybe<Scalars['Float']['input']>;
  notContainsi: InputMaybe<Scalars['Float']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith: InputMaybe<Scalars['Float']['input']>;
};

export type Function = {
  __typename?: 'Function';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  name: Scalars['String']['output'];
  position: Scalars['Int']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type FunctionEntity = {
  __typename?: 'FunctionEntity';
  attributes: Maybe<Function>;
  id: Maybe<Scalars['ID']['output']>;
};

export type FunctionEntityResponse = {
  __typename?: 'FunctionEntityResponse';
  data: Maybe<FunctionEntity>;
};

export type FunctionEntityResponseCollection = {
  __typename?: 'FunctionEntityResponseCollection';
  data: Array<FunctionEntity>;
  meta: ResponseCollectionMeta;
};

export type FunctionFiltersInput = {
  and: InputMaybe<Array<InputMaybe<FunctionFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<FunctionFiltersInput>;
  or: InputMaybe<Array<InputMaybe<FunctionFiltersInput>>>;
  position: InputMaybe<IntFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type FunctionInput = {
  name: InputMaybe<Scalars['String']['input']>;
  position: InputMaybe<Scalars['Int']['input']>;
};

export type FunctionRelationResponseCollection = {
  __typename?: 'FunctionRelationResponseCollection';
  data: Array<FunctionEntity>;
};

export type GenericMorph =
  | ComponentStudentCouncilFunctions
  | Function
  | Global
  | I18NLocale
  | Meeting
  | Resolution
  | Student
  | TermOfOffice
  | UploadFile
  | UploadFolder
  | UsersPermissionsPermission
  | UsersPermissionsRole
  | UsersPermissionsUser;

export type Global = {
  __typename?: 'Global';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  current_term_of_office: Maybe<TermOfOfficeEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type GlobalEntity = {
  __typename?: 'GlobalEntity';
  attributes: Maybe<Global>;
  id: Maybe<Scalars['ID']['output']>;
};

export type GlobalEntityResponse = {
  __typename?: 'GlobalEntityResponse';
  data: Maybe<GlobalEntity>;
};

export type GlobalInput = {
  current_term_of_office: InputMaybe<Scalars['ID']['input']>;
  private_config: InputMaybe<Scalars['JSON']['input']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  name: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes: Maybe<I18NLocale>;
  id: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<I18NLocaleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains: InputMaybe<Scalars['ID']['input']>;
  containsi: InputMaybe<Scalars['ID']['input']>;
  endsWith: InputMaybe<Scalars['ID']['input']>;
  eq: InputMaybe<Scalars['ID']['input']>;
  eqi: InputMaybe<Scalars['ID']['input']>;
  gt: InputMaybe<Scalars['ID']['input']>;
  gte: InputMaybe<Scalars['ID']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt: InputMaybe<Scalars['ID']['input']>;
  lte: InputMaybe<Scalars['ID']['input']>;
  ne: InputMaybe<Scalars['ID']['input']>;
  not: InputMaybe<IdFilterInput>;
  notContains: InputMaybe<Scalars['ID']['input']>;
  notContainsi: InputMaybe<Scalars['ID']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains: InputMaybe<Scalars['Int']['input']>;
  containsi: InputMaybe<Scalars['Int']['input']>;
  endsWith: InputMaybe<Scalars['Int']['input']>;
  eq: InputMaybe<Scalars['Int']['input']>;
  eqi: InputMaybe<Scalars['Int']['input']>;
  gt: InputMaybe<Scalars['Int']['input']>;
  gte: InputMaybe<Scalars['Int']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt: InputMaybe<Scalars['Int']['input']>;
  lte: InputMaybe<Scalars['Int']['input']>;
  ne: InputMaybe<Scalars['Int']['input']>;
  not: InputMaybe<IntFilterInput>;
  notContains: InputMaybe<Scalars['Int']['input']>;
  notContainsi: InputMaybe<Scalars['Int']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains: InputMaybe<Scalars['JSON']['input']>;
  containsi: InputMaybe<Scalars['JSON']['input']>;
  endsWith: InputMaybe<Scalars['JSON']['input']>;
  eq: InputMaybe<Scalars['JSON']['input']>;
  eqi: InputMaybe<Scalars['JSON']['input']>;
  gt: InputMaybe<Scalars['JSON']['input']>;
  gte: InputMaybe<Scalars['JSON']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt: InputMaybe<Scalars['JSON']['input']>;
  lte: InputMaybe<Scalars['JSON']['input']>;
  ne: InputMaybe<Scalars['JSON']['input']>;
  not: InputMaybe<JsonFilterInput>;
  notContains: InputMaybe<Scalars['JSON']['input']>;
  notContainsi: InputMaybe<Scalars['JSON']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith: InputMaybe<Scalars['JSON']['input']>;
};

export type LongFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  contains: InputMaybe<Scalars['Long']['input']>;
  containsi: InputMaybe<Scalars['Long']['input']>;
  endsWith: InputMaybe<Scalars['Long']['input']>;
  eq: InputMaybe<Scalars['Long']['input']>;
  eqi: InputMaybe<Scalars['Long']['input']>;
  gt: InputMaybe<Scalars['Long']['input']>;
  gte: InputMaybe<Scalars['Long']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  lt: InputMaybe<Scalars['Long']['input']>;
  lte: InputMaybe<Scalars['Long']['input']>;
  ne: InputMaybe<Scalars['Long']['input']>;
  not: InputMaybe<LongFilterInput>;
  notContains: InputMaybe<Scalars['Long']['input']>;
  notContainsi: InputMaybe<Scalars['Long']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Long']['input']>>>;
  startsWith: InputMaybe<Scalars['Long']['input']>;
};

export type Meeting = {
  __typename?: 'Meeting';
  agenda: Maybe<UploadFileEntityResponse>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  date: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  place: Enum_Meeting_Place;
  protocol: Maybe<UploadFileEntityResponse>;
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  reports: Maybe<UploadFileRelationResponseCollection>;
  resolutions: Maybe<ResolutionRelationResponseCollection>;
  term_of_office: Maybe<TermOfOfficeEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type MeetingReportsArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MeetingResolutionsArgs = {
  filters: InputMaybe<ResolutionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MeetingEntity = {
  __typename?: 'MeetingEntity';
  attributes: Maybe<Meeting>;
  id: Maybe<Scalars['ID']['output']>;
};

export type MeetingEntityResponse = {
  __typename?: 'MeetingEntityResponse';
  data: Maybe<MeetingEntity>;
};

export type MeetingEntityResponseCollection = {
  __typename?: 'MeetingEntityResponseCollection';
  data: Array<MeetingEntity>;
  meta: ResponseCollectionMeta;
};

export type MeetingFiltersInput = {
  and: InputMaybe<Array<InputMaybe<MeetingFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  date: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<MeetingFiltersInput>;
  or: InputMaybe<Array<InputMaybe<MeetingFiltersInput>>>;
  place: InputMaybe<StringFilterInput>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  resolutions: InputMaybe<ResolutionFiltersInput>;
  term_of_office: InputMaybe<TermOfOfficeFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type MeetingInput = {
  agenda: InputMaybe<Scalars['ID']['input']>;
  date: InputMaybe<Scalars['DateTime']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  place: InputMaybe<Enum_Meeting_Place>;
  protocol: InputMaybe<Scalars['ID']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
  reports: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  resolutions: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  term_of_office: InputMaybe<Scalars['ID']['input']>;
};

export type MeetingRelationResponseCollection = {
  __typename?: 'MeetingRelationResponseCollection';
  data: Array<MeetingEntity>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword: Maybe<UsersPermissionsLoginPayload>;
  createFunction: Maybe<FunctionEntityResponse>;
  createMeeting: Maybe<MeetingEntityResponse>;
  createResolution: Maybe<ResolutionEntityResponse>;
  createStudent: Maybe<StudentEntityResponse>;
  createTermOfOffice: Maybe<TermOfOfficeEntityResponse>;
  createUploadFile: Maybe<UploadFileEntityResponse>;
  createUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteFunction: Maybe<FunctionEntityResponse>;
  deleteGlobal: Maybe<GlobalEntityResponse>;
  deleteMeeting: Maybe<MeetingEntityResponse>;
  deleteResolution: Maybe<ResolutionEntityResponse>;
  deleteStudent: Maybe<StudentEntityResponse>;
  deleteTermOfOffice: Maybe<TermOfOfficeEntityResponse>;
  deleteUploadFile: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword: Maybe<UsersPermissionsLoginPayload>;
  updateFileInfo: UploadFileEntityResponse;
  updateFunction: Maybe<FunctionEntityResponse>;
  updateGlobal: Maybe<GlobalEntityResponse>;
  updateMeeting: Maybe<MeetingEntityResponse>;
  updateResolution: Maybe<ResolutionEntityResponse>;
  updateStudent: Maybe<StudentEntityResponse>;
  updateTermOfOffice: Maybe<TermOfOfficeEntityResponse>;
  updateUploadFile: Maybe<UploadFileEntityResponse>;
  updateUploadFolder: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};

export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type MutationCreateFunctionArgs = {
  data: FunctionInput;
};

export type MutationCreateMeetingArgs = {
  data: MeetingInput;
};

export type MutationCreateResolutionArgs = {
  data: ResolutionInput;
};

export type MutationCreateStudentArgs = {
  data: StudentInput;
};

export type MutationCreateTermOfOfficeArgs = {
  data: TermOfOfficeInput;
};

export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};

export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};

export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};

export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};

export type MutationDeleteFunctionArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteMeetingArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteResolutionArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteStudentArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteTermOfOfficeArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};

export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};

export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};

export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};

export type MutationMultipleUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};

export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};

export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};

export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};

export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info: InputMaybe<FileInfoInput>;
};

export type MutationUpdateFunctionArgs = {
  data: FunctionInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
};

export type MutationUpdateMeetingArgs = {
  data: MeetingInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateResolutionArgs = {
  data: ResolutionInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateStudentArgs = {
  data: StudentInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateTermOfOfficeArgs = {
  data: TermOfOfficeInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};

export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};

export type MutationUploadArgs = {
  field: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars['String']['input']>;
  refId: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit: InputMaybe<Scalars['Int']['input']>;
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  start: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW',
}

export type Query = {
  __typename?: 'Query';
  function: Maybe<FunctionEntityResponse>;
  functions: Maybe<FunctionEntityResponseCollection>;
  global: Maybe<GlobalEntityResponse>;
  i18NLocale: Maybe<I18NLocaleEntityResponse>;
  i18NLocales: Maybe<I18NLocaleEntityResponseCollection>;
  me: Maybe<UsersPermissionsMe>;
  meeting: Maybe<MeetingEntityResponse>;
  meetings: Maybe<MeetingEntityResponseCollection>;
  resolution: Maybe<ResolutionEntityResponse>;
  resolutions: Maybe<ResolutionEntityResponseCollection>;
  student: Maybe<StudentEntityResponse>;
  students: Maybe<StudentEntityResponseCollection>;
  termOfOffice: Maybe<TermOfOfficeEntityResponse>;
  termOfOffices: Maybe<TermOfOfficeEntityResponseCollection>;
  uploadFile: Maybe<UploadFileEntityResponse>;
  uploadFiles: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder: Maybe<UploadFolderEntityResponse>;
  uploadFolders: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers: Maybe<UsersPermissionsUserEntityResponseCollection>;
};

export type QueryFunctionArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryFunctionsArgs = {
  filters: InputMaybe<FunctionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryMeetingArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryMeetingsArgs = {
  filters: InputMaybe<MeetingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryResolutionArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryResolutionsArgs = {
  filters: InputMaybe<ResolutionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryStudentArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryStudentsArgs = {
  filters: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryTermOfOfficeArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryTermOfOfficesArgs = {
  filters: InputMaybe<TermOfOfficeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars['ID']['input']>;
};

export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Resolution = {
  __typename?: 'Resolution';
  attachments: Maybe<UploadFileRelationResponseCollection>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  document: Maybe<UploadFileEntityResponse>;
  meeting: Maybe<MeetingEntityResponse>;
  name: Scalars['String']['output'];
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type ResolutionAttachmentsArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ResolutionEntity = {
  __typename?: 'ResolutionEntity';
  attributes: Maybe<Resolution>;
  id: Maybe<Scalars['ID']['output']>;
};

export type ResolutionEntityResponse = {
  __typename?: 'ResolutionEntityResponse';
  data: Maybe<ResolutionEntity>;
};

export type ResolutionEntityResponseCollection = {
  __typename?: 'ResolutionEntityResponseCollection';
  data: Array<ResolutionEntity>;
  meta: ResponseCollectionMeta;
};

export type ResolutionFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ResolutionFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  meeting: InputMaybe<MeetingFiltersInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<ResolutionFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ResolutionFiltersInput>>>;
  publishedAt: InputMaybe<DateTimeFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type ResolutionInput = {
  attachments: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  document: InputMaybe<Scalars['ID']['input']>;
  meeting: InputMaybe<Scalars['ID']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  publishedAt: InputMaybe<Scalars['DateTime']['input']>;
};

export type ResolutionRelationResponseCollection = {
  __typename?: 'ResolutionRelationResponseCollection';
  data: Array<ResolutionEntity>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains: InputMaybe<Scalars['String']['input']>;
  containsi: InputMaybe<Scalars['String']['input']>;
  endsWith: InputMaybe<Scalars['String']['input']>;
  eq: InputMaybe<Scalars['String']['input']>;
  eqi: InputMaybe<Scalars['String']['input']>;
  gt: InputMaybe<Scalars['String']['input']>;
  gte: InputMaybe<Scalars['String']['input']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt: InputMaybe<Scalars['String']['input']>;
  lte: InputMaybe<Scalars['String']['input']>;
  ne: InputMaybe<Scalars['String']['input']>;
  not: InputMaybe<StringFilterInput>;
  notContains: InputMaybe<Scalars['String']['input']>;
  notContainsi: InputMaybe<Scalars['String']['input']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull: InputMaybe<Scalars['Boolean']['input']>;
  null: InputMaybe<Scalars['Boolean']['input']>;
  or: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith: InputMaybe<Scalars['String']['input']>;
};

export type Student = {
  __typename?: 'Student';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  department: Maybe<Enum_Student_Department>;
  functions: Maybe<Array<Maybe<ComponentStudentCouncilFunctions>>>;
  name: Scalars['String']['output'];
  student_number: Scalars['Long']['output'];
  surname: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  user: Maybe<UsersPermissionsUserEntityResponse>;
};

export type StudentFunctionsArgs = {
  filters: InputMaybe<ComponentStudentCouncilFunctionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StudentEntity = {
  __typename?: 'StudentEntity';
  attributes: Maybe<Student>;
  id: Maybe<Scalars['ID']['output']>;
};

export type StudentEntityResponse = {
  __typename?: 'StudentEntityResponse';
  data: Maybe<StudentEntity>;
};

export type StudentEntityResponseCollection = {
  __typename?: 'StudentEntityResponseCollection';
  data: Array<StudentEntity>;
  meta: ResponseCollectionMeta;
};

export type StudentFiltersInput = {
  and: InputMaybe<Array<InputMaybe<StudentFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  department: InputMaybe<StringFilterInput>;
  functions: InputMaybe<ComponentStudentCouncilFunctionsFiltersInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<StudentFiltersInput>;
  or: InputMaybe<Array<InputMaybe<StudentFiltersInput>>>;
  student_number: InputMaybe<LongFilterInput>;
  surname: InputMaybe<StringFilterInput>;
  telephone: InputMaybe<LongFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  user: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type StudentInput = {
  department: InputMaybe<Enum_Student_Department>;
  functions: InputMaybe<
    Array<InputMaybe<ComponentStudentCouncilFunctionsInput>>
  >;
  name: InputMaybe<Scalars['String']['input']>;
  student_number: InputMaybe<Scalars['Long']['input']>;
  surname: InputMaybe<Scalars['String']['input']>;
  telephone: InputMaybe<Scalars['Long']['input']>;
  user: InputMaybe<Scalars['ID']['input']>;
};

export type TermOfOffice = {
  __typename?: 'TermOfOffice';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  meetings: Maybe<MeetingRelationResponseCollection>;
  term_of_office: Scalars['String']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type TermOfOfficeMeetingsArgs = {
  filters: InputMaybe<MeetingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type TermOfOfficeEntity = {
  __typename?: 'TermOfOfficeEntity';
  attributes: Maybe<TermOfOffice>;
  id: Maybe<Scalars['ID']['output']>;
};

export type TermOfOfficeEntityResponse = {
  __typename?: 'TermOfOfficeEntityResponse';
  data: Maybe<TermOfOfficeEntity>;
};

export type TermOfOfficeEntityResponseCollection = {
  __typename?: 'TermOfOfficeEntityResponseCollection';
  data: Array<TermOfOfficeEntity>;
  meta: ResponseCollectionMeta;
};

export type TermOfOfficeFiltersInput = {
  and: InputMaybe<Array<InputMaybe<TermOfOfficeFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  meetings: InputMaybe<MeetingFiltersInput>;
  not: InputMaybe<TermOfOfficeFiltersInput>;
  or: InputMaybe<Array<InputMaybe<TermOfOfficeFiltersInput>>>;
  term_of_office: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type TermOfOfficeInput = {
  meetings: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  term_of_office: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText: Maybe<Scalars['String']['output']>;
  caption: Maybe<Scalars['String']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  ext: Maybe<Scalars['String']['output']>;
  formats: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata: Maybe<Scalars['JSON']['output']>;
  related: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes: Maybe<UploadFile>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption: InputMaybe<StringFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  ext: InputMaybe<StringFilterInput>;
  folder: InputMaybe<UploadFolderFiltersInput>;
  folderPath: InputMaybe<StringFilterInput>;
  formats: InputMaybe<JsonFilterInput>;
  hash: InputMaybe<StringFilterInput>;
  height: InputMaybe<IntFilterInput>;
  id: InputMaybe<IdFilterInput>;
  mime: InputMaybe<StringFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UploadFileFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl: InputMaybe<StringFilterInput>;
  provider: InputMaybe<StringFilterInput>;
  provider_metadata: InputMaybe<JsonFilterInput>;
  size: InputMaybe<FloatFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  url: InputMaybe<StringFilterInput>;
  width: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText: InputMaybe<Scalars['String']['input']>;
  caption: InputMaybe<Scalars['String']['input']>;
  ext: InputMaybe<Scalars['String']['input']>;
  folder: InputMaybe<Scalars['ID']['input']>;
  folderPath: InputMaybe<Scalars['String']['input']>;
  formats: InputMaybe<Scalars['JSON']['input']>;
  hash: InputMaybe<Scalars['String']['input']>;
  height: InputMaybe<Scalars['Int']['input']>;
  mime: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  previewUrl: InputMaybe<Scalars['String']['input']>;
  provider: InputMaybe<Scalars['String']['input']>;
  provider_metadata: InputMaybe<Scalars['JSON']['input']>;
  size: InputMaybe<Scalars['Float']['input']>;
  url: InputMaybe<Scalars['String']['input']>;
  width: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children: Maybe<UploadFolderRelationResponseCollection>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  files: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes: Maybe<UploadFolder>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children: InputMaybe<UploadFolderFiltersInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  files: InputMaybe<UploadFileFiltersInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UploadFolderFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent: InputMaybe<UploadFolderFiltersInput>;
  path: InputMaybe<StringFilterInput>;
  pathId: InputMaybe<IntFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name: InputMaybe<Scalars['String']['input']>;
  parent: InputMaybe<Scalars['ID']['input']>;
  path: InputMaybe<Scalars['String']['input']>;
  pathId: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked: Maybe<Scalars['Boolean']['output']>;
  confirmed: Maybe<Scalars['Boolean']['output']>;
  email: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes: Maybe<UsersPermissionsPermission>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action: InputMaybe<StringFilterInput>;
  and: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt: Maybe<Scalars['DateTime']['output']>;
  description: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type: Maybe<Scalars['String']['output']>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};

export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes: Maybe<UsersPermissionsRole>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  description: InputMaybe<StringFilterInput>;
  id: InputMaybe<IdFilterInput>;
  name: InputMaybe<StringFilterInput>;
  not: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type: InputMaybe<StringFilterInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  users: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description: InputMaybe<Scalars['String']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  permissions: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type: InputMaybe<Scalars['String']['input']>;
  users: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked: Maybe<Scalars['Boolean']['output']>;
  confirmed: Maybe<Scalars['Boolean']['output']>;
  createdAt: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  provider: Maybe<Scalars['String']['output']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  student: Maybe<StudentEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes: Maybe<UsersPermissionsUser>;
  id: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  and: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked: InputMaybe<BooleanFilterInput>;
  confirmationToken: InputMaybe<StringFilterInput>;
  confirmed: InputMaybe<BooleanFilterInput>;
  createdAt: InputMaybe<DateTimeFilterInput>;
  email: InputMaybe<StringFilterInput>;
  id: InputMaybe<IdFilterInput>;
  not: InputMaybe<UsersPermissionsUserFiltersInput>;
  or: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password: InputMaybe<StringFilterInput>;
  provider: InputMaybe<StringFilterInput>;
  resetPasswordToken: InputMaybe<StringFilterInput>;
  role: InputMaybe<UsersPermissionsRoleFiltersInput>;
  student: InputMaybe<StudentFiltersInput>;
  updatedAt: InputMaybe<DateTimeFilterInput>;
  username: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked: InputMaybe<Scalars['Boolean']['input']>;
  confirmationToken: InputMaybe<Scalars['String']['input']>;
  confirmed: InputMaybe<Scalars['Boolean']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  password: InputMaybe<Scalars['String']['input']>;
  provider: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken: InputMaybe<Scalars['String']['input']>;
  role: InputMaybe<Scalars['ID']['input']>;
  student: InputMaybe<Scalars['ID']['input']>;
  username: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type CurrentTermOfOfficeQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentTermOfOfficeQuery = {
  __typename?: 'Query';
  global: {
    __typename?: 'GlobalEntityResponse';
    data: {
      __typename?: 'GlobalEntity';
      attributes: {
        __typename?: 'Global';
        current_term_of_office: {
          __typename?: 'TermOfOfficeEntityResponse';
          data: {
            __typename?: 'TermOfOfficeEntity';
            id: string;
            attributes: { __typename?: 'TermOfOffice'; term_of_office: string };
          };
        };
      };
    };
  };
};

export type LatestMeetingsAndResolutionsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type LatestMeetingsAndResolutionsQuery = {
  __typename?: 'Query';
  meetings: {
    __typename?: 'MeetingEntityResponseCollection';
    data: Array<{
      __typename?: 'MeetingEntity';
      id: string;
      attributes: { __typename?: 'Meeting'; date: any; name: string };
    }>;
  };
  resolutions: {
    __typename?: 'ResolutionEntityResponseCollection';
    data: Array<{
      __typename?: 'ResolutionEntity';
      id: string;
      attributes: {
        __typename?: 'Resolution';
        name: string;
        publishedAt: any;
        document: {
          __typename?: 'UploadFileEntityResponse';
          data: {
            __typename?: 'UploadFileEntity';
            attributes: { __typename?: 'UploadFile'; url: string };
          };
        };
      };
    }>;
  };
};

export type MeetingQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type MeetingQuery = {
  __typename?: 'Query';
  meeting: {
    __typename?: 'MeetingEntityResponse';
    data: {
      __typename?: 'MeetingEntity';
      id: string;
      attributes: {
        __typename?: 'Meeting';
        name: string;
        date: any;
        resolutions: {
          __typename?: 'ResolutionRelationResponseCollection';
          data: Array<{
            __typename?: 'ResolutionEntity';
            id: string;
            attributes: {
              __typename?: 'Resolution';
              name: string;
              publishedAt: any;
              document: {
                __typename?: 'UploadFileEntityResponse';
                data: {
                  __typename?: 'UploadFileEntity';
                  attributes: {
                    __typename?: 'UploadFile';
                    name: string;
                    url: string;
                  };
                };
              };
            };
          }>;
        };
        agenda: {
          __typename?: 'UploadFileEntityResponse';
          data: {
            __typename?: 'UploadFileEntity';
            id: string;
            attributes: {
              __typename?: 'UploadFile';
              name: string;
              url: string;
            };
          };
        };
        protocol: {
          __typename?: 'UploadFileEntityResponse';
          data: {
            __typename?: 'UploadFileEntity';
            id: string;
            attributes: {
              __typename?: 'UploadFile';
              name: string;
              url: string;
            };
          };
        };
        reports: {
          __typename?: 'UploadFileRelationResponseCollection';
          data: Array<{
            __typename?: 'UploadFileEntity';
            id: string;
            attributes: {
              __typename?: 'UploadFile';
              name: string;
              url: string;
            };
          }>;
        };
      };
    };
  };
};

export type MeetingsQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  termId: Scalars['ID']['input'];
}>;

export type MeetingsQuery = {
  __typename?: 'Query';
  meetings: {
    __typename?: 'MeetingEntityResponseCollection';
    meta: {
      __typename?: 'ResponseCollectionMeta';
      pagination: {
        __typename?: 'Pagination';
        total: number;
        pageCount: number;
      };
    };
    data: Array<{
      __typename?: 'MeetingEntity';
      id: string;
      attributes: {
        __typename?: 'Meeting';
        name: string;
        place: Enum_Meeting_Place;
        date: any;
        reports: {
          __typename?: 'UploadFileRelationResponseCollection';
          data: Array<{
            __typename?: 'UploadFileEntity';
            attributes: { __typename?: 'UploadFile'; name: string };
          }>;
        };
      };
    }>;
  };
};

export type ResolutionsQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
  termId: Scalars['ID']['input'];
}>;

export type ResolutionsQuery = {
  __typename?: 'Query';
  resolutions: {
    __typename?: 'ResolutionEntityResponseCollection';
    data: Array<{
      __typename?: 'ResolutionEntity';
      id: string;
      attributes: {
        __typename?: 'Resolution';
        name: string;
        publishedAt: any;
        meeting: {
          __typename?: 'MeetingEntityResponse';
          data: {
            __typename?: 'MeetingEntity';
            id: string;
            attributes: { __typename?: 'Meeting'; name: string };
          };
        };
        document: {
          __typename?: 'UploadFileEntityResponse';
          data: {
            __typename?: 'UploadFileEntity';
            id: string;
            attributes: {
              __typename?: 'UploadFile';
              name: string;
              url: string;
            };
          };
        };
        attachments: {
          __typename?: 'UploadFileRelationResponseCollection';
          data: Array<{
            __typename?: 'UploadFileEntity';
            id: string;
            attributes: {
              __typename?: 'UploadFile';
              name: string;
              url: string;
            };
          }>;
        };
      };
    }>;
    meta: {
      __typename?: 'ResponseCollectionMeta';
      pagination: { __typename?: 'Pagination'; pageCount: number };
    };
  };
};

export type StudentsQueryVariables = Exact<{
  termId: Scalars['ID']['input'];
  page: InputMaybe<Scalars['Int']['input']>;
  pageSize: InputMaybe<Scalars['Int']['input']>;
}>;

export type StudentsQuery = {
  __typename?: 'Query';
  students: {
    __typename?: 'StudentEntityResponseCollection';
    meta: {
      __typename?: 'ResponseCollectionMeta';
      pagination: { __typename?: 'Pagination'; pageCount: number };
    };
    data: Array<{
      __typename?: 'StudentEntity';
      id: string;
      attributes: {
        __typename?: 'Student';
        name: string;
        surname: string;
        student_number: any;
        functions: Array<{
          __typename?: 'ComponentStudentCouncilFunctions';
          term_of_office: {
            __typename?: 'TermOfOfficeEntityResponse';
            data: { __typename?: 'TermOfOfficeEntity'; id: string };
          };
          functions: {
            __typename?: 'FunctionRelationResponseCollection';
            data: Array<{
              __typename?: 'FunctionEntity';
              id: string;
              attributes: {
                __typename?: 'Function';
                name: string;
                position: number;
              };
            }>;
          };
        }>;
      };
    }>;
  };
};

export type TermOfOfficesQueryVariables = Exact<{ [key: string]: never }>;

export type TermOfOfficesQuery = {
  __typename?: 'Query';
  termOfOffices: {
    __typename?: 'TermOfOfficeEntityResponseCollection';
    data: Array<{
      __typename?: 'TermOfOfficeEntity';
      id: string;
      attributes: { __typename?: 'TermOfOffice'; term_of_office: string };
    }>;
  };
};

export const CurrentTermOfOfficeDocument = gql`
  query CurrentTermOfOffice {
    global {
      data {
        attributes {
          current_term_of_office {
            data {
              id
              attributes {
                term_of_office
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useCurrentTermOfOfficeQuery__
 *
 * To run a query within a React component, call `useCurrentTermOfOfficeQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentTermOfOfficeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentTermOfOfficeQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentTermOfOfficeQuery(
  baseOptions?: Apollo.QueryHookOptions<
    CurrentTermOfOfficeQuery,
    CurrentTermOfOfficeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    CurrentTermOfOfficeQuery,
    CurrentTermOfOfficeQueryVariables
  >(CurrentTermOfOfficeDocument, options);
}
export function useCurrentTermOfOfficeLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CurrentTermOfOfficeQuery,
    CurrentTermOfOfficeQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    CurrentTermOfOfficeQuery,
    CurrentTermOfOfficeQueryVariables
  >(CurrentTermOfOfficeDocument, options);
}
export type CurrentTermOfOfficeQueryHookResult = ReturnType<
  typeof useCurrentTermOfOfficeQuery
>;
export type CurrentTermOfOfficeLazyQueryHookResult = ReturnType<
  typeof useCurrentTermOfOfficeLazyQuery
>;
export type CurrentTermOfOfficeQueryResult = Apollo.QueryResult<
  CurrentTermOfOfficeQuery,
  CurrentTermOfOfficeQueryVariables
>;
export const LatestMeetingsAndResolutionsDocument = gql`
  query LatestMeetingsAndResolutions {
    meetings(sort: ["date:desc", "id:desc"], pagination: { limit: 10 }) {
      data {
        id
        attributes {
          date
          name
        }
      }
    }
    resolutions(
      sort: ["publishedAt:desc", "id:desc"]
      pagination: { limit: 10 }
    ) {
      data {
        id
        attributes {
          name
          publishedAt
          document {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useLatestMeetingsAndResolutionsQuery__
 *
 * To run a query within a React component, call `useLatestMeetingsAndResolutionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useLatestMeetingsAndResolutionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLatestMeetingsAndResolutionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useLatestMeetingsAndResolutionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    LatestMeetingsAndResolutionsQuery,
    LatestMeetingsAndResolutionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<
    LatestMeetingsAndResolutionsQuery,
    LatestMeetingsAndResolutionsQueryVariables
  >(LatestMeetingsAndResolutionsDocument, options);
}
export function useLatestMeetingsAndResolutionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    LatestMeetingsAndResolutionsQuery,
    LatestMeetingsAndResolutionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    LatestMeetingsAndResolutionsQuery,
    LatestMeetingsAndResolutionsQueryVariables
  >(LatestMeetingsAndResolutionsDocument, options);
}
export type LatestMeetingsAndResolutionsQueryHookResult = ReturnType<
  typeof useLatestMeetingsAndResolutionsQuery
>;
export type LatestMeetingsAndResolutionsLazyQueryHookResult = ReturnType<
  typeof useLatestMeetingsAndResolutionsLazyQuery
>;
export type LatestMeetingsAndResolutionsQueryResult = Apollo.QueryResult<
  LatestMeetingsAndResolutionsQuery,
  LatestMeetingsAndResolutionsQueryVariables
>;
export const MeetingDocument = gql`
  query Meeting($id: ID!) {
    meeting(id: $id) {
      data {
        id
        attributes {
          name
          date
          resolutions {
            data {
              id
              attributes {
                name
                publishedAt
                document {
                  data {
                    attributes {
                      name
                      url
                    }
                  }
                }
              }
            }
          }
          agenda {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
          protocol {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
          reports {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useMeetingQuery__
 *
 * To run a query within a React component, call `useMeetingQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeetingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeetingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMeetingQuery(
  baseOptions: Apollo.QueryHookOptions<MeetingQuery, MeetingQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeetingQuery, MeetingQueryVariables>(
    MeetingDocument,
    options,
  );
}
export function useMeetingLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MeetingQuery,
    MeetingQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeetingQuery, MeetingQueryVariables>(
    MeetingDocument,
    options,
  );
}
export type MeetingQueryHookResult = ReturnType<typeof useMeetingQuery>;
export type MeetingLazyQueryHookResult = ReturnType<typeof useMeetingLazyQuery>;
export type MeetingQueryResult = Apollo.QueryResult<
  MeetingQuery,
  MeetingQueryVariables
>;
export const MeetingsDocument = gql`
  query Meetings($page: Int, $pageSize: Int, $termId: ID!) {
    meetings(
      pagination: { page: $page, pageSize: $pageSize }
      sort: ["date:desc", "id:desc"]
      filters: { term_of_office: { id: { eq: $termId } } }
    ) {
      meta {
        pagination {
          total
          pageCount
        }
      }
      data {
        id
        attributes {
          name
          place
          date
          reports {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useMeetingsQuery__
 *
 * To run a query within a React component, call `useMeetingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeetingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeetingsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      termId: // value for 'termId'
 *   },
 * });
 */
export function useMeetingsQuery(
  baseOptions: Apollo.QueryHookOptions<MeetingsQuery, MeetingsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<MeetingsQuery, MeetingsQueryVariables>(
    MeetingsDocument,
    options,
  );
}
export function useMeetingsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MeetingsQuery,
    MeetingsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<MeetingsQuery, MeetingsQueryVariables>(
    MeetingsDocument,
    options,
  );
}
export type MeetingsQueryHookResult = ReturnType<typeof useMeetingsQuery>;
export type MeetingsLazyQueryHookResult = ReturnType<
  typeof useMeetingsLazyQuery
>;
export type MeetingsQueryResult = Apollo.QueryResult<
  MeetingsQuery,
  MeetingsQueryVariables
>;
export const ResolutionsDocument = gql`
  query Resolutions($page: Int, $pageSize: Int, $termId: ID!) {
    resolutions(
      pagination: { page: $page, pageSize: $pageSize }
      filters: { meeting: { term_of_office: { id: { eq: $termId } } } }
    ) {
      data {
        id
        attributes {
          name
          publishedAt
          meeting {
            data {
              id
              attributes {
                name
              }
            }
          }
          document {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
          attachments {
            data {
              id
              attributes {
                name
                url
              }
            }
          }
        }
      }
      meta {
        pagination {
          pageCount
        }
      }
    }
  }
`;

/**
 * __useResolutionsQuery__
 *
 * To run a query within a React component, call `useResolutionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useResolutionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useResolutionsQuery({
 *   variables: {
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *      termId: // value for 'termId'
 *   },
 * });
 */
export function useResolutionsQuery(
  baseOptions: Apollo.QueryHookOptions<
    ResolutionsQuery,
    ResolutionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<ResolutionsQuery, ResolutionsQueryVariables>(
    ResolutionsDocument,
    options,
  );
}
export function useResolutionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ResolutionsQuery,
    ResolutionsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<ResolutionsQuery, ResolutionsQueryVariables>(
    ResolutionsDocument,
    options,
  );
}
export type ResolutionsQueryHookResult = ReturnType<typeof useResolutionsQuery>;
export type ResolutionsLazyQueryHookResult = ReturnType<
  typeof useResolutionsLazyQuery
>;
export type ResolutionsQueryResult = Apollo.QueryResult<
  ResolutionsQuery,
  ResolutionsQueryVariables
>;
export const StudentsDocument = gql`
  query Students($termId: ID!, $page: Int, $pageSize: Int) {
    students(
      filters: {}
      pagination: { page: $page, pageSize: $pageSize }
      sort: ["functions.functions.position", "surname", "name"]
    ) {
      meta {
        pagination {
          pageCount
        }
      }
      data {
        id
        attributes {
          name
          surname
          student_number
          functions(filters: { term_of_office: { id: { eq: $termId } } }) {
            term_of_office {
              data {
                id
              }
            }
            functions(sort: ["position"]) {
              data {
                id
                attributes {
                  name
                  position
                }
              }
            }
          }
        }
      }
    }
  }
`;

/**
 * __useStudentsQuery__
 *
 * To run a query within a React component, call `useStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStudentsQuery({
 *   variables: {
 *      termId: // value for 'termId'
 *      page: // value for 'page'
 *      pageSize: // value for 'pageSize'
 *   },
 * });
 */
export function useStudentsQuery(
  baseOptions: Apollo.QueryHookOptions<StudentsQuery, StudentsQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<StudentsQuery, StudentsQueryVariables>(
    StudentsDocument,
    options,
  );
}
export function useStudentsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    StudentsQuery,
    StudentsQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<StudentsQuery, StudentsQueryVariables>(
    StudentsDocument,
    options,
  );
}
export type StudentsQueryHookResult = ReturnType<typeof useStudentsQuery>;
export type StudentsLazyQueryHookResult = ReturnType<
  typeof useStudentsLazyQuery
>;
export type StudentsQueryResult = Apollo.QueryResult<
  StudentsQuery,
  StudentsQueryVariables
>;
export const TermOfOfficesDocument = gql`
  query TermOfOffices {
    termOfOffices {
      data {
        id
        attributes {
          term_of_office
        }
      }
    }
  }
`;

/**
 * __useTermOfOfficesQuery__
 *
 * To run a query within a React component, call `useTermOfOfficesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTermOfOfficesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTermOfOfficesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTermOfOfficesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    TermOfOfficesQuery,
    TermOfOfficesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TermOfOfficesQuery, TermOfOfficesQueryVariables>(
    TermOfOfficesDocument,
    options,
  );
}
export function useTermOfOfficesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TermOfOfficesQuery,
    TermOfOfficesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TermOfOfficesQuery, TermOfOfficesQueryVariables>(
    TermOfOfficesDocument,
    options,
  );
}
export type TermOfOfficesQueryHookResult = ReturnType<
  typeof useTermOfOfficesQuery
>;
export type TermOfOfficesLazyQueryHookResult = ReturnType<
  typeof useTermOfOfficesLazyQuery
>;
export type TermOfOfficesQueryResult = Apollo.QueryResult<
  TermOfOfficesQuery,
  TermOfOfficesQueryVariables
>;
