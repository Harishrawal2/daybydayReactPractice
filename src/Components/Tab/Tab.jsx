import React, { useState } from "react";

export default function Tab() {
  const [activeTab, setActiveTab] = useState("HTML");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  const tabStyle = {
    cursor: "pointer",
    color: "white",
    borderRadius: "5px",
    backgroundColor: "gray",
    border: "1px solid blue",
  };

  return (
    <div className="px-4 max-w-7xl mx-auto border mt-10 min-h-screen border-gray-900">
      <div className="flex items-center justify-around mt-10 border border-gray-600">
        <button
          className="py-2 px-6"
          style={activeTab === "HTML" ? tabStyle : {}}
          onClick={() => handleTabClick("HTML")}
        >
          HTML
        </button>
        <button
          className="py-2 px-6"
          style={activeTab === "CSS" ? tabStyle : {}}
          onClick={() => handleTabClick("CSS")}
        >
          CSS
        </button>
        <button
          className="py-2 px-6"
          style={activeTab === "JavaScript" ? tabStyle : {}}
          onClick={() => handleTabClick("JavaScript")}
        >
          JavaScript
        </button>
      </div>

      <div className="py-10 border mt-10 border-gray-400">
        {activeTab === "HTML" && (
          <p className="text-indigo-500 text-xl">
            The HyperText Markup Language or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </p>
        )}

        {activeTab === "CSS" && (
          <p>
            Cascading Style Sheets is a style sheet language used for describing
            the presentation of a document written in a markup language such as
            HTML or XML.
          </p>
        )}

        {activeTab === "JavaScript" && (
          <p>
            JavaScript, often abbreviated as JS, is a programming language that
            is one of the core technologies of the World Wide Web, alongside
            HTML and CSS.
          </p>
        )}
      </div>
    </div>
  );
}
