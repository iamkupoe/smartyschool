// import React from "react";

// const EnrollmentReport = () => {
//   return <div>EnrollmentReport</div>;
// };

// export default EnrollmentReport;


import React, { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Search, Filter, Download, Calendar, Users, TrendingUp, BookOpen } from 'lucide-react';

const EnrollmentReport = () => {
  // Sample data - in real app this would come from API
  const [enrollmentData] = useState([
    { id: 1, studentName: 'Alice Johnson', grade: '9', section: 'A', enrollDate: '2024-01-15', status: 'Active', guardianName: 'Mary Johnson', phone: '555-0123' },
    { id: 2, studentName: 'Bob Smith', grade: '10', section: 'B', enrollDate: '2024-01-20', status: 'Active', guardianName: 'John Smith', phone: '555-0124' },
    { id: 3, studentName: 'Carol Davis', grade: '9', section: 'A', enrollDate: '2024-02-01', status: 'Active', guardianName: 'Susan Davis', phone: '555-0125' },
    { id: 4, studentName: 'David Wilson', grade: '11', section: 'C', enrollDate: '2024-01-10', status: 'Inactive', guardianName: 'Robert Wilson', phone: '555-0126' },
    { id: 5, studentName: 'Emma Brown', grade: '10', section: 'A', enrollDate: '2024-02-15', status: 'Active', guardianName: 'Lisa Brown', phone: '555-0127' },
    { id: 6, studentName: 'Frank Miller', grade: '9', section: 'B', enrollDate: '2024-01-25', status: 'Active', guardianName: 'Karen Miller', phone: '555-0128' },
    { id: 7, studentName: 'Grace Lee', grade: '11', section: 'A', enrollDate: '2024-02-10', status: 'Active', guardianName: 'Michael Lee', phone: '555-0129' },
    { id: 8, studentName: 'Henry Taylor', grade: '10', section: 'C', enrollDate: '2024-01-30', status: 'Active', guardianName: 'Sarah Taylor', phone: '555-0130' }
  ]);

  const [filters, setFilters] = useState({
    search: '',
    grade: '',
    section: '',
    status: '',
    dateRange: ''
  });

  const [activeTab, setActiveTab] = useState('overview');

  // Filter data based on current filters
  const filteredData = useMemo(() => {
    return enrollmentData.filter(student => {
      const matchesSearch = student.studentName.toLowerCase().includes(filters.search.toLowerCase()) ||
                           student.guardianName.toLowerCase().includes(filters.search.toLowerCase());
      const matchesGrade = !filters.grade || student.grade === filters.grade;
      const matchesSection = !filters.section || student.section === filters.section;
      const matchesStatus = !filters.status || student.status === filters.status;
      
      return matchesSearch && matchesGrade && matchesSection && matchesStatus;
    });
  }, [enrollmentData, filters]);

  // Calculate statistics
  const stats = useMemo(() => {
    const total = filteredData.length;
    const active = filteredData.filter(s => s.status === 'Active').length;
    const inactive = filteredData.filter(s => s.status === 'Inactive').length;
    const gradeDistribution = filteredData.reduce((acc, student) => {
      acc[student.grade] = (acc[student.grade] || 0) + 1;
      return acc;
    }, {});

    return {
      total,
      active,
      inactive,
      gradeDistribution: Object.entries(gradeDistribution).map(([grade, count]) => ({
        grade: `Grade ${grade}`,
        count
      }))
    };
  }, [filteredData]);

  const pieData = [
    { name: 'Active', value: stats.active, color: '#22c55e' },
    { name: 'Inactive', value: stats.inactive, color: '#ef4444' }
  ];

  const monthlyEnrollment = [
    { month: 'Jan', enrollments: 45 },
    { month: 'Feb', enrollments: 32 },
    { month: 'Mar', enrollments: 28 },
    { month: 'Apr', enrollments: 35 },
    { month: 'May', enrollments: 42 },
    { month: 'Jun', enrollments: 38 }
  ];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      grade: '',
      section: '',
      status: '',
      dateRange: ''
    });
  };

  const exportData = () => {
    // In real app, this would generate CSV/Excel export
    alert('Export functionality would be implemented here');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Enrollment Report</h1>
              <p className="text-gray-600 mt-1">Academic Year 2024-2025</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={exportData}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Download size={20} />
                Export
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Calendar size={20} />
                Date Range
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="text-blue-600" size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Students</p>
                <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="text-green-600" size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Active</p>
                <p className="text-2xl font-bold text-green-600">{stats.active}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-red-100 rounded-lg">
                <BookOpen className="text-red-600" size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Inactive</p>
                <p className="text-2xl font-bold text-red-600">{stats.inactive}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Filter className="text-purple-600" size={24} />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Enrollment Rate</p>
                <p className="text-2xl font-bold text-purple-600">94.2%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex-1 min-w-64">
              <div className="relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search students or guardians..."
                  value={filters.search}
                  onChange={(e) => handleFilterChange('search', e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <select
              value={filters.grade}
              onChange={(e) => handleFilterChange('grade', e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Grades</option>
              <option value="9">Grade 9</option>
              <option value="10">Grade 10</option>
              <option value="11">Grade 11</option>
              <option value="12">Grade 12</option>
            </select>

            <select
              value={filters.section}
              onChange={(e) => handleFilterChange('section', e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Sections</option>
              <option value="A">Section A</option>
              <option value="B">Section B</option>
              <option value="C">Section C</option>
            </select>

            <select
              value={filters.status}
              onChange={(e) => handleFilterChange('status', e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>

            <button
              onClick={clearFilters}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Clear Filters
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'students', label: 'Student List' },
                { id: 'analytics', label: 'Analytics' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 text-sm font-medium border-b-2 ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Enrollment by Grade</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={stats.gradeDistribution}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="grade" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="count" fill="#3b82f6" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Active vs Inactive</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            )}

            {activeTab === 'students' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Student Name</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Grade</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Section</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Guardian</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Phone</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Enroll Date</th>
                      <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map(student => (
                      <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-4 text-gray-900">{student.studentName}</td>
                        <td className="py-3 px-4 text-gray-600">{student.grade}</td>
                        <td className="py-3 px-4 text-gray-600">{student.section}</td>
                        <td className="py-3 px-4 text-gray-600">{student.guardianName}</td>
                        <td className="py-3 px-4 text-gray-600">{student.phone}</td>
                        <td className="py-3 px-4 text-gray-600">{student.enrollDate}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            student.status === 'Active' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {student.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Monthly Enrollment Trends</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={monthlyEnrollment}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="enrollments" stroke="#3b82f6" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Key Insights</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Peak enrollment in January and May</li>
                      <li>• 94.2% overall enrollment rate</li>
                      <li>• Grade 9 has highest enrollment</li>
                      <li>• Section A is most popular</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Recommendations</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Follow up with inactive students</li>
                      <li>• Consider additional sections for Grade 9</li>
                      <li>• Plan capacity for peak months</li>
                      <li>• Review low-enrollment periods</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentReport;