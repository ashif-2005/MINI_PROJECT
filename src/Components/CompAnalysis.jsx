import { useState } from "react";
import PostGenerator from "./PostGenerator";
import AnalysisTerminal from "./AnalysisTerminal";
import PostPreview from "./PostPreview";

function CompAnalysis() {
  const [username, setUsername] = useState("");
  const [generatedContent, setGeneratedContent] = useState("");

  const handleGenerate = (url, content) => {
    const extractedUsername = url.split("/in/")[1]?.split("/")[0] || "Unknown User";
    setUsername(extractedUsername);
    setGeneratedContent(content || "This is a sample generated LinkedIn post.");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-950 text-white p-6">
      <PostGenerator onGenerate={handleGenerate} />
      <AnalysisTerminal username={username} />
      <PostPreview username={username} content={generatedContent} />
    </div>
  );
}

export default CompAnalysis;
