import Select from 'react-select';

interface Props {
  options: Array<{ label: string; value: string }>;
  selectionColor: string;
}

const SelectDropDown = ({ options, selectionColor }: Props) => {
  return (
    <div className="w-full my-3 ml-2">
      <Select
        styles={{
          singleValue: (provided) => ({
            ...provided,
            display: 'flex',
            color: selectionColor,
            justifyContent: 'center',
            fontSize: '0.8rem',
          }),
          control: (provided) => ({
            ...provided,
            border: '1px solid #979797',
            height: '60px',
            borderRadius: '10px',
            backgroundColor: 'transparent',
          }),
        }}
        className="basic-single"
        classNamePrefix="select"
        placeholder="Please select type of bus"
        defaultValue={options?.length ? options[0] : ''}
        // isLoading={isLoading}
        // isClearable={isClearable}
        // isRtl={isRtl}
        // isSearchable={isSearchable}
        name="color"
        options={options}
      />
    </div>
  );
};

export default SelectDropDown;
