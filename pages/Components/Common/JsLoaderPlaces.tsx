import React, { useEffect, useRef } from 'react';
import { loadGoogleMapsApi } from '../../../utils/googleMaps';

interface JsLoaderPlacesProps {
  onSelect: (place: any) => void;
  placeholder: string;
}

const JsLoaderPlaces = ({ onSelect, placeholder }: JsLoaderPlacesProps) => {
  const handlePlaceSelect = (place: any) => {
    if (place.formatted_address.includes(place.name)) {
      onSelect(place.formatted_address);
    } else {
      onSelect(`${place.name} ${place.formatted_address}`);
    }
  };
  const inputRef = useRef(null);
  useEffect(() => {
    loadGoogleMapsApi(inputRef, handlePlaceSelect);
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      className="w-full py-3 px-4 mx-2 my-3 border-[#979797] border-[1px] rounded-lg "
    />
  );
};

export default JsLoaderPlaces;
