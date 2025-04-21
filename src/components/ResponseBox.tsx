
import React from "react";
import TypewriterText from "./TypewriterText";

interface Props {
  response: string;
  image?: File | null;
  loading: boolean;
}

export default function ResponseBox({ response, image, loading }: Props) {
  return (
    <div className="card-glass max-w-4xl w-full mx-auto min-h-[500px] fade-in relative flex flex-col"
      style={{ minWidth: "min(95vw, 900px)" }}>
      <div className="flex items-center px-7 pt-7 pb-1 justify-between">
        <div>
          <h2 className="text-2xl font-bold">Response</h2>
          <div className="w-14 h-1 rounded-full bg-accent/70 mb-1" />
        </div>
        {!!image && (
          <img
            className="w-16 h-16 object-contain border-2 border-accent rounded-lg shadow ml-3 bg-white"
            alt="Selected preview"
            src={URL.createObjectURL(image)}
            style={{ maxWidth: "66px", maxHeight: "66px" }}
          />
        )}
      </div>
      <div className="px-7 pb-7 pt-1 flex-1 min-h-[400px] flex items-start justify-start">
        <div className="mt-2 text-left w-full">
          {loading
            ? <span className="italic text-gray-400">Analyzing the image...</span>
            : <TypewriterText text={response} />}
        </div>
      </div>
    </div>
  );
}
