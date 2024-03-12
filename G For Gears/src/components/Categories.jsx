import React from 'react'

function Categories() {
    return (
        <> 
        <h2 className="text-2xl font-bold mb-4">Explore</h2>
        <div className="grid grid-cols-2 gap-4">
            
          <div className="bg-white rounded-lg border border-orange-500 p-4">
            <img
              src="gloves.jpg"
              alt="Gloves"
              className="w-full h-auto rounded-lg"
            />
            <p className="font-bold text-center mt-2">Gloves</p>
          </div>
          <div className="bg-white rounded-lg border border-orange-500 p-4">
            <img
              src="shoes.jpg"
              alt="Shoes"
              className="w-full h-auto rounded-lg"
            />
            <p className="font-bold text-center mt-2">Shoes</p>
          </div>
          <div className="bg-white rounded-lg border border-orange-500 p-4">
            <img
              src="helmet.jpg"
              alt="Helmets"
              className="w-full h-auto rounded-lg"
            />
            <p className="font-bold text-center mt-2">Helmets</p>
          </div>
          <div className="bg-white rounded-lg border border-orange-500 p-4">
            <img
              src="backpack.jpg"
              alt="Backpacks"
              className="w-full h-auto rounded-lg"
            />
            <p className="font-bold text-center mt-2">Backpacks</p>
          </div>
        </div>
        
        
        
        </>
        
      );
}

export default Categories