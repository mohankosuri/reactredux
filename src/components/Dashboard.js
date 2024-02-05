import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [data, setData] = useState({ products: [], total: 0, skip: 0, limit: 0 });
  const[loading,setLoading]=useState(true)

  const fetchData = async () => {
    try {
      const res = await fetch('https://api.escuelajs.co/api/v1/products');
      const json = await res.json();
      setData(json);
      setLoading(false);
      console.log(json)
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='flex flex-wrap gap-3 mx-1 mt-4'>
      {loading?(<div>
        
     
        
         Loading
        
        
        </div>):(<div className='flex flex-wrap gap-3 mx-1 mt-4'>
        { 
            data.map((item) => (
              <div key={item.id} className='w-[300px] h-[400px] shadow-md flex flex-wrap'>
                <img src={item.images} alt='...' className='w-[100px] h-[100px] ml-[100px] mt-7' />
                <div className='card-body mt-10'>
                  <h5 className='card-title'>{item.title}</h5>
                 
                  <div className='ml-10'>
                    <button className='bg-green-500 text-white px-4 py-2 text-center'>Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}</div>)}
    </div> 
  );
};

export default Dashboard;
