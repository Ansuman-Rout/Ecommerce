import React from 'react'
//import Footer from '../components/Footer'
import Banner from '../components/Banner'
import { useDispatch, useSelector } from 'react-redux'
import {deleteEmp} from '../redux/employeeSlice';
const Employee = () => {
    const data = useSelector((state) => state.empdata.employees);
    const title = useSelector((state) => state.empdata.title);
    const dispatch = useDispatch();

    return (
        <>
            <Banner title={title} />
            <section>
                <div className='container mt-5'>
                    <div className='row'>
                        <div className='col-md-12'>

                            {
                                (data.length > 0) ? <table className='table'>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>NAME</th>
                                            <th>EMAIL</th>
                                            <th>CITY</th>
                                            <th>SALARY</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                        data.map((item) => {
                                                return (<tr key={item.id}>
                                                    <td>{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.city}</td>
                                                    <td>{item.salary}</td>
                                                    <td>
                                                        <button onClick={()=>dispatch((deleteEmp(item.id)))} className='btn btn-sm btn-danger'> 
                                                            <i className="fa-solid fa-trash"></i>
                                                        </button>
                                                        
                                                    </td>
                                                </tr>)
                                            })
                                        }
                                        
                                    </tbody>
                                </table> : null
                            }

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Employee         