// src/hooks/useScrollNav.tsx
import { useEffect, useRef, useState } from "react";

export function useScrollNav() {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        setAtTop(y < 8);

        // Aşağı kaydır + belli mesafe geçtiyse gizle, yukarı kaydırınca göster
        if (y > lastY.current && y > 80) {
          setHidden(true);
        } else {
          setHidden(false);
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return { hidden, atTop };
}
