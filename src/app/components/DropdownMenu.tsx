"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
      <div className='relative inline-block text-left z-10' ref={dropdownRef}>
        <button onClick={toggleDropdown}>
          <Image 
            src='/images/dropdown.svg' 
            alt="Menu" 
            width={32}
            height={32}
            className="filter invert transition ease-in-out hover:scale-110 duration-300" />
        </button>
        {isOpen && (
          <div className="absolute w-max left-7 rounded-md shadow-lg bg-slate-100">
            <div className='text-right p-2'>
              <div className="flex border-b-2">
                <Image 
                    src='/images/about_me.svg' 
                    alt='About_me'
                    width={24}
                    height={24}
                    className='mr-2 mb-2'
                />
                <Link 
                  href="/about_me" 
                  className="block p-2 font-semibold text-sm text-gray-700 hover:bg-gray-100">
                    About Me
                </Link>
              </div>
              <div className='flex p-1 border-b-2'>
                <Image 
                    src='/images/resume.svg' 
                    alt='resume'
                    width={24}
                    height={24}
                    className='mr-2'
                  />              
                <Link 
                  href="/resume" 
                  className="block p-2 font-semibold text-sm text-gray-700 hover:bg-gray-100">
                    Resume
                </Link>
              </div>
              <div className='flex p-1 border-b-2'>
                <Image 
                  src='/images/projects_icon.svg' 
                  alt='projects'
                  width={24}
                  height={24}
                  className='mr-2'
                />              
                <Link 
                  href="/projects" 
                  className="block p-2 font-semibold text-sm text-gray-700 hover:bg-gray-100">
                    Projects
                </Link>
              </div>
              <div className='flex p-1'>
                <Image 
                  src='/images/contact.svg' 
                  alt='contact_info'
                  width={24}
                  height={24}
                  className='mr-2'
                />
                <Link 
                  href="/contact" 
                  className="block p-2 font-semibold text-sm text-gray-700 hover:bg-gray-100">
                    Contact
                </Link>              
              </div>             
            </div>
          </div>
        )}
      </div>
    
    );
  }
