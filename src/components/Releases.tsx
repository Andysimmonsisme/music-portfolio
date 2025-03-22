import React, { useEffect, useState } from 'react';

function Releases() {
  const [releases, setReleases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of albums to show per page

  // Calculate displayed albums for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentAlbums = releases.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(releases.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch('/.netlify/functions/releases');
        if (!response.ok) throw new Error('Failed to fetch releases.');
        const data = await response.json();
        setReleases(data.items);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReleases();
  }, []);

  if (isLoading) return <p>Loading releases...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <ul
        className={`grid ${currentPage === totalPages ? 'grid-cols-1' : 'grid-cols-2'} gap-4 py-2`}
      >
        {currentAlbums.map((release) => (
          <li key={release.id} className='flex items-center flex-col'>
            <img
              src={release.images[1].url}
              alt={release.name}
              width={300}
              height={300}
            />
            {release.name}
          </li>
        ))}
      </ul>

      <nav
        className='flex justify-center mt-4 flex-wrap'
        aria-label='Pagination'
      >
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className='px-4 py-2 mx-1 border rounded-lg hover:bg-hover disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => handlePageChange(i + 1)}
            className={`px-4 py-2 mx-1 border rounded-lg ${
              currentPage === i + 1 ? 'bg-primary' : 'hover:bg-hover'
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className='px-4 py-2 mx-1 border rounded-lg hover:bg-hover disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'
        >
          Next
        </button>
      </nav>
    </>
  );
}

export default Releases;
