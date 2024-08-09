import React from 'react'
import {Stack,Box, Typography, Divider} from '@mui/material'
import { FaOpencart } from "react-icons/fa";
import { GiPayMoney } from "react-icons/gi";
import { GiReceiveMoney } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";
import { TbMoneybag } from "react-icons/tb";
import BasicTable from './TransactionTable';
import QuickAcess from './QuickAcess';
import Graph from '../Graph';

const Homepage = () => {
  return (
    <Stack justifyContent={'center'} alignItems={'center'} gap={1}>
        <Stack direction={'row'} gap={4} justifyContent={'center'} alignItems={'center'}>
            <Box border={'1px solid white'} borderRadius={1} width={360}>
                <Stack gap={1} m={1}>
                    <Typography fontSize={12} fontWeight={'bold'} mt={1}>
                        Pending Tasks
                    </Typography>
                    <Divider/>
                    <Stack gap={2} direction={'row'} justifyContent={'space-between'} alignContent={'center'}>
                        <Box display={'flex'} gap={1} ml={1}>
                        <FaOpencart />
                        <Typography fontSize={11} fontWeight={'bold'}>
                            Upcoming Tasks
                        </Typography>
                        </Box>
                        <Typography marginLeft={20} fontSize={11}  fontWeight={'bold'}>
                            9
                        </Typography>   
                    </Stack>
                    <Stack gap={2} direction={'row'} justifyContent={'space-between'} alignContent={'center'}>
                        <Box display={'flex'} gap={1} ml={1}>
                        <GiPayMoney />
                        <Typography fontSize={11} fontWeight={'bold'}>
                            Pending Dues
                        </Typography>
                        </Box>
                        <Typography marginLeft={20} fontSize={11}  fontWeight={'bold'}>
                            9000
                        </Typography>   
                    </Stack>
                    <Stack gap={2} direction={'row'} justifyContent={'space-between'} alignContent={'center'}>
                        <Box display={'flex'} gap={1} ml={1}>
                        <GiReceiveMoney />
                        <Typography fontSize={11} fontWeight={'bold'}>
                          Lend Out
                        </Typography>
                        </Box>
                        
                        <Typography marginLeft={23} fontSize={11}  fontWeight={'bold'} >
                            9321
                        </Typography>   
                    </Stack>
                    <Stack gap={2} direction={'row'} justifyContent={'space-between'} alignContent={'center'}>
                        <Box display={'flex'} gap={1} ml={1}>
                        <TbPigMoney />
                        <Typography fontSize={11} fontWeight={'bold'}>
                            Balance Left
                        </Typography>
                        </Box>
                        
                        <Typography marginLeft={20} fontSize={11}  fontWeight={'bold'}>
                            9
                        </Typography>   
                    </Stack>
                    <Stack gap={2} direction={'row'} justifyContent={'space-between'} alignContent={'center'}>
                        <Box display={'flex'} gap={1} ml={1}>
                        <TbMoneybag/>
                        <Typography fontSize={11} fontWeight={'bold'}>
                            Total Spent
                        </Typography>
                        </Box>
                        <Typography marginLeft={20} fontSize={11}  fontWeight={'bold'}>
                            9
                        </Typography>   
                    </Stack>
                                                             
                </Stack>
            </Box>
            
            <Box border={'1px solid white'} borderRadius={1} width={500}>
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
