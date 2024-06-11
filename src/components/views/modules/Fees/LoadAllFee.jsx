import '../../../../assets/css/allFees.css';

function AllFees() {
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
      status: "pagado",
      datePago: "2024-06-05",
    },
    // Más datos según sea necesario
  ];

  return (
    <>
      <div className="user-load-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>ID Trading Account</th>
              <th>ID Subscription</th>
              <th>Fee</th>
              <th>Date</th>
              <th>Status</th>
              <th>Date Pago</th>
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
                <td data-label="Date Pago">
                  {item.status === "pagado" ? item.datePago : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllFees;
