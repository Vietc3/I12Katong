import React from "react";
import { useRouter } from 'next/router';
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

  const router = useRouter();
  const onClick = (slug: string) => {
      router.push(`${slug}`);
      window.scrollTo(0, 0);
  };

    return (
        <Box h="100%"   boxSize="full" shadow="md" flex="none" >
        <Image h="100%"  onClick={()=> onClick(blok.urlLink)} display={{ base: 'none', md: 'flex' }} src={blok.desktopImage.filename} boxSize="full" backgroundSize="cover" />
        <Image onClick={()=> onClick(blok.urlLink)} display={{ base: 'flex', md: 'none' }}  src={blok.mobileImage.filename} boxSize="full" backgroundSize="cover" />
        <Stack
          p="8px 12px"
          pos="absolute"
          bottom="24px"
          textAlign="center"
          w="full"
          mb="8"
          color="white"
        >
          {/* <Text fontSize="2xl">Content Type:{blok.contentType}</Text>
          <Text fontSize="lg">Link Type:{blok.urlLink}</Text> */}
        </Stack>
      </Box>
    )
  }
  
  export default CarouselItems;
  