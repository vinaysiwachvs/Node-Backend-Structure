// This file contains the interface definitions used across the project.

import mongoose from 'mongoose';

/**
 * Interface representing a Sample document in MongoDB.
 */
export interface ISample {
	_id?: string | mongoose.Types.ObjectId; // Optional MongoDB ObjectId or string
	name: string; // Name of the sample
	age: number; // Age of the sample
}
