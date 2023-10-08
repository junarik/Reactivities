import { Button, Paper, Stack, TextField } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { useState } from "react";

const cancelTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#bdbdbd", // Customize the cancel button's background color for the main state
          "&:hover": {
            backgroundColor: "#757575", // Customize the cancel button's background color for the hover state
          },
          "&:active": {
            backgroundColor: "#424242", // Customize the cancel button's background color for the active state
          },
        },
      },
    },
  },
});

const submitTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: "#4CAF50", // Customize the submit button's background color for the main state
          "&:hover": {
            backgroundColor: "#45A049", // Customize the submit button's background color for the hover state
          },
          "&:active": {
            backgroundColor: "#388E3C", // Customize the submit button's background color for the active state
          },
        },
      },
    },
  },
});

export default function ActivityForm({
  activity: selectedActivity,
  closeForm,
  createOrUpdate,
}) {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    createOrUpdate(activity);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  }

  return (
    <Paper sx={{ p: "12px", borderRadius: "10px" }}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Stack spacing={1}>
          <TextField
            value={activity.title}
            name="title"
            label="Title"
            variant="outlined"
            size="small"
            onChange={(e) => handleInputChange(e)}
          />
          <TextField
            label="Description"
            value={activity.description}
            name="description"
            multiline
            variant="outlined"
            size="medium"
            onChange={(e) => handleInputChange(e)}
          />
          <TextField
            value={activity.category}
            name="category"
            label="Category"
            multiline
            variant="outlined"
            size="small"
            onChange={(e) => handleInputChange(e)}
          />
          <TextField
            value={activity.date}
            name="date"
            label="Date"
            multiline
            variant="outlined"
            size="small"
            onChange={(e) => handleInputChange(e)}
          />
          <TextField
            value={activity.city}
            name="city"
            label="City"
            multiline
            variant="outlined"
            size="small"
            onChange={(e) => handleInputChange(e)}
          />
          <TextField
            value={activity.venue}
            name="venue"
            label="Venue"
            multiline
            variant="outlined"
            size="small"
            onChange={(e) => handleInputChange(e)}
          />

          <Stack direction="row" spacing={1} justifyContent="flex-end">
            <Button variant="contained" theme={cancelTheme} onClick={closeForm}>
              Cansel
            </Button>
            <Button type="submit" variant="contained" theme={submitTheme}>
              Submit
            </Button>
          </Stack>
        </Stack>
      </form>
    </Paper>
  );
}
