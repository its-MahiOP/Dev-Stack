import Logo from "../assets/logo-text.png";

const nav = () => {
    return (
        <nav className="p-4">
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

                <ul className="flex gap-4 items-center">
                    <li>
                        <a href="#signin">Sign In</a>
                    </li>
                    <li>
                        <button className="btn btn-active btn-secondary rounded-4xl">
                            Sign Up
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default nav;
