import React from 'react'
import {Box,Divider,Stack, Typography}  from "@mui/material" 
import LoanIn from './LoanIn'
import LoanOut from './LoanOut'
const LoanPage = () => {
  return (
    <Box borderRadius={2} border={'2px solid white'} m={5}>
      <Stack gap={1}>
        <Typography mt={1} ml={2} fontWeight={"bold"} fontSize={18}>
            Loans
        </Typography>
        <Divider/>
        <Stack direction={'row'} gap={5} ml={5} mb={5} mt={3}>
            <LoanIn/>
            <LoanOut/>
        </Stack>
      </Stack>
    </Box>
  )
}

export default LoanPage
