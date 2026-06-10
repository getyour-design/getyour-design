import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "../components/PageHero";

export const metadata: Metadata = {
  title: "Trade Program",
  description:
    "GETYOUR.DESIGN trade program prototype for interior designers, architects, hospitality studios, and procurement teams.",
};

const audiences = ["Interior Designers", "Architects", "Hospitality Studios", "Procurement Teams"];
const benefits = ["Project sourcing support", "Reserved editions", "Material direction", "Consolidated inquiry flow", "Custom and commission routing", "Trade-ready documentation"];

export default function TradePage() {
  return (
    <main>
      <PageHero
        eyebrow="Trade"
        title="A future trade desk for design professionals."
        description="The Phase-0 trade page defines audiences, benefits, and inquiry paths before authentication, quoting, or checkout workflows are introduced."
      />
      <section className="section-pad bg-[#fbfaf6]">
        <div className="mx-auto grid max-w-[1540px] gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <article className="border hairline bg-[#11100f] p-8 text-[#fbfaf6] lg:p-12">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#bdb4a7]">Who it is for</p>
            <div className="mt-8 grid gap-4">
              {audiences.map((audience) => (
                <p className="border-b border-white/20 pb-4 serif text-3xl" key={audience}>{audience}</p>
              ))}
            </div>
          </article>
          <article className="border hairline bg-[#f1ede4] p-8 lg:p-12">
            <p className="text-[0.68rem] uppercase tracking-[0.24em] text-[#777068]">Benefits</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {benefits.map((benefit) => (
                <div className="border-t border-black/20 pt-4 text-sm leading-7 text-[#4d4841]" key={benefit}>{benefit}</div>
              ))}
            </div>
            <h2 className="serif mt-12 max-w-2xl text-5xl leading-none">Build project lists before commerce infrastructure exists.</h2>
            <Link className="mt-8 inline-block border border-black bg-black px-7 py-4 text-xs uppercase tracking-[0.2em] text-white" href="/contact">
              Send trade inquiry
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
