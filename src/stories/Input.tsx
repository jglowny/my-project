import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';

// export interface InputProps extends MuiInputProps {
//   value: string;
// }

export const Input = ({ label, ...rest }: TextFieldProps) => <TextField {...rest}>{label}</TextField>;
