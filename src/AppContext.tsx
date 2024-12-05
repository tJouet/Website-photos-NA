"use client";
import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useEffect,
} from "react";

interface AlbumData {
  id: number;
  title: string;
  description: string;
  images: string[];
}

interface AppContextProps {
  handleSelectedAlbum: (id: number | null) => void;
  getAlbumById: (id: number) => AlbumData | undefined;
  handleModal: (content: string | null) => void;
  selectedPicture: string | null;
  selectedAlbum: number | null;
  modalPosition?: { x: number; y: number };
  data: AlbumData[];
  loading: boolean;
  error: string | null;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
  const [selectedPicture, setSelectedPicture] = useState<string | null>(null);
  const [modalPosition, setModalPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [data, setData] = useState<AlbumData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        if (!response.ok) throw new Error("Erreur de récupération des données");
        const result = await response.json();
        setData(result);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSelectedAlbum = (id: number | null) => {
    setSelectedPicture(null);
    setSelectedAlbum(id);
  };

  const getAlbumById = (id: number): AlbumData | undefined => {
    return data.find((album) => album.id === id);
  };
  const handleModal = (
    content: string | null,
    position?: { x: number; y: number }
  ) => {
    setSelectedPicture(content);
    setModalPosition(position || { x: 0, y: 0 });
  };
  return (
    <AppContext.Provider
      value={{
        handleSelectedAlbum,
        handleModal,
        getAlbumById,
        selectedAlbum,
        selectedPicture,
        modalPosition,
        data,
        loading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
};
