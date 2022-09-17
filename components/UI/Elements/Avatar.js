import Image from 'next/image';
import Box from '@mui/material/Box';

export default function Avatar({size})  {
    return (
      <Box sx={{ borderRadius: '50%', overflow: 'hidden', width: size, height: size , margin: 'auto'}}>
      <Image src="https://i.pravatar.cc/300" alt="avatar" width={150} height={150}  className="rounded-full"/>
      </Box>

    )
  }
  