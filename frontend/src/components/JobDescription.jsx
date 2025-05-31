import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant'
import { setSingleJob } from '@/redux/jobSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'sonner'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import { Button } from './ui/button'
import { Badge } from './ui/badge'

const JobDescription = () => {
  const { singleJob } = useSelector(store => store.job)
  const { user } = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const params = useParams()
  const jobId = params.id

  const [isApplied, setIsApplied] = useState(false)
  const [relatedJobs, setRelatedJobs] = useState([])

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {
        withCredentials: true,
      })
      if (res.data.success) {
        setIsApplied(true)
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        }
        dispatch(setSingleJob(updatedSingleJob))
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong')
    }
  }

  const fetchSingleJob = async () => {
    try {
      const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
        withCredentials: true,
      })
      if (res.data.success) {
        dispatch(setSingleJob(res.data.job))
        setIsApplied(res.data.job.applications.some(app => app.applicant === user?._id))

        // Fetch related jobs by industry (excluding current job)
        const industry = res.data.job.industry
        const relatedRes = await axios.get(`${JOB_API_END_POINT}/get?industry=${industry}`, {
          withCredentials: true,
        })
        if (relatedRes.data.success) {
          const jobs = relatedRes.data.jobs.filter(j => j._id !== jobId)
          setRelatedJobs(jobs.slice(0, 3)) // limit to 3
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchSingleJob()
  }, [jobId])

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h1 className="text-2xl font-bold mb-4">{singleJob?.title}</h1>
            <h2 className="text-lg font-bold mb-2">Job Description</h2>
            <p className="text-gray-700 leading-relaxed">{singleJob?.description}</p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
            <h2 className="text-lg font-bold mb-4">Job Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
              <p><span className="font-bold">Role:</span> {singleJob?.title}</p>
              <p><span className="font-bold">Location:</span> {singleJob?.location}</p>
              <p><span className="font-bold">Experience:</span> {singleJob?.experience} yrs</p>
              <p><span className="font-bold">Salary:</span> {singleJob?.salary} LPA</p>
              <p><span className="font-bold">Total Applicants:</span> {singleJob?.applications?.length}</p>
              <p><span className="font-bold">Posted On:</span> {singleJob?.createdAt?.split('T')[0]}</p>
            </div>

            {user?.role === 'student' && (
              <Button
                onClick={isApplied ? null : applyJobHandler}
                disabled={isApplied}
                className={`mt-6 rounded-lg ${isApplied
                  ? 'bg-gray-500 cursor-not-allowed text-white'
                  : 'bg-[#007bff] hover:bg-blue-700 text-white'
                  }`}
              >
                {isApplied ? 'Already Applied' : 'Apply now'}
              </Button>
            )}
          </div>
        </div>

        {/* Right Section: Related Jobs */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold">More jobs in {singleJob?.industry}</h3>
          {relatedJobs.length === 0 ? (
            <p className="text-sm text-gray-600">No related jobs available.</p>
          ) : (
            relatedJobs.map((job) => (
              <div
                key={job._id}
                className="border rounded-xl p-4 shadow-sm bg-white hover:shadow-md transition"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={job?.companyLogo || "https://cdn-icons-png.flaticon.com/512/2111/2111615.png"}
                    alt="logo"
                    className="w-6 h-6 rounded-full"
                  />
                  <h4 className="font-semibold text-base">{job.title}</h4>
                </div>
                <div className="flex gap-2 mb-2">
                  <Badge variant="outline" className="bg-gray-100 text-gray-700">{job.location}</Badge>
                  <Badge variant="outline" className="bg-gray-100 text-gray-700">{job.experience}+ yrs</Badge>
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {job.description}
                </p>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#007bff] hover:bg-[#007bff] hover:text-white"
                    onClick={() => navigate(`/description/${job?._id}`)}
                  >
                    View Details
                  </Button>

                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default JobDescription
