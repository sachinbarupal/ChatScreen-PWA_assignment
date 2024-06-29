import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Chat from "./components/Chat";

const App: React.FC = () => {
  return (
    <Box overflowY="hidden">
      <Header />
      <Chat />
    </Box>
  );
};

export default App;
