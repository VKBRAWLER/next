import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Header = () => {
  return (
    <>
    <div>
      <ul>
        <li><Link href='/'>
          Home
        </Link></li>
        <li>About US</li>
      </ul>
      <Image src='/public/img/logo.svg' width={200} height={200}/>
    </div>
    </>
  )
}

export default Header