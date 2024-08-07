import React from 'react'

const card = ({item}) => {
    console.log(item)
  return (
   <>
   <div className='mt-5 hover:scale-[1.03] duration-200 cursor-pointer'>
   <div className="card p-3  w-80 md:w-96 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] dark:border">
  <figure>
    <img
      src={item.image}
      alt="fictionalfantasia" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge bg-purple-500 text-white font-thin">{item.category}!</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between items-center">
      <div className="badge badge-outline">{item.price}$</div>
      <div className="badge rounded-lg p-4 text-white bg-purple-500 cursor-pointer hover:bg-purple-600">Buy Now</div>
    </div>
  </div>
</div>
   </div>
   </>
  )
}

export default card
