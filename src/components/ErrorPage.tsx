import React from 'react'

const ErrorPage: React.FC = () => {
  return (
    <div className='ErrorPage'>
      <div className='error-page-text'>
        <h2>Oops!</h2>
        <p>Something went wrong and we couldn't process your request.</p>
      </div>
    </div>
  )
}

export default ErrorPage;
