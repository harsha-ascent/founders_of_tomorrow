"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-md border border-white/15 bg-white/5 px-4 py-3 text-paper placeholder:text-muted focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold transition-colors";

export default function SignupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    if (!supabase) {
      setStatus("error");
      setErrorMsg(
        "Registration isn't connected yet. Please try again shortly."
      );
      return;
    }

    const form = e.currentTarget;
    const data = new FormData(form);
    const kidAgeRaw = data.get("kid_age");

    const payload = {
      parent_name: String(data.get("parent_name") ?? "").trim(),
      parent_phone: String(data.get("parent_phone") ?? "").trim(),
      parent_email: String(data.get("parent_email") ?? "").trim(),
      kid_name: String(data.get("kid_name") ?? "").trim(),
      kid_school: String(data.get("kid_school") ?? "").trim(),
      kid_age: kidAgeRaw ? Number(kidAgeRaw) : null,
    };

    setStatus("submitting");

    const { error } = await supabase.from("signups").insert(payload);

    if (error) {
      setStatus("error");
      setErrorMsg(
        error.code === "23505"
          ? "You've already registered these exact details — you're on the list!"
          : "Something went wrong. Please try again."
      );
      return;
    }

    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-gold/40 bg-gold/10 p-8 text-center">
        <p className="eyebrow text-xs text-gold">Thank you, you&apos;re on the list</p>
        <p className="mt-3 text-lg text-paper">
          Our team will reach out to you soon — we&apos;ll notify you once
          Fall 2026 applications are open. Early registrants get priority
          review.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="eyebrow mt-6 text-xs text-gold underline-offset-4 hover:underline"
        >
          Register another kid
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="parent_name" className="mb-1.5 block text-sm text-muted">
            Parent name
          </label>
          <input
            id="parent_name"
            name="parent_name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. Priya Rao"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="parent_phone" className="mb-1.5 block text-sm text-muted">
            Parent phone number
          </label>
          <input
            id="parent_phone"
            name="parent_phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="e.g. 98765 43210"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="parent_email" className="mb-1.5 block text-sm text-muted">
          Parent email <span className="text-muted/70">(optional)</span>
        </label>
        <input
          id="parent_email"
          name="parent_email"
          type="email"
          autoComplete="email"
          placeholder="e.g. priya@example.com"
          className={inputClass}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="kid_name" className="mb-1.5 block text-sm text-muted">
            Kid&apos;s name
          </label>
          <input
            id="kid_name"
            name="kid_name"
            type="text"
            required
            placeholder="e.g. Arjun Rao"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="kid_age" className="mb-1.5 block text-sm text-muted">
            Kid&apos;s age
          </label>
          <input
            id="kid_age"
            name="kid_age"
            type="number"
            min={5}
            max={18}
            required
            placeholder="e.g. 12"
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="kid_school" className="mb-1.5 block text-sm text-muted">
          Kid&apos;s school
        </label>
        <input
          id="kid_school"
          name="kid_school"
          type="text"
          required
          placeholder="e.g. Delhi Public School, Hyderabad"
          className={inputClass}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-400">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-gold px-6 py-3.5 font-semibold text-ink transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Registering..." : "Notify me when it opens"}
      </button>
      <p className="text-xs text-muted">
        Got more than one kid? Submit this form again for each child —
        early registrants get priority access when Fall 2026 applications
        open.
      </p>
    </form>
  );
}
