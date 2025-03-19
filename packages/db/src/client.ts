import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

const client = postgres({
  host: process.env.POSTGRES_HOST ?? "",
  port: Number(process.env.POSTGRES_POST) ?? 5432,
  database: process.env.POSTGRES_DB ?? "",
  user: process.env.POSTGRES_USER ?? "",
  password: process.env.POSTGRES_PASS ?? "",
});

export const db = drizzle({
  client,
  schema,
  casing: "snake_case",
});
