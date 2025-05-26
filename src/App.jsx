import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function BillApp() {
  const [copiedText, setCopiedText] = useState("");
  const bills = [
    // {
    //   month: "March",
    //   year: 2025,
    //   electricity: { kwh: 149.3, rate: 11.5, beforeImg: "/before-electric-march.jpg", afterImg: "/after-electric-march.jpg" },
    //   water: { cuM: 8.5, rate: 22.105, beforeImg: "/before-water-march.jpg", afterImg: "/after-water-march.jpg" }
    // },
    // {
    //   month: "April",
    //   year: 2025,
    //   electricity: { kwh: 171.2, rate: 12, beforeImg: "/after-electric-march.jpg", afterImg: "/after-electric-april.jpeg" },
    //   water: { cuM: 8.5, rate: 22.65, beforeImg: "/after-water-march.jpg", afterImg: "/after-water-april.jpeg" }
    // },
    {
      month: "May",
      year: 2025,
      electricity: { kwh: 163.7, rate: 12, beforeImg: "/after-electric-april.jpeg", afterImg: "/after-electric-may.jpg" },
      water: { cuM: 8, rate: 22.77, beforeImg: "/after-water-april.jpeg", afterImg: "/after-water-may.jpg" }
    },
  
  ];

  const payDetails = [
    {
      name:"Abraham Sulit",
      accNum: "09916507492" ,
      bank: "Maya (E-wallet)",
    },
    {
      name:"Abraham Sulit",
      accNum: "1479138563" ,
      bank: "BPI",
    },
    {
      name:"Abraham Sulit",
      accNum: "9045028068" ,
      bank: "RCBC",
    },
    {
      name:"Abraham Sulit",
      accNum: "0413797980251" ,
      bank: "Metrobank",
    },

  ]

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(""), 2000);
  };

  return (
    <div className="container py-4 px-2">
      <h1 className="text-center mb-4 text-primary fw-bold">Bill Summary</h1>

      {bills.map((bill, index) => {
        const electricBill = bill.electricity.kwh * bill.electricity.rate;
        const waterBill = bill.water.cuM * bill.water.rate;
        const totalBill = electricBill + waterBill;

        return (
          <div key={index} className="card shadow-sm rounded-4 mb-4" style={{ border: "none" }}>
            <div className="card-body p-4">
              <h1 className="text-center mb-3">{bill.month} {bill.year}</h1>

              <section className="mb-4 text-center">
                <h5 className="text-secondary">Electricity Bill</h5>
                <img src="/veco-logo.jpeg" alt="Veco Logo" className="mb-2 mx-auto" style={{ width: "80px" }} />
                <p className="text-danger fs-3"><strong>Consumed:</strong> {bill.electricity.kwh} kWh</p>
                <p className="text-success fs-3 text-center"><strong>Cost:</strong> ₱{electricBill.toFixed(2)}</p>
                <div className="mb-2">
                  <p className="fw-semibold mb-1">Before Reading</p>
                  <img src={bill.electricity.beforeImg} className="img-fluid rounded shadow-sm" />
                </div>
                <div>
                  <p className="fw-semibold mb-1">After Reading</p>
                  <img src={bill.electricity.afterImg} className="img-fluid rounded shadow-sm" />
                </div>
              </section>

              <section className="mb-4 text-center">
                <h5 className="text-secondary">Water Bill</h5>
                <img src="/mcwd-logo.jpeg" alt="MCWD Logo" className="mb-2" style={{ width: "100px" }} />
                <p className="text-danger fs-3"><strong>Consumed:</strong> {bill.water.cuM} cu.m</p>
                <p className="text-success fs-3"><strong>Cost:</strong> ₱{waterBill.toFixed(2)}</p>
                <div className="mb-2">
                  <p className="fw-semibold mb-1">Before Reading</p>
                  <img src={bill.water.beforeImg} className="img-fluid rounded shadow-sm" />
                </div>
                <div>
                  <p className="fw-semibold mb-1">After Reading</p>
                  <img src={bill.water.afterImg} className="img-fluid rounded shadow-sm" />
                </div>
              </section>

              <h5 className="text-success fw-bold text-center">Total Bill: ₱{totalBill.toFixed(2)}</h5>

              <hr />
              <p className="text-danger fst-italic text-center mt-3">
                For your convenience, you may settle your bill via bank transfer or e-wallet.
              </p>

              <h6 className="text-primary mt-4">Payment Details</h6>
              {payDetails.map((detail, idx) => (
                <div key={idx} className="bg-light p-3 rounded-3 mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-1"><strong>Name:</strong> {detail.name}</p>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => handleCopy(detail.name)}>Copy</button>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-1"><strong>Account #:</strong> {detail.accNum}</p>
                    <button className="btn btn-sm btn-outline-primary" onClick={() => handleCopy(detail.accNum)}>Copy</button>
                  </div>
                  <p className="mb-0"><strong>Bank:</strong> {detail.bank}</p>
                </div>
              ))}

              <p className="text-center text-danger">Note: After payment, kindly send a screenshot. Thank you.</p>

              {copiedText && (
                <div className="text-success text-center mt-2 small">
                  <em>Copied "{copiedText}" to clipboard!</em>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
