import styled from 'styled-components'
import { a } from 'react-spring'

export const Card = styled.article`
box-shadow: 0 10px 14px rgba(0,0,0,.2);
  background: #fcfcfc;
  border-radius: 10px;
  overflow: hidden;
  margin: 10px 0 10px 0;
  min-height: 200px;
`

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = a(styled.img`
  overflow: hidden;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
  `
)
