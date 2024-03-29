import { GetStaticProps } from 'next';
import Storyblok from "../../lib/storyblok";
import useStoryblok from "../../lib/storyblok-hook";
import DetailStore from "../../components/stores/DetailStore"

type Props = {
    errors?: string;
    storyProp?: any;
};
const StoreDetails = ({ storyProp }: Props) => {
    const story = useStoryblok(storyProp);
 
    
    return (
        <>
            <DetailStore store={story.content} />
        </>
    );


};
export async function getStaticPaths() {
    try {

        let slug = "?filter_query[component][in]=store"
        let params = {
            version: "draft", // or 'published'
            cv: Date.now(),

        }
        let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);
        const paths = data.stories.map((store: any) => {
            return {
                params: {
                    slug: store.id.toString()
                }
            }
        }
        )
        return { paths, fallback: false }

    } catch (err) {
        return { props: { errors: err.message } };
    }

}

export const getStaticProps: GetStaticProps = async (context: any) => {
    try {
        let slug = context.params.slug
        let params = {
            version: "draft", // or 'published'
            cv: Date.now(),
            find_by: "id"
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

export default StoreDetails;