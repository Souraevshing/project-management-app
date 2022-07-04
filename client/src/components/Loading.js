import React from 'react'

const Loading = () => {
  return (
    <button
      class='btn btn-primary text-center'
      type='button'
      style={{ width: '100px', height: '100px' }}
      disabled
    >
      <span
        class='spinner-border spinner-border-sm text-center'
        role='status'
        aria-hidden='true'
        style={{ width: '40px', height: '40px' }}
      ></span>
    </button>
  )
}

export default Loading
