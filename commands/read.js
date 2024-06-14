import { promises as fs } from 'fs';

async function readDatabase() {
    const data = await fs.readFile('db.json', 'utf-8');
    return JSON.parse(data);
}

export async function readUser(id) {
    const db = await readDatabase();
    const user = db.users.find(user => user.id === id);
    if (user) {
        console.log(user);
    } else {
        console.log(`User with ID ${id} not found`);
    }
}


