"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
(async () => {
    const app = (0, express_1.default)();
    const port = 3000;
    app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
    app.get("/", (reg, res) => {
        const filePath = "public/index.html";
        res.sendFile(filePath, { root: __dirname });
    });
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
})().catch((err) => {
    console.log(err instanceof Error ? err.message : err);
    process.exit(1);
});
