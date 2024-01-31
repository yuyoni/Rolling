import { Helmet } from 'react-helmet-async';
import main from './assets/images/main-image.png';

export default function MetaTag({ title, description }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={main} />
      <meta property="og:url" content="https://rolling-team1.netlify.app/" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={main} />

      <link rel="canonical" href="https://rolling-team1.netlify.app/" />
    </Helmet>
  );
}
