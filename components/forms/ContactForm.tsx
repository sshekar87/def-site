"use client";

import { useState, type FormEvent } from "react";

// TODO: replace with Resend in v1.1. Until then, set NEXT_PUBLIC_FORMSPREE_ENDPOINT.
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "https://formspree.io/f/REPLACE-ME";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function ContactForm({ defaultInquiry = "" }: { defaultInquiry?: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus({ kind: "submitting" });
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error(`Formspree returned ${res.status}`);
      setStatus({ kind: "success" });
      form.reset();
    } catch (err) {
      setStatus({
        kind: "error",
        message:
          err instanceof Error
            ? err.message
            : "Something went wrong. Please email us directly.",
      });
    }
  }

  if (status.kind === "success") {
    return (
      <div className="form-card">
        <div className="form-status success">
          Thanks — we&apos;ve got your message and one of us will be in touch
          within a few days.
        </div>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit}>
      <div className="form-group">
        <label htmlFor="name">Your name</label>
        <input
          id="name"
          name="name"
          required
          autoComplete="name"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="inquiry">What&apos;s this about?</label>
        <select
          id="inquiry"
          name="inquiry"
          className="form-input"
          defaultValue={defaultInquiry || "general"}
        >
          <option value="general">General question</option>
          <option value="grant">Grant or application question</option>
          <option value="donation">Donation question</option>
          <option value="sponsor-dash">Sponsoring the DEF Dash</option>
          <option value="sponsor-bee">Sponsoring the Spelling Bee</option>
          <option value="sponsor-2026">Becoming a 2026 sponsor</option>
          <option value="board">Joining the board</option>
          <option value="press">Press inquiry</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          className="form-textarea"
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={status.kind === "submitting"}
      >
        {status.kind === "submitting" ? "Sending…" : "Send message"}
      </button>
      {status.kind === "error" && (
        <div className="form-status error">{status.message}</div>
      )}
    </form>
  );
}
