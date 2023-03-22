import React from "react";

import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <AppHeader></AppHeader>
      <main className="flex grow border">{children}</main>
      <AppFooter />
    </div>
  );
}
