import { createUser } from './commands/create.js';
import { readUser } from './commands/read.js';
import { updateUser } from './commands/update.js';
import { deleteUser } from './commands/delete.js';

const [,, command, ...args] = process.argv;

(async () => {
    switch (command) {
        case 'create':
            if (args.length < 3) {
                console.log('Usage: create <fname> <lname> <age>');
            } else {
                const [fname, lname, age] = args;
                await createUser(fname, lname, age);
            }
            break;
        case 'read':
            if (args.length < 1) {
                console.log('Usage: read <id>');
            } else {
                const [id] = args;
                await readUser(id);
            }
            break;
        case 'update':
            if (args.length < 4) {
                console.log('Usage: update <id> <fname> <lname> <age>');
            } else {
                const [id, fname, lname, age] = args;
                await updateUser(id, fname, lname, age);
            }
            break;
        case 'delete':
            if (args.length < 1) {
                console.log('Usage: delete <id>');
            } else {
                const [id] = args;
                await deleteUser(id);
            }
            break;
        default:
            console.log('Unknown command. Use one of: create, read, update, delete');
            break;
    }
})();
