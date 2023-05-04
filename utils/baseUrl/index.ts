export const baseUrl = () => {
  const env = process.env.NODE_ENV;

  const url =
    env === "development" ? "https://www.test.api" : "https://www.live.api";

  return url;
};
