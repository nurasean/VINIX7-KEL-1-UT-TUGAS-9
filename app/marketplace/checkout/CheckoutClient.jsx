"use client";

import Image from "next/image";
import { useActionState, useOptimistic, useState, useTransition } from "react";
import { useFormStatus } from "react-dom";
import { Minus, Plus, Tag, Trash2 } from "lucide-react";
import {
  checkoutAction,
  removeCheckoutItemAction,
} from "../actions";
import MarketplaceShell from "../components/MarketplaceShell";
import { formatRupiah } from "../data";

const initialCheckoutState = {
  success: false,
  message: "",
  errors: {},
};

export default function CheckoutClient({ initialItems }) {
  const [quantities, setQuantities] = useState(() => {
    const initialQuantities = {};

    initialItems.forEach((item) => {
      initialQuantities[item.id] = 1;
    });

    return initialQuantities;
  });

  const [state, formAction] = useActionState(
    checkoutAction,
    initialCheckoutState
  );

  const [isPending, startTransition] = useTransition();

  const [cartItems, setCartItems] = useState(initialItems);

const [optimisticItems, updateOptimisticItems] = useOptimistic(
  cartItems,
  (currentItems, action) => {
    if (action.type === "remove") {
      return currentItems.filter((item) => item.id !== action.id);
    }

    return currentItems;
  }
);

  const total = optimisticItems.reduce((sum, item) => {
    const quantity = quantities[item.id] || 1;
    return sum + item.price * quantity;
  }, 0);

  const totalQuantity = optimisticItems.reduce((sum, item) => {
    return sum + (quantities[item.id] || 1);
  }, 0);

  const productNames = optimisticItems.map((item) => item.title).join(", ");

  function handleIncrease(itemId) {
    setQuantities((current) => ({
      ...current,
      [itemId]: (current[itemId] || 1) + 1,
    }));
  }

  function handleDecrease(itemId) {
    setQuantities((current) => ({
      ...current,
      [itemId]: Math.max((current[itemId] || 1) - 1, 1),
    }));
  }

  function handleDeleteItem(item) {
  startTransition(async () => {
    updateOptimisticItems({
      type: "remove",
      id: item.id,
    });

    await removeCheckoutItemAction(item.slug || item.id);

    setCartItems((currentItems) =>
      currentItems.filter((currentItem) => currentItem.id !== item.id)
    );
  });
}

  return (
    <MarketplaceShell>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          padding: "42px",
          gap: "42px",
          width: "100%",
          minWidth: "1440px",
          minHeight: "552px",
          background: "#F0F2F8",
        }}
      >
        {/* LEFT CARD - PRODUK */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "20px 24px",
            gap: "32px",
            width: "657px",
            minHeight: "196px",
            background: "#FFFFFF",
            borderRadius: "20px",
            flex: "1",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              width: "609px",
            }}
          >
            {optimisticItems.length > 0 ? (
              optimisticItems.map((item, index) => (
                <CartItem
                  key={item.id}
                  item={item}
                  quantity={quantities[item.id] || 1}
                  showDivider={index !== optimisticItems.length - 1}
                  onIncrease={() => handleIncrease(item.id)}
                  onDecrease={() => handleDecrease(item.id)}
                  onDelete={() => handleDeleteItem(item)}
                  isDeleting={isPending}
                />
              ))
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "609px",
                  height: "124px",
                  color: "#D20B0B",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                }}
              >
                Produk sudah dihapus dari checkout.
              </div>
            )}
          </div>
        </section>

        {/* RIGHT CARD - ORDER */}
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
            padding: "20px 24px",
            gap: "24px",
            width: "657px",
            minHeight: "468px",
            background: "#FFFFFF",
            borderRadius: "20px",
            flex: "1",
          }}
        >
          <form
            action={formAction}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "24px",
              width: "609px",
              minHeight: "428px",
            }}
          >
            <input type="hidden" name="total" value={total} />
            <input type="hidden" name="product" value={productNames} />
            <input type="hidden" name="quantity" value={totalQuantity} />

            <h1
              style={{
                margin: 0,
                width: "73px",
                height: "38px",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "25px",
                lineHeight: "38px",
                display: "flex",
                alignItems: "center",
                color: "#2176B5",
              }}
            >
              Order
            </h1>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: 0,
                gap: "20px",
                width: "609px",
              }}
            >
              <OrderSelectRow
                label="Metode Pembayaran"
                name="payment"
                error={state.errors?.payment?.[0]}
              />

              <OrderAddressRow
                label="Alamat"
                name="address"
                error={state.errors?.address?.[0]}
              />

              <OrderRow label="Total" value={formatRupiah(total)} />
              <OrderRow label="Diskon" value="Rp 0,00" />
              <OrderRow label="Ongkos Kirim" value="Rp 0,00" />

              <div
                style={{
                  width: "609px",
                  height: "0px",
                  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 0,
                  gap: "24px",
                  width: "609px",
                  height: "38px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#2176B5",
                  }}
                >
                  Total
                </span>

                <span
                  style={{
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "25px",
                    lineHeight: "38px",
                    color: "#4B95C3",
                    textAlign: "right",
                    whiteSpace: "nowrap",
                  }}
                >
                  {formatRupiah(total)}
                </span>
              </div>
            </div>

            {/* PROMO */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
                gap: "12px",
                width: "609px",
                height: "56px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: "12px 16px",
                  gap: "12px",
                  width: "485px",
                  height: "48px",
                  background: "#F0F2F8",
                  borderRadius: "62px",
                  flex: "1",
                }}
              >
                <Tag
                  size={24}
                  strokeWidth={2}
                  style={{ color: "rgba(0, 0, 0, 0.4)" }}
                />

                <input
                  name="promoCode"
                  placeholder="Kode Promo"
                  style={{
                    width: "100%",
                    height: "24px",
                    border: "none",
                    outline: "none",
                    background: "transparent",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#08497A",
                  }}
                  className="placeholder:text-black/40"
                />
              </div>

              <button
                type="button"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px 32px",
                  gap: "16px",
                  width: "112px",
                  height: "56px",
                  background: "#FE7F2D",
                  border: "none",
                  borderRadius: "50px",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "#F0F2F8",
                  cursor: "pointer",
                }}
              >
                Apply
              </button>
            </div>

            {state.errors?.product?.[0] && (
              <p
                style={{
                  margin: 0,
                  width: "609px",
                  textAlign: "center",
                  color: "#D20B0B",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: "13px",
                  lineHeight: "20px",
                }}
              >
                {state.errors.product[0]}
              </p>
            )}

            {state.errors?.total?.[0] && (
              <p
                style={{
                  margin: 0,
                  width: "609px",
                  textAlign: "center",
                  color: "#D20B0B",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: "13px",
                  lineHeight: "20px",
                }}
              >
                {state.errors.total[0]}
              </p>
            )}

            {state.message && (
              <p
                style={{
                  margin: 0,
                  width: "609px",
                  textAlign: "center",
                  color: "#D20B0B",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontSize: "13px",
                  lineHeight: "20px",
                }}
              >
                {state.message}
              </p>
            )}

            <CheckoutSubmitButton disabled={optimisticItems.length === 0} />
          </form>
        </section>
      </section>
    </MarketplaceShell>
  );
}

