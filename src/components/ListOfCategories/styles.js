import styled, { css } from 'styled-components'
import { a } from 'react-spring'

export const List = styled(a.ul)`
  display: flex;
  overflow: scroll;
  width: 100%;
  ${({ fixed }) => fixed && css`
    {
    background: #fff;
    border-radius: 60px;
    box-shadow: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    max-width: 400px;
    left: 0;
    margin: 0 auto;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -10px;
    transform: scale(.5);
    z-index: 1;
    }
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
