import React from 'react';

import { useRouter } from 'next/router';
import { GetStaticProps } from 'next';
import { Post } from '../interfaces';

// The Storyblok Client
import Storyblok from "../lib/storyblok";
import useStoryblok from "../lib/storyblok-hook";

import StoryPage from "../components/storyPage/storyPage"

type Props = {
    posts?: Post[];
    errors?: string;
    storyProp?: any;
};

const IndexPage = ({storyProp }: Props) => {
    const story = useStoryblok(storyProp)
    const router = useRouter();

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
            preview: context.preview || false 
          },
          revalidate: 10,
        }

    } catch (err) {
        return { props: { errors: err.message } };
    }
};

export default IndexPage;
