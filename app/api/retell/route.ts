import { NextResponse } from "next/server";

export async function POST() {
  const apiKey = process.env.RETELL_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Retell API key not configured" },
      { status: 500 },
    );
  }

  const res = await fetch("https://api.retellai.com/v2/create-web-call", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      agent_id: "agent_0acd42c905f89c5b07945b3538",
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    return NextResponse.json(
      { error: "Failed to create web call", detail: text },
      { status: res.status },
    );
  }

  const data = await res.json();
  return NextResponse.json({ access_token: data.access_token });
}