function CartItem({
  item,
  quantity,
  showDivider,
  onIncrease,
  onDecrease,
  onDelete,
  isDeleting,
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        width: "609px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 0,
          gap: "16px",
          width: "609px",
          height: "124px",
        }}
      >
        <div
          style={{
            width: "124px",
            height: "124px",
            background: "#D9D9D9",
            borderRadius: "20px",
            overflow: "hidden",
            flex: "none",
          }}
        >
          <Image
            src={item.image}
            alt={item.title}
            width={130}
            height={127}
            style={{
              width: "130px",
              height: "127px",
              objectFit: "cover",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0,
            gap: "16px",
            width: "469px",
            height: "124px",
            flex: "1",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: 0,
              gap: "8px",
              width: "189px",
              height: "121px",
            }}
          >
            <h2
              style={{
                margin: 0,
                height: "24px",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                display: "flex",
                alignItems: "center",
                color: "#08497A",
                whiteSpace: "nowrap",
              }}
            >
              {item.title}
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 0,
                gap: "24px",
                width: "160px",
                height: "23px",
              }}
            >
              <span
                style={{
                  width: "49px",
                  height: "20px",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  lineHeight: "20px",
                  color: "#4B95C3",
                }}
              >
                Kondisi
              </span>

              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "4px 16px",
                  gap: "10px",
                  minWidth: "53px",
                  height: "23px",
                  background: "#FE7F2D",
                  borderRadius: "20px",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "10px",
                  lineHeight: "15px",
                  color: "#FFFFFF",
                  whiteSpace: "nowrap",
                }}
              >
                {item.condition}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 0,
                gap: "24px",
                width: "189px",
                height: "20px",
              }}
            >
              <span
                style={{
                  width: "50px",
                  height: "20px",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  lineHeight: "20px",
                  color: "#4B95C3",
                }}
              >
                Penjual
              </span>

              <span
                style={{
                  width: "115px",
                  height: "20px",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "20px",
                  color: "#4B95C3",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.seller}
              </span>
            </div>

            <p
              style={{
                margin: 0,
                height: "30px",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "30px",
                display: "flex",
                alignItems: "center",
                color: "#2176B5",
                whiteSpace: "nowrap",
              }}
            >
              {formatRupiah(item.price)}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
              padding: 0,
              gap: "75px",
              width: "225px",
              height: "124px",
            }}
          >
            <button
              type="button"
              aria-label="hapus produk"
              onClick={onDelete}
              disabled={isDeleting}
              style={{
                width: "24px",
                height: "24px",
                border: "none",
                background: "transparent",
                color: "#D20B0B",
                cursor: "pointer",
                padding: 0,
                opacity: isDeleting ? 0.6 : 1,
              }}
            >
              <Trash2 size={24} fill="#D20B0B" strokeWidth={0} />
            </button>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "12px 20px",
                gap: "20px",
                width: "125px",
                height: "44px",
                background: "#F0F2F8",
                borderRadius: "62px",
              }}
            >
              <button
                type="button"
                onClick={onDecrease}
                style={{
                  border: "none",
                  background: "transparent",
                  padding: 0,
                  cursor: "pointer",
                  display: "flex",
                }}
                aria-label="kurangi jumlah"
              >
                <Minus size={20} color="#08497A" strokeWidth={2.5} />
              </button>

              <span
                style={{
                  minWidth: "5px",
                  height: "20px",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "20px",
                  color: "#08497A",
                  textAlign: "center",
                }}
              >
                {quantity}
              </span>

              <button
                type="button"
                onClick={onIncrease}
                style={{
                  border: "none",
                  background: "transparent",
                  padding: 0,
                  cursor: "pointer",
                  display: "flex",
                }}
                aria-label="tambah jumlah"
              >
                <Plus size={20} color="#08497A" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showDivider && (
        <div
          style={{
            width: "609px",
            height: "0px",
            borderTop: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        />
      )}
    </div>
  );
}

