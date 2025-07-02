// Paste this into src/App.jsx
import React, { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded mr-2 flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-blue-600 font-bold text-xl">PayPal</span>
          </div>
        </div>
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <div className="max-w-md mx-auto bg-white min-h-screen md:max-w-lg md:mt-4 md:rounded-lg md:shadow-lg md:min-h-0">
        {/* Balance Section */}
        <div className="px-6 py-8 text-center">
          <h2 className="text-gray-500 text-lg mb-2">PayPal balance</h2>
          <div className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            €41,742,352.00
          </div>
          
          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Send
            </button>
            <button className="flex-1 bg-gray-100 text-gray-900 py-3 px-6 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Request
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-6 pb-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Pay in store */}
            <button className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="font-medium text-gray-900">Pay in store</div>
            </button>

            {/* Transfer to bank */}
            <button className="bg-gray-50 p-6 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <div className="w-12 h-12 mx-auto mb-3 bg-gray-200 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="font-medium text-gray-900">Transfer to bank</div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="px-6 py-4 border-t border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Recent activity</h3>
            <button className="text-blue-600 font-medium text-sm hover:text-blue-700">
              Clear All
            </button>
          </div>
          
          {/* Activity Items */}
          <div className="space-y-4">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Money received</div>
                  <div className="text-sm text-gray-500">From John Doe</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-green-600">+€250.00</div>
                <div className="text-sm text-gray-500">2 hours ago</div>
              </div>
            </div>
            
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Bank transfer</div>
                  <div className="text-sm text-gray-500">To Savings Account</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-600">-€1,500.00</div>
                <div className="text-sm text-gray-500">Yesterday</div>
              </div>
            </div>

            <div className="flex items-center justify-between py-3">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Online purchase</div>
                  <div className="text-sm text-gray-500">Amazon Store</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-gray-600">-€89.99</div>
                <div className="text-sm text-gray-500">3 days ago</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="border-t border-gray-100 px-6 py-4 mt-8">
          <div className="flex justify-around">
            <button 
              className={`flex flex-col items-center p-2 ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-400'}`}
              onClick={() => setActiveTab('home')}
            >
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-xs">Home</span>
            </button>
            
            <button 
              className={`flex flex-col items-center p-2 ${activeTab === 'activity' ? 'text-blue-600' : 'text-gray-400'}`}
              onClick={() => setActiveTab('activity')}
            >
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="text-xs">Activity</span>
            </button>
            
            <button 
              className={`flex flex-col items-center p-2 ${activeTab === 'wallet' ? 'text-blue-600' : 'text-gray-400'}`}
              onClick={() => setActiveTab('wallet')}
            >
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="text-xs">Wallet</span>
            </button>
            
            <button 
              className={`flex flex-col items-center p-2 ${activeTab === 'search' ? 'text-blue-600' : 'text-gray-400'}`}
              onClick={() => setActiveTab('search')}
            >
              <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-xs">Search</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
