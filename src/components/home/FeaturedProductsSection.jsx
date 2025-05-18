import { ChevronRight } from 'lucide-react';
import { products } from '../../data/products'
import { useEffect, useState } from 'react';

const FeaturedProductsSection = () => {
    const [sampleData, setSampleData] = useState([])

    useEffect(() => {
        const filterdData = products.filter(data => data.isPopular)
        setSampleData(filterdData);
    }, []);
    return (
        <div className="py-20 bg-[#f4f7ed]">
            <div className="px-4">
                <h5 className="text-[#658a34] text-xl mb-4">Our Products</h5>
                <div className='flex justify-between items-end mb-10'>
                    <h2 className="text-base-900 font-serif text-3xl font-bold">Featured Products</h2>
                    <button className='text-lg text-[#658a34] flex items-center'>View All Products <ChevronRight className="h-4 w-4 ml-1" /></button>
                </div>
            </div>
            <div className='px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
                {sampleData.length > 0 && sampleData.map(item => {
                    return (
                        <div key={item.id} className='rounded-xl relative' style={{ boxShadow: "0 -4px 10px rgba(0,0,0,0.05), 0 4px 10px rgba(0,0,0,0.05)" }}>
                            <div className='h-[210px]'>
                                <img src={item.image} alt={item.name} className='h-[210px] bg-[#FEFCF6FF] rounded-t-xl' />
                                <div className='py-0.5 px-2.5 rounded-2xl bg-[#81ab45] text-[#ffffff] absolute top-2 right-2'>Popular</div>
                            </div>
                            <div className='bg-[#ffffff] rounded-b-xl p-4 flex flex-col h-[210px]'>
                                <h2 className='text-lg text-gray-900'>{item.name}</h2>
                                <p className='text-sm text-gray-500'>{item.unit}</p>
                                <p className='text-sm text-gray-600'>{item.description}</p>

                                <div className='mt-auto flex justify-between items-center'>
                                    <span className='text-[#3a5123] text-lg font-semibold'>{item.price}</span>
                                    <button className='border border-[#81ab45] bg-[#f4f7ed] hover:bg-[#e9f0dc] cursor-pointer px-3 py-2 w-[80px] rounded-xl text-[#81ab45] flex justify-between font-semibold'>
                                        <span>+</span> Add
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default FeaturedProductsSection;