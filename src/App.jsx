import { useRef, useState } from 'react'
import { Splash } from './components/Splash'
import { Featured } from './components/Featured'
import { Menu } from './components/Menu'

function App() {
    const featuredRef = useRef(null);

    const navToFeatured = () => featuredRef.current?.scrollIntoView({behavior: 'smooth'});

    return (
        <div className='relative'>
            <Menu />
            <Splash navToFeatured={navToFeatured} />
            <Featured ref={featuredRef} />
        </div>
    )
}

export default App
