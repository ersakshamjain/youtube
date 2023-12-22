import React from 'react'

const Button = ({name}) => {
  return (
    <div className='ml-2 mt-2'>
        <button className='px-5 py-2 m-2 bg-gray-200 rounded-lg'>{name}</button>
    </div>
  )
}

export default Button;