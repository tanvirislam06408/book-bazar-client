import { betterAuth } from "better-auth";
import { Pool } from "pg";

export const auth = betterAuth({
  database: new Pool({
    connectionString:
      process.env.DATABASE_URL ||
      "postgresql://postgres:postgres@localhost:5432/boibazar",
  }),
  secret:
    process.env.BETTER_AUTH_SECRET ||
    "boibazar_secret_key_change_in_production_student_2026",
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "google_client_id_placeholder",
      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET || "google_client_secret_placeholder",
      enabled: true,
    },
  },
  user: {
    additionalFields: {
      studentType: {
        type: "string",
        required: false,
        defaultValue: "varsity",
      },
      institution: {
        type: "string",
        required: false,
      },
      phoneNumber: {
        type: "string",
        required: false,
      },
    },
  },
});

export type Session = typeof auth.$Infer.Session;
