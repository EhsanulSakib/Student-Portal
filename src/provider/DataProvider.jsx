import { createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider = ({ children }) => {
    const [student, setStudent] = useState([]);

    const studentInfo = { student, setStudent };
    return (
        <DataContext.Provider value={studentInfo}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;