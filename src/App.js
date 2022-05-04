import './App.scss';
import { useState, useEffect } from 'react';
import { wait } from '@testing-library/user-event/dist/utils';
import { Gallery } from './components/Gallery';

function App() {
  let [page, setPage] = useState(1);

  useEffect(() => {
    <Gallery page={page} />
  });

  return (
    <>
      <h1>Marvel Characters</h1>
      <h2>Page: {page}</h2>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" onClick={() => (page > 1)? setPage( page - 1 ): setPage(page)}>Previous</a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => (page < 42)? setPage( page + 1 ): setPage(page)}>Next</a>
          </li>
        </ul>
      </nav>
      
      <Gallery page={page} />
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" onClick={() => (page > 1)? setPage( page - 1 ): setPage(page)}>Previous</a>
          </li>
          <li className="page-item">
            <a className="page-link" onClick={() => (page < 42)? setPage( page + 1 ): setPage(page)}>Next</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default App;
