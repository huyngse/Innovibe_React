import { MoreHorizontal, Trash2, MessageSquare } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import useChatbotStore from "@/stores/use-chatbot-store";
import { useNavigate } from "react-router-dom";

export function NavRecents() {
  const { isMobile } = useSidebar();
  const previousPrompts = useChatbotStore((state) => state.previousPrompts);
  const deleteChat = useChatbotStore((state) => state.deleteChat);
  const navigate = useNavigate();
  const items = previousPrompts.map((prompt) => ({
    id: prompt.id,
    name: prompt.title,
  }));
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Gần đây</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem key={item.id}>
            <SidebarMenuButton
              tooltip={item.name}
              onClick={() => navigate(`/chat/${item.id}`)}
            >
              <MessageSquare />
              <span>{item.name}</span>
            </SidebarMenuButton>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuAction showOnHover>
                  <MoreHorizontal />
                  <span className="sr-only">Thêm</span>
                </SidebarMenuAction>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-48 rounded-lg"
                side={isMobile ? "bottom" : "right"}
                align={isMobile ? "end" : "start"}
              >
                <DropdownMenuItem
                  onClick={() => {
                    deleteChat(item.id);
                  }}
                >
                  <Trash2 className="text-muted-foreground" />
                  <span>Xóa trò chuyện này</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        ))}
        {/* <SidebarMenuItem>
          <SidebarMenuButton className="text-sidebar-foreground/70">
            <MoreHorizontal className="text-sidebar-foreground/70" />
            <span>More</span>
          </SidebarMenuButton>
        </SidebarMenuItem> */}
      </SidebarMenu>
    </SidebarGroup>
  );
}
