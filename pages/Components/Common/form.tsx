import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SelectDropDown from './Select';
import axiosInstance from '../../../utils/axiosInstance';

const errorBorder = 'border-red-500';
const defaultBorder = 'border-bordergray';

interface TabPanelProps {
  children: React.ReactNode;
  index: number;
  value: number;
}
interface FormProps {
  display: string;
}

// interface Inputs {
//   example: string;
//   exampleRequired: string;
// }

const useStyles = makeStyles({
  tabs: {
    '& .MuiTabs-indicator': {
      backgroundColor: '#2D3079',
      height: 3,
      fontFamily: 'Jost',
    },
    '& .MuiTab-root.Mui-selected': {
      color: '#2D3079',
    },
  },
});

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Form = ({ display }: FormProps) => {
  const defaultValuesRental = {
    fullName: '',
    phoneNumber: '',
    destination: '',
    duration: '',
  };
  const defaultValuesBusiness = {
    fullName: '',
    email: '',
    companyName: '',
  };
  const defaultLabel = 'Please select capacity of bus';
  const [busType, setBusType] = useState({
    value: '',
    label: defaultLabel,
  });
  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: defaultValuesRental,
  });
  const {
    register: registerBusiness,
    handleSubmit: handleSubmiteBusiness,
    clearErrors: clearErrorsBusiness,
    reset: resetBusiness,
    formState: { errors: errorsBusiness },
  } = useForm({
    defaultValues: defaultValuesBusiness,
  });
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div
      className={`${display} bg-white z-10 mb:48 mb-5 flex items-center justify-center mx-2 md:mx-20 shadow-lg lg:mx-20 bg-darkgray md:bg-graybg rounded-2xl md:w-6/6 lg:w-128`}
    >
      <div className="flex flex-col justify-around h-full px-10 py-10 opacity-100 sm:w-full rounded-2xl ">
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'black',
            fontFamily: 'Jost',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className={classes.tabs}
          >
            <Tab
              label={
                <span className="text-xs md:text-base lg:text-lg">
                  Book Bus
                </span>
              }
              {...a11yProps(0)}
            />
            <Tab
              label={
                <span className="text-xs md:text-base lg:text-lg">
                  For Business
                </span>
              }
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="flex flex-col items-center font-normal tracking-wide text-left lg:px-8">
            <p className="pb-5 md:px-10 lg:px-0">
              Get access to our large network of vehicle partners to create a
              beautiful experience
            </p>
            <form
              className="flex flex-col items-start w-full"
              onSubmit={handleSubmit(async (data) => {
                clearErrors();
                try {
                  await axiosInstance.post('/booking/rental', {
                    ...data,
                    typeOfBus: busType.value,
                  });
                  reset(defaultValuesRental);
                  setBusType({
                    label: defaultLabel,
                    value: '',
                  });
                } catch (e) {
                  console.log(e);
                }
              })}
            >
              <input
                type="text"
                placeholder="Full name"
                className={`w-full py-3 pl-4 mx-2 my-3 border rounded-lg ${
                  errors.fullName ? errorBorder : defaultBorder
                }`}
                {...register('fullName', {
                  required: 'Please Enter your full name',
                })}
              />
              <input
                placeholder="Phone Number"
                className={`w-full py-3 pl-4 mx-2 my-3 border rounded-lg ${
                  errors.phoneNumber ? errorBorder : defaultBorder
                }`}
                {...register('phoneNumber', {
                  required: 'Please enter your phone number',
                  minLength: 9,
                })}
              />
              <input
                type="text"
                placeholder="Where will you be going?"
                className={`w-full py-3 pl-4 mx-2 my-3 border rounded-lg ${
                  errors.destination ? errorBorder : defaultBorder
                }`}
                {...register('destination', {
                  required: 'Please enter your destination',
                })}
              />
              <SelectDropDown
                selectionColor={
                  busType.label === 'Please select capacity of bus'
                    ? 'gray'
                    : 'black'
                }
                options={[
                  {
                    value: '15',
                    label: '15 seater bus',
                  },
                  {
                    value: '30',
                    label: '30 seater bus',
                  },
                ]}
                busType={busType}
                setBusType={setBusType}
              />
              <input
                type="text"
                placeholder="How long will you need it for? (days)"
                className={`w-full py-3 pl-4 mx-2 my-3 border rounded-lg ${
                  errors.duration ? errorBorder : defaultBorder
                }`}
                {...register('duration', {
                  required:
                    "Please enter the number of days you'll need the bus",
                })}
              />
              {/* {errors.duration && (
                <span className="pb-1 pl-4 text-sm text-red-500">
                  {errors.duration.message}
                </span>
              )} */}
              <button
                className="self-center px-10 py-2 mt-5 text-white rounded-lg shadow-xl md:py-4 md:px-16 bg-gradient-to-r from-gradientstart to-gradientend"
                type="submit"
                value="Submit"
              >
                Submit
              </button>
            </form>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className="flex flex-col items-center font-normal tracking-wide text-left lg:px-8">
            <p className="pb-5 md:px-10 lg:px-0">
              Get access to our large network of vehicle partners to create a
              beautiful experience
            </p>
            <form
              className="flex flex-col items-start w-full"
              onSubmit={handleSubmiteBusiness(async (businessdata) => {
                clearErrorsBusiness();
                try {
                  await axiosInstance.post('/booking/business', {
                    ...businessdata,
                  });
                  resetBusiness(defaultValuesBusiness);
                } catch (e) {
                  console.log(e);
                }
              })}
            >
              <input
                type="text"
                placeholder="Name"
                className={`w-full py-4 pl-4 mx-2 border rounded-lg my-7 ${
                  errorsBusiness.fullName ? errorBorder : defaultBorder
                }`}
                {...registerBusiness('fullName', {
                  required: 'Please enter your name',
                })}
              />
              <input
                type="text"
                placeholder="Company Name"
                className={`w-full py-4 pl-4 mx-2 border rounded-lg my-7 ${
                  errorsBusiness.companyName ? errorBorder : defaultBorder
                }`}
                {...registerBusiness('companyName', {
                  required: 'Please enter your company name',
                })}
              />
              <input
                type="text"
                placeholder="Email (Preferable company email)"
                className={`w-full py-4 pl-4 mx-2 border rounded-lg my-7 ${
                  errorsBusiness.email ? errorBorder : defaultBorder
                }`}
                {...registerBusiness('email', {
                  required: 'Please enter your email',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address',
                  },
                })}
              />
              <button
                className="self-center px-10 py-2 mt-5 text-white rounded-lg shadow-xl md:py-4 md:px-16 bg-gradient-to-r from-gradientstart to-gradientend"
                type="submit"
                value="Submit"
              >
                Submit
              </button>
            </form>
          </div>
        </TabPanel>
      </div>
    </div>
  );
};

export default Form;
