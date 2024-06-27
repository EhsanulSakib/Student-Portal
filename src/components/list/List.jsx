import React, { useContext } from 'react';
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { DataContext } from '../../provider/DataProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const List = ({ student }) => {
    const { students, setStudents } = useContext(DataContext)
    const { id, first_name, last_name, gender, address, phone_no, email, photo, vio_details, thana } = student

    const axiosPublic = useAxiosPublic()
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/students/${id}`)
                    .then(res => {
                        console.log(res.data)
                        axiosPublic.get('/students')
                            .then(res => {
                                setStudents(res.data)
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Student Deleted",
                                    icon: "success"
                                });
                            })
                    })
            }
        });
    }

    return (
        <tr className='text-xs lg:text-base'>
            <th>{id}</th>
            <td>
                <img src={photo} alt="" className='max-h-32' />
            </td>
            <td>
                <h2><span className='font-bold'>First Name: </span>{first_name}</h2>
                <h2><span className='font-bold'>Last Name: </span>{last_name}</h2>
            </td>
            <td>{gender}</td>
            <td>
                <h2><span className='font-bold'>Address: </span>{address}</h2>
                <h2><span className='font-bold'>Thana: </span>{thana}</h2>
                <h2><span className='font-bold'>Email: </span>{email}</h2>
                <h2><span className='font-bold'>Phone No:</span>{phone_no}</h2>
            </td>

            <td>
                {vio_details}
            </td>

            <td className='flex gap-3'>
                <button className='btn btn-error text-xl text-white font-bold' onClick={handleDelete}>
                    <MdDelete />
                </button>

                <button className='btn btn-info text-lg text-white font-bold' >
                    <Link to={`/update/${id}`}>
                        <GrUpdate />
                    </Link>
                </button>
            </td>
        </tr>
    );
};

export default List;