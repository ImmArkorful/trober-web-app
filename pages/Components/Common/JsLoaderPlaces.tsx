import React, { useEffect, useRef } from 'react';
import { loadGoogleMapsApi } from '../../../utils/googleMaps';

interface JsLoaderPlacesProps {
  onSelect: (place: any) => void;
}

const JsLoaderPlaces = ({ onSelect }: JsLoaderPlacesProps) => {
  const handlePlaceSelect = (place: any) => {
    onSelect(place);
  };
  const inputRef = useRef(null);
  useEffect(() => {
    loadGoogleMapsApi(inputRef, handlePlaceSelect);
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter a location" />
    </div>
  );
};

export default JsLoaderPlaces;
