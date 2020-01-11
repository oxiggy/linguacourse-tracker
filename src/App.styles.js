export default {

  heading: {
    marginBottom: 24,
    fontWeight: 300,
    textAlign: 'left',
    textTransform: 'uppercase',
    letterSpacing: '0.005em',
    color: '#ff5e8c',
    '& > strong': {
      fontWeight: 900,
      letterSpacing: '0.025em',
    }
  },

  day: {
    position: 'relative',
    flexGrow: 1,
    flexBasis: 24,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 32,
    height: 48,
    fontSize: '14px',
    color: '#fff',
  },
  dayMonth: {
    position: 'absolute',
    left: 0,
    top: -24,
  },
  job: {
    display: 'flex',
    alignItems: 'center',
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: '14px',
    color: '#fff',
    backgroundColor: '#ff5e8c',
    textAlign: 'left',
    borderRight: '2px solid #fff',
    borderBottom: '2px solid #fff',
    '&:last-child': {
      borderBottomColor: 'transparent',
    }
  },
  jobDay: {
    flexGrow: 1,
    flexBasis: 24,
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    height: 48,
    minWidth: 32,
    paddingLeft: 2,
    paddingBottom: 2,
    '& > div': {
      width: '100%',
      backgroundColor: '#fff',
    },
    //'&:first-child': {
    //  paddingLeft: 0,
    //},
    '&:last-child': {
      paddingRight: 2,
    }
    //borderLeft: '2px solid transparent',
    //borderBottom: '2px solid transparent',
    //'&:not($jobDay_disabled) + $jobDay_disabled': {
    //  //borderLeftColor: 'transparent !important',
    //}
  },
  jobDay_disabled: {
    '& + $jobDay_disabled': {
      paddingLeft: 0,
    }
  },

  jobDayCheckbox: {
    padding: 0,
    width: '100%',
    height: '100%',
    borderRadius: 0,
    '& svg': {
      color: '#ff5e8c',
    },
    '&:not(.Mui-checked) svg': {
      opacity: 0,
    }
  },

  root: {
    padding: 24,
  },
  nav: {
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    paddingTop: 48 + 24,
    maxWidth: 240,
  },
  content: {
    flexGrow: 1,
    overflowX: 'auto',
  },
  contentHeader: {
    display: 'flex',
    paddingTop: 24,
  },
}
