import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-12">
      <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-6">
        Welcome to My Portfolio
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
        Hi, I'm John Doe, a passionate software developer. This is where I showcase my projects, share my skills, and document my journey in the world of technology.
      </p>
      <Link
        href="/projects"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg text-lg transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg"
      >
        Explore My Projects
      </Link>
    </div>
  );
}
