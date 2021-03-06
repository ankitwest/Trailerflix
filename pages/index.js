import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Slider from '../components/Slider';

const index = ({ upcoming, popular, top_rated, now_playing, trending }) => {
  //   console.log(upcoming);
  return (
    <main>
      <Head>
        <title> Netflix | Home</title>
        <link rel="icon" href="/images/netflix-logo.svg" />
      </Head>
      <Header />
      <Hero results={upcoming} />
      <Slider results={popular} title="Most Popular Movies" />
      <Slider results={top_rated} title="Top Rated Movies" />
      <Slider results={now_playing} title="Latest Movies" />
      <Slider results={trending} title="Trending Movies" />
    </main>
  );
};
export default index;

export async function getServerSideProps() {
  const [upcomingRes, popularRes, top_ratedRes, now_playingRes, trendingRes] =
    await Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}&language=en-US&page=1`
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=2`
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=3`
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY}&language=en-US&page=10`
      ),
      fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.API_KEY}`
      ),
    ]);
  const [upcoming, popular, top_rated, now_playing, trending] =
    await Promise.all([
      upcomingRes.json(),
      popularRes.json(),
      top_ratedRes.json(),
      now_playingRes.json(),
      trendingRes.json(),
    ]);
  return {
    props: {
      upcoming: upcoming.results,
      popular: popular.results,
      top_rated: top_rated.results,
      now_playing: now_playing.results,
      trending: trending.results,
    },
  };
}

/*
rfc
rfce - simple;
rafce - arrow;
yarn nextjs
*/

//?npm run dev
//*yarn dev

//npm run start
//yarn

/*
things used

material ui
api from tmdb.org
sidebar hide

Swiper, SwiperSlide

useEffect useState

react player

authentication = next auth
google auth

https://console.cloud.google.com/
google client id 
google client secret 
and api

session method  if login then only then watch
 */

//https://console.cloud.google.com/apis/credentials?project=netflix-356317

// https://netflix-seven-steel.vercel.app/
// https://netflix-ankitwest.vercel.app/
