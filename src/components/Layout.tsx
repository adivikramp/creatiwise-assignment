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
            <SidebarInset>
                <main className="flex-1 p-4">
                    <SidebarTrigger className="-ml-1" />
                    <Outlet />
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
}