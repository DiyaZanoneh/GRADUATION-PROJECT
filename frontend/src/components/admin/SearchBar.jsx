import { useState, useEffect } from 'react';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const [error, setError] = useState(null);

    // Mock data for demonstration
    const mockCompanies = {
        'microsoft.com': {
            name: "Microsoft",
            domain: "microsoft.com",
            logo: "https://logo.clearbit.com/microsoft.com",
            description: "Technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
            foundedYear: 1975,
            location: "Redmond, Washington, USA",
            employees: "181,000+",
            tags: ["Software", "Cloud Computing", "Hardware"]
        },
        'google.com': {
            name: "Google",
            domain: "google.com",
            logo: "https://logo.clearbit.com/google.com",
            description: "Multinational technology company specializing in Internet-related services and products.",
            foundedYear: 1998,
            location: "Mountain View, California, USA",
            employees: "156,500+",
            tags: ["Search Engine", "Advertising", "AI"]
        }
    };

    useEffect(() => {
        if (searchTerm.length < 2) {
            setResults([]);
            return;
        }

        const timerId = setTimeout(() => {
            searchCompanies(searchTerm);
        }, 500);

        return () => clearTimeout(timerId);
    }, [searchTerm]);

    const searchCompanies = async (term) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://autocomplete.clearbit.com/v1/companies/suggest?query=${encodeURIComponent(term)}`
            );
            const data = await response.json();
            setResults(data || []);
        } catch (error) {
            console.error("Search failed:", error);
            setError("Failed to fetch search results");
            // Fallback to mock data if API fails
            setResults(Object.values(mockCompanies).filter(company =>
                company.name.toLowerCase().includes(term.toLowerCase())
            ));
        } finally {
            setIsLoading(false);
        }
    };

    const fetchCompanyDetails = (domain) => {
        setIsLoading(true);
        setError(null);
        try {
            // Using mock data instead of API call
            const companyDetails = mockCompanies[domain] || {
                name: domain.split('.')[0],
                domain,
                logo: `https://logo.clearbit.com/${domain}`,
                description: "Company information not available",
                tags: []
            };

            setSelectedCompany(companyDetails);
        } catch (error) {
            console.error("Failed to fetch details:", error);
            setError("Failed to load company details");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mb-10 max-w-3xl mx-auto">
            <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Search Companies</h2>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value);
                        setSelectedCompany(null);
                    }}
                    placeholder="Try 'Microsoft' or 'Google'..."
                    className="w-full px-6 py-3 border border-gray-300 rounded-2xl shadow focus:outline-none focus:ring-2 focus:ring-[#7209b7] text-lg transition"
                />
            </div>

            {error && <p className="mt-2 text-center text-red-500">{error}</p>}
            {isLoading && <p className="mt-4 text-center text-gray-500">Loading...</p>}

            <div className="flex gap-8 mt-8">
                {/* Search Results Column */}
                {results.length > 0 && (
                    <div className="w-1/3">
                        <h3 className="font-semibold mb-3">Search Results</h3>
                        <div className="space-y-2">
                            {results.map((company) => (
                                <div
                                    key={company.domain}
                                    onClick={() => fetchCompanyDetails(company.domain)}
                                    className="p-3 cursor-pointer hover:bg-gray-50 rounded-lg border flex items-center"
                                >
                                    <img
                                        src={company.logo || `https://logo.clearbit.com/${company.domain}`}
                                        alt="logo"
                                        className="w-6 h-6 mr-2 object-contain"
                                        onError={(e) => {
                                            e.target.src = 'https://via.placeholder.com/24';
                                        }}
                                    />
                                    <div>
                                        <p className="font-medium">{company.name}</p>
                                        <p className="text-xs text-gray-500">{company.domain}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Company Details Column */}
                {selectedCompany && (
                    <div className="flex-1">
                        <h3 className="font-semibold mb-3">Company Details</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <div className="flex items-start mb-4">
                                <img
                                    src={selectedCompany.logo || `https://logo.clearbit.com/${selectedCompany.domain}`}
                                    alt="logo"
                                    className="w-12 h-12 mr-4 object-contain"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/48';
                                    }}
                                />
                                <div>
                                    <h2 className="text-xl font-bold">{selectedCompany.name}</h2>
                                    <a
                                        href={`https://${selectedCompany.domain}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:underline"
                                    >
                                        {selectedCompany.domain}
                                    </a>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <h4 className="font-medium text-gray-700">Description</h4>
                                    <p className="text-sm">{selectedCompany.description}</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700">Location</h4>
                                    <p className="text-sm">{selectedCompany.location || 'Not available'}</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700">Founded</h4>
                                    <p className="text-sm">{selectedCompany.foundedYear || 'Not available'}</p>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-700">Employees</h4>
                                    <p className="text-sm">{selectedCompany.employees || 'Not available'}</p>
                                </div>
                            </div>

                            {selectedCompany.tags?.length > 0 && (
                                <div className="mt-4">
                                    <h4 className="font-medium text-gray-700">Industry Tags</h4>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {selectedCompany.tags.map(tag => (
                                            <span key={tag} className="bg-gray-100 px-2 py-1 text-xs rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchBar;