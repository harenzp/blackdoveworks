const SelectedWork = () => {
  return (
    <section id="selected-work" className="py-20">
        <div className="flex flex-col gap-15 items-center">
            <h2 className="text-6xl font-medium">Selected Work.</h2>
            <div className="flex justify-end gap-4 w-full pr-6">
                <div className="work-item"></div>
                <div className="work-item"></div>
                <div className="work-item"></div>
                <div className="work-item"></div>
                <div className="work-item"></div>
            </div>
        </div>
    </section>
  )
}

export default SelectedWork