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
    storyDealProp?: any;
    storyEventProp?: any;
};

const IndexPage = ({storyProp,storyDealProp, storyEventProp }: Props) => {
    const story = useStoryblok(storyProp);
    const storyDeal = useStoryblok(storyDealProp);
    const storyEvent = useStoryblok(storyEventProp);
    story.content.body[1]=storyDeal.content.body[1];
    story.content.body[2]=storyEvent.content.body[2];

    
    
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

        let paramsDeal = {
          version: "draft", // or 'published'
          "resolve_relations": "list-deal-lastest.deals",
          cv: Date.now()
        }

        let paramsEvent = {
          version: "draft", // or 'published'
          "resolve_relations": "list-event-lastest.events",
          cv: Date.now()
        }
      
        if (context.preview) {
          params.version = "draft"
          params.cv = Date.now()
        }
      
        let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);

        let dataDeals = await Storyblok.get(`cdn/stories/${slug}`, paramsDeal);


        let dataEvent = await Storyblok.get(`cdn/stories/${slug}`, paramsEvent);

   
        return {
          props: {
            storyProp: data ? data.story : false,
            storyDealProp: dataDeals ? dataDeals.data.story : false,
            storyEventProp: dataEvent ? dataEvent.data.story : false,
            preview: context.preview || false 
          },
          revalidate: 10,
        }

    } catch (err) {
        return { props: { errors: err.message } };
    }
};

export default IndexPage;
