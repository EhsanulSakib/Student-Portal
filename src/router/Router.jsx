import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../root/Root';
import ErrorPage from '../pages/errorpage/ErrorPage';
import Form from '../pages/form/Form';
import StudentList from '../pages/studentList/StudentList';
import UpdateStudent from '../pages/updateStudent/UpdateStudent';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <StudentList></StudentList>
            },
            {
                path: '/form',
                element: <Form></Form>
            },
            {
                path: '/update/:id',
                element: <UpdateStudent></UpdateStudent>
            }
        ]
    }
])

export default router;