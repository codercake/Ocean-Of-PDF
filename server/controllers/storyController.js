import Story from '../models/story.js';

export const getStories = async (req, res) => {
  try {
    const stories = await Story.find({ isPublic: true });
    res.json(stories);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export const createStory = async (req, res) => {
  const { content, isPublic } = req.body;

  try {
    const newStory = new Story({
      content,
      author: req.user.id,
      isPublic,
    });

    const story = await newStory.save();
    res.json(story);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};
