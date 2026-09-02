import { NextResponse } from "next/server";
import { SITE_URL } from "../../_lib/constants";

type LeadPayload = {
  name: string;
  phone: string;
  company: string;
  segment: string;
  size: string;
  page?: string;
};

function isLeadPayload(body: unknown): body is LeadPayload {
  if (!body || typeof body !== "object") return false;
  const { name, phone, company, segment, size } = body as Record<string, unknown>;
  return (
    typeof name === "string" &&
    typeof phone === "string" &&
    typeof company === "string" &&
    typeof segment === "string" &&
    typeof size === "string"
  );
}

const NOTION_API_VERSION = "2022-06-28";

export async function POST(request: Request) {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_LEADS_DATABASE_ID;

  if (!apiKey || !databaseId) {
    console.error("lead capture not configured: missing NOTION_API_KEY/NOTION_LEADS_DATABASE_ID");
    return NextResponse.json({ ok: false }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  if (!isLeadPayload(body)) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const { name, phone, company, segment, size, page } = body;
  const originUrl = page ? new URL(page, SITE_URL).toString() : SITE_URL;

  try {
    const res = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Notion-Version": NOTION_API_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parent: { database_id: databaseId },
        properties: {
          Nome: { title: [{ text: { content: name } }] },
          Telefone: { phone_number: phone },
          Empresa: { rich_text: [{ text: { content: company } }] },
          Segmento: { select: { name: segment } },
          "Tamanho da empresa": { select: { name: size } },
          "Página de origem": { url: originUrl },
          Status: { status: { name: "Not started" } },
        },
      }),
    });
    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`notion responded ${res.status}: ${errText}`);
    }
  } catch (err) {
    console.error("notion lead capture failed", err);
    return NextResponse.json({ ok: false }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
