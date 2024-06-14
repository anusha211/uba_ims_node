import { v4 as uuidv4 } from 'uuid';
import { promises as fs } from 'fs';

async function readDatabase() {
    const data = await fs.readFile('db.json', 'utf-8');
    return JSON.parse(data);
}

async function writeDatabase(data) {
    await fs.writeFile('db.json', JSON.stringify(data, null, 2));
}

export async function createUser(fname, lname, age) {
    const db = await readDatabase();
    const id = uuidv4();
    db.users.push({ id, fname, lname, age: Number(age) });
    await writeDatabase(db);
    console.log(`User ${fname} ${lname} created with ID ${id}`);
}

