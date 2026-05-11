import Link from "next/link";

const footerColumns = [
  {
    title: "Perusahaan",
    href: "/about",
    links: [
      { label: "Tentang", href: "/about" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Gabung",
    href: "/services",
    links: [
      { label: "Seller", href: "/services" },
      { label: "Buyer", href: "/services" },
    ],
  },
  {
    title: "Karir",
    href: "/career",
    links: [
      { label: "Pelajar", href: "/career/student" },
      { label: "Professional", href: "/career/professional" },
    ],
  },
  {
    title: "Hubungi Kami",
    href: "/contact",
    links: [
      { label: "Bantuan", href: "/contact" },
      { label: "Lokasi Kami", href: "/contact" },
    ],
  },
  {
    title: "Syarat dan Ketentuan",
    href: "/terms",
    links: [
      { label: "Pemberitahuan Privasi", href: "/privacy" },
      { label: "Frequently Asked Questions", href: "/faq" },
    ],
    wide: true,
    boldItems: true,
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#F0F2F8] py-[42px]">
      {/* GARIS ATAS FULL SAMPAI UJUNG */}
      <div className="w-full border-t-2 border-[#2176B5]" />

      {/* ISI FOOTER TETAP DI TENGAH */}
      <div className="mx-auto grid max-w-[1118px] grid-cols-[180px_1fr] items-start gap-[40px] px-[42px] py-[46px]">
        {/* LOGO */}
        <div className="flex flex-col items-start justify-start gap-2">
          <Link
            href="/"
            className="logo-font select-none text-center text-[42px] leading-[50px] tracking-[0.12em] text-[#2176B5] no-underline transition hover:text-[#FE7F2D]"
          >
            2nd
            <br />
            Time
          </Link>

          <div className="flex items-center gap-1 text-[#2176B5]">
            <span className="select-none text-[12px] font-medium leading-[18px]">
              ©2026
            </span>
            <span className="select-none text-[10px] font-semibold leading-[15px]">
              Kelompok 1 UT x VINIX7
            </span>
          </div>
        </div>

        {/* FOOTER MENU */}
        <div className="grid grid-cols-5 gap-[42px]">
          {footerColumns.map((column) => (
            <FooterColumn
              key={column.title}
              title={column.title}
              href={column.href}
              links={column.links}
              wide={column.wide}
              boldItems={column.boldItems}
            />
          ))}
        </div>
      </div>

      {/* GARIS BAWAH FULL SAMPAI UJUNG */}
      <div className="w-full border-t-2 border-[#2176B5]" />
    </footer>
  );
}

function FooterColumn({ title, href, links, wide = false, boldItems = false }) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        wide ? "min-w-[230px]" : "min-w-[100px]"
      }`}
    >
      {/* JUDUL MENU INTERAKTIF */}
      <Link
        href={href}
        className="m-0 w-fit cursor-pointer select-none text-[16px] font-semibold leading-[24px] text-[#2176B5] no-underline transition hover:text-[#FE7F2D] hover:underline"
      >
        {title}
      </Link>

      <div className="flex flex-col gap-1">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`w-fit cursor-pointer select-none text-[16px] leading-[24px] text-[#2176B5] no-underline transition hover:text-[#FE7F2D] hover:underline ${
              boldItems ? "font-semibold" : "font-normal"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}