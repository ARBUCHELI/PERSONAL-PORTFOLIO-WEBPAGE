const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <div className="container mx-auto">
        <p>&copy; {currentYear} John Doe. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-1">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
