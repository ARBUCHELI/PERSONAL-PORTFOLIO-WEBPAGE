import React from 'react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        About Me
      </h1>

      <section className="mb-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Professional Summary
        </h2>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Hello! I'm John Doe, a dedicated and results-oriented software developer with a strong foundation in web development technologies. I am passionate about creating intuitive, efficient, and scalable solutions to complex problems. My journey in tech has been driven by a constant desire to learn and adapt to new challenges, and I thrive in collaborative environments where I can contribute to meaningful projects.
        </p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
          Currently seeking opportunities to leverage my skills in a dynamic team to build innovative software. I'm always excited to connect with like-minded professionals and explore new possibilities.
        </p>
      </section>

      <section className="mb-12 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-6">
          Key Skills
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            'JavaScript (ES6+)', 'TypeScript', 'React', 'Next.js', 'Node.js',
            'Python', 'Django', 'Flask', 'HTML5', 'CSS3', 'Tailwind CSS',
            'Git & GitHub', 'Docker', 'RESTful APIs', 'GraphQL', 'SQL & NoSQL Databases'
          ].map((skill) => (
            <li
              key={skill}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-md text-center text-sm font-medium shadow-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Experience & Education (Placeholder)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">Senior Widget Developer - Gizmo Inc.</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Jan 2020 - Present</p>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Responsible for developing and maintaining cutting-edge widgets for a global audience. Collaborated with a team of 10 engineers to deliver high-quality products on schedule.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300">B.Sc. in Computer Science - University of Tech</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Graduated May 2019</p>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Focused on software engineering, algorithms, and data structures. Completed a thesis project on machine learning applications in finance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
