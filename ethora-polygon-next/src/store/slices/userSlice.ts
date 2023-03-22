import { StateCreator } from "zustand";

export interface User {
  firstName: string
}

export interface UserSlice {
  user: User  | null;
  setUser: (user: User) => void;
  removeUser: () => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: {
    firstName: ''
  },
  setUser: (user: User) => {
    set({user})
  },
  removeUser: () => {
    set({user: null})
  }
})