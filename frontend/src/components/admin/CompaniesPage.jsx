import React, { useEffect, useState } from 'react'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'
import SearchBar from './SearchBar'

const CompaniesPage = () => {
    const { companies, searchCompanyByText } = useSelector((store) => store.company)
    const [filterCompany, setFilterCompany] = useState(companies)
    const navigate = useNavigate()

    // Fetch companies from API on page load
    useEffect(() => {
        axios.get(`${COMPANY_API_END_POINT}/companies`)
            .then((response) => {
                setFilterCompany(response.data.companies)
            })
            .catch((error) => {
                console.error('Error fetching companies:', error)
            })
    }, [])

    // Filter companies based on search query
    useEffect(() => {
        const filteredCompany =
            companies?.length >= 0 &&
            companies.filter((company) => {
                if (!searchCompanyByText) {
                    return true
                }
                return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase())
            })
        setFilterCompany(filteredCompany)
    }, [companies, searchCompanyByText])

    return (
        <div>
            <Navbar />
                <SearchBar />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {filterCompany?.map((company) => (
                    <div key={company._id} className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                        <div className="p-4 bg-gray-100">
                            <Avatar>
                                <AvatarImage src={company.logo} alt={company.name} />
                            </Avatar>
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold text-gray-900">{company.name}</h2>
                            <p className="text-sm text-gray-600">
                                Registered on: {company.createdAt.split("T")[0]}
                            </p>
                            <Button onClick={() => navigate(`/admin/companies/view/:id`)} className="mt-4 w-full">
                                View Details
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default CompaniesPage
