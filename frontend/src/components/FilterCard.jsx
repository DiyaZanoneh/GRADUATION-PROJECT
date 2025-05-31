import React, { useEffect, useState } from 'react';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Label } from './ui/label';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';

const filterData = [
  {
    filterType: 'Location',
    key: 'location',
    array: ['Amman', 'Irbid', 'Zarqa', 'Aqaba', 'Madaba', 'Salt'],
  },
  {
    filterType: 'Industry',
    key: 'industry',
    array: [
      'Frontend Developer',
      'Backend Developer',
      'FullStack Developer',
      'Mobile App Developer',
      'DevOps Engineer',
      'UI/UX Designer',
      'Data Analyst',
      'Machine Learning Engineer',
    ],
  },
  {
    filterType: 'Salary (JOD)',
    key: 'salary',
    array: ['< 500 JOD', '500 - 1000 JOD', '1000 - 1500 JOD', '1500+ JOD'],
  },
];

const FilterCard = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    location: '',
    industry: '',
    salary: '',
  });

  const dispatch = useDispatch();

  const handleChange = (key, value) => {
    setSelectedFilters(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedFilters));
  }, [selectedFilters]);

  return (
    <div className="w-full bg-white p-5 rounded-lg shadow-md">
      <h1 className="font-bold text-xl mb-4">Filter Jobs</h1>
      <div className="space-y-6">
        {filterData.map((filter, index) => (
          <div key={filter.key}>
            <h2 className="text-md font-semibold mb-2">{filter.filterType}</h2>
            <RadioGroup
              value={selectedFilters[filter.key]}
              onValueChange={value => handleChange(filter.key, value)}
            >
              {filter.array.map((item, idx) => {
                const itemId = `id-${filter.key}-${idx}`;
                return (
                  <div key={itemId} className="flex items-center space-x-2 my-1">
                    <RadioGroupItem value={item} id={itemId} />
                    <Label htmlFor={itemId}>{item}</Label>
                  </div>
                );
              })}
            </RadioGroup>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterCard;
