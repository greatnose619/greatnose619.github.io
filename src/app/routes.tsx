import { createHashRouter, redirect } from "react-router"
import { HomePage } from "../App"
import ProjectPage from "../ProjectPage"

export const router = createHashRouter([
  { path: "/", Component: HomePage },
  { path: "/work/brandify", loader: () => redirect("/work/appflowy-official-website") },
  { path: "/work/:slug", Component: ProjectPage },
  { path: "/intro", loader: () => redirect("/?section=intro") },
  { path: "/about", loader: () => redirect("/?section=about") },
  { path: "/work", loader: () => redirect("/?section=work") },
  { path: "/experience", loader: () => redirect("/?section=experience") },
  { path: "/education", loader: () => redirect("/?section=education") },
])
