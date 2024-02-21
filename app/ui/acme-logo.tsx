import LanguageIcon from '@mui/icons-material/Language';
import { lusitana } from '@/app/ui/fonts';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export default function AcmeLogo() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <LanguageIcon sx={{ height: 42, width: 42, rotate: '15deg' }} />

      <Typography variant="h1">Acme</Typography>
    </Box>
  );
}
