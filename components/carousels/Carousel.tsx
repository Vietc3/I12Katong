import React, { useState } from "react";
import {
  Text,
  Box,
  Flex,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import useColorTheme from '../../hooks/useColorTheme';
import CarouselItems from "./CarouselItems";

type Props = {
  blok: any
}

const Carousel = ({ blok }: Props) => {
 
  const slides = blok.carousels;

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide: any) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    pd: "0",
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const colors = useColorTheme();

  return (
    <Flex
      w="full"
      bg={useColorModeValue("gray.200", "gray.600")}
      p={0}
      alignItems="center"
      justifyContent="center"
      data-aos="zoom-in"
    >
      <Flex w="full" pos="relative" overflow="hidden" >
        <Flex h="650px" w="full" {...carouselStyle}>
          {slides.map((slide: any, index: number) => (
            <CarouselItems key={index} blok={slide.content} />
          ))}
        </Flex>
        <Text cursor="pointer" pos="absolute"
          top="50%"
          w="auto"
          mt="-22px"
          p="16px" color="white"
          fontWeight="bold"
          fontSize="18px"
          transition="0.6s ease"
          borderRadius="0 3px 3px 0"
          userSelect="none"
          _hover={{
            opacity:0.8,
              bg: "black"}} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
      <Text cursor="pointer" pos="absolute"
          top="50%"
          w="auto"
          mt="-22px"
          p="16px" color="white"
          fontWeight="bold"
          fontSize="18px"
          transition="0.6s ease"
          borderRadius="0 3px 3px 0"
          userSelect="none"
          _hover={{
            opacity:0.8,
              bg: "black"}} right="0" onClick={nextSlide}>
        &#10095;
        </Text>

      <HStack justify="center" pos="absolute" bottom="8px" w="full">
        {Array.from({ length: slidesCount }).map((_, slide) => (
          <Box
            key={`dots-${slide}`}
            cursor="pointer"
            boxSize={["4px" , "10px"]}
            m="0 2px"
            bg={currentSlide === slide ? colors.primary : "blackAlpha.400"}
            rounded="50%"
            display="inline-block"
            transition="background-color 0.6s ease"
            _hover={{ bg: "blackAlpha.800" }}
            onClick={() => setSlide(slide)}
          ></Box>
        ))}
      </HStack>
    </Flex>
    </Flex >
  );
};
export default Carousel;