import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query Users {
    users {
      id
      email
      lastName
      firstName
      password
    }
  }
`;

export const GET_MESSAGES = gql`
  query GetMessages($id: Int!) {
    messages: getMessages(id: $id) {
      id
      text
      receiverId
      senderId
      createdAt
    }
  }
`;
