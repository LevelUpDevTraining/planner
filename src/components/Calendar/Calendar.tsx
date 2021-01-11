import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  TableCell,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import {
  Scheduler,
  MonthView,
  DayView,
  WeekView,
  Appointments,
  Toolbar,
  AppointmentTooltip,
  AppointmentForm,
  EditRecurrenceMenu,
  Resources,
  DragDropProvider,
} from '@devexpress/dx-react-scheduler-material-ui';
import {
  darken,
  fade,
  lighten,
} from '@material-ui/core/styles/colorManipulator';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import classNames from 'clsx';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { owners } from './tasks';
import { useLanguage } from 'hooks/useLanguage';

const appointments = [
  {
    id: 0,
    title: 'Watercolor Landscape',
    startDate: new Date(2020, 12, 23, 9, 30),
    endDate: new Date(2020, 12, 23, 12, 30),
    ownerId: 1,
  },
  {
    id: 1,
    title: 'Monthly Planning',
    startDate: new Date(2020, 12, 28, 9, 30),
    endDate: new Date(2020, 12, 28, 12, 30),
    ownerId: 1,
  },
  {
    id: 2,
    title: 'Recruiting students',
    startDate: new Date(2020, 12, 9, 12, 0),
    endDate: new Date(2020, 12, 9, 13, 0),
    ownerId: 2,
  },
  {
    id: 3,
    title: 'Oil Painting',
    startDate: new Date(2020, 12, 18, 14, 30),
    endDate: new Date(2020, 12, 18, 15, 30),
    ownerId: 2,
  },
  {
    id: 4,
    title: 'Open Day',
    startDate: new Date(2020, 12, 20, 12, 0),
    endDate: new Date(2020, 12, 20, 13, 35),
    ownerId: 6,
  },
  {
    id: 5,
    title: 'Watercolor Landscape',
    startDate: new Date(2020, 12, 6, 13, 0),
    endDate: new Date(2020, 12, 6, 14, 0),
    ownerId: 2,
  },
  {
    id: 6,
    title: 'Meeting of Instructors',
    startDate: new Date(2020, 12, 28, 12, 0),
    endDate: new Date(2020, 12, 28, 12, 30),
    ownerId: 5,
  },
  {
    id: 7,
    title: 'Oil Painting for Beginners',
    startDate: new Date(2020, 12, 3, 12, 0),
    endDate: new Date(2020, 12, 3, 12, 0),
    ownerId: 3,
  },
  {
    id: 8,
    title: 'Watercolor Workshop',
    startDate: new Date(2020, 12, 9, 12, 0),
    endDate: new Date(2020, 12, 9, 12, 0),
    ownerId: 3,
  },
];

const resources = [
  {
    fieldName: 'ownerId',
    title: 'Owners',
    instances: owners,
  },
];
const getBorder = (theme: Theme) =>
  `1px solid ${
    theme.palette.type === 'light'
      ? lighten(fade(theme.palette.divider, 1), 0.88)
      : darken(fade(theme.palette.divider, 1), 0.68)
  }`;

const DayScaleCell = (props: any) => (
  <MonthView.DayScaleCell
    {...props}
    style={{ textAlign: 'center', fontWeight: 'bold' }}
  />
);

const useStyles = makeStyles((theme) => ({
  cell: {
    color: '#78909C!important',
    position: 'relative',
    userSelect: 'none',
    verticalAlign: 'top',
    padding: 0,
    height: 100,
    borderLeft: getBorder(theme),
    '&:first-child': {
      borderLeft: 'none',
    },
    '&:last-child': {
      paddingRight: 0,
    },
    'tr:last-child &': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: 'white',
    },
    '&:focus': {
      backgroundColor: fade(theme.palette.primary.main, 0.15),
      outline: 0,
    },
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
  },
  text: {
    padding: '0.5em',
    textAlign: 'center',
  },
  sun: {
    color: '#FFEE58',
  },
  cloud: {
    color: '#90A4AE',
  },
  rain: {
    color: '#4FC3F7',
  },
  sunBack: {
    backgroundColor: '#FFFDE7',
  },
  cloudBack: {
    backgroundColor: '#ECEFF1',
  },
  rainBack: {
    backgroundColor: '#E1F5FE',
  },
  opacity: {
    opacity: '0.5',
  },
  appointment: {
    borderRadius: '10px',
    '&:hover': {
      opacity: 0.6,
    },
  },
  apptContent: {
    '&>div>div': {
      whiteSpace: 'normal !important',
      lineHeight: 1.2,
    },
  },
  tooltipContent: {
    padding: theme.spacing(3, 1),
    paddingTop: 0,
    backgroundColor: theme.palette.background.paper,
    boxSizing: 'border-box',
    width: '400px',
  },
  tooltipText: {
    ...theme.typography.body2,
    display: 'inline-block',
  },
  title: {
    ...theme.typography.h6,
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightBold,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  icon: {
    color: theme.palette.action.active,
    verticalAlign: 'middle',
  },
  circle: {
    width: theme.spacing(4.5),
    height: theme.spacing(4.5),
    verticalAlign: 'super',
  },
  textCenter: {
    textAlign: 'center',
  },
  dateAndTitle: {
    lineHeight: 1.1,
  },
  calendarContainer: {
    padding: 30,
  },
  calendarTitle: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleContainer: {
    paddingBottom: theme.spacing(2),
  },
  container: {
    paddingBottom: theme.spacing(1.5),
  },
}));

