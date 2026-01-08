import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PROJECT_ROUTES } from "../data/projects";

export default function useSwipeNavigation() {
  const startX = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (startX.current === null) return;

    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    const threshold = 60; // px
    if (Math.abs(diff) < threshold) return;

    const currentIndex = PROJECT_ROUTES.indexOf(location.pathname);
    if (currentIndex === -1) return;

    if (diff > 0 && currentIndex < PROJECT_ROUTES.length - 1) {
      // swipe left → next project
      navigate(PROJECT_ROUTES[currentIndex + 1]);
    } else if (diff < 0 && currentIndex > 0) {
      // swipe right → previous project
      navigate(PROJECT_ROUTES[currentIndex - 1]);
    }

    startX.current = null;
  };

  return { onTouchStart, onTouchEnd };
}
