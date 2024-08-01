/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    name
    description
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const createEmployee = /* GraphQL */ `mutation CreateEmployee(
  $input: CreateEmployeeInput!
  $condition: ModelEmployeeConditionInput
) {
  createEmployee(input: $input, condition: $condition) {
    email
    name
    hireDate
    department
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateEmployeeMutationVariables,
  APITypes.CreateEmployeeMutation
>;
export const updateEmployee = /* GraphQL */ `mutation UpdateEmployee(
  $input: UpdateEmployeeInput!
  $condition: ModelEmployeeConditionInput
) {
  updateEmployee(input: $input, condition: $condition) {
    email
    name
    hireDate
    department
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateEmployeeMutationVariables,
  APITypes.UpdateEmployeeMutation
>;
export const deleteEmployee = /* GraphQL */ `mutation DeleteEmployee(
  $input: DeleteEmployeeInput!
  $condition: ModelEmployeeConditionInput
) {
  deleteEmployee(input: $input, condition: $condition) {
    email
    name
    hireDate
    department
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteEmployeeMutationVariables,
  APITypes.DeleteEmployeeMutation
>;
export const createMonthlyReport = /* GraphQL */ `mutation CreateMonthlyReport(
  $input: CreateMonthlyReportInput!
  $condition: ModelMonthlyReportConditionInput
) {
  createMonthlyReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateMonthlyReportMutationVariables,
  APITypes.CreateMonthlyReportMutation
>;
export const updateMonthlyReport = /* GraphQL */ `mutation UpdateMonthlyReport(
  $input: UpdateMonthlyReportInput!
  $condition: ModelMonthlyReportConditionInput
) {
  updateMonthlyReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateMonthlyReportMutationVariables,
  APITypes.UpdateMonthlyReportMutation
>;
export const deleteMonthlyReport = /* GraphQL */ `mutation DeleteMonthlyReport(
  $input: DeleteMonthlyReportInput!
  $condition: ModelMonthlyReportConditionInput
) {
  deleteMonthlyReport(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteMonthlyReportMutationVariables,
  APITypes.DeleteMonthlyReportMutation
>;
