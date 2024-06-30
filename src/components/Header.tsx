import {
  Box,
  Flex,
  IconButton,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Avatar,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaEllipsisV } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { TbMessageReport } from "react-icons/tb";
const Header: React.FC = () => {
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    fetchHeader();
  }, []);

  const fetchHeader = async () => {
    try {
      const response = await axios.get(
        `https://qa.corider.in/assignment/chat?page=0`
      );
      setTo(response.data.to);
      setName(response.data.name);
      setFrom(response.data.from);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  return (
    <Flex
      bg="#FAF9F4"
      alignItems="center"
      position="fixed"
      top={0}
      left={0}
      right={0}
      // height="0px"
      zIndex={10}
      borderBottom="1px solid #E5E5E0"
      w="full"
      className=" p-4 pt-5 gap-4"
      direction="column"
    >
      <Flex
        w="full"
        justifyContent="space-between"
        alignItems="center"
        className=" gap-4"
      >
        <Flex alignItems="center">
          <IconButton
            bg="transparent"
            icon={<FaArrowLeft size={24} />}
            aria-label="Back"
          />
          <Text fontWeight="700" fontSize="24px">
            {name}
          </Text>
        </Flex>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" size-8 mr-1 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
          />
        </svg>
      </Flex>

      <Flex
        w="full"
        justifyContent="space-between"
        alignItems="center"
        className=" gap-4"
      >
        <Flex alignItems="center">
          <Avatar
            src="https://img.freepik.com/free-photo/medium-shot-people-with-glasses-posing-studio_23-2150169333.jpg"
            size="md"
            cursor="pointer"
          />
          <Box ml={3} flex={1}>
            <Text>
              From <span className=" text-lg font-bold">{from}</span>
            </Text>
            <Text>
              To <span className=" text-lg font-bold">{to}</span>
            </Text>
          </Box>
        </Flex>
        <Menu>
          <MenuButton
            bg="transparent"
            as={IconButton}
            icon={<FaEllipsisV size={24} />}
          />
          <MenuList>
            <MenuItem>
              <GoPeople className=" mr-1" /> Members
            </MenuItem>
            <MenuItem>
              <IoCallOutline className="mr-1" /> Share Number
            </MenuItem>
            <MenuItem>
              <TbMessageReport className="mr-1" /> Report
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default Header;
