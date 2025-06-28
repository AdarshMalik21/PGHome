

const Card = (props) => {
  return (
    <div className='flex flex-col h-full items-center justify-center bg-white shadow-lg rounded-lg p-6 m-4 w-64'>
        <div className='flex flex-7/12 items-center justify-center bg-blue-500 text-white  w-16 h-16 mb-4'>
            <img src={props.image} alt="ImageBuilding" srcset="" />
        </div>
        <div className='flex flex-3/12 flex-col bg-blue-400 items-center justify-center text-center'>
            <h2 className='text-xl font-semibold mb-2'>{props.society}</h2>
            <p className='text-gray-600'>{props.price}</p>
        </div>
      
    </div>
  )
}

export default Card;
