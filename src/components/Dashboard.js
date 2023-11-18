import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [data, setData] = useState({ products: [], total: 0, skip: 0, limit: 0 });

  const fetchData = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const json = await res.json();
      setData(json);
      console.log(json)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='flex flex-wrap gap-3 mx-1'>
      { 
        data.products.map((item) => (
          <div key={item.id} className='w-[300px] h-[400px] border-2 border-red-400 shadow-md'>
            <img src={item.images} alt='...' className='w-[100px] h-[100px] ml-[100px] mt-7' />
            <div className='card-body mt-10'>
              <h5 className='card-title'>{item.title}</h5>
              <p className='card-text text-red-400 ml-[100px]'>{item.description}</p>
              <div className='ml-10'>
                <button className='bg-green-500 text-white px-4 py-2 text-center'>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
