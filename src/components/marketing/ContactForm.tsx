"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CONTACT_COPY } from "@/copies/contact";

const FORM = CONTACT_COPY.form;

const contactSchema = z.object({
  name: z.string().min(2, { message: FORM.errors.nameRequired }),
  email: z.string().email({ message: FORM.errors.emailInvalid }),
  phone: z
    .string()
    .min(7, { message: FORM.errors.phoneInvalid })
    .regex(/^[+0-9\s()-]+$/, { message: FORM.errors.phoneInvalid }),
  interest: z.enum(["new-install", "amc", "modernization", "other"]),
  message: z.string().min(10, { message: FORM.errors.messageRequired }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { interest: "new-install" },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 700));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-brass-200 bg-brass-50 p-8 text-steel-900">
        <h3 className="font-heading text-2xl font-semibold tracking-tight">{FORM.successHeading}</h3>
        <p className="mt-2 text-sm leading-relaxed text-steel-700">{FORM.successBody}</p>
      </div>
    );
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 rounded-2xl border border-steel-100 bg-card p-8 shadow-sm"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">{FORM.nameLabel}</Label>
          <Input
            id="name"
            type="text"
            autoComplete="name"
            placeholder={FORM.namePlaceholder}
            aria-invalid={Boolean(errors.name)}
            {...register("name")}
            className="block w-full"
          />
          {errors.name ? <p className="text-xs text-destructive">{errors.name.message}</p> : null}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="email">{FORM.emailLabel}</Label>
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder={FORM.emailPlaceholder}
            aria-invalid={Boolean(errors.email)}
            {...register("email")}
            className="block w-full"
          />
          {errors.email ? <p className="text-xs text-destructive">{errors.email.message}</p> : null}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="phone">{FORM.phoneLabel}</Label>
          <Input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder={FORM.phonePlaceholder}
            aria-invalid={Boolean(errors.phone)}
            {...register("phone")}
            className="block w-full"
          />
          {errors.phone ? <p className="text-xs text-destructive">{errors.phone.message}</p> : null}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="interest">{FORM.interestLabel}</Label>
          <select
            id="interest"
            {...register("interest")}
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {FORM.interestOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">{FORM.messageLabel}</Label>
        <Textarea
          id="message"
          rows={5}
          placeholder={FORM.messagePlaceholder}
          aria-invalid={Boolean(errors.message)}
          {...register("message")}
        />
        {errors.message ? <p className="text-xs text-destructive">{errors.message.message}</p> : null}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        <Send aria-hidden className="size-4" />
        {isSubmitting ? FORM.submitting : FORM.submit}
      </Button>
    </form>
  );
}
