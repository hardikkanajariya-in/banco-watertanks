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
import { contactDetails } from "@/data/site";

export function ContactBlock() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${contactDetails.email}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="border-t border-slate-200 pt-5 sm:pt-7">
        <Badge>Contact Details</Badge>
        <h3 className="text-2xl font-semibold text-slate-900">Direct Contact</h3>
        <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200 text-sm leading-7 text-slate-600">
          <div className="flex items-start gap-4 py-4">
            <Phone className="mt-0.5 size-5 shrink-0 text-teal-700" strokeWidth={1.8} aria-hidden="true" />
            <p className="min-w-0 break-words">
              <span className="block font-semibold text-slate-900">Phone</span>
              <a href={phoneHref} className="transition hover:text-teal-700">
                {contactDetails.phone}
              </a>
            </p>
          </div>
          <div className="flex items-start gap-4 py-4">
            <Mail01 className="mt-0.5 size-5 shrink-0 text-teal-700" strokeWidth={1.8} aria-hidden="true" />
            <p className="min-w-0 break-all">
              <span className="block font-semibold text-slate-900">Email</span>
              <a href={emailHref} className="transition hover:text-teal-700">
                {contactDetails.email}
              </a>
            </p>
          </div>
          <div className="flex items-start gap-4 py-4">
            <MarkerPin01 className="mt-0.5 size-5 shrink-0 text-teal-700" strokeWidth={1.8} aria-hidden="true" />
            <p className="min-w-0 break-words">
              <span className="block font-semibold text-slate-900">Address</span>
              {contactDetails.address}
            </p>
          </div>
          <div className="flex items-start gap-4 py-4">
            <Building05 className="mt-0.5 size-5 shrink-0 text-teal-700" strokeWidth={1.8} aria-hidden="true" />
            <p className="min-w-0 break-words">
              <span className="block font-semibold text-slate-900">Business Hours</span>
              {contactDetails.hours}
            </p>
          </div>
        </div>
      </div>

      <form
        action={`mailto:${contactDetails.email}`}
        method="post"
        encType="text/plain"
        className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-7"
      >
        <Badge>Inquiry Form</Badge>
        <h3 className="text-2xl font-semibold text-slate-900">Send Inquiry</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          This static form is wired to open the default email client. Replace the destination later if a dedicated form
          workflow is finalized.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <TextField name="name" className="space-y-2">
            <Label className="text-sm font-medium text-slate-900">Name</Label>
            <Input className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-teal-700" />
          </TextField>
          <TextField name="company" className="space-y-2">
            <Label className="text-sm font-medium text-slate-900">Company</Label>
            <Input className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-teal-700" />
          </TextField>
          <TextField name="phone" className="space-y-2">
            <Label className="text-sm font-medium text-slate-900">Phone</Label>
            <Input className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-teal-700" />
          </TextField>
          <TextField name="email" type="email" className="space-y-2">
            <Label className="text-sm font-medium text-slate-900">Email</Label>
            <Input className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-teal-700" />
          </TextField>
          <TextField name="location" className="space-y-2 md:col-span-2">
            <Label className="text-sm font-medium text-slate-900">Project Location</Label>
            <Input className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-teal-700" />
          </TextField>
          <TextField name="requirement" className="space-y-2 md:col-span-2">
            <Label className="text-sm font-medium text-slate-900">Requirement</Label>
            <TextArea className="min-h-36 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-teal-700" />
          </TextField>
        </div>
        <AriaButton
          type="submit"
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 sm:w-auto"
        >
          <MessageChatCircle className="size-4" strokeWidth={1.8} aria-hidden="true" />
          Send Inquiry by Email
        </AriaButton>
      </form>
    </div>
  );
}
