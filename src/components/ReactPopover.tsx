// @flow strict
"use client"
import { useEffect, useRef, useState } from "react";

function ReactPopover({
  children,
  content,
  trigger = "click"
}: Readonly<{children: React.ReactNode, content: any, trigger: any}>) {
  const [show, setShow] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);;

  const handleMouseOver = () => {
    if (trigger === "hover") {
      setShow(true);
    };
  };

  const handleMouseLeft = () => {
    if (trigger === "hover") {
      setShow(false);
    };
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false);
      }
    }

    if (show) {
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [show, wrapperRef]);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeft}
      className="w-fit h-fit relative flex justify-center">
      <div
        onClick={() => setShow(!show)}
      >
        {children}
      </div>
      <div
        hidden={!show}
        className="min-w-fit w-[200px] h-fit absolute bottom-[100%] z-50 transition-all">
        <div className="rounded bg-slate-800 p-3 text-center mb-[10px]">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ReactPopover;