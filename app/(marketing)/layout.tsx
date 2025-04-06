import type { PropsWithChildren } from "react";

import { Footer } from "./footer";
import { Header } from "./header";

// marketing sayfalarının layoutu
const MarketingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex flex-1 flex-col items-center justify-center">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MarketingLayout;
