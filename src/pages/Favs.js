import React, { Fragment } from 'react'
import { FavsWithQuery } from '../container/GetFavorites'
import { Helmet } from 'react-helmet'

export default () => {
  return (
    <Fragment>
      <Helmet>
        <title>
            Petgram - Favoritos
        </title>
        <meta name='description' content='Aquí se encuentran tus fotos favoritas' />
      </Helmet>
      <FavsWithQuery />
    </Fragment>
  )
}
