import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// --- Async thunk: one API call to get all subjects and questions ---
export const fetchQuizData = createAsyncThunk(
  "quiz/fetchQuizData",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        "https://eduxlbackend.onrender.com/api/getSubjectQuestions"
      );
      return res.data; // array of subjects with questionSets
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    loading: false,
    error: null,
    subjectArray: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuizData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchQuizData.fulfilled, (state, action) => {
        state.loading = false;
        console.log(JSON.stringify(action.payload));
        state.subjectArray.push({
          subject: action.payload[0]?.subject ?? null,
          NoOfQuestions:
            action.payload[0]?.questionSets[0]?.questions ?? null,
        });
      })
      .addCase(fetchQuizData.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const {} = quizSlice.actions;
export default quizSlice.reducer;
