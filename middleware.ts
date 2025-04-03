import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAuthRoute = createRouteMatcher(["/sign-in(.*)", "/sign-up(.*)"]);
const isPublicRoute = createRouteMatcher(["/"]);
const isApiAuthRoute = createRouteMatcher(["/api/auth(.*)"]);

// Define metadata type
type UserMetadata = {
  onboardingCompleted?: boolean;
  role?: 'POSTER' | 'DOER' | 'ADMIN';
  hasSubmittedVerification?: boolean;
};

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims, redirectToSignIn } = await auth();

  // 🚀 Handle API authentication routes first
  if (isApiAuthRoute(req)) return null;

  // 🚀 Handle public routes
  if (isPublicRoute(req)) return null;

  // 🚀 Handle auth routes (sign-in/sign-up)
  if (isAuthRoute(req)) {
    // If user is already logged in, redirect to home
    if (userId) {
      return NextResponse.redirect(new URL("/", req.url));
    }
    return null;
  }

  // 🚀 If user is not logged in, redirect to sign in
  if (!userId) {
    console.log("Redirecting to Sign In due to missing userId");
    return redirectToSignIn();
  }

  // 🚀 Only check onboarding status for logged-in users
  const metadata = sessionClaims?.metadata as UserMetadata || {};
  const onboardingCompleted = metadata.onboardingCompleted === true;
  const userRole = metadata.role || "POSTER";
  const hasSubmittedVerification = metadata.hasSubmittedVerification === true;
  
  // Check if onboarding is completed (role selected + verification submitted)
  const fullyOnboarded = onboardingCompleted && hasSubmittedVerification;

  // 🚀 Redirect users to onboarding if it's not completed
  if (!fullyOnboarded && req.nextUrl.pathname !== "/onboarding") {
    return NextResponse.redirect(new URL("/onboarding", req.url));
  }

  // 🚀 Redirect users away from onboarding if it's completed
  if (fullyOnboarded && req.nextUrl.pathname === "/onboarding") {
    return NextResponse.redirect(new URL(`/${userRole.toLowerCase()}`, req.url));
  }

  return null;
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
