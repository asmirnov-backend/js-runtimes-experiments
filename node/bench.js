#!/usr/bin/env node

import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { readFileSync } from 'node:fs';


const execP = promisify(exec);

await execP('node /root/exp_00.mjs 1> out.txt'); 

// const result = readFileSync('out.txt', 'utf-8');
