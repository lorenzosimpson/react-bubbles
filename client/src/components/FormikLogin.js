import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from 'formik';
import axiosWithAuth from '../utils/axiosWithAuth';
import * as Yup from 'yup';


const LoginForm = ({values, errors, touched, status }) => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
      })

      useEffect(() => {
        if (status) {
            setCredentials([...credentials, status])
        }
    }, [status])

    return (
        <>
        <Form className='login-form-container'>
        <div className='form-box'>

          <Field type='text'
           name='username'
           placeholder='Username' 
           />
            


          <Field type='password' 
          name='password'
          placeholder='password'
          />
        

          <button type='submit'>Log in</button>
          {touched.username && errors.username && (<p>{errors.username}</p>)} 
          {touched.password && errors.password && (<p>{errors.password}</p>)}
        </div>
          
        </Form> 
        </>
    )  
} // end component

const FormikLogin = withFormik({
    mapPropsToValues({username, password}) {
        return {
            username: username || '',
            password: password || '',
        }
    },

    validationSchema: Yup.object().shape({
        username: Yup.string().required('You must tell us your name'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('You must have a password'),
    }),

    handleSubmit(values) {
        axiosWithAuth()
        .post(`/api/login`, values)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', res.data.payload)
        })
        .catch(err => console.log(err))
    }
})(LoginForm);

export default FormikLogin;