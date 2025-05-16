import { ISample } from '../common/interface/interface';
import SampleService from '../service/service';

export default class SampleController {
	private _sampleService: SampleService = new SampleService();

	/**
	 * Get all samples.
	 * @returns An array of all samples.
	 */
	public async get(): Promise<ISample[]> {
		return this._sampleService.get();
	}

	/**
	 * Get a sample by ID.
	 * @param id - The ID of the sample to retrieve.
	 * @returns The sample object if found.
	 * @throws Error if no sample is found with the provided ID.
	 */
	public async getById(id: string): Promise<ISample | null> {
		// Validate the ID format here from common/validation.ts
		return this._sampleService.getById(id);
	}

	/**
	 * Create a new sample.
	 * @param sampleInput - The sample data to create.
	 * @returns The ID of the newly created sample.
	 */
	public async create(sampleInput: ISample): Promise<string> {
		// Validate the sampleInput here from common/validation.ts
		// For example, check if name and age are provided as they are required fields
		return this._sampleService.create(sampleInput);
	}

	/**
	 * Update an existing sample by ID.
	 * @param id - The ID of the sample to update.
	 * @param sampleInput - The updated sample data.
	 * @throws Error if no sample is found with the provided ID.
	 */
	public async update(id: string, sampleInput: ISample): Promise<void> {
		// Validate the sampleInput here from common/validation.ts
		// For example, check if name or age are provided as they are required fields
		return this._sampleService.update(id, sampleInput);
	}

	/**
	 * Delete a sample by ID.
	 * @param id - The ID of the sample to delete.
	 * @throws Error if no sample is found with the provided ID.
	 */

	public async remove(id: string): Promise<void> {
		// Validate the ID format here from common/validation.ts
		return this._sampleService.remove(id);
	}
}
