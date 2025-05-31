import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { Avatar, AvatarImage } from '../ui/avatar'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const CompanyDetails = () => {
    const { id } = useParams()
    const [company, setCompany] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(`${COMPANY_API_END_POINT}/companies/${id}`)
            .then((res) => {
                setCompany(res.data.company)
                setLoading(false)
            })
            .catch((err) => {
                setError('Company not found')
                setLoading(false)
            })
    }, [id])

    if (loading) return <div className="text-center mt-10 text-lg font-medium">Loading...</div>
    if (error) return <div className="text-center mt-10 text-red-600">{error}</div>

    return (
        <div>
            <Navbar />
            <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-lg mt-10">
                <div className="flex items-center space-x-4">
                    <Avatar className="w-20 h-20">
                        <AvatarImage src={company.logo} alt={company.name} />
                    </Avatar>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">{company.name}</h1>
                        <p className="text-gray-600">Registered on: {company.createdAt.split("T")[0]}</p>
                        <p className="text-gray-500 mt-2">{company.description || "No description provided."}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CompanyDetails
