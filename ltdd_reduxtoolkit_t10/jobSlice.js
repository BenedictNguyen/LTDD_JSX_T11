import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await fetch('https://66f4d07977b5e889709a8de9.mockapi.io/chat');
  return await response.json();
});

export const addItemRequest = createAsyncThunk('jobs/addItem', async (item) => {
  return item;
});

export const deleteItemRequest = createAsyncThunk('jobs/deleteItem', async (id) => {
  return id;
});

const jobsSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    loading: false,
    error: null,
  },
  reducers: {
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    removeJob: (state, action) => {
      state.jobs = state.jobs.filter(job => job.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addItemRequest.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      })
      .addCase(deleteItemRequest.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter(job => job.id !== action.payload);
      });
  },
});

export const { addJob, removeJob } = jobsSlice.actions;
export default jobsSlice.reducer;
