import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCard } from '../container/ListOfPhotoCards'

const HomePage = ({ id }) => {
  return (
    <Fragment>
      <Helmet>
        <title>
          Petgram - tu app de fotos de mascotas
        </title>
        <meta name='description' content='Con Petgram
        puedes encontrar fotos de animales domésticos
        muy bonitos' />
      </Helmet>
      <ListOfCategories />
      <ListOfPhotoCard categoryId={id} />
    </Fragment>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => prevProps.id === props.id)
