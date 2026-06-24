import { socialLinks } from "../data/social";

type SocialLinksProps = {
  className?: string;
};

export function SocialLinks({ className = "" }: SocialLinksProps) {
  const iconClassName = "h-4 w-4";

  const renderIcon = (label: string) => (
    <>
      {label === "Instagram" ? (
        <svg aria-hidden="true" className={iconClassName} fill="none" viewBox="0 0 24 24">
          <rect height="16" rx="4" stroke="currentColor" strokeWidth="1.6" width="16" x="4" y="4" />
          <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="16.8" cy="7.2" fill="currentColor" r="1" />
        </svg>
      ) : null}
      {label === "Pinterest" ? (
        <svg aria-hidden="true" className={iconClassName} fill="none" viewBox="0 0 24 24">
          <path
            d="M10.7 20.2c.3-1.3.7-2.7 1-4 .4.8 1.3 1.4 2.5 1.4 3.2 0 5.3-2.9 5.3-6.4 0-3.3-2.7-5.9-6.8-5.9-4.8 0-7.4 3.2-7.4 6.6 0 1.6.6 3.1 2 3.7.2.1.4 0 .5-.3l.2-.9c.1-.3 0-.4-.2-.7-.4-.5-.7-1.1-.7-2 0-2.4 1.9-4.7 5.2-4.7 2.8 0 4.7 1.8 4.7 4.3 0 2.8-1.4 4.8-3.3 4.8-1.1 0-1.9-.9-1.6-2l.7-2.7c.2-1-.1-1.8-1.1-1.8-1.3 0-2.3 1.3-2.3 3.1 0 1.1.4 1.9.4 1.9l-1.5 6.2"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      ) : null}
      {label === "LinkedIn" ? (
        <svg aria-hidden="true" className={iconClassName} fill="none" viewBox="0 0 24 24">
          <path d="M6.5 10v8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
          <path d="M11 18v-4.7c0-2 1.3-3.3 3.1-3.3 1.9 0 3.4 1.2 3.4 3.7V18" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
          <path d="M11 10v8" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" />
          <circle cx="6.5" cy="6.7" fill="currentColor" r="1.2" />
          <rect height="16" rx="2" stroke="currentColor" strokeWidth="1.3" width="16" x="4" y="4" />
        </svg>
      ) : null}
    </>
  );

  return (
    <div className={className}>
      {socialLinks.map((item) =>
        item.href ? (
          <a
            aria-label={item.label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border hairline bg-[#f7f7f5] text-[#353b3e] transition hover:bg-[#f8f8f6] hover:text-black"
            href={item.href}
            key={item.label}
            rel="noopener noreferrer"
            target="_blank"
            title={item.label}
          >
            {renderIcon(item.label)}
          </a>
        ) : (
          <button
            aria-label={item.label}
            className="inline-flex h-10 w-10 cursor-default items-center justify-center rounded-full border hairline bg-[#f7f7f5] text-[#353b3e] transition hover:bg-[#f8f8f6] hover:text-black"
            key={item.label}
            title={item.label}
            type="button"
          >
            {renderIcon(item.label)}
          </button>
        ),
      )}
    </div>
  );
}
