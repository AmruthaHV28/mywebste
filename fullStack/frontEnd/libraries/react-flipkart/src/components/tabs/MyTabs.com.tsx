import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Box from '@mui/material/Box';
import { TabList, TabPanel } from '@mui/lab';
import { TabContext } from '@mui/lab';
import { MyProps } from '../../pages/lessons/props/MyProps';
import { H1 } from '../../pages/lessons/elements/H1';
import { MyButton } from '../button/MyButton.com';
import { MyRatings } from '../ratting/MyRatings.com';
import { MyList } from '../list/MyList.com';
import { MyMenu } from '../menu/MyMenu.com';

import { Navigation } from '../navigantion/Navigation.com';
import { MyUseStateHook } from '../hooks/MyUseStateHook.com';
import Grid from '@mui/material/Grid';
export let MyTabs:React.FC<{}>=()=>{
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
console.log("newValue",typeof newValue)
    setValue(`${newValue}`);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="props" value="1" />
            <Tab label="Elemetnts" value="2" />
            <Tab label="List" value="3" />
            <Tab label="Menu" value="4" />
            <Tab label="Navigation" value="5" />
            <Tab label="Rating" value="6" />
            <Tab label="HOOKS" value="7" />
          </TabList>
        </Box>
        <TabPanel value="1"><MyProps/></TabPanel>
        <TabPanel value="2"><H1/></TabPanel>
        <TabPanel value="3"><MyList/></TabPanel>
        <TabPanel value='4'><MyMenu/></TabPanel>
        <TabPanel value='5'><Navigation/></TabPanel>
        <TabPanel value='6'>
<MyButton/>
<MyRatings/>
        </TabPanel>
        <TabPanel value='7'>
          
        <Grid
  container
  direction="row"
  justifyContent="space-evenly"
  alignItems="flex-start"
>
     <MyUseStateHook/>
  </Grid>

 

         </TabPanel>
      </TabContext>
    </Box>
  );
}