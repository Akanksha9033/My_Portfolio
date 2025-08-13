import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => (
  <section
    id="contact"
    className="scroll-mt-24 py-16 px-6 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
  >
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Me</h2>

    <div className="max-w-xl mx-auto text-center text-gray-700 space-y-6">
      <p className="flex items-center justify-center gap-2">
        <FaEnvelope className="text-indigo-500" />
        <span>
          Email:{" "}
          <a
            href="mailto:hapychaudhary123spj@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            akanksha@edzest.org
          </a>
        </span>
      </p>

      <p className="flex items-center justify-center gap-2">
        <FaGithub className="text-gray-800" />
        <a
          href="https://github.com/Akanksha9033"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          github.com/Akanksha9033
        </a>
      </p>

      <p className="flex items-center justify-center gap-2">
        <FaLinkedin className="text-blue-600" />
        <a
          href="https://www.linkedin.com/in/akanksha-kumari-a45826231/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:underline"
        >
          linkedin.com/in/akanksha-kumari-a45826231
        </a>
      </p>
    </div>
  </section>
);

export default Contact;

