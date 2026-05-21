const steps = [
  {
    title: "You give.",
    body: "Whether $25 or $2,500, every donation goes into the next grant cycle. We're an all-volunteer board.",
  },
  {
    title: "Teachers apply.",
    body: "DPS educators submit proposals three times a year. Our board reviews every application on its merits.",
  },
  {
    title: "Students benefit.",
    body: "Programs run within the school year. We share photos and stories with the community when they do.",
  },
];

export function HowItWorks() {
  return (
    <section className="howit">
      <div className="wrap">
        <div className="section-title center">
          <div className="section-eyebrow center mark-triangle">Where your donation goes</div>
          <h2 className="section-heading">
            A simple loop. <em>No bureaucracy.</em>
          </h2>
        </div>
        <div className="howit-grid">
          {steps.map((step, i) => (
            <div key={step.title} className="step reveal">
              <div className="step-num">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
