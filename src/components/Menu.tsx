import { useState } from 'react'
import '../index.css'

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div
            className={`fixed z-30 h-screen w-full ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
            <div
                className="absolute top-8 right-8 z-30 h-8 w-8 cursor-pointer pointer-events-auto"
                onClick={() => setIsOpen(!isOpen)}
            >
                <div
                    className={`bg-buff rounded-full absolute transition-all rotate-45 ${isOpen ? 'w-[22px] h-[4px] top-[7px] -left-0.5' : 'w-[5px] h-[5px] top-0 left-0'}`}
                />
                <div
                    className={`bg-buff rounded-full absolute transition-all -rotate-45 ${isOpen ? 'w-[22px] h-[4px] top-[7px] -right-0.5' : 'w-[5px] h-[5px] top-0 right-0'}`}
                />
                <div
                    className={`bg-buff rounded-full absolute transition-all -rotate-45 ${isOpen ? 'w-[22px] h-[4px] bottom-1.5 -left-0.5' : 'w-[5px] bottom-0 h-[5px] left-0'}`}
                />
                <div
                    className={`bg-buff rounded-full absolute transition-all rotate-45 ${isOpen ? 'w-[22px] h-[4px] bottom-1.5 -right-0.5' : 'w-[5px] h-[5px] bottom-0 right-0'}`}
                />
            </div>

            <div
                className={`transition-all z-20 h-screen w-full bg-papaya_whip ${
                    isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
            >
                <div className="flex flex-col gap-3 items-center justify-center h-full">
                    <div className="relative inline-block linkWrapper w-30 overflow-hidden pl-2">
                        <svg
                            className="absolute top-1/3 -left-1 w-40"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 38"
                        >
                            <path
                                className="hoverStroke"
                                stroke="#9f86c0"
                                stroke-miterlimit="10"
                                stroke-width="40"
                                fill="none"
                                d="M 0 19 H 310"
                            />
                        </svg>
                        <a
                            href="/"
                            className="text-4xl font-bold text-center z-30 relative"
                        >
                            Home
                        </a>
                    </div>
                    <div className="relative inline-block linkWrapper w-30 overflow-hidden pl-2">
                        <svg
                            className="absolute top-1/3 -left-1 w-40"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 38"
                        >
                            <path
                                className="hoverStroke"
                                stroke="#E4572E"
                                stroke-miterlimit="10"
                                stroke-width="40"
                                fill="none"
                                d="M 0 19 H 310"
                            />
                        </svg>
                        <a
                            href="/about"
                            className="text-4xl font-bold text-center z-30 relative"
                        >
                            About
                        </a>
                    </div>
                    <div className="relative inline-block linkWrapper">
                        <svg
                            className="absolute top-1/3 -left-1 w-40"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 38"
                        >
                            <path
                                className="hoverStroke"
                                stroke="#17BEBB"
                                stroke-miterlimit="10"
                                stroke-width="40"
                                fill="none"
                                d="M 0 19 H 310"
                            />
                        </svg>
                        <a
                            href="/projects"
                            className="text-4xl font-bold text-center z-30 relative"
                        >
                            Projects
                        </a>
                    </div>
                    <div className="relative inline-block linkWrapper">
                        <svg
                            className="absolute top-1/3 -left-1 w-40"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 320 38"
                        >
                            <path
                                className="hoverStroke"
                                stroke="#FFC914"
                                stroke-miterlimit="10"
                                stroke-width="40"
                                fill="none"
                                d="M 0 19 H 310"
                            />
                        </svg>
                        <a
                            href="/contact"
                            className="text-4xl font-bold text-center z-30 relative"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
