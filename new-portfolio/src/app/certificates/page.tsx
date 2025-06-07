import React from 'react';
import CertificateCard from '@/components/CertificateCard'; // Using alias

const CertificatesPage = () => {
  const sampleCertificates = [
    {
      imageUrl: '/images/certificates/cert-nextjs-pro.jpg', // Placeholder
      title: 'Advanced Next.js Development',
      issuer: 'ProDev Academy',
      date: 'March 2024',
      verifyLink: '#', // Optional verification link
    },
    {
      imageUrl: '/images/certificates/cert-tailwind-master.png', // Placeholder
      title: 'Tailwind CSS Masterclass',
      issuer: 'Design Gurus Institute',
      date: 'January 2024',
    },
    {
      imageUrl: '/images/certificates/cert-typescript-expert.svg', // Placeholder
      title: 'TypeScript for Experts',
      issuer: 'CodeMasters University',
      date: 'November 2023',
      verifyLink: '#',
    },
     {
      imageUrl: '/images/certificates/cert-cloud-practitioner.jpg', // Placeholder
      title: 'Cloud Practitioner Essentials',
      issuer: 'CloudProvider Inc.',
      date: 'September 2023',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 text-center">
        My Certificates
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center max-w-3xl mx-auto">
        Below is a collection of certifications I've earned, demonstrating my commitment to continuous learning and expertise in various domains.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {sampleCertificates.map((cert, index) => (
          <CertificateCard
            key={index}
            imageUrl={cert.imageUrl}
            title={cert.title}
            issuer={cert.issuer}
            date={cert.date}
            verifyLink={cert.verifyLink}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificatesPage;
