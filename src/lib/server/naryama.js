import { MONGODB_URI } from '$env/static/private';
import { MongoClient, ServerApiVersion } from 'mongodb';

const client = new MongoClient(MONGODB_URI);

await client.connect();

const db = client.db('naryama');

export default db;
