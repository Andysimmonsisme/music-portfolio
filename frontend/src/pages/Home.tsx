import Portfolio from '../components/Portfolio';

function Home() {
  return (
    <>
      <h1 className='font-extralight text-center w-full'>
        <span className='block text-3xl sm:text-6xl tracking-[0.5rem]'>
          Andy Simmons
        </span>
        <span className='block'>Musician & Songwriter</span>
      </h1>
      <Portfolio />
    </>
  );
}

export default Home;
