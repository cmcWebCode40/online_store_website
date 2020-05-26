import React, { useState } from 'react'
import axios from 'axios';
import 'form-data';

const Dashboard = () => {
  const [file, setFile] = useState("")
  const submitData = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', "new bags")
    data.append('description', "new bags nsdcjksdjkcj sdlkclksd")
    data.append('price', "1000")
    data.append('image', file);
    try {
      const res = await axios.post('http://localhost:4000/bags/bags-uploads', data, {
        headers: {

          "Content-Type": "application/json",
          // "auth-token": `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWNkNzcyMjNkZTk0ZDFlZjQ3YWE1M2QiLCJpYXQiOjE1OTA1Mjk0MTB9.NBzdS-QUQa61_8CvztzwRh0rPQw97UZzs8rWmFs12_U`
        }
      })
      console.log(res);
    } catch (error) {
      console.log({ error });
      // throw new Error(`${error}`);

    }


  };
  return (
    <div>
      <div className='form'>
        <div className='form-wrapper'>
          <div className='form-wrapper-field'>
            <h3> SIGNUP</h3>
            <form onSubmit={submitData}>
              <div>
                <label htmlFor='name'>
                  Name
							</label>
                <input
                  id='name'
                  name='name'
                  type='file'
                  onChange={(e) => setFile(e.target.files[0])}
                  placeholder='your name'
                />
              </div>
              <div>
                <label htmlFor='emailS'>
                  Email
							</label>
                <input
                  id='emailS'
                  name='emailS'
                  type='email'

                  placeholder='enter email'
                />
              </div>
              <div>
                <label htmlFor='passworD'>
                  Password
							</label>
                <input
                  id='passworD'
                  name='passworD'
                  type='text'

                  placeholder='password'
                />
              </div>
              <div>
                <button type='submit' className={' btn'} >
                  SUBMIT
                </button>
              </div>
              <div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
