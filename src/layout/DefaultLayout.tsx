import { ReactNode, Suspense } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<>Loading...</>}>
      <header className="px-8 lg:px-20 border-b border-gray-200 mb-4">
        <Header />
      </header>
      <main>{children}</main>
      <footer className="px-8 border-t border-gray-200 mt-4 lg:px-20">
        <Footer />
      </footer>
    </Suspense>
  );
}
