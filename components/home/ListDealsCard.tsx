import React, { useEffect, useState } from 'react';
import { Box, useMediaQuery,Heading,Divider } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
import PhotoCard from '../cards/PhotoCard';

type Props = {
    margin?: number;
    containerHeight?: number;
    blok: any;
}

const ListDealsCard = ({
    blok,
    margin = 6,
    containerHeight = 550,
}: Props) => {
    const [isLargerThanMd] = useMediaQuery('(min-width: 48em)');
    const [maxContainerHeight, setMaxContainerHeight] = useState(containerHeight);
    const [maxFullPhotoHeight, setMaxFullPhotoHeight] = useState(containerHeight - 2 * margin);
    const [maxHalfPhotoHeight, setMaxHalfPhotoHeight] = useState(containerHeight / 2 - 2 * margin);

    useEffect(() => {
        setMaxContainerHeight(isLargerThanMd ? containerHeight : 4 * containerHeight);
        setMaxFullPhotoHeight(isLargerThanMd ? containerHeight - 2 * margin : containerHeight / 2 - 2 * margin);
        setMaxHalfPhotoHeight(isLargerThanMd ? containerHeight / 2 - 2 * margin : containerHeight / 2 - 2 * margin);
    }, [isLargerThanMd]);

    const colors = useColorTheme();
    const deals = blok.deals;

    return (<>
        <Divider width="100%" mt="1.6rem" mb=".3rem" mx="auto" />
        <Box  as="section" mt="10px">
            <Heading  
            data-aos="fade-up-right" 
                transition="ease-in 0.15s"
                fontSize="4xl"
                bottom="30px"
                textAlign="center"
                color={colors.primary}
                fontFamily="Mulish, sans-serif;">
                DEALS
            </Heading>
            <Box data-aos="zoom-out-up"  color={colors.primary} flex={1} d="flex" maxHeight={`${maxContainerHeight}px`} flexDirection={{ base: 'column', md: 'row' }}>
                <PhotoCard
                    title={deals[0].content.title}
                    imgSrc={deals[0].content.desktopImage.filename}
                    maxHeight={`${maxFullPhotoHeight}px`}
                    margin={`${margin}px`}
                    alt={`Picture of ${deals[0].content.title}`}
                    idDeal={deals[0].id}
                />
                <Box margin="0px" d="flex" flex={2} flexDirection="column">
                    <PhotoCard
                        title={deals[1].content.title}
                        imgSrc={deals[1].content.desktopImage.filename}
                        alt={`Picture of ${deals[1].content.title}`}
                        maxHeight={`${maxHalfPhotoHeight}px`}
                        margin={`${margin}px`}
                        idDeal={deals[1].id}
                    />
                    <Box margin="0px" d="flex" flex={1} height={'100%'} flexDirection={{ base: 'column', md: 'row' }}>
                        <PhotoCard
                            maxHeight={`${maxHalfPhotoHeight}px`}
                            title={deals[2].content.title}
                            imgSrc={deals[2].content.desktopImage.filename}
                            alt={`Picture of ${deals[2].content.title}`}
                            margin={`${margin}px`}
                            idDeal={deals[2].id}
                        />
                        <PhotoCard
                            maxHeight={`${maxHalfPhotoHeight}px`}
                            title={deals[3].content.title}
                            imgSrc={deals[3].content.desktopImage.filename}
                            alt={`Picture of ${deals[3].content.title}`}
                            margin={`${margin}px`}
                            idDeal={deals[3].id}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
</>
    );
};




export default ListDealsCard;
