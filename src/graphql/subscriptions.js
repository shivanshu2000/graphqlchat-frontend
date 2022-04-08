import { gql } from '@apollo/client';

export const SUB_MESSAGE = gql`
  subscription Subscription {
    message {
      id
      text
      receiverId
      senderId
      createdAt
    }
  }
`;
