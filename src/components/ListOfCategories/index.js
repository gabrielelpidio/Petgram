import React, { useState, useEffect } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { Loader } from '../Loader'
import { useSpring } from 'react-spring'

const useCategoriesData = () => {
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-gabrielelpidio.gabrielelpidio.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, [])
  return { categories, loading }
}

export const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData()
  const [showFixed, setShowFixed] = useState(false)
  const bounceIn = useSpring({
    top: showFixed ? '-10px' : '-100px',
    config: {
      friction: 18
    }
  })

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => {
      document.removeEventListener('scroll', onScroll)
    }
  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed && 1} style={fixed && bounceIn}>
      {
        loading
          ? <Item><Loader size={50} /></Item>
          : categories.map(category =>
            <Item key={category.id}>
              <Category {...category} path={`/pet/${category.id}`} />
            </Item>
          )
      }
    </List>
  )

  return (
    <React.Fragment>
      {renderList()}
      {renderList(true)}
    </React.Fragment>
  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent)
