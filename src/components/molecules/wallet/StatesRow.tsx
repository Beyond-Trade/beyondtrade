import React from 'react';

function StatesRow() {
    return (
        <div className="px-24 flex mt-8">
        <div className="bg-customGray-100 rounded mr-8 w-full">
            <div className="rounded-t bg-gray-300 text-gray-600 text-xs px-2 py-1 font-medium">
                <h5>TOTAL SYNTHETIC ASSET VALUE</h5>
            </div>
            <h3 className="font-medium my-6 mx-2">$0.00 USD</h3>
        </div>
        <div className="bg-customGray-100 rounded mr-8 w-full">
            <div className="rounded-t bg-gray-300 text-gray-600 text-xs px-2 py-1 font-medium">
                <h5>SYNTHETIC ASSET BREAKDOWN</h5>
            </div>
            <div className="flex">
                <img src="assets/Icons/Synthetic asset breakdown.svg" className="h-12 my-2 ml-4 mr-6" />
                <div>
                    <div className="flex text-xxs text-gray-500 font-medium mt-1">
                        <img src="assets/Icons/Purple.Ellipse.svg" className="h-3" />
                        <h6 className="ml-1 mr-2">sUSD</h6>
                        <h6>50.09%</h6>
                    </div>
                    <div className="flex text-xxs text-gray-500 font-medium mt-1">
                        <img src="assets/Icons/Purple.Ellipse.svg" className="h-3" />
                        <h6 className="ml-1 mr-2">sGBP</h6>
                        <h6>50.09%</h6>
                    </div>
                    <div className="flex text-xxs text-gray-500 font-medium mt-1">
                        <img src="assets/Icons/Purple.Ellipse.svg" className="h-3" />
                        <h6 className="ml-1 mr-2">sXAU</h6>
                        <h6>50.09%</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg-customGray-100 rounded mr-8 w-full">
            <div className="rounded-t bg-gray-300 text-gray-600 text-xs px-2 py-1 font-medium">
                <h5>SYNTHETIC ASSET SYNTHETIC</h5>
            </div>
            <img src="assets/Icons/Synthetic asset balance.svg" className="mt-2" />
        </div>
        <div className="bg-customGray-100 rounded w-full">
            <div className="rounded-t bg-gray-300 text-gray-600 text-xs px-2 py-1 font-medium">
                <h5>TOTAL WALLET VALUE</h5>
            </div>
            <h3 className="font-medium my-6 mx-2">$0.00 USD</h3>
        </div>
    </div>
    )
}

export default StatesRow