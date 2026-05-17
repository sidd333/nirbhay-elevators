import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section tone="default" spacing="lg">
      <Container width="md" className="text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-brass-600">404</p>
        <h1 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-steel-950 sm:text-5xl">
          This floor doesn&apos;t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-lg leading-relaxed text-steel-600">
          The page you&apos;re looking for isn&apos;t in the directory. Try the lobby.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/products">Browse products</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}
