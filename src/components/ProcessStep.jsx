const ProcessStep = ({number, title, description}) => {
  return (
    <div className="flex gap-4">
      <span className="text-4xl font-medium min-w-12">{number}</span>
      <div className="flex flex-col gap-2">
        <h3 className="text-4xl font-medium">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProcessStep