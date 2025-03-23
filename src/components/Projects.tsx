import { useEffect } from 'react';

function Projects({
  onProjectSelect,
  selectedProject,
}: {
  onProjectSelect: (projectId: string) => void;
  selectedProject: string | null;
}) {
  const projectList = [
    { id: '6IX5BgSiNzcD9iAnbF6NWD', name: 'Andy Simmons' },
    { id: '2PrDNUibm1tq2fjYRgCamo', name: 'Hivemind' },
    { id: '1rT8Ava1pLIBliE3dCOmTD', name: 'STEV' },
    { id: '0uQu2MRmt4Z8Hu2TusKwJi', name: 'Touch the Sky' },
  ];
  
  useEffect(() => {
    if (!selectedProject && projectList.length > 0) {
      onProjectSelect(projectList[0].id);
    }
  }, [selectedProject, projectList, onProjectSelect]);

  return (
    <nav aria-label='Projects Navigation' className='py-2'>
      <ul className='space-y-2'>
        <li className='space-y-2'>
          {projectList.map((project) => (
            <button
              className={`w-full px-4 py-2 text-lg rounded-lg border ${
                selectedProject === project.id ? 'bg-primary' : 'hover:bg-hover'
              }`}
              key={project.id}
              onClick={() => onProjectSelect(project.id)}
            >
              {project.name}
            </button>
          ))}
        </li>
      </ul>
    </nav>
  );
}

export default Projects;
