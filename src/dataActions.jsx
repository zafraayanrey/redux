// src/features/dataActions.js
import { setData, setLoading, setError } from "./slice";
import supabase from "./supabase";

export const fetchData = () => async (dispatch) => {
  dispatch(setLoading(true));
  const { data, error } = await supabase.from("sales").select("*");

  if (error) {
    dispatch(setError(error.message));
  } else {
    dispatch(setData(data));
  }
  dispatch(setLoading(false));
};

export const createData = (newData) => async (dispatch) => {
  dispatch(setLoading(true));
  const { data, error } = await supabase.from("sales").insert([newData]);

  if (error) {
    dispatch(setError(error.message));
  } else {
    dispatch(fetchData()); // Refetch data after successful insert
  }
  dispatch(setLoading(false));
};

export const updateData = (id, updatedData) => async (dispatch) => {
  dispatch(setLoading(true));
  const { data, error } = await supabase
    .from("sales")
    .update(updatedData)
    .eq("id", id);

  if (error) {
    dispatch(setError(error.message));
  } else {
    dispatch(fetchData()); // Refetch data after successful update
  }
  dispatch(setLoading(false));
};

export const deleteData = (id) => async (dispatch) => {
  dispatch(setLoading(true));
  const { error } = await supabase.from("sales").delete().eq("id", id);

  if (error) {
    dispatch(setError(error.message));
  } else {
    dispatch(fetchData()); // Refetch data after successful delete
  }
  dispatch(setLoading(false));
};
