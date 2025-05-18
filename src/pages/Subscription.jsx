import {pricingPlans} from '../data/priceplans';
import ChoosePlan from '../components/subscription/ChoosePlan';


const Subscription = () => {
    return (
        <div className="bg-[#fefcf6] px-6 py-10">
            <div className="text-center mb-8">
                <h1 className="font-serif font-bold text-3xl text-gray-900">Our Organic Products</h1>
                <p className="text-gray-600 text-lg">Browse our selection of premium organic products, from farm-fresh milk to cold-pressed oils.</p>
            </div>
            <ChoosePlan plans={pricingPlans}/>
        </div>
    )
};

export default Subscription;