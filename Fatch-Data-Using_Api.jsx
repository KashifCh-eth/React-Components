import React from 'react'
import { useEffect, useState } from 'react'

function FatchApi() {

    const [data, setApiData] = useState([]);
 
    const fatchApi = async () => {
        const Api = await fetch("https://dummyjson.com/products");   
        console.log(Api)
        const Data = await Api.json()
        console.log(Data);
        setApiData(Data);
    }

    useEffect(() => {
        fatchApi();
    },[])

  return (
    <div>
          <p className='bg-info'>JavaScript Api Fatch</p>
        <div className='container-fluid'>
            <div  className='row'>
              {data.products.map((e) => {
                  return (
                      <div key={e.id} className=" col-10 col-md-4 mt-5"> 
                          <div className='card p-2'>
                              <div className=' align-items-center'>
                                   <div className='p-2'><img src={e.thumbnail} width="155" className='rounded'/></div>
                                   <div className='p-2 text-info'>{e.brand}</div>
                                   <div className='p-2 bg-warning'>{e.category}</div>
                                   <div className='p-2 '>{e.description}</div>
                                   <div className='p-2 bg-dark text-light'>{e.price}</div>
                              </div>
                           </div>
                      </div>
                  )
              })}
             </div>
         </div>
           
    </div>
  )
}

export default FatchApi
