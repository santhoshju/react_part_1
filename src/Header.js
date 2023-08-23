import React from 'react'

const Header = () => {

    const year = new Date();
  return (
    <div>Header{year.getFullYear()} </div>
  )
}

export default Header