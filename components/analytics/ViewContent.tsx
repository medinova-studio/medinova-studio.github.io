"use client";

import { useEffect } from "react";
import { trackViewContent } from "@/lib/analytics";

/**
 * Fires a Meta `ViewContent` (and the matching GA4 catalog event) once the
 * page it describes is mounted. Props are primitives from the server component
 * tree, so a client-side navigation between two course pages re-fires the
 * event with the new course's values.
 */
export default function ViewContent({
  contentName,
  contentId,
  contentType = "product",
  value,
}: {
  contentName: string;
  contentId?: string;
  contentType?: string;
  value?: number;
}) {
  useEffect(() => {
    trackViewContent({ contentName, contentId, contentType, value });
  }, [contentName, contentId, contentType, value]);

  return null;
}
