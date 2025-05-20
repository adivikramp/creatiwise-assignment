import {
  AudioWaveform,
  ChevronDown,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { DropdownMenu } from "./ui/dropdown-menu"
import { useState } from "react"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Articles",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Create History",
          url: "#",
        },
        {
          title: "Generated Articles",
          url: "#",
        },
        {
          title: "Keyword Projects",
          url: "#",
        },
        {
          title: "AI Keyword to Article",
          url: "#",
        },
        {
          title: "Steal Competitor Keyword",
          url: "#",
        },
        {
          title: "Import Keyword from GSC",
          url: "#",
        },
        {
          title: "Manual Keyword to Article",
          url: "#",
        },
        {
          title: "Bulk Keyword to Article",
          url: "#",
        },
        {
          title: "Longtail Keyword to Article",
          url: "#",
        },
        {
          title: "Article Settings",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Auto Blog",
      url: "#",
      icon: Frame,
    },
    {
      name: "Internal Links",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Free Backlinks",
      url: "#",
      icon: Map,
    },
    {
      name: "Integrations",
      url: "#",
      icon: Frame,
    },
    {
      name: "Subscription",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Affiliate Program",
      url: "#",
      icon: Map,
    },
    {
      name: "Help Center",
      url: "#",
      icon: Frame,
    },
    {
      name: "Updates",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Live Chat Support",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar() {
  const [position, setPosition] = useState("amazon")

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="mb-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-extrabold tracking-tight mt-2 mb-4">abun</h1>
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
          </DropdownMenu>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
