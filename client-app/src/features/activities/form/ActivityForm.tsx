import { ChangeEvent, useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { LoadingButton } from "@mui/lab";
import { Paper, Stack, TextField, Button } from "@mui/material";
import { DateTimeField, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'


export default observer(function ActivityForm() {
  const { activityStore } = useStore();
  const { selectedActivity, closeForm, createActivity, updateActivity, loading } = activityStore;
  const initialState = selectedActivity ?? {
    id: '',
    title: '',
    category: '',
    description: '',
    date: '',
    city: '',
    venue: ''
  }

  const [activity, setActivity] = useState(initialState);

  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);

  useEffect(() => {
    if (activity.date) {
      const initialDate = dayjs(activity.date);
      setSelectedDate(initialDate);
    }
    else {
      setSelectedDate(dayjs());
    }
  }, [activity.date]);

  function handleSubmit() {
    activity.date = selectedDate!.toISOString();
    activity.id ? updateActivity(activity) : createActivity(activity);
  }

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value })
  }

  function handleDateChange(date: Dayjs | null) {
    setSelectedDate(date);
  }

  return (
    <Paper sx={{ p: "12px", borderRadius: "10px" }}>
      <form autoComplete="off" >
        <Stack spacing={1}>
          <TextField
            value={activity.title}
            name="title"
            label="Title"
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
          <TextField
            label="Description"
            value={activity.description}
            name="description"
            multiline
            variant="outlined"
            size="medium"
            onChange={handleInputChange}
          />
          <TextField
            value={activity.category}
            name="category"
            label="Category"
            multiline
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateTimeField
              name="date"
              label="Date"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </LocalizationProvider>
          <TextField
            value={activity.city}
            name="city"
            label="City"
            multiline
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />
          <TextField
            value={activity.venue}
            name="venue"
            label="Venue"
            multiline
            variant="outlined"
            size="small"
            onChange={handleInputChange}
          />

          <Stack direction="row" spacing={1} justifyContent="flex-end">
            <Button variant="contained" onClick={closeForm}>
              Cancel
            </Button>
            <LoadingButton loading={loading} variant="contained" onClick={handleSubmit}>
              Submit
            </LoadingButton>
          </Stack>
        </Stack>
      </form>
    </Paper>
  )
})