import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <div className="bg-gray-800 text-white shadow-md">
            <div>
                <div>
                    <ul className="menu menu-horizontal px-100">
                        <li className="mr-4">
                            <Link to="/publication" className="btn btn-ghost text-lg hover:bg-blue-300 hover:text-black">Publicación</Link>
                        </li>
                        <li>
                            <Link to="/publication/create" className="btn btn-ghost text-lg hover:bg-blue-300 hover:text-black">Agregar</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}