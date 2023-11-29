import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='flex flex-row'>
        <Link to='/search'><Button name='Search'/></Link>
        {/* <Button name='Search'/> */}
        <Button name='Form'/>
        <Button name='Filters'/>
        <Button name='Product Image'/>
    </div>
  )
}

export default SideBar