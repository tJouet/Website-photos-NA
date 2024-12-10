import { create } from "zustand";

interface Video {
  id: number;
  title: string;
  src: string;
  type: string;
  previewImg: string;
  description: string;
  date: string;
}

interface VideoStoreState {
  videosData: Video[];
  loadingVideos: boolean;
  loadingVideosError: string | null;
  selectedVideoId: number;
  selectVideoId: (id: number) => void;
}

const useVideoStore = create<VideoStoreState>((set) => {
  const fetchVideosData = async () => {
    set({ loadingVideos: true, loadingVideosError: null });
    try {
      const response = await fetch("/videoData.json");
      const data: Video[] = await response.json();
      set({ videosData: data, loadingVideos: false });
    } catch (error) {
      set({
        loadingVideosError: "Failed to fetch videos",
        loadingVideos: false,
      });
    }
  };

  fetchVideosData();

  return {
    videosData: [],
    loadingVideos: false,
    loadingVideosError: null,
    selectedVideoId: 1,
    selectVideoId: (id: number) => set({ selectedVideoId: id }),
  };
});

export default useVideoStore;
