import React from 'react';
import { useTranslation } from 'react-i18next'

// material
import { Box, Card, Button, Grid, Stack, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page'

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const { t } = useTranslation('translation')

  return (
    <Page title="Home">
      <Container maxWidth="xl">
            <Typography>About NOAMI</Typography>
      </Container>
    </Page>
  );
}
