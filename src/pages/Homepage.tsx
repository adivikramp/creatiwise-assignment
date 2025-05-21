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
import * as React from "react";

const Homepage = () => {
    const isMobile = useIsMobile();
    const [selectedTab, setSelectedTab] = React.useState<string>("generated-articles");

    const tabOptions = [
        { value: "generated-articles", label: "Generated Articles" },
        { value: "published-articles", label: "Published Articles" },
        { value: "scheduled-articles", label: "Scheduled Articles" },
        { value: "archived-articles", label: "Archived Articles" },
    ];

    return (
        <div className="flex flex-1 flex-col">
            <div className="@container/main flex flex-1 flex-col gap-2">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:p-4">
                    <div className="relative flex items-center justify-center">
                        <SidebarTrigger className="absolute left-2" />
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
                                <TabsTrigger
                                    value="generated-articles"
                                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-8 py-4 border border-gray-200 rounded-md"
                                >
                                    Generated Articles
                                </TabsTrigger>
                                <TabsTrigger
                                    value="published-articles"
                                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-8 py-4 border-r border-t border-b border-gray-200 rounded-md -ml-2"
                                >
                                    Published Articles
                                </TabsTrigger>
                                <TabsTrigger
                                    value="scheduled-articles"
                                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-8 py-4 border-r border-t border-b border-gray-200 rounded-md -ml-2"
                                >
                                    Scheduled Articles
                                </TabsTrigger>
                                <TabsTrigger
                                    value="archived-articles"
                                    className="data-[state=active]:bg-blue-500 data-[state=active]:text-white px-8 py-4 border-r border-t border-b border-gray-200 rounded-md -ml-2"
                                >
                                    Archived Articles
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    )}
                    <Input
                        className="w-64 mx-auto shadow-sm"
                        type="text"
                        placeholder="Search for Title and Keywords"
                    />
                    <DataTable data={tableData} />
                </div>
            </div>
        </div>
    );
};

export default Homepage;