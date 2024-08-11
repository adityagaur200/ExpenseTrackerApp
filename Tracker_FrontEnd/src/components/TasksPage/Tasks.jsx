import React, { useState } from 'react'
import {Box, Button, Divider, Stack, TextField, Typography} from "@mui/material"
const Tasks = () => {
    const[inputs,setinputs]=useState([{
        Name:'',
        Date:'',
        Amount:"",
    }])
  return (
    <Box borderRadius={2} border={'2px solid white'} m={4} >  
        <Stack gap={2}>
            <Typography fontSize={18} fontWeight={"bold"} align='left' ml={2} mt={2}>
                Tasks
            </Typography>
            <Divider/>
            <Stack direction={'row'} gap={20}> 
                <Stack gap={2} ml={3} mb={2}>
                    <Box borderRadius={2} border={'2px solid white'} width={500}>
                    <Stack direction={'row'} justifyContent={'space-around'}>
                        <Typography >
                            shopping
                        </Typography>
                        <Typography>
                            12/5/2024
                        </Typography>
                        <Typography>
                            5000
                        </Typography>
                    </Stack>
                    </Box>
            <Box borderRadius={2} border={'2px solid white'} width={500}>
                <Stack direction={'row'} justifyContent={'space-around'}>
                    <Typography >
                        shopping
                    </Typography>
                    <Typography>
                        12/5/2024
                    </Typography>
                    <Typography>
                        5000
                    </Typography>
                </Stack>
            </Box>
            <Box borderRadius={2} border={'2px solid white'} width={500}>
                <Stack direction={'row'} justifyContent={'space-around'}>
                    <Typography >
                        shopping
                    </Typography>
                    <Typography>
                        12/5/2024
                    </Typography>
                    <Typography>
                        5000
                    </Typography>
                </Stack>
            </Box>
            <Box borderRadius={2} border={'2px solid white'} width={500}>
                <Stack direction={'row'} justifyContent={'space-around'}>
                    <Typography >
                        shopping
                    </Typography>
                    <Typography>
                        12/5/2024
                    </Typography>
                    <Typography>
                        5000
                    </Typography>
                </Stack>
            </Box>
            <Box borderRadius={2} border={'2px solid white'} width={500}>
                <Stack direction={'row'} justifyContent={'space-around'}>
                    <Typography >
                        shopping
                    </Typography>
                    <Typography>
                        12/5/2024
                    </Typography>
                    <Typography>
                        5000
                    </Typography>
                </Stack>
            </Box>
            <Box borderRadius={2} border={'2px solid white'} width={500}>
                <Stack direction={'row'} justifyContent={'space-around'}>
                    <Typography >
                        shopping
                    </Typography>
                    <Typography>
                        12/5/2024
                    </Typography>
                    <Typography>
                        5000
                    </Typography>
                </Stack>
            </Box>
            <Box borderRadius={2} border={'2px solid white'} width={500}>
                <Stack direction={'row'} justifyContent={'space-around'}>
                    <Typography >
                        shopping
                    </Typography>
                    <Typography>
                        12/5/2024
                    </Typography>
                    <Typography>
                        5000
                    </Typography>
                </Stack>
            </Box>
                </Stack>
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
            </Stack>
            
        </Stack>      
    </Box>
  )
}

export default Tasks
