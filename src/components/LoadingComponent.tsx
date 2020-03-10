import React from 'react'

interface Props {
  message: string
}

const LoadingComponent: React.FC<Props> = ({message}) => {
  return (
    <div className='LoadingComponent'>
      <div className='spinner'></div>
      <div className='loading-message'>{message}</div>
    </div>
  )
}

export default LoadingComponent;
