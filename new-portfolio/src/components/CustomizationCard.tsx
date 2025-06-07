import Image from 'next/image';

interface CustomizationCardProps {
  imageUrl: string;
  title: string;
  description: string;
}

const CustomizationCard: React.FC<CustomizationCardProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="relative w-full h-56 sm:h-64">
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
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
        {/* Future: Could add a link to a more detailed page or live example */}
        {/* <Link href={`/customizations/${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <a className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mt-2 inline-block">
            Learn more
          </a>
        </Link> */}
      </div>
    </div>
  );
};

export default CustomizationCard;
