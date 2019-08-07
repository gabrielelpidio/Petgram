import React from 'react'
import { PhotoCard } from '../components/PhotoCard'

import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { Loader } from '../components/Loader'

const GET_SINGLE_PHOTO = gql`
query getSinglePhoto($id:ID!) {
  photo(id:$id) {
    id
    categoryId
    src
    likes
    userId
    liked
  }
}
`

export const PhotoCardWithQuery = ({ id }) => {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {
        ({ loading, error, data }) => {
          if (loading) { return <div><Loader /></div> }
          if (error) { return <p>I have failed you 😢 </p> }
          const { photo = {} } = data
          return <PhotoCard {...photo} />
        }
      }
    </Query>
  )
}
