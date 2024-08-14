import React from 'react'
import {Box, Divider, Stack, Typography } from '@mui/material'
import {Button} from "@mui/joy"
import { GiTakeMyMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { MdAddTask } from "react-icons/md";
import { TbReportMoney } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
const QuickAcess = () => {
    const navigate = useNavigate();
  return (
    <>
        <Box border={'1px solid white'} width={900} borderRadius={2} >
            <Stack gap={2} justifyContent={'center'} >
                <Typography mt={1} ml={2}>
                    Quick Acess
                </Typography>
                <Divider/>
                <Stack direction={'row'} justifyContent={'space-evenly'} mb={2}>
                <Button color="neutral" size="lg" variant="soft" style={{width:"180px",height:"70px"}} onClick={()=>navigate('/Add')}>
                    <GiTakeMyMoney size={{width:"20px"}}/>
                    <Typography fontSize={14} fontWeight={"bold"}>
                        +Expense
                    </Typography>
                </Button>
                <Button color="neutral" size="lg" variant="soft" style={{width:"180px",height:"70px"}} onClick={()=>navigate('/Loans')}>
                    <GiReceiveMoney size={{width:"20px"}}/>
                    <Typography fontSize={14} fontWeight={"bold"}>
                        +Loan
                    </Typography>
                </Button>
                <Button color="neutral" size="lg" variant="soft" style={{width:"180px",height:"70px"}} onClick={()=>navigate('/Budget')}>
                    <TbReportMoney size={{width:"20px"}} />
                    <Typography fontSize={14} fontWeight={"bold"}>
                        +Budget
                    </Typography>
                </Button>
                </Stack>
                </Stack>
        </Box>
    </>
  )
}

export default QuickAcess
