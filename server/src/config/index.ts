export const env = {
  DATABASE_URL: Deno.env.get("DATABASE_URL")!,
  BETTER_AUTH_SECRET: Deno.env.get("BETTER_AUTH_SECRET")!,
};