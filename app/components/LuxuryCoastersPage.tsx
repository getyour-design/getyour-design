import Image from "next/image";
import type { Locale } from "../lib/i18n";

type LuxuryCoastersPageProps = {
  locale: Locale;
};

const imageBasePath = "/images/coasters";
const heroImage = `${imageBasePath}/hero.jpg`;
const productImage = `${imageBasePath}/product.jpg`;
const materialImage = `${imageBasePath}/material.jpg`;
const packagingImage = `${imageBasePath}/packaging.jpg`;

const ctaClassName =
  "inline-flex border border-[#7A1028] bg-[#7A1028] px-7 py-4 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-[#651022] hover:text-white focus:bg-[#7A1028] focus:text-white active:bg-[#651022] active:text-white";

const copy = {
  en: {
    eyebrow: "54 Couture",
    title: "Handcrafted Luxury Cowhide Coasters",
    intro: "Handcrafted in Germany. Made from genuine European cowhide.",
    request: "Request Availability",
    trustItems: [
      "Handcrafted in Germany",
      "Genuine European Cowhide",
      "Natural, Unique, Unmistakable",
      "Gift-Ready Presentation",
    ],
    editionEyebrow: "Rubin Edition",
    editionTitle: "54 COUTURE Rubin Edition",
    editionText:
      "A handcrafted set of six luxury cowhide coasters designed for refined interiors, elegant table settings and gifting.",
    materialTitle: "Genuine European Cowhide",
    materialText:
      "Each coaster is cut from genuine European cowhide selected for its natural depth, tactile character and quiet elegance. The material is shaped by hand in small batches, preserving subtle variations that make every set singular.",
    presentationEyebrow: "Presentation",
    presentationTitle: "Presented In A Luxury Gift Box",
    presentationText:
      "The Rubin Edition arrives in a refined gift box created for considered interiors, private hosting and memorable gifting. Understated, protective and ready to present.",
    storyEyebrow: "Brand Story",
    storyTitle: "About 54 COUTURE",
    storyText:
      "54 COUTURE creates edited luxury objects for interiors with a focus on material presence, European craft and a restrained design language shaped in Germany.",
    finalTitle: "Request Availability",
    finalText:
      "For availability, gifting requests and international shipping details, contact the GETYOUR.DESIGN team.",
    finalCta: "Contact Us",
    heroAlt: "Luxury European cowhide coasters",
    productAlt: "54 COUTURE Rubin Edition cowhide coaster set",
    materialAlt: "European cowhide material detail",
    packagingAlt: "Luxury coasters gift box presentation",
  },
  de: {
    eyebrow: "54 Couture",
    title: "Handgefertigte Luxus-Untersetzer aus Kuhfell",
    intro: "Handgefertigt in Deutschland. Aus echtem europäischem Kuhfell.",
    request: "Verfügbarkeit anfragen",
    trustItems: [
      "Handgefertigt in Deutschland",
      "Echtes europäisches Kuhfell",
      "Natürlich, einzigartig, unverwechselbar",
      "Geschenkfertige Präsentation",
    ],
    editionEyebrow: "Rubin Edition",
    editionTitle: "54 COUTURE Rubin Edition",
    editionText:
      "Ein handgefertigtes Set aus sechs Luxury Coasters aus Kuhfell für hochwertige Interieurs, elegante Table Settings und besondere Geschenke.",
    materialTitle: "Echtes europäisches Kuhfell",
    materialText:
      "Jeder Untersetzer wird aus echtem europäischem Kuhfell gefertigt, ausgewählt für natürliche Tiefe, taktile Präsenz und ruhige Eleganz. Das Material wird in kleinen Serien von Hand verarbeitet; feine Variationen machen jedes Set einzigartig.",
    presentationEyebrow: "Präsentation",
    presentationTitle: "In einer hochwertigen Geschenkbox präsentiert",
    presentationText:
      "Die Rubin Edition kommt in einer veredelten Geschenkbox, entwickelt für besondere Interieurs, private Gastgeber und erinnerungswürdige Geschenke. Zurückhaltend, schützend und bereit zur Übergabe.",
    storyEyebrow: "Brand Story",
    storyTitle: "Über 54 COUTURE",
    storyText:
      "54 COUTURE entwickelt kuratierte Luxusobjekte für Interieurs mit Fokus auf Materialpräsenz, europäisches Handwerk und eine zurückhaltende Designsprache aus Deutschland.",
    finalTitle: "Verfügbarkeit anfragen",
    finalText:
      "Für Verfügbarkeit, Geschenk-Anfragen und internationale Versanddetails kontaktieren Sie das GETYOUR.DESIGN Team.",
    finalCta: "Kontakt aufnehmen",
    heroAlt: "Luxus-Untersetzer aus europäischem Kuhfell",
    productAlt: "54 COUTURE Rubin Edition Kuhfell-Untersetzer Set",
    materialAlt: "Detail von europäischem Kuhfell",
    packagingAlt: "Geschenkbox-Präsentation der Luxury Coasters",
  },
};

