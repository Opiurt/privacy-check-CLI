#!/usr/bin/env node
import { main } from "../src/index.js";

const urls = process.argv.slice(2);
main(urls);
