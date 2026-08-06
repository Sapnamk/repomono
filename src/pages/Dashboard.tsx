import { useState } from "react";
import "../App.css";

type Email = {
  recipient: string;
  subject: string;
  body: string;
  scheduleDate: string;
  status: string;
};

export default function DashboardPage() {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [scheduleDate, setScheduleDate] = useState("");
  const [delay, setDelay] = useState(5);
  const [hourlyLimit, setHourlyLimit] = useState(100);
  const [search, setSearch] = useState("");

  const [scheduledEmails, setScheduledEmails] = useState<Email[]>([]);
  const [sentEmails, setSentEmails] = useState<Email[]>([]);

  const handleSchedule = () => {
    if (!recipient || !subject || !body || !scheduleDate) {
      alert("Please fill all fields");
      return;
    }

    const newEmail: Email = {
      recipient,
      subject,
      body,
      scheduleDate,
      status: "Scheduled",
    };

    setScheduledEmails((prev) => [...prev, newEmail]);

    setRecipient("");
    setSubject("");
    setBody("");
    setScheduleDate("");

    alert("Email Scheduled Successfully!");

    setTimeout(() => {
      setScheduledEmails((prev) =>
        prev.filter(
          (e) =>
            !(
              e.recipient === newEmail.recipient &&
              e.subject === newEmail.subject
            )
        )
      );

      setSentEmails((prev) => [
        ...prev,
        {
          ...newEmail,
          status: "Sent",
        },
      ]);
    }, delay * 1000);
  };

  const deleteEmail = (index: number) => {
    setScheduledEmails(scheduledEmails.filter((_, i) => i !== index));
  };

  return (
    <div className="container">

      {/* Header */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>Email Scheduler Dashboard</h1>

        <button onClick={() => (window.location.href = "/")}>
          Logout
        </button>
      </div>

      {/* Statistics */}

      <div className="card">
        <h2>Statistics</h2>

        <p>Total Scheduled : {scheduledEmails.length}</p>

        <p>Total Sent : {sentEmails.length}</p>
      </div>

      {/* Compose */}

      <div className="card">

        <h2>Compose Email</h2>

        <input
          type="email"
          placeholder="Recipient Email"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <textarea
          placeholder="Email Body"
          rows={5}
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <input
          type="datetime-local"
          value={scheduleDate}
          onChange={(e) => setScheduleDate(e.target.value)}
        />

        <input
          type="number"
          placeholder="Delay (seconds)"
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
        />

        <input
          type="number"
          placeholder="Hourly Limit"
          value={hourlyLimit}
          onChange={(e) => setHourlyLimit(Number(e.target.value))}
        />

        <button onClick={handleSchedule}>
          Schedule Email
        </button>

      </div>

      {/* Scheduled Emails */}

      <div className="card">

        <h2>Scheduled Emails ({scheduledEmails.length})</h2>

        <input
          type="text"
          placeholder="Search Email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {scheduledEmails.length === 0 ? (
          <p>No Scheduled Emails</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Recipient</th>
                <th>Subject</th>
                <th>Schedule Time</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {scheduledEmails
                .filter((email) =>
                  email.recipient
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((email, index) => (
                  <tr key={index}>
                    <td>{email.recipient}</td>
                    <td>{email.subject}</td>
                    <td>{email.scheduleDate}</td>
                    <td>{email.status}</td>

                    <td>
                      <button onClick={() => deleteEmail(index)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Sent Emails */}

      <div className="card">

        <h2>Sent Emails ({sentEmails.length})</h2>

        {sentEmails.length === 0 ? (
          <p>No Sent Emails</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Recipient</th>
                <th>Subject</th>
                <th>Schedule Time</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {sentEmails.map((email, index) => (
                <tr key={index}>
                  <td>{email.recipient}</td>
                  <td>{email.subject}</td>
                  <td>{email.scheduleDate}</td>
                  <td>{email.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Settings */}

      <div className="card">
        <h2>Current Settings</h2>

        <p>
          <strong>Delay :</strong> {delay} seconds
        </p>

        <p>
          <strong>Hourly Limit :</strong> {hourlyLimit} emails/hour
        </p>
      </div>

      <footer
        style={{
          textAlign: "center",
          marginTop: "20px",
          color: "gray",
        }}
      >
        © 2026 Email Scheduler
      </footer>

    </div>
  );
}