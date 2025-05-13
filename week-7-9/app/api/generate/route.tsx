import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();
    console.log("route reached with prompt:", prompt);

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1:free",
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log("Response from OpenRouter:", data);

    const output = data.choices[0]?.message?.content || "No response.";
    // console.log(output)
    return NextResponse.json({ output });
  } catch (error) {
    console.error("Error in /api route:", error);
    return NextResponse.json(
      { error: "Failed to get a response." },
      { status: 500 }
    );
  }
}
