import { useRef, useState } from 'react'
import { Splash } from './components/Splash'
import { Featured } from './components/Featured'
import { Menu } from './components/Menu'
import { Footer } from './components/Footer'

function App() {
    const featuredRef = useRef(null)

    const navToFeatured = () =>
        featuredRef.current?.scrollIntoView({ behavior: 'smooth' })

    return (
        <div className="relative">
            <div className="grain"></div>
            <Menu />
            <Splash navToFeatured={navToFeatured} />
            <Featured ref={featuredRef} />
            <Footer />
        </div>
    )
}

export default App
