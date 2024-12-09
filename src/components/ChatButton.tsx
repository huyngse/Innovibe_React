import { MdChat } from "react-icons/md";
import { Button } from "./ui/button";
import styles from "./ChatButton.module.css";
import { Link } from "react-router-dom";
const ChatButton = () => {
  return (
    <div className="fixed bottom-10 right-24 z-50">
      <Link to={"/chat"}>
        <Button className="bg-orange-600 hover:bg-orange-500 active:bg-orange-400 uppercase flex gap-2 shadow">
          <MdChat className="" />
          Chat
        </Button>
      </Link>
      <span className={styles.ping}></span>
    </div>
  );
};

export default ChatButton;
