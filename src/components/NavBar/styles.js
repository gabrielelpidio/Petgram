import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { animated } from 'react-spring'

export const Nav = styled.nav`
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: space-around;
  
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  width: 100%;
  height: 50px;
  max-width: 500px;
  margin: 0 auto;

  background: #fcfcfc;
  border-top: 1px solid #e0e0e0;
`

const AnimatedLink = animated(LinkRouter)
export const Link = styled(AnimatedLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 100%;
  
  color: #888;
  text-decoration: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color:  rgba(255, 255, 255, 0); 


  &[aria-current]{
    /* color: #000; */

    &:after{
      content: '·';
      color: #ff8c00;
      position: absolute;
      bottom: 0;
      font-size: 34px;
      line-height: 20px;
    }
  }
`
