import { Divider, Box, Heading, } from "@chakra-ui/react";
import React from 'react';
import useColorTheme from '../../hooks/useColorTheme';
import FbPostCard from '../cards/FbPostCard';

type Props = {
   posts:any
}


const ListFbPostLastest = ({posts}:Props) => {
    const colors = useColorTheme();
    
    return (
    <>
        <Divider width="100%" mt="1.6rem" mb=".3rem" mx="auto" />
        <Box  as="section" mt="10px">
            <Heading
             data-aos="fade-down-left"
                transition="ease-in 0.15s"
                fontSize="4xl"
                bottom="30px"
                textAlign="center"
                color={colors.primary}
                fontFamily="Mulish, sans-serif;">
                LASTEST POST ON FACEBOOK
            </Heading>
            <Box  d="flex" flexDirection='column'>
                    {posts.data.map((post: any) => (
                        <Box w='full' key={post.id} p="3" >
                            <FbPostCard key={post.id} post={post} />
                        </Box>
                    ))}
            </Box>
        </Box>
    </>
    )
}

export const getServerSideProps = async () => {
    const res = await fetch('https://graph.facebook.com/v10.0/100230702234464/feed?access_token=EAADBQNZBhgo4BAKw2OkpLNoEZCQ3tpZCbKJkTzIVZArevt7bJ56sFQIbLwrALiTRqvAabGlIOm3yXkSZAdi1bcxuuRN2dYfYZBUdUcMWNaWQRX7d20Dn0wHVz1lyoJVyIZBjkDGKIgOo2HKPfrkgRQE2dKQ2CqRml5JokMsR40PaAZDZD')
    const data = await res.json()
  
    return {
      props: {
        data,
      },
    }
  }

export default ListFbPostLastest;