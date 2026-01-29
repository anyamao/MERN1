import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/index.css";
import Timer from "./pages/Timer/Timer.tsx";
import Notes from "./pages/Notes/Notes.tsx";
import NotFound from "./pages/NotFoundPage/NotFound.tsx";
const router = createBrowserRouter([
  {
    path: "/timer",
    element: <Timer />,
  },
  {
    path: "/notes",
    element: <Notes />,
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
