import type { NextPage } from 'next';
import { useAlert } from 'react-alert';
import Head from 'next/head';
import axios from '@/app/api';
import { useState } from 'react';

const Home: NextPage = () => {
  const alert = useAlert();
  const [code, setCode] = useState(null);

  const handleLogin = async () => {
    axios
      .post('https://anilist.co/api/v2/oauth/token', {
        grant_type: 'authorization_code',
        client_id: '12364',
        client_secret: 'pPS0DyhQbbWFHu5dknGTstwsUOItxN5lLMGpqPdn',
        redirect_uri: 'https://anyme-web.vercel.app/', // http://example.com/callback
        code: 'def5020023e0a214efb19ffd78625e319dbd800f53187f79540520babc3b1e663d5b6042cd920c43f8f37c24ae02f89309dfae0b14feff76555eb70e2b9b3f59eae2627e840b547b73e82eb98962e421e8a6ffaab6c895295dfa224359005b5a85948b58ccf635d02083810495c5b2410f070d83368ee1f51722bb0a5957ee31e684caf642103cf5f213ae5926b5ab1708e6af0e52eb9738a67efd174a586217493017126e44b1de9d9650d6d2354658c5a20ab67d4fff30ab55b956ffdbe3c53756706c825367fa0da3a813b23ee1db84dfcd87c9840bc0a57765f44e40038d1b0685166309ab3062f5ef27f5a80d5294c3967112ff82ce5b5f3cd45534c07ef87d97978ec3d0d4acf49bc98b2850c444b09ffd3167221f823fa82d045d5bc292c939dd6223f4184bc0e35c18aa1dec8880cb487ffc831b085f8f6835bc176bb9194f83e442c3cd74527508c2e688e19995305d41a96f6f8741bbaee0c34b790735d86d6fe44981b8', // The Authorization Code received previously
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

      <main className="flex flex-col">
        <div className="text-red-500 font-bold">Hello World</div>
        <a href="https://anilist.co/api/v2/oauth/authorize?client_id=12364&redirect_uri=https://anyme-web.vercel.app/&response_type=code">
          Login with AniList
        </a>
        <p>{code}</p>
        <button onClick={handleLogin}>Login</button>
        {/* <a href="https://anilist.co/api/v2/oauth/authorize?client_id={12364}&response_type=token">
          Login with AniList
        </a> */}
      </main>
    </div>
  );
};

export default Home;
