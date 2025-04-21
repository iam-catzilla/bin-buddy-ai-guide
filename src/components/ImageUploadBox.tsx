
import React, { useRef, useState } from "react";
import { Camera, Trash, Upload } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface Props {
  onFile: (file: File) => void;
  selected?: File | null;
  onRemove: () => void;
}
export default function ImageUploadBox({ onFile, selected, onRemove }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const isMobile = useIsMobile();
  const [dragActive, setDragActive] = useState(false);

  const handleClick = () => inputRef.current?.click();

  const handleFile = (f: File | undefined | null) => {
    if (f && f.type.startsWith("image")) onFile(f);
  };

  return (
    <div className="relative w-full max-w-xl flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-accent bg-gray-50 dark:bg-gray-900 transition-all duration-200 shadow-md mx-auto p-6 my-8 min-h-[260px] cursor-pointer fade-in"
      onClick={handleClick}
      onDragOver={e => { e.preventDefault(); setDragActive(true); }}
      onDragLeave={e => { e.preventDefault(); setDragActive(false); }}
      onDrop={e => {
        e.preventDefault();
        setDragActive(false);
        const file = e.dataTransfer.files?.[0];
        handleFile(file);
      }}
      style={{ outline: dragActive ? "2px solid #76d275" : undefined }}
      aria-label="Upload Image"
      tabIndex={0}
    >
      {selected ? (
        <>
          <button
            className="absolute top-2 right-2 bg-white dark:bg-gray-800 rounded-full p-2 shadow"
            aria-label="Remove image"
            onClick={e => { e.stopPropagation(); onRemove(); }}>
            <Trash size={20} className="text-accent" />
          </button>
          <img
            className="object-contain max-h-40 rounded-xl mx-auto"
            src={URL.createObjectURL(selected)}
            alt="Uploaded preview"
          />
        </>
      ) : (
        <div className="flex flex-col items-center">
          <Upload size={45} className="text-accent mb-2" />
          <p className="text-lg mb-1 font-semibold text-gray-700 dark:text-white">Upload or drag & drop an image</p>
          <p className="text-sm text-gray-400">.jpg, .png, .jpeg, .webp, up to 20MB</p>
          {isMobile && (
            <button
              className="mt-5 flex items-center gap-2 pill !px-8 !py-2 bg-accent/90"
              type="button"
              tabIndex={-1}
              onClick={e => { e.stopPropagation(); inputRef.current?.setAttribute("capture", "environment"); inputRef.current?.click(); }}
            >
              <Camera size={23} /> Take Photo
            </button>
          )}
        </div>
      )}
      <input
        ref={inputRef}
        className="hidden"
        type="file"
        accept="image/*"
        capture={isMobile ? "environment" : undefined}
        onChange={e => {
          const f = e.target.files?.[0];
          handleFile(f);
        }}
        tabIndex={-1}
      />
    </div>
  );
}
