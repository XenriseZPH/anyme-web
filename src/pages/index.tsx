import type { NextPage } from 'next';
import { useAlert } from 'react-alert';
import Head from 'next/head';
import axios from '@/app/api';

const Home: NextPage = () => {
  const alert = useAlert();

  const handleLogin = async () => {
    axios
      .post('https://anilist.co/api/v2/oauth/token', {
        grant_type: 'authorization_code',
        client_id: '{12364}',
        client_secret: '{pPS0DyhQbbWFHu5dknGTstwsUOItxN5lLMGpqPdn}',
        redirect_uri: '{http://localhost:3000}', // http://example.com/callback
        code: '{code}', // The Authorization Code received previously
      })
      .then((res) => {
        console.log(res);
        alert.success(res.data.message);
      })
      .catch((error) => {
        console.log(error);
        alert.error(error?.response?.data?.message || error.message);
      });
  };

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
        <button onClick={handleLogin}>Login</button>
        {/* <a href="https://anilist.co/api/v2/oauth/authorize?client_id={12364}&response_type=token">
          Login with AniList
        </a> */}
      </main>
    </div>
  );
};

export default Home;
