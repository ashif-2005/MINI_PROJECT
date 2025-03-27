import { useState } from "react";

const PostGenerator = ({ onGenerate }) => {
  const [url, setUrl] = useState("");
  const [postContent, setPostContent] = useState("");

  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-lg w-full max-w-3xl">
      <h2 className="text-white text-lg font-semibold">LINKEDIN POST GENERATOR</h2>
      <input
        type="text"
        className="w-full p-2 mt-3 bg-gray-800 text-white rounded-md outline-none border border-gray-700"
        placeholder="Enter LinkedIn post URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <div className="flex gap-3 mt-4">
        {["Event/article URL", "YT video", "None"].map((option) => (
          <label key={option} className="flex items-center gap-2 text-gray-300">
            <input type="radio" name="type" className="accent-blue-500" /> {option}
          </label>
        ))}
      </div>

      <textarea
        className="w-full p-3 mt-4 bg-gray-800 text-white rounded-md outline-none border border-gray-700"
        placeholder="What is the post about?"
        rows="3"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      ></textarea>

      <button
        onClick={() => onGenerate(url, postContent)}
        className="w-full mt-4 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold"
      >
        GENERATE CONTENT
      </button>
    </div>
  );
};

export default PostGenerator;
