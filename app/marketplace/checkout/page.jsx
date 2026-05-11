import CheckoutClient from "./CheckoutClient";
import { allMarketplaceProducts, checkoutItems } from "../data";

function normalizeCondition(condition) {
  if (!condition) return "Baik";
  if (condition.toLowerCase().includes("baik")) return "Baik";
  return condition;
}

export default async function CheckoutPage({ searchParams }) {
  const resolvedSearchParams = await Promise.resolve(searchParams);
  const productSlug = resolvedSearchParams?.product;

  const selectedProduct = productSlug
    ? allMarketplaceProducts.find((item) => item.slug === productSlug)
    : null;

  const items = selectedProduct
    ? [
        {
          id: selectedProduct.slug,
          slug: selectedProduct.slug,
          title: selectedProduct.title,
          seller: selectedProduct.seller,
          price: selectedProduct.price,
          image: selectedProduct.image,
          condition: normalizeCondition(selectedProduct.condition),
        },
      ]
    : checkoutItems.map((item) => ({
        ...item,
        slug: item.slug || item.id,
        condition: normalizeCondition(item.condition),
      }));

  return <CheckoutClient initialItems={items} />;
}