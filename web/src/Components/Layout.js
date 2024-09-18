// src/Layout.js
import React from 'react';
import Content from '../Components/Content';
import Sidebar from '../Components/Sidebar';
import SubContent from '../Components/SubContent';

const Layout = () => {
  return (
    <div className="flex h-screen">
    
      <div className="w-12  md:w-32 lg:w-18 bg-gray-200 p-2">
        <SubContent/>
      </div>

 
      <div className="flex-1 flex ml-2 mr-4">
     <div className="flex-1 bg-white">
          <Content/>
        
        </div>

      
        <div className="w-38 md:w-56 bg-slate-100 p-4 xl:w-96">
        <Sidebar/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
