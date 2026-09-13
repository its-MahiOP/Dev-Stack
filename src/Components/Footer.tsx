import Logo from "../assets/logo-text.png";

const Footer = () => {
    return (
        <footer className="bg-white pt-16 pb-12 border-t border-slate-100">
            <div className="container mx-auto px-4">
                {/* Main Content Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-16">
                    {/* Left Brand Area (Spans 5 Columns) */}
                    <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <a href="#home">
                            <img
                                src={Logo}
                                alt="Dev Stack"
                                className="h-8 w-auto mb-4"
                            />
                        </a>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-sm">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-6 text-sm font-semibold text-slate-800">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-pink-500 transition-colors"
                            >
                                GitHub
                            </a>
                            <span className="lg:hidden text-slate-300">•</span>
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-pink-500 transition-colors"
                            >
                                Twitter
                            </a>
                            <span className="lg:hidden text-slate-300">•</span>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-pink-500 transition-colors"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Right Navigation Area (Spans 7 Columns with 3 evenly spaced grids) */}
                    <div className="hidden lg:grid lg:col-span-7 grid-cols-3 gap-8 pl-8">
                        {/* Product Column */}
                        <div className="flex flex-col gap-3">
                            <h4 className="font-bold text-slate-900 tracking-wider text-xs uppercase mb-1">
                                PRODUCT
                            </h4>
                            <a
                                href="#home"
                                className="text-slate-500 text-sm hover:text-pink-500 transition-colors"
                            >
                                Home
                            </a>
                            <a
                                href="#technologies"
                                className="text-slate-500 text-sm hover:text-pink-500 transition-colors"
                            >
                                Technologies
                            </a>
                            <a
                                href="#projects"
                                className="text-slate-500 text-sm hover:text-pink-500 transition-colors"
                            >
                                Projects
                            </a>
                        </div>

                        {/* Company Column */}
                        <div className="flex flex-col gap-3">
                            <h4 className="font-bold text-slate-900 tracking-wider text-xs uppercase mb-1">
                                COMPANY
                            </h4>
                            <a
                                href="#about"
                                className="text-slate-500 text-sm hover:text-pink-500 transition-colors"
                            >
                                About
                            </a>
                            <a
                                href="#contact"
                                className="text-slate-500 text-sm hover:text-pink-500 transition-colors"
                            >
                                Contact
                            </a>
                            <a
                                href="#careers"
                                className="text-slate-500 text-sm hover:text-pink-500 transition-colors"
                            >
                                Careers
                            </a>
                        </div>

                        {/* Legal Column */}
                        <div className="flex flex-col gap-3">
                            <h4 className="font-bold text-slate-900 tracking-wider text-xs uppercase mb-1">
                                LEGAL
                            </h4>
                            <a
                                href="#privacy"
                                className="text-slate-500 text-sm hover:text-pink-500 transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#terms"
                                className="text-slate-500 text-sm hover:text-pink-500 transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Divider */}
                <div className="pt-8 border-t border-slate-100 flex flex-row justify-between items-center text-xs text-slate-400">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a
                            href="#privacy"
                            className="hover:text-slate-600 transition-colors"
                        >
                            Privacy
                        </a>
                        <a
                            href="#terms"
                            className="hover:text-slate-600 transition-colors"
                        >
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
