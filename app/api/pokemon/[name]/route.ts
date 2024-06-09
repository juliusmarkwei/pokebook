import { NextRequest } from "next/server";

const baseURL = process.env.NEXT_PUBLIC_POKEMON_API_URL;

export async function GET(req: NextRequest, context: any) {
	const { params } = context;
	const name = params.name;
	try {
		const response = await fetch(`${baseURL}/pokemon/${name}/`);
		if (response.ok) {
			const data = await response.json();
			return new Response(JSON.stringify(data));
		}
		return new Response(null, { status: response.status });
	} catch (error) {
		return new Response(null, { status: 500 });
	}
}
