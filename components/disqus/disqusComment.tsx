import {DiscussionEmbed} from "disqus-react"

interface Props {
    post: any
}

const DisqusComments = ({ post }:Props) => {
  console.log(post);
  
  const disqusShortname = "blogstore-1"
  const disqusConfig = {
    url: "https://i12-katong.vercel.app/article/"+post.id,
    identifier: post.content.id, // Single post id
    title: post.content.title // Single post title
  }
  return (
    <div>
      <DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}
export default DisqusComments;