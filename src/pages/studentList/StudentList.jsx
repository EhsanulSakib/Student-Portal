import React, { useState } from 'react';
import { IoGrid } from "react-icons/io5";
import { FaListUl } from "react-icons/fa6";
import GridShow from '../../components/gridShow/GridShow';
import ListShow from '../../components/listShow/ListShow';

const StudentList = () => {
    const [grid, setGrid] = useState(true)
    return (
        <div className='w-11/12 m-auto flex flex-col gap-4'>
            <h2 className='text-center text-3xl text-blue-600 font-semibold'>All Students</h2>
            <div className=' self-end'>
                <button className='btn text-xl' onClick={() => setGrid(true)}><IoGrid /></button>
                <button className='btn text-xl ml-2' onClick={() => setGrid(false)}><FaListUl /></button>
            </div>

            <div>
                {
                    grid ?
                        <GridShow></GridShow>
                        :
                        <ListShow></ListShow>
                }
            </div>

        </div>
    );
};

export default StudentList;