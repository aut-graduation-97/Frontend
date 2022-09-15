import Image from 'next/image';
import Box from '@mui/material/Box';

export default function Avatar()  {
    return (
     <Box sx={{py: 2}}>
      
      <div style={{ borderRadius: '50%', overflow: 'hidden', width: '128px', height: '128px' , margin: 'auto',}}>
      <Image src="https://i.pravatar.cc/300" alt="avatar" width={150} height={150}  className="rounded-full"/>
      </div>
     
     </Box>
    )
  }
  