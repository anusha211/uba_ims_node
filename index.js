import { Command } from 'commander';
import { createUser } from './commands/create.js';
import { readUser } from './commands/read.js';
import { updateUser } from './commands/update.js';
import { deleteUser } from './commands/delete.js';

const program = new Command();

program
    .command('create <fname> <lname> <age>')
    .description('Create a new user')
    .action((fname,lname,age)=>createUser(fname,lname,age));

program
    .command('read <id>')
    .description('Read a user by ID')
    .action(readUser);

program
    .command('update <id> <fname> <lname> <age>')
    .description('Update a user by ID')
    .action((id,fname,lname,age)=>updateUser(id,fname,lname,age));

program
    .command('delete <id>')
    .description('Delete a user by ID')
    .action(deleteUser);

program.parse(process.argv);
