import Link from "next/link"

export default function Header() {
return (
    <header className="w-full py-4 px-6 flex items-center fixed justify-between top-[1%] z-50 bg-white bg-opacity-100 backdrop-blur-md rounded-full">
        {/* Logo */}
        <div className="flex-shrink-0">
        <Link href="/">
            <span
            className="text-3xl font-extrabold tracking-normal"
            style={{
                color: "#FF8C5A",
                textShadow: "2px 2px 0 #000",
                fontFamily: "Rampart One, cursive",
            }}
            >
            YOUNICORN
            </span>
        </Link>
        </div>
        

        {/* Right Side Navigation */}
        <div className="flex items-center gap-6">
        <div className="flex items-center">
            <span className="font-bold text-2xl/snug text-black font-newsreader">BECOME A YOUNICORN</span>
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
