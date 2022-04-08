import { gql } from '@apollo/client';

export const SIGNUP = gql`
  mutation Signup($user: UserInput!) {
    user: signup(user: $user) {
      id
      email
      firstName
      lastName
    }
  }
`;

export const LOGIN = gql`
  mutation Signin($user: UserSignin!) {
    user: signin(user: $user) {
      token
    }
  }
`;

export const SEND_MESSAGE = gql`
mutation Mutation($receiverId: Int!, $text: String!) {
  message:createMessage(receiverId: $receiverId, text: $text) {
    id
    text
    senderId
    createdAt
    receiverId
  }
}
`
