import { useState, useEffect, useCallback } from "react";

const MOBILE_BREAKPOINT = 480;

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth <= MOBILE_BREAKPOINT;
    }
    return false;
  });

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return isMobile;
};

export default useIsMobile;
