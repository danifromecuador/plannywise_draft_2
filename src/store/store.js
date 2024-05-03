import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const createBearSlice = () => ({
  bears: 21,
});

const createCowSlice = (set) => ({
  cows: 42,
  seconds: new Date().getSeconds(),
  setTime: () => set((state) => ({
    CowSlice: {
      ...state.CowSlice, seconds: new Date().getSeconds(),
    },
  })),
});

const Store = create(devtools((set) => ({
  BearSlice: createBearSlice(),
  CowSlice: createCowSlice(set),
})));

export default Store;
