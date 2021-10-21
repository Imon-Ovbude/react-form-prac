import React from 'react';
import useForm from '../hooks/useForm.js';
import validate from '../validateInfo.js';

import './Form.css';

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
        </h1>
        {/* username */}
        <div className='form-inputs'>
          <label htmlFor='username' className='form-label'>
            Username:
          </label>
          <input
            id='username'
            type='text'
            name='username'
            className='form-input'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username ? <p>{errors.username}</p> : ''}
        </div>

        {/* email */}
        <div className='form-inputs'>
          <label htmlFor='email' className='form-label'>
            Email:
          </label>
          <input
            id='email'
            type='email'
            name='email'
            className='form-input'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email ? <p>{errors.email}</p> : ''}
        </div>

        {/* password */}
        <div className='form-inputs'>
          <label htmlFor='password' className='form-label'>
            Password:
          </label>
          <input
            id='password'
            type='password'
            name='password'
            className='form-input'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password ? <p>{errors.password}</p> : ''}
        </div>

        {/* password2 */}
        <div className='form-inputs'>
          <label htmlFor='password2' className='form-label'>
            Confirm Password:
          </label>
          <input
            id='password2'
            type='password'
            name='password2'
            className='form-input'
            placeholder='Re-enter your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password ? <p>{errors.password2}</p> : ''}
        </div>

        <button className='form-input-btn' type='submit'>
          Sign Up
        </button>
        <span className='form-input-login'>
          Already have an account? Login <a href='/'>here</a>{' '}
        </span>
      </form>
    </div>
  );
};

export default FormSignup;
