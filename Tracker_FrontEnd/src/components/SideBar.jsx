import React from 'react'
import { Avatar, Box, Stack, Typography } from "@mui/material"
import { TbHomeDollar } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { TbLogout2 } from "react-icons/tb";
const SideBar = () => {
  return (
    <Box borderRight={"1px solid white"} >
        <Stack ml={2} mr={3} >
            <Avatar sx={{width:"100px", height:"100px",mt:"25px",ml:"55px"}}/>
            <Typography fontSize={15} fontWeight={"bold"} mt={2} ml={7}>
                Aditya Gaur
            </Typography>
            <Stack ml={0} spacing={2} mt={5} marginLeft={5} marginRight={4}>
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                    <TbHomeDollar size={30} />
                    <Typography fontSize={18}>
                        Home
                    </Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                    <GiMoneyStack size={30} />
                    <Typography fontSize={18}>
                        Expenses
                    </Typography>
                </Stack>
                <Stack direction={'row'} alignItems={'center'} gap={2}>
                    <GiReceiveMoney size={30}/>
                    <Typography fontSize={18}>
                        Loans
                    </Typography>
                </Stack>    
            </Stack>
            <Stack direction={'row'} gap={2} mt={40} justifyContent={'center'}>
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
