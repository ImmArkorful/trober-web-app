import React from 'react';
import { Loader } from '@googlemaps/js-api-loader';

export function loadGoogleMapsApi(
  inputRef: React.RefObject<HTMLInputElement>,
  onPlaceSelect: (place: string) => void
) {
  const loader = new Loader({
    apiKey: process.env.NEXT_PUBLIC_PLACES_KEY || '',
    version: 'weekly',
    libraries: ['places'],
  });

  loader.importLibrary('places').then(() => {
    const input: any = inputRef.current;
    const options = {
      componentRestrictions: { country: 'gh' },
    };
    // eslint-disable-next-line no-undef
    const autocomplete = new google.maps.places.Autocomplete(input, options);

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      onPlaceSelect(place.formatted_address || '');
    });
  });
}
