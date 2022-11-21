import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types';
// material
import {
    Container,
    Typography,
    Grid,
    Box
  } from '@mui/material';
// components
import NavigationTabs from '../components/NavigationTabs';
import BreadCrumbs from '../components/BreadCrumbs';
// ----------------------------------------------------------------------

export default function SiteLayout() {
    const { t } = useTranslation('translation')

    return (
        <Container maxWidth={false} >
         <div style={{ position: 'absolute', left: '50%', transform: 'translate(-50%)'}}>
            <Grid container spacing={0} direction="column" >
                <Grid item xs={12} sm={12}>
                    <img src="/static/img/mastheadGrey.gif" alt="logo"  />
                </Grid>
                <Grid item xs={12} sm={12} mt={1}>
                    <NavigationTabs/>
                </Grid>
                <Grid item xs={12} sm={12} mt={2}>
                    <Box>
                        <BreadCrumbs/>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Grid container spacing={0} mt={2} maxWidth>
                        <Grid item xs={4} sm={4}>
                            <Typography>Side Tabs</Typography>
                        </Grid>
                        <Grid item xs={8} sm={8}>
                            <Outlet />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
        </Container>
    );
}
