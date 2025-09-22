import { randParagraph, randNumber } from "@ngneat/falso";

// common structure
// messages": [
//     {
//       "content": "Hello",
//       "role": "user",
//     },
//     {
//       "content": "Hey there! I'm Lolita Taub, GP at Ganas Ventures. I invest $100K checks in pre-seed and seed-stage startups, focusing on community-driven companies.\n\nHow can I help you today?",
//       "role": "assistant",
//     }]

export async function POST(request: Request) {
  // const body = await request.json();
  const randomText = randParagraph();
  console.log(randomText);
  // wait for 2 second
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return Response.json(randomText, { status: 200 });
}
