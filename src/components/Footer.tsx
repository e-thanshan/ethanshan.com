export const Footer = () => {
    return (
        <div className="bg-[url('dark_monstera.jpg')] bg-cover pt-28">
            <div className="bg-papaya_whip-600 max-w-5xl mx-auto p-6 pb-0 font-sans shadow-lg rounded-t-md">
                <div className="border-4 border-b-0 border-tea_green-300 h-full p-2 pb-0">
                    <div className="border-2 border-b-0 border-tea_green-300 h-full p-6">
                        <div className="flex pb-16 justify-between items-center">
                            <div>
                                <h1 className="text-3xl font-bold pb-10">
                                    Ethan Shan
                                </h1>
                                <p className="tracking-wider">
                                    +1 (347) 696-5114
                                </p>
                                <a className="tracking-wider hover-underline-animation left" href="mailto:ethanshan706@gmail.com">
                                    ethanshan706@gmail.com
                                </a>
                            </div>
                            <div className="flex flex-col gap-1 items-end">
                                <a
                                    href="https://www.instagram.com/e.thanshan/"
                                    target="_blank"
                                    className="hover-underline-animation left w-fit"
                                >
                                    Instagram
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/ethanshan/"
                                    target="_blank"
                                    className="hover-underline-animation left w-fit"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/e-thanshan"
                                    target="_blank"
                                    className="hover-underline-animation left w-fit"
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>

                        <div className="border-b-2 border-buff relative mb-2">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-papaya_whip px-2 text-sm">
                                © 2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
