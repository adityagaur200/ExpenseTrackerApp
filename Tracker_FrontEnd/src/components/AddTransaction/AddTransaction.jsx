import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaShop } from "react-icons/fa6";
import { TbFileDescription } from "react-icons/tb";
import { FaBasketShopping } from "react-icons/fa6";
import axios from 'axios';

const AddTransaction = () => {
    const [inputs, setInputs] = useState({
        Subject: "",
        Amount: "",
        Place: "",
        Date: "",
        Description: "",
        Category: "",
    });
    const [transactionCount, setTransactionCount] = useState(0);

    // Fetch transaction count on component mount
    useEffect(() => {
        const fetchTransactionCount = async () => {
            try {
                const response = await fetch('http://localhost:8090/expense/history');
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                setTransactionCount(data.length);
            } catch (error) {
                console.error('Error fetching transaction count:', error);
            }
        };

        fetchTransactionCount();
    }, []); // Empty dependency array means this runs once on mount

    const handleAddExpenses = async () => {
        const payload = {
            id: transactionCount + 1, // New ID is the current count + 1
            subject: inputs.Subject,
            amount: parseFloat(inputs.Amount),
            place: inputs.Place,
            date: inputs.Date,
            description: inputs.Description,
            category: inputs.Category,
        };

        try {
            const response = await axios.post('http://localhost:8090/expense/add', payload);
            console.log('Transaction added:', response.data);
            alert('Transaction added successfully!');
            // Reset form fields
            setInputs({
                Subject: "",
                Amount: "",
                Place: "",
                Date: "",
                Description: "",
                Category: "",
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
            const response = await fetch('http://localhost:8090/expense/history');
            if (!response.ok) throw new Error('Network response was not ok');
            const data = await response.json();
            setTransactionCount(data.length);
        } catch (error) {
            console.error('Error fetching transaction count:', error);
        }
    };

    return (
        <Box border={"1px solid white"} borderRadius={2} sx={{ width: "500px" }} m={"auto"} mt={6}>
            <Stack gap={2} m={3}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography fontSize={20} fontWeight={"bold"}>
                        ADD TRANSACTION
                    </Typography>
                    <Button variant='outlined' onClick={handleAddExpenses}>Add</Button>
                </Stack>
                <Divider />
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                    <MdOutlineDriveFileRenameOutline />
                    <Typography>
                        Subject :
                    </Typography>
                    <TextField
                        placeholder='Subject'
                        value={inputs.Subject}
                        variant="outlined"
                        onChange={(e) => setInputs({ ...inputs, Subject: e.target.value })}
                    />
                </Stack>
                <Stack direction={"row"} gap={1} alignItems={'center'}>
                    <FaMoneyBill />
                    <Typography>
                        Amount :
                    </Typography>
                    <TextField
                        placeholder='Amount'
                        value={inputs.Amount}
                        variant="outlined"
                        onChange={(e) => setInputs({ ...inputs, Amount: e.target.value })}
                    />
                </Stack>
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                    <SlCalender />
                    <Typography>
                        Date :
                    </Typography>
                    <TextField
                        placeholder='Date'
                        type='date'
                        variant="outlined"
                        value={inputs.Date}
                        onChange={(e) => setInputs({ ...inputs, Date: e.target.value })}
                    />
                </Stack>
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                    <FaBasketShopping />
                    <Typography>
                        Category :
                    </Typography>
                    <TextField
                        placeholder='Category'
                        variant="outlined"
                        value={inputs.Category}
                        onChange={(e) => setInputs({ ...inputs, Category: e.target.value })}
                    />
                </Stack>
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                    <FaShop />
                    <Typography>
                        Place :
                    </Typography>
                    <TextField
                        placeholder='Place'
                        variant="outlined"
                        value={inputs.Place}
                        onChange={(e) => setInputs({ ...inputs, Place: e.target.value })}
                    />
                </Stack>
                <Stack direction={'row'} gap={1} alignItems={'center'}>
                    <TbFileDescription />
                    <Typography>
                        Description :
                    </Typography>
                    <TextField
                        placeholder='Description'
                        variant="outlined"
                        value={inputs.Description}
                        onChange={(e) => setInputs({ ...inputs, Description: e.target.value })}
                    />
                </Stack>
            </Stack>
        </Box>
    );
}

export default AddTransaction;
