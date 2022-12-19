import { NextFunction, Request, Response } from 'express';
export type Handler = (
    req: Request,
    res: Response,
    next: NextFunction,
) => any | Promise<any>;
export const wrap =
    (handler: Handler) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await handler(req, res, next);
            if (!result.callback)
                res.json({ response: true, result: result, error: null });
            next();
        } catch (err) {
            next(err);
        }
    };
