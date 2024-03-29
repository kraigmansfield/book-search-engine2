import {gql} from "@apollo/client";

export const LOGIN_USER = gql`
    mutation loginUser($email: String!, $password:String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password:String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: BookInput) {
        saveBook(input: $input) {
            _id
            username
            bookCount
            savedBooks {
                bookId
                authors
                image
                link
                title
                description
            }

        }
    }
`;

export const REMOVE_BOOK = gql`
  mutation saveBook($input: BookInput) {
        saveBook(input: $input) {
            _id
            username
            bookCount
            savedBooks {
                bookId
                authors
                image
                link
                title
                description
            }

        }
    }
`;
