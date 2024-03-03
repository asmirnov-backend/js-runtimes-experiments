#!/usr/bin/env node
"use strict"
import { exec } from 'node:child_process';
import { promisify } from 'node:util';


const execP = promisify(exec);

await execP('node main.js 1>> out.txt'); 
