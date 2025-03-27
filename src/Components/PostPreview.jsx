const PostPreview = ({ username, content }) => {
    return (
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg w-full max-w-3xl mt-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-700 rounded-full"></div>
          <div>
            <h3 className="text-white font-semibold">{username}</h3>
            <p className="text-gray-400 text-sm">Full Stack Developer | AI Enthusiast</p>
          </div>
        </div>
  
        <div className="mt-4 p-4 bg-gray-800 text-gray-300 rounded-md">
          {content ? content : "// Generated post content will appear here"}
        </div>
      </div>
    );
  };
  
  export default PostPreview;
  