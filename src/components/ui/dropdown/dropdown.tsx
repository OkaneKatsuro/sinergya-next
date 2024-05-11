import { useState } from "react";

interface ExpandableTextProps {
  text: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ text }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <button
        onClick={toggleExpand}
        className="text-blue-500 hover:underline focus:outline-none"
      >
        {expanded ? "Свернуть" : "Развернуть"}
      </button>
      {expanded && (
        <div className="mt-2">
          <p className="text-gray-700">{text}</p>
        </div>
      )}
    </div>
  );
};

export default ExpandableText;
