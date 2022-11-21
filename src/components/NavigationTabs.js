import React from 'react';
import { useTranslation } from 'react-i18next'

// material
import { 
    Tabs,
    Tab,
    Typography,
    Box
 } from '@mui/material';

// ----------------------------------------------------------------------

function TabPanel(props) {
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
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

export default function NavigationTabs() {
  const { t } = useTranslation('translation')

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="Français" {...a11yProps(1)} />
          <Tab label="What's New" {...a11yProps(2)} />
          <Tab label="Contact Us" {...a11yProps(3)} />
          <Tab label="Links" {...a11yProps(4)} />
          <Tab label="Disclaimer" {...a11yProps(5)} />
        </Tabs>
      </Box>
    </Box>
  );
}
