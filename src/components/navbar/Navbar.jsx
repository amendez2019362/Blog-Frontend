import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-custom-color-blue">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-100">
                        <li>
                            <Link to="/publication" className="btn btn-ghost text-lg hover:bg-red-300 hover:text-white font-bold">Publication</Link>
                        </li>
                        <li>
                            <Link to="/publication/create" className="btn btn-ghost text-lg hover:bg-red-300 hover:text-white font-bold">Add</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}