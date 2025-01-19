import { Footer } from './components/Footer'
import { Menu } from './components/Menu'

const frontend = [
    'React',
    'Next.js',
    'Typescript',
    'GSAP',
    'Chart.js',
    'Tailwind CSS',
    'Vite',
    'Bootstrap',
    'HTML',
    'CSS',
    'JavaScript',
]
const backend = [
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'GraphQL',
    'Prisma',
    'AWS Lambda',
    'SQL Server',
    'Firebase',
]
const languages = [
    'Python',
    'Java',
    'C',
    'C#',
    'Assembly',
    'SQL',
    'R',
    'Verilog',
]
const coursework = [
    'Object Oriented Programming',
    'Data Structures and Algorithms',
    'Computer Architecture',
    'Operating Systems',
    'Database Systems',
    'Software Design',
    'Software Engineering Requirements',
    'Probability and Statistics',
    'Combinatorics',
    'Differential Equations',
]
const miscellaneous = [
    'Git',
    'Figma',
    'DatoCMS',
    'DigitalOcean',
    'Wordpress',
    'Agile Methodology',
]
const hobbies = [
    'Guitar',
    'Ultimate Frisbee',
    'Clothing',
    'Fragrance',
    'Fitness',
    'Photography',
    'Custom Keyboards',
]

const About = () => {
    return (
        <div>
            <Menu />
            <div className="grain"></div>

            <div className="pt-32 max-w-7xl xl:mx-auto mx-20">
                <h1 className="font-pearl text-8xl">About me</h1>
                <div className="grid grid-cols-3 gap-10 pt-10">
                    <div className="col-span-2">
                        <p className="text-4xl pb-5">Hi! I'm Ethan Shan.</p>
                        <p className="text-xl font-light">
                        Born and raised in New York City, I'm currently a 3rd year student at Rose-Hulman Institute of Technology in Terre Haute, Indiana, pursuing a bachelors degree in Computer Science with a minor in Artificial Intelligence. I'm passionate about web development and creative design, and have been building full-stack applications for the past 4 years. I'm also highly interested in computer vision and image recognition. I love solving problems and learning about anything and everything, computer science related or not.
                        </p>
                        <p className="text-xl font-light pt-5">
                        When I'm not busy with schoolwork, you can usually find me practicing guitar, playing ultimate frisbee, or doing my job as Alumni Relations chairman for the Pi Kappa Alpha fraterity at Rose-Hulman.
                        </p>
                        <p className='text-xl font-light pt-5'>
                        I'm currently looking for an internship/co-op for this upcoming summer, and would love to talk about opportunities! <a href="/contact" className='text-tea_green-200 text-xl px-5 underline'>Get in touch</a>
                        </p>
                        
                    </div>
                    <div>
                        <img
                            className=""
                            src="/pfp.jpg"
                            alt="Profile picture"
                        />
                    </div>
                </div>

                <div className="my-10">
                    <h3 className="font-pearl text-4xl">
                        Skills and Coursework
                    </h3>
                    <div className="grid grid-cols-5 pt-4 gap-8">
                        <div>
                            <h4 className="font-bold text-2xl">Frontend</h4>
                            <ul className="list-disc">
                                {frontend.map((skill) => (
                                    <li key={skill} className="marker:text-xs">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-2xl">Backend</h4>
                            <ul className="list-disc">
                                {backend.map((skill) => (
                                    <li key={skill} className="marker:text-xs">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-2xl">Languages</h4>
                            <ul className="list-disc">
                                {languages.map((skill) => (
                                    <li key={skill} className="marker:text-xs">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-2xl">Coursework</h4>
                            <ul className="list-disc">
                                {coursework.map((skill) => (
                                    <li key={skill} className="marker:text-xs">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-2xl">
                                Miscellaneous
                            </h4>
                            <ul className="list-disc">
                                {miscellaneous.map((skill) => (
                                    <li key={skill} className="marker:text-xs">
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="my-10">
                    <h1 className="font-pearl text-4xl">Other Hobbies</h1>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About
