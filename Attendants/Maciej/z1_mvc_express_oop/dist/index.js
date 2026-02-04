"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(async () => {
    console.log('Hello World');
    console.log(process.env.test);
})().catch((err) => {
    console.log(err instanceof Error ? err.message : err);
    process.exit(1);
});
