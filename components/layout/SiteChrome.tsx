"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/**
 * Renders the shared site chrome (global studio nav + footer) on every page
 * EXCEPT the /agency landing, which is fully self-contained and provides its
 * own header/footer.
 */
export default function SiteChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const isAgency = segments[2] === "agency" || segments[1] === "agency";

  if (isAgency) {
    return (
      <>
        {children}
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-14">{children}</div>
      <Footer />
    </>
  );
}