import Link from 'next/link'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs'

const Header = () => {
  const [theme, setTheme] = React.useState<string>('light')

  return (
    <header className="py-6 flex justify-between">
      <Link href="..">
        <h1 className="text-2xl md:text-4xl font-bold">restoreportraits.com</h1>
      </Link>
      <div className="flex flex-row gap-8">
        <a
          href="https://github.com/bgwebagency/restoreportraits"
          target="_blank"
          rel="noreferrer"
          className="hover:opacity-50 transition duration-150"
          aria-label="Github"
        >
          <AiFillGithub size={32} />
        </a>
        <div className="w-[2.5em] hover:cursor-pointer">
          {theme === 'light' ? (
            <BsMoonStarsFill
              size={26}
              className="mt-1"
              aria-label="Moon"
              onClick={() => {
                setTheme('dark')
                document.body.classList.toggle('dark')
              }}
            />
          ) : (
            <BsSunFill
              size={32}
              aria-label="Sun"
              onClick={() => {
                setTheme('light')
                document.body.classList.toggle('dark')
              }}
            />
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
