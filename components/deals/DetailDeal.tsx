import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    useColorModeValue,
  } from '@chakra-ui/react';

  import { ReactElement } from 'react';
  import useColorTheme from '../../hooks/useColorTheme';
  import moment from 'moment';
  
  interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
  }
  
  interface DealsProps {
  deal:any
  }
  
  const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
 const DetailDeal = ({deal}:DealsProps) => {
    const colors = useColorTheme();    
    const vaildForm = moment(deal.validFrom).format("MMM Do");
    const validTo = moment(deal.validTo).format("MMM Do");

     
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                deal.desktopImage.filename
              }
            />
          </Flex>
          <Stack spacing={4}>

            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              {vaildForm} - {validTo}
            </Text>

            <Heading color={colors.primary} fontFamily="Mulish, sans-serif;">{deal.title}</Heading>
           
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Text color={colors.primary} pt={5} fontSize={'lg'}>
             DEAL DETAILS
            </Text>
            <Text color={'gray.500'} fontSize={'lg'}>
            {deal.sumary}
            </Text>
            </Stack>
          </Stack>
          
        </SimpleGrid>
      </Container>
    );
  }

  export default DetailDeal;