import Releases from "./Releases";

function Portfolio() {
  return (
    <section className='flex flex-justify-center flex-wrap bg-background opacity-80 text-center w-full lg:w-3/4 p-4 my-4'>
      <h2 className="w-full">Portfolio</h2>
      <section className="w-full md:w-1/2">
        <h3>Projects</h3>
      </section>
      <section className="w-full md:w-1/2">
        <h3>Releases</h3>
        <Releases />
      </section>
    </section>
  );
}

export default Portfolio;
