import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

import Linebreaker from "./routes/index.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Toaster richColors position="top-center" />
			<Routes>
				<Route path="/" element={<Linebreaker />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
