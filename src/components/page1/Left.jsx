import React from 'react'

const Left = () => {
  return (
    <div className='left-main h-[100%] text-[#c2c7d0] font-sans antialiased selection:bg-[#007bff]'>
      <div className="left-cont h-[100vh] w-[250px] bg-[#343a40] flex flex-col justify-between shadow-xl">
        
        <div className="topLeft flex-1 flex flex-col overflow-y-auto">
          
          <div className="brand border-b border-gray-600 px-4 py-3 flex items-center">
            <span className="text-white text-xl font-light tracking-wide">
              Admin<span className="font-semibold">LTE</span> 4
            </span>
          </div>
          <nav className="menu-items px-2 py-3 flex flex-col gap-1">
            
            <div className="menu-group flex flex-col">
              <div className="flex items-center justify-between px-3 py-2 text-white bg-[#222] rounded-md font-medium cursor-pointer">
                <span>Dashboard</span>
                <span className="text-xs transition-transform transform rotate-90">➔</span>
              </div>
              
              {/* Nested Sub-menus */}
              <div className="sub-menu pl-4 flex flex-col gap-1 mt-1">
                <div className="px-3 py-2 text-white hover:bg-white/10 rounded cursor-pointer text-sm font-light">
                  Dashboard v1
                </div>
                <div className="px-3 py-2 text-white hover:bg-white/10 rounded cursor-pointer text-sm font-light">
                  Dashboard v2
                </div>
                <div className="px-3 py-2 text-white hover:bg-white/10 rounded cursor-pointer text-sm font-light">
                  Dashboard v3
                </div>
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-1">
              <div className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-md cursor-pointer transition-colors flex items-center justify-between">
                <span>Widgets</span>
              </div>
              <div className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-md cursor-pointer transition-colors flex items-center justify-between">
                <span>Layout Options</span>
                <span className="text-xs text-gray-500">➔</span>
              </div>
              <div className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-md cursor-pointer transition-colors flex items-center justify-between">
                <span>UI Elements</span>
                <span className="text-xs text-gray-500">➔</span>
              </div>
              <div className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-md cursor-pointer transition-colors flex items-center justify-between">
                <span>Mailbox</span>
                <span className="text-xs text-gray-500">➔</span>
              </div>
              <div className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-md cursor-pointer transition-colors flex items-center justify-between">
                <span>Forms</span>
                <span className="text-xs text-gray-500">➔</span>
              </div>
              <div className="px-3 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-md cursor-pointer transition-colors flex items-center justify-between">
                <span>Tables</span>
                <span className="text-xs text-gray-500">➔</span>
              </div>
            </div>

          </nav>
        </div>
{/* 
        <div className="bottomLeft border-t border-gray-600 p-4 bg-[#2f353a] flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-500 flex items-center justify-center text-xs text-white font-bold">
            AP
          </div>
          <span className="text-sm text-white font-light">Alexander Pierce</span>
        </div> */}

      </div>
    </div>
  )
}

export default Left
