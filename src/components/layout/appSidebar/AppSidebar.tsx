"use client"
import {
  Bell,
  BotMessageSquare,
  CalendarDays,
  CheckSquare,
  Cloud,
  LayoutDashboard,
  Mail,
  NotebookPen,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import scss from "./appSidebar.module.scss";
import { usePathname } from "next/navigation";

export function AppSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar className={scss.main}>
      <SidebarHeader className={scss.header}>
        <h2>Actions</h2>
      </SidebarHeader>

      <SidebarContent className={scss.content}>
        <SidebarMenu className={scss.menu}>
          <div className={scss.topMenu}>
            <SidebarMenuItem>
              <SidebarMenuButton
                className={pathname === "/" ? scss.active : scss.button}
                render={<a href="/" />}
                // isActive
              >
                <LayoutDashboard size={19} />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                className={pathname === "/calendar" ? scss.active : scss.button}
                render={<a href="/calendar" />}
              >
                <CalendarDays size={19} />
                <span>Calendar</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                className={pathname === "/gmail" ? scss.active : scss.button}
                render={<a href="/gmail" />}
              >
                <Mail size={19} />
                <span>Gmail</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                className={pathname === "/oneDrive" ? scss.active : scss.button}
                render={<a href="/oneDrive" />}
              >
                <Cloud size={19} />
                <span>OneDrive</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                className={pathname === "/notes" ? scss.active : scss.button}
                render={<a href="/notes" />}
              >
                <NotebookPen size={19} />
                <span>Notes</span>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton
                className={pathname === "/tasks" ? scss.active : scss.button}
                render={<a href="/tasks" />}
              >
                <CheckSquare size={19} />
                <span>Tasks</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </div>

          <div className={scss.divider} />

          <SidebarMenuItem>
            <SidebarMenuButton
              className={`${scss.button} ${scss.aiButton}`}
              render={<a href="/aiChat" />}
            >
              <BotMessageSquare size={19} />
              <span>AI Chat</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className={scss.footer}>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              className={
                pathname === "/notifications" ? scss.active : scss.button
              }
              render={<a href="/notifications" />}
            >
              <Bell size={19} />
              <span>Notifications</span>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              className={pathname === "/settings" ? scss.active : scss.button}
              render={<a href="/settings" />}
            >
              <Settings size={19} />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
