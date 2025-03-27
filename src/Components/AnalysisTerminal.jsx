const AnalysisTerminal = ({ username }) => {
    return (
      <div className="bg-black text-green-400 p-4 mt-6 rounded-md font-mono text-sm h-28 overflow-auto">
        <p>Step 1: Extracted username: <span className="text-blue-400">{username}</span></p>
        <p>Step 2: Checking database for existing record...</p>
        <p>Step 3: Data loaded from database.</p>
      </div>
    );
  };
  
  export default AnalysisTerminal;
  