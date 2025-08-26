// app/[locale]/GeneralComponents/PixelRouteTracker.jsx
"use client";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function PixelRouteTracker() {
  const pathname = usePathname();
  const isFirstLoad = useRef(true);
  const last = useRef({ path: "", search: "" });

  // Mount'ta mevcut path+search'i kaydet
  useEffect(() => {
    if (typeof window === "undefined") return;
    last.current = {
      path: window.location.pathname,
      search: window.location.search,
    };
  }, []);

  // Pathname değişince PageView
  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false; // layout'taki ilk PageView ile çakışmayı önle
      return;
    }
    if (typeof window !== "undefined") {
      window.fbq?.("track", "PageView");
      last.current = {
        path: window.location.pathname,
        search: window.location.search,
      };
    }
  }, [pathname]);

  // Sadece query değişimini yakala (pushState/replaceState/popstate)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const fireIfSearchChanged = () => {
      const now = { path: window.location.pathname, search: window.location.search };
      const onlySearchChanged = now.path === last.current.path && now.search !== last.current.search;
      if (onlySearchChanged) {
        window.fbq?.("track", "PageView");
        last.current = now;
      }
    };

    const origPush = history.pushState;
    const origReplace = history.replaceState;

    history.pushState = function (...args) {
      origPush.apply(this, args);
      fireIfSearchChanged();
    };
    history.replaceState = function (...args) {
      origReplace.apply(this, args);
      fireIfSearchChanged();
    };
    window.addEventListener("popstate", fireIfSearchChanged);

    return () => {
      history.pushState = origPush;
      history.replaceState = origReplace;
      window.removeEventListener("popstate", fireIfSearchChanged);
    };
  }, []);

  return null;
}
