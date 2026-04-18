import { contactDetails } from "@/data/site";

export function ContactBlock() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${contactDetails.email}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="rounded-[1.75rem] border border-[var(--border)] bg-white p-7">
        <h3 className="text-2xl font-semibold text-[var(--foreground)]">Direct Contact</h3>
        <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--muted)]">
          <p>
            <span className="block font-semibold text-[var(--foreground)]">Phone</span>
            <a href={phoneHref} className="transition hover:text-[var(--brand)]">
              {contactDetails.phone}
            </a>
          </p>
          <p>
            <span className="block font-semibold text-[var(--foreground)]">Email</span>
            <a href={emailHref} className="transition hover:text-[var(--brand)]">
              {contactDetails.email}
            </a>
          </p>
          <p>
            <span className="block font-semibold text-[var(--foreground)]">Address</span>
            {contactDetails.address}
          </p>
          <p>
            <span className="block font-semibold text-[var(--foreground)]">Business Hours</span>
            {contactDetails.hours}
          </p>
        </div>
      </div>

      <form
        action={`mailto:${contactDetails.email}`}
        method="post"
        encType="text/plain"
        className="rounded-[1.75rem] border border-[var(--border)] bg-white p-7"
      >
        <h3 className="text-2xl font-semibold text-[var(--foreground)]">Send Inquiry</h3>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          This static form is wired to open the default email client. Replace the destination later if a dedicated form
          workflow is finalized.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="text-sm font-medium text-[var(--foreground)]">
            Name
            <input className="mt-2 h-12 w-full rounded-xl border border-[var(--border)] px-4 outline-none transition focus:border-[var(--brand)]" name="name" />
          </label>
          <label className="text-sm font-medium text-[var(--foreground)]">
            Company
            <input className="mt-2 h-12 w-full rounded-xl border border-[var(--border)] px-4 outline-none transition focus:border-[var(--brand)]" name="company" />
          </label>
          <label className="text-sm font-medium text-[var(--foreground)]">
            Phone
            <input className="mt-2 h-12 w-full rounded-xl border border-[var(--border)] px-4 outline-none transition focus:border-[var(--brand)]" name="phone" />
          </label>
          <label className="text-sm font-medium text-[var(--foreground)]">
            Email
            <input className="mt-2 h-12 w-full rounded-xl border border-[var(--border)] px-4 outline-none transition focus:border-[var(--brand)]" name="email" type="email" />
          </label>
          <label className="text-sm font-medium text-[var(--foreground)] md:col-span-2">
            Project Location
            <input className="mt-2 h-12 w-full rounded-xl border border-[var(--border)] px-4 outline-none transition focus:border-[var(--brand)]" name="location" />
          </label>
          <label className="text-sm font-medium text-[var(--foreground)] md:col-span-2">
            Requirement
            <textarea
              className="mt-2 min-h-36 w-full rounded-xl border border-[var(--border)] px-4 py-3 outline-none transition focus:border-[var(--brand)]"
              name="requirement"
            />
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
        >
          Send Inquiry by Email
        </button>
      </form>
    </div>
  );
}
