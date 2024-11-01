import Link from "next/link";

const navItems = {
    "/projects":{name:"Projects"},
    "/photos":{name:"Photos"}
};

export function Navbar(){
    return (
        <nav className="lg:mb-16 mb-12 py-5">
            <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center">
                    <Link href="/" className="text-3xl font-semibold tracking-tighter">My Portfolio</Link>
                </div>
                <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
                    {Object.entries(navItems).map(([path,{name}]) =>(
                        <Link
                            key={path}
                            href={path}
                            className="transition-all hover:text-neutral-400 dark:hover:text-neutral-400 flex align-middle relative"
                        >
                            {name}
                        </Link> 
                    ))}
                </div>
            </div>
        </nav>
    )
}