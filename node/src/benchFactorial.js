"use strict"
import { factorial } from './shared/factorial.js'
import { bench } from './bench.js'

bench(factorial, 1000)
