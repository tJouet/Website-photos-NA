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
  selectedAlbum: number | null;
  data: AlbumData[];
  loading: boolean;
  error: string | null;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedAlbum, setSelectedAlbum] = useState<number | null>(null);
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

  const handleSelectedAlbum = (id: number) => {
    setSelectedAlbum(id);
    console.log(id, "selected");
  };
  const getAlbumById = (id: number): AlbumData | undefined => {
    return data.find((album) => album.id === id);
  };
  return (
    <AppContext.Provider
      value={{
        handleSelectedAlbum,
        getAlbumById,
        selectedAlbum,
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
