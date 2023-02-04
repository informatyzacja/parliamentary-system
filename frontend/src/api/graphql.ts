import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T;
export type InputMaybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  JSON: any;
  Long: any;
  Upload: any;
};

export type BooleanFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  contains: InputMaybe<Scalars['Boolean']>;
  containsi: InputMaybe<Scalars['Boolean']>;
  endsWith: InputMaybe<Scalars['Boolean']>;
  eq: InputMaybe<Scalars['Boolean']>;
  eqi: InputMaybe<Scalars['Boolean']>;
  gt: InputMaybe<Scalars['Boolean']>;
  gte: InputMaybe<Scalars['Boolean']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  lt: InputMaybe<Scalars['Boolean']>;
  lte: InputMaybe<Scalars['Boolean']>;
  ne: InputMaybe<Scalars['Boolean']>;
  not: InputMaybe<BooleanFilterInput>;
  notContains: InputMaybe<Scalars['Boolean']>;
  notContainsi: InputMaybe<Scalars['Boolean']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  notNull: InputMaybe<Scalars['Boolean']>;
  null: InputMaybe<Scalars['Boolean']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  startsWith: InputMaybe<Scalars['Boolean']>;
};

export type ComponentStudentCouncilFunctions = {
  __typename?: 'ComponentStudentCouncilFunctions';
  functions: Maybe<FunctionRelationResponseCollection>;
  id: Scalars['ID'];
  term_of_office: Maybe<TermOfOfficeEntityResponse>;
};


export type ComponentStudentCouncilFunctionsFunctionsArgs = {
  filters: InputMaybe<FunctionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ComponentStudentCouncilFunctionsFiltersInput = {
  and: InputMaybe<Array<InputMaybe<ComponentStudentCouncilFunctionsFiltersInput>>>;
  functions: InputMaybe<FunctionFiltersInput>;
  not: InputMaybe<ComponentStudentCouncilFunctionsFiltersInput>;
  or: InputMaybe<Array<InputMaybe<ComponentStudentCouncilFunctionsFiltersInput>>>;
  term_of_office: InputMaybe<TermOfOfficeFiltersInput>;
};

export type ComponentStudentCouncilFunctionsInput = {
  functions: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id: InputMaybe<Scalars['ID']>;
  term_of_office: InputMaybe<Scalars['ID']>;
};

export type DateTimeFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  contains: InputMaybe<Scalars['DateTime']>;
  containsi: InputMaybe<Scalars['DateTime']>;
  endsWith: InputMaybe<Scalars['DateTime']>;
  eq: InputMaybe<Scalars['DateTime']>;
  eqi: InputMaybe<Scalars['DateTime']>;
  gt: InputMaybe<Scalars['DateTime']>;
  gte: InputMaybe<Scalars['DateTime']>;
  in: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  lt: InputMaybe<Scalars['DateTime']>;
  lte: InputMaybe<Scalars['DateTime']>;
  ne: InputMaybe<Scalars['DateTime']>;
  not: InputMaybe<DateTimeFilterInput>;
  notContains: InputMaybe<Scalars['DateTime']>;
  notContainsi: InputMaybe<Scalars['DateTime']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  notNull: InputMaybe<Scalars['Boolean']>;
  null: InputMaybe<Scalars['Boolean']>;
  or: InputMaybe<Array<InputMaybe<Scalars['DateTime']>>>;
  startsWith: InputMaybe<Scalars['DateTime']>;
};

export enum Enum_Meeting_Place {
  C_16S_1_17 = 'C_16_s_1_17',
  SalaCentrumKongresowego = 'Sala_Centrum_Kongresowego',
  Zdalnie = 'Zdalnie'
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
  W13 = 'W13'
}

export type FileInfoInput = {
  alternativeText: InputMaybe<Scalars['String']>;
  caption: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
};

