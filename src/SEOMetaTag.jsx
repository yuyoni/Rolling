import { Helmet } from 'react-helmet-async';
import main from './assets/images/main-image.png';

export default function MetaTag({ title }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta
        name="description"
        content="추억의 롤링 페이퍼를 웹에서도 즐길 수 있는 플랫폼 'Rolling'"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta
        property="og:description"
        content="추억의 롤링 페이퍼를 웹에서도 즐길 수 있는 플랫폼 'Rolling'"
      />
      <meta property="og:image" content={main} />
      <meta property="og:url" content="https://rolling-team1.netlify.app/" />

      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content="추억의 롤링 페이퍼를 웹에서도 즐길 수 있는 플랫폼 'Rolling'"
      />
      <meta name="twitter:image" content={main} />

      <link rel="canonical" href="https://rolling-team1.netlify.app/" />
    </Helmet>
  );
}
