import Link from "next/link"

export default function Home() {
  return (
    <main>
      <section className="py-12 text-center">
        <h2 className="text-4xl">Welcome to Next.js SaaS Widget</h2>
        <Link
          className="mt-6 block text-base text-primary underline"
          href="/docs"
        >
          Get Started
        </Link>
      </section>
    </main>
  )
}
