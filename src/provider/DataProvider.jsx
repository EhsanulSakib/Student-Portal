import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [student, setStudent] = useState([]);
    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        axiosPublic.get()
    }, [])


    const studentInfo = { student, setStudent };
    return (
        <DataContext.Provider value={studentInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;