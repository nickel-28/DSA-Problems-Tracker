// Tracker.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const Tracker = () => {
  const [problems, setProblems] = useState([]);
  const [checkedItems, setCheckedItems] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/problems");
        setProblems(res.data);
      } catch (err) {
        console.error("Error fetching problems:", err);
      }
    };

    fetchProblems();
  }, []);

  useEffect(() => {
    if (problems.length > 0) {
      const storedProgress = localStorage.getItem("dsaProgress");
      if (storedProgress) {
        const parsed = JSON.parse(storedProgress);

        const validProgress = {};
        problems.forEach((p) => {
          if (parsed[p._id]) validProgress[p._id] = true;
        });

        setCheckedItems(validProgress);
      }
    }
  }, [problems]);

  useEffect(() => {
    if (Object.keys(checkedItems).length > 0) {
      localStorage.setItem("dsaProgress", JSON.stringify(checkedItems));
    }
  }, [checkedItems]);

  const categories = ["All", ...new Set(problems.map((p) => p.category))];

  const handleCheckboxChange = (id) => {
    setCheckedItems((prev) => {
      const updated = {
        ...prev,
        [id]: !prev[id],
      };
      return updated;
    });
  };

  const filteredProblems =
    selectedCategory === "All"
      ? problems
      : problems.filter((p) => p.category === selectedCategory);

  const total = filteredProblems.length;
  const completed = filteredProblems.filter((p) => checkedItems[p._id]).length;
  const progress = total ? (completed / total) * 100 : 0;

  const getColor = (level) => {
    switch (level) {
      case "Easy":
        return "lightgreen";
      case "Medium":
        return "lightyellow";
      case "Hard":
        return "lightcoral";
      default:
        return "white";
    }
  };

  return (
    <div>
      <h1 className="dsa-heading">DSA Problem Tracker</h1>

      <label>Filter by category: </label>
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <div className="progress-container" style={{ margin: "10px 0", background: "#eee", height: "20px", borderRadius: "10px" }}>
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
            background: "#4caf50",
            height: "100%",
            borderRadius: "10px",
            transition: "width 0.3s ease",
          }}
        ></div>
      </div>

      <p>
        {completed} of {total} problems completed ({selectedCategory})
      </p>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Solved</th>
            <th>Problem</th>
            <th>Link</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {filteredProblems.map((problem) => (
            <tr key={problem._id}>
              <td>
                <input
                  type="checkbox"
                  checked={!!checkedItems[problem._id]}
                  onChange={() => handleCheckboxChange(problem._id)}
                />
              </td>
              <td
                style={{
                  backgroundColor: "white",
                  padding: "8px",
                  border: "1px solid #ddd",
                }}
              >
                {problem.name}
              </td>
              <td style={{backgroundColor: "white" ,border: "1px solid #ddd", padding: "5px" }}>
                <a href={problem.link} target="_blank" rel="noreferrer">
                  LeetCode
                </a>
              </td>
              <td style={{ textAlign: "center", backgroundColor: getColor(problem.level)}}>{problem.level}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tracker;
