import Logo from "../assets/logo-text.png";

const Nav = () => {
    return (
        <nav className="p-4 sticky top-0 bg-white shadow-md z-50">
            <div className="container mx-auto flex justify-between items-center">
                <img src={Logo} alt="Logo" />

                <ul className="flex gap-6 items-center">
                    <li className="text-pink-500">
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

                <div className="flex gap-4 items-center">
                    <button className="hover:text-pink-500 cursor-pointer">
                        Sign In
                    </button>

                    <button className="btn btn-active btn-secondary rounded-full">
                        Sign Up
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
