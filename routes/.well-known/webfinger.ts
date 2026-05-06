import { define } from "@/utils.ts";

export const handler = define.handlers({
  GET(ctx) {
    const url = new URL(ctx.req.url);
    const resource = url.searchParams.get("resource");

    // Basic validation to ensure the resource exists
    if (!resource) {
      return new Response("Missing resource", { status: 400 });
    }

    const webfingerData = {
      subject: "a@bukhalo.com",
      links: [
        {
          "rel": "http://openid.net/specs/connect/1.0/issuer",
          "href": "https://sso.bukhalo.com/.well-known/openid-configuration",
        },
      ],
    };

    return new Response(JSON.stringify(webfingerData), {
      headers: {
        "Content-Type": "application/jrd+json",
      },
    });
  },
});
