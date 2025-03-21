import Link from "next/link"

export default function Header() {
return (
    <header className="w-full py-4 px-6 flex items-center justify-between fixed top-0 z-50 backdrop-blur-md bg-transparent">
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
        

        {/* Right Side Navigation */}
        <div className="flex items-center gap-6">
        <div className="flex items-center">
            <span className="font-bold text-sm">JOIN AS A TALENT</span>
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
