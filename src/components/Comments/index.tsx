import { DiscussionEmbed } from 'disqus-react';
import { Container } from './styled';
import { SITE_URL } from '../../config/app.config';

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
          url: `${SITE_URL}/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
};
