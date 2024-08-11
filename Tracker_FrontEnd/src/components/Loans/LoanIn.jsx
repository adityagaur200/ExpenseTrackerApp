import React from 'react'
import { GiPayMoney } from "react-icons/gi";
import { Box,Stack,Typography,Divider, Button} from '@mui/material'
const LoanIn = () => {
  return (
    <Box border={'2px solid white'} borderRadius={2}>
      <Stack gap={2} m={2}>
      <Stack direction={'row'} gap={2} justifyContent={'space-between'} alignItems={'center'}>
                <Stack direction={'row'}>
                    <Typography>
                        Money In
                    </Typography> 
                    <GiPayMoney size={25}/>
                </Stack>
                <Button variant='outlined' size='sm'>Add</Button>
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

export default LoanIn
