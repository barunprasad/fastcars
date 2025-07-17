import { Car } from "@/types/sanity";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface StoreState {
  favorites: Car[];
  comparisonList: Car[];
  addToFavorites: (car: Car) => void;
  removeFromFavorites: (id: string) => void;
  addToComparison: (car: Car) => void;
  removeFromComparison: (id: string) => void;
  clearComparison: () => void;
}

const useStore = create<StoreState>()(
  persist(
    (set) => ({
      favorites: [],
      comparisonList: [],

      addToFavorites: (car) =>
        set((state) => ({
          favorites: [...state.favorites, car],
        })),

      removeFromFavorites: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((v) => v._id !== id),
        })),

      addToComparison: (car) =>
        set((state) => ({
          comparisonList:
            state.comparisonList.length < 3
              ? [...state.comparisonList, car]
              : state.comparisonList,
        })),

      removeFromComparison: (id) =>
        set((state) => ({
          comparisonList: state.comparisonList.filter((v) => v._id !== id),
        })),

      clearComparison: () => set({ comparisonList: [] }),
    }),
    {
      name: "fast-cars-storage",
    },
  ),
);

export default useStore;
