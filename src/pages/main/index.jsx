import React from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Main = () => {
return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
<Tabs value={1}  aria-label="basic tabs example">
    <Tab label="Item One" value={1} />
    <Tab label="Item Two" value={2} />
    <Tab label="Item Three" value={3} />
</Tabs>
</Box>
    )
}

export default Main