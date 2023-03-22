import Link from 'next/link'
import logoImg from '@/assets/imgs/logo.png';

export default function AppHeader() {
  return (
    <div className="flex shadow items-center justify-between h-[64px] px-[24px]">
      {/* left nav */}
      <div className="flex items-center">
        <Link className="mr-5" rel="stylesheet" href="/">
          <img className="w-[60px]" src={logoImg.src}></img>
        </Link>
        <Link className="mr-2 hover:underline" href="/profile">Profile</Link>
        <Link className="mr-2 hover:underline" href="/claim">Claim</Link>
        <Link className="hover:underline" href="/transfers">Transfers</Link>
      </div>

      <div>
        icons
      </div>
    </div>
  )
}