import React from 'react';
import ProjectCard from '@/components/ProjectCard'; // Using alias

const ProjectsPage = () => {
  const sampleProjects = [
    {
      imageUrl: '/images/projects/project-alpha.jpg', // Placeholder image
      title: 'Project Alpha',
      description: 'A cutting-edge web application that solves a complex business problem using AI and machine learning. Features a sleek UI and robust backend.',
      demoLink: '#', // Replace with actual demo link
      sourceLink: '#', // Replace with actual source code link
    },
    {
      imageUrl: '/images/projects/project-beta.png', // Placeholder image
      title: 'Project Beta',
      description: 'An innovative mobile app designed to enhance productivity for remote teams. Cross-platform compatibility with a focus on user experience.',
      demoLink: '#',
    },
    {
      imageUrl: '/images/projects/project-gamma.svg', // Placeholder image
      title: 'Project Gamma',
      description: 'An open-source library for data visualization, providing developers with easy-to-use components for creating interactive charts and graphs.',
      sourceLink: '#',
    },
    {
      imageUrl: '/images/projects/project-delta.gif', // Placeholder image
      title: 'Project Delta',
      description: 'A full-stack e-commerce platform with features like product management, user authentication, and payment gateway integration.',
      demoLink: '#',
      sourceLink: '#',
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2 text-center">
        My Projects
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 text-center max-w-3xl mx-auto">
        Here's a selection of projects I've worked on, showcasing my skills in various technologies and my passion for creating impactful solutions. Feel free to explore them!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {sampleProjects.map((project, index) => (
          <ProjectCard
            key={index}
            imageUrl={project.imageUrl}
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
            sourceLink={project.sourceLink}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
