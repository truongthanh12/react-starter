import { ReactNode, Suspense } from "react";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<>Loading...</>}>
      <main>{children}</main>
    </Suspense>
  );
}
