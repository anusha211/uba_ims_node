import { promises as fs } from 'fs';

async function readDatabase() {
    const data = await fs.readFile('db.json', 'utf-8');
    return JSON.parse(data);
}

async function writeDatabase(data) {
    await fs.writeFile('db.json', JSON.stringify(data, null, 2));
}

export async function deleteUser(id) {
    const db = await readDatabase();
    const initialLength = db.users.length;
    db.users = db.users.filter(user => user.id !== id);
    await writeDatabase(db);
    if (db.users.length < initialLength) {
        console.log(`User with ID ${id} deleted`);
    } else {
        console.log(`User with ID ${id} not found`);
    }
}
