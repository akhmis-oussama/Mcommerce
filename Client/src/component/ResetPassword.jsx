import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { newPassword } from '../../Redux/Auth/AuthAction';

export default function ResetPassword() {

    const dispatch = useDispatch()
    const {token} = useParams();
    const navigate = useNavigate()

    const [password,setPassword] = useState("")

    const tokenData = {password,token}

    const authState = useSelector(state=>state.auth)
    const {isError,isPasswordSuccess,message} = authState

    const updatePassword =async(e)=>{
        e.preventDefault();
        await dispatch(newPassword(tokenData))
    }

    if(isPasswordSuccess){
        toast.success("Updated")
        navigate("/")
    }



  return (
    <div className="container">
    <div className='row w-530'>
        <div className='col-sm-12 d-flex'>
            <div className='login-card card-block auth-body'>
                <div className='authbox'>
                <img src="/assets/wardrobe.png" className="navbar-img" alt="Background" height="90" style={{ marginLeft: '120px', marginTop: '100px' }} />
                    <br/>
                    <ToastContainer/>
                    <div className='col-12'>
                        <form className='w-100' onSubmit={updatePassword}>
                            <div className='input-group'>
                                <span className='input-group-addon'>
                                    <i className='icofont icofont-password'></i>
                                </span>
                                <input type="password" placeholder="New Password" className="form-control" required 
                                autoComplete='off' style={{marginTop: '20px' }} value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            </div>

                            <br/>
                            <div className='m-t-20'>
                                <button className='btn btn-primary btn-md btn-block m-b-10 signupbtn' type='submit'>Update Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}
