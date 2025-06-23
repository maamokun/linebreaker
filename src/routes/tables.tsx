import { useState, useEffect } from "react";
import { toast } from "sonner";
import { FaCopy } from "react-icons/fa";

export default function Tables() {
	const [inputText, setInputText] = useState<string>("");
	const [outputText, setOutputText] = useState<string>("");

	useEffect(() => {
		if (inputText.trim() === "") {
			setOutputText("");
			return;
		}

		const lines = inputText
			.split("\n")
			.filter((line) => line.trim() !== "");
		if (lines.length < 2) {
			setOutputText("Please provide at least two lines of text.");
			return;
		}

		// Parse tab-separated values
		const headers = lines[0].split("\t").map((header) => header.trim());
		const separator = headers.map(() => "---").join(" | ");
		const rows = lines.slice(1).map((row) =>
			row
				.split("\t")
				.map((cell) => cell.trim())
				.join(" | "),
		);

		const table = [headers.join(" | "), separator, ...rows].join("\n");
		setOutputText(table);
	}, [inputText]);

	return (
		<>
			<div className="flex flex-col p-5 items-center justify-center mt-10">
				<div className="text-4xl text-center font-bold mb-10">
					Markdown Tables
				</div>
				<div className="flex flex-col md:flex-row items-center justify-center gap-5 my-5 w-full">
					<div className="flex flex-col space-y-5 w-full items-center justify-center">
						<p className="text-2xl text-center font-bold">
							Input Text
						</p>
						<textarea
							className="textarea textarea-md w-full h-96"
							placeholder="Paste tab-separated text from Excel here..."
							onChange={(e) => setInputText(e.target.value)}
							value={inputText}
						/>
					</div>
					<div className="flex flex-col space-y-5 w-full items-center justify-center">
						<p className="text-2xl text-center font-bold">Result</p>
						<textarea
							className="textarea textarea-md textarea-success w-full h-96 cursor-not-allowed"
							placeholder="Result will appear here!"
							value={outputText}
							readOnly
						/>
					</div>
				</div>
				<div className="flex flex-row items-center justify-center gap-3 mt-5">
					<button
						className="btn btn-primary"
						onClick={() => {
							navigator.clipboard.writeText(outputText);
							toast.success(`Copied table to clipboard!`);
						}}
					>
						<FaCopy className="mr-2" />
						Copy Result
					</button>
				</div>
			</div>
		</>
	);
}
