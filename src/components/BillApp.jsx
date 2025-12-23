import "bootstrap/dist/css/bootstrap.min.css";
import "./BillApp.css";

export default function BillApp() {
  // const [copiedText, setCopiedText] = useState("");
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
    // {
    //   month: "May",
    //   year: 2025,
    //   electricity: { kwh: 163.7, rate: 12, beforeImg: "/after-electric-april.jpeg", afterImg: "/after-electric-may.jpg" },
    //   water: { cuM: 8, rate: 22.77, beforeImg: "/after-water-april.jpeg", afterImg: "/after-water-may.jpg" }
    // },
    // {
    //   month: "June",
    //   year: 2025,
    //   electricity: { kwh: 178.6, rate: 11.5, beforeImg: "/after-electric-may.jpg", afterImg: "/after-electric-june.jpg" },
    //   water: { cuM: 7.5, rate: 22.336, beforeImg: "/after-water-may.jpg", afterImg: "/after-water-june.jpg" },
    //   internet: { cost: 198, period: "June 7-June 24"}
    // },
    // {
    //   month: "July",
    //   year: 2025,
    //   electricity: { kwh: 156.5, rate: 11.5, beforeImg: "/after-electric-june.jpg", afterImg: "/after-electric-july.jpg" },
    //   water: { cuM: 9, rate: 23.04, beforeImg: "/after-water-june.jpg", afterImg: "/after-water-july.jpg" },
    //   internet: { cost: 350}
    // },
    //   {
    //   month: "August",
    //   year: 2025,
    //   electricity: { kwh: 158.1, rate: 12, beforeImg: "/after-electric-july.jpg", afterImg: "/after-electric-august.webp" },
    //   water: { cuM: 8, rate: 22.6, beforeImg: "/after-water-july.jpg", afterImg: "/after-water-august.webp" },
    //   internet: { cost: 350}
    // },
    //   {
    //   month: "September",
    //   year: 2025,
    //   electricity: { kwh: 163.4, rate: 13, beforeImg: "/after-electric-august.webp", afterImg: "/after-electric-september.jpg" },
    //   water: { cuM: 8.5, rate: 24.1, beforeImg: "/after-water-august.webp", afterImg: "/after-water-september.jpg" },
    //   internet: { cost: 350}
    // },
    // {
    //   month: "October",
    //   year: 2025,
    //   electricity: { kwh: 151.2, rate: 12, beforeImg: "/after-electric-september.jpg", afterImg: "/after-electric-october.jpg" },
    //   water: { cuM: 7.5, rate: 26.85, beforeImg: "/after-water-september.jpg", afterImg: "/after-water-october.jpg" },
    //   internet: { cost: 350}
    // },
    // {
    //   month: "November",
    //   year: 2025,
    //   electricity: {
    //     kwh: 169,
    //     rate: 12.5,
    //     beforeImg: "/after-electric-october.jpg",
    //     afterImg: "/after-electric-november.jpg",
    //   },
    //   water: {
    //     cuM: 8.5,
    //     rate: 25.38,
    //     beforeImg: "/after-water-october.jpg",
    //     afterImg: "/after-water-november.jpg",
    //   },
    //   internet: { cost: 350 },
    // },
    {
      month: "December",
      year: 2025,
      electricity: {
        kwh: 149.6,
        rate: 13,
        beforeImg: "/after-electric-november.jpg",
        afterImg: "/after-electric-december.jpg",
      },
      water: {
        cuM: 7.5,
        rate: 25.1,
        beforeImg: "/after-water-november.jpg",
        afterImg: "/after-water-december.jpg",
      },
      internet: { cost: 350 },
    },
  ];

    const fmt = (v) =>
    v.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="bill-app container-mobile">
      <header className="app-header">
        <h1 className="app-title">Bill Summary</h1>
      </header>

      <main>
        {bills.map((bill, i) => {
          const electricBill = bill.electricity.kwh * bill.electricity.rate;
          const waterBill = bill.water.cuM * bill.water.rate;
          const internetBill = bill.internet?.cost || 0;
          const total = electricBill + waterBill + internetBill;

          return (
            <article className="bill-card" key={i}>
              <details className="bill-details" role="group">
                <summary className="bill-summary">
                  <div className="summary-left">
                    <div className="month">{bill.month} {bill.year}</div>
                    <div className="hint">Tap to view details</div>
                  </div>
                  <div className="summary-right d-flex">
                    <div className="label">Total</div>
                    <div className="amount text-white ps-2">₱{fmt(total)}</div>
                  </div>
                </summary>

                <div className="bill-body">
                  <section className="service">
                    <div className="service-head">
                      <img src="/veco-logo.jpeg" alt="Veco" className="logo" loading="lazy" />
                      <h4>Electricity</h4>
                    </div>
                    <p className="meta text-white"><strong>Consumed:</strong> {bill.electricity.kwh} kWh</p>
                    <p className="cost text-white"><strong>Cost:</strong> ₱{fmt(electricBill)}</p>

                    <div className="images">
                      <figure>
                        <figcaption>Before</figcaption>
                        <img src={bill.electricity.beforeImg} alt="electric before" loading="lazy" />
                      </figure>
                      <figure>
                        <figcaption>After</figcaption>
                        <img src={bill.electricity.afterImg} alt="electric after" loading="lazy" />
                      </figure>
                    </div>
                  </section>

                  <section className="service">
                    <div className="service-head">
                      <img src="/mcwd-logo.jpeg" alt="MCWD" className="logo" loading="lazy" />
                      <h4>Water</h4>
                    </div>
                    <p className="meta text-white"><strong>Consumed:</strong> {bill.water.cuM} cu.m</p>
                    <p className="cost text-white"><strong>Cost:</strong> ₱{fmt(waterBill)}</p>

                    <div className="images">
                      <figure>
                        <figcaption>Before</figcaption>
                        <img src={bill.water.beforeImg} alt="water before" loading="lazy" />
                      </figure>
                      <figure>
                        <figcaption>After</figcaption>
                        <img src={bill.water.afterImg} alt="water after" loading="lazy" />
                      </figure>
                    </div>
                  </section>

                  <section className="service last">
                    <h4>Internet</h4>
                    <p className="cost text-white"><strong>Cost:</strong> ₱{fmt(internetBill)}</p>
                  </section>

                  <div className="total-row">
                    <div>Total</div>
                    <div className="amount total text-white">₱{fmt(total)}</div>
                  </div>
                </div>
              </details>
            </article>
          );
        })}
      </main>
    </div>
  );
}


