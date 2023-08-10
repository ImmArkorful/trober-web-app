import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';

const formatDateString = (date: Date) => {
  return `${format(date, 'MMM d, yyyy')}`;
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
      dateFormat="MMM d, yyyy"
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
