import { Box, Button, Divider, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa6";
import { SlCalender } from "react-icons/sl";
import { FaShop } from "react-icons/fa6";
import { TbFileDescription } from "react-icons/tb";
import { FaBasketShopping } from "react-icons/fa6";
const AddTransaction = () => 
{
    const[inputs,setinputs] = useState({
        Subject:"",
        Amount:"",
        Place:"",
        Date:"",
        Description:"",
        Category:"",
    })
    
    const handleAddExpenses = async () =>
    {
        const url = "http://localhost:8080/expense/history"
        const data = await fetch(url)
        const jsonData = data.json()
        console.log(jsonData)
        
    }  
  return (
    <Box border={"1px solid white"} borderRadius={2} sx={{width:"500px"}} m={"auto"} mt={6}>
      <Stack gap={2} m={3}>
        <Stack direction={'row'} justifyContent={'space-between'}>
            <Typography fontSize={20} fontWeight={"bold"}>
                ADD TRANSACTION
            </Typography>
            <Button variant='outlined' onClick={handleAddExpenses}>Add</Button>
        </Stack>
        <Divider/>
        <Stack direction={'row'} gap={1} alignItems={'center'}>
            <MdOutlineDriveFileRenameOutline/>
            <Typography>
                Subject :
            </Typography>
            <TextField placeholder='Subject' type='name' value={inputs.Subject} variant="outlined" onChange={(e)=>setinputs({...inputs,Subject:e.target.value})}/>
        </Stack>
        <Stack direction={"row"} gap={1} alignItems={'center'}>    
            <FaMoneyBill/>
            <Typography>
                Amount :
            </Typography>
            <TextField placeholder='Amount'  value={inputs.Amount} variant="outlined" onChange={(e)=>setinputs({...inputs,Amount:e.target.value})}/>
        </Stack>
        <Stack direction={'row'} gap={1} alignItems={'center'}>    
            <SlCalender/>
            <Typography>
                Date :
            </Typography>
            <TextField placeholder='Date' type='date' variant="outlined" value={inputs.Date} onChange={(e)=>setinputs({...inputs,Date:e.target.value})}/>
        </Stack>
        <Stack direction={'row'} gap={1} alignItems={'center'}>    
            <FaBasketShopping />
            <Typography>
                Category :
            </Typography>
            <TextField placeholder='Category' variant="outlined" type='name' value={inputs.Category} onChange={(e)=>setinputs({...inputs,Category:e.target.value})}/>
        </Stack>
        <Stack direction={'row'} gap={1} alignItems={'center'}>
            <FaShop/>
            <Typography>
                Place :
            </Typography>
            <TextField placeholder='Place' variant="outlined" type='name' value={inputs.Place} onChange={(e)=>setinputs({...inputs,Place:e.target.value})}/>
        </Stack>
        <Stack direction={'row'} gap={1} alignItems={'center'}>    
            <TbFileDescription />
            <Typography>
                Description :
            </Typography>
            <TextField placeholder='Description' variant="outlined" type='name' value={inputs.Description} onChange={(e)=>setinputs({...inputs,Description:e.target.value})}/>
        </Stack>

      </Stack>
    </Box>
  )
}

export default AddTransaction
