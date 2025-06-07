import React from 'react';
import CustomizationCard from '@/components/CustomizationCard'; // Using alias

const CustomizationsPage = () => {
  const sampleCustomizations = [
    {
      imageUrl: '/images/customizations/vscode-theme.png', // Placeholder
      title: 'VS Code Theme Customization',
      description: 'A personalized VS Code setup with a custom theme, font, and keybindings optimized for web development workflows, enhancing productivity and visual comfort.',
    },
    {
      imageUrl: '/images/customizations/linux-desktop.jpg', // Placeholder
      title: 'Custom Linux Desktop Environment',
      description: 'A tailored Linux desktop experience using a custom window manager, status bar, and application launchers for a minimal and efficient workflow.',
    },
    {
      imageUrl: '/images/customizations/browser-setup.gif', // Placeholder
      title: 'Browser Productivity Setup',
      description: 'A highly customized web browser setup with curated extensions, shortcuts, and settings for focused browsing and development research.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 text-center">
        My Customizations
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center max-w-3xl mx-auto">
        This section showcases some of my personalized development environment setups and tool customizations that help streamline my workflow and enhance productivity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Adjusted for 3 columns on larger screens */}
        {sampleCustomizations.map((custom, index) => (
          <CustomizationCard
            key={index}
            imageUrl={custom.imageUrl}
            title={custom.title}
            description={custom.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomizationsPage;
