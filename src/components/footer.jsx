import React from 'react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <footer className="bg-gray-800 p-10 text-center text-white relative">
            <h1 className="mb-5 text-xl font-semibold">Opal Links</h1>
            <p className="mb-3">Full Stack Developer</p>
            <p className="mb-3">info@opallinks.com</p>
            <div className="flex justify-center space-x-3 mb-5">
                <a href="https://github.com/johndoe" className="text-gray-300 hover:text-white">GitHub</a>
                <a href="https://linkedin.com/in/johndoe" className="text-gray-300 hover:text-white">LinkedIn</a>
                <a href="https://twitter.com/johndoe" className="text-gray-300 hover:text-white">Twitter</a>
            </div>
            <button onClick={scrollToTop} className="absolute bottom-0 right-0 m-5 p-2 bg-blue-500 text-white rounded">Top</button>
            <p className="text-gray-500">© {new Date().getFullYear()} opal links</p>
        </footer>
    );
};

export default Footer;
