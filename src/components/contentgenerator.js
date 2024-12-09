import React, { useState } from "react";
import axios from "axios";

const ContentGenerator = () => {
    const [prompt, setPrompt] = useState("");
    const [result, setResult] = useState("");

    const handleGenerate = async () => {
        try {
            const response = await axios.post("http://127.0.0.1:5000/generate", { prompt });
            setResult(response.data.content);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>AI Content Generator</h1>
            <textarea
                placeholder="Enter your prompt here..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <button onClick={handleGenerate}>Generate</button>
            <div>
                <h3>Generated Content:</h3>
                <p>{result}</p>
            </div>
        </div>
    );
};

export default ContentGenerator;
