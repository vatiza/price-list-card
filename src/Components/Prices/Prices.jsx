import { useEffect, useState } from "react";
import Pricecard from "../PricesCard/Pricecard";


const Prices = () => {

    const [prices, setPeices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPeices(data))
    }, [])
    return (
        <div>
            <h1 className="text-4xl text-center text-white bg-purple-600 font-bold p-4">Awesome Price</h1>

            <div className="grid grid-cols-3 gap-3 mt-5 p-5">
                {
                    prices.map(price => <Pricecard key={price.id}
                        price={price}></Pricecard>)
                }
            </div>

        </div>
    );
};

export default Prices;