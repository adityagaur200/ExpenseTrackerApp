import React, { useState, useEffect } from 'react';
import { Box, Button, Divider, Stack, TextField, Typography } from "@mui/material";
import axios from 'axios';

const Tasks = () => {
    const [inputs, setInputs] = useState({
        Month: '',
        Date: '',
        Amount: '',
    });
    const [data, setData] = useState([]);
    const [transactionCount, setTransactionCount] = useState(0);

    useEffect(() => {
        console.log('Fetching data...');
        fetchTransactionCount();
    }, []);

    const fetchTransactionCount = async () => {
        try {
            const response = await fetch('http://localhost:8090/budget/all');
            if (!response.ok) throw new Error('Network response was not ok');
            const fetchedData = await response.json();
            console.log('Fetched data:', fetchedData);
            setData(fetchedData);
            setTransactionCount(fetchedData.length);
        } catch (error) {
            console.error('Error fetching transaction count:', error);
        }
    };

    const handleAddBudget = async () => {
        const payload = {
            id: transactionCount + 1,
            month: inputs.Month,
            budget: parseFloat(inputs.Amount),
            date: inputs.Date,
        };

        try {
            const response = await axios.post('http://localhost:8090/budget/addBudget', payload);
            console.log('Transaction added:', response.data);
            alert('Transaction added successfully!');
            setInputs({
                Month: "",
                Amount: "",
                Date: "",
            });
            await fetchTransactionCount();
        } catch (error) {
            console.error('Error adding transaction:', error.response ? error.response.data : error.message);
            alert('Error adding transaction.');
        }
    };

    return (
        <Box borderRadius={2} border={'2px solid white'} m={4}>
            <Stack gap={2}>
                <Typography fontSize={18} fontWeight={"bold"} align='left' ml={2} mt={2}>
                    Budget
                </Typography>
                <Divider />
                <Stack direction={'row'} gap={20}>
                    <Stack gap={2} ml={3} mb={2}>
                        {data.map((item, index) => (
                                <Box key={index} borderRadius={2} border={'2px solid white'} width={500}>
                                    <Stack direction={'row'} justifyContent={'space-around'}>
                                        <Typography>{item.month}</Typography>
                                        
                                        <Typography>{new Date(item.date).toGMTString()}</Typography>
                                        <Typography>{item.budget}</Typography>
                                    </Stack>
                                </Box>
                            ))}
                    </Stack>
                    <Box border={'2px solid white'} borderRadius={2} justifyContent={'center'} mb={2}>
                        <Stack gap={2} m={5}>
                            <Stack direction={'row'} gap={2} alignItems={'center'}>
                                <Typography>
                                    Month :
                                </Typography>
                                <TextField placeholder='Month' value={inputs.Month} type='text' variant='outlined' onChange={(e) => setInputs({ ...inputs, Month: e.target.value })} />
                            </Stack>
                            <Stack direction={'row'} alignItems={'center'} gap={2}>
                                <Typography>
                                    Date :
                                </Typography>
                                <TextField placeholder='Date' value={inputs.Date} type='date' variant='outlined' onChange={(e) => setInputs({ ...inputs, Date: e.target.value })} />
                            </Stack>
                            <Stack direction={'row'} alignItems={'center'} gap={2}>
                                <Typography>
                                    Amount :
                                </Typography>
                                <TextField placeholder='Amount' value={inputs.Amount} type='number' variant='outlined' onChange={(e) => setInputs({ ...inputs, Amount: e.target.value })} />
                            </Stack>
                            <Stack>
                                <Button variant='outlined' onClick={handleAddBudget}>
                                    Add
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Tasks;
