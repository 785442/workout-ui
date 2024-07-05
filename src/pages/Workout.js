import * as React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import SCHEDULE from '../resources/schedule.json';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Workout() {
  const [data, setData] = useState({ days: 0, time: 0, difficulty: 0 });

  const getWeekCard = (week) => {
    return <Item>{week.name}</Item>;
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2}>
        {SCHEDULE && SCHEDULE.map(week=> getWeekCard(week))}
      </Stack>
    </Box>
  );;
}