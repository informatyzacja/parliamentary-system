export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/resolutions",
    "/struktura",
    "/sprawozdania",
    "/aktualnosci",
    "/posiedzenia",
  ],
};
