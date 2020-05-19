import React from 'react'
import { Grid, Paper } from '@material-ui/core'
import LeftPaper from './LeftElement'
import RightPaper from './RightElement'
import MiddlePaper from './MiddleElement'
const styles = {
  Paper: { padding: 10, marginTop: 10, marginBottom: 10 }
}
export default props => (
  <Grid container xs>
    <Grid item xs>
      <LeftPaper styles={styles} />
    </Grid>
    <Grid item xs>
      <MiddlePaper styles={styles} />
    </Grid>
    <Grid item xs>
      <RightPaper styles={styles} />
    </Grid>
  </Grid>
)
