import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Phonebar = () => {
    const [phones, setPhones] = useState([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        //     .then(res => res.json())
        //     .thne(data => console.log(data))
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;

                const phonesData = loadedData.map(phone => {
                    const parts = phone.slug.split('-');
                    const price = parseInt(parts[1]);
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phoneInfo;
                });
                console.log(phonesData);
                setPhones(phonesData);
            }, [])
    });
    return (
        <div>
            <BarChart width={1000} height={500} data={phones}>
                <XAxis dataKey="name"></XAxis>
                <YAxis dataKey="price"></YAxis>
                <Bar dataKey="name" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="price" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                <Tooltip></Tooltip>


            </BarChart>
        </div>
    );
};

export default Phonebar;