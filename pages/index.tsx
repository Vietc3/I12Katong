import React from 'react';

import { useRouter } from 'next/router';

import { Box, Button, Divider, Heading, Text } from '@chakra-ui/react';
import PostCard from '../components/cards/PostCard';
import PhotoCards from '../components/home/PhotoCards';
import NewsletterForm from '../components/NewsletterForm';
import Layout from '../components/Layout';
import SocialCard from '../components/cards/SocialCard';
import Carousel from '../components/carousels/Carousel';

import { posts as allPosts } from '../utils/sample-data';
import { GetStaticProps } from 'next';
import { Post } from '../interfaces';

import useColorTheme from '../hooks/useColorTheme';

// The Storyblok Client
import Storyblok from "../lib/storyblok";
import useStoryblok from "../lib/storyblok-hook";

import StoryPage from "../components/storyPage/storyPage"

const latestPostsLength = 10;

type Props = {
    posts?: Post[];
    errors?: string;
    storyProp?: any;
};

const IndexPage = ({ posts, storyProp }: Props) => {

    const story = useStoryblok(storyProp)
    
    const colors = useColorTheme();

    const router = useRouter();
    const items = posts ?? [];

    const onClickPost = (slug: string) => {
        router.push(`/posts/${slug}`);
        window.scrollTo(0, 0);
    };

    return (
    <>
    <StoryPage content={story.content}/>
    </>
    );
};

export const getStaticProps: GetStaticProps = async (context:any) => {
    try {

        let slug = "home"
        let params = {
          version: "draft", // or 'published'
          "resolve_relations": "list-carousels.carousels",
          cv: Date.now()
        }
      
        if (context.preview) {
          params.version = "draft"
          params.cv = Date.now()
        }
      
        let { data } = await Storyblok.get(`cdn/stories/${slug}`, params)
        
        return {
          props: {
            storyProp: data ? data.story : false,
            preview: context.preview || false,
            posts: allPosts 
          },
          revalidate: 10,
        }

    } catch (err) {
        return { props: { errors: err.message } };
    }
};

export default IndexPage;
