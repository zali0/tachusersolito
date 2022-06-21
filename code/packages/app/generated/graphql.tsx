import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  image: Scalars['String'];
  name: Scalars['String'];
  subCategory: Array<Subcategory>;
  type: Scalars['String'];
};

export type Location = {
  accuracy: Scalars['Float'];
  altitude: Scalars['Float'];
  altitudeAccuracy: Scalars['Float'];
  heading: Scalars['Float'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  mocked: Scalars['Boolean'];
  speed: Scalars['Float'];
  timestamp: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addCategory?: Maybe<Category>;
  addProduct?: Maybe<Product>;
  addStore?: Maybe<Store>;
  loginUser?: Maybe<User>;
};


export type MutationAddStoreArgs = {
  phoneNumber: Scalars['String'];
};


export type MutationLoginUserArgs = {
  phoneNumber: Scalars['String'];
};

export type Product = {
  __typename?: 'Product';
  department: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['Int'];
  image: Scalars['String'];
  manufacturer: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  quantity: Scalars['Float'];
  quantityUnit: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getCategories?: Maybe<Array<Category>>;
  getStores?: Maybe<Array<Store>>;
  getSubCategory?: Maybe<Array<Category>>;
  ping: Scalars['String'];
  productsAroundMe: Array<Product>;
  sayHello: Scalars['String'];
};


export type QueryProductsAroundMeArgs = {
  location: Location;
};

export type Store = {
  __typename?: 'Store';
  id: Scalars['Int'];
  name: Scalars['String'];
  phoneNumber: Scalars['String'];
  products: Array<Product>;
};

export type Subcategory = {
  __typename?: 'Subcategory';
  image: Scalars['String'];
  name: Scalars['String'];
  noOfProducts: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  phoneNumber: Scalars['String'];
};

export type LoginUserMutationVariables = Exact<{
  phoneNumber: Scalars['String'];
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'User', id: number, name?: string | null, phoneNumber: string } | null };


export const LoginUserDocument = gql`
    mutation LoginUser($phoneNumber: String!) {
  loginUser(phoneNumber: $phoneNumber) {
    id
    name
    phoneNumber
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      phoneNumber: // value for 'phoneNumber'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;