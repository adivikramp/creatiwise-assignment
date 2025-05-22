import { DataTable } from "@/components/data-table";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { tableData } from "@/data/table-data";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";

import type { TabOption } from "@/types/types";

const Homepage = () => {
    const isMobile = useIsMobile();
    const [selectedTab, setSelectedTab] = useState<string>("generated-articles");
    const [searchTerm, setSearchTerm] = useState<string>("");

    const tabOptions: TabOption[] = [
        { value: "generated-articles", label: "Generated Articles", style: "data-[state=active]:bg-blue-500 data-[state=active]:text-white px-8 py-4 border border-gray-200 rounded-md" },
        { value: "published-articles", label: "Published Articles", style: "data-[state=active]:bg-blue-500 data-[state=active]:text-white px-8 py-4 border-r border-t border-b border-gray-200 rounded-md -ml-2" },
        { value: "scheduled-articles", label: "Scheduled Articles", style: "data-[state=active]:bg-blue-500 data-[state=active]:text-white px-8 py-4 border-r border-t border-b border-gray-200 rounded-md -ml-2" },
        { value: "archived-articles", label: "Archived Articles", style: "data-[state=active]:bg-blue-500 data-[state=active]:text-white px-8 py-4 border-r border-t border-b border-gray-200 rounded-md -ml-2" },
    ];

    const filteredData = tableData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (Array.isArray(item.keyword) && item.keyword.some((keyword: string) =>
            keyword.toLowerCase().includes(searchTerm.toLowerCase()))
        )
    );

    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:p-4">
                    <div className="relative flex items-center justify-center">
                        <SidebarTrigger className="absolute left-2 cursor-pointer" />
                        <h1 className="flex-1 text-center text-2xl md:text-3xl font-bold">Articles</h1>
                    </div>
                    {isMobile ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-64 mx-auto flex items-center justify-between px-8 py-4 border border-gray-200 rounded-md shadow-sm"
                                >
                                    <span>
                                        {tabOptions.find((tab) => tab.value === selectedTab)?.label || "Select Category"}
                                    </span>
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-64 mx-auto">
                                {tabOptions.map((tab) => (
                                    <DropdownMenuItem
                                        key={tab.value}
                                        onClick={() => setSelectedTab(tab.value)}
                                        className="px-8 py-4"
                                    >
                                        {tab.label}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Tabs
                            value={selectedTab}
                            onValueChange={setSelectedTab}
                            className="w-full flex flex-col items-center justify-center"
                        >
                            <TabsList className="bg-white overflow-hidden">
                                {tabOptions.map((tab) => (
                                    <TabsTrigger
                                        key={tab.value}
                                        value={tab.value}
                                        onClick={() => setSelectedTab(tab.value)}
                                        className={tab.style}
                                    >
                                        {tab.label}
                                    </TabsTrigger>
                                ))}
                            </TabsList>
                        </Tabs>
                    )}
                    <Input
                        className="w-64 mx-auto shadow-sm text-sm md:text-md"
                        type="text"
                        placeholder="Search for Title and Keywords"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <DataTable data={filteredData} />
                </div>
            </div>
        </div>
    );
};

export default Homepage;