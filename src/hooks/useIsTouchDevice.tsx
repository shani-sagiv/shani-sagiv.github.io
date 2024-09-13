import { useState, useEffect, useCallback } from "react";

const useIsTouchDevice = (): boolean => {
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    return false;
  });

  const handleTouchCheck = useCallback(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    handleTouchCheck();
    return () => {};
  }, [handleTouchCheck]);

  return isTouchDevice;
};

export default useIsTouchDevice;
