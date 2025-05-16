import { ISample } from '../common/interface/interface';
import mongoose, { Schema } from 'mongoose';

/**
 * Sample Schema definition for MongoDB collection "sample".
 */
const sampleSchema = new Schema<ISample>(
	{
		_id: { type: Schema.Types.ObjectId, auto: true }, // Automatically generated ObjectId
		name: { type: String, required: true }, // Required name field
		age: { type: Number, required: true }, // Required age field
	},
	{
		collection: 'sample', // Explicit collection name
		timestamps: true, // Automatically manage createdAt and updatedAt
	},
);

export default mongoose.model<ISample>('Sample', sampleSchema);
