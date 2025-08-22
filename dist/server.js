"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Define routes
app.get('/', (_req, res) => {
    res.send('Hello from Express + Vercel!');
});
// ✅ Local development: Listen on a port
if (!process.env.VERCEL) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server listening at http://localhost:${PORT}`);
    });
}
// ✅ Vercel requires a handler function to be exported
exports.default = (req, res) => {
    app(req, res); // Forward the request to the Express app
};
