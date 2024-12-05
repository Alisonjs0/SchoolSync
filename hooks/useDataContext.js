import { useContext } from "react";
import { DataContext } from "../app/.context/DataContext";

export const useDataContext = () => {
    const context = useContext(DataContext)

    return context
  };