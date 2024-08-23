import React, { useEffect, useState } from 'react';

function StoryList() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const fetchStories = async () => {
      const response = await fetch('/api/stories');
      const data = await response.json();
      setStories(data);
    };
    fetchStories();
  }, []);

  return (
    <div>
      {stories.map((story, index) => (
        <div key={index}>
          <p>{story.content}</p>
        </div>
      ))}
    </div>
  );
}

export default StoryList;
