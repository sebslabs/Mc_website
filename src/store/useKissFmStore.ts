import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface KissFmState {
  isPlaying: boolean
  volume: number
  currentShow: string
  isMinimised: boolean
  toggle: () => void
  setIsPlaying: (playing: boolean) => void
  setVolume: (v: number) => void
  setCurrentShow: (show: string) => void
  minimise: () => void
  expand: () => void
}

export const useKissFmStore = create<KissFmState>()(
  persist(
    (set) => ({
      isPlaying: true,
      volume: 0.8,
      currentShow: 'The Morning Rush with Shehani',
      isMinimised: false,
      toggle: () => set((s) => ({ isPlaying: !s.isPlaying })),
      setIsPlaying: (isPlaying) => set({ isPlaying }),
      setVolume: (volume) => set({ volume }),
      setCurrentShow: (currentShow) => set({ currentShow }),
      minimise: () => set({ isMinimised: true }),
      expand: () => set({ isMinimised: false }),
    }),
    { name: 'kissfm-player' }
  )
)
