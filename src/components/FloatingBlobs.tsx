
import React from "react";

const blobs = [
  {
    style: "top-[-80px] left-[-60px] w-[340px] h-[340px] bg-gradient-to-br from-blobGreen1 to-blobGreen2 animate-float",
    delay: "0s"
  },
  {
    style: "bottom-[-80px] left-[10vw] w-[260px] h-[260px] bg-gradient-to-br from-accent to-blobGreen3 animate-float",
    delay: "2.3s"
  },
  {
    style: "bottom-[5vh] right-[-140px] w-[320px] h-[320px] bg-gradient-to-tr from-blobGreen4 to-accent animate-float",
    delay: "4.7s"
  },
  {
    style: "top-[35vh] right-[-180px] w-[400px] h-[400px] bg-gradient-to-br from-blobGreen1 to-accent-dark animate-float",
    delay: "7.1s",
  },
];

export default function FloatingBlobs() {
  return (
    <>
      {blobs.map((b, i) => (
        <div
          key={i}
          className={`blob ${b.style}`}
          style={{ animationDelay: b.delay }}
          aria-hidden
        />
      ))}
    </>
  );
}
