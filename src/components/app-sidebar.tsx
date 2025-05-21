import { useState } from "react"
import NavHeader from "./nav-header"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Separator } from "./ui/separator"

import { user, navMain, projects } from "@/data/sidebar-data";

export function AppSidebar() {
  const [activeItem, setActiveItem] = useState<string>("Create History");

  return (
    <Sidebar className="border-none">
      <SidebarHeader className="mb-4">
        <SidebarContent className="flex flex-col items-center justify-center">
          <NavHeader />
        </SidebarContent>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} activeItem={activeItem} setActiveItem={setActiveItem} />
        <NavProjects projects={projects} activeItem={activeItem} setActiveItem={setActiveItem} />
      </SidebarContent>
      <Separator className="border border-gray-100" />
      <SidebarFooter className="py-2 px-1">
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
