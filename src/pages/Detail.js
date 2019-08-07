import React from 'react'
import { PhotoCardWithQuery } from '../container/PhotoCardWithQuery'
import { Layout } from '../components/Layout/index'

export const Detail = ({ detailId }) => {
  return (
    <Layout title={`Photo ${detailId}`} subtitle={`Detail of photo ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}
