import { z } from "zod";

const envSchema = z.object({
  MONGODB_URI: z
    .string({ error: "متغیر محیطی MONGODB_URI تعریف نشده است." })
    .min(1, "متغیر محیطی MONGODB_URI نمی‌تواند خالی باشد.")
    .refine(
      (value) =>
        value.startsWith("mongodb://") || value.startsWith("mongodb+srv://"),
      "MONGODB_URI باید یک آدرس معتبر MongoDB باشد.",
    ),
});

// اعتبارسنجی در اولین import انجام می‌شود تا خطای پیکربندی زود و واضح دیده شود.
export const env = envSchema.parse({
  MONGODB_URI: process.env.MONGODB_URI,
});
