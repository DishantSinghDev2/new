import create from 'zustand'
import { CartSlice, createCartSlice } from './slices/createCartSlice'
import { createProductSlice, ProductSlice } from './slices/createProductSlice'
import { createUserSlice, UserSlice } from './slices/userSlice'

type StoreState = ProductSlice & CartSlice & UserSlice

export const useAppStore = create<StoreState>()((...a) => ({
    ...createProductSlice(...a),
    ...createCartSlice(...a),
    ...createUserSlice(...a)
}))