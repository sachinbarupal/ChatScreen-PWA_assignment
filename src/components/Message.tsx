import { Box, Text, Avatar, AvatarBadge } from "@chakra-ui/react";
import { VscVerifiedFilled } from "react-icons/vsc";
interface sender {
  image: string;
  is_kyc_verified: boolean;
  user_id: string;
  self: boolean;
}

interface MessageProps {
  message: string;
  sender: sender;
}

const Message: React.FC<MessageProps> = ({ message, sender }) => {
  return (
    <Box
      display="flex"
      w="full"
      flexDirection={sender.self ? "row-reverse" : "row"}
      alignItems="flex-start"
    >
      {!sender.self && (
        <Avatar cursor="pointer" src={sender.image} size="sm">
          {sender.is_kyc_verified && (
            <AvatarBadge boxSize="1.25em" border="none">
              <VscVerifiedFilled color="blue" fontSize="14px" />
            </AvatarBadge>
          )}
        </Avatar>
      )}
      <Box
        ml={sender.self ? 0 : 3}
        mr={sender.self ? 3 : 0}
        bg={sender.self ? "blue.500" : "gray.200"}
        style={{
          maxWidth: "70%",
          backgroundColor: sender.self ? "#1C63D5" : "#FFFFFF",
          color: sender.self ? "#FFFFFF" : "#606060",
          boxShadow: "0px 4px 8px 0px #00000014",
          borderRadius: sender.self
            ? "12px 12px 0px 12px"
            : "0px 12px 12px 12px",
          fontSize: "16px",
          padding: "8px",
        }}
      >
        <Text>{message}</Text>
      </Box>
    </Box>
  );
};

export default Message;
