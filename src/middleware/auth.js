import router from "@/router";

export function auth({ next }) {
  const isAuthenticated = !!sessionStorage.getItem("authToken");
  if (isAuthenticated) {
    return next();
  } else {
    return next(router.push({ name: "login" }));
  }
}
