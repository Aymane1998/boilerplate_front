import React from 'react';
import { cLoadingIconButtonStyles } from './styles';
import {
  Box,
  CircularProgress,
  IconButton,
  IconButtonPropsColorOverrides,
  SxProps,
  Theme,
  useTheme,
} from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { OverridableStringUnion } from '@mui/types';

interface CLoadingIconButtonProps {
  onClick?: () => void;
  isLoading: boolean;
  isSuccess?: boolean;
  icon: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'reset' | 'submit';
  color?:
    | OverridableStringUnion<
        | 'error'
        | 'inherit'
        | 'default'
        | 'primary'
        | 'secondary'
        | 'info'
        | 'success'
        | 'warning',
        IconButtonPropsColorOverrides
      >
    | undefined;
  sx?: SxProps<Theme>;
}

const CLoadingIconButton: React.FC<CLoadingIconButtonProps> = ({
  onClick,
  isLoading,
  isSuccess = false,
  icon,
  color = 'primary',
  disabled,
  type,
  sx,
}) => {
  const theme = useTheme();

  return (
    <Box sx={[...(Array.isArray(sx) ? sx : [sx])]}>
      {isLoading ? (
        <CircularProgress
          sx={cLoadingIconButtonStyles(theme).loader}
          size={14}
        />
      ) : isSuccess ? (
        <DoneIcon
          color="primary"
          sx={{ marginBlock: '4.8px', marginInline: '8px' }}
        />
      ) : (
        <IconButton
          onClick={onClick}
          color={color}
          type={type}
          disabled={disabled}
        >
          {icon}
        </IconButton>
      )}
    </Box>
  );
};

export default CLoadingIconButton;
