import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

interface FaqProps {
  readonly items: readonly FaqItem[];
}

export function Faq({ items }: FaqProps) {
  return (
    <Accordion type="single" collapsible className="w-full divide-y divide-steel-100 rounded-2xl border border-steel-100 bg-card">
      {items.map((item, idx) => (
        <AccordionItem key={item.question} value={`item-${idx}`} className="border-0">
          <AccordionTrigger className="px-6 py-5 text-left font-heading text-base font-semibold text-steel-950 hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-5 text-sm leading-relaxed text-steel-600">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
