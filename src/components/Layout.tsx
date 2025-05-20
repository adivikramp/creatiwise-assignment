import { Outlet } from "react-router";
import {
    SidebarProvider,
    SidebarInset,
    SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "./app-sidebar";

export default function Layout() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="flex-1 py-10 px-6 bg-[#F0F5FA]">
                <main className="flex-1 bg-white rounded-sm shadow-xl">
                    <SidebarTrigger className="m-4" />
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}