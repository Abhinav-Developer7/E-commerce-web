import { products } from "@/data/product";
export async function GET() {

    return Response.json(products);
}
