import { createBrowserRouter } from "react-router-dom";
import PlayGround from "../features/chat/pages/PlayGround";

export const router = createBrowserRouter([
  //  (/) for testing purpose
  // {
  //   path: "/",
  //   element: <PlayGround />,
  // },
  {
    path: "/playground",
    element: <PlayGround />,
  },
  { 
    path: "/playground/:chatId",
    element: <PlayGround />,
  },
]);
