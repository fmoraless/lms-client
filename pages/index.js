import { 
  Flex,
  Heading,
  Input,
  Button,
  Box,
  useColorMode,
  useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { IoSunny, IoMoon } from "react-icons/io5";

const Home = () => {
  const {toggleColorMode } = useColorMode()
  const [toggle, setToggle] = useState(false)
  const formBackGround = useColorModeValue("gray.100", "gray.700")

  return (
    <Flex
      height={"100vh"}
      alignItems={"center"}
      justifyContent={"center"}
      >
      <Flex
        direction={"column"}
        background={formBackGround}
        p={12}
        rounded={6}
        position={"relative"}
      >
        <Heading mb={6}>Log in</Heading>
        
        <Input
         placeholder="Email"
         variant={"filled"}
         mb={3}
         type="email" />

        <Input
         placeholder="Password"
         variant={"filled"}
         mb={3}
         type="password" />

        <Button colorScheme={"teal"}>Log In</Button>
        <Box 
          position={"absolute"}
          top={2}
          right={2}
          cursor={"pointer"}
          onClick={() => {
            toggleColorMode();
            setToggle(!toggle);
          }}
        >
          {toggle ? <IoSunny /> : <IoMoon />}
        </Box>
      </Flex>
    </Flex>
  )
}

export default Home