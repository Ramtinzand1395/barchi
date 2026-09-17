import Image from "next/image";

type BrandLogoProps = {
  className?: string;
  eager?: boolean;
};

export function BrandLogo({ className = "", eager = false }: BrandLogoProps) {
  return (
    <Image
      className={`brand-logo-image ${className}`.trim()}
      src="/images/brand/barchi-horizontal.png"
      alt="بارچی؛ تأمین ساده‌تر، کسب‌وکار قوی‌تر"
      width={462}
      height={242}
      sizes="160px"
      loading={eager ? "eager" : "lazy"}
      fetchPriority={eager ? "high" : undefined}
    />
  );
}
