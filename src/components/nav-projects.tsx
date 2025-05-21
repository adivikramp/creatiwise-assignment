import { type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavProjects({
  projects,
  activeItem,
  setActiveItem,
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon
  }[]
  activeItem: string;
  setActiveItem: (title: string) => void;
}) {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden px-1 -mt-1">
      <SidebarMenu>
        {projects.map((item) => {
          const isActive = activeItem === item.name;
          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton
                asChild
                onClick={() => {
                  setActiveItem(item.name);
                  window.location.href = item.url;
                }}
              >
                <a href={item.url}>
                  <item.icon className={`text-blue-600 ${isActive ? "text-blue-500" : ""}`} />
                  <span className={`mx-2 ${isActive ? "text-blue-500" : ""}`}>
                    {item.name}
                  </span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
