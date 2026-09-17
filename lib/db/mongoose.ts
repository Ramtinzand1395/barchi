import mongoose, { type Mongoose } from "mongoose";

import { env } from "@/lib/env/env";

type MongooseCache = {
  connection: Mongoose | null;
  promise: Promise<Mongoose> | null;
};

declare global {
  var mongooseCache: MongooseCache | undefined;
}

// کش سراسری در توسعه، اتصال را میان Hot Reloadها نگه می‌دارد.
const cache = globalThis.mongooseCache ?? {
  connection: null,
  promise: null,
};

globalThis.mongooseCache = cache;

export async function connectToDatabase(): Promise<Mongoose> {
  if (cache.connection) {
    return cache.connection;
  }

  // Promise هم کش می‌شود تا درخواست‌های هم‌زمان اتصال‌های جدا نسازند.
  cache.promise ??= mongoose.connect(env.MONGODB_URI);

  try {
    cache.connection = await cache.promise;
  } catch (error) {
    cache.promise = null;
    throw error;
  }

  return cache.connection;
}
