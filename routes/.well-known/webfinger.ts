import { define } from "@/utils.ts";

export const handler = define.handlers({
  GET(ctx) {
    const webfingerData = {
      subject: "acct:a@bukhalo.com",
      links: [
        {
          "rel": "http://openid.net/specs/connect/1.0/issuer",
          "href": "https://id.bukhalo.com/.well-known/openid-configuration",
        },
      ],
    };

    return new Response(JSON.stringify(webfingerData), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
});
