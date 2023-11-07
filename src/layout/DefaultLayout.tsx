import { ReactNode, Suspense } from "react";
import { Header } from "../components/header";
import { Footer } from "../components/footer";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<>Loading...</>}>
      <header className="px-20 border-b-[1px] border-gray-200">
        <Header />
      </header>
      <main>{children}</main>
      <footer className="px-20">
        <Footer />
      </footer>
    </Suspense>
  );
}
