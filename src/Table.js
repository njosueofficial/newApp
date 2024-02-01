import React, { useEffect, useState } from 'react';
import axios from 'axios';

function YourComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <table className='w-1/2  bg-gray-950 text-slate-950 border border-green-400'>
        <thead>
          <tr>
            <th className='px-6 py-3 text-left bg-gray-950 text-xs font-medium text-gray-600 uppercase tracking-wider'>ID</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Name</th>
            <th className='px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider'>Email</th>
            <th className='px-6 py-3 text-left text-xs font-larg text-gray-600 uppercase tracking-wider'>Password</th>
            {/* Add more table headers based on your data structure */}
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {data.map(item => (
            <tr key={item.userId}>
              <td className='px-6 py-4 whitespace-nowrap'>{item.userId}</td>
              <td className='px-6 py-4 whitespace-nowrap uppercase'>{item.userName}</td>
              <td className='px-6 py-4 whitespace-nowrap lowercase'>{item.userEmail}</td>
              <td className='px-6 py-4 whitespace-nowrap'>{item.userPassword}</td>
              {/* Add more table cells based on your data structure */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default YourComponent;
