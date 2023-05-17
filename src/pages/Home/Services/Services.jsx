import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://doctor-portal-server-woad.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="flex flex-col items-center">
            <h2 className="text-center font-bold text-4xl text-orange-700">Our services</h2>
            <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab laborum consequatur quod ducimus quidem quis sapiente dolor? Quibusdam, enim ullam?</p>
            <div className="grid grid-cols-2 gap-4">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard> )
                }
            </div>
        </div>
    );
};

export default Services;