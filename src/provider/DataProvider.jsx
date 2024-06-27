import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [students, setStudents] = useState([]);
    const axiosPublic = useAxiosPublic()

    useEffect(() => {
        axiosPublic.get('/students')
            .then(res => {
                setStudents(res.data)
            })
    }, [])


    const studentInfo = { students, setStudents };
    return (
        <DataContext.Provider value={studentInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;