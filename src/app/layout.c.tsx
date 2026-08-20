import { AppSidebar } from "@/components/layout/appSidebar/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import scss from "./layout.module.scss";
import Header from "@/components/layout/header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className={scss.main}>
        <div className={scss.topbar}>
          <div className={scss.trigger}>
            <SidebarTrigger />
          </div>
          <div className={scss.header}>
            <Header />
          </div>
        </div>
        <div className={scss.content}>{children}</div>
      </main>
    </SidebarProvider>
  );
}
