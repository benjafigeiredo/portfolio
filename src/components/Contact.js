import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
    const email = 'benjamin.figeiredo@gmail.com';
    const subject = 'I would like to connect from <name>';
    const body = 'I came across your portfolio and would like to connect.';
    const composeLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    return (
        <section id="contact" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Contact me 
                    </h1>
                </div>
                <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-1/2 px-6">
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                            LINKEDIN
                        </h2>
                        <a href="https://www.linkedin.com/in/benjam%C3%ADn-figeiredo-14a9b31a0/">
                            <p className="mt-1">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </p>
                        </a>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                            EMAIL
                        </h2>
                        <a href={composeLink} target="_blank" rel="noopener noreferrer">
                            <p className="mt-1">
                                <FontAwesomeIcon icon={faGoogle} size="2x" />
                            </p>
                        </a>
                    </div>
                    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                            GITHUB
                        </h2>
                        <a href="https://github.com/benjafigeiredo">
                            <p className="mt-1">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </p>
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}