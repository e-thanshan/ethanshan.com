import { forwardRef, ForwardedRef, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP)

export const Featured = forwardRef(
    (props, ref: ForwardedRef<HTMLDivElement>) => {
        const wrapper = useRef<HTMLDivElement>(null)

        useGSAP(() => {
            const textComponents = document.querySelectorAll(
                '.featuredText > div'
            )
            textComponents.forEach((textComponent, index) => {
                gsap.from(textComponent, {
                    scrollTrigger: {
                        trigger: wrapper.current,
                        start: 'top 70%',
                        end: 'bottom 20%',
                        toggleActions: 'play none none none',
                    },
                    y: -70,
                    opacity: 0,
                    duration: 0.2,
                    delay: index * 0.05,
                })
            })

            const panelComponents = document.querySelectorAll('.panel')
            let currentPanel = panelComponents[0]
            gsap.set(currentPanel, { autoAlpha: 1 })

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: wrapper.current,
                    start: 'top top',
                    end: '+=' + 75 * panelComponents.length + '%',
                    pin: true,
                    scrub: 1,
                },
            })

            panelComponents.forEach((panel, index) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: (self) =>
                        index === 0
                            ? 'top top'
                            : self.previous()?.end || 'top top',
                    end: '+=' + 75 + '%',
                    scrub: 1,
                    onToggle: (self) => {
                        self.isActive && setPanel(panel)
                    },
                })
            })

            const setPanel = (newPanel: Element) => {
                if (newPanel === currentPanel) return
                gsap.to(currentPanel, { autoAlpha: 0 })
                gsap.to(newPanel, { autoAlpha: 1 })

                const imgs = newPanel.querySelectorAll('.featuredImg')
                imgs.forEach((img) => {
                    gsap.from(img, {
                        y: 70,
                        opacity: 0,
                        duration: 0.8,
                        delay: Math.random() * 0.5 + 0.1,
                    })
                })

                currentPanel = newPanel
            }
        }, [])

        return (
            <div ref={ref} className="relative bg-cornsilk-800 overflow-hidden">
                <div
                    ref={wrapper}
                    className="flex flex-col box-border py-20 h-screen"
                >
                    <div
                        aria-label="Featured text"
                        className="flex justify-center text-5xl font-bold font-pearl featuredText"
                    >
                        <div>F</div>
                        <div>e</div>
                        <div>a</div>
                        <div>t</div>
                        <div>u</div>
                        <div>r</div>
                        <div>e</div>
                        <div>d</div>
                    </div>

                    <div className="featuredWorks flex flex-col h-full">
                        <div className="panel py-10 w-full absolute flex h-full opacity-0">
                            <div className="relative h-full w-full">
                                <div className="panelText absolute top-10 left-1/2 -translate-x-1/2 text-7xl font-bold text-gray-400 font-serif">
                                    Lorem Ipsum
                                </div>
                                <img
                                    className="absolute top-0 left-5 w-1/6 featuredImg"
                                    src="https://images.unsplash.com/photo-1728634007128-b02aeee08252?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                                <img
                                    className="absolute top-1/6 left-1/2 -translate-x-1/2 w-1/2 featuredImg"
                                    src="https://images.unsplash.com/photo-1728104665223-28915cd89aa3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                                <img
                                    className="absolute bottom-1/4 right-5 w-1/5 featuredImg"
                                    src="https://images.unsplash.com/photo-1728144691773-544f5c5577f6?q=80&w=2236&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="panel py-10 w-full absolute flex h-full opacity-0">
                            <div className="relative h-full w-full">
                                <div className="panelText absolute top-10 left-1/2 -translate-x-1/2 text-7xl font-bold text-gray-400 font-serif">
                                    Dolor sit amet
                                </div>
                                <img
                                    className="absolute top-1/5 left-10 w-1/6 featuredImg"
                                    src="https://images.unsplash.com/photo-1728634007128-b02aeee08252?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                                <img
                                    className="absolute top-1/6 left-1/2 -translate-x-1/2 w-1/2 featuredImg"
                                    src="https://images.unsplash.com/photo-1728104665223-28915cd89aa3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                                <img
                                    className="absolute bottom-1/2 right-10 w-1/5 featuredImg"
                                    src="https://images.unsplash.com/photo-1728144691773-544f5c5577f6?q=80&w=2236&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="panel py-10 w-full absolute flex h-full opacity-0">
                            <div className="relative h-full w-full">
                                <div className="panelText absolute top-10 left-1/2 -translate-x-1/2 text-7xl font-bold text-gray-400 font-serif">
                                    Consectetur adipiscing elit
                                </div>
                                <img
                                    className="absolute top-1/3 left-8 w-1/6 featuredImg"
                                    src="https://images.unsplash.com/photo-1728634007128-b02aeee08252?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                                <img
                                    className="absolute top-1/6 left-1/2 -translate-x-1/2 w-1/2 featuredImg"
                                    src="https://images.unsplash.com/photo-1728104665223-28915cd89aa3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                                <img
                                    className="absolute top-1/5 right-8 w-1/5 featuredImg"
                                    src="https://images.unsplash.com/photo-1728144691773-544f5c5577f6?q=80&w=2236&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="panel py-10 w-full absolute flex h-full opacity-0">
                            <div className="relative h-full w-full">
                                <div className="panelText absolute top-10 left-1/2 -translate-x-1/2 text-7xl font-bold text-gray-400 font-serif">
                                    Sed do eiusmod
                                </div>
                                <img
                                    className="absolute top-0 left-5 w-1/6 featuredImg"
                                    src="https://images.unsplash.com/photo-1728634007128-b02aeee08252?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                                <img
                                    className="absolute top-1/6 left-1/2 -translate-x-1/2 w-1/2 featuredImg"
                                    src="https://images.unsplash.com/photo-1728104665223-28915cd89aa3?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                                <img
                                    className="absolute bottom-1/4 right-5 w-1/5 featuredImg"
                                    src="https://images.unsplash.com/photo-1728144691773-544f5c5577f6?q=80&w=2236&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
)
