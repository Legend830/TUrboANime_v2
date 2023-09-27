import { DiscussionEmbed } from "disqus-react";

const DisqusComments = ({ post }) => {
  const disqusShortname = post.name || "Streamsora";
  const disqusConfig = {
    url: post.url,
    identifier: post.id, // Single post id
    title: `${post.title} - Episode ${post.episode}`, // Single post title
  };

  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
