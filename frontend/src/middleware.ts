export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/uchwaly",
    "/struktura",
    "/sprawozdania",
    "/aktualnosci",
    "/posiedzenia",
  ],
};
