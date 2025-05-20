import {
  Newspaper,
  SquareChartGantt,
  Link,
  Cable,
  CircleDollarSign,
  Combine,
  Star,
  Info,
  MessageCircleMore,
  Bell,
  UserRoundPen
} from "lucide-react"

export const user = {
  name: "Profile",
  email: "m@example.com",
  avatar: "https://avatars.githubusercontent.com/u/124599?v=4",
  icon: UserRoundPen,
};

export const navMain = [
  {
    title: "Articles",
    url: "#",
    icon: Newspaper,
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
];

export const projects = [
  {
    name: "Auto Blog",
    url: "#",
    icon: SquareChartGantt,
  },
  {
    name: "Internal Links",
    url: "#",
    icon: Combine,
  },
  {
    name: "Free Backlinks",
    url: "#",
    icon: Link,
  },
  {
    name: "Integrations",
    url: "#",
    icon: Cable,
  },
  {
    name: "Subscription",
    url: "#",
    icon: Star,
  },
  {
    name: "Affiliate Program",
    url: "#",
    icon: CircleDollarSign,
  },
  {
    name: "Help Center",
    url: "#",
    icon: Info,
  },
  {
    name: "Updates",
    url: "#",
    icon: Bell,
  },
  {
    name: "Live Chat Support",
    url: "#",
    icon: MessageCircleMore,
  },
];
