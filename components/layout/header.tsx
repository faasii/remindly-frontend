import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className="bg-neutral-900 py-5">

            <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-5xl before:mx-2 lg:before:mx-auto before:rounded-full before:bg-neutral-800/30 before:backdrop-blur-md">
                <nav className="relative max-w-5xl w-full py-2.5 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Link className="flex-none text-white rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80" href="/" aria-label="Remindly">
                                Remindly
                            </Link>
                        </div>
                    </div>

                    <div className="hs-collapse py-4 hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-y-3 py-5 md:py-0 md:ps-7">
                            <div>
                                <Link href={`/dashboard`} className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-lg focus:outline-hidden">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header