export default function Home() {
  return (
      <section className="text-center space-y-4 mt-10">
        <h1 className="text-4xl font-bold">Hi, I’m Prachi 👋</h1>
        <p className="text-lg text-gray-500">
          Frontend Developer passionate about building modern web apps using Next.js and Tailwind CSS.
        </p>
        <a
            href="/projects"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
        >
          View My Work
        </a>
      </section>
  )
}
