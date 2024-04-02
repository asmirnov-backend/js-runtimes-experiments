"use strict"
import { factorial } from './factorial.js'
import { bench } from './bench.js'

bench(factorial, 1000)
