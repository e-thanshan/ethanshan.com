import { Footer } from "./components/Footer"
import { Menu } from "./components/Menu"

const frontend = ['React', 'Next.js', 'Typescript', 'GSAP', 'Chart.js', 'Tailwind CSS', 'Vite', 'Bootstrap', 'HTML', 'CSS', 'JavaScript']
const backend = ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL', 'Prisma', 'AWS Lambda', 'SQL Server', 'Firebase']
const languages = ['Python', 'Java', 'C', 'C#', 'Assembly', 'SQL', 'R', 'Verilog']
const coursework = ['Object Oriented Programming', 'Data Structures and Algorithms', 'Computer Architecture', 'Operating Systems', 'Database Systems', 'Software Design', 'Software Engineering Requirements', 'Probability and Statistics', 'Combinatorics', 'Differential Equations']
const miscellaneous = ['Git', 'Figma', 'DatoCMS', 'DigitalOcean', 'Wordpress', 'Agile Methodology']

const About = () => {
    return (
        <div>
            <Menu />
            <div className="grain"></div>

            <div className="pt-32 max-w-7xl xl:mx-auto mx-20">
                <h1 className="font-pearl text-8xl">About me</h1>
                <div className="grid grid-cols-3 gap-10 pt-10">
                    <div className="col-span-2">
                        <p className="text-4xl pb-5">
                            Hi! I'm Ethan Shan.
                        </p>
                        <p className="text-2xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet nemo vero, culpa error nostrum, recusandae fuga cumque dignissimos omnis harum unde! Similique adipisci magni dolore magnam voluptatibus hic veritatis.
                        </p>
                    </div>
                    <div>
                        <img className="" src="/pfp.jpg" alt="Profile picture" />
                    </div>
                </div>

                <div className="my-10">
                    <h3 className="font-pearl text-4xl">Skills and Coursework</h3>
                    <div className="grid grid-cols-5 pt-4 gap-4">
                        <div>
                            <h4 className="font-bold text-2xl">Frontend</h4>
                            <ul>
                                {frontend.map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-2xl">Backend</h4>
                            <ul>
                                {backend.map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-2xl">Languages</h4>
                            <ul>
                                {languages.map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-2xl">Coursework</h4>
                            <ul>
                                {coursework.map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-2xl">Miscellaneous</h4>
                            <ul>
                                {miscellaneous.map(skill => <li key={skill}>{skill}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default About