import React from 'react'
import { Avatar, Box, Stack, Typography } from "@mui/material"
import { TbHomeDollar } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { TbLogout2 } from "react-icons/tb";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { TbReportMoney } from "react-icons/tb";
import { Link } from 'react-router-dom';
const SideBar = () => {
  return (
  
    <Box borderRight={"1px solid white"}>
        <Stack ml={2} mr={3} >
            <Avatar sx={{width:"100px", height:"100px",mt:"25px",ml:"55px"}}/>
            <Typography fontSize={15} fontWeight={"bold"} mt={2} ml={7}>
                Aditya Gaur
            </Typography>
            <Stack ml={0} spacing={2} mt={5} marginLeft={5} marginRight={4}>
                <Link to={'/'} style={{textDecoration:'none',color:"inherit"}}>
                    <Stack direction={'row'} alignItems={'center'} gap={2}>
                        <TbHomeDollar size={30} />
                        <Typography fontSize={18}>
                            Home
                        </Typography>
                    </Stack>
                </Link>
                <Link to={'/Add'} style={{textDecoration:'none',color:"inherit"}}>
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                    <GiMoneyStack size={30} />
                    <Typography fontSize={18}>
                        Expenses
                    </Typography>
                </Stack>
                </Link>
                <Link to={'/Transaction'} style={{textDecoration:'none',color:"inherit"}}>
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                    <FaMoneyBillTransfer size={30} />
                    <Typography fontSize={18}>
                        History
                    </Typography>
                </Stack>
                </Link>
                <Link to={'/Budget'} style={{textDecoration:'none',color:"inherit"}}>
                    <Stack direction={'row'} alignItems={'center'} gap={2}>
                        <TbReportMoney size={30}/>
                        <Typography fontSize={18}>
                            Budget
                        </Typography>
                    </Stack>
                </Link>        
            </Stack>
            <Stack direction={'row'} gap={2} mt={30} justifyContent={'center'}>
                <TbLogout2 size={30}/>
                    <Typography fontSize={18}>
                    LogOut
                </Typography>
            </Stack>
        </Stack>
    </Box>

 )
}

export default SideBar
