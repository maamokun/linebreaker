import { NavLink } from "react-router";
import { FaFile, FaTable, FaFileAlt } from "react-icons/fa";

export const navItems = [
	{
		to: "/linebreaker",
		label: "The Linebreaker",
		description:
			"Convert multiple line breaks into single or double line breaks.",
		icon: <FaFile className="w-10 h-10 mr-3" />,
		new: false,
		comingSoon: false,
	},
	{
		to: "/tables",
		label: "Markdown Tables",
		description: "Convert tab-separated text into Markdown tables.",
		icon: <FaTable className="w-10 h-10 mr-3" />,
		new: false,
		comingSoon: false,
	},
	{
		to: "/comments",
		label: "DOCX Comments",
		description: "Edit and manage comments in DOCX files.",
		icon: <FaFileAlt className="w-10 h-10 mr-3" />,
		new: false,
		comingSoon: true,
	},
];

export default function HomePage() {
	return (
		<>
			<div className="flex flex-col p-5 items-center justify-center mt-10">
				<div className="text-4xl text-center font-bold mb-10">
					tools.sachade.co
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
					{navItems.map((item) => (
						<div
							key={item.to}
							className="card bg-base-200 shadow-xl"
						>
							<div className="card-body items-center text-center">
								<div className="mb-2">{item.icon}</div>
								<h2 className="card-title">{item.label}</h2>
								{item.new && (
									<span className="badge badge-secondary">
										New!
									</span>
								)}
								<p className="mb-4">{item.description}</p>
								<div className="card-actions">
									<button
										disabled={item.comingSoon}
										className="btn btn-primary"
									>
										<NavLink to={item.to}>
											{item.comingSoon
												? "Coming Soon!"
												: `Go to ${item.label}`}
										</NavLink>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
