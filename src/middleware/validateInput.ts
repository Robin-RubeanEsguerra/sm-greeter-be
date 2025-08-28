import { NextFunction, Response, Request } from "express";

export function validateInput(req: Request, res: Response, next: NextFunction) {
    const body = req.body;

    if (!body || typeof body !== 'object') {
        return res.status(400).json({ error: "Invalid input format" });
    }

    const emptyFields = Object.entries(body)
        .filter(([key, value]) => value === undefined || value === null || value === "");

    if (emptyFields.length > 0) {
        return res.status(400).json({ error: "No empty fields allowed", fields: emptyFields.map(([key]) => key) });
    }

    next();
}
