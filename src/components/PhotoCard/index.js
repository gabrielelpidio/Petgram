import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { ImgWrapper, Img, Card } from './styles'

import { useFadeIn } from '../../styles/animation'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation'
import { Link } from '@reach/router'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()

  const { interpolateFade } = useFadeIn(show, 'slow')

  return (
    <Card ref={ref}>
      {
        show &&
        <Fragment>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              {interpolateFade.map(({ item, key, props }) => {
                const { interpolateFilter, ...restProps } = props
                return item && (
                  <Img
                    src={src}
                    alt=''
                    style={
                      {
                        filter: interpolateFilter.interpolate(i => `blur(${i.toFixed(2)}px)`),
                        ...restProps
                      }
                    }
                    key={key}
                  />
                )
              }
              )}
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  toggleLike({ variables: {
                    input: { id }
                  } })
                }
                return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
              }
            }

          </ToggleLikeMutation>
        </Fragment>
      }
    </Card>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: (props, propName, componentName) => {
    const propValue = props[propName]
    if (propValue === undefined) {
      return new Error(`Error at ${componentName}, ${propName} must be defined`)
    }

    if (propValue < 0) {
      return new Error(`Error at ${componentName}, ${propName} must be a positive value`)
    }
  }
}
