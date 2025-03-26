import "bootstrap/dist/css/bootstrap.min.css";

export default function BillApp() {
  const bills = [
    {
      month: "March",
      year: 2025,
      electricity: { kwh: 149.3, rate: 11.5, beforeImg: "/before-electric-march.jpg", afterImg: "/after-electric-march.jpg" },
      water: { cuM: 8.5, rate: 22.105, beforeImg: "/before-water-march.jpg", afterImg: "/after-water-march.jpg" }
    },
  
  ];

  return (
    <div className="container-fluid d-flex flex-column align-items-center justify-content-center min-vh-100" style={{ overflowX: "hidden", maxWidth: "100vw" }}>
      <h1 className="text-center mb-4">Bill Summary</h1>
      {bills.map((bill, index) => {
        const electricBill = bill.electricity.kwh * bill.electricity.rate;
        const waterBill = bill.water.cuM * bill.water.rate;
        return (
          <div key={index} className="card mb-4 text-center" style={{ width: "90%", maxWidth: "400px" }}>
            <div className="card-body">
              <h2 className="card-title">{bill.month} {bill.year}</h2>
              <hr />
              <h4>Electricity Bill</h4>
              <img src="/veco-logo.jpeg" alt="Veco Logo" className="mb-2" style={{ width: "80px", height: "auto" }} />
              <p className="fw-bold">Total Consumed kWh: {bill.electricity.kwh}</p>
              <p className="fw-bold">Total Cost: ₱{electricBill.toFixed(2)}</p>
              <div className="mt-3">
                <p className="fw-semibold">Before Reading Image:</p>
                <img src={bill.electricity.beforeImg} alt={`Before Reading Electricity ${bill.month}`} className="img-fluid rounded w-100" />
              </div>
              <div className="mt-3">
                <p className="fw-semibold">After Reading Image:</p>
                <img src={bill.electricity.afterImg} alt={`After Reading Electricity ${bill.month}`} className="img-fluid rounded w-100" />
              </div>
              <hr />
              <h4>Water Bill</h4>
              <img src="/mcwd-logo.jpeg" alt="MCWD Logo" className="mb-2" style={{ width: "120px", height: "auto" }} />
              <p className="fw-bold">Total Consumed cu.m: {bill.water.cuM}</p>
              <p className="fw-bold">Total Cost: ₱{waterBill.toFixed(2)}</p>
              <div className="mt-3">
                <p className="fw-semibold">Before Reading Image:</p>
                <img src={bill.water.beforeImg} alt={`Before Reading Water ${bill.month}`} className="img-fluid rounded w-100" />
              </div>
              <div className="mt-3">
                <p className="fw-semibold">After Reading Image:</p>
                <img src={bill.water.afterImg} alt={`After Reading Water ${bill.month}`} className="img-fluid rounded w-100" />
              </div>
              <hr />
              <h4 className="fw-bold">Total Bill: ₱{(electricBill + waterBill).toFixed(2)}</h4>
              <hr />
              
            </div>
          </div>
        );
      })}
    </div>
  );
}
