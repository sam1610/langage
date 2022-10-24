/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createQuest = /* GraphQL */ `
  mutation CreateQuest(
    $input: CreateQuestInput!
    $condition: ModelQuestConditionInput
  ) {
    createQuest(input: $input, condition: $condition) {
      id
      email
      lang
      textOrg
      audioUrlOrg
      textSt
      audioUrlSt
      mark
      answer
      schedOn
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateQuest = /* GraphQL */ `
  mutation UpdateQuest(
    $input: UpdateQuestInput!
    $condition: ModelQuestConditionInput
  ) {
    updateQuest(input: $input, condition: $condition) {
      id
      email
      lang
      textOrg
      audioUrlOrg
      textSt
      audioUrlSt
      mark
      answer
      schedOn
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteQuest = /* GraphQL */ `
  mutation DeleteQuest(
    $input: DeleteQuestInput!
    $condition: ModelQuestConditionInput
  ) {
    deleteQuest(input: $input, condition: $condition) {
      id
      email
      lang
      textOrg
      audioUrlOrg
      textSt
      audioUrlSt
      mark
      answer
      schedOn
      createdAt
      updatedAt
      owner
    }
  }
`;
