/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onCreateEmployee = /* GraphQL */ `subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
  onCreateEmployee(filter: $filter) {
    email
    name
    hireDate
    department
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateEmployeeSubscriptionVariables,
  APITypes.OnCreateEmployeeSubscription
>;
export const onUpdateEmployee = /* GraphQL */ `subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
  onUpdateEmployee(filter: $filter) {
    email
    name
    hireDate
    department
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateEmployeeSubscriptionVariables,
  APITypes.OnUpdateEmployeeSubscription
>;
export const onDeleteEmployee = /* GraphQL */ `subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput) {
  onDeleteEmployee(filter: $filter) {
    email
    name
    hireDate
    department
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteEmployeeSubscriptionVariables,
  APITypes.OnDeleteEmployeeSubscription
>;
export const onCreateMonthlyReport = /* GraphQL */ `subscription OnCreateMonthlyReport(
  $filter: ModelSubscriptionMonthlyReportFilterInput
) {
  onCreateMonthlyReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateMonthlyReportSubscriptionVariables,
  APITypes.OnCreateMonthlyReportSubscription
>;
export const onUpdateMonthlyReport = /* GraphQL */ `subscription OnUpdateMonthlyReport(
  $filter: ModelSubscriptionMonthlyReportFilterInput
) {
  onUpdateMonthlyReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateMonthlyReportSubscriptionVariables,
  APITypes.OnUpdateMonthlyReportSubscription
>;
export const onDeleteMonthlyReport = /* GraphQL */ `subscription OnDeleteMonthlyReport(
  $filter: ModelSubscriptionMonthlyReportFilterInput
) {
  onDeleteMonthlyReport(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteMonthlyReportSubscriptionVariables,
  APITypes.OnDeleteMonthlyReportSubscription
>;
