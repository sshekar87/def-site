import Link from "next/link";

export function Story() {
  return (
    <section className="story" id="about">
      <div className="wrap story-inner">
        <div>
          <div className="story-stat">30</div>
          <div className="story-stat-label">
            Years of putting Dedham teachers&apos; best ideas into Dedham
            classrooms.
          </div>
        </div>
        <div className="story-content">
          <div className="section-eyebrow on-dark">Our story</div>
          <h2>
            A foundation built by Dedham, <em>for Dedham</em>.
          </h2>
          <p>
            In 1995, a small group of Dedham parents and teachers noticed
            something. Some of the most memorable moments in school — a working
            scientist visiting a 4th grade classroom, a touring theater company
            performing Shakespeare for middle schoolers — were exactly the
            kinds of things public school budgets struggled to support.
          </p>
          <p>
            They started DEF as a way to fill that gap. Thirty years and over
            half a million dollars in grants later, we&apos;re still doing it
            the same way: locally, transparently, with an all-volunteer board.
          </p>
          <Link
            href="/mission"
            className="btn btn-gold"
            style={{ marginTop: 16 }}
          >
            Read our full story →
          </Link>
        </div>
      </div>
    </section>
  );
}
