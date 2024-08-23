import React, { useState } from 'react';

function StoryForm() {
  const [story, setStory] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/stories', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: story }),
    });
    setStory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={story}
        onChange={(e) => setStory(e.target.value)}
        placeholder="Write your story..."
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default StoryForm;
