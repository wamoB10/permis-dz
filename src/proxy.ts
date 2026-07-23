import createMiddleware from "next-intl/middleware"
import { routing } from "./i18n/routing"

export default createMiddleware(routing)

export const config = {
  matcher: [
    "/((?!api|_next|_vercel|images|favicon.ico|sitemap.xml|robots.txt|google721c7401abe49111.html).*)",
  ],
}
