export default function SentEmails() {
  return (
    <div className="card">
      <h2>Sent Emails</h2>

      <table>
        <thead>
          <tr>
            <th>Recipient</th>
            <th>Subject</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>john@gmail.com</td>
            <td>Welcome Email</td>
            <td>Sent</td>
          </tr>

          <tr>
            <td>alice@gmail.com</td>
            <td>Offer Email</td>
            <td>Sent</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}