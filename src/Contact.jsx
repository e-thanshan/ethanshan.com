import { Menu } from './components/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'

const Contact = () => {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')


    const [submitted, setSubmitted] = useState(false)

    return (
        <div>
            <Menu />
            <div className="grain"></div>
            <div className="h-screen w-screen relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-7xl mx-auto grid grid-cols-2 gap-10">
                    <div>
                        <h1 className="font-pearl text-4xl mb-10">
                            Contact me!
                        </h1>
                        <a
                            href="mailto:ethanshan706@gmail.com"
                            className="block"
                        >
                            <p className="text-xl inline">
                                ethanshan706@gmail.com
                            </p>
                            <img
                                src="/arrowCurved.svg"
                                alt="Arrow"
                                className="w-15 inline relative -left-4"
                            />
                        </a>
                        <a href="tel:347-696-5114" className="block mt-4">
                            <p className="text-xl inline">+1 (347) 696-5114</p>
                            <img
                                src="/arrowCurved.svg"
                                alt="Arrow"
                                className="w-15 inline relative -left-4"
                            />
                        </a>
                    </div>
                    <div className="flex flex-col">
                        {submitted ? (
                            <div className="">
                                <h1 className="text-4xl mb-10">
                                    Thank you for your message!
                                </h1>
                                <p className="text-xl">
                                    I'll get back to you as soon as possible.
                                </p>
                            </div>
                        ) : (
                            <form className="w-full" action='https://form.taxi/s/960321fq' method='POST'>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name *"
                                    className="mb-4 w-full border-b-2 border-gray-600 focus:border-tea_green-400 focus:outline-0"
                                    required
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    placeholder={`Email ${!phone ? '*' : ''}`}
                                    className="mb-4 w-full border-b-2 border-gray-600 focus:border-tea_green-400 focus:outline-0"
                                    required={!phone}
                                />
                                <input
                                    type="tel"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    name="phone"
                                    placeholder={`Phone ${!email ? '*' : ''}`}
                                    className="mb-4 w-full border-b-2 border-gray-600 focus:border-tea_green-400 focus:outline-0"
                                    required={!email}
                                />
                                <input
                                    type="text"
                                    name="organization"
                                    placeholder="Organization"
                                    className="mb-4 w-full border-b-2 border-gray-600 focus:border-tea_green-400 focus:outline-0"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Message *"
                                    className="mb-4 h-20 w-full border-b-2 border-gray-600 focus:border-tea_green-400 focus:outline-0"
                                    required
                                ></textarea>
                                <input type="text" name="_gotcha" value="" className='hidden'></input>

                                <p className="text-gray-400">* Required</p>
                                <br />
                                <button
                                    type="submit"
                                    className="text-black border-2 border-black font-medium py-2 px-8"
                                    onSubmit={() => setSubmitted(true)}
                                >
                                    <FontAwesomeIcon
                                        icon={faPaperPlane}
                                        className="mr-2"
                                    />
                                    Send
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
