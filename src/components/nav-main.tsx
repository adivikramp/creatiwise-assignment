import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
  activeItem,
  setActiveItem,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
  activeItem: string;
  setActiveItem: (title: string) => void;
}) {
  return (
    <SidebarGroup className="py-0 px-1">
      <SidebarMenu>
        {items.map((item) => {
          const isMainActive = activeItem === item.title;
          const isSubActive = item.items?.some((subItem) => activeItem === subItem.title);

          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive || isSubActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={item.title}
                    onClick={() => {
                      setActiveItem(item.title);
                      window.location.href = item.url;
                    }}
                  >
                    {item.icon && (
                      <item.icon className={`text-blue-600 ${isMainActive ? "text-blue-500" : ""}`} />
                    )}
                    <span className={`mx-2 ${isMainActive ? "text-blue-500" : ""}`}>
                      {item.title}
                    </span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => {
                      const isSubItemActive = activeItem === subItem.title;
                      return (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            onClick={() => {
                              setActiveItem(subItem.title);
                              window.location.href = subItem.url;
                            }}
                          >
                            <a href={subItem.url}>
                              <span className={`mx-2 ${isSubItemActive ? "text-blue-500" : ""}`}>
                                {subItem.title}
                              </span>
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}
