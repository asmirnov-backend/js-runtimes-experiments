"use strict"
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execP = promisify(exec);

await execP('deno run --allow-all src/main.js 1>> results/out.csv'); 
