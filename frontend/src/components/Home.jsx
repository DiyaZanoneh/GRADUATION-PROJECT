import { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Footer from './shared/Footer'
import HeroSection from './sections/HeroSection'
import FeaturesSection from './sections/FeaturesSection'
import TestimonialsSection from './sections/TestimonialsSection'
import StatsSection from './sections/StatsSection'
import useGetAllJobs from '@/hooks/useGetAllJobs'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  useGetAllJobs();
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();



  const handleGetStarted = () => {
    if (user) {
      // If user is logged in, navigate to the Jobs page
      navigate('/jobs');
    } else {
      // If user is not logged in, navigate to the Signup page
      navigate('/signup');
    }
  };

  return (
    <div>
      <Navbar />
      <HeroSection handleGetStarted={handleGetStarted} />
      <FeaturesSection />
      <TestimonialsSection />
      <StatsSection />
      <Footer />
    </div>
  )
}

export default Home