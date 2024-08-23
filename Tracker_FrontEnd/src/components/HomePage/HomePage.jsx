import React ,{useState,useEffect} from 'react'
import {Stack,Box, Typography, Divider} from '@mui/material'
import { FaOpencart } from "react-icons/fa";
import { TbPigMoney } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import BasicTable from './TransactionTable';
import QuickAcess from './QuickAcess';
import Graph from '../Graph';
const Homepage = () => {
    const [spent, setSpent] = useState(0);
    const [budget, setBudget] = useState(0);
   
    useEffect(() => {
        async function getDetails() {
            try {
                // Fetch expense data
                const expenseResponse = await fetch("http://localhost:8090/expense/history");
                if (!expenseResponse.ok) throw new Error('Error fetching expense data');
                const expenseData = await expenseResponse.json();

                // Fetch budget data
                const budgetResponse = await fetch('http://localhost:8090/budget/all');
                if (!budgetResponse.ok) throw new Error('Error fetching budget data');
                const budgetData = await budgetResponse.json();
                const current_data = budgetData.at(-1);
                const totalBudget = current_data.budget;
                setBudget(totalBudget);

                const totalExpenditure = expenseData.reduce((total, item) => total + item.amount, 0);
                setSpent(totalExpenditure);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        getDetails();
    }, []);

  return (
    <Stack justifyContent={'center'} alignItems={'center'} gap={1}>
        <Stack direction={'row'} gap={4} justifyContent={'center'} alignItems={'center'}>
            <Box border={'1px solid white'} borderRadius={1} width={360}>
                <Stack gap={1} m={1}>
                    <Typography fontSize={16} fontWeight={'bold'} mt={1}>
                        Over View
                    </Typography>
                    <Divider/>
                    <Stack gap={2} direction={'row'} justifyContent={'space-between'} alignContent={'center'}>
                        <Box display={'flex'} gap={1} ml={1}>
                        <FaOpencart />
                        <Typography fontSize={14} fontWeight={'bold'}>
                            Budget
                        </Typography>
                        </Box>
                        <Typography marginLeft={20} fontSize={14}  fontWeight={'bold'}>
                            {budget}
                        </Typography>   
                    </Stack>
                    <Stack gap={2} direction={'row'} justifyContent={'space-between'} alignContent={'center'}>
                        <Box display={'flex'} gap={1} ml={1}>
                        <TbPigMoney />
                        <Typography fontSize={14} fontWeight={'bold'}>
                            Balance Left
                        </Typography>
                        </Box>
                        
                        <Typography marginLeft={20} fontSize={14}  fontWeight={'bold'}>
                            {budget - spent}
                        </Typography>   
                    </Stack>
                    <Stack gap={2} direction={'row'} justifyContent={'space-between'} alignContent={'center'}>
                        <Box display={'flex'} gap={1} ml={1}>
                        <TbMoneybag/>
                        <Typography fontSize={14} fontWeight={'bold'}>
                            Total Spent
                        </Typography>
                        </Box>
                        <Typography marginLeft={20} fontSize={14}  fontWeight={'bold'}>
                            {spent}
                        </Typography>   
                    </Stack>
                                                             
                </Stack>
            </Box>
            
            <Box border={'1px solid white'} borderRadius={1} width={500}  height={175} mt={1} >
              <BasicTable/>
            </Box>
        </Stack>
        <QuickAcess/>
        <Box borderRadius={2} border={"1px solid white"}  sx={{maxWidth:"1000px"}}>
            <Graph/>
        </Box>
    </Stack>
  )
}

export default Homepage
