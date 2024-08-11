import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { GiReceiveMoney } from 'react-icons/gi';


const LoanOut = () => {
  

    // Example data
    const loanData = [
        { name: 'Nijit', date: '12/5/2024', amount: 5000 },
        { name: 'OM', date: '12/5/2024', amount: 5000 },
        { name: 'Himasnhu', date: '12/5/2024', amount: 5000 },
    ];

    return (
        <Box border={'2px solid white'} borderRadius={2}>
            <Stack gap={2} m={2}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Stack direction={'row'} gap={2}>
                        <Typography>Money Out</Typography>
                        <GiReceiveMoney size={25} />
                    </Stack>
                
                </Stack>
                <Divider />
                
                {loanData.map((loan, index) => (
                    <Box key={index} borderRadius={2} border={'2px solid white'} width={500}>
                        <Stack direction={'row'} justifyContent={'space-around'}>
                            <Typography>{loan.name}</Typography>
                            <Typography>{loan.date}</Typography>
                            <Typography>{loan.amount}</Typography>
                        </Stack>
                    </Box>
                ))}
            </Stack>
        </Box>
    );
};

export default LoanOut;
