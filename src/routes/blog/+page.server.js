import db from '$lib/server/db.js';

export async function load({ }) {
	const blogs = await db.collection('blog').find({}, { projection: { _id: 0, content_html: 0 } }).toArray();
    
	return { blogs };
}