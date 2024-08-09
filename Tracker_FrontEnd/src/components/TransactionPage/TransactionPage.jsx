import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import TransactionTable from './TransactionTable'

const TransactionPage = () => {
  return (
    <Box border={"1px solid white"} borderRadius={2} m={2}>
        <Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography fontSize={18} fontWeight={"bold"} m={2}> 
                    TRANSACTION RECORDS
                </Typography>
                <Button variant={'contained'} sx={{margin:"8px"}}>Add Expense</Button>
            </Stack>
            <Divider/>
            <TransactionTable/>
        </Stack>
    </Box>
  )
}

export default TransactionPage
