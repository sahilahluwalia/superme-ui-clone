import { randParagraph } from "@ngneat/falso";

export async function POST(request: Request) {
  const body = await request.json();
  const randomText = randParagraph();
  console.log(body);
  console.log(randomText);
  // wait for 2 second
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return Response.json(randomText, { status: 200 });
}
