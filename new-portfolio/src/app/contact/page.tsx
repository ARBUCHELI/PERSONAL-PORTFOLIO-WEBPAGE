import React from 'react';
// It's good practice to use an icon library for social media icons,
// but for simplicity, we'll use text or emojis here.
// import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Example if react-icons was installed

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        Contact Me
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center max-w-xl mx-auto">
        I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form (Visual Only) */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
            Send a Message
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // In a real app, you'd handle form submission here.
              // For now, it just prevents default and could show an alert.
              alert('Form submitted (visually only)!');
            }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-700 dark:text-white"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-md shadow-md transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Other Contact Information */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
            Other Ways to Connect
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">Email</h3>
              <a href="mailto:john.doe@example.com" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                john.doe@example.com
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">Preferred for direct inquiries.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/johndoe-placeholder" // Replace with actual LinkedIn profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                linkedin.com/in/johndoe-placeholder
                {/* <FaLinkedin className="inline ml-1" /> Add icon if library is used */}
              </a>
               <p className="text-sm text-gray-500 dark:text-gray-400">For professional networking.</p>
            </div>
             <div>
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-300">GitHub</h3>
              <a
                href="https://github.com/johndoe-placeholder" // Replace with actual GitHub profile URL
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                github.com/johndoe-placeholder
                {/* <FaGithub className="inline ml-1" /> Add icon if library is used */}
              </a>
              <p className="text-sm text-gray-500 dark:text-gray-400">To see my coding projects.</p>
            </div>
            {/* Add more social media or contact methods as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
