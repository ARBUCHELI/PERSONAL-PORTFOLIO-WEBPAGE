import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  description: string;
  demoLink?: string;
  sourceLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageUrl,
  title,
  description,
  demoLink,
  sourceLink,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex justify-start space-x-4">
          {demoLink && (
            <Link
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-300"
            >
              View Demo
            </Link>
          )}
          {sourceLink && (
            <Link
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md text-sm transition-colors duration-300"
            >
              Source Code
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
