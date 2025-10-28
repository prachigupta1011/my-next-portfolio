export default function ProjectDetails({ params }) {
    const { id } = params
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Project #{id}</h1>
            <p>This is where you’ll describe the project details, features, and technologies used.</p>
        </div>
    )
}
