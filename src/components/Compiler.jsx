import React, { useState } from "react";
import axios from "axios";

const JDoodleLanguages = [
  { name: "C++", language: "cpp17", versionIndex: "0" },
  { name: "Java", language: "java", versionIndex: "4" },
  { name: "Python", language: "python3", versionIndex: "3" },
  { name: "JavaScript", language: "nodejs", versionIndex: "4" },
];

const clientId = process.env.REACT_APP_JDOODLE_CLIENT_ID;
const clientSecret = process.env.REACT_APP_JDOODLE_CLIENT_SECRET;

function Compiler() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState(JDoodleLanguages[0]);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runCode = async () => {
    setLoading(true);
    setOutput("Running...");

    const program = {
      script: code,
      language: language.language,
      versionIndex: language.versionIndex,
      clientId,
      clientSecret,
    };

    try {
      const res = await axios.post("https://api.jdoodle.com/v1/execute", program);
      setOutput(res.data.output);
    } catch (err) {
      console.error(err);
      setOutput("Error running code");
    }

    setLoading(false);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h2>💻 JDoodle Online Compiler</h2>

      <div>
        <select
          value={language.language}
          onChange={(e) =>
            setLanguage(
              JDoodleLanguages.find((lang) => lang.language === e.target.value)
            )
          }
        >
          {JDoodleLanguages.map((lang) => (
            <option key={lang.language} value={lang.language}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <textarea
        rows={15}
        cols={80}
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Write your code here..."
        style={{ marginTop: "10px", fontFamily: "monospace", fontSize: "14px" }}
      />

      <br />
      <button onClick={runCode} disabled={loading}>
        {loading ? "Running..." : "Run Code"}
      </button>

      <h3>Output:</h3>
      <pre style={{ backgroundColor: "#eee", padding: "10px" }}>{output}</pre>
    </div>
  );
}

export default Compiler;
