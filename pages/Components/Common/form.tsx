import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import SelectDropDown from './Select';
import axiosInstance from '../../../utils/axiosInstance';
import SuccessModal from '../../home/Components/Modal';
import TroberLogger from '../../../utils/logEvent';
import { RootState } from '../../../store/store';
import { setActiveTab } from '../../../store/form/formTab';
import Spinner from '../Svgs/Spinner.jsx';
import JsLoaderPlaces from './JsLoaderPlaces';
import RouteSelectDropDown from './RouteSelect';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

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

interface ButtonProps {
  isLoading: boolean;
}

interface ErrorButtonProps {
  error: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const Button = (props: ButtonProps) => {
  const { isLoading } = props;
  return (
    <div>
      <button
        className="self-center px-10 py-2 mt-5 text-white rounded-lg shadow-xl md:py-4 md:px-16 bg-gradient-to-r from-gradientstart to-gradientend"
        type="submit"
        value="Submit"
      >
        {isLoading ? <Spinner /> : 'Join Bus'}
      </button>
    </div>
  );
};

const ErrorButton = (props: ErrorButtonProps) => {
  const { error, onClick } = props;
  return (
    <div className="mt-5 text-center ">
      {error}
      <button
        className="ml-3 text-red-500 underline cursor-pointer"
        type="button"
        onClick={onClick}
      >
        Try Again?
      </button>
    </div>
  );
};

const Form = ({ display }: FormProps) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const setPickupLocationState = (location: string) => {
    return setPickupLocation(location);
  };

  const setDropoffLocationState = (location: string) => {
    return setDropoffLocation(location);
  };

