/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getQuest = /* GraphQL */ `
  query GetQuest($id: ID!) {
    getQuest(id: $id) {
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
export const listQuests = /* GraphQL */ `
  query ListQuests(
    $filter: ModelQuestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
