"use client";

import {
  Building05,
  Mail01,
  MarkerPin01,
  MessageChatCircle,
  Phone,
} from "@untitledui/icons";
import { useState } from "react";
import {
  Button as AriaButton,
  Input,
  Label,
  TextArea,
  TextField,
} from "react-aria-components";

import { contactFormConfig } from "@/lib/contact-form-config";
import { contactDetails } from "@/data/site";

const RECAPTCHA_ACTION = "contact";

type SubmitState =
  | { type: "idle"; message: "" }
  | { type: "success"; message: string }
  | { type: "error"; message: string };

function loadRecaptchaScript(siteKey: string): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("reCAPTCHA can only run in the browser."));
  }

  if ((window as { grecaptcha?: unknown }).grecaptcha) {
    return Promise.resolve();
  }

  const existing = document.querySelector<HTMLScriptElement>("script[data-recaptcha-v3='true']");
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("Failed to load reCAPTCHA script.")), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
    script.async = true;
    script.defer = true;
    script.dataset.recaptchaV3 = "true";
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Failed to load reCAPTCHA script."));
    document.head.appendChild(script);
  });
}

async function getRecaptchaToken(siteKey: string): Promise<string> {
  await loadRecaptchaScript(siteKey);

  return new Promise((resolve, reject) => {
    const recaptcha = (window as {
      grecaptcha?: {
        ready: (cb: () => void) => void;
        execute: (key: string, options: { action: string }) => Promise<string>;
      };
    }).grecaptcha;
    if (!recaptcha) {
      reject(new Error("reCAPTCHA is unavailable."));
      return;
    }

    recaptcha.ready(() => {
      recaptcha
        .execute(siteKey, { action: RECAPTCHA_ACTION })
        .then(resolve)
        .catch(() => reject(new Error("Failed to generate reCAPTCHA token.")));
    });
  });
}