  const dispatch = useDispatch();
  const activeTab = useSelector((state: RootState) => state.form.activeTab);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const defaultValuesRental = {
    fullName: '',
    phoneNumber: '',
    duration: '',
  };
  const defaultValuesBusiness = {
    fullName: '',
    email: '',
    companyName: '',
  };
  const defaultValuesDaily = {
    name: '',
    phoneNumber: '',
    route: '',
  };
  const defaultLabel = 'Please select capacity of bus';
  const [busType, setBusType] = useState({
    value: '',
    label: defaultLabel,
  });
  const [route, setRoute] = useState({
    value: '',
    label: 'Route',
    url: '',
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
  const {
    register: registerDaily,
    handleSubmit: handleSubmitDaily,
    clearErrors: clearErrorsDaily,
    reset: resetDaily,
    formState: { errors: errorsDaily },
  } = useForm({
    defaultValues: defaultValuesDaily,
  });
  const classes = useStyles();

  const handleChange = async (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    newValue === 0
      ? await TroberLogger('SwitchBookBus')
      : await TroberLogger('SwitchBusiness');
    dispatch(setActiveTab(newValue));
  };

  const handleReset = () => {
    resetDaily(defaultValuesDaily);
    resetBusiness(defaultValuesBusiness);
    reset(defaultValuesRental);
    setBusType({
      label: defaultLabel,
      value: '',
    });
    setRoute({
      label: 'Route',
      value: '',
      url: '',
    });
    setError('');
  };

  return (
    <div
      className={`${display} bg-white  mb:48 mb-5 flex items-center justify-center mx-2 md:mx-20 shadow-lg lg:mx-20 bg-darkgray md:bg-graybg rounded-2xl md:w-6/6 lg:w-128`}
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
            value={activeTab}
            onChange={handleChange}
            aria-label="basic tabs example"
            className={classes.tabs}
          >
            <Tab
              label={
                <span className="text-xs md:text-base lg:text-lg">
                  Daily Ride
                </span>
              }
              {...a11yProps(0)}
              // added code
              onClick={handleReset}
            />
            <Tab
              label={
                <span className="text-xs md:text-base lg:text-lg">
                  Book Bus
                </span>
              }
              {...a11yProps(1)}
              // added code
              onClick={handleReset}
            />
            <Tab
              label={
                <span className="text-xs md:text-base lg:text-lg">
                  For Business
                </span>
              }
              {...a11yProps(2)}
              // added code
              onClick={handleReset}
            />
          </Tabs>
        </Box>
        <TabPanel value={activeTab} index={0}>
          <div className="flex flex-col items-center font-normal tracking-wide text-left lg:px-8">
            <p className="pb-5 md:px-10 lg:px-0">
              Book a Trober for your daily commute. We will pick you up at your
              bus stop
            </p>
            <form
              className="flex flex-col items-start w-full"
              onSubmit={handleSubmitDaily(async (data) => {
                setIsLoading(true);
                await TroberLogger('DailySubmitClicked');
                clearErrorsDaily();
                try {
                  if (route.value && pickupLocation && dropoffLocation) {
                    await axiosInstance.post('/waitlist', {
                      ...data,
                      pickupLocation,
                      dropoffLocation,
                      route: route.value,
                    });
                    setDropoffLocationState('');
                    setPickupLocationState('');
                    resetDaily(defaultValuesDaily);
                    await TroberLogger('BookBusSubmitSuccess');
                    setIsLoading(false);
                    openModal();
                  }
                  if (!route.value) {
                    setError('Please select a route');
                    setIsLoading(false);
                  }
                  if (!pickupLocation || !dropoffLocation) {
                    setError('Please select location');
                    setIsLoading(false);
                  }
                } catch (e: any) {
                  if (e instanceof Error) {
                    await TroberLogger('BookBusSubmitFailed', {
                      error: e.message,
                    });
                  }

                  setIsLoading(false);
                  setError(e.message);
                }
              })}
            >
              <input
                type="text"
                placeholder="Full name"
                className={`w-full py-3 px-4 mx-2 my-3 border rounded-lg ${
                  errorsDaily.name ? errorBorder : defaultBorder
                }`}
                {...registerDaily('name', {
                  required: 'Please Enter your full name',
                })}
              />
              <input
                type="number"
                placeholder="Phone Number"
                className={`w-full py-3 px-4 mx-2 my-3 border rounded-lg ${
                  errorsDaily.phoneNumber ? errorBorder : defaultBorder
                }`}
                {...registerDaily('phoneNumber', {
                  required: 'Please enter your phone number',
                  minLength: 9,
                })}
              />
              <RouteSelectDropDown
                selectionColor={route.label === 'Route' ? 'gray' : 'black'}
                busType={route}
                setBusType={setRoute}
                options={[
                  {
                    value: 'Dansoman to East Legon',
                    label: 'Dansoman to East Legon',
                    url: 'https://chat.whatsapp.com/LLTzVQXmV0TGAwyhU7nvYn',
                  },
                  {
                    value: 'Ogbojo to Accra',
                    label: 'Ogbojo to Accra',
                    url: 'https://chat.whatsapp.com/GJMqot0eOW4IINAQ52gIp1',
                  },
                  {
                    value: 'Ogbojo to Circle',
                    label: 'Ogbojo to Circle',
                    url: 'https://chat.whatsapp.com/E6ITqXplNjX0Xf92WBkl5j',
                  },
                  {
                    value: 'Kasoa to East Legon',
                    label: 'Kasoa to East Legon',
                    url: 'https://chat.whatsapp.com/BfWrHYPQNWl1znn8YzEzlI',
                  },
                  {
                    value: 'Oyarifa to East Legon',
                    label: 'Oyarifa to East Legon',
                    url: 'https://chat.whatsapp.com/Fv2G3eaMPAU8glQRlH2lpg',
                  },
                  {
                    value: 'Others',
                    label: 'Others',
                    url: '',
                  },
                ]}
              />
              <JsLoaderPlaces
                value={pickupLocation}
                onSelect={setPickupLocationState}
                placeholder="Enter pickup location"
              />
              <JsLoaderPlaces
                value={dropoffLocation}
                onSelect={setDropoffLocationState}
                placeholder="Enter dropoff location"
              />
              <div className="flex flex-col items-center justify-center w-full">
                <Button isLoading={isLoading} />
                {error && (
                  <ErrorButton error={error} onClick={() => setError('')} />
                )}
              </div>
            </form>
          </div>
        </TabPanel>
        <TabPanel value={activeTab} index={1}>
          <div className="flex flex-col items-center font-normal tracking-wide text-left lg:px-8">
            <p className="pb-5 md:px-10 lg:px-0">
              Get access to our large network of vehicle partners to create a
              beautiful experience
            </p>
            <form
              className="flex flex-col items-start w-full"
              onSubmit={handleSubmit(async (data) => {
                await TroberLogger('BookBusSubmitClicked');
                setIsLoading(true);
                clearErrors();
                try {
                  if (busType.value && dropoffLocation) {
                    await axiosInstance.post('/booking/rent-bus', {
                      ...data,
                      destination: dropoffLocation,
                      typeOfBus: busType.value,
                    });
                    reset(defaultValuesRental);
                    setBusType({
                      label: defaultLabel,
                      value: '',
                    });
                    await TroberLogger('BookBusSubmitSuccess');
                    setDropoffLocationState('');
                    setPickupLocationState('');
                    setIsLoading(false);
                    openModal();
                  }
                  if (!busType.value || !dropoffLocation) {
                    setIsLoading(false);
                    setError('Please select a bus type and location');
                  }
                } catch (e: any) {
                  if (e instanceof Error) {
                    await TroberLogger('BookBusSubmitFailed', {
                      error: e.message,
                    });
                  }

                  setIsLoading(false);
                  setError(e.message);
                }
              })}
            >
              <input
                type="text"
                placeholder="Full name"
                className={`w-full py-3 px-4 mx-2 my-3 border rounded-lg ${
                  errors.fullName ? errorBorder : defaultBorder
                }`}
                {...register('fullName', {
                  required: 'Please Enter your full name',
                })}
              />
              <input
                placeholder="Phone Number"
                className={`w-full py-3 px-4 mx-2 my-3 border rounded-lg ${
                  errors.phoneNumber ? errorBorder : defaultBorder
                }`}
                {...register('phoneNumber', {
                  required: 'Please enter your phone number',
                  minLength: 9,
                })}
              />
              <JsLoaderPlaces
                value={dropoffLocation}
                onSelect={setDropoffLocationState}
                placeholder="Where will you be going?"
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
                type="number"
                placeholder="How long will you need it for? (days)"
                className={`w-full py-3 px-4 mx-2 my-3 border rounded-lg ${
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
              <div className="flex flex-col items-center justify-center w-full">
                <Button isLoading={isLoading} />
                {error && (
                  <ErrorButton error={error} onClick={() => setError('')} />
                )}
              </div>
            </form>
          </div>
        </TabPanel>
        <TabPanel value={activeTab} index={2}>
          <div className="flex flex-col items-center font-normal tracking-wide text-left lg:px-8">
            <p className="pb-5 md:px-10 lg:px-0">
              Get access to our large network of vehicle partners to create a
              beautiful experience
            </p>
            <form
              className="flex flex-col items-start w-full"
              onSubmit={handleSubmiteBusiness(async (businessdata) => {
                await TroberLogger('BusinessSubmitClicked');
                setIsLoading(true);
                clearErrorsBusiness();
                try {
                  await axiosInstance.post('/booking/business', {
                    ...businessdata,
                  });
                  resetBusiness(defaultValuesBusiness);
                  await TroberLogger('BusinessSubmitSuccess');
                  setIsLoading(false);
                  openModal();
                } catch (e: any) {
                  if (e instanceof Error) {
                    await TroberLogger('BusinessSubmitFailed', {
                      error: e.message,
                    });
                  }

                  setIsLoading(false);
                  setError(e.message);
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
                placeholder="Email (Preferably company email)"
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
              <div className="flex flex-col items-center justify-center w-full">
                <Button isLoading={isLoading} />
                {error && (
                  <ErrorButton error={error} onClick={() => setError('')} />
                )}
              </div>
            </form>
          </div>
        </TabPanel>
      </div>
      <SuccessModal
        afterOpenModal={() => {
          // setTimeout(() => {
          //   closeModal();
          // }, 5000);
        }}
        closeModal={() => {
          if (route.url) openInNewTab(route.url);
          setRoute({
            label: 'Route',
            value: '',
            url: '',
          });
          closeModal();
        }}
        urlPresent={route.url.length > 0}
        customStyles={customStyles}
        modalIsOpen={modalIsOpen}
      />
    </div>
  );
};

export default Form;
