/* eslint-disable react/prop-types */





const Pricecard = ({ price }) => {


    return (
        <div className="bg-indigo-400 rounded-md p-4">
            <h2 className="text-center">

                <span className="text-5xl font-extrabold  text-purple-900">{price.price} </span>
                <span className="text-2xl text-white">/month</span>
            </h2>
            <h5 className="text-2xl font-bold text-center text-white">  {price.name}</h5>
            <p>Features</p>
            

        </div>
    );
};

export default Pricecard;