function ImageSlot({
  src,
  label,
  priority = false,
  ratioClassName,
  sizes = "(min-width: 1024px) 60vw, 100vw",
  className = "",
}: {
  src: string;
  label: string;
  priority?: boolean;
  ratioClassName: string;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${ratioClassName} ${className}`}>
      <Image
        alt={label}
        className="object-cover"
        fill
        priority={priority}
        sizes={sizes}
        src={src}
      />
    </div>
  );
}

export function LuxuryCoastersPage({ locale }: LuxuryCoastersPageProps) {
  const content = copy[locale === "de" ? "de" : "en"];

  return (
    <main className="bg-[#f3f2ef] text-[#10100f]">
      <section className="border-b hairline px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1540px] gap-14 lg:grid-cols-[0.38fr_0.62fr] lg:items-center xl:gap-20">
          <div className="max-w-[30rem]">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#6f1d2d]">{content.eyebrow}</p>
            <h1 className="serif mt-5 text-balance text-3xl font-normal leading-[1.08] tracking-[0.08em] text-[#10100f] md:text-4xl">
              {content.title}
            </h1>
            <p className="mt-7 max-w-[28rem] text-base leading-8 text-[#353839] sm:text-lg">
              {content.intro}
            </p>
            <a
              className={`mt-11 ${ctaClassName}`}
              href="mailto:info@getyour.design"
              style={{ color: "#FFFFFF" }}
            >
              {content.request}
            </a>
          </div>
          <div className="border border-[#d9d4cc] bg-[#f8f6f2] p-[18px] sm:p-6 lg:-mr-10">
            <ImageSlot
              label={content.heroAlt}
              priority
              ratioClassName="aspect-[16/10]"
              sizes="(min-width: 1024px) 62vw, 100vw"
              src={heroImage}
            />
          </div>
        </div>
      </section>

      <section className="border-b hairline bg-[#f8f8f6] px-5 py-6 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1540px] gap-4 text-[0.68rem] uppercase tracking-[0.2em] text-[#4c4f50] sm:grid-cols-2 lg:grid-cols-4">
          {content.trustItems.map((item) => (
            <p key={item}>✓ {item}</p>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1340px] gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-end">
          <ImageSlot
            label={content.productAlt}
            ratioClassName="aspect-[14/9]"
            sizes="(min-width: 1024px) 55vw, 100vw"
            src={productImage}
          />
          <div className="border-t hairline pt-8">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#6f1d2d]">{content.editionEyebrow}</p>
            <div className="mt-4 flex items-start justify-between gap-6">
              <h2 className="serif max-w-[28rem] text-3xl leading-tight tracking-[0.08em] text-[#10100f] sm:text-4xl">
                {content.editionTitle}
              </h2>
              <p className="shrink-0 text-lg text-[#6f1d2d]">98 €</p>
            </div>
            <p className="mt-7 max-w-[34rem] text-base leading-8 text-[#353839]">
              {content.editionText}
            </p>
          </div>
        </div>
      </section>

      <section className="border-y hairline bg-[#f8f8f6] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1340px] gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-center">
          <div>
            <h2 className="serif text-balance text-3xl leading-tight tracking-[0.08em] text-[#10100f] sm:text-4xl">
              {content.materialTitle}
            </h2>
            <p className="mt-7 max-w-[34rem] border-l border-[#9b7b4d]/45 pl-6 text-base leading-8 text-[#353839]">
              {content.materialText}
            </p>
          </div>
          <ImageSlot
            label={content.materialAlt}
            ratioClassName="aspect-[14/9]"
            sizes="(min-width: 1024px) 58vw, 100vw"
            src={materialImage}
          />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1340px] gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#6f1d2d]">{content.presentationEyebrow}</p>
            <h2 className="serif mt-4 text-balance text-3xl leading-tight tracking-[0.08em] text-[#10100f] sm:text-4xl">
              {content.presentationTitle}
            </h2>
            <p className="mt-7 max-w-[35rem] text-base leading-8 text-[#353839]">
              {content.presentationText}
            </p>
          </div>
          <ImageSlot
            label={content.packagingAlt}
            ratioClassName="aspect-[14/9]"
            sizes="(min-width: 1024px) 50vw, 100vw"
            src={packagingImage}
          />
        </div>
      </section>

      <section className="border-y hairline bg-[#f8f8f6] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[900px] text-center">
          <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#6f1d2d]">{content.storyEyebrow}</p>
          <h2 className="serif mt-4 text-3xl leading-tight tracking-[0.08em] text-[#10100f] sm:text-4xl">
            {content.storyTitle}
          </h2>
          <p className="mx-auto mt-7 max-w-[42rem] text-base leading-8 text-[#353839]">
            {content.storyText}
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[980px] border hairline bg-[#f8f8f6] px-6 py-12 text-center sm:px-10 lg:px-16 lg:py-16">
          <h2 className="serif text-3xl leading-tight tracking-[0.08em] text-[#10100f] sm:text-4xl">
            {content.finalTitle}
          </h2>
          <p className="mx-auto mt-5 max-w-[34rem] text-base leading-8 text-[#353839]">
            {content.finalText}
          </p>
          <a
            className={`mt-9 ${ctaClassName}`}
            href="mailto:info@getyour.design"
            style={{ color: "#FFFFFF" }}
          >
            {content.finalCta}
          </a>
        </div>
      </section>
    </main>
  );
}
