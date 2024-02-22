import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from '../Link/Link';
import { useState } from 'react';
const Nav = () => {
    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" }
    ];

    return (
        <nav className='bg-purple-400'>
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                <span>{open === true ? <XMarkIcon className="h-6 w-6 text-white" />
                    :
                    <Bars3Icon className="h-6 w-6 text-purple-800" />

                }</span>



            </div>
            <ul className={` mt-2 pl-6 md:flex absolute md:static duration-500 bg-purple-500 ${open ? 'top-6' : '-top-36'}`}>


                {
                    routes.map(route => <Link key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>

        </nav>
    );
};

export default Nav;