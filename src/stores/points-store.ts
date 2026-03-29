import { create } from "zustand";

interface PointsState {
  balance: number;
  setBalance: (balance: number) => void;
  addPoints: (amount: number) => void;
  deductPoints: (amount: number) => boolean;
}

export const usePointsStore = create<PointsState>((set, get) => ({
  balance: 0,

  setBalance: (balance: number) => set({ balance }),

  addPoints: (amount: number) =>
    set((state) => ({ balance: state.balance + amount })),

  deductPoints: (amount: number) => {
    const current = get().balance;
    if (current < amount) return false;
    set({ balance: current - amount });
    return true;
  },
}));
