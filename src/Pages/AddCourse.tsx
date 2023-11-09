import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField';
import axios from 'axios'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function AddCourse() {

    const [Model,SetModel]=React.useState<any>({})
    let fillModel=(key:string,value:any)=>{
        Model[key]=value
        SetModel({...Model})
    }

    let AddCourses = () => {
        console.log(Model)  
        axios.post('http://localhost:4000/course', Model)
        .then((response) => {
            alert(response.status)
            // Aap response ko state mein update ya kuch aur action le sakte hain
        })
        .catch((error) => {
            // console.log(error.response.status)
            alert(error.response.status)
        });
    }
    return (
        <div className='container py-5'>
            <div className="Addcourse d-flex justify-content-between align-items-center mb-5">
                <h1>Add Course</h1>
                <button className='m-3' style={{ width: "120px", height: "50px" }} onClick={AddCourses}>Add Course</button>
            </div>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} md={6} className='mb-4'>
                <TextField id="filled-basic" label="Course Name" variant="filled" className='w-100' onChange={(e:any)=>fillModel("CourseName",e.target.value)}/>
                </Grid>
                <Grid item xs={12} md={6} className='mb-4'>
                <TextField id="filled-basic" label="Course Duration" variant="filled" className='w-100' onChange={(e:any)=>fillModel("CourseDuration",e.target.value)}/>
                </Grid>
                <Grid item xs={12} md={6} className='mb-4'>
                <TextField id="filled-basic" label="Course Fee" variant="filled" className='w-100' onChange={(e:any)=>fillModel("CourseFee",e.target.value)}/>
                </Grid>
            </Grid>
        </div>
    );
}
