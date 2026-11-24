import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [complaint, setComplaint] = useState("");
  const [records, setRecords] = useState([]);

  function submit(e) {
    e.preventDefault();
    setRecords([...records, { name, complaint }]);
    setName("");
    setComplaint("");
  }

  return (
    <div>
      <h2>Complaint Form</h2>
      <form onSubmit={submit}>
        <input placeholder="Name" value={name}
          onChange={e => setName(e.target.value)} required />
        <br /><br />
        <textarea placeholder="Complaint" value={complaint}
          onChange={e => setComplaint(e.target.value)} required />
        <br /><br />
        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Records</h2>
      {records.map((r, i) => (
        <p key={i}>{r.name} - {r.complaint}</p>
      ))}
    </div>
  );
}

export default App;