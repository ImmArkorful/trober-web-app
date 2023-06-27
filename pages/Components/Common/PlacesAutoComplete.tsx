import Autocomplete from 'react-google-autocomplete';

interface PlacesAutoCompleteProps {
  stateSetter: (value: string) => void;
  placeholder: string;
}

const PlacesAutoComplete = ({
  stateSetter,
  placeholder,
}: PlacesAutoCompleteProps) => {
  return (
    <Autocomplete
      apiKey={process.env.NEXT_PUBLIC_PLACES_KEY}
      options={{
        types: ['(regions)'],
        componentRestrictions: { country: 'gh' },
        fields: ['formatted_address'],
      }}
      onPlaceSelected={(place) => stateSetter(place.formatted_address || ``)}
      placeholder={placeholder}
      className={`w-full py-3 px-4 mx-2 my-3 border-[#979797] border-[1px] rounded-lg `}
    />
  );
};

export default PlacesAutoComplete;
