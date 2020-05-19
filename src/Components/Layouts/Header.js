import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default props => (
  <AppBar position="static">
    <Toolbar>
      <Typography
        variant="subtitle1"
        display="block"
        color="textPrimary"
        gutterBottom
      >
        My First Show
      </Typography>
    </Toolbar>
  </AppBar>
)
