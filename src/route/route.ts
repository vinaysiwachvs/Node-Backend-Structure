import express from 'express';
const router = express.Router();
import * as sampleHandler from '../handler/handler';

// Sample route to get all samples
router.get('/', sampleHandler.get);

// Sample route to get a sample by ID
router.get('/:id', sampleHandler.getById);

// Sample route to create a new sample
router.post('/', sampleHandler.create);

// Sample route to update a sample by ID
router.put('/:id', sampleHandler.update);

// Sample route to delete a sample by ID
router.delete('/:id', sampleHandler.remove);

export default router;
