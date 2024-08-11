import { Box,Button,Divider,Stack,Typography } from '@mui/material'
import React, { useState } from 'react'
import { GiReceiveMoney } from "react-icons/gi";
import AddForm from './AddForm';

const LoanOut = () => {
    const[form,setform]=useState(false);
    const ShowForm = () =>
    {
        setform(true);
    }
  return (
    <Box border={'2px solid white'} borderRadius={2}>
      <Stack gap={2} m={2}>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                <Stack direction={'row'} gap={2}>
                    <Typography>
                        Money Out
                    </Typography> 
                    <GiReceiveMoney size={25}/>
                </Stack>
                <Button variant='outlined' size='sm' onClick={ShowForm}>Add</Button>
                
            </Stack>
            <Divider/>
            <Box borderRadius={2} border={'2px solid white'} width={500}>
                    <Stack direction={'row'} justifyContent={'space-around'}>
                        <Typography >
                            Nijit
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
                        OM
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
                        Himasnhu
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
    </Box>
  )
}

export default LoanOut
