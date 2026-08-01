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
      parent_contact: String(data.get("parent_contact") ?? "").trim(),
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
          ? "Looks like you've already registered with this contact."
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
        <p className="eyebrow text-xs text-gold">You&apos;re on the list</p>
        <p className="mt-3 text-lg text-paper">
          We&apos;ll reach out the moment Fall 2026 applications open.
          Early registrants get priority review.
        </p>
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
          <label htmlFor="parent_contact" className="mb-1.5 block text-sm text-muted">
            Parent contact (phone or email)
          </label>
          <input
            id="parent_contact"
            name="parent_contact"
            type="text"
            required
            autoComplete="tel"
            placeholder="e.g. 98765 43210"
            className={inputClass}
          />
        </div>
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
        Early registrants get priority access when Fall 2026 applications open.
      </p>
    </form>
  );
}
