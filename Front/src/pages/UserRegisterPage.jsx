import { FormControl, FormHelperText, FormLabel, Input } from '@mui/material';
import * as React from 'react';


export default function UserRegisterPage() {
  return (
    <FormControl>
      <FormLabel>Label</FormLabel>
      <Input placeholder="Placeholder" />
      <FormHelperText>This is a helper text.</FormHelperText>
    </FormControl>
  );
}
