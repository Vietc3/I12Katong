
import { Heading, } from "@chakra-ui/react";
import { GetStaticProps } from 'next';

import Storyblok from "../lib/storyblok";
import useStoryblok from "../lib/storyblok-hook";

import StoryPage from "../components/storyPage/storyPage"

type Props = {
    errors?: string;
    storyProp?: any;
};
const Store = ({storyProp}:Props) => {
    const story = useStoryblok(storyProp);
    return (
        <>
             <StoryPage content={story.content}/>
        </>
    );

  
};

export const getStaticProps: GetStaticProps = async (context:any) => {
    try {

        let slug = "store"
        let params = {
          version: "draft", // or 'published'
          "resolve_relations": "list-all-stores.stores",
          cv: Date.now()
        }

        if (context.preview) {
          params.version = "draft"
          params.cv = Date.now()
        }
      
        let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);
   
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

export default Store;