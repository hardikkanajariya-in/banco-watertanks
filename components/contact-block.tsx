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

import { contactDetails } from "@/data/site";

export function ContactBlock() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${contactDetails.email}`;

  return (
    <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="border-t border-slate-200 pt-5 sm:pt-7">
        <h3 className="text-2xl font-semibold text-[#0c2d52]">Direct Contact</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Contact Neomech (T) Ltd. for BANCO FRP panel type water tank inquiries, technical details, and site discussions.
        </p>
        <div className="mt-6 divide-y divide-slate-200 border-y border-slate-200 text-sm leading-7 text-slate-600">
          <div className="flex items-start gap-4 py-4">
            <Building05 className="mt-0.5 size-5 shrink-0 text-[#104a84]" strokeWidth={1.8} aria-hidden="true" />
            <p className="min-w-0 break-words">
              <span className="block font-semibold text-[#0c2d52]">Company</span>
              {contactDetails.company}
            </p>
          </div>
          <div className="flex items-start gap-4 py-4">
            <Building05 className="mt-0.5 size-5 shrink-0 text-[#104a84]" strokeWidth={1.8} aria-hidden="true" />
            <p className="min-w-0 break-words">
              <span className="block font-semibold text-[#0c2d52]">Contact Person</span>
              {contactDetails.person}
            </p>
          </div>
          <div className="flex items-start gap-4 py-4">
            <Phone className="mt-0.5 size-5 shrink-0 text-[#104a84]" strokeWidth={1.8} aria-hidden="true" />
            <p className="min-w-0 break-words">
              <span className="block font-semibold text-[#0c2d52]">Phone</span>
              <a href={phoneHref} className="transition hover:text-[#104a84]">
                {contactDetails.phone}
              </a>
            </p>
          </div>
          <div className="flex items-start gap-4 py-4">
            <Mail01 className="mt-0.5 size-5 shrink-0 text-[#104a84]" strokeWidth={1.8} aria-hidden="true" />
            <p className="min-w-0 break-all">
              <span className="block font-semibold text-[#0c2d52]">Email</span>
              <a href={emailHref} className="transition hover:text-[#104a84]">
                {contactDetails.email}
              </a>
            </p>
          </div>
          <div className="flex items-start gap-4 py-4">
            <MarkerPin01 className="mt-0.5 size-5 shrink-0 text-[#104a84]" strokeWidth={1.8} aria-hidden="true" />
            <p className="min-w-0 break-words">
              <span className="block font-semibold text-[#0c2d52]">Address</span>
              {contactDetails.address}
            </p>
          </div>
        </div>
      </div>

      <form
        action={`mailto:${contactDetails.email}`}
        method="post"
        encType="text/plain"
        className="rounded-[1.5rem] border border-[#d7e4f2] bg-white p-5 shadow-sm sm:p-7"
      >
        <h3 className="text-2xl font-semibold text-[#0c2d52]">Send Inquiry</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">
          Share your requirement and our team will respond by email for the next discussion.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <TextField name="name" className="space-y-2">
            <Label className="text-sm font-medium text-[#0c2d52]">Name</Label>
            <Input className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-[#104a84]" />
          </TextField>
          <TextField name="company" className="space-y-2">
            <Label className="text-sm font-medium text-[#0c2d52]">Company</Label>
            <Input className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-[#104a84]" />
          </TextField>
          <TextField name="phone" className="space-y-2">
            <Label className="text-sm font-medium text-[#0c2d52]">Phone</Label>
            <Input className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-[#104a84]" />
          </TextField>
          <TextField name="email" type="email" className="space-y-2">
            <Label className="text-sm font-medium text-[#0c2d52]">Email</Label>
            <Input className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-[#104a84]" />
          </TextField>
          <TextField name="location" className="space-y-2 md:col-span-2">
            <Label className="text-sm font-medium text-[#0c2d52]">Project Location</Label>
            <Input className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 outline-none transition focus:border-[#104a84]" />
          </TextField>
          <TextField name="requirement" className="space-y-2 md:col-span-2">
            <Label className="text-sm font-medium text-[#0c2d52]">Requirement</Label>
            <TextArea className="min-h-36 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#104a84]" />
          </TextField>
        </div>
        <AriaButton
          type="submit"
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-[#104a84] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0c3c6c] sm:w-auto"
        >
          <MessageChatCircle className="size-4" strokeWidth={1.8} aria-hidden="true" />
          Send Inquiry by Email
        </AriaButton>
      </form>
    </div>
  );
}