function OrderRow({ label, value }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 0,
        gap: "24px",
        width: "609px",
        height: "24px",
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "24px",
          color: "#2176B5",
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>

      <span
        style={{
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
          color: "#4B95C3",
          textAlign: "right",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function OrderSelectRow({ label, name, error }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        width: "609px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 0,
          gap: "24px",
          width: "609px",
          height: "24px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#2176B5",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>

        <select
          name={name}
          defaultValue=""
          style={{
            width: "230px",
            height: "28px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#4B95C3",
            textAlign: "right",
            cursor: "pointer",
          }}
        >
          <option value="" disabled>
            Pilih metode
          </option>
          <option value="Transfer Bank">Transfer Bank</option>
          <option value="E-Wallet">E-Wallet</option>
          <option value="COD">COD</option>
        </select>
      </div>

      {error && (
        <p
          style={{
            margin: 0,
            textAlign: "right",
            color: "#D20B0B",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "12px",
            lineHeight: "18px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

function OrderAddressRow({ label, name, error }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        width: "609px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: 0,
          gap: "24px",
          width: "609px",
          minHeight: "24px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#2176B5",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>

        <textarea
          name={name}
          placeholder="Masukkan alamat"
          rows={2}
          style={{
            width: "300px",
            minHeight: "48px",
            border: "none",
            outline: "none",
            resize: "none",
            background: "transparent",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#4B95C3",
            textAlign: "right",
          }}
        />
      </div>

      {error && (
        <p
          style={{
            margin: 0,
            textAlign: "right",
            color: "#D20B0B",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontSize: "12px",
            lineHeight: "18px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
}

function CheckoutSubmitButton({ disabled }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending || disabled}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px 32px",
        gap: "16px",
        margin: "0 auto",
        width: "609px",
        height: "56px",
        background: "#2176B5",
        border: "none",
        borderRadius: "50px",
        flex: "none",
        alignSelf: "stretch",
        flexGrow: 0,
        cursor: pending || disabled ? "not-allowed" : "pointer",
        opacity: pending || disabled ? 0.6 : 1,
      }}
    >
      <span
        style={{
          width: "79px",
          height: "24px",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "24px",
          color: "#F0F2F8",
          flex: "none",
          flexGrow: 0,
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        {pending ? "Proses..." : "Checkout"}
      </span>
    </button>
  );
}