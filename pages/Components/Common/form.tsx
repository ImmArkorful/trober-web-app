import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import React, { useState } from 'react';
import SelectDropDown from './Select';

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
      fontFamily: 'poppins',
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
  const classes = useStyles();

  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div
      className={`${display} bg-white z-10 mb:48 md:mb-0 flex items-center justify-center mx-3 shadow-xl lg:mx-20 bg-darkgray md:bg-graybg rounded-2xl md:w-6/6 lg:w-2/6`}
    >
      <div className="flex flex-col justify-around h-full px-10 py-10 opacity-100 sm:w-full rounded-2xl ">
        <Box
          sx={{
            borderBottom: 1,
            borderColor: 'black',
            fontFamily: 'Poppins',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            className={classes.tabs}
          >
            <Tab
              label={<span className="text-xs">Book Bus</span>}
              {...a11yProps(0)}
            />
            <Tab
              label={<span className="text-xs">For Business</span>}
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="flex flex-col items-center font-normal tracking-wide text-left lg:px-8">
            <p className="pb-5">
              Get access to our large network of vehicle partners to create a
              beautiful experience
            </p>
            <form
              className="flex flex-col items-start w-full"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="text"
                name="name"
                placeholder="Full name"
                className="w-full py-3 pl-4 mx-2 my-3 border rounded-lg border-bordergray"
              />
              <input
                type="text"
                name="phonenumber"
                placeholder="Phone Number"
                className="w-full py-3 pl-4 mx-2 my-3 border rounded-lg border-bordergray"
              />
              <input
                type="text"
                name="desitnation"
                placeholder="Where will you be going?"
                className="w-full py-3 pl-4 mx-2 my-3 border rounded-lg border-bordergray"
              />
              <SelectDropDown
                selectionColor="white"
                options={[
                  {
                    value: 'red',
                    label: 'Pick Bus Stop',
                  },
                ]}
              />
              <input
                type="text"
                name="duration"
                placeholder="How long will you need it for?"
                className="w-full py-3 pl-4 mx-2 my-3 border rounded-lg border-bordergray"
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
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </div>
    </div>
  );
};

export default Form;
