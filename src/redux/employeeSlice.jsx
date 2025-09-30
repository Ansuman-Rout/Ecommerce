import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    employees: [
        { id: 1, name: "Ravi", email: "ravi@mail.com", city: "Chennai", salary: 5000 },
        { id: 2, name: "Ram", email: "ram@mail.com", city: "Hyderabad", salary: 25000 },
        { id: 3, name: "Imran", email: "imran@mail.com", city: "Lathore", salary: 35000 },
        { id: 4, name: "Alekhya", email: "alekhya@mail.com", city: "Guntur", salary: 15000 },
        { id: 5, name: "Kasiram", email: "kariram@mail.com", city: "Bengalore", salary: 28000 },
        { id: 6, name: "Prasanna", email: "prasanna@mail.com", city: "Noida", salary: 46000 },
        { id: 7, name: "Venu", email: "venu@mail.com", city: "Mumbai", salary: 65000 }
    ],
    title: "Employee Information"
}
const employeeSlice = createSlice({
    name: "employees",
    initialState,
    reducers:{
        deleteEmp: (state,action) => {
            const rememp = state.employees.filter((item) => {
                return item.id !== action.payload;
            });
            return {
                ...state,
                employees: rememp
            };
        }
    }
})
export const {deleteEmp} = employeeSlice.actions
export default employeeSlice.reducer