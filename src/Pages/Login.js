import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/Authprovider';
import useToken from '../Hooks/useToken';

const Login = () => {
    const { register, formState:{errors}, handleSubmit } = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from,{replace: true});

    }


    const handleLogin = data =>{
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setLoginUserEmail(data.email);
        })
        .catch(error =>{ 
            console.log(error)
            setLoginError(error.message);
        });
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs mt-10">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" {...register("email", {required: "Email is required!"})} className=' input input-bordered w-full max-w-xs'/>
                        {errors.email && <p className='text-red-600 font-bold'>{errors.email?.message}</p>}


                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", {required:"Password is required!"})} className='input input-bordered w-full max-w-xs'/>
                        {errors.password && <p className='text-red-600 font-bold'>{errors.password?.message}</p>}
                        <label className="label">

                            <span className="label-text">Forgot Password?</span>
                        </label>


                    </div>

                    <input className='btn btn-accent w-full text-white' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>{loginError} why not?</p>}
                    </div>
                </form>
                <p>New to Doctors Portal? <Link className='text-primary' to='/signup'>Create new account.</Link> </p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;