import Sample from '../model/model';
import { ISample } from '../common/interface/interface';

export default class SampleService {
	/**
	 * Save or update a sample in the database.
	 * @param sampleInput - The sample data to be saved or updated.
	 * @param isNew - Indicates whether to create a new sample (true) or update an existing one (false).
	 * @returns The saved sample object.
	 */
	private async _save(sampleInput: ISample, isNew: boolean = true): Promise<ISample> {
		const sample = new Sample(sampleInput);
		sample.isNew = isNew;
		return (await sample.save()).toObject();
	}

	/**
	 * Retrieve all samples from the database.
	 * @returns An array of all sample objects.
	 */
	public async get(): Promise<ISample[]> {
		return Sample.find().lean();
	}

	/**
	 * Retrieve a sample by its ID.
	 * @param id - The ID of the sample to retrieve.
	 * @returns The sample object if found.
	 * @throws Error if no sample is found with the provided ID.
	 */
	public async getById(id: string): Promise<ISample | null> {
		const sample = await Sample.findById(id).lean();
		if (!sample) {
			throw new Error(`Sample with ID ${id} not found`);
		}
		return sample;
	}

	/**
	 * Create a new sample in the database.
	 * @param sampleInput - The sample data to create.
	 * @returns The ID of the newly created sample.
	 */
	public async create(sampleInput: ISample): Promise<string> {
		const sample = await this._save(sampleInput, true);
		return sample._id as string;
	}

	/**
	 * Update an existing sample by ID.
	 * @param id - The ID of the sample to update.
	 * @param sampleInput - The updated sample data.
	 */
	public async update(id: string, sampleInput: ISample): Promise<void> {
		const existingSample = await this.getById(id);
		const updatedSample = {
			...existingSample,
			...sampleInput,
		};
		await this._save(updatedSample, false);
	}

	/**
	 * Delete a sample by its ID.
	 * @param id - The ID of the sample to delete.
	 */
	public async remove(id: string): Promise<void> {
		await Sample.deleteOne({ _id: id });
	}
}