export type FloatFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  contains: InputMaybe<Scalars['Float']>;
  containsi: InputMaybe<Scalars['Float']>;
  endsWith: InputMaybe<Scalars['Float']>;
  eq: InputMaybe<Scalars['Float']>;
  eqi: InputMaybe<Scalars['Float']>;
  gt: InputMaybe<Scalars['Float']>;
  gte: InputMaybe<Scalars['Float']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt: InputMaybe<Scalars['Float']>;
  lte: InputMaybe<Scalars['Float']>;
  ne: InputMaybe<Scalars['Float']>;
  not: InputMaybe<FloatFilterInput>;
  notContains: InputMaybe<Scalars['Float']>;
  notContainsi: InputMaybe<Scalars['Float']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  notNull: InputMaybe<Scalars['Boolean']>;
  null: InputMaybe<Scalars['Boolean']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  startsWith: InputMaybe<Scalars['Float']>;
};

export type Function = {
  __typename?: 'Function';
  createdAt: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
  position: Scalars['Int'];
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type FunctionEntity = {
  __typename?: 'FunctionEntity';
  attributes: Maybe<Function>;
  id: Maybe<Scalars['ID']>;
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
  name: InputMaybe<Scalars['String']>;
  position: InputMaybe<Scalars['Int']>;
};

export type FunctionRelationResponseCollection = {
  __typename?: 'FunctionRelationResponseCollection';
  data: Array<FunctionEntity>;
};

export type GenericMorph = ComponentStudentCouncilFunctions | Function | Global | I18NLocale | Meeting | Resolution | Student | TermOfOffice | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Global = {
  __typename?: 'Global';
  createdAt: Maybe<Scalars['DateTime']>;
  current_term_of_office: Maybe<TermOfOfficeEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type GlobalEntity = {
  __typename?: 'GlobalEntity';
  attributes: Maybe<Global>;
  id: Maybe<Scalars['ID']>;
};

export type GlobalEntityResponse = {
  __typename?: 'GlobalEntityResponse';
  data: Maybe<GlobalEntity>;
};

export type GlobalInput = {
  current_term_of_office: InputMaybe<Scalars['ID']>;
};

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  name: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes: Maybe<I18NLocale>;
  id: Maybe<Scalars['ID']>;
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
  and: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  contains: InputMaybe<Scalars['ID']>;
  containsi: InputMaybe<Scalars['ID']>;
  endsWith: InputMaybe<Scalars['ID']>;
  eq: InputMaybe<Scalars['ID']>;
  eqi: InputMaybe<Scalars['ID']>;
  gt: InputMaybe<Scalars['ID']>;
  gte: InputMaybe<Scalars['ID']>;
  in: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  lt: InputMaybe<Scalars['ID']>;
  lte: InputMaybe<Scalars['ID']>;
  ne: InputMaybe<Scalars['ID']>;
  not: InputMaybe<IdFilterInput>;
  notContains: InputMaybe<Scalars['ID']>;
  notContainsi: InputMaybe<Scalars['ID']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  notNull: InputMaybe<Scalars['Boolean']>;
  null: InputMaybe<Scalars['Boolean']>;
  or: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  startsWith: InputMaybe<Scalars['ID']>;
};

export type IntFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  contains: InputMaybe<Scalars['Int']>;
  containsi: InputMaybe<Scalars['Int']>;
  endsWith: InputMaybe<Scalars['Int']>;
  eq: InputMaybe<Scalars['Int']>;
  eqi: InputMaybe<Scalars['Int']>;
  gt: InputMaybe<Scalars['Int']>;
  gte: InputMaybe<Scalars['Int']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt: InputMaybe<Scalars['Int']>;
  lte: InputMaybe<Scalars['Int']>;
  ne: InputMaybe<Scalars['Int']>;
  not: InputMaybe<IntFilterInput>;
  notContains: InputMaybe<Scalars['Int']>;
  notContainsi: InputMaybe<Scalars['Int']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  notNull: InputMaybe<Scalars['Boolean']>;
  null: InputMaybe<Scalars['Boolean']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  startsWith: InputMaybe<Scalars['Int']>;
};

