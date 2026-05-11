import { notFound } from "next/navigation";
import ProductDetail from "../../components/ProductDetail";
import { allMarketplaceProducts, featuredProduct } from "../../data";

const NOT_FOUND_IMAGE = "/marketplace/not-found.jpg";

function inferCategory(title = "") {
  const lowerTitle = title.toLowerCase();

  if (
    lowerTitle.includes("kaos") ||
    lowerTitle.includes("kemeja") ||
    lowerTitle.includes("blouse") ||
    lowerTitle.includes("polo")
  ) {
    return "Baju";
  }

  if (lowerTitle.includes("celana")) return "Celana";
  if (lowerTitle.includes("jaket")) return "Jaket";
  if (lowerTitle.includes("topi")) return "Topi";
  if (lowerTitle.includes("poco") || lowerTitle.includes("handphone")) {
    return "Handphone";
  }

  return "Kategori";
}

function normalizeCondition(condition = "Baik") {
  if (condition === "Baik") {
    return "Baik, tanpa kerusakan";
  }

  return condition;
}

function getProductBySlug(slug) {
  const foundProduct = allMarketplaceProducts.find(
    (product) => product.slug === slug
  );

  if (!foundProduct) {
    return null;
  }

  return {
    ...featuredProduct,
    ...foundProduct,
    category: foundProduct.category || inferCategory(foundProduct.title),
    stock: foundProduct.stock || 1,
    condition: normalizeCondition(foundProduct.condition),
    rating: foundProduct.rating || "4,7 (89)",
    joined: foundProduct.joined || "11 bulan lalu",
    products: foundProduct.products || "8 Produk",

    // Thumbnail detail:
    // kotak 1 = foto produk yang dipilih
    // kotak 2-4 = not-found.jpg
    thumbnails: [
      foundProduct.image,
      NOT_FOUND_IMAGE,
      NOT_FOUND_IMAGE,
      NOT_FOUND_IMAGE,
    ],
  };
}

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

export function generateStaticParams() {
  return allMarketplaceProducts.map((product) => ({
    slug: product.slug,
  }));
}