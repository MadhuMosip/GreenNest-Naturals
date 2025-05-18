import { CheckCircle } from "lucide-react";
import { useState } from "react";

const ChoosePlan = ({plans}) => {
    const [billingCycle, setBillingCycle] = useState('monthly');
    return (
        <div className="bg-[#FFFCF5] min-h-screen p-8">
            <div className="flex justify-center mb-8">
                <div className="flex items-center space-x-12">
                    {[1, 2, 3].map((step, index) => (
                        <div key={index} className="flex items-center space-x-2">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step === 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`}>{step}</div>
                            <span className="text-sm text-gray-700">
                                {step === 1 ? 'Choose Plan' : step === 2 ? 'Product Selection' : 'Delivery Details'}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center space-x-4 mb-6">
                <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-6 py-2 rounded-full font-medium ${billingCycle === 'monthly' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                    Monthly
                </button>
                <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-6 py-2 rounded-full font-medium ${billingCycle === 'yearly' ? 'bg-green-600 text-white' : 'bg-gray-100 text-gray-700'}`}
                >
                    Yearly (10% off)
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {plans.map(plan => (
                    <div
                        key={plan.id}
                        className={`rounded-xl border p-6 shadow-sm ${plan.mostPopular ? 'border-green-600' : 'border-gray-200'} bg-white`}
                    >
                        {plan.mostPopular && (
                            <div className="bg-green-600 text-white px-3 py-1 text-xs rounded-t-md inline-block mb-2">Most Popular</div>
                        )}
                        <h2 className="text-xl font-semibold mb-1">{plan.name}</h2>
                        <p className="text-gray-600 mb-4">{plan.description}</p>
                        <div className="text-2xl font-bold text-gray-800 mb-2">{plan.price}<span className="text-sm font-normal">{plan.billing}</span></div>
                        <ul className="text-sm text-gray-700 space-y-2 mb-4">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                    <CheckCircle className="w-4 h-4 text-green-600 mt-1" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white">Select Plan</button>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default ChoosePlan;