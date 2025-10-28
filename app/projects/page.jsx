import ProjectCard from '../components/ProjectCard'

const projects = [
    { id: 1, title: 'Next.js Portfolio', desc: 'A personal portfolio using Next.js & Tailwind' },
    { id: 2, title: 'Blog App', desc: 'Static blog built with markdown posts' },
]

export default function Projects() {
    return (
        <div>
            <h1 className="text-3xl font-semibold mb-6">Projects</h1>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map(p => (
                    <ProjectCard key={p.id} project={p} />
                ))}
            </div>
        </div>
    )
}
