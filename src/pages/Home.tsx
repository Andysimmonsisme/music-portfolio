import AudioPlayer from '../components/AudioPlayer';

function Home() {
  return (
    <>
      <h1 className='font-extralight text-center w-full'>
        <span className='block text-3xl sm:text-6xl tracking-[0.5rem]'>
          Andy Simmons
        </span>
        <span className='block text-xl sm:text-3xl'>Musician & Songwriter</span>
      </h1>
      <AudioPlayer />
    </>
  );
}

export default Home;
