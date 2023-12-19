import React, { Suspense } from "react";

import SectionHeader from "../components/miscellaneous/SectionHeader";
import Bullet from "../components/miscellaneous/Bullet";

import { Box, Spinner, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Body, Heading2, Heading3 } from "../components/Typography/index";

import useColorSwitcher from "../utils/useColorSwitcher";

const ProfileImage = React.lazy(() =>
  import("../components/miscellaneous/ProfileImage")
);

const About = () => {
  const { lightGreyBg, greyBg } = useColorSwitcher();

  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
    >
      <Box
        as="section"
        outline="0"
        tabIndex={-1}
        w="100%"
        my="4em"
        px={{ base: "0", md: "20", xl: "0" }}
      >
        <Box w="100%" mb={{ base: "32px", md: "50px" }}>
          <SectionHeader mr="16px">
            <Heading2>about</Heading2>
          </SectionHeader>
        </Box>
        <Stack
          align="center"
          spacing={{ sm: "10", md: "32" }}
          direction={{ base: "column", xl: "row" }}
          justify={{ base: "space-between", xl: "space-evenly" }}
        >
          <Box
            bg={lightGreyBg}
            rounded="full"
            display="grid"
            placeItems="center"
            p={{ base: "8px", md: "16px" }}
          >
            <Box
              bg={greyBg}
              rounded="full"
              display="grid"
              placeItems="center"
              p={{ base: "8px", md: "16px" }}
            >
              <Suspense
                fallback={
                  <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                  />
                }
              >
                <ProfileImage />
              </Suspense>
            </Box>
          </Box>
          <Stack spacing={{ sm: "8" }} p="8px" w={{ base: "100%", xl: "50%" }}>
            <Body mb="2em" textAlign={{ sm: "center", md: "justify" }}>
              Hello! I'm Sukrit, a Backend Developer with close to 3 years of experience specializing in crafting efficient and secure server-side solutions using Node.js, Python,
               and a tech stack including Express.js, Socket.io, React.js, and SQL databases. Passionate about driving impact through solving complex challenges and optimizing user experiences. Let's connect and explore the world of backend development together!
            </Body>
            <Box>
              <Heading3>What I've been up to:</Heading3>
              <Stack as="ul">
                <Bullet as="li">Building this page!</Bullet>
                <Bullet as="li">
                  Getting deeper into Nodejs and Typescript
                </Bullet>
                <Bullet as="li">Learning Better Software Design</Bullet>
                <Bullet as="li">Getting clean pull-ups!</Bullet>
                <Bullet as="li">Playing my piano</Bullet>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </motion.div>
  );
};

export default About;
