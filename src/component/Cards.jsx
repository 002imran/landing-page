import single from '../assets/single.png'
import double from '../assets/double.png'
import triple from '../assets/triple.png'

const Cards = () => {
  return(
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300'>
           <img className='w-20 mx-auto mt-[-3rem] bg-white' src={single} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                <p className='py-2 border-b mx-8 '>1 Granted User</p>
                <p className='py-2 border-b mx-8'>Send up to 2GB</p>

            </div>
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto py-3 px-6">Start Trail</button>
        
            </div>
         
        <div className='w-full shadow-xl flex flex-col p-4 md:my-0 my-8 bg-gray-100 rounded-lg hover:scale-105 duration-300'>
           <img className='w-20 mx-auto mt-[-3rem] bg-white bg-transparent' src={double} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
            <p className='text-center text-4xl font-bold'>$199</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                <p className='py-2 border-b mx-8 '>3 User Allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 10GB</p>

            </div>
            <button className="text-[#00df9a] bg-black rounded-md font-medium w-[200px] my-6 mx-auto py-3 px-6">Start Trail</button>
        
            </div>
         
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-md hover:scale-105 duration-300'>
           <img className='w-20 mx-auto mt-[-3rem] bg-white' src={triple} alt="/" />
            <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
            <p className='text-center text-4xl font-bold'>$299</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                <p className='py-2 border-b mx-8 '>10 User Allowed</p>
                <p className='py-2 border-b mx-8'>Send up to 20GB</p>

            </div>
            <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] my-6 mx-auto py-3 px-6">Start Trail</button>
        
            </div>
         

        </div>

    </div>


  );
};
export default Cards;
