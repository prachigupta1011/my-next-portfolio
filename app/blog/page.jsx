export default async function BlogPage() {
    const res = await fetch('https://dummyjson.com/posts')
    const data = await res.json()

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
            <ul className="space-y-2">
                {data.posts.map(post => (
                    <li key={post.id} className="border p-2 rounded">
                        {post.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}
