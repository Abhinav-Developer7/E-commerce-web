
"use client";

import { useState } from "react";

export default function Profile() {
    const [photo, setPhoto] = useState(null);

    function handlePhotoChange(event) {
        const file = event.target.files[0];

        if (file) {
            setPhoto(URL.createObjectURL(file));
        }
    }

    return (
        <main className="min-h-screen bg-stone-50 text-stone-900">
            <nav className="flex items-center justify-between border-b px-8 py-5">
                <a href="/" className="text-2xl font-bold">
                    Style<span className="text-rose-600">AI</span>
                </a>

                <a href="/" className="hover:text-rose-600">
                    Back to Store
                </a>
            </nav>

            <section className="mx-auto max-w-2xl px-6 py-12">
                <p className="text-sm font-semibold tracking-widest text-rose-600">
                    YOUR PERSONAL SPACE
                </p>

                <h1 className="mt-2 text-4xl font-bold">
                    My Profile
                </h1>

                <p className="mt-3 text-stone-600">
                    Upload a photo of yourself to get ready for your AI try-on.
                </p>

                <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6">
                    <h2 className="text-xl font-semibold">
                        Your photo
                    </h2>

                    <div className="mt-5 flex min-h-72 items-center justify-center overflow-hidden rounded-xl bg-stone-100">
                        {photo ? (
                            <img
                                src={photo}
                                alt="Your uploaded photo"
                                className="max-h-96 w-full object-contain"
                            />
                        ) : (
                            <p className="px-6 text-center text-stone-500">
                                Your photo preview will appear here
                            </p>
                        )}
                    </div>

                    <label className="mt-6 inline-block cursor-pointer rounded-full bg-stone-900 px-6 py-3 text-white hover:bg-rose-600">
                        Choose Photo
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoChange}
                            className="hidden"
                        />
                    </label>

                    <p className="mt-3 text-sm text-stone-500">
                        Select an image from your device.
                    </p>
                </div>
            </section>
        </main>
    );
}
