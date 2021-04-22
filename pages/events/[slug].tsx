import { GetStaticProps } from 'next';
import Storyblok from "../../lib/storyblok";
import useStoryblok from "../../lib/storyblok-hook";
import DetailEvent from "../../components/events/DetailEvent"


type Props = {
    errors?: string;
    storyProp?: any;
};
const EventDetails = ({ storyProp }: Props) => {
    const story = useStoryblok(storyProp);
    return (
        <>
           <DetailEvent event={story.content}/>
        </>
    );
};
export async function getStaticPaths() {
    try {

        let slug = "?filter_query[component][in]=event"
        let params = {
            version: "draft", // or 'published'
            cv: Date.now(),

        }
        let { data } = await Storyblok.get(`cdn/stories/${slug}`, params);
        const paths = data.stories.map((event: any) => {
            return {
                params: {
                    slug: event.id.toString()
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

export default EventDetails;