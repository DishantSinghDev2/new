import {create} from 'zustand'
import { CartSlice, createCartSlice } from './slices/createCartSlice'
import { createProductSlice, ProductSlice } from './slices/createProductSlice'
import { createUserSlice, UserSlice } from './slices/userSlice'
import { createAppSlice, AppSlice } from './slices/appSlice'
import { createAuthSlice, AuthSlice } from './slices/authSlice'

type StoreState = ProductSlice & CartSlice & UserSlice & AppSlice & AuthSlice

export const useAppStore = create<StoreState>()((...a) => ({
    ...createProductSlice(...a),
    ...createCartSlice(...a),
    ...createUserSlice(...a),
    ...createAppSlice(...a),
    ...createAuthSlice(...a)
}))