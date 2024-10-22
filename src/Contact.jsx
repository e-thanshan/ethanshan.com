import { Menu } from "./components/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [organization, setOrganization] = useState('');
    const [message, setMessage] = useState('');

    const [error, setError] = useState('');

    const [submitted, setSubmitted] = useState(false);

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const handleSubmit = () => {
        setError('');

        if (name === '') {
            setError("Please enter your name");
            return;
        }
        if (email === '' && phone === '') {
            setError("Please enter either your email or phone number (or both!)");
            return;
        }
        if (message === '') {
            setError("Please enter a message");
            return;
        }
        if (email !== '' && !email.includes('@')) {
            setError("Please enter a valid email address");
            return;
        }
        if (phone !== '' && !phone.match(/^\d{10}$/)) {
            setError("Please enter a valid phone number");
            return;
        }

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...{name, email, phone, organization, message} })
          }).then(() => setSubmitted(true))
            .catch(error => alert(error));
        
    }

    return (
        <div>
            <Menu />
            <div className="grain"></div>
            <div className="h-screen w-screen relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-7xl mx-auto grid grid-cols-2 gap-10">
                    <div>
                        <h1 className="font-pearl text-4xl mb-10">Contact me!</h1>
                        <a href="mailto:ethanshan706@gmail.com" className="block">
                            <p className="text-xl inline">ethanshan706@gmail.com</p>
                            <img src="/arrowCurved.svg" alt="Arrow" className="w-15 inline relative -left-4" />
                        </a>
                        <a href="tel:347-696-5114" className="block mt-4">
                            <p className="text-xl inline">+1 (347) 696-5114</p>
                            <img src="/arrowCurved.svg" alt="Arrow" className="w-15 inline relative -left-4" />
                        </a>
                    </div>
                    <div className="flex flex-col">
                        {submitted ? (
                            <div className="">
                                <h1 className="text-4xl mb-10">Thank you for your message!</h1>
                                <p className="text-xl">I'll get back to you as soon as possible.</p>
                            </div>
                        ) : (
                            <form className="w-full">
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Name" className="mb-4 w-full border-b-2 border-gray-600 focus:border-tea_green-400 focus:outline-0" />
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Email" className="mb-4 w-full border-b-2 border-gray-600 focus:border-tea_green-400 focus:outline-0" />
                                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" placeholder="Phone" className="mb-4 w-full border-b-2 border-gray-600 focus:border-tea_green-400 focus:outline-0" />
                                <input type="text" value={organization} onChange={(e) => setOrganization(e.target.value)} name="organization" placeholder="Organization" className="mb-4 w-full border-b-2 border-gray-600 focus:border-tea_green-400 focus:outline-0" />
                                <textarea value={message} onChange={(e) => setMessage(e.target.value)} name="message" placeholder="Message" className="mb-4 h-20 w-full border-b-2 border-gray-600 focus:border-tea_green-400 focus:outline-0"></textarea>
                                <br />
                                <button onClick={() => handleSubmit()} className="text-black border-2 border-black font-medium py-2 px-8">
                                    <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
                                    Send
                                </button>
                                {error && <p className="text-red-500 pt-4">{error}</p>}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;