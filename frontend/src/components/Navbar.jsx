"use client"

import { Container, Text, Flex, HStack, Button, Theme } from '@chakra-ui/react'
import React from 'react'
import { BiPlus, BiShoppingBag } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { useColorMode, ColorModeIcon } from './ui/color-mode'

const Navbar = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
            h={16}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDir={{
                base: "column",
                sm: "row"
            }}
        >
            <Text
                fontSize={{ base: "22px", sm: "28px" }}
                fontWeight="bold"
                textTransform="uppercase"
                textAlign="center"
                bgGradient="linear(to-r, cyan.400, blue.500)"
                sx={{
                    backgroundImage: "linear-gradient(to right, #22d3ee, #3b82f6)",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    backgroundClip: "text",
                }}
                >
                Bitiful Market 🛒
            </Text>
            <HStack
                spaceX={2}
                alignItems={"center"}
            >
                <Link to={"/create"}>
                    <Button>
                        <BiPlus fontSize={20}/>
                    </Button>
                </Link>
                <Button onClick={toggleColorMode}>
                    <ColorModeIcon />
                </Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar