import { renderToString } from "react-dom/server";

import { HomePage } from "./HomePage.jsx";

export const render = () => renderToString(<HomePage />);
