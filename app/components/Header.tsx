import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiFillGithub } from 'react-icons/ai'

const Header = () => {
  return (
    <header className="py-6 flex justify-between">
      <Link href="..">
        <h1 className="text-2xl md:text-4xl font-bold">restoreportraits.com</h1>
      </Link>
      <div>
        <a
          href="https://github.com/bgwebagency/restoreportraits"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={40} />
        </a>
      </div>
    </header>
  )
}

export default Header
