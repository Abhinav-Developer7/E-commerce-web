import { products } from "@/data/product";

import pool from "@/lib/DB";

export async function GET() {
    try {
        const result = await pool.query(
            "SELECT * FROM products ORDER BY id ASC"
        );

        return Response.json(result.rows);
    } catch (error) {
        console.error("Database error:", error);

        return Response.json(
            { error: "Failed to fetch products" },
            { status: 500 }
        );
    }
}




export async function POST(request) {
    try {
        const formData = await request.formData();

        const name = formData.get("name");
        const category = formData.get("category");
        const price = formData.get("price");
        const image = formData.get("image");

        if (
            typeof name !== "string" ||
            !name.trim() ||
            typeof category !== "string" ||
            !category.trim() ||
            typeof price !== "string" ||
            price.trim() === "" ||
            !Number.isFinite(Number(price)) ||
            Number(price) <= 0 ||
            !(image instanceof File) ||
            image.size === 0
        ) {
            return Response.json(
                { error: "Please provide valid product details and an image." },
                { status: 400 }
            );
        }

        const allowedTypes = [
            "image/jpeg",
            "image/png",
            "image/webp",
        ];

        if (!allowedTypes.includes(image.type)) {
            return Response.json(
                { error: "Only JPEG, PNG, and WebP images are allowed." },
                { status: 400 }
            );
        }

        const maxSize = 5 * 1024 * 1024;

        if (image.size > maxSize) {
            return Response.json(
                { error: "Image must be 5 MB or smaller." },
                { status: 400 }
            );
        }

        const imageBuffer = Buffer.from(await image.arrayBuffer());

        const result = await pool.query(
            `INSERT INTO products
        (name, category, price, image_data, image_type)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, name, category, price, image_type`,
            [
                name.trim(),
                category.trim(),
                Number(price),
                imageBuffer,
                image.type,
            ]
        );

        return Response.json(result.rows[0], { status: 201 });
    } catch (error) {
        console.error("Create product error:", error);

        return Response.json(
            { error: "Failed to create product." },
            { status: 500 }
        );
    }
}

