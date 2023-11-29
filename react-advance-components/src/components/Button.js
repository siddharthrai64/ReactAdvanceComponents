import React from 'react';

const Button = ({name}) => {
  return (
    <div>
        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow m-4'>{name}</button>
    </div>
  )
}

export default Button;