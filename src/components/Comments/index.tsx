import { DiscussionEmbed } from 'disqus-react';
import { Container } from './styled';

export type ComentsPros = {
  slug: string;
  title: string;
};

export const Coments = ({ slug, title }: ComentsPros) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname="myblog-btqqeppx9"
        config={{
          url: `/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
};
