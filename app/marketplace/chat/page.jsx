import Image from "next/image";
import { Keyboard, Send, User } from "lucide-react";
import MarketplaceShell from "../components/MarketplaceShell";

const inboxItems = [
  {
    name: "Meredith Gutkowski",
    time: "07.54 PM",
    avatar: "/images/avatar-4.png",
    active: false,
    unread: true,
  },
  {
    name: "Shaun Konopelski",
    time: "",
    avatar: "/images/avatar-3.png",
    active: true,
    unread: false,
  },
  {
    name: "Carmen Addams",
    time: "05.40 AM",
    avatar: "/images/avatar-5.png",
    active: false,
    unread: true,
  },
  {
    name: "Dwight Collins",
    time: "Yesterday",
    avatar: "/images/avatar-2.png",
    active: false,
    unread: true,
  },
  {
    name: "Jennie Friz",
    time: "Yesterday",
    avatar: "/images/avatar-1.png",
    active: false,
    unread: true,
  },
  {
    name: "Arturo Carter",
    time: "Yesterday",
    avatar: "/images/avatar-5.png",
    active: false,
    unread: true,
  },
  {
    name: "Holly Schiller",
    time: "Yesterday",
    avatar: null,
    active: false,
    unread: true,
  },
  {
    name: "Orville Jaskolski",
    time: "Yesterday",
    avatar: "/images/avatar-4.png",
    active: false,
    unread: true,
  },
  {
    name: "Wanda Folkman",
    time: "Yesterday",
    avatar: null,
    active: false,
    unread: true,
  },
];

const sellerAvatar = "/images/avatar-3.png";
const userAvatar = "/images/avatar-4.png";

const messageTextLong =
  "Lorem ipsum dolor sit amet consectetur. Enim phasellus accumsan sit ultrices quam vel id.";

const messageTextMedium =
  "Lorem ipsum dolor sit amet consectetur. Enim phasellus accumsan.";

const messageTextShort = "Lorem ipsum dolor sit amet consectetur.";

export default function ChatPage() {
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
          height: "944px",
          background: "#F0F2F8",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: 0,
            gap: "42px",
            width: "1356px",
            height: "860px",
            flex: "1",
          }}
        >
          <InboxPanel />
          <ChatPanel />
        </div>
      </section>
    </MarketplaceShell>
  );
}

function InboxPanel() {
  return (
    <aside
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: "24px",
        gap: "24px",
        width: "420px",
        height: "860px",
        background: "#FFFFFF",
        borderRadius: "20px",
        flex: "none",
        alignSelf: "stretch",
      }}
    >
      <h1
        style={{
          margin: 0,
          width: "372px",
          height: "38px",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "25px",
          lineHeight: "38px",
          color: "#08497A",
        }}
      >
        Inbox
      </h1>

      {inboxItems.map((item) => (
        <InboxItem key={item.name} item={item} />
      ))}
    </aside>
  );
}

function InboxItem({ item }) {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 0,
        gap: "24px",
        width: "372px",
        height: "62px",
        flex: "none",
        alignSelf: "stretch",
      }}
    >
      <Avatar
        src={item.avatar}
        alt={item.name}
        size={50}
        radius="50px"
        fallbackRadius="50px"
      />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 0,
          gap: "24px",
          width: "298px",
          height: "62px",
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
            width: "231px",
            height: "62px",
            flex: "none",
          }}
        >
          <h2
            style={{
              margin: 0,
              width: "231px",
              height: "24px",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#2F6586",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.name}
          </h2>

          <p
            style={{
              margin: 0,
              width: "231px",
              height: "30px",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "10px",
              lineHeight: "15px",
              color: "#4B95C3",
              overflow: "hidden",
            }}
          >
            Lorem ipsum dolor sit amet consectetur. Nec pharetra sed lectus id
            nisl congue gravida.
          </p>
        </div>

        {item.active ? (
          <div
            style={{
              width: "17px",
              height: "62px",
              background: "#FE7F2D",
              borderRadius: "0px 20px 20px 0px",
              flex: "none",
              alignSelf: "stretch",
            }}
          />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
              gap: "16px",
              width: "43px",
              height: "62px",
              flex: "none",
              alignSelf: "stretch",
            }}
          >
            <span
              style={{
                width: "50px",
                height: "15px",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 400,
                fontSize: "10px",
                lineHeight: "15px",
                color: "#4B95C3",
                textAlign: "center",
              }}
            >
              {item.time}
            </span>

            {item.unread && (
              <span
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "4px",
                  gap: "10px",
                  width: "22px",
                  height: "23px",
                  background: "#FE7F2D",
                  borderRadius: "100px",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "10px",
                  lineHeight: "15px",
                  color: "#F0F2F8",
                }}
              >
                +5
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ChatPanel() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        padding: "24px",
        gap: "24px",
        width: "894px",
        height: "860px",
        background: "#FFFFFF",
        borderRadius: "20px",
        flex: "1",
        alignSelf: "stretch",
        overflow: "hidden",
      }}
    >
      <ChatHeader />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
          gap: "40px",
          width: "846px",
          height: "631px",
          flex: "none",
          alignSelf: "stretch",
          overflow: "hidden",
        }}
      >
        <MessageGroupLeft
          messages={[messageTextLong, messageTextMedium, messageTextShort]}
        />

        <MessageGroupRight
          messages={[messageTextLong, messageTextMedium, messageTextShort]}
        />

        <MessageGroupLeft messages={[messageTextLong, messageTextMedium]} />

        <MessageGroupRight
          messages={[messageTextLong, messageTextMedium, messageTextShort]}
        />
      </div>

      <MessageInput />
    </main>
  );
}

