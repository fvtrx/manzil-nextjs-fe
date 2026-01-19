import { useEffect, useState } from "react";

// Utility function to detect mobile devices
const isMobile = () => {
  if (typeof window === "undefined") return false;
  return window.innerWidth <= 768 || "ontouchstart" in window;
};

export function useMobileDetection() {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    // Set initial value
    setIsMobileDevice(isMobile());

    // Handle window resize
    const handleResize = () => {
      setIsMobileDevice(isMobile());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobileDevice;
}
