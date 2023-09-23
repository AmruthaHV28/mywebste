import * as React from 'react';
import Button from '@mui/material/Button';

import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { useState } from 'react';

export const MyUseStateHook:React.FC<{}>=()=>{
    let [count,setCount]= useState(0)
    let [count1,setCount1]= useState('')
      let handleclick=()=>{
         
         setCount(count+2)
         console.log(count)
      }
  return (
   



    <Stack direction="row" spacing={2}>
        <input type="text" onChange={(e)=>{setCount1(e.target.value)}}/>
    
      <Button variant="contained" onClick={handleclick} endIcon={<SendIcon />}>
        COUNT
      </Button>
      <Stack direction="row" spacing={2}></Stack>
      {count}
      <Stack direction="row" spacing={2}></Stack>
       {count1} 
    </Stack>
    
    
  );
}