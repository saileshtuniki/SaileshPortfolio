import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Contact</h2>
      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border rounded-md w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border rounded-md w-full"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 border rounded-md w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
      <div className="flex gap-6 mt-6 text-xl justify-center">
        <a href="https://github.com/sailesht" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/in/sailesht" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </div>
      <p className="text-center mt-8 text-sm">© Sailesh Tuniki, 2025</p>
    </section>
  );
}