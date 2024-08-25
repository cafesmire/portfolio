"use client";

import { useState, useEffect, useRef } from 'react';

export default function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event:MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)){
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='relative inline-block text-left' ref={dropdownRef}>
          <button onClick={toggleDropdown}>
            <img src='/dropdown.svg' alt="Menu" className="transition ease-in-out hover:scale-110 duration-300 size-9 filter invert border-2 border-gray-800 rounded-md"/>
          </button>
          {isOpen && (
            <div className="absolute w-32 left-9 rounded-md shadow-lg bg-white">
                <div className='text-center'>
                    <a href="#" className="block mt-1 px-2 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100">About Me</a>
                    <a href="#" className="block mt-1 px-2 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100">Resume</a>
                    <a href="#" className="block mt-1 px-2 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100">Contact</a>
                </div>
            </div>
          )}
        </div>
    );
}