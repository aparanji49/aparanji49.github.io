import Link from "next/link";

export default function CTAButton({
  text,
  href,
  variant = "primary",
  download,
  external,
}) {
  const className =
    variant === "secondary"
      ? "cta-button cta-button--secondary"
      : "cta-button";

  const isExternal =
    external || (typeof href === "string" && /^https?:\/\//i.test(href));

  return (
    <div className="cta-container">
      <Link
        href={href}
        className={className}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...(!isExternal && download ? { download: true } : {})}
      >
        <span className="cta-text">{text}</span>
        <span className="cta-arrow">→</span>
      </Link>
    </div>
  );
}
