import React, { useState,useEffect } from 'react'
import {Box, Button, Divider, Stack, TextField, Typography} from "@mui/material"
import axios from 'axios'

const Tasks = () => {
    const[inputs,setinputs]=useState([{
        Name:'',
        Date:'',
        Amount:"",
    }])

    const [transactionCount, setTransactionCount] = useState(0);

    // Fetch transaction count on component mount
    useEffect(() => {
        const fetchTransactionCount = async () => {
            try {
                const response = await fetch('http://localhost:8090/budget/all');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setTransactionCount(data.length);
            } catch (error) {
                console.error('Error fetching transaction count:', error);
            }
        };

        fetchTransactionCount();
    }, []); // Empty dependency array means this runs once on mount

    const handleAddBudget = async () => {
        const payload = {
            id: transactionCount + 1, // New ID is the current count + 1
            Month: inputs.Month,
            Amount: parseFloat(inputs.Amount),
            date: inputs.Date,
        };

        try {
            const response = await axios.post('http://localhost:8090/budget/addBudget', payload);
            console.log('Transaction added:', response.data);
            alert('Transaction added successfully!');
            // Reset form fields
            setinputs({
                Month: "",
                Amount: "",
                Date: "",
            });
            // Optionally, refresh transaction count after adding
            await fetchTransactionCount();
        } catch (error) {
            console.error('Error adding transaction:', error.response ? error.response.data : error.message);
            alert('Error adding transaction.');
        }
    };

    // Function to refresh the transaction count
    const fetchTransactionCount = async () => {
        try {
            const response = await fetch('http://localhost:8090/budget/all');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setTransactionCount(data.length);
        } catch (error) {
            console.error('Error fetching transaction count:', error);
        }
    };
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
                                Month :
                            </Typography>
                            <TextField placeholder='Month' value={inputs.Month} type='name' variant='outlined' onChange={(e)=>setinputs(...inputs,e.target.value)}/>
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
                            <Button variant='outlined' onClick={handleAddBudget}>
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
