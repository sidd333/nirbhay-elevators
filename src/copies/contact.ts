export const CONTACT_COPY = {
  metaTitle: "Contact Nirbhay Elevators",
  metaDescription:
    "Talk to Nirbhay Elevators — quotes, service requests, AMC enquiries. Pune HQ, pan-India service.",
  hero: {
    eyebrow: "Contact",
    title: "Talk to our team",
    subtitle:
      "Send us your shaft drawings, request a service visit, or just ask a question — we respond inside one business day.",
  },
  form: {
    heading: "Send us a message",
    nameLabel: "Full name",
    namePlaceholder: "Ravi Kumar",
    emailLabel: "Email",
    emailPlaceholder: "ravi@example.com",
    phoneLabel: "Phone",
    phonePlaceholder: "+91 98765 43210",
    interestLabel: "I'm interested in",
    interestOptions: [
      { value: "new-install", label: "New installation" },
      { value: "amc", label: "AMC / service" },
      { value: "modernization", label: "Modernization" },
      { value: "other", label: "Something else" },
    ],
    messageLabel: "Message",
    messagePlaceholder: "Tell us about your building or your service need.",
    submit: "Send message",
    submitting: "Sending…",
    successHeading: "Thanks — we'll be in touch.",
    successBody: "A pre-sales engineer will reply inside one business day.",
    errors: {
      nameRequired: "Please tell us your name.",
      emailInvalid: "Enter a valid email address.",
      phoneInvalid: "Enter a valid phone number.",
      messageRequired: "A short message helps us route your request.",
    },
  },
  info: {
    headquartersHeading: "Headquarters",
    hoursHeading: "Hours",
    salesHeading: "Sales",
    serviceHeading: "Service helpline",
  },
} as const;
