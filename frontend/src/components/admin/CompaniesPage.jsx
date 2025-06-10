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
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <SearchBar />
                {/* بقية محتوى الصفحة */}
            </main>
            <Footer />
        </div>
    )
}




export default CompaniesPage
