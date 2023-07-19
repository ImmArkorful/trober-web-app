import { Dispatch, SetStateAction } from 'react';
import Select from 'react-select';

interface Props {
  options: Array<{ label: string; value: string; url: string }>;
  selectionColor: string;
  busType: { value: string; label: string; url: string };
  setBusType: Dispatch<
    SetStateAction<{ value: string; label: string; url: string }>
  >;
}

const RouteSelectDropDown = ({
  options,
  selectionColor,
  busType,
  setBusType,
}: Props) => {
  return (
    <div className="w-full my-3 ml-2">
      <Select
        isSearchable={false}
        value={busType}
        styles={{
          singleValue: (provided) => ({
            ...provided,
            color: selectionColor,
            fontSize: '1rem',
          }),
          control: (provided) => ({
            ...provided,
            border: '1px solid #979797',
            height: '50px',
            borderRadius: '10px',
            backgroundColor: 'transparent',
          }),
        }}
        className="basic-single"
        classNamePrefix="select"
        placeholder="Please select type of bus"
        // isLoading={isLoading}
        // isClearable={isClearable}
        // isRtl={isRtl}
        // isSearchable={isSearchable}
        name="color"
        options={options}
        onChange={(
          option: { label: string; value: string; url: string } | null
        ) => {
          option && setBusType(option);
        }}
      />
    </div>
  );
};

export default RouteSelectDropDown;
