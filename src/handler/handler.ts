import { Request, Response, NextFunction } from 'express';
import SampleController from '../controller/controller';

const sampleController = new SampleController();

/**
 * Middleware to handle GET requests for all samples.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 */

export const get = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const samples = await sampleController.get();
		res.status(200).json(samples);
	} catch (error) {
		next(error);
	}
};

/**
 * Middleware to handle GET requests for a sample by ID.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 */

export const getById = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const sample = await sampleController.getById(req.params.id);
		res.status(200).json(sample);
	} catch (error) {
		next(error);
	}
};

/**
 * Middleware to handle POST requests to create a new sample.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 */

export const create = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const sampleId = await sampleController.create(req.body);
		res.status(201).json({ id: sampleId, message: 'Sample created successfully' });
	} catch (error) {
		next(error);
	}
};

/**
 * Middleware to handle PUT requests to update a sample by ID.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 */
export const update = async (req: Request, res: Response, next: NextFunction) => {
	try {
		await sampleController.update(req.params.id, req.body);
		res.status(200).json({ message: 'Sample updated successfully' });
	} catch (error) {
		next(error);
	}
};

/**
 * Middleware to handle DELETE requests to delete a sample by ID.
 * @param req - The request object.
 * @param res - The response object.
 * @param next - The next middleware function.
 */
export const remove = async (req: Request, res: Response, next: NextFunction) => {
	try {
		await sampleController.remove(req.params.id);
		res.status(200).json({ message: 'Sample deleted successfully' });
	} catch (error) {
		next(error);
	}
};
