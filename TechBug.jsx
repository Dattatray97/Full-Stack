import React, { useState } from "react";
import "./BugReportForm.css";

function BugReportForm() {
  const [formData, setFormData] = useState({
    bugTitle: "",
    description: "",
    affectedModule: "UI",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bug Report Submitted:", formData);
    alert("Bug report submitted successfully!");
    setFormData({
      bugTitle: "",
      description: "",
      affectedModule: "UI",
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="bug-report-form">
        <h2>Tech Bug Report</h2>

        <label htmlFor="bugTitle">Bug Title:</label>
        <input
          id="bugTitle"
          type="text"
          name="bugTitle"
          value={formData.bugTitle}
          onChange={handleChange}
          required
          placeholder="Enter bug title"
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Describe the bug in detail"
        />

        <label htmlFor="affectedModule">Affected Module:</label>
        <select
          id="affectedModule"
          name="affectedModule"
          value={formData.affectedModule}
          onChange={handleChange}
        >
          <option value="UI">UI</option>
          <option value="API">API</option>
          <option value="Database">Database</option>
          <option value="Network">Network</option>
        </select>

        <button type="submit">Submit Bug Report</button>
      </form>
    </div>
  );
}

export default BugReportForm;
