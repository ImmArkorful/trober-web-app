import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const formatDateString = (start: Date | null, end: Date | null) => {
  return `${start?.toLocaleDateString()}-${end?.toLocaleDateString()}`;
};

interface DateSelectorProps {
  startDate: Date | null;
  endDate: Date | null;
  setDateRange: React.Dispatch<React.SetStateAction<Array<Date | null>>>;
  calendarError: string;
}
const DateSelector = ({
  setDateRange,
  startDate,
  endDate,
  calendarError,
}: DateSelectorProps) => {
  return (
    <DatePicker
      selectsRange
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      placeholderText="How long will you need"
      isClearable
      wrapperClassName="w-full"
      customInput={
        <input
          type="text"
          className={`w-full py-3 px-4 mx-2 my-3 border rounded-lg ${
            calendarError ? 'border-red-500' : 'border-bordergray'
          }  `}
        />
      }
    />
  );
};

export { formatDateString };
export default DateSelector;