import {
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SidebarGroup, SidebarHeader } from "./ui/sidebar"
import { DropdownMenu } from "@radix-ui/react-dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const NavHeader = () => {
    const [position, setPosition] = useState("amazon")

    return (
        <SidebarGroup className="group-data-[collapsible=icon]:hidden px-1 -mt-1">
            <SidebarHeader className="text-4xl font-extrabold tracking-tight mt-2 mb-4 text-center">abun</SidebarHeader>
            <DropdownMenu>
                <DropdownMenuTrigger className="w-full" asChild>
                    <div className="w-48 flex items-center px-2 py-2 gap-x-2 border border-gray-300 rounded-full">
                        <img src="https://avatars.githubusercontent.com/u/124599?v=4" className="rounded-full h-8 w-8" />
                        <p className="text-sm font-semibold">amazon.com</p>
                        <ChevronDown className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                        <DropdownMenuRadioItem value="amazon">amazon.com</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="google">google.com</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="facebook">facebook.com</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarGroup>
    )
}

export default NavHeader

{/* <SidebarHeader className="text-4xl font-extrabold tracking-tight mt-2 mb-4">abun</SidebarHeader>
          <DropdownMenu>
            <DropdownMenuTrigger className="w-56 border rounded-full" asChild>
              <div className="flex items-center px-3 py-2 gap-x-2">
                <img src="https://avatars.githubusercontent.com/u/124599?v=4" className="rounded-full h-6 w-6" />
                <p className="text-sm font-semibold">amazon.com</p>
                <ChevronDown className="ml-auto size-4 transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                <DropdownMenuRadioItem value="amazon">amazon.com</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="google">google.com</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="facebook">facebook.com</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu> */}

{/* <SidebarGroup className="group-data-[collapsible=icon]:hidden px-1 -mt-1">
      <SidebarMenu>
        {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span className="mx-2">{item.name}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup> */}