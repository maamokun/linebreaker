import { useState, useEffect } from "react";

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

		const headers = lines[0].split("|").map((header) => header.trim());
		const separator = lines[1]
			.split("|")
			.map(() => "---")
			.join(" | ");
		const rows = lines.slice(2).map((row) =>
			row
				.split("|")
				.map((cell) => cell.trim())
				.join(" | "),
		);

		const table = [headers.join(" | "), separator, ...rows].join("\n");
		setOutputText(table);
	}),
		[inputText];

	return (
		<>
			<div className="flex flex-col p-5 min-h-screen items-center justify-center">
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
							placeholder="Put your text here..."
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
			</div>
		</>
	);
}
