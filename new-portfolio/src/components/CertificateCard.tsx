import Image from 'next/image';
import Link from 'next/link'; // Optional: if certificates can be clicked to view larger or verify

interface CertificateCardProps {
  imageUrl: string;
  title: string;
  issuer: string;
  date: string;
  verifyLink?: string; // Optional link to verification page or larger image
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  imageUrl,
  title,
  issuer,
  date,
  verifyLink,
}) => {
  const cardContent = (
    <>
      <div className="relative w-full h-56 sm:h-64 md:h-72"> {/* Adjusted height for typical certificate aspect ratios */}
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="contain" // Use 'contain' to show the whole certificate
          className="transition-transform duration-300 ease-in-out group-hover:scale-105" // group-hover for linking
        />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
          Issued by: <span className="font-medium text-gray-700 dark:text-gray-300">{issuer}</span>
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">
          Date: {date}
        </p>
        {verifyLink && (
          <p className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
            Click to view/verify
          </p>
        )}
      </div>
    </>
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out group">
      {verifyLink ? (
        <Link href={verifyLink} target="_blank" rel="noopener noreferrer" className="block">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </div>
  );
};

export default CertificateCard;
