import Link from "next/link"
import Image from "next/image"

export default function Header() {
return (
    <header className="w-full py-4 px-6 flex items-center justify-between top-0 z-50 absolute bg-transparent">
        {/* Logo */}
        <div className="flex-shrink-0">
        <Link href="/">
        <div className="flex items-center gap-2">
          <Image src="/images/lok-me-ram-logo.png" alt="लोगो" width={40} height={40} className="h-10 w-auto" />
          <span className="text-lg font-bold text-black">लोक में राम</span>
        </div>
        </Link>
        </div>
        

        {/* Right Side Navigation */}
        <div className="flex items-center gap-6">
        <div className="flex items-center">
            <span className="font-bold text-2xl text-white font-newsreader">BECOME A YOUNICORN</span>
        </div>

        <Link href="/contact">
            <div className="relative group">
            <div className="absolute inset-0 bg-black rounded-full translate-x-1 translate-y-1"></div>
            <button className="relative bg-white border-2 border-black rounded-full px-6 py-2 font-bold transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5">
                GET IN TOUCH
            </button>
            </div>
        </Link>
        </div>
    </header>
    )
}
