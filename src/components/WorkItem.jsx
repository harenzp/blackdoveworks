const WorkItem = ({ project }) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden"
    >
      <img
        src={project.image}
        alt={project.title}
        className="aspect-[16/9] w-170 object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <h3 className="text-3xl font-medium">{project.title}</h3>

        <div className="flex justify-between">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
      </div>
    </a>
  )
}

export default WorkItem