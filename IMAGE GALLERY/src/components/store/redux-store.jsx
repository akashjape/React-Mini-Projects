import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const data = [
  {
    Name: "Mahadev",
    src: "/Mahadev.jpg",
    Date: "01/05/2024",
    like: true,
  },
  { Name: "Mantra", src: "/Mantra.jpg", Date: "01/06/2024", like: false },
  { Name: "ature", src: "/Nature.jpg", Date: "01/07/2024", like: false },
  { Name: "Night", src: "/Night.jpg", Date: "01/08/2024", like: true },
  { Name: "Shiv", src: "/Shiv.jpg", Date: "01/09/2024", like: false },
];

const imageSlice = createSlice({
  name: "image",
  initialState: { images: data },
  reducers: {
    addImage: (state, action) => {
      state.images.push(action.payload);
    },
    dateSort: (state) => {
      console.log("clicked");
      state.images = [...state.images].sort((a, b) => {
        return (
          new Date(b.Date.split("/").reverse().join("-")) -
          new Date(a.Date.split("/").reverse().join("-"))
        );
      });
    },
    nameSort: (state) => {
      state.images = [...state.images].sort((a, b) =>
        a.Name.localeCompare(b.Name)
      );
    },
    toggleLike: (state, action) => {
      const { name } = action.payload;
      const image = state.images.find((img) => img.Name === name);

      if (image) {
        image.like = !image.like;
      }
    },
  },
});

const themeSlice = createSlice({
  name: "theme",
  initialState: { isDarkMode: false },
  reducers: {
    toggleTheme: (state) => {
      console.log("Toggled");
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

const store = configureStore({
  reducer: {
    image: imageSlice.reducer,
    theme: themeSlice.reducer,
  },
});

export const { nameSort, dateSort, addImage, toggleLike } = imageSlice.actions;
export const { toggleTheme } = themeSlice.actions;
export default store;
