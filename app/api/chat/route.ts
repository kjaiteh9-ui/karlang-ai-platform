import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

// Lazy-initialize inside handler so build succeeds without OPENAI_API_KEY
export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "OpenAI API key not configured. Add OPENAI_API_KEY to environment variables." },
        { status: 503 }
      );
    }

    const openai = new OpenAI({ apiKey });
    const { messages, agentName, systemPrompt } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "messages array required" }, { status: 400 });
    }

    const systemContent =
      systemPrompt ||
      `You are ${agentName || "an AI assistant"} built by Karlang Diate on the KD AI Platform.
       You are helpful, precise, and professional. Respond concisely and intelligently.`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemContent },
        ...messages,
      ],
      max_tokens: 1024,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content ?? "No response generated.";

    return NextResponse.json({
      reply,
      usage: completion.usage,
      model: completion.model,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Internal server error";
    console.error("[chat/route]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
