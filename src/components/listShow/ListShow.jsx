import React, { useContext } from 'react';
import { DataContext } from '../../provider/DataProvider';
import List from '../list/List';

const ListShow = () => {
    const { students, setStudents } = useContext(DataContext)
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-base lg:text-lg'>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Contact</th>
                        <th>Bio Data</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map(student => <List key={student.id} student={student}></List>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default ListShow;