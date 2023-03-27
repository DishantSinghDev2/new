import Link from 'next/link'
import logoImg from '@/assets/imgs/logo.png';
import {useEffect, useState} from "react";

type TTheme = 'dark' | 'light';

export default function AppHeader() {
    const [theme, setTheme] = useState<TTheme>('light');

    const changeTheme = () => {
        const currentTheme = theme === 'dark' ? 'light' : 'dark';
        localStorage.theme = currentTheme;
        setTheme(currentTheme);
        currentTheme === 'dark' ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark')
    }

    useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme('dark')
        document.documentElement.classList.add('dark')
    } else {
        setTheme('light')
        document.documentElement.classList.remove('dark')
    }

}, [])
  return (
    <div className="flex shadow items-center justify-between h-[64px] px-[24px]">
      {/* left nav */}
      <div className="flex items-center">
        <Link className="mr-5" rel="stylesheet" href="/">
          <img className="w-[60px]" src={logoImg.src} alt="ethora logotype"></img>
        </Link>
        <Link className="mr-2 hover:underline" href="/profile">Profile</Link>
        <Link className="mr-2 hover:underline" href="/claim">Claim</Link>
        <Link className="mr-2 hover:underline" href="/nft">Deploy NFT</Link>
        <Link className="hover:underline" href="/transfers">Transfers</Link>
      </div>

      <div className={"flex gap-4"}>
          <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" onClick={() => changeTheme()} defaultChecked={theme === 'dark'} />
                  <div
                      className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Dark mode</span>
          </label>
          <div>
              icons
          </div>
      </div>
    </div>
  )
}