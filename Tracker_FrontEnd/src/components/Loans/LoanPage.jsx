import React, { useState } from 'react'
import {Box,Button,Divider,Stack, Typography}  from "@mui/material" 
import LoanIn from './LoanIn'
import LoanOut from './LoanOut'
import showForm from './LoanOut'
import AddForm from './AddForm'
const LoanPage = () => {
  const [form, setForm] = useState(false);

  const showForm = () => {
     if(form==false)
      {
          setForm(true);
      }
      else
       setForm(false);

  };

  return (
    <Box borderRadius={2} border={'2px solid white'} m={5}>
      <Stack gap={1}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Box mt={1}>
            <Typography mt={1} ml={2} fontWeight={"bold"} fontSize={18}>
              Loans
            </Typography>
          </Box>
          <Box mt={1} mr={2}>
            <Stack direction={'row'} gap={2}>
              <Button variant='outlined' size='sm' onClick={showForm}>Add LoanIn</Button>
              <Button variant='outlined' size='sm' onClick={showForm}>Add LoanOut</Button>
            </Stack>
          </Box>
        </Stack>
        <Divider/>
        {form ?
        <Stack direction={'row'} gap={5} ml={5} mb={5} mt={3}>
            <LoanIn/>
            <LoanOut/>
        </Stack> : <AddForm/>}
      </Stack>
    </Box>
  )
}

export default LoanPage
