"use client";

import {
  Building05,
  Mail01,
  MarkerPin01,
  MessageChatCircle,
  Phone
} from "@untitledui/icons";
import {
  Button as AriaButton,
  Input,
  Label,
  TextArea,
  TextField
} from "react-aria-components";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { contactDetails } from "@/data/site";

export function ContactBlock() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${contactDetails.email}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <Card className="rounded-[1.75rem] p-7">
        <Badge>Contact Details</Badge>
        <h3 className="text-2xl font-semibold text-[var(--foreground)]">Direct Contact</h3>
        <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--muted)]">
          <div className="flex items-start gap-4 rounded-[1.25rem] border border-[var(--color-border-secondary)] bg-[var(--surface-alt)] p-4">
            <Phone className="mt-0.5 size-5 shrink-0 text-[var(--brand)]" strokeWidth={1.8} aria-hidden="true" />
            <p>
              <span className="block font-semibold text-[var(--foreground)]">Phone</span>
              <a href={phoneHref} className="transition hover:text-[var(--brand)]">
                {contactDetails.phone}
              </a>
            </p>
          </div>
          <div className="flex items-start gap-4 rounded-[1.25rem] border border-[var(--color-border-secondary)] bg-[var(--surface-alt)] p-4">
            <Mail01 className="mt-0.5 size-5 shrink-0 text-[var(--brand)]" strokeWidth={1.8} aria-hidden="true" />
            <p>
              <span className="block font-semibold text-[var(--foreground)]">Email</span>
              <a href={emailHref} className="transition hover:text-[var(--brand)]">
                {contactDetails.email}
              </a>
            </p>
          </div>
          <div className="flex items-start gap-4 rounded-[1.25rem] border border-[var(--color-border-secondary)] bg-[var(--surface-alt)] p-4">
            <MarkerPin01 className="mt-0.5 size-5 shrink-0 text-[var(--brand)]" strokeWidth={1.8} aria-hidden="true" />
            <p>
              <span className="block font-semibold text-[var(--foreground)]">Address</span>
              {contactDetails.address}
            </p>
          </div>
          <div className="flex items-start gap-4 rounded-[1.25rem] border border-[var(--color-border-secondary)] bg-[var(--surface-alt)] p-4">
            <Building05 className="mt-0.5 size-5 shrink-0 text-[var(--brand)]" strokeWidth={1.8} aria-hidden="true" />
            <p>
              <span className="block font-semibold text-[var(--foreground)]">Business Hours</span>
              {contactDetails.hours}
            </p>
          </div>
        </div>
      </Card>

      <form
        action={`mailto:${contactDetails.email}`}
        method="post"
        encType="text/plain"
        className="surface-card rounded-[1.75rem] p-7"
      >
        <Badge>Inquiry Form</Badge>
        <h3 className="text-2xl font-semibold text-[var(--foreground)]">Send Inquiry</h3>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          This static form is wired to open the default email client. Replace the destination later if a dedicated form
          workflow is finalized.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <TextField name="name" className="space-y-2">
            <Label className="text-sm font-medium text-[var(--foreground)]">Name</Label>
            <Input className="h-12 w-full rounded-xl border border-[var(--color-border-primary)] bg-white px-4 outline-none transition focus:border-[var(--brand)]" />
          </TextField>
          <TextField name="company" className="space-y-2">
            <Label className="text-sm font-medium text-[var(--foreground)]">Company</Label>
            <Input className="h-12 w-full rounded-xl border border-[var(--color-border-primary)] bg-white px-4 outline-none transition focus:border-[var(--brand)]" />
          </TextField>
          <TextField name="phone" className="space-y-2">
            <Label className="text-sm font-medium text-[var(--foreground)]">Phone</Label>
            <Input className="h-12 w-full rounded-xl border border-[var(--color-border-primary)] bg-white px-4 outline-none transition focus:border-[var(--brand)]" />
          </TextField>
          <TextField name="email" type="email" className="space-y-2">
            <Label className="text-sm font-medium text-[var(--foreground)]">Email</Label>
            <Input className="h-12 w-full rounded-xl border border-[var(--color-border-primary)] bg-white px-4 outline-none transition focus:border-[var(--brand)]" />
          </TextField>
          <TextField name="location" className="space-y-2 md:col-span-2">
            <Label className="text-sm font-medium text-[var(--foreground)]">Project Location</Label>
            <Input className="h-12 w-full rounded-xl border border-[var(--color-border-primary)] bg-white px-4 outline-none transition focus:border-[var(--brand)]" />
          </TextField>
          <TextField name="requirement" className="space-y-2 md:col-span-2">
            <Label className="text-sm font-medium text-[var(--foreground)]">Requirement</Label>
            <TextArea className="min-h-36 w-full rounded-xl border border-[var(--color-border-primary)] bg-white px-4 py-3 outline-none transition focus:border-[var(--brand)]" />
          </TextField>
        </div>
        <AriaButton
          type="submit"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--brand-strong)]"
        >
          <MessageChatCircle className="size-4" strokeWidth={1.8} aria-hidden="true" />
          Send Inquiry by Email
        </AriaButton>
      </form>
    </div>
  );
}
