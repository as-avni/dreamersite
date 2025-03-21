import Link from "next/link"

export default function Header() {
return (
<header className="w-full bg-gray-100 py-4 px-6 flex items-center justify-between">
    {/* Logo */}
    <div className="flex-shrink-0">
    <Link href="/">
        <span
        className="text-3xl font-extrabold tracking-tighter"
        style={{
            color: "#ff4500",
            textShadow: "2px 2px 0 #000",
            fontFamily: "Impact, sans-serif",
        }}
        >
        EYOOOOOB
        </span>
    </Link>
    </div>

    {/* Yellow Triangle */}
    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1">
    <div className="w-10 h-10 relative">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 0L40 40H0L20 0Z" fill="#FFD700" />
        </svg>
    </div>
    </div>

    {/* Right Side Navigation */}
    <div className="flex items-center gap-6">
    <div className="flex items-center">
        <span className="font-bold text-sm">JOIN AS A TALENT</span>
        <span className="ml-1 bg-pink-500 text-white text-xs px-1.5 py-0.5 rounded-sm font-bold">NEW</span>
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

