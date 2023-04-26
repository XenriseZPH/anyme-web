import type { NextPage } from 'next';
import { useAlert } from 'react-alert';
import Head from 'next/head';

const Home: NextPage = () => {
  const alert = useAlert();

  return (
    <div className="font-inter">
      <Head>
        <title>AnyMe</title>
        <meta
          name="description"
          content="AnyMe is a web-based application that helps you keep track of your favorite anime and manga. With AnyMe, you can easily keep up with the latest episodes and chapters of your favorite series, and receive notifications when new content is available."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="text-red-500 font-bold">Hello World</div>
        <a href="https://anilist.co/api/v2/oauth/authorize?client_id={12364}&response_type=token">
          Login with AniList
        </a>
      </main>
    </div>
  );
};

export default Home;
