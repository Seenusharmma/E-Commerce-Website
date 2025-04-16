import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
           <div>
           <h3 className="text-lg text-gray-800 mb-4">NewsLetter</h3>
            <p className="text-gray-500 mb-4">
                Be the first hear about new products, special offers,
                 and more.
            </p>
            {/* Another paragraph */}
            <p className="font-medium text-sm text-gray-600 mb-6">
                SignUp and get 10% off on your first order.
            </p>
            {/* News Latter form */}
            <form className="flex">
                <input type="email" placeholder="Enter your E-mail" className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus-ring-2 focus:ring-gray-500 transition-all" required/>
                <button type="submit" className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all">Subscribe</button>
            </form>
           </div>
           {/* Shop Links */}
           <div>
            <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
            <ul className='space-y-2 text-gray-600'>
                <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>Men's top wear</Link>
                </li>
                <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>Women's top wear</Link>
                </li>
                <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>Stationary Items</Link>
                </li>
                <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>Kids Toys</Link>
                </li>
            </ul>
           </div>
           {/* Support Links */}
           <div>
            <h3 className="text-lg text-gray-800 mb-4">Support</h3>
            <ul className='space-y-2 text-gray-600'>
                <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>Contact Us</Link>
                </li>
                <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>About Us</Link>
                </li>
                <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>FAQs</Link>
                </li>
                <li>
                    <Link to="#" className='hover:text-gray-500 transition-colors'>Features</Link>
                </li>
            </ul>
           </div>
           {/* Follow Us Section */}
           <div>
            <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
            <div className="flex items-center space-x-4 mb-4">
                <a href="#" target="_blank" rel="noopener noreferre" className='hover:text-gray-500'>
                 <CiLinkedin className='h-6 w-6' />
                </a>
                <a href="#" target="_blank" rel="noopener noreferre" className='hover:text-gray-500'>
                 <FaWhatsapp className='h-6 w-6' />
                </a>
                <a href="#" target="_blank" rel="noopener noreferre" className='hover:text-gray-500'>
                 <FaGithub  className='h-6 w-6' />
                </a>
            </div>
            {/* Contect Us */}
            <p className='text-gray-500'>Call Us</p>
            <p className='mt-4'>
            <FiPhoneCall className='inline-block mr-2  h-5 w-5' />
            +91 1234567890
            </p>
           </div>
        </div>
        {/* Copyrights */}
        <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
            <p className='text-gray-500 text-sm tracking-tighter text-center'>©2025, All Right Reserved</p>
        </div>
    </footer>
  )
}

export default Footer
