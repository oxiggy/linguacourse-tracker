import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles'
import styles from './App.styles'
import clsx from 'clsx'
import CssBaseline from '@material-ui/core/CssBaseline'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Checkbox from '@material-ui/core/Checkbox'
import CheckIcon from '@material-ui/icons/Check'

import { MONTHS, JOBS } from './data'

const useStyles= makeStyles(styles)

function App() {
  const classes= useStyles()
  const [ jobDayCheckedById, setJobDayCheckedById ]= React.useState(JSON.parse(localStorage.getItem('jobDayCheckedById') || '{}'))
  return (
    <div className="App">
      <CssBaseline/>
      <Box className={classes.root}>
        <Typography className={classes.heading} variant="h3">
          <strong>Трекер</strong> активности
        </Typography>
        <Box display="flex">

          <Box className={classes.nav} display="flex" flexDirection="column" pt={6}>
            {JOBS.map((job, i) => (
              <div key={i} className={classes.job}>
                <div>{job.name}</div>
              </div>
            ))}
          </Box>

          <Box className={classes.content}>
            <Box className={classes.contentHeader}>
              {MONTHS.map((month, i) => {
                return month.days.map((day, j) => (
                  <Box
                    key={day.id}
                    className={classes.day}
                    flexBasis={24}
                    style={{ backgroundColor:month.color }}
                  >
                    {j === 0 && (
                      <div className={classes.dayMonth} style={{ color:month.color }}>
                        {month.name}
                      </div>
                    )}
                    {day.name}
                  </Box>
                ))
              })}
            </Box>
            {JOBS.map((job, i) => (
              <Box key={i} display="flex">
                {MONTHS.map((month, i) => {
                  return month.days.map((day, j) => {
                    const dayOptions= (job.days && job.days[day.id]) || {}
                    return (
                      <Box
                        key={day.id}
                        className={clsx(classes.jobDay, dayOptions.disabled && classes.jobDay_disabled )}
                        style={{
                          //borderLeftColor: month.color,
                          //borderBottomColor: month.color,
                          backgroundColor: month.color,
                        }}
                      >
                        <div>
                          {dayOptions.disabled ? (
                            null
                          ) : (
                            <Checkbox
                              className={classes.jobDayCheckbox}
                              disableRipple
                              checkedIcon={(
                                <CheckIcon/>
                              )}
                              checked={!!jobDayCheckedById[`${job.id}-${day.id}`]}
                              onChange={({ target:{ checked }}) => {
                                const newJobDayCheckedById= {
                                  ...jobDayCheckedById,
                                  [`${job.id}-${day.id}`]: checked
                                }
                                setJobDayCheckedById(newJobDayCheckedById)
                                localStorage.setItem('jobDayCheckedById', JSON.stringify(newJobDayCheckedById))
                              }}
                            />
                          )}
                        </div>
                      </Box>
                    )
                  })
                })}
              </Box>
            ))}
          </Box>

        </Box>
      </Box>
    </div>
  );
}

export default App;
