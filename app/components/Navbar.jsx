'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    const [dark, setDark] = useState(false)

    const toggleDark = () => {
        document.documentElement.classList.toggle('dark')
        setDark(!dark)
    }

    return (
        <nav className="flex justify-between items-center py-4 border-b">
            <h1 className="text-2xl font-bold">Prachi Portfolio</h1>
            <div className="space-x-6">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/blog">Blog</Link>
                <button onClick={toggleDark} className="border px-3 py-1 rounded">
                    {dark ? '☀️' : '🌙'}
                </button>
            </div>
        </nav>
    )
}
