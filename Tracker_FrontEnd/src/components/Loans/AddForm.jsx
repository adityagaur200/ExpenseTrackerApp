import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const AddForm = () => {
    const[inputs,setinputs] = useState([{
        Name:'',
        Amount:'',
        Date:"",
    }])
  return (
    <Box border={'2px solid white'} borderRadius={2} justifyContent={'center'} mb={2}>
    <Stack gap={2} m={5}>
        <Stack direction={'row'} gap={2} alignItems={'center'}>
            <Typography>
                Name :
            </Typography>
            <TextField placeholder='Name' value={inputs.Name} type='name' variant='outlined' onChange={(e)=>setinputs(...inputs,e.target.value)}/>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} gap={2}>
            <Typography>
                Date :
            </Typography>
            <TextField placeholder='Date' value={inputs.Date} type='Date' variant='outlined' onChange={(e)=>setinputs(...inputs,e.target.value)}/>
        </Stack>
        <Stack direction={'row'} alignItems={'center'} gap={2}>
            <Typography>
                Amount : 
            </Typography>
            <TextField placeholder='Amount' value={inputs.Amount} type='name' variant='outlined' onChange={(e)=>setinputs(...inputs,e.target.value)}/>
        </Stack>
        <Stack>
            <Button variant='outlined'>
                Add
            </Button>
        </Stack>
    </Stack>
</Box>
  )
}

export default AddForm
