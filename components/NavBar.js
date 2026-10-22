import React from 'react'

export default function NavBar() {
    return (

        <nav className="flex items-center justify-between border-b px-8 py-5">
            <a href="/" className="text-2xl font-bold">
                Style<span className="text-rose-600">AI</span>
            </a>

            <div className="flex gap-6">
                <a href="/">Home</a>
                <a href="/profile">My Profile</a>
            </div>
        </nav>
    )
}
