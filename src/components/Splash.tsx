import React from 'react'
import { FlapDisplay, Presets } from 'react-split-flap-effect'
import '../components/flaps.css'

interface SplashProps {
    navToFeatured: () => void;
}

export const Splash: React.FC<SplashProps> = ({ navToFeatured }) => {
    const wordList = ['Software Engineer', 'Student', 'Musician'];

    const [flapValue, setFlapValue] = React.useState(wordList[0]);
    let wordIndex = 1;

    React.useEffect(() => {
        const interval = setInterval(() => {
            setFlapValue(wordList[wordIndex]);
            wordIndex = (wordIndex + 1) % wordList.length;
        }, 4000)
        return () => clearInterval(interval);
    }, [])

    return (
        <div className="relative min-h-screen bg-cornsilk overflow-hidden">
            <div className="absolute top-1/2 -translate-y-1/2 font-serif">
                <div className="mx-32 flex flex-col gap-2">
                    <h1 className="text-8xl font-bold">
                        Ethan Shan
                    </h1>
                    <FlapDisplay
                        chars={Presets.ALPHANUM}
                        length={17}
                        value={flapValue}
                        className={'M light'}
                    />
                    <div className='rounded-md text-tea_green-300 font-bold text-2xl'>
                        About Me
                    </div>
                </div>
            </div>
            <div className='absolute bottom-0 left-1/2 -translate-x-1/2'>
                <div className='relative hero-go-next cursor-pointer' onClick={navToFeatured}>
                    <div className="absolute left-1/2">
                        <span className="the-arrow arrow-down"></span>
                    </div>
                    <div className='py-4 relative hero-label'>
                        <div className='bg-cornsilk z-10 relative inline-block'>
                            Works
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
