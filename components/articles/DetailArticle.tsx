import { Box, Heading, Container, Text } from '@chakra-ui/react';
import Image from '../../components/Image';
import styles from '../../constants/styles';
import useColorTheme from '../../hooks/useColorTheme';
import AuthorCard from '../../components/cards/AuthorCard';
import SocialCard from '../../components/cards/SocialCard';
import ArtCard from '../../components/cards/ArtCard';
import NewsletterForm from '../../components/NewsletterForm';
import _ from 'lodash';

type Props = {
    blok?: any;
};

const DetailArticle = ({ blok }: Props) => {
    const articles = blok.articles;
    const colors = useColorTheme();
    return (
        <>
        <Container maxW={'6xl'} py={12} pt={5}>
            <Box as="section">
                <Image
                    borderRadius={styles.borderRadius}
                    objectFit={'cover'}
                    src={articles[0].content.desktopImage.filename}
                    width={'100%'}
                    maxHeight={'500px'}
                    minHeight={'360px'}
                />
            </Box>
            <Box d="flex" flexDirection={{ base: 'column', md: 'row' }}>
                <Box as="section" d="flex" flex="3">
                    <Box as="article" margin=".5rem">
                        <Heading marginY="1.4rem" color={colors.primary}>
                            {_.upperFirst(articles[0].content.title)}
                        </Heading>
                        <Text>{articles[0]?.content.content}</Text>
                    </Box>
                </Box>
                <Box as="section" flex="1" flexDirection="column" marginTop={'2rem'}>
                    <AuthorCard
                        author={{
                            id: '1',
                            name: `${articles[0].content.author}`,
                            avatar:
                                'https://images.unsplash.com/photo-1554384645-13eab165c24b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80',
                        }}
                    />
                    <SocialCard title="Share The Post" facebook twitter linkedin onClick={() => { }} />
                    <NewsletterForm onSubmitForm={() => { }} marginY="10px" />
                </Box>
            </Box>

            <Box as="section">
                <Heading marginX="1.4rem" marginTop="2rem" fontSize={'1.6rem'} color={colors.default} fontWeight="300">
                    Browse More News
                </Heading>
                <Box data-aos="fade-left" d="flex" flexDirection="column" flex="4" as="section" margin={'.3rem'}>
                    {articles?.map((article:any) => {
                        return (
                            <ArtCard column
                            art={article.content}
                            idArt={article.id}
                            key={article.content+articles[1].id}
                            titleFontSize={'1em'} />
                        );
                    })}
                </Box>
            </Box>

        </Container>
        </>
    );
};
export default DetailArticle;