import React, { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`flex w-full items-center bg-background`}>
            <div className="container">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4  text-xl font-bold pt-6  md:pt-0">
                            Gulraiz's<span className='text-primary '> Portfolio
                    </span>
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button
                                onClick={() => setOpen(!open)}
                                id="navbarToggler"
                                className={` ${
                                    open && "navbarTogglerActive"
                                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                            >
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-foreground"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-foreground"></span>
                                <span className="relative my-[6px] block h-[2px] w-[30px] bg-foreground"></span>
                            </button>
                            <nav
                                // :className="!navbarOpen && 'hidden' "
                                id="navbarCollapse"
                                className={`z-50 absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-background px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                                    !open && "hidden"
                                } `}
                            >
                                <ul onClick={() => setOpen(!open)}
                                    className="block lg:flex">
                                    <ListItem NavLink="/#Home">Home</ListItem>
                                    <ListItem NavLink="/#About">About</ListItem>
                                    <ListItem NavLink="/#Skills">Skills</ListItem>
                                    <ListItem NavLink="/#Projects">Projects</ListItem>
                                    <ListItem NavLink="/#Contact">Contact</ListItem>
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            {/*
                            <a
                                href="/#"
                                className="px-7 py-3 text-base font-medium text-dark hover:text-primary text-foreground"
                            >
                                Sign in
                            </a>

                            <a
                                href="/#"
                                className="rounded-md bg-primary px-7 py-3 text-base font-medium text-white hover:bg-primary/90"
                            >
                                Sign Up
                            </a>
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

const ListItem = ({ children, NavLink }) => {
    return (
        <>
            <li>
                <a
                    href={NavLink}
                    className="flex py-2 text-base font-medium text-body-color hover:text-dark dark:text-dark-6 dark:hover:text-primary lg:ml-12 lg:inline-flex"
                >
                    {children}
                </a>
            </li>
        </>
    );
};
