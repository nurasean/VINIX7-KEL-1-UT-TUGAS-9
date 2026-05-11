import Link from "next/link";

const menuLinks = [
  { label: "Beranda", href: "/marketplace" },
  { label: "Tentang", href: "/about" },
];

const categoryLeftLinks = [
  { label: "Semua Kategori", href: "/marketplace" },
  { label: "Gadget", href: "/marketplace?category=gadget" },
  { label: "Handphone", href: "/marketplace?category=handphone" },
  { label: "Jam", href: "/marketplace?category=jam" },
  { label: "Laptop", href: "/marketplace?category=laptop" },
];

const categoryRightLinks = [
  { label: "Baju", href: "/marketplace?category=baju" },
  { label: "Celana", href: "/marketplace?category=celana" },
  { label: "Jaket", href: "/marketplace?category=jaket" },
  { label: "Topi", href: "/marketplace?category=topi" },
  { label: "Sepatu", href: "/marketplace?category=sepatu" },
];

const contactLinks = [
  { label: "Email : no@gmail.com", href: "mailto:no@gmail.com" },
  { label: "Telp  : 08981234567", href: "tel:08981234567" },
];

export default function MarketplaceFooter() {
  return (
    <footer className="flex h-[312px] w-full items-center justify-center gap-[80px] bg-[#08497A] p-[42px] text-[#F0F2F8]">
      {/* LOGO AREA */}
      <section className="flex h-[212px] w-[217.88px] flex-1 flex-col items-center justify-center gap-[24px] text-center">
        <Link
          href="/marketplace"
          className="logo-font h-[100px] w-[106px] select-none text-center text-[41.6667px] font-normal leading-[50px] tracking-[0.12em] text-[#F0F2F8] no-underline transition hover:text-[#FE7F2D]"
        >
          2nd
          <br />
          Time
        </Link>

        <p className="m-0 h-[40px] w-[217.88px] text-center text-[12px] font-normal leading-[10px] tracking-[-0.019em] text-[#F0F2F8]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum
          tellus turpis, ac placerat risus auctor et.
        </p>

        <div className="flex h-[24px] w-[195px] items-center gap-[8px]">
          <span className="h-[24px] w-[22px] text-center text-[16px] font-medium leading-[24px] tracking-[-0.011em] text-[#F0F2F8]">
            ©
          </span>

          <span className="h-[18px] w-[165px] text-[12px] font-semibold leading-[18px] tracking-[-0.019em] text-[#F0F2F8]">
            2026 Kelompok 1 UT x VINIX7
          </span>
        </div>
      </section>

      <FooterDivider />

      {/* MENU */}
      <FooterColumn title="Menu" href="/marketplace">
        <div className="flex w-[69px] flex-col items-start gap-[16px]">
          {menuLinks.map((item) => (
            <FooterLink key={item.label} href={item.href}>
              {item.label}
            </FooterLink>
          ))}
        </div>
      </FooterColumn>

      <FooterDivider />

      {/* KATEGORI */}
      <FooterColumn title="Kategori" href="/marketplace">
        <div className="flex h-[184px] w-[220px] items-start gap-[32px]">
          <div className="flex w-[129px] flex-col items-start gap-[16px]">
            {categoryLeftLinks.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </div>

          <div className="flex w-[59px] flex-col items-start gap-[16px]">
            {categoryRightLinks.map((item) => (
              <FooterLink key={item.label} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </div>
        </div>
      </FooterColumn>

      <FooterDivider />

      {/* KONTAK */}
      <FooterColumn title="Kontak" href="/contact">
        <div className="flex w-[178px] flex-col items-start gap-[16px]">
          {contactLinks.map((item) => (
            <FooterLink key={item.label} href={item.href}>
              {item.label}
            </FooterLink>
          ))}
        </div>
      </FooterColumn>
    </footer>
  );
}

function FooterDivider() {
  return <div className="h-[228px] w-[2px] shrink-0 bg-[#F0F2F8]" />;
}

function FooterColumn({ title, href, children }) {
  return (
    <section className="flex h-[228px] w-[217.88px] flex-1 flex-col items-start gap-[16px]">
      <Link
        href={href}
        className="h-[30px] w-fit cursor-pointer select-none text-[20px] font-semibold leading-[30px] text-[#F0F2F8] no-underline transition hover:text-[#FE7F2D] hover:underline"
      >
        {title}
      </Link>

      {children}
    </section>
  );
}

function FooterLink({ href, children }) {
  const isExternalAction = href.startsWith("mailto:") || href.startsWith("tel:");

  const className =
    "w-fit cursor-pointer select-none text-[16px] font-normal leading-[24px] text-[#F0F2F8] no-underline transition hover:text-[#FE7F2D] hover:underline";

  if (isExternalAction) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}