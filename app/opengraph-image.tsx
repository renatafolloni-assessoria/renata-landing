import { ImageResponse } from "next/og";
import { readFile } from "fs/promises";
import { join } from "path";

export const alt = "Renata Folloni | Assessoria Digital";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const [regular, bold, logo] = await Promise.all([
    readFile(join(process.cwd(), "app/_assets/geist-regular.ttf")),
    readFile(join(process.cwd(), "app/_assets/geist-bold.ttf")),
    readFile(join(process.cwd(), "public/logo-renata-folloni.png")),
  ]);
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 96px",
          background: "#041e37",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-140px",
            width: "620px",
            height: "620px",
            borderRadius: "9999px",
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(254,102,1,0.24) 0%, rgba(254,102,1,0) 70%)",
            display: "flex",
          }}
        />
        {[300, 420, 540].map((s) => (
          <div
            key={s}
            style={{
              position: "absolute",
              top: "50%",
              left: "78%",
              width: `${s}px`,
              height: `${s}px`,
              marginLeft: `${-s / 2}px`,
              marginTop: `${-s / 2}px`,
              borderRadius: "9999px",
              border: "1px solid rgba(254,102,1,0.16)",
              display: "flex",
            }}
          />
        ))}

        <img src={logoSrc} width={64} height={64} alt="" style={{ marginBottom: 40 }} />

        <div
          style={{
            display: "flex",
            fontFamily: "Geist",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(254,102,1,0.85)",
            marginBottom: 24,
          }}
        >
          Assessoria Digital
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Geist",
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "#ffffff",
          }}
        >
          <span>Seu negócio crescendo.</span>
          <span style={{ color: "#fe6601" }}>Sem você no centro.</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: regular, weight: 400, style: "normal" },
        { name: "Geist", data: bold, weight: 700, style: "normal" },
      ],
    }
  );
}
