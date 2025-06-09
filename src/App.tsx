import { useState, useEffect } from "react";
import { FaCopy, FaGithub } from "react-icons/fa";
import { toast } from "sonner";

type Mode = "single" | "double";

function processLineBreaks(text: string, mode: Mode): string {
	if (text.trim() === "") return "";
	if (mode === "single") {
		return text.replace(/\n{2,}/g, "\n");
	}
	const normalized = text.replace(/\n{2,}/g, "\n");
	return normalized.replace(/\n/g, "\n\n");
}

function App() {
	const [inputText, setInputText] = useState<string>("");
	const [outputText, setOutputText] = useState<string>("");
	const [mode, setMode] = useState<Mode>("single");

	useEffect(() => {
		if (inputText.trim() === "") {
			setOutputText("");
			return;
		}
		if (/\n{2,}/.test(inputText)) {
			toast.info("Detected two or more consecutive line breaks, switching to single line mode.");
			setMode("single");
			const single = inputText.replace(/\n{2,}/g, "\n");
			setOutputText(single);
		} else {
			toast.info("Detected single line breaks, switching to double line mode.");
			setMode("double");
			const double = inputText.replace(/\n/g, "\n\n");
			setOutputText(double);
		}
	}, [inputText]);

	const handleModeToggle = () => {
		const newMode = mode === "double" ? "single" : "double";
		const processed = processLineBreaks(inputText, newMode);
		setOutputText(processed);
		setMode(newMode);
	};

	return (
		<>
			<div className="flex flex-col p-5 min-h-screen items-center justify-center h-full">
				<div className="text-4xl text-center font-bold mb-10">
					The Linebreaker
				</div>
				<div className="flex flex-row items-center justify-center gap-5 my-5 w-full">
					<div className="flex flex-col space-y-5 w-full items-center justify-center">
						<p className="text-2xl text-center font-bold">Input Text</p>
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
				<div className="flex flex-row items-center justify-center gap-3 w-full mt-3">
					<p className="text-md text-center">
						{mode === "single" ? "Single Line" : "Double Line"}
					</p>
					<input
						type="checkbox"
						className="toggle"
						checked={mode === "double"}
						onChange={handleModeToggle}
					/>
				</div>
				<div className="flex flex-row items-center justify-center gap-3 mt-5">
					<button
						className="btn btn-primary"
						onClick={() => {
							navigator.clipboard.writeText(outputText);
							toast.success("Copied to clipboard!");
						}}
					>
						<FaCopy className="mr-2" />
						Copy Result
					</button>
				</div>
				<div className="flex flex-row items-center justify-center mt-10">
					<a
						href="https://github.com/maamokun/linebreaker"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub className="w-10 h-10" />
					</a>
				</div>
			</div>
		</>
	);
}

export default App;