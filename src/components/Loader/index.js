import React from 'react'
import { Circle, Svg } from './styles'

export const Loader = ({ size = 100, color = '#2f3d4c', className = '' }) => {
  return (
    <div className={className}>
      <Svg width={size} height={size} viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'>
        <Circle cx='50' cy='50' r={45} color={color} />
      </Svg>
    </div>
  )
}
