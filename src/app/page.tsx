'use client'

import { useEffect, useState } from "react";

const Page = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(res => setList(res))
      .catch(err => console.error("Error fetching data:", err));
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {list.map((item) => {
          const { image, id, title, price, description, category } = item;

          return (
            <div
              key={id}
              className="bg-white rounded-lg shadow p-4 flex flex-col items-center"
            >
              <img src={image} alt={title} className="h-40 object-contain mb-4" />
              <h2 className="text-lg font-semibold text-gray-800 text-center">{title}</h2>
              <p className="text-sm text-gray-600 text-center mt-2 mb-4">{description}</p>
              <div className="flex flex-col items-center">
                <span className="text-blue-500 font-bold">${price}</span>
                <span className="text-sm text-gray-800 font-bold mt-1">{category}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Page;


// 'use client'

// import { useEffect, useState } from "react";

// const page = () => {

//   const [list,setList]=useState([])

//   useEffect(()=>{
//     getData()
//   },[])


//   function getData(){
//             fetch('https://jsonplaceholder.typicode.com/photos')
//     .then(res => res.json())
//     .then(res=>console.log(res))
//     // .then(res=>setList(res));
//         }


//   return (
//   <>
  
//   <div>
//   {list.map((item) => {
//     const { albumId, id, title, url, thumbnailUrl } = item;

//     return <>
//     <div>{albumId}</div>
//     <div>{id}</div>
//     <div>{title}</div>
//     <div>{url}</div>
//     <img src={thumbnailUrl} width={100}/>
//     </>
//   })}
// </div>

  
//   </>
//   )
// }

// export default page