export function ContactBlock() {
  const phoneHref = `tel:${contactDetails.phone.replace(/\s+/g, "")}`;
  const emailHref = `mailto:${contactDetails.email}`;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({ type: "idle", message: "" });
  const { web3FormsAccessKey, recaptchaV3SiteKey } = contactFormConfig;
  const configError = !web3FormsAccessKey || !recaptchaV3SiteKey
    ? "Contact form configuration is missing. Please set Web3Forms and reCAPTCHA keys."
    : "";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (configError) {
      setSubmitState({ type: "error", message: configError });
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setSubmitState({ type: "idle", message: "" });

    try {
      const recaptchaToken = await getRecaptchaToken(contactFormConfig.recaptchaV3SiteKey);
      if (!recaptchaToken.trim()) {
        throw new Error("reCAPTCHA verification failed. Please try again.");
      }

      const payload = {
        access_key: contactFormConfig.web3FormsAccessKey,
        subject: "New BANCO contact inquiry",
        from_name: "BANCO Water Tanks Website",
        ...Object.fromEntries(formData.entries()),
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Form submission failed.");
      }

      setSubmitState({
        type: "success",
        message: "Inquiry submitted successfully. Our team will contact you soon.",
      });
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong while submitting.";
      setSubmitState({ type: "error", message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] items-start">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0c3d86] text-white p-8 sm:p-12 shadow-[0_24px_50px_-15px_rgba(12,61,134,0.3)]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(8,40,91,0.9)_0%,rgba(15,96,178,0.7)_100%)]" />
        <div className="pointer-events-none absolute right-0 top-0 h-64 w-64 translate-x-1/3 -translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(41,185,236,0.2)_0%,transparent_60%)]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-44 w-44 -translate-x-1/4 translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(41,185,236,0.15)_0%,transparent_60%)]" />

        <div className="relative z-10">
          <p className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#9fe9ff] backdrop-blur-md ring-1 ring-white/20 mb-8">
            Get in touch
          </p>
          <h3 className="text-3xl font-extrabold mb-4 text-white">Direct Contact</h3>
          <p className="text-[15px] leading-relaxed text-[#c7def0] mb-10 max-w-md">
            Contact Neomech (T) Ltd. for BANCO FRP panel type water tank inquiries, technical details, and site discussions.
          </p>

          <div className="space-y-6">
            <div className="group flex items-start gap-5">
              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-white/10 ring-1 ring-white/20 transition-all group-hover:bg-[#29b9ec]">
                <Building05 className="size-6 text-white" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#9fe9ff]">Company</span>
                <span className="mt-1 block text-base font-medium text-white">{contactDetails.company}</span>
              </div>
            </div>

            <div className="group flex items-start gap-5">
              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-white/10 ring-1 ring-white/20 transition-all group-hover:bg-[#29b9ec]">
                <Phone className="size-6 text-white" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#9fe9ff]">Phone</span>
                <a href={phoneHref} className="mt-1 block text-base font-medium text-white hover:text-[#9fe9ff] transition-colors">
                  {contactDetails.phone}
                </a>
              </div>
            </div>

            <div className="group flex items-start gap-5">
              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-white/10 ring-1 ring-white/20 transition-all group-hover:bg-[#29b9ec]">
                <Mail01 className="size-6 text-white" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#9fe9ff]">Email</span>
                <a href={emailHref} className="mt-1 block text-base font-medium text-white hover:text-[#9fe9ff] transition-colors break-all">
                  {contactDetails.email}
                </a>
              </div>
            </div>

            <div className="group flex items-start gap-5">
              <div className="mt-1 flex h-12 w-12 shrink-0 items-center justify-center rounded-[1rem] bg-white/10 ring-1 ring-white/20 transition-all group-hover:bg-[#29b9ec]">
                <MarkerPin01 className="size-6 text-white" strokeWidth={1.5} aria-hidden="true" />
              </div>
              <div>
                <span className="block text-[11px] font-semibold uppercase tracking-widest text-[#9fe9ff]">Address</span>
                <span className="mt-1 block text-base font-medium text-white leading-relaxed pr-6">{contactDetails.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-[2.5rem] border border-[#eaf2f8] bg-white p-8 shadow-[0_8px_30px_rgba(12,61,134,0.06)] sm:p-12 lg:ml-6"
      >
        <h3 className="text-3xl font-extrabold text-[#0c3d86]">Send Inquiry</h3>
        <p className="mt-3 text-[15px] leading-relaxed text-slate-600 mb-8 border-b border-[#eaf2f8] pb-8">
          Share your requirement and our team will respond by email for the next discussion.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <TextField name="name" className="space-y-2.5" isRequired>
            <Label className="text-sm font-semibold text-[#0c3d86]">Name</Label>
            <Input className="h-13 w-full rounded-[1rem] border border-slate-200 bg-[#f8fbfe] px-5 outline-none transition-all focus:border-[#0c3d86] focus:bg-white focus:ring-4 focus:ring-[#0c3d86]/10 text-[15px]" />
          </TextField>
          <TextField name="company" className="space-y-2.5" isRequired>
            <Label className="text-sm font-semibold text-[#0c3d86]">Company</Label>
            <Input className="h-13 w-full rounded-[1rem] border border-slate-200 bg-[#f8fbfe] px-5 outline-none transition-all focus:border-[#0c3d86] focus:bg-white focus:ring-4 focus:ring-[#0c3d86]/10 text-[15px]" />
          </TextField>
          <TextField name="phone" className="space-y-2.5" isRequired>
            <Label className="text-sm font-semibold text-[#0c3d86]">Phone</Label>
            <Input className="h-13 w-full rounded-[1rem] border border-slate-200 bg-[#f8fbfe] px-5 outline-none transition-all focus:border-[#0c3d86] focus:bg-white focus:ring-4 focus:ring-[#0c3d86]/10 text-[15px]" />
          </TextField>
          <TextField name="email" type="email" className="space-y-2.5" isRequired>
            <Label className="text-sm font-semibold text-[#0c3d86]">Email</Label>
            <Input className="h-13 w-full rounded-[1rem] border border-slate-200 bg-[#f8fbfe] px-5 outline-none transition-all focus:border-[#0c3d86] focus:bg-white focus:ring-4 focus:ring-[#0c3d86]/10 text-[15px]" />
          </TextField>
          <TextField name="location" className="space-y-2.5 md:col-span-2" isRequired>
            <Label className="text-sm font-semibold text-[#0c3d86]">Project Location</Label>
            <Input className="h-13 w-full rounded-[1rem] border border-slate-200 bg-[#f8fbfe] px-5 outline-none transition-all focus:border-[#0c3d86] focus:bg-white focus:ring-4 focus:ring-[#0c3d86]/10 text-[15px]" />
          </TextField>
          <TextField name="requirement" className="space-y-2.5 md:col-span-2" isRequired>
            <Label className="text-sm font-semibold text-[#0c3d86]">Requirement Summary</Label>
            <TextArea className="min-h-36 w-full rounded-[1rem] border border-slate-200 bg-[#f8fbfe] p-5 outline-none transition-all focus:border-[#0c3d86] focus:bg-white focus:ring-4 focus:ring-[#0c3d86]/10 text-[15px] resize-y" />
          </TextField>
        </div>

        {submitState.type !== "idle" && (
          <p
            className={`mt-6 rounded-xl px-4 py-3 text-sm ${submitState.type === "success"
              ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
              : "bg-red-50 text-red-700 ring-1 ring-red-200"
              }`}
          >
            {submitState.message}
          </p>
        )}

        <AriaButton
          type="submit"
          isDisabled={isSubmitting}
          className="mt-8 inline-flex h-14 w-full items-center justify-center gap-3 rounded-full bg-[#0c3d86] px-8 text-[15px] font-semibold text-white shadow-lg shadow-[#0c3d86]/20 transition-all hover:-translate-y-0.5 hover:bg-[#0f60b2] hover:shadow-xl hover:shadow-[#0c3d86]/30 group sm:w-auto disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
        >
          <MessageChatCircle className="size-5 transition-transform group-hover:scale-110" strokeWidth={2} aria-hidden="true" />
          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
        </AriaButton>
      </form>
    </div>
  );
}
