import { create } from "zustand";
import { persist } from "zustand/middleware";

// Store state type
interface StoreState {
  layout: string;
  setLayout: (layout: string) => void;
  win: number;
  setWin: (win: number) => void;
  lose: number;
  setLose: (lose: number) => void;
  draw: number;
  setDraw: (draw: number) => void;
  role: string;
  setRole: (role: string) => void;
  rate: string;
  setRate: (rate: string) => void;
  tier: number;
  setTier: (tier: number) => void;
  tierTop500: number;
  setTierTop500: (tierTop500: number) => void;
  wing: boolean;
  setWings: (wing: boolean) => void;
  colorHex: {
    ScoreTitleBgColor: string;
    ScoreTitleTextColor: string;
    RoleTitleBgColor: string;
    RoleTitleTextColor: string;
    RateTitleBgColor: string;
    RateTitleTextColor: string;
    CurrentScoreBgColor: string;
    CurrentScoreTextColor: string;
    CurrentRoleBgColor: string;
    CurrentRoleTextColor: string;
    CurrentRateBgColor: string;
    CurrentRateTextColor: string;
  };
  setColorHex: (colorHex: {
    ScoreTitleBgColor: string;
    ScoreTitleTextColor: string;
    RoleTitleBgColor: string;
    RoleTitleTextColor: string;
    RateTitleBgColor: string;
    RateTitleTextColor: string;
    CurrentScoreBgColor: string;
    CurrentScoreTextColor: string;
    CurrentRoleBgColor: string;
    CurrentRoleTextColor: string;
    CurrentRateBgColor: string;
    CurrentRateTextColor: string;
  }) => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      // layout is the layout of the app
      layout: "horizontal",
      setLayout: (layout: string) => set({ layout }),

      // win is the number of wins
      win: 0,
      setWin: (win: number) => set({ win }),

      // lose is the number of losses
      lose: 0,
      setLose: (lose: number) => set({ lose }),

      // draw is the number of draws
      draw: 0,
      setDraw: (draw: number) => set({ draw }),

      // role is the player's role
      role: "damage",
      setRole: (role: string) => set({ role }),

      // rate is the player's rank
      rate: "bronze",
      setRate: (rate: string) => set({ rate }),

      // tier is the player's tier
      tier: 5,
      setTier: (tier: number) => set({ tier }),

      // tierTop500 is the player's top 500 tier
      tierTop500: 500,
      setTierTop500: (tierTop500: number) => set({ tierTop500 }),

      // vierew's wings on both sides
      wing: false,
      setWings: (wing: boolean) => set({ wing: !wing }),

      // colorHex is the color of the app
      colorHex: {
        // Title colors
        ScoreTitleBgColor: "#ffffff",
        ScoreTitleTextColor: "#2f2f2f",
        RoleTitleBgColor: "#ffffff",
        RoleTitleTextColor: "#2f2f2f",
        RateTitleBgColor: "#ffffff",
        RateTitleTextColor: "#2f2f2f",

        // Current Record colors
        CurrentScoreBgColor: "#e9e9e9",
        CurrentScoreTextColor: "#2f2f2f",
        CurrentRoleBgColor: "#e9e9e9",
        CurrentRoleTextColor: "#2f2f2f",
        CurrentRateBgColor: "#e9e9e9",
        CurrentRateTextColor: "#2f2f2f",
      },
      setColorHex: (colorHex: {
        ScoreTitleBgColor: string;
        ScoreTitleTextColor: string;
        RoleTitleBgColor: string;
        RoleTitleTextColor: string;
        RateTitleBgColor: string;
        RateTitleTextColor: string;

        CurrentScoreBgColor: string;
        CurrentScoreTextColor: string;
        CurrentRoleBgColor: string;
        CurrentRoleTextColor: string;
        CurrentRateBgColor: string;
        CurrentRateTextColor: string;
      }) => set({ colorHex }),
    }),
    {
      name: "layout-settings",
      storage: {
        getItem: (name) => {
          const item = localStorage.getItem(name);
          return item ? JSON.parse(item) : null; // deserialize
        },
        setItem: (name, value) => {
          const serializedValue = JSON.stringify(value); // serialize
          localStorage.setItem(name, serializedValue);
        },
        removeItem: (name) => {
          localStorage.removeItem(name); // remove
        },
      },
    },
  ),
);
