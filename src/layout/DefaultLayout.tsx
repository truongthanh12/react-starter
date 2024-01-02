import { ReactNode, Suspense } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<>Loading...</>}>
      <header className="px-8 lg:px-20 border-b border-gray-200mb-4">
        <Header />
      </header>
      <main className="py-8 lg:py-16 background-body min-h-screen">
        <div className="max-w-[1600px] mx-auto px-3 lg:px-6">{children}</div>
      </main>
      <footer className="px-8 border-t border-gray-200 lg:px-20">
        <Footer />
      </footer>
    </Suspense>
  );
}
