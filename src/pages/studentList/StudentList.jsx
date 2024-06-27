import React, { useState } from 'react';
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";
import ListShow from '../../components/listShow/ListShow';

const StudentList = () => {
    const [grid, setGrid] = useState(true)
    return (
        <div className='w-11/12 m-auto flex flex-col gap-4'>
            <h2 className='text-center text-3xl text-blue-600 font-semibold'>All Students</h2>

            <ListShow></ListShow>

        </div>
    );
};

export default StudentList;