export type JsonFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  contains: InputMaybe<Scalars['JSON']>;
  containsi: InputMaybe<Scalars['JSON']>;
  endsWith: InputMaybe<Scalars['JSON']>;
  eq: InputMaybe<Scalars['JSON']>;
  eqi: InputMaybe<Scalars['JSON']>;
  gt: InputMaybe<Scalars['JSON']>;
  gte: InputMaybe<Scalars['JSON']>;
  in: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  lt: InputMaybe<Scalars['JSON']>;
  lte: InputMaybe<Scalars['JSON']>;
  ne: InputMaybe<Scalars['JSON']>;
  not: InputMaybe<JsonFilterInput>;
  notContains: InputMaybe<Scalars['JSON']>;
  notContainsi: InputMaybe<Scalars['JSON']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  notNull: InputMaybe<Scalars['Boolean']>;
  null: InputMaybe<Scalars['Boolean']>;
  or: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  startsWith: InputMaybe<Scalars['JSON']>;
};

export type LongFilterInput = {
  and: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  contains: InputMaybe<Scalars['Long']>;
  containsi: InputMaybe<Scalars['Long']>;
  endsWith: InputMaybe<Scalars['Long']>;
  eq: InputMaybe<Scalars['Long']>;
  eqi: InputMaybe<Scalars['Long']>;
  gt: InputMaybe<Scalars['Long']>;
  gte: InputMaybe<Scalars['Long']>;
  in: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  lt: InputMaybe<Scalars['Long']>;
  lte: InputMaybe<Scalars['Long']>;
  ne: InputMaybe<Scalars['Long']>;
  not: InputMaybe<LongFilterInput>;
  notContains: InputMaybe<Scalars['Long']>;
  notContainsi: InputMaybe<Scalars['Long']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  notNull: InputMaybe<Scalars['Boolean']>;
  null: InputMaybe<Scalars['Boolean']>;
  or: InputMaybe<Array<InputMaybe<Scalars['Long']>>>;
  startsWith: InputMaybe<Scalars['Long']>;
};

export type Meeting = {
  __typename?: 'Meeting';
  agenda: Maybe<UploadFileEntityResponse>;
  createdAt: Maybe<Scalars['DateTime']>;
  date: Scalars['DateTime'];
  name: Scalars['String'];
  place: Enum_Meeting_Place;
  protocol: Maybe<UploadFileEntityResponse>;
  publishedAt: Maybe<Scalars['DateTime']>;
  reports: Maybe<UploadFileRelationResponseCollection>;
  resolutions: Maybe<ResolutionRelationResponseCollection>;
  term_of_office: Maybe<TermOfOfficeEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']>;
};


export type MeetingReportsArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type MeetingResolutionsArgs = {
  filters: InputMaybe<ResolutionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type MeetingEntity = {
  __typename?: 'MeetingEntity';
  attributes: Maybe<Meeting>;
  id: Maybe<Scalars['ID']>;
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
  agenda: InputMaybe<Scalars['ID']>;
  date: InputMaybe<Scalars['DateTime']>;
  name: InputMaybe<Scalars['String']>;
  place: InputMaybe<Enum_Meeting_Place>;
  protocol: InputMaybe<Scalars['ID']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
  reports: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  resolutions: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  term_of_office: InputMaybe<Scalars['ID']>;
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
  currentPassword: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
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
  id: Scalars['ID'];
};


export type MutationDeleteMeetingArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteResolutionArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteStudentArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteTermOfOfficeArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field: InputMaybe<Scalars['String']>;
  files: Array<InputMaybe<Scalars['Upload']>>;
  ref: InputMaybe<Scalars['String']>;
  refId: InputMaybe<Scalars['ID']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: InputMaybe<FileInfoInput>;
};


export type MutationUpdateFunctionArgs = {
  data: FunctionInput;
  id: Scalars['ID'];
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
};


export type MutationUpdateMeetingArgs = {
  data: MeetingInput;
  id: Scalars['ID'];
};


export type MutationUpdateResolutionArgs = {
  data: ResolutionInput;
  id: Scalars['ID'];
};


export type MutationUpdateStudentArgs = {
  data: StudentInput;
  id: Scalars['ID'];
};


export type MutationUpdateTermOfOfficeArgs = {
  data: TermOfOfficeInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID'];
};


