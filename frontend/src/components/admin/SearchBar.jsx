import { useDispatch, useSelector } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'

const SearchBar = () => {
    const dispatch = useDispatch();
    const { searchCompanyByText } = useSelector((store) => store.company);

    return (
        <div className="mb-10 max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Search Companies
            </h2>
            <input
                type="text"
                value={searchCompanyByText}
                onChange={(e) => dispatch(setSearchCompanyByText(e.target.value))}
                placeholder="Enter company name..."
                className="w-full px-6 py-3 border border-gray-300 rounded-2xl shadow focus:outline-none focus:ring-2 focus:ring-[#7209b7] text-lg transition"
            />
        </div>
    );
};

export default SearchBar;
