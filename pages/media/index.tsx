import { useState } from 'react';
import type { NextPage } from 'next';
import Header from '../Components/header';
import JsLoaderPlaces from '../Components/Common/JsLoaderPlaces';

const MediaPage: NextPage = () => {
  const [newPlace, setNewPlace] = useState('');
  return (
    <>
      <Header />
      <JsLoaderPlaces
        onSelect={(place: string) => {
          setNewPlace(place);
          newPlace;
        }}
      />
    </>
  );
};

export default MediaPage;
