import useTheme from '@mui/material/styles/useTheme';
import { useMediaQuery } from '@mui/system';

const useIsTabletPortait: () => boolean = () => {
  const { breakpoints } = useTheme();

  return useMediaQuery(breakpoints.down('md'));
};

export default useIsTabletPortait;