export type MutationUploadArgs = {
  field: InputMaybe<Scalars['String']>;
  file: Scalars['Upload'];
  info: InputMaybe<FileInfoInput>;
  ref: InputMaybe<Scalars['String']>;
  refId: InputMaybe<Scalars['ID']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int'];
  pageCount: Scalars['Int'];
  pageSize: Scalars['Int'];
  total: Scalars['Int'];
};

export type PaginationArg = {
  limit: InputMaybe<Scalars['Int']>;
  page: InputMaybe<Scalars['Int']>;
  pageSize: InputMaybe<Scalars['Int']>;
  start: InputMaybe<Scalars['Int']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
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
  id: InputMaybe<Scalars['ID']>;
};


export type QueryFunctionsArgs = {
  filters: InputMaybe<FunctionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryI18NLocaleArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryI18NLocalesArgs = {
  filters: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryMeetingArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryMeetingsArgs = {
  filters: InputMaybe<MeetingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryResolutionArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryResolutionsArgs = {
  filters: InputMaybe<ResolutionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryStudentArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryStudentsArgs = {
  filters: InputMaybe<StudentFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryTermOfOfficeArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryTermOfOfficesArgs = {
  filters: InputMaybe<TermOfOfficeFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFileArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUploadFolderArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryUploadFoldersArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Resolution = {
  __typename?: 'Resolution';
  attachments: Maybe<UploadFileRelationResponseCollection>;
  createdAt: Maybe<Scalars['DateTime']>;
  document: Maybe<UploadFileEntityResponse>;
  meeting: Maybe<MeetingEntityResponse>;
  name: Scalars['String'];
  publishedAt: Maybe<Scalars['DateTime']>;
  updatedAt: Maybe<Scalars['DateTime']>;
};


export type ResolutionAttachmentsArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type ResolutionEntity = {
  __typename?: 'ResolutionEntity';
  attributes: Maybe<Resolution>;
  id: Maybe<Scalars['ID']>;
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
  attachments: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  document: InputMaybe<Scalars['ID']>;
  meeting: InputMaybe<Scalars['ID']>;
  name: InputMaybe<Scalars['String']>;
  publishedAt: InputMaybe<Scalars['DateTime']>;
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
  and: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  between: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contains: InputMaybe<Scalars['String']>;
  containsi: InputMaybe<Scalars['String']>;
  endsWith: InputMaybe<Scalars['String']>;
  eq: InputMaybe<Scalars['String']>;
  eqi: InputMaybe<Scalars['String']>;
  gt: InputMaybe<Scalars['String']>;
  gte: InputMaybe<Scalars['String']>;
  in: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  lt: InputMaybe<Scalars['String']>;
  lte: InputMaybe<Scalars['String']>;
  ne: InputMaybe<Scalars['String']>;
  not: InputMaybe<StringFilterInput>;
  notContains: InputMaybe<Scalars['String']>;
  notContainsi: InputMaybe<Scalars['String']>;
  notIn: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  notNull: InputMaybe<Scalars['Boolean']>;
  null: InputMaybe<Scalars['Boolean']>;
  or: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  startsWith: InputMaybe<Scalars['String']>;
};

export type Student = {
  __typename?: 'Student';
  createdAt: Maybe<Scalars['DateTime']>;
  department: Enum_Student_Department;
  functions: Maybe<Array<Maybe<ComponentStudentCouncilFunctions>>>;
  name: Scalars['String'];
  student_number: Scalars['Long'];
  surname: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
  user: Maybe<UsersPermissionsUserEntityResponse>;
};


export type StudentFunctionsArgs = {
  filters: InputMaybe<ComponentStudentCouncilFunctionsFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type StudentEntity = {
  __typename?: 'StudentEntity';
  attributes: Maybe<Student>;
  id: Maybe<Scalars['ID']>;
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
  functions: InputMaybe<Array<InputMaybe<ComponentStudentCouncilFunctionsInput>>>;
  name: InputMaybe<Scalars['String']>;
  student_number: InputMaybe<Scalars['Long']>;
  surname: InputMaybe<Scalars['String']>;
  telephone: InputMaybe<Scalars['Long']>;
  user: InputMaybe<Scalars['ID']>;
};

export type TermOfOffice = {
  __typename?: 'TermOfOffice';
  createdAt: Maybe<Scalars['DateTime']>;
  meetings: Maybe<MeetingRelationResponseCollection>;
  term_of_office: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
};


export type TermOfOfficeMeetingsArgs = {
  filters: InputMaybe<MeetingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TermOfOfficeEntity = {
  __typename?: 'TermOfOfficeEntity';
  attributes: Maybe<TermOfOffice>;
  id: Maybe<Scalars['ID']>;
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
  meetings: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  term_of_office: InputMaybe<Scalars['String']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText: Maybe<Scalars['String']>;
  caption: Maybe<Scalars['String']>;
  createdAt: Maybe<Scalars['DateTime']>;
  ext: Maybe<Scalars['String']>;
  formats: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata: Maybe<Scalars['JSON']>;
  related: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float'];
  updatedAt: Maybe<Scalars['DateTime']>;
  url: Scalars['String'];
  width: Maybe<Scalars['Int']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes: Maybe<UploadFile>;
  id: Maybe<Scalars['ID']>;
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
  alternativeText: InputMaybe<Scalars['String']>;
  caption: InputMaybe<Scalars['String']>;
  ext: InputMaybe<Scalars['String']>;
  folder: InputMaybe<Scalars['ID']>;
  folderPath: InputMaybe<Scalars['String']>;
  formats: InputMaybe<Scalars['JSON']>;
  hash: InputMaybe<Scalars['String']>;
  height: InputMaybe<Scalars['Int']>;
  mime: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  previewUrl: InputMaybe<Scalars['String']>;
  provider: InputMaybe<Scalars['String']>;
  provider_metadata: InputMaybe<Scalars['JSON']>;
  size: InputMaybe<Scalars['Float']>;
  url: InputMaybe<Scalars['String']>;
  width: InputMaybe<Scalars['Int']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children: Maybe<UploadFolderRelationResponseCollection>;
  createdAt: Maybe<Scalars['DateTime']>;
  files: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String'];
  parent: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String'];
  pathId: Scalars['Int'];
  updatedAt: Maybe<Scalars['DateTime']>;
};


export type UploadFolderChildrenArgs = {
  filters: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UploadFolderFilesArgs = {
  filters: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes: Maybe<UploadFolder>;
  id: Maybe<Scalars['ID']>;
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
  children: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  files: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  name: InputMaybe<Scalars['String']>;
  parent: InputMaybe<Scalars['ID']>;
  path: InputMaybe<Scalars['String']>;
  pathId: InputMaybe<Scalars['Int']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider: Scalars['String'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked: Maybe<Scalars['Boolean']>;
  confirmed: Maybe<Scalars['Boolean']>;
  email: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  role: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type: Maybe<Scalars['String']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  createdAt: Maybe<Scalars['DateTime']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes: Maybe<UsersPermissionsPermission>;
  id: Maybe<Scalars['ID']>;
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
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt: Maybe<Scalars['DateTime']>;
  description: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type: Maybe<Scalars['String']>;
  updatedAt: Maybe<Scalars['DateTime']>;
  users: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes: Maybe<UsersPermissionsRole>;
  id: Maybe<Scalars['ID']>;
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
  description: InputMaybe<Scalars['String']>;
  name: InputMaybe<Scalars['String']>;
  permissions: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  type: InputMaybe<Scalars['String']>;
  users: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked: Maybe<Scalars['Boolean']>;
  confirmed: Maybe<Scalars['Boolean']>;
  createdAt: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  provider: Maybe<Scalars['String']>;
  role: Maybe<UsersPermissionsRoleEntityResponse>;
  student: Maybe<StudentEntityResponse>;
  updatedAt: Maybe<Scalars['DateTime']>;
  username: Scalars['String'];
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes: Maybe<UsersPermissionsUser>;
  id: Maybe<Scalars['ID']>;
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
  blocked: InputMaybe<Scalars['Boolean']>;
  confirmationToken: InputMaybe<Scalars['String']>;
  confirmed: InputMaybe<Scalars['Boolean']>;
  email: InputMaybe<Scalars['String']>;
  password: InputMaybe<Scalars['String']>;
  provider: InputMaybe<Scalars['String']>;
  resetPasswordToken: InputMaybe<Scalars['String']>;
  role: InputMaybe<Scalars['ID']>;
  student: InputMaybe<Scalars['ID']>;
  username: InputMaybe<Scalars['String']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type CurrentTermOfOfficeQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentTermOfOfficeQuery = { __typename?: 'Query', global: { __typename?: 'GlobalEntityResponse', data: { __typename?: 'GlobalEntity', attributes: { __typename?: 'Global', current_term_of_office: { __typename?: 'TermOfOfficeEntityResponse', data: { __typename?: 'TermOfOfficeEntity', id: string, attributes: { __typename?: 'TermOfOffice', term_of_office: string } } } } } } };

export type LatestMeetingsAndResolutionsQueryVariables = Exact<{ [key: string]: never; }>;


export type LatestMeetingsAndResolutionsQuery = { __typename?: 'Query', meetings: { __typename?: 'MeetingEntityResponseCollection', data: Array<{ __typename?: 'MeetingEntity', id: string, attributes: { __typename?: 'Meeting', date: any, name: string } }> }, resolutions: { __typename?: 'ResolutionEntityResponseCollection', data: Array<{ __typename?: 'ResolutionEntity', id: string, attributes: { __typename?: 'Resolution', name: string, publishedAt: any, document: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', url: string } } } } }> } };

export type MeetingQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MeetingQuery = { __typename?: 'Query', meeting: { __typename?: 'MeetingEntityResponse', data: { __typename?: 'MeetingEntity', id: string, attributes: { __typename?: 'Meeting', name: string, date: any, resolutions: { __typename?: 'ResolutionRelationResponseCollection', data: Array<{ __typename?: 'ResolutionEntity', id: string, attributes: { __typename?: 'Resolution', name: string, publishedAt: any, document: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string, url: string } } } } }> }, agenda: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', id: string, attributes: { __typename?: 'UploadFile', name: string, url: string } } }, protocol: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', id: string, attributes: { __typename?: 'UploadFile', name: string, url: string } } }, reports: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id: string, attributes: { __typename?: 'UploadFile', name: string, url: string } }> } } } } };

export type MeetingsQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']>;
  pageSize: InputMaybe<Scalars['Int']>;
  termId: Scalars['ID'];
}>;


export type MeetingsQuery = { __typename?: 'Query', meetings: { __typename?: 'MeetingEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', total: number, pageCount: number } }, data: Array<{ __typename?: 'MeetingEntity', id: string, attributes: { __typename?: 'Meeting', name: string, place: Enum_Meeting_Place, date: any, reports: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', attributes: { __typename?: 'UploadFile', name: string } }> } } }> } };

export type ResolutionsQueryVariables = Exact<{
  page: InputMaybe<Scalars['Int']>;
  pageSize: InputMaybe<Scalars['Int']>;
  termId: Scalars['ID'];
}>;


export type ResolutionsQuery = { __typename?: 'Query', resolutions: { __typename?: 'ResolutionEntityResponseCollection', data: Array<{ __typename?: 'ResolutionEntity', id: string, attributes: { __typename?: 'Resolution', name: string, publishedAt: any, meeting: { __typename?: 'MeetingEntityResponse', data: { __typename?: 'MeetingEntity', id: string, attributes: { __typename?: 'Meeting', name: string } } }, document: { __typename?: 'UploadFileEntityResponse', data: { __typename?: 'UploadFileEntity', id: string, attributes: { __typename?: 'UploadFile', name: string, url: string } } }, attachments: { __typename?: 'UploadFileRelationResponseCollection', data: Array<{ __typename?: 'UploadFileEntity', id: string, attributes: { __typename?: 'UploadFile', name: string, url: string } }> } } }>, meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', pageCount: number } } } };

export type StudentsQueryVariables = Exact<{
  termId: Scalars['ID'];
  page: InputMaybe<Scalars['Int']>;
  pageSize: InputMaybe<Scalars['Int']>;
}>;


export type StudentsQuery = { __typename?: 'Query', students: { __typename?: 'StudentEntityResponseCollection', meta: { __typename?: 'ResponseCollectionMeta', pagination: { __typename?: 'Pagination', pageCount: number } }, data: Array<{ __typename?: 'StudentEntity', id: string, attributes: { __typename?: 'Student', name: string, surname: string, student_number: any, functions: Array<{ __typename?: 'ComponentStudentCouncilFunctions', term_of_office: { __typename?: 'TermOfOfficeEntityResponse', data: { __typename?: 'TermOfOfficeEntity', id: string } }, functions: { __typename?: 'FunctionRelationResponseCollection', data: Array<{ __typename?: 'FunctionEntity', id: string, attributes: { __typename?: 'Function', name: string, position: number } }> } }> } }> } };

export type TermOfOfficesQueryVariables = Exact<{ [key: string]: never; }>;


export type TermOfOfficesQuery = { __typename?: 'Query', termOfOffices: { __typename?: 'TermOfOfficeEntityResponseCollection', data: Array<{ __typename?: 'TermOfOfficeEntity', id: string, attributes: { __typename?: 'TermOfOffice', term_of_office: string } }> } };


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
export function useCurrentTermOfOfficeQuery(baseOptions?: Apollo.QueryHookOptions<CurrentTermOfOfficeQuery, CurrentTermOfOfficeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentTermOfOfficeQuery, CurrentTermOfOfficeQueryVariables>(CurrentTermOfOfficeDocument, options);
      }
export function useCurrentTermOfOfficeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentTermOfOfficeQuery, CurrentTermOfOfficeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentTermOfOfficeQuery, CurrentTermOfOfficeQueryVariables>(CurrentTermOfOfficeDocument, options);
        }
export type CurrentTermOfOfficeQueryHookResult = ReturnType<typeof useCurrentTermOfOfficeQuery>;
export type CurrentTermOfOfficeLazyQueryHookResult = ReturnType<typeof useCurrentTermOfOfficeLazyQuery>;
export type CurrentTermOfOfficeQueryResult = Apollo.QueryResult<CurrentTermOfOfficeQuery, CurrentTermOfOfficeQueryVariables>;
export const LatestMeetingsAndResolutionsDocument = gql`
    query LatestMeetingsAndResolutions {
  meetings(sort: ["date:desc", "id:desc"], pagination: {limit: 10}) {
    data {
      id
      attributes {
        date
        name
      }
    }
  }
  resolutions(sort: ["publishedAt:desc", "id:desc"], pagination: {limit: 10}) {
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
export function useLatestMeetingsAndResolutionsQuery(baseOptions?: Apollo.QueryHookOptions<LatestMeetingsAndResolutionsQuery, LatestMeetingsAndResolutionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LatestMeetingsAndResolutionsQuery, LatestMeetingsAndResolutionsQueryVariables>(LatestMeetingsAndResolutionsDocument, options);
      }
export function useLatestMeetingsAndResolutionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LatestMeetingsAndResolutionsQuery, LatestMeetingsAndResolutionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LatestMeetingsAndResolutionsQuery, LatestMeetingsAndResolutionsQueryVariables>(LatestMeetingsAndResolutionsDocument, options);
        }
export type LatestMeetingsAndResolutionsQueryHookResult = ReturnType<typeof useLatestMeetingsAndResolutionsQuery>;
export type LatestMeetingsAndResolutionsLazyQueryHookResult = ReturnType<typeof useLatestMeetingsAndResolutionsLazyQuery>;
export type LatestMeetingsAndResolutionsQueryResult = Apollo.QueryResult<LatestMeetingsAndResolutionsQuery, LatestMeetingsAndResolutionsQueryVariables>;
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
export function useMeetingQuery(baseOptions: Apollo.QueryHookOptions<MeetingQuery, MeetingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeetingQuery, MeetingQueryVariables>(MeetingDocument, options);
      }
export function useMeetingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeetingQuery, MeetingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeetingQuery, MeetingQueryVariables>(MeetingDocument, options);
        }
export type MeetingQueryHookResult = ReturnType<typeof useMeetingQuery>;
export type MeetingLazyQueryHookResult = ReturnType<typeof useMeetingLazyQuery>;
export type MeetingQueryResult = Apollo.QueryResult<MeetingQuery, MeetingQueryVariables>;
export const MeetingsDocument = gql`
    query Meetings($page: Int, $pageSize: Int, $termId: ID!) {
  meetings(
    pagination: {page: $page, pageSize: $pageSize}
    sort: ["date:desc", "id:desc"]
    filters: {term_of_office: {id: {eq: $termId}}}
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
export function useMeetingsQuery(baseOptions: Apollo.QueryHookOptions<MeetingsQuery, MeetingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeetingsQuery, MeetingsQueryVariables>(MeetingsDocument, options);
      }
export function useMeetingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeetingsQuery, MeetingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeetingsQuery, MeetingsQueryVariables>(MeetingsDocument, options);
        }
export type MeetingsQueryHookResult = ReturnType<typeof useMeetingsQuery>;
export type MeetingsLazyQueryHookResult = ReturnType<typeof useMeetingsLazyQuery>;
export type MeetingsQueryResult = Apollo.QueryResult<MeetingsQuery, MeetingsQueryVariables>;
export const ResolutionsDocument = gql`
    query Resolutions($page: Int, $pageSize: Int, $termId: ID!) {
  resolutions(
    pagination: {page: $page, pageSize: $pageSize}
    filters: {meeting: {term_of_office: {id: {eq: $termId}}}}
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
export function useResolutionsQuery(baseOptions: Apollo.QueryHookOptions<ResolutionsQuery, ResolutionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ResolutionsQuery, ResolutionsQueryVariables>(ResolutionsDocument, options);
      }
export function useResolutionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ResolutionsQuery, ResolutionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ResolutionsQuery, ResolutionsQueryVariables>(ResolutionsDocument, options);
        }
export type ResolutionsQueryHookResult = ReturnType<typeof useResolutionsQuery>;
export type ResolutionsLazyQueryHookResult = ReturnType<typeof useResolutionsLazyQuery>;
export type ResolutionsQueryResult = Apollo.QueryResult<ResolutionsQuery, ResolutionsQueryVariables>;
export const StudentsDocument = gql`
    query Students($termId: ID!, $page: Int, $pageSize: Int) {
  students(
    filters: {}
    pagination: {page: $page, pageSize: $pageSize}
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
        functions(filters: {term_of_office: {id: {eq: $termId}}}) {
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
export function useStudentsQuery(baseOptions: Apollo.QueryHookOptions<StudentsQuery, StudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StudentsQuery, StudentsQueryVariables>(StudentsDocument, options);
      }
export function useStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StudentsQuery, StudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StudentsQuery, StudentsQueryVariables>(StudentsDocument, options);
        }
export type StudentsQueryHookResult = ReturnType<typeof useStudentsQuery>;
export type StudentsLazyQueryHookResult = ReturnType<typeof useStudentsLazyQuery>;
export type StudentsQueryResult = Apollo.QueryResult<StudentsQuery, StudentsQueryVariables>;
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
export function useTermOfOfficesQuery(baseOptions?: Apollo.QueryHookOptions<TermOfOfficesQuery, TermOfOfficesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TermOfOfficesQuery, TermOfOfficesQueryVariables>(TermOfOfficesDocument, options);
      }
export function useTermOfOfficesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TermOfOfficesQuery, TermOfOfficesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TermOfOfficesQuery, TermOfOfficesQueryVariables>(TermOfOfficesDocument, options);
        }
export type TermOfOfficesQueryHookResult = ReturnType<typeof useTermOfOfficesQuery>;
export type TermOfOfficesLazyQueryHookResult = ReturnType<typeof useTermOfOfficesLazyQuery>;
export type TermOfOfficesQueryResult = Apollo.QueryResult<TermOfOfficesQuery, TermOfOfficesQueryVariables>;