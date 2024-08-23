import express from 'express';
import { getStories, createStory } from '../controllers/storyController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getStories);
router.post('/', authMiddleware, createStory);

export default router;
