import React, { useContext } from 'react';
import { DataContext } from '../../provider/DataProvider';

const GridShow = () => {
    const { students } = useContext(DataContext)
    return (
        <div>
            <h2>{students.length}</h2>
        </div>
    );
};

export default GridShow;