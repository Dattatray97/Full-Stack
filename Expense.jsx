import React, { useState } from "react";

function ExpenseTracker() {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(false);

  const submit = (e) => {
    e.preventDefault();

    if (!name.trim() || !amount.trim()) {
      setError(true);
      alert("Content Are required");
      return;
    }

    if (parseFloat(amount) <= 0 || isNaN(parseFloat(amount))) {
      setError(true);
      alert("Amount must be a positive number");
      return;
    }

    setError(false);
    alert(`Added "${name}" with $${parseFloat(amount).toFixed(2)}`);
    setName("");
    setAmount("");
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          placeholder="Expense Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{ border: error && (!amount || parseFloat(amount) <= 0) ? "2px solid red" : "1px solid #ccc" }}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
}

export default ExpenseTracker;
