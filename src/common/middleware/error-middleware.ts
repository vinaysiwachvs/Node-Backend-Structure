import { NextFunction, Request, Response } from 'express';

/**
 * Global error handler middleware for unhandled exceptions.
 * Logs the error and responds with a 500 Internal Server Error.
 */
export const defaultErrorHandler = (error: Error, req: Request, res: Response, _next: NextFunction) => {
	// TODO: Replace console with a centralized logger (e.g., Winston, custom logger, etc.)

	// Send generic 500 response

	console.error('🔴 Error caught in defaultErrorHandler:', error);
	res.status(500).json({
		success: false,
		message: error.message || 'Internal Server Error',
	});
};
