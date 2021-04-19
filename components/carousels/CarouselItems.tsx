import React, { useState } from "react";
import {
  Text,
  Box,
  Image,
  Stack,
} from "@chakra-ui/react";

type Props = {
    blok:any;
}
const CarouselItems = ({blok}:Props) => {

    return (
        <Box  boxSize="full" shadow="md" flex="none" >
        <Image display={{ base: 'none', md: 'flex' }} src={blok.desktopImage.filename} boxSize="full" backgroundSize="cover" />
        <Image display={{ base: 'flex', md: 'none' }}  src={blok.mobileImage.filename} boxSize="full" backgroundSize="cover" />
        <Stack
          p="8px 12px"
          pos="absolute"
          bottom="24px"
          textAlign="center"
          w="full"
          mb="8"
          color="white"
        >
          <Text fontSize="2xl">Content Type:{blok.contentType}</Text>
          <Text fontSize="lg">Link Type:{blok.urlLink}</Text>
        </Stack>
      </Box>
    )
  }
  
  export default CarouselItems;
  