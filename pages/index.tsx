import React from 'react';
import { GetStaticProps } from 'next';
import { Post } from '../interfaces';

// The Storyblok Client
import Storyblok from "../lib/storyblok";
import useStoryblok from "../lib/storyblok-hook";

import StoryPage from "../components/storyPage/storyPage"
import ListFbPostLastest from "../components/home/ListFbPostLastest"

import {useLastesPostFb} from '../hooks/fetchHook';

type Props = {
    posts?: Post[];
    errors?: string;
    storyProp?: any;
    storyDealProp?: any;
    storyEventProp?: any;
    storyArtProp?: any;
    postLastestFB?: any;
};

const IndexPage = ({storyProp,storyDealProp, storyEventProp,storyArtProp,postLastestFB }: Props) => {
    const story = useStoryblok(storyProp);
    const storyDeal = useStoryblok(storyDealProp);
    const storyEvent = useStoryblok(storyEventProp);
    const storyAricle = useStoryblok(storyArtProp);

    const {data} = useLastesPostFb(postLastestFB);

    story.content.body[1]=storyDeal.content.body[1];
    story.content.body[2]=storyEvent.content.body[2];
    story.content.body[3]=storyAricle.content.body[3];

    return (
    <>
    <StoryPage content={story.content}/>
    <ListFbPostLastest posts={data}/>
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

        let paramsArt = {
          version: "draft", // or 'published'
          "resolve_relations": "list-article-lastest.articles",
          cv: Date.now()
        }
      
        if (context.preview) {
          params.version = "draft"
          params.cv = Date.now()
        }
      
        let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);
        let dataDeals = await Storyblok.get(`cdn/stories/${slug}`, paramsDeal);
        let dataEvent = await Storyblok.get(`cdn/stories/${slug}`, paramsEvent);   
        let dataArt = await Storyblok.get(`cdn/stories/${slug}`, paramsArt); 
        let responseFbPost = await fetch('https://graph.facebook.com/v10.0/100230702234464/feed/?fields=full_picture,message,permalink_url&access_token=EAADBQNZBhgo4BAHQFvu9w0nyOznxlSGPIkzEbNZBQ6ZBibGBjVty6pWmoC9fUQ595lK0eUMZCx8ZCsmmOSj0qyVLEYguyUYjjLL2PZAtEhibNultDfXluC7CvGFS2Yw3cLb7nFlZAi55ofrM7xcpWjpENkw5gxd9sotEZBD2pZAZAs8AZDZD');
        let fbLastestPost= await responseFbPost.json()
        return {
          props: {
            storyProp: data ? data.story : false,
            storyDealProp: dataDeals ? dataDeals.data.story : false,
            storyEventProp: dataEvent ? dataEvent.data.story : false,
            storyArtProp: dataArt ? dataArt.data.story : false,
            postLastestFB: fbLastestPost ? fbLastestPost : false,
            preview: context.preview || false 
          },
          revalidate: 1,
        }

    } catch (err) {
        return { props: { errors: err.message } };
    }
};

export default IndexPage;