function ChatHeader() {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 0,
        gap: "24px",
        width: "846px",
        height: "76px",
        flex: "none",
        alignSelf: "stretch",
      }}
    >
      <Avatar
        src={sellerAvatar}
        alt="Shaun Konopelski"
        size={60}
        radius="100px"
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
          gap: "8px",
          width: "210px",
          height: "76px",
          flex: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 0,
            gap: "24px",
            width: "210px",
            height: "24px",
          }}
        >
          <h1
            style={{
              margin: 0,
              width: "146px",
              height: "24px",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#2176B5",
            }}
          >
            Shaun Konopelski
          </h1>

          <span
            style={{
              width: "40px",
              height: "18px",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              color: "#2176B5",
              whiteSpace: "nowrap",
            }}
          >
            4.5 (6)
          </span>
        </div>

        <span
          style={{
            width: "56px",
            height: "18px",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "18px",
            color: "#2176B5",
          }}
        >
          Kota Solo
        </span>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 0,
            gap: "8px",
            width: "62px",
            height: "18px",
          }}
        >
          <span
            style={{
              width: "15px",
              height: "15px",
              background: "#0DBA0D",
              borderRadius: "100px",
              flex: "none",
            }}
          />

          <span
            style={{
              width: "39px",
              height: "18px",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              color: "#2176B5",
            }}
          >
            Online
          </span>
        </div>
      </div>
    </header>
  );
}

function MessageGroupLeft({ messages }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: 0,
        gap: "9px",
        width: "846px",
        minHeight: messages.length === 2 ? "88px" : "136px",
        flex: "none",
        alignSelf: "stretch",
      }}
    >
      <Avatar
        src={sellerAvatar}
        alt="Shaun Konopelski"
        size={43}
        radius="50px"
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
          gap: "8px",
          width: "620px",
          minHeight: messages.length === 2 ? "88px" : "136px",
          flex: "none",
        }}
      >
        {messages.map((message, index) => (
          <ChatBubble
            key={`${message}-${index}`}
            message={message}
            side="left"
            width={index === 0 ? 620 : index === 1 ? 472 : 294}
          />
        ))}
      </div>
    </div>
  );
}

function MessageGroupRight({ messages }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        padding: 0,
        gap: "9px",
        width: "846px",
        minHeight: "136px",
        flex: "none",
        alignSelf: "stretch",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-end",
          padding: 0,
          gap: "8px",
          width: "620px",
          minHeight: "136px",
          flex: "none",
        }}
      >
        {messages.map((message, index) => (
          <ChatBubble
            key={`${message}-${index}`}
            message={message}
            side="right"
            width={index === 0 ? 620 : index === 1 ? 472 : 294}
          />
        ))}
      </div>

      <Avatar src={userAvatar} alt="User" size={43} radius="50px" />
    </div>
  );
}

function ChatBubble({ message, side, width }) {
  const background = side === "left" ? "#2176B5" : "#2F6586";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 16px",
        gap: "10px",
        width: `${width}px`,
        height: "40px",
        background,
        borderRadius: "20px",
        flex: "none",
      }}
    >
      <span
        style={{
          width: `${width - 32}px`,
          height: "20px",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 400,
          fontSize: "13px",
          lineHeight: "20px",
          color: "#FFFFFF",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {message}
      </span>
    </div>
  );
}

function MessageInput() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        gap: "16px",
        width: "846px",
        height: "57px",
        background: "rgba(124, 124, 124, 0.16)",
        borderRadius: "20px",
        flex: "none",
        alignSelf: "stretch",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 0,
          gap: "16px",
          width: "154px",
          height: "25px",
          flex: "none",
        }}
      >
        <Keyboard size={25} color="#2176B5" strokeWidth={1.8} />

        <input
          type="text"
          placeholder="Ketik pesan . . ."
          style={{
            width: "113px",
            height: "24px",
            border: "none",
            outline: "none",
            background: "transparent",
            fontFamily: "Inter, var(--font-poppins), sans-serif",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "150%",
            letterSpacing: "-0.011em",
            color: "#08497A",
          }}
          className="placeholder:text-black/50"
        />
      </div>

      <button
        type="button"
        aria-label="Kirim pesan"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "25px",
          height: "25px",
          border: "none",
          background: "transparent",
          padding: 0,
          cursor: "pointer",
        }}
      >
        <Send size={25} color="#2176B5" strokeWidth={2} />
      </button>
    </div>
  );
}

function Avatar({ src, alt, size, radius = "50px", fallbackRadius = "50px" }) {
  if (!src) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: `${size}px`,
          height: `${size}px`,
          background: "#7C7C7C",
          borderRadius: fallbackRadius,
          flex: "none",
        }}
      >
        <User size={Math.round(size * 0.55)} color="#FFFFFF" strokeWidth={2.5} />
      </div>
    );
  }

  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: radius,
        overflow: "hidden",
        background: "#7C7C7C",
        flex: "none",
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          objectFit: "cover",
        }}
      />
    </div>
  );
}