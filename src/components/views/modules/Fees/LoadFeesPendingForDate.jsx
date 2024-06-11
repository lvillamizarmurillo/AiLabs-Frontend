import '../../../../assets/css/allFeesDate.css';
import '../../../../assets/css/allFeesPending.css';

function PendingFeesDate() {
  const data = [
    {
      _id: "66671beb04dffd6bb3789e50",
      idTradingAccount: "70030019",
      idSuscription: "79009",
      fee: 1000,
      date: "2024-05-30",
      status: "pendiente",
    },
    {
      _id: "66671beb04dffd6bb3789e51",
      idTradingAccount: "70030020",
      idSuscription: "79010",
      fee: 1500,
      date: "2024-06-01",
      status: "pendiente",
    },
    // Más datos según sea necesario
  ];

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes añadir la lógica para enviar los datos al endpoint
  };

  return (
    <>
      <div className="user-load-container">
        <form className="date-form" onSubmit={handleFormSubmit}>
          <label>
            Start Date:
            <input type="date" name="startDate" />
          </label>
          <label>
            End Date:
            <input type="date" name="endDate" />
          </label>
          <button type="submit">Submit</button>
        </form>
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID Trading Account</th>
              <th>ID Subscription</th>
              <th>Fee</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td data-label="ID">{item._id}</td>
                <td data-label="ID Trading Account">{item.idTradingAccount}</td>
                <td data-label="ID Subscription">{item.idSuscription}</td>
                <td data-label="Fee">{item.fee}</td>
                <td data-label="Date">{item.date}</td>
                <td data-label="Status">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default PendingFeesDate;