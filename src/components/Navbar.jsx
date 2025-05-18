import { useState } from "react";


const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50">
            <div className={`navbar bg-[#ffffff] h-[80px] ${!isMobileMenuOpen && "shadow-md"}  flex justify-between items-center px-12 max-[500px]:px-6 z-10 relative`}>
                <div>
                    <span className="font-serif font-bold text-[#4B682A] text-3xl max-[500px]:text-xl">GreenNest Naturals</span>
                </div>
                <div className="gap-3 hidden min-[900px]:flex">
                    <a href="#" className="text-[#4B682A] font-semibold text-[18px]">Home</a>
                    <a href="#" className="text-[#4B5563] text-[18px]" >Products</a>
                    <a href="#" className="text-[#4B5563] text-[18px]">Subscription</a>
                    <a href="#" className="text-[#4B5563] text-[18px]">Contact</a>
                </div>
                <div className="flex items-center">
                    <svg className="w-6 h-6 text-[#4B682A]" fill="none" stroke="currentColor" strokeWidth={2}
                        viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1" />
                        <circle cx="20" cy="21" r="1" />
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <a href="#" className="ml-5 px-4 py-3 bg-[#81AB45] hover:bg-[#4B682A] text-white font-bold rounded-xl text-md hidden min-[900px]:flex">Subscribe Now</a>
                    <div className="min-[900px]:hidden ml-5">
                        <button className="items-center flex cursor-pointer" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                            {!isMobileMenuOpen && <svg className="w-6 h-6 text-[#4B682A]" fill="none" stroke="currentColor" strokeWidth={2}
                                viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>}
                            {isMobileMenuOpen && <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 6 L6 18" />
                                <path d="M6 6 L18 18" />
                            </svg>}
                        </button>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="absolute top-16 left-0 w-full z-50 min-[900px]:hidden mt-4 space-y-1 text-gray-700 font-medium shadow-md bg-white px-6 pb-4">
                    <a href="#" className="block text-lg font-semibold bg-[#F4F7ED] text-[#4B682A] px-3 py-3 rounded-xl">Home</a>
                    <a href="#" className="block text-lg px-3 py-3 rounded-xl hover:bg-[#F4F7ED]">Products</a>
                    <a href="#" className="block text-lg px-3 py-3 rounded-xl hover:bg-[#F4F7ED]">Subscription</a>
                    <a href="#" className="block text-lg px-3 py-3 rounded-xl hover:bg-[#F4F7ED]">Contact</a>
                    <div className="flex text-lg items-center space-x-4 mt-2 w-full">
                        <a href="#" className="py-2 bg-[#81AB45] hover:bg-[#4B682A] text-center text-white h-[50px] font-bold w-full rounded-[14px]">Subscribe Now</a>
                    </div>
                </div>
            )}
        </nav>
    )
};

export default Navbar;