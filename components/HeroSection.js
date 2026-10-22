import React from 'react'

export default function HeroSection() {
    return (
        <section className="px-8 py-16 md:py-24">
            <p className="mb-4 text-sm font-semibold tracking-widest text-rose-600">
                YOUR STYLE, REIMAGINED
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
                Find your look.
                <br />
                <span className="text-rose-600">Try it on.</span>
            </h1>

            <p className="mt-6 max-w-xl leading-7 text-stone-600">
                Discover your next favorite outfit and preview how it
                could look on you with AI-powered virtual try-on.
            </p>

            <a
                href="#collection"
                className="mt-8 inline-block rounded-full bg-stone-900 px-8 py-4 text-white hover:bg-rose-600"
            >
                Explore Collection →
            </a>
        </section>

    )
}

