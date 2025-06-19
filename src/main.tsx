import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import "./index.css";

import Linebreaker from "./routes/index.tsx";
import Tables from "./routes/tables.tsx";

import { FaGithub } from "react-icons/fa";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Toaster richColors position="top-center" />
			<div className="navbar bg-base-100 shadow-sm justify-between flex flex-row items-center w-full p-5 gap-5">
				<div className={"flex flex-row items-center gap-2"}>
					<NavLink to={"/"}>
						<button className="btn btn-neutral text-xl">
							The Linebreaker
						</button>
					</NavLink>
					<NavLink to={"/tables"}>
						<button className="btn btn-neutral text-xl">
							Markdown Tables
						</button>
					</NavLink>
				</div>
				<a
					href="https://github.com/maamokun/linebreaker"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub className="w-10 h-10" />
				</a>
			</div>
			<Routes>
				<Route path="/" element={<Linebreaker />} />
				<Route path="/tables" element={<Tables />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
