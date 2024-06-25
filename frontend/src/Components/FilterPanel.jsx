import { Stack, Typography } from '@mui/material'
import React from 'react'

function FilterPanel() {
  return (
    <Stack
      display={'flex'}
      justifyContent={'center'}
      // alignItems={'center'}
      maxHeight={'900px'}
      position={'sticky'}
      minWidth={'220px'}
      sx={{
        backgroundColor: 'blanchedalmond'
      }}
    >
      <Typography>

        Category
      </Typography>

    </Stack>
  )
}

export default FilterPanel