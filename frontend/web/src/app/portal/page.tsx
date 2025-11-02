'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function PatientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [activeTab, setActiveTab] = useState('dashboard');
  const [reminderSettings, setReminderSettings] = useState({
    emailReminders: true,
    textReminders: true,
    phoneNumber: ''
  });
  const [uploadedDocuments, setUploadedDocuments] = useState<Array<{name: string, size: number, type: string, uploadedAt: string}>>([]);
  const [documentsToSign, setDocumentsToSign] = useState([
    {
      id: 1,
      title: 'HIPAA Privacy Notice',
      status: 'pending',
      description: 'Annual privacy notice acknowledgment',
      dueDate: '2025-11-15'
    },
    {
      id: 2,
      title: 'Treatment Consent Form',
      status: 'pending',
      description: 'Consent for upcoming dental treatment',
      dueDate: '2025-11-20'
    }
  ]);
  const [forms, setForms] = useState([
    {
      id: 1,
      title: 'Medical History Update',
      status: 'incomplete',
      description: 'Please update your medical history',
      fields: ['allergies', 'medications', 'conditions']
    },
    {
      id: 2,
      title: 'Insurance Information',
      status: 'complete',
      description: 'Your insurance details',
      fields: ['provider', 'policy_number', 'group_number']
    }
  ]);
  const [invisalignData, setInvisalignData] = useState({
    isActive: true,
    currentSet: 12,
    totalSets: 24,
    daysWorn: 5,
    daysRequired: 7,
    nextChangeDate: '2025-11-08',
    lastCheckup: '2025-10-15',
    nextCheckup: '2025-11-15',
    progress: 50, // percentage
    treatmentStart: '2025-08-01',
    estimatedCompletion: '2026-02-01'
  });
  const [invisalignReminders, setInvisalignReminders] = useState([
    {
      id: 1,
      type: 'aligner_change',
      message: 'Time to change to aligner set #13',
      dueDate: '2025-11-08',
      completed: false
    },
    {
      id: 2,
      type: 'checkup',
      message: 'Scheduled check-up with Dr. Chen',
      dueDate: '2025-11-15',
      completed: false
    },
    {
      id: 3,
      type: 'wear_time',
      message: 'Remember to wear aligners 22+ hours daily',
      dueDate: '2025-11-06',
      completed: false
    }
  ]);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login - in real app, this would authenticate with backend
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({ email: '', password: '' });
  };

  const portalFeatures = [
    {
      title: 'View Appointments',
      description: 'See upcoming appointments and schedule new ones',
      icon: '📅',
      available: true
    },
    {
      title: 'Medical Records',
      description: 'Access your treatment history and records',
      icon: '📋',
      available: true
    },
    {
      title: 'Insurance Information',
      description: 'View insurance details and claims status',
      icon: '🛡️',
      available: true
    },
    {
      title: 'Prescription Refills',
      description: 'Request prescription refills online',
      icon: '💊',
      available: false
    },
    {
      title: 'Bill Pay',
      description: 'Pay bills securely online',
      icon: '💳',
      available: true
    },
    {
      title: 'Test Results',
      description: 'View lab results and X-rays',
      icon: '🔬',
      available: false
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      date: '2025-11-15',
      time: '10:00 AM',
      type: 'Regular Cleaning',
      provider: 'Dr. Sarah Johnson',
      status: 'confirmed',
      duration: '60 min'
    },
    {
      id: 2,
      date: '2025-12-01',
      time: '2:30 PM',
      type: 'Invisalign Check',
      provider: 'Dr. Michael Chen',
      status: 'confirmed',
      duration: '30 min'
    },
    {
      id: 3,
      date: '2025-11-20',
      time: '11:00 AM',
      type: 'X-Ray Review',
      provider: 'Dr. Sarah Johnson',
      status: 'pending',
      duration: '15 min'
    }
  ];

  // Generate calendar data for current month
  const generateCalendarDays = () => {
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const firstDay = new Date(currentYear, currentMonth, 1);
    const lastDay = new Date(currentYear, currentMonth + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());

    const days = [];
    const currentDate = new Date(startDate);

    for (let i = 0; i < 42; i++) { // 6 weeks * 7 days
      const dayAppointments = upcomingAppointments.filter(apt => {
        const aptDate = new Date(apt.date);
        return aptDate.toDateString() === currentDate.toDateString();
      });

      days.push({
        date: new Date(currentDate),
        isCurrentMonth: currentDate.getMonth() === currentMonth,
        isToday: currentDate.toDateString() === today.toDateString(),
        appointments: dayAppointments
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return days;
  };

  const calendarDays = generateCalendarDays();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                     'July', 'August', 'September', 'October', 'November', 'December'];
  const today = new Date();

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                  Aspen Dental Care
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
                <Link href="/portal" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Patient Portal
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Login Section */}
        <div className="min-h-[80vh] flex items-center justify-center px-4">
          <div className="max-w-md w-full">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Patient Portal</h1>
                <p className="text-gray-600">Access your dental records and manage appointments</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleLoginChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    required
                    autoComplete="current-password"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your password"
                    spellCheck="false"
                    autoCapitalize="none"
                    autoCorrect="off"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </button>
              </form>

              <div className="mt-6 text-center">
                <a href="#" className="text-blue-600 hover:text-blue-800 text-sm">
                  Forgot your password?
                </a>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">New Patient?</h3>
                <p className="text-blue-800 text-sm mb-3">
                  Create an account to access our patient portal and manage your dental care online.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 transition-colors"
                >
                  Contact Us to Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2025 Aspen Dental Care. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-blue-600">
                Aspen Dental Care
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About Us</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
              <p className="text-gray-600">Manage your dental care and appointments</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Schedule Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'dashboard'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'calendar'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Calendar View
            </button>
            <button
              onClick={() => setActiveTab('records')}
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'records'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Medical Records
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'documents'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Documents & Forms
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'settings'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Settings
            </button>
            <button
              onClick={() => setActiveTab('invisalign')}
              className={`py-4 px-1 border-b-2 font-medium text-sm whitespace-nowrap ${
                activeTab === 'invisalign'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Invisalign
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="block w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-center"
                  >
                    Book Appointment
                  </Link>
                  <Link
                    href="tel:+15107700393"
                    className="block w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors text-center"
                  >
                    Call Office
                  </Link>
                  <Link
                    href="/contact"
                    className="block w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors text-center"
                  >
                    Send Message
                  </Link>
                </div>
              </div>

              {/* Upcoming Appointments */}
              <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
                <div className="space-y-4">
                  {upcomingAppointments.slice(0, 3).map((appointment) => (
                    <div key={appointment.id} className="border-l-4 border-blue-500 pl-4">
                      <div className="text-sm text-gray-600">{appointment.date} at {appointment.time}</div>
                      <div className="font-medium text-gray-900">{appointment.type}</div>
                      <div className="text-sm text-gray-600">with {appointment.provider}</div>
                      <span className={`inline-block mt-1 text-xs px-2 py-1 rounded ${
                        appointment.status === 'confirmed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href="#"
                  onClick={() => setActiveTab('calendar')}
                  className="text-blue-600 hover:text-blue-800 text-sm mt-4 inline-block"
                >
                  View all in calendar →
                </Link>
              </div>

              {/* Invisalign Status */}
              {invisalignData.isActive && (
                <div className="bg-white rounded-lg shadow-sm p-6 mt-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">Invisalign Status</h2>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Current Set</span>
                      <span className="font-semibold text-blue-600">#{invisalignData.currentSet} of {invisalignData.totalSets}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Days Worn</span>
                      <span className="font-semibold text-green-600">{invisalignData.daysWorn}/{invisalignData.daysRequired}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Next Change</span>
                      <span className="font-semibold text-purple-600">{new Date(invisalignData.nextChangeDate).toLocaleDateString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${(invisalignData.currentSet / invisalignData.totalSets) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 text-center">{invisalignData.progress}% Complete</p>
                    <button
                      onClick={() => setActiveTab('invisalign')}
                      className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors text-sm"
                    >
                      View Full Progress
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {/* Portal Features */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Patient Portal Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {portalFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl ${
                        feature.available ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-400'
                      }`}>
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{feature.title}</h3>
                        <p className="text-sm text-gray-600">{feature.description}</p>
                        {!feature.available && (
                          <span className="inline-block mt-1 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      🦷
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Invisalign Progress</p>
                      <p className="text-sm text-gray-600">Completed aligner set #{invisalignData.currentSet - 1}, now wearing set #{invisalignData.currentSet}</p>
                    </div>
                    <span className="text-sm text-gray-500">3 days ago</span>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      📅
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Appointment Confirmed</p>
                      <p className="text-sm text-gray-600">Regular cleaning scheduled for November 15, 2025</p>
                    </div>
                    <span className="text-sm text-gray-500">2 days ago</span>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      💊
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Prescription Updated</p>
                      <p className="text-sm text-gray-600">Fluoride treatment prescription renewed</p>
                    </div>
                    <span className="text-sm text-gray-500">1 week ago</span>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      📋
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Records Updated</p>
                      <p className="text-sm text-gray-600">Latest X-rays added to your file</p>
                    </div>
                    <span className="text-sm text-gray-500">2 weeks ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'calendar' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Appointment Calendar</h2>
              <div className="text-sm text-gray-600">
                {monthNames[today.getMonth()]} {today.getFullYear()}
              </div>
            </div>

            {/* Calendar Header */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((day, index) => (
                <div
                  key={index}
                  className={`min-h-[100px] p-2 border border-gray-200 ${
                    day.isCurrentMonth ? 'bg-white' : 'bg-gray-50'
                  } ${day.isToday ? 'ring-2 ring-blue-500' : ''}`}
                >
                  <div className={`text-sm font-medium mb-1 ${
                    day.isCurrentMonth ? 'text-gray-900' : 'text-gray-400'
                  } ${day.isToday ? 'text-blue-600' : ''}`}>
                    {day.date.getDate()}
                  </div>
                  <div className="space-y-1">
                    {day.appointments.map(apt => (
                      <div
                        key={apt.id}
                        className={`text-xs p-1 rounded cursor-pointer hover:opacity-80 ${
                          apt.status === 'confirmed'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                        title={`${apt.time} - ${apt.type} with ${apt.provider}`}
                      >
                        <div className="font-medium truncate">{apt.time}</div>
                        <div className="truncate">{apt.type}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Appointments List */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">All Appointments</h3>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        📅
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{appointment.type}</h4>
                        <p className="text-sm text-gray-600">
                          {appointment.date} at {appointment.time} • {appointment.duration}
                        </p>
                        <p className="text-sm text-gray-600">with {appointment.provider}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 text-xs rounded-full ${
                        appointment.status === 'confirmed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {appointment.status}
                      </span>
                      <div className="mt-2 space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">
                          Reschedule
                        </button>
                        <button className="text-red-600 hover:text-red-800 text-sm">
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'records' && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Medical Records</h2>
            <div className="space-y-6">
              {/* Treatment History */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Treatment History</h3>
                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">Root Canal Therapy</h4>
                        <p className="text-sm text-gray-600">Completed on October 15, 2025</p>
                        <p className="text-sm text-gray-600">Provider: Dr. Sarah Johnson</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Completed</span>
                    </div>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-900">Regular Cleaning</h4>
                        <p className="text-sm text-gray-600">Completed on September 20, 2025</p>
                        <p className="text-sm text-gray-600">Provider: Dr. Michael Chen</p>
                      </div>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Completed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Test Results */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Test Results & Images</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        🦷
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">X-Ray Results</h4>
                        <p className="text-sm text-gray-600">October 15, 2025</p>
                      </div>
                    </div>
                    <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm">
                      View Results
                    </button>
                  </div>

                  <div className="p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        📊
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">Blood Test Results</h4>
                        <p className="text-sm text-gray-600">September 20, 2025</p>
                      </div>
                    </div>
                    <button className="mt-3 text-blue-600 hover:text-blue-800 text-sm">
                      View Results
                    </button>
                  </div>
                </div>
              </div>

              {/* Prescriptions */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Current Prescriptions</h3>
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">Fluoride Treatment</h4>
                      <p className="text-sm text-gray-600">Prescribed: October 15, 2025</p>
                      <p className="text-sm text-gray-600">Refills remaining: 2</p>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                      Request Refill
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'documents' && (
          <div className="space-y-8">
            {/* Documents to Sign */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Documents to Sign</h2>
              <div className="space-y-4">
                {documentsToSign.map((doc) => (
                  <div key={doc.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        📄
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{doc.title}</h4>
                        <p className="text-sm text-gray-600">{doc.description}</p>
                        <p className="text-xs text-gray-500">Due: {doc.dueDate}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                        Sign Document
                      </button>
                      <button className="bg-gray-600 text-white px-4 py-2 rounded text-sm hover:bg-gray-700">
                        View
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Forms to Complete */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Forms & Questionnaires</h2>
              <div className="space-y-4">
                {forms.map((form) => (
                  <div key={form.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        form.status === 'complete' ? 'bg-green-100' : 'bg-yellow-100'
                      }`}>
                        {form.status === 'complete' ? '✅' : '📝'}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{form.title}</h4>
                        <p className="text-sm text-gray-600">{form.description}</p>
                        <span className={`inline-block mt-1 text-xs px-2 py-1 rounded ${
                          form.status === 'complete'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {form.status}
                        </span>
                      </div>
                    </div>
                    <button className={`px-4 py-2 rounded text-sm ${
                      form.status === 'complete'
                        ? 'bg-gray-600 text-white hover:bg-gray-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}>
                      {form.status === 'complete' ? 'Update' : 'Complete'}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Document Upload */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Upload Documents</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                    📎
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Upload Insurance Card or ID</h3>
                    <p className="text-gray-600">Drag and drop files here, or click to browse</p>
                  </div>
                  <div className="flex justify-center space-x-4">
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      id="file-upload"
                    />
                    <label
                      htmlFor="file-upload"
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
                    >
                      Choose Files
                    </label>
                    <button className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700">
                      Take Photo
                    </button>
                  </div>
                  <p className="text-xs text-gray-500">Supported formats: PDF, JPG, PNG (Max 10MB each)</p>
                </div>
              </div>

              {/* Uploaded Documents List */}
              {uploadedDocuments.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Uploaded Documents</h3>
                  <div className="space-y-2">
                    {uploadedDocuments.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
                            📄
                          </div>
                          <span className="text-sm text-gray-900">{doc.name}</span>
                        </div>
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800 text-sm">View</button>
                          <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Communication Preferences */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Communication Preferences</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Appointment Reminders</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="font-medium text-gray-900">Email Reminders</label>
                        <p className="text-sm text-gray-600">Receive appointment reminders via email</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={reminderSettings.emailReminders}
                        onChange={(e) => setReminderSettings(prev => ({
                          ...prev,
                          emailReminders: e.target.checked
                        }))}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <label className="font-medium text-gray-900">Text Message Reminders</label>
                        <p className="text-sm text-gray-600">Receive appointment reminders via SMS</p>
                      </div>
                      <input
                        type="checkbox"
                        checked={reminderSettings.textReminders}
                        onChange={(e) => setReminderSettings(prev => ({
                          ...prev,
                          textReminders: e.target.checked
                        }))}
                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                    </div>

                    {reminderSettings.textReminders && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number for Text Messages
                        </label>
                        <input
                          type="tel"
                          value={reminderSettings.phoneNumber}
                          onChange={(e) => setReminderSettings(prev => ({
                            ...prev,
                            phoneNumber: e.target.value
                          }))}
                          placeholder="(555) 123-4567"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Notification Types</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                      <span className="text-sm text-gray-700">Appointment confirmations</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                      <span className="text-sm text-gray-700">Treatment reminders</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                      <span className="text-sm text-gray-700">Test results available</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" defaultChecked className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                      <span className="text-sm text-gray-700">Prescription ready</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                      <span className="text-sm text-gray-700">Newsletter and promotions</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                      <span className="text-sm text-gray-700">Recall reminders</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Security */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Account Security</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Change Password</h4>
                    <p className="text-sm text-gray-600">Update your account password</p>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Change
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-600">Add an extra layer of security</p>
                  </div>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                    Enable
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Login History</h4>
                    <p className="text-sm text-gray-600">View recent account activity</p>
                  </div>
                  <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Privacy Settings */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Privacy Settings</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Data Sharing</h4>
                    <p className="text-sm text-gray-600">Allow sharing anonymized data for research</p>
                  </div>
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-gray-900">Marketing Communications</h4>
                    <p className="text-sm text-gray-600">Receive promotional emails and offers</p>
                  </div>
                  <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'invisalign' && (
          <div className="space-y-8">
            {/* Invisalign Progress Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Invisalign Progress</h2>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Active Treatment
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Current Set</p>
                      <p className="text-2xl font-bold text-blue-600">{invisalignData.currentSet}</p>
                      <p className="text-sm text-gray-500">of {invisalignData.totalSets}</p>
                    </div>
                    <div className="text-3xl">🦷</div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Days Worn</p>
                      <p className="text-2xl font-bold text-green-600">{invisalignData.daysWorn}</p>
                      <p className="text-sm text-gray-500">of {invisalignData.daysRequired} required</p>
                    </div>
                    <div className="text-3xl">⏰</div>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Overall Progress</p>
                      <p className="text-2xl font-bold text-purple-600">{invisalignData.progress}%</p>
                      <p className="text-sm text-gray-500">Complete</p>
                    </div>
                    <div className="text-3xl">📊</div>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Treatment Progress</span>
                  <span>{invisalignData.progress}% Complete</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: `${invisalignData.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Treatment Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Started</p>
                  <p className="font-semibold">{new Date(invisalignData.treatmentStart).toLocaleDateString()}</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600">Next Check-up</p>
                  <p className="font-semibold text-blue-600">{new Date(invisalignData.nextCheckup).toLocaleDateString()}</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600">Estimated Completion</p>
                  <p className="font-semibold text-green-600">{new Date(invisalignData.estimatedCompletion).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            {/* Reminders & Notifications */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Reminders & Next Steps</h2>
              <div className="space-y-4">
                {invisalignReminders.map((reminder) => (
                  <div key={reminder.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full ${
                        reminder.type === 'aligner_change' ? 'bg-blue-500' :
                        reminder.type === 'checkup' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                      <div>
                        <h4 className="font-medium text-gray-900">{reminder.message}</h4>
                        <p className="text-sm text-gray-600">Due: {new Date(reminder.dueDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {!reminder.completed && (
                        <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700">
                          {reminder.type === 'checkup' ? 'Reschedule' : 'Mark Done'}
                        </button>
                      )}
                      {reminder.completed && (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                          ✓ Completed
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aligner Change Schedule */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Aligner Change Schedule</h2>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Current Aligner Set</h3>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-bold text-blue-600">Set #{invisalignData.currentSet}</h4>
                      <p className="text-gray-600">Started wearing on {new Date(invisalignData.nextChangeDate).toLocaleDateString()}</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Day {invisalignData.daysWorn} of {invisalignData.daysRequired} • {invisalignData.daysRequired - invisalignData.daysWorn} days remaining
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl mb-2">🦷</div>
                      <p className="text-sm text-gray-600">Next change:</p>
                      <p className="font-semibold">{new Date(invisalignData.nextChangeDate).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Wear Time Progress</h3>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Today's wear time</span>
                      <span>{Math.round((invisalignData.daysWorn / invisalignData.daysRequired) * 100)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-600 h-2 rounded-full"
                        style={{ width: `${(invisalignData.daysWorn / invisalignData.daysRequired) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Aim for 22+ hours daily wear time
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                      Report Issue with Aligner
                    </button>
                    <button className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors">
                      Schedule Check-up
                    </button>
                    <button className="w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors">
                      Contact Orthodontist
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatment Photos */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Treatment Progress Photos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-gray-400">📸 Before Treatment</span>
                  </div>
                  <p className="text-sm text-gray-600">August 1, 2025</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-gray-400">📸 Current Progress</span>
                  </div>
                  <p className="text-sm text-gray-600">November 1, 2025</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 h-48 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-gray-400">📸 After Treatment</span>
                  </div>
                  <p className="text-sm text-gray-600">Estimated: February 1, 2026</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Upload New Progress Photo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Aspen Dental Care. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}