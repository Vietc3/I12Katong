import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  IoLogoWhatsapp,
  IoLocationSharp,
  IoLogoEdge,
} from 'react-icons/io5';
import { ReactElement } from 'react';
import useColorTheme from '../../hooks/useColorTheme';

interface FeatureProps {
  text: string;
  iconBg?: string;
  icon?: ReactElement;
}

interface StoreProps {
  store: any
}

const Feature = ({ text, icon }: FeatureProps) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
       >
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

const DetailStore = ({ store }: StoreProps) => {
  const colors = useColorTheme();


  return (
    <Container maxW={'5xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        {/* <Flex> */}
        <Image
          rounded={'md'}
          alt={'feature image'}
          src={
            store.desktopImage.filename
          }
        />
        {/* </Flex> */}
        <Stack spacing={4}>

          <Text
            textTransform={'uppercase'}
            color="white"
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue(colors.primary, 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>

            {store.categories}
          </Text>

          <Heading color={colors.primary} fontFamily="Mulish, sans-serif;">{store.title}</Heading>

          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Text color={colors.primary} pt={5} fontSize={'lg'}>
              PRODUCTS AND SERVICES
            </Text>
            <Text fontSize={'md'}>
              {store.description}
            </Text>
            <Box color={colors.primary}>
              <Text fontSize={'lg'}>
                STORE DETAILS
            </Text>
            <Feature
                icon={
                  <Icon as={IoLogoWhatsapp} color={'yellow.500'} w={5} h={5} />
                }
                
                text={store.phone}
              />
            <Feature
                icon={
                  <Icon as={IoLocationSharp} color={'yellow.500'} w={5} h={5} />
                }
                
                text={store.location}
              />
            <Feature
                icon={
                  <Icon as={IoLogoEdge} color={'yellow.500'} w={5} h={5} />
                }
                text={store.website}
              />

            </Box>
          </Stack>
        </Stack>

      </SimpleGrid>
    </Container>
  );
}

export default DetailStore;