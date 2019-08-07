import React, { useState } from 'react'
import { Nav, Link } from './styles'
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'
import { useSpring } from 'react-spring'

const SIZE = '32px'

const AnimatedLink = ({ activeStyle, inactiveStyle, ...props }) => {
  const [current, toggle] = useState(false)
  const animation = useSpring({
    to: current ? activeStyle : inactiveStyle
  })
  return (
    <Link
      getProps={({ isCurrent }) => { toggle(isCurrent) }}
      {...props}
      style={animation}
    />
  )
}

const animatedLinkProps = {
  activeStyle: {
    color: '#000'
  },
  inactiveStyle: {
    color: '#888'
  }
}

// const AnimatedLink = OnCurrentAnimatedLink({ animatedLinkProps })

export const NavBar = () => {
  return (
    <Nav>
      <AnimatedLink {...animatedLinkProps} to='/'>
        <MdHome size={SIZE} />
      </AnimatedLink >
      <AnimatedLink {...animatedLinkProps} to='/favs'>
        <MdFavoriteBorder size={SIZE} />
      </AnimatedLink>
      <AnimatedLink {...animatedLinkProps} to='/user'>
        <MdPersonOutline size={SIZE} />
      </AnimatedLink>
    </Nav>
  )
}
