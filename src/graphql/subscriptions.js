/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateQuest = /* GraphQL */ `
  subscription OnCreateQuest(
    $filter: ModelSubscriptionQuestFilterInput
    $owner: String
  ) {
    onCreateQuest(filter: $filter, owner: $owner) {
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
export const onUpdateQuest = /* GraphQL */ `
  subscription OnUpdateQuest(
    $filter: ModelSubscriptionQuestFilterInput
    $owner: String
  ) {
    onUpdateQuest(filter: $filter, owner: $owner) {
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
export const onDeleteQuest = /* GraphQL */ `
  subscription OnDeleteQuest(
    $filter: ModelSubscriptionQuestFilterInput
    $owner: String
  ) {
    onDeleteQuest(filter: $filter, owner: $owner) {
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
