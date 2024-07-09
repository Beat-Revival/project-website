import MainNav from './MainNav';
//import MobileNav from './MobileNav'

export default function SiteHeader() {
    return (
        <header className="w-full border-b">
            <div className="flex h-14 items-center px-4 bg-white/40">
                <MainNav/>
            </div>
        </header>
    )
}