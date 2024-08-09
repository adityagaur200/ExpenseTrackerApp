import { Divider, Stack, Typography} from '@mui/material'
import { LineChart } from '@mui/x-charts/LineChart';
import React from 'react'

const Graph = () => {
  return (
    <Stack direction={'row'} m={4} mb={0}>
        <Stack >
            <Typography fontSize={14} fontWeight={'bold'}>
                Day-to-Day
            </Typography>
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
            {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
            ]}
            width={410}
            height={300}/>
        </Stack>
        <Divider orientation='vertical' variant='middle' flexItem />
        <Stack ml={2}> 
            <Typography fontWeight={"bold"} fontSize={14}>
                Month-to-Month
            </Typography>
            <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
                {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
            ]}
            width={410}
            height={300}
        />
        </Stack>
       
        
    </Stack>
  )
}

export default Graph
