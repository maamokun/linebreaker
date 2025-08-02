import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import "./index.css";

import Linebreaker from "./routes/linebreaker.tsx";
import Tables from "./routes/tables.tsx";
import HomePage from "./routes/index.tsx";

import { FaGithub, FaChartPie, FaHome } from "react-icons/fa";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Toaster richColors position="top-center" />
			<div className="navbar bg-base-100 shadow-sm justify-between flex flex-row items-center w-full p-5 gap-5">
				<div className={"flex flex-row items-center gap-2"}>
					<NavLink to={"/"}>
						<FaHome className="w-10 h-10 mr-3" />
					</NavLink>
					<NavLink to={"/linebreaker"}>
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
				<div className={"flex flex-row items-center gap-4"}>
					<a
						href="https://github.com/maamokun/linebreaker"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub className="w-10 h-10" />
					</a>
					<a
						href="https://analytics.mikandev.com/projects/sDcGqlguBK4D"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaChartPie className="w-10 h-10" />
					</a>
				</div>
			</div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/linebreaker" element={<Linebreaker />} />
				<Route path="/tables" element={<Tables />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
