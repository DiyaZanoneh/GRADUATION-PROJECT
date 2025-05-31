import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';
import Footer from './shared/Footer';

const isResume = true;

const Profile = () => {
    useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const { user } = useSelector((store) => store.auth);

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />
            
            {/* Profile Header */}
            <div className="relative bg-blue-600 h-48">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-60"></div>
                <div className="absolute bottom-0 left-8 pb-4">
                    <div className="flex items-center gap-6">
                        <Avatar className="h-32 w-32 ring-4 ring-white">
                            <AvatarImage
                               src={user?.profile?.profilePhoto}
                                alt="profile"
                            />
                        </Avatar>
                        <div className="text-white">
                            <h1 className="text-4xl font-semibold">{user?.fullname}</h1>
                            <p className="text-lg mt-2">{user?.profile?.bio}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Profile Content */}
            <div className="max-w-5xl mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Sidebar with Profile Info */}
                    <div className="col-span-1">
                        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-gray-600">
                                    <Mail className="text-blue-500" />
                                    <span>{user?.email}</span>
                                </div>
                                <Button
                                    onClick={() => setOpen(true)}
                                    variant="outline"
                                    className="p-2 rounded-full border-gray-300 text-gray-600 hover:bg-gray-100"
                                >
                                    <Pen className="h-5 w-5" />
                                </Button>
                            </div>

                            <div className="flex items-center gap-3 text-gray-600">
                                <Contact className="text-blue-500" />
                                <span>{user?.phoneNumber}</span>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {user?.profile?.skills.length !== 0 ? (
                                        user?.profile?.skills.map((item, index) => (
                                            <Badge key={index} className="bg-blue-100 text-blue-800">{item}</Badge>
                                        ))
                                    ) : (
                                        <span className="text-gray-400">No skills listed</span>
                                    )}
                                </div>
                            </div>

                            <div>
                                <Label className="text-md font-semibold text-gray-800 mb-3">Resume</Label>
                                {isResume ? (
                                    <a
                                        target="_blank"
                                        href={user?.profile?.resume}
                                        className="text-blue-600 hover:underline"
                                    >
                                        {user?.profile?.resumeOriginalName}
                                    </a>
                                ) : (
                                    <span className="text-gray-400">Resume not available</span>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="col-span-2">
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Applied Jobs</h2>
                            <AppliedJobTable />
                        </div>
                    </div>
                </div>
            </div>

            <UpdateProfileDialog open={open} setOpen={setOpen} />
            <Footer />
        </div>
    );
};

export default Profile;
