import type { APIRoute } from "astro";
import prisma from "../../lib/prisma";

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const tag = await prisma.tag.create({
      data: {
        name: body.name,
      },
    });

    return new Response(JSON.stringify(tag), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create tag" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
