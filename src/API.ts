/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTodoInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelTodoConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  name: string,
  description?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateEmployeeInput = {
  email: string,
  name: string,
  hireDate: string,
  department: string,
};

export type ModelEmployeeConditionInput = {
  name?: ModelStringInput | null,
  hireDate?: ModelStringInput | null,
  department?: ModelStringInput | null,
  and?: Array< ModelEmployeeConditionInput | null > | null,
  or?: Array< ModelEmployeeConditionInput | null > | null,
  not?: ModelEmployeeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type Employee = {
  __typename: "Employee",
  email: string,
  name: string,
  hireDate: string,
  department: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateEmployeeInput = {
  email: string,
  name?: string | null,
  hireDate?: string | null,
  department?: string | null,
};

export type DeleteEmployeeInput = {
  email: string,
};

export type CreateMonthlyReportInput = {
  id?: string | null,
  email: string,
  reportMonth: string,
  submissionDate: string,
  content: string,
  status: string,
  feedback: string,
};

export type ModelMonthlyReportConditionInput = {
  email?: ModelStringInput | null,
  reportMonth?: ModelStringInput | null,
  submissionDate?: ModelStringInput | null,
  content?: ModelStringInput | null,
  status?: ModelStringInput | null,
  feedback?: ModelStringInput | null,
  and?: Array< ModelMonthlyReportConditionInput | null > | null,
  or?: Array< ModelMonthlyReportConditionInput | null > | null,
  not?: ModelMonthlyReportConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type MonthlyReport = {
  __typename: "MonthlyReport",
  id: string,
  email: string,
  reportMonth: string,
  submissionDate: string,
  content: string,
  status: string,
  feedback: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMonthlyReportInput = {
  id: string,
  email?: string | null,
  reportMonth?: string | null,
  submissionDate?: string | null,
  content?: string | null,
  status?: string | null,
  feedback?: string | null,
};

export type DeleteMonthlyReportInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelEmployeeFilterInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  hireDate?: ModelStringInput | null,
  department?: ModelStringInput | null,
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelEmployeeFilterInput | null > | null,
  or?: Array< ModelEmployeeFilterInput | null > | null,
  not?: ModelEmployeeFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelEmployeeConnection = {
  __typename: "ModelEmployeeConnection",
  items:  Array<Employee | null >,
  nextToken?: string | null,
};

export type ModelMonthlyReportFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  reportMonth?: ModelStringInput | null,
  submissionDate?: ModelStringInput | null,
  content?: ModelStringInput | null,
  status?: ModelStringInput | null,
  feedback?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMonthlyReportFilterInput | null > | null,
  or?: Array< ModelMonthlyReportFilterInput | null > | null,
  not?: ModelMonthlyReportFilterInput | null,
};

export type ModelMonthlyReportConnection = {
  __typename: "ModelMonthlyReportConnection",
  items:  Array<MonthlyReport | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionEmployeeFilterInput = {
  email?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  hireDate?: ModelSubscriptionStringInput | null,
  department?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEmployeeFilterInput | null > | null,
  or?: Array< ModelSubscriptionEmployeeFilterInput | null > | null,
};

export type ModelSubscriptionMonthlyReportFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  reportMonth?: ModelSubscriptionStringInput | null,
  submissionDate?: ModelSubscriptionStringInput | null,
  content?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  feedback?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionMonthlyReportFilterInput | null > | null,
  or?: Array< ModelSubscriptionMonthlyReportFilterInput | null > | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEmployeeMutationVariables = {
  input: CreateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type CreateEmployeeMutation = {
  createEmployee?:  {
    __typename: "Employee",
    email: string,
    name: string,
    hireDate: string,
    department: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEmployeeMutationVariables = {
  input: UpdateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type UpdateEmployeeMutation = {
  updateEmployee?:  {
    __typename: "Employee",
    email: string,
    name: string,
    hireDate: string,
    department: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEmployeeMutationVariables = {
  input: DeleteEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type DeleteEmployeeMutation = {
  deleteEmployee?:  {
    __typename: "Employee",
    email: string,
    name: string,
    hireDate: string,
    department: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMonthlyReportMutationVariables = {
  input: CreateMonthlyReportInput,
  condition?: ModelMonthlyReportConditionInput | null,
};

export type CreateMonthlyReportMutation = {
  createMonthlyReport?:  {
    __typename: "MonthlyReport",
    id: string,
    email: string,
    reportMonth: string,
    submissionDate: string,
    content: string,
    status: string,
    feedback: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMonthlyReportMutationVariables = {
  input: UpdateMonthlyReportInput,
  condition?: ModelMonthlyReportConditionInput | null,
};

export type UpdateMonthlyReportMutation = {
  updateMonthlyReport?:  {
    __typename: "MonthlyReport",
    id: string,
    email: string,
    reportMonth: string,
    submissionDate: string,
    content: string,
    status: string,
    feedback: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMonthlyReportMutationVariables = {
  input: DeleteMonthlyReportInput,
  condition?: ModelMonthlyReportConditionInput | null,
};

export type DeleteMonthlyReportMutation = {
  deleteMonthlyReport?:  {
    __typename: "MonthlyReport",
    id: string,
    email: string,
    reportMonth: string,
    submissionDate: string,
    content: string,
    status: string,
    feedback: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      name: string,
      description?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEmployeeQueryVariables = {
  email: string,
};

export type GetEmployeeQuery = {
  getEmployee?:  {
    __typename: "Employee",
    email: string,
    name: string,
    hireDate: string,
    department: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEmployeesQueryVariables = {
  email?: string | null,
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListEmployeesQuery = {
  listEmployees?:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      email: string,
      name: string,
      hireDate: string,
      department: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetMonthlyReportQueryVariables = {
  id: string,
};

export type GetMonthlyReportQuery = {
  getMonthlyReport?:  {
    __typename: "MonthlyReport",
    id: string,
    email: string,
    reportMonth: string,
    submissionDate: string,
    content: string,
    status: string,
    feedback: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMonthlyReportsQueryVariables = {
  filter?: ModelMonthlyReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMonthlyReportsQuery = {
  listMonthlyReports?:  {
    __typename: "ModelMonthlyReportConnection",
    items:  Array< {
      __typename: "MonthlyReport",
      id: string,
      email: string,
      reportMonth: string,
      submissionDate: string,
      content: string,
      status: string,
      feedback: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MonthlyReportsByEmailAndReportMonthQueryVariables = {
  email: string,
  reportMonth?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMonthlyReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MonthlyReportsByEmailAndReportMonthQuery = {
  monthlyReportsByEmailAndReportMonth?:  {
    __typename: "ModelMonthlyReportConnection",
    items:  Array< {
      __typename: "MonthlyReport",
      id: string,
      email: string,
      reportMonth: string,
      submissionDate: string,
      content: string,
      status: string,
      feedback: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type MonthlyReportsByReportMonthAndEmailQueryVariables = {
  reportMonth: string,
  email?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMonthlyReportFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type MonthlyReportsByReportMonthAndEmailQuery = {
  monthlyReportsByReportMonthAndEmail?:  {
    __typename: "ModelMonthlyReportConnection",
    items:  Array< {
      __typename: "MonthlyReport",
      id: string,
      email: string,
      reportMonth: string,
      submissionDate: string,
      content: string,
      status: string,
      feedback: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    name: string,
    description?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
};

export type OnCreateEmployeeSubscription = {
  onCreateEmployee?:  {
    __typename: "Employee",
    email: string,
    name: string,
    hireDate: string,
    department: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
};

export type OnUpdateEmployeeSubscription = {
  onUpdateEmployee?:  {
    __typename: "Employee",
    email: string,
    name: string,
    hireDate: string,
    department: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
};

export type OnDeleteEmployeeSubscription = {
  onDeleteEmployee?:  {
    __typename: "Employee",
    email: string,
    name: string,
    hireDate: string,
    department: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMonthlyReportSubscriptionVariables = {
  filter?: ModelSubscriptionMonthlyReportFilterInput | null,
};

export type OnCreateMonthlyReportSubscription = {
  onCreateMonthlyReport?:  {
    __typename: "MonthlyReport",
    id: string,
    email: string,
    reportMonth: string,
    submissionDate: string,
    content: string,
    status: string,
    feedback: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMonthlyReportSubscriptionVariables = {
  filter?: ModelSubscriptionMonthlyReportFilterInput | null,
};

export type OnUpdateMonthlyReportSubscription = {
  onUpdateMonthlyReport?:  {
    __typename: "MonthlyReport",
    id: string,
    email: string,
    reportMonth: string,
    submissionDate: string,
    content: string,
    status: string,
    feedback: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMonthlyReportSubscriptionVariables = {
  filter?: ModelSubscriptionMonthlyReportFilterInput | null,
};

export type OnDeleteMonthlyReportSubscription = {
  onDeleteMonthlyReport?:  {
    __typename: "MonthlyReport",
    id: string,
    email: string,
    reportMonth: string,
    submissionDate: string,
    content: string,
    status: string,
    feedback: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
