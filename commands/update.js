import { promises as fs } from 'fs';

async function readDatabase() {
    const data = await fs.readFile('db.json', 'utf-8');
    return JSON.parse(data);
}

async function writeDatabase(data) {
    await fs.writeFile('db.json', JSON.stringify(data, null, 2));
}

export async function updateUser(id, fname, lname, age) {
    const db = await readDatabase();
    const user = db.users.find(user => user.id === id);
    if (user) {
        user.fname = fname;
        user.lname = lname;
        user.age = Number(age);
        await writeDatabase(db);
        console.log(`User ${id} updated to ${fname} ${lname}, age ${age}`);
    } else {
        console.log(`User with ID ${id} not found`);
    }
}
