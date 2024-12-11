import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getFirstLetters } from "@/utils/string";

const ChatAvatar = ({
  src,
  name,
  badge,
}: {
  src: string;
  name: string;
  badge: string;
}) => {
  return (
    <div className="flex gap-3 items-center mb-2">
      <Avatar className="w-8 h-8">
        <AvatarImage src={src} alt="" />
        <AvatarFallback>{getFirstLetters(name)}</AvatarFallback>
      </Avatar>
      <div className="font-semibold">
        {name}{" "}
        <Badge
          variant="default"
          className="ms-1 bg-orange-100 hover:bg-orange-50 text-orange-500 border-orange-500"
        >
          {badge}
        </Badge>
      </div>
    </div>
  );
};

export default ChatAvatar;
