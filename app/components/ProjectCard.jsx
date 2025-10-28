import Link from 'next/link'

export default function ProjectCard({ project }) {
    return (
        <div className="border p-4 rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-500">{project.desc}</p>
            <Link href={`/projects/${project.id}`} className="text-blue-600 mt-2 inline-block">
                View Details →
            </Link>
        </div>
    )
}