const TimeTableCell = React.memo(
  ({ startDate, formatDate, otherMonth }: any) => {
    const isFirstMonthDay = startDate.getDate() === 1;
    const formatOptions = isFirstMonthDay
      ? { day: 'numeric', month: 'long' }
      : { day: 'numeric' };
    const classes = useStyles();
    return (
      <TableCell
        tabIndex={0}
        className={classNames({
          [classes.cell]: true,
          [classes.opacity]: otherMonth,
        })}
      >
        <div className={classes.text}>
          {Boolean(formatDate) && formatDate(startDate, formatOptions)}
        </div>
      </TableCell>
    );
  }
);

const Appointment = (props: any) => {
  const classes = useStyles();
  return (
    <Appointments.Appointment {...props} className={classes.appointment} />
  );
};

const AppointmentContent = (props: any) => {
  const classes = useStyles();
  return (
    <Appointments.AppointmentContent
      {...props}
      className={classes.apptContent}
    />
  );
};

type ViewType = 'Month' | 'Week' | 'Day';
type ToolBarProps = {
  setView: (val: ViewType) => void;
  createEvent: () => void;
};

const CalendarToolBar = ({ setView, createEvent }: ToolBarProps) => {
  const { strings } = useLanguage();
  return (
    <Box p={2}>
      <Toolbar.FlexibleSpace>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={4} container>
            <ButtonGroup color="primary" variant="contained">
              <Button onClick={() => setView('Day')}>{strings.day}</Button>
              <Button onClick={() => setView('Week')}>{strings.week}</Button>
              <Button onClick={() => setView('Month')}>{strings.month}</Button>
            </ButtonGroup>
            <Box pl={2}>
              <Button
                color="primary"
                variant="contained"
                onClick={() => setView('Day')}
              >
                {strings.today}
              </Button>
            </Box>
          </Grid>
          <Grid item>
            <Typography component="h5" variant="h5">
              December 2020
            </Typography>
          </Grid>
          <Grid item xs={4} container justify="flex-end">
            <Button variant="contained" color="primary" onClick={createEvent}>
              {strings.newEvent}
            </Button>
          </Grid>
        </Grid>
      </Toolbar.FlexibleSpace>
    </Box>
  );
};

export default function Calendar() {
  const [viewType, setViewType] = useState<ViewType>('Month');
  const [createEvent, setCreateEvent] = useState(false);
  const [data] = useState(appointments);
  const commitChanges = ({ added, changed, deleted }: any) => {
    // console.log(added, changed, deleted);
  };
  return (
    <Scheduler data={data}>
      <EditingState onCommitChanges={commitChanges} />
      <ViewState currentViewName={viewType} />
      <MonthView
        timeTableCellComponent={TimeTableCell}
        dayScaleCellComponent={DayScaleCell}
      />
      <WeekView />
      <DayView startDayHour={9} endDayHour={14} />
      <Appointments
        appointmentComponent={Appointment}
        appointmentContentComponent={AppointmentContent}
      />
      <Resources data={resources} />
      <CalendarToolBar
        setView={setViewType}
        createEvent={() => setCreateEvent(true)}
      />
      <EditRecurrenceMenu />
      <AppointmentTooltip showCloseButton showDeleteButton showOpenButton />
      <AppointmentForm
        visible={createEvent}
        onVisibilityChange={(val: boolean) => setCreateEvent(val)}
      />
      <DragDropProvider />
    </Scheduler>
  );
}
