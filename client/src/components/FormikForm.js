import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import axiosWithAuth from '../utils/axiosWithAuth';


const LoginForm = (props) => {
        const {history} = props;
        return (
            <Formik
                initialValues={{
                    username: '',
                    password: ''
                }}
                validationSchema={
                    Yup.object().shape({
                        username: Yup.string().required('Please enter a valid username'),
                        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Please enter a password'),
                })}
                onSubmit={values => {
                    axiosWithAuth()
                        .post(`/api/login`, values)
                        .then(res => {
                            console.log(res)
                            localStorage.setItem('token', res.data.payload)
                            history.push('/colors')
                         })
                        .catch(err => {
                            console.log(err)
                            window.alert('An error occurred, please try again')
                        })
                }}
                render={({ errors, status, touched}) => (
                    <Form className='login-form-container'>
                        <div className='form-box'>
                
                        <Field type='text'
                        name='username'
                        placeholder='Username' 
                        />
                        {touched.username && errors.username && (<p>{errors.username}</p>)} 
                
                        <Field type='password' 
                        name='password'
                        placeholder='password'
                        />
                        {touched.password && errors.password && (<p>{errors.password}</p>)}

                        <button type='submit'>Log in</button>
                        
                            {/* form validation checks */}
                        
                        </div>
                      
                    </Form>
                )}
             />
        )
}

export default LoginForm;