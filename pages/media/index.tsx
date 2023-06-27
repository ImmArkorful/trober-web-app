import type { NextPage } from 'next';
import Header from '../Components/header';
import { useState } from 'react';

const MediaPage: NextPage = () => {
  const [value, setValue] = useState(null);
  return (
    <>
      <Header />
    </>
  );
};

export default MediaPage;
