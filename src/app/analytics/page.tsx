import { Analytics } from "@/components/analytics";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="w-1/2">
        <Analytics.Input />

        <Analytics.List />

        <Analytics.Button />
      </section>
    </main>
  );
}
