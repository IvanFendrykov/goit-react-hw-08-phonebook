import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';

const Loader = () => {
  return (
    <><div className="d-flex justify-content-center">
      <Spinner className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner className="spinner-grow text-secondary" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner className="spinner-grow text-success" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner className="spinner-grow text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner className="spinner-grow text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner className="spinner-grow text-info" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <Spinner className="spinner-grow text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
    </>
  );
};

export default Loader;
