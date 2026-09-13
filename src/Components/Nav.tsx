import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <nav className="p-4 sticky top-0 bg-white shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center">
                {/* LEFT SECTION (Mobile: Hamburger / Desktop: Logo) */}
                <div className="flex items-center lg:w-auto">
                    {/* Mobile: Hamburger Dropdown */}
                    <div className="dropdown lg:hidden">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </div>

                        {/* Mobile Menu Dropdown Content */}
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52 font-medium"
                        >
                            <li>
                                <a href="#home" className="text-brand-gradient">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#technologies">Technologies</a>
                            </li>
                            <li>
                                <a href="#projects">Projects</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Desktop Logo */}
                    <a href="#home" className="hidden lg:block">
                        <img
                            src={Logo}
                            alt="Dev Stack Logo"
                            className="h-8 w-auto"
                        />
                    </a>
                </div>

                {/* CENTER SECTION (Mobile: Logo / Desktop: Nav Links) */}
                <div className="flex justify-center">
                    {/* Mobile Center Logo */}
                    <a href="#home" className="lg:hidden">
                        <img
                            src={Logo}
                            alt="Dev Stack Logo"
                            className="h-8 w-auto"
                        />
                    </a>

                    {/* Desktop Center Links */}
                    <ul className="hidden lg:flex gap-6 items-center font-medium">
                        <li className="text-brand-gradient">
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#technologies">Technologies</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* RIGHT SECTION (Sign In / Sign Up) */}
                <div className="flex gap-2 sm:gap-4 items-center font-medium justify-end">
                    <button className="hover:text-pink-500 cursor-pointer text-sm sm:text-base">
                        Sign In
                    </button>

                    <button className="bg-brand-gradient btn btn-secondary rounded-full btn-sm sm:btn-md">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
