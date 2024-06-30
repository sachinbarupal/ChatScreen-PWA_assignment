import { Box, Flex, IconButton } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { GoPaperclip } from "react-icons/go";
import { IoCameraOutline } from "react-icons/io5";
import { RxPaperPlane } from "react-icons/rx";
import { IoVideocamOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
interface InputBoxProps {
  setMessages: Function;
}

const InputBox: React.FC<InputBoxProps> = ({ setMessages }) => {
  const [showOptions, setShowOptions] = useState(false);
  const newMessage = useRef<HTMLInputElement>(null);

  const handleSend = (): void => {
    if (newMessage.current?.value === "") return;
    const msg = {
      sender: {
        self: true,
      },
      message: newMessage.current?.value,
    };
    setMessages((messages: any) => [...messages, msg]);
  };

  return (
    <div className=" bg-[#FAF9F4] px-4 py-2 fixed bottom-0 left-0 right-0 z-10 items-center">
      <Flex className="px-3 py-[11px] gap-4 relative" bg="white">
        <input
          ref={newMessage}
          className="  rounded-lg border-none outline-none focus:outline-none flex-1 text-[#B7B7B7]"
          placeholder="Type a message"
        />
        {showOptions && (
          <Box
            style={{ boxShadow: "0px -1px 8px 0px #0000000D" }}
            className=" flex absolute top-[-60px] right-1 px-4 py-3 gap-4 bg-[#008000] rounded-[999px]"
          >
            <div
              style={{
                width: "0px",
                height: "0px",
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderTop: "10px solid #008000",
                position: "absolute",
                top: "55px",
                right: "45%",
              }}
            ></div>
            <IoCameraOutline cursor="pointer" color="white" size="32px" />
            <IoVideocamOutline cursor="pointer" color="white" size="32px" />
            <IoDocumentTextOutline cursor="pointer" color="white" size="32px" />
          </Box>
        )}
        <IconButton
          onClick={() => setShowOptions((opt) => !opt)}
          bg="transparent"
          icon={<GoPaperclip size="20px" />}
          aria-label="Attach"
        />
        <IconButton
          bg="transparent"
          icon={<RxPaperPlane size="20px" />}
          onClick={handleSend}
          aria-label="Send"
        />
      </Flex>
    </div>
  );
};
export default InputBox;
