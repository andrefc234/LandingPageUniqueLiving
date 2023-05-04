import React from 'react';
import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';

const LoaderOverlay = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Loader = () => {
  return (
    <LoaderOverlay>
      <Spinner animation="grow" variant="dark" />
    </LoaderOverlay>
  );
};

export default Loader;
