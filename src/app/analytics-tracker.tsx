// app/analytics-tracker.tsx
"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    goatcounter?: { count: (opts?: { path?: string }) => void };
  }
}

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams}` : "");
    window.goatcounter?.count({ path: url });
  }, [pathname, searchParams]);

  return null;
}
