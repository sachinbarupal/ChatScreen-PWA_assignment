import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, VStack } from "@chakra-ui/react";
import Message from "./Message";
import InfiniteScroll from "react-infinite-scroll-component";
import InputBox from "./InputBox";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [page, setPage] = useState<number>(0);
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get(
        `https://qa.corider.in/assignment/chat?page=${page}`
      );
      setMessages((prevMessages) => [...response.data.chats, ...prevMessages]);
      // console.log(response.data.chats);
      setPage((page) => page + 1);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      // className=" mt-[140px]"
      // marginTop="145px"
      // className="h-[calc(100vh-7rem)]"
      bg="#FAF9F4"
    >
      <div
        id="scrollableDiv"
        className=" p-4 overflow-auto flex flex-col-reverse overscroll-auto mt-[145px]"
      >
        <InfiniteScroll
          dataLength={messages.length}
          next={fetchMessages}
          style={{ display: "flex", flexDirection: "column-reverse" }}
          inverse={true} //
          hasMore={true}
          loader={<h1 className=" text-center font-bold">Loading...</h1>}
          scrollableTarget="scrollableDiv"
        >
          <VStack spacing={4} className=" mb-[70px] ">
            {messages.map((message) => (
              <Message
                key={message.id}
                message={message.message}
                sender={message.sender}
              />
            ))}
          </VStack>
        </InfiniteScroll>
      </div>
      <InputBox setMessages={setMessages} />
    </Box>
  );
};

export default Chat;
