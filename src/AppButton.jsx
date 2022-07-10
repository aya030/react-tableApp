import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function AppButton() {
  return (
    <>
      <Box sx={{ maxWidth: 650 }} className="tel-box">
        <Stack spacing={5} direction="row">
          <Button variant="contained">000-1234-5678</Button>
        </Stack>
      </Box>
    </>
  );
}
export default AppButton;
