/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const getEmployee = /* GraphQL */ `query GetEmployee($email: String!) {
  getEmployee(email: $email) {
    email
    name
    hireDate
    department
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEmployeeQueryVariables,
  APITypes.GetEmployeeQuery
>;
export const listEmployees = /* GraphQL */ `query ListEmployees(
  $email: String
  $filter: ModelEmployeeFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listEmployees(
    email: $email
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      email
      name
      hireDate
      department
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEmployeesQueryVariables,
  APITypes.ListEmployeesQuery
>;
export const getMonthlyReport = /* GraphQL */ `query GetMonthlyReport($id: ID!) {
  getMonthlyReport(id: $id) {
    id
    email
    reportMonth
    submissionDate
    content
    status
    feedback
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMonthlyReportQueryVariables,
  APITypes.GetMonthlyReportQuery
>;
export const listMonthlyReports = /* GraphQL */ `query ListMonthlyReports(
  $filter: ModelMonthlyReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listMonthlyReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      email
      reportMonth
      submissionDate
      content
      status
      feedback
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMonthlyReportsQueryVariables,
  APITypes.ListMonthlyReportsQuery
>;
export const monthlyReportsByEmailAndReportMonth = /* GraphQL */ `query MonthlyReportsByEmailAndReportMonth(
  $email: String!
  $reportMonth: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMonthlyReportFilterInput
  $limit: Int
  $nextToken: String
) {
  monthlyReportsByEmailAndReportMonth(
    email: $email
    reportMonth: $reportMonth
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
      reportMonth
      submissionDate
      content
      status
      feedback
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MonthlyReportsByEmailAndReportMonthQueryVariables,
  APITypes.MonthlyReportsByEmailAndReportMonthQuery
>;
export const monthlyReportsByReportMonthAndEmail = /* GraphQL */ `query MonthlyReportsByReportMonthAndEmail(
  $reportMonth: String!
  $email: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelMonthlyReportFilterInput
  $limit: Int
  $nextToken: String
) {
  monthlyReportsByReportMonthAndEmail(
    reportMonth: $reportMonth
    email: $email
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      email
      reportMonth
      submissionDate
      content
      status
      feedback
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.MonthlyReportsByReportMonthAndEmailQueryVariables,
  APITypes.MonthlyReportsByReportMonthAndEmailQuery
>;
