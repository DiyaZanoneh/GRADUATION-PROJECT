import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate("/");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response?.data?.message || "Logout failed");
        }
    };

    return (
        <div className='bg-gradient-to-r from-[#2B5876] to-[#4E4376] shadow-md'>
            <div className='flex items-center justify-between mx-auto max-w-7xl h-16 px-6'>

                {/* Logo */}
                <div>
                    <Link to="/">
                        <h1 className='text-3xl font-semibold text-white'>
                            Job<span className='text-[#60A5FA]'>Portal</span>
                        </h1>
                    </Link>
                </div>

                {/* Navigation Links */}
                <ul className='flex font-medium items-center gap-8 text-white absolute left-1/2 transform -translate-x-1/2'>
                    <li className='hover:text-[#60A5FA] transition-colors'>
                        <Link to="/">Home</Link>
                    </li>
                    <li className='hover:text-[#60A5FA] transition-colors'>
                        <Link to="/companiesPage">Companies</Link>
                    </li>
                    <li className='hover:text-[#60A5FA] transition-colors'>
                        <Link to="/jobs">Jobs</Link>
                    </li>
                    {user?.role === 'recruiter' && (
                        <>
                            <li className='hover:text-[#60A5FA] transition-colors'>
                                <Link to="/admin/companies">Manage Companies</Link>
                            </li>
                            <li className='hover:text-[#60A5FA] transition-colors'>
                                <Link to="/admin/jobs">Manage Jobs</Link>
                            </li>
                        </>
                    )}
                </ul>

                {/* Right Side - Auth or Profile */}
                <div className='flex items-center gap-6'>
                    {!user ? (
                        <>
                            <Link to="/login">
                                <Button variant="outline" className="hover:bg-gray-100 transition-colors text-white border-white">
                                    Login
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="bg-[#6A38C2] hover:bg-[#5b30a6] transition-colors text-white">
                                    Signup
                                </Button>
                            </Link>
                        </>
                    ) : (
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="cursor-pointer border-2 border-white hover:shadow-lg transition-shadow">
                                    <AvatarImage src={user?.profile?.profilePhoto} alt="User Avatar" />
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-80">
                                <div>
                                    <div className='flex gap-4 items-center space-y-2'>
                                        <Avatar className="cursor-pointer border-2 border-gray-300 hover:shadow-lg transition-shadow">
                                            <AvatarImage src={user?.profile?.profilePhoto} alt="User Avatar" />
                                        </Avatar>
                                        <div>
                                            <h4 className='font-semibold'>{user?.fullname}</h4>
                                            <p className='text-sm text-gray-500'>{user?.profile?.bio}</p>
                                        </div>
                                    </div>
                                    <div className='flex flex-col my-2 text-gray-600'>
                                        {user.role === 'student' && (
                                            <div className='flex items-center gap-2 cursor-pointer'>
                                                <User2 />
                                                <Button variant="link">
                                                    <Link to="/profile">View Profile</Link>
                                                </Button>
                                            </div>
                                        )}
                                        <div className='flex items-center gap-2 cursor-pointer'>
                                            <LogOut />
                                            <Button onClick={logoutHandler} variant="link">Logout</Button>
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
