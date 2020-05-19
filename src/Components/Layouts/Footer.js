import React from 'react'
import { Paper, Tabs, Tab } from '@material-ui/core'

export default props => (
  <Paper elevation={2}>
    <Tabs
      value={0}
      onChange={() => {
        console.log('gotClicked')
      }}
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Nothing Just One" />
      <Tab label="Nothing Just  Two" />
      <Tab label="Nothing Just  Three" />
    </Tabs>
  </Paper>
)
