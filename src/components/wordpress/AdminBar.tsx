
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Home, Edit, PlusCircle, Settings, User } from 'lucide-react';

const AdminBar = () => {
  return (
    <div className="bg-black text-white text-xs sticky top-0 z-50">
      <div className="container mx-auto px-2">
        <div className="flex items-center h-8">
          <div className="flex items-center">
            <Link to="/" className="flex items-center px-2 hover:bg-gray-800">
              <span className="font-bold mr-1">W</span> MinimaBlog
            </Link>
            
            <div className="hidden md:flex items-center">
              <div className="relative group">
                <button className="flex items-center px-2 h-8 hover:bg-gray-800">
                  <PlusCircle className="h-3 w-3 mr-1" /> New <ChevronDown className="h-3 w-3 ml-1" />
                </button>
                <div className="absolute left-0 top-8 hidden group-hover:block bg-white text-gray-800 shadow-lg w-40 py-1">
                  <Link to="#" className="block px-4 py-1 hover:bg-gray-100">Post</Link>
                  <Link to="#" className="block px-4 py-1 hover:bg-gray-100">Media</Link>
                  <Link to="#" className="block px-4 py-1 hover:bg-gray-100">Page</Link>
                  <Link to="#" className="block px-4 py-1 hover:bg-gray-100">User</Link>
                </div>
              </div>
              
              <div className="relative group">
                <button className="flex items-center px-2 h-8 hover:bg-gray-800">
                  <Edit className="h-3 w-3 mr-1" /> Edit Post <ChevronDown className="h-3 w-3 ml-1" />
                </button>
                <div className="absolute left-0 top-8 hidden group-hover:block bg-white text-gray-800 shadow-lg w-40 py-1">
                  <Link to="#" className="block px-4 py-1 hover:bg-gray-100">Edit</Link>
                  <Link to="#" className="block px-4 py-1 hover:bg-gray-100">Quick Edit</Link>
                  <Link to="#" className="block px-4 py-1 hover:bg-gray-100">Trash</Link>
                  <Link to="#" className="block px-4 py-1 hover:bg-gray-100">View</Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="ml-auto flex items-center">
            <Link to="#" className="px-2 h-8 flex items-center hover:bg-gray-800">
              <Settings className="h-3 w-3 mr-1" /> Customize
            </Link>
            <div className="relative group">
              <button className="px-2 h-8 flex items-center hover:bg-gray-800">
                <User className="h-3 w-3 mr-1" /> Admin <ChevronDown className="h-3 w-3 ml-1" />
              </button>
              <div className="absolute right-0 top-8 hidden group-hover:block bg-white text-gray-800 shadow-lg w-40 py-1">
                <Link to="#" className="block px-4 py-1 hover:bg-gray-100">Dashboard</Link>
                <Link to="#" className="block px-4 py-1 hover:bg-gray-100">Profile</Link>
                <Link to="#" className="block px-4 py-1 hover:bg-gray-100">Log Out</Link>
              </div>
            </div>
            <Link to="#" className="px-2 h-8 flex items-center hover:bg-gray-800">
              <Home className="h-3 w-3 mr-1" /> View Site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminBar;
