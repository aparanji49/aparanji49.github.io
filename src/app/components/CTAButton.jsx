import Link from "next/link";

export default function CTAButton({ text, href }) {
  return (
    <div className="cta-container">
      <Link href={href} className="cta-button">
        <span className="cta-text">{text}</span>
        <span className="cta-arrow">→</span>
      </Link>
    </div>
  );
}
