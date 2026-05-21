"use client";

import { useState, type FormEvent } from "react";

// TODO: replace with Resend in v1.1.
const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_MONTHLY ?? "https://formspree.io/f/REPLACE-ME";

export function MonthlyNotify() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="form-status success" style={{ marginTop: 0 }}>
        Got it. We&apos;ll email you the moment monthly giving is live.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <input
        type="email"
        name="email"
        placeholder="you@dedham.org"
        required
        className="form-input"
        style={{ flex: "1 1 200px" }}
      />
      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? "Saving…" : "Notify me"}
      </button>
      {status === "error" && (
        <div className="form-status error" style={{ width: "100%" }}>
          Couldn&apos;t save that. Try again or email us directly.
        </div>
      )}
    </form>
  );
}
