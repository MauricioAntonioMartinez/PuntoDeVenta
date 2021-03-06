import path from "path";
export const DATABASE_URL = process.env.DATABASE_URL;
export const REDIS_URL = process.env.REDIS_URL;
export const ORIGIN = process.env.ORGIN;
export const COOKIE_NAME = "mv3";
export const __prod__ = process.env.NODE_ENV === "production";
export const toProfilePath = (pic: string) =>
  path.join(__dirname, "public", "profile-pictures", pic);
export const toMertPath = (pic: string) =>
  path.join(__dirname, "public", "merts", pic);
export const toBackgroundsPath = (pic: string) =>
  path.join(__dirname, "public", "backgrounds", pic);

export const SESSION_SECRET = process.env.SESSION_SECRET as string;
export const PORT = +process.env.PORT! || 4000;
export const ORIGIN_PRODUCTION = process.env.ORIGIN_PRODUCTION;
export const DOMAIN = process.env.DOMAIN;
