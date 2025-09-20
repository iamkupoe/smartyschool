import React, { useState, useMemo, useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  ChevronDown,
  Download,
  Printer,
  ChevronLeft,
  ChevronRight,
  FileText,
} from "lucide-react";

const attendanceReport = [
  {
    id: "1000000001",
    studentName: "Ama Mensah",
    class: "Creche",
    term: "first",
    academicYr: "2020/2021",
    date: "2021-01-15",
    attendance: 1,
  },
  {
    id: "1000000016",
    studentName: "Kojo Amankwah",
    class: "Nursery 1",
    term: "first",
    academicYr: "2021/2022",
    date: "2021-09-29",
    attendance: 1,
  },
  {
    id: "1000000017",
    studentName: "Ebo Hammond",
    class: "Nursery 2",
    term: "second",
    academicYr: "2022/2023",
    date: "2023-05-17",
    attendance: 0,
  },
  {
    id: "1000000002",
    studentName: "Kofi Owusu",
    class: "KG 1",
    term: "second",
    academicYr: "2021/2022",
    date: "2022-05-10",
    attendance: 0,
  },
  {
    id: "1000000003",
    studentName: "Akua Asante",
    class: "KG 2",
    term: "third",
    academicYr: "2022/2023",
    date: "2023-07-12",
    attendance: 1,
  },
  {
    id: "1000000004",
    studentName: "Yaw Agyeman",
    class: "Basic 1",
    term: "first",
    academicYr: "2021/2022",
    date: "2021-09-21",
    attendance: 1,
  },
  {
    id: "1000000005",
    studentName: "Esi Adjei",
    class: "Basic 2",
    term: "second",
    academicYr: "2022/2023",
    date: "2023-04-18",
    attendance: 0,
  },
  {
    id: "1000000006",
    studentName: "Kwame Boateng",
    class: "Basic 3",
    term: "third",
    academicYr: "2020/2021",
    date: "2021-07-07",
    attendance: 1,
  },
  {
    id: "1000000007",
    studentName: "Afia Serwaa",
    class: "Basic 4",
    term: "first",
    academicYr: "2021/2022",
    date: "2021-11-09",
    attendance: 0,
  },
  {
    id: "1000000008",
    studentName: "Kojo Appiah",
    class: "Basic 5",
    term: "second",
    academicYr: "2022/2023",
    date: "2023-06-02",
    attendance: 1,
  },
  {
    id: "1000000009",
    studentName: "Adjoa Darko",
    class: "Basic 6",
    term: "third",
    academicYr: "2020/2021",
    date: "2021-08-15",
    attendance: 1,
  },
  {
    id: "1000000010",
    studentName: "Yaw Owusu",
    class: "JHS 1",
    term: "first",
    academicYr: "2021/2022",
    date: "2021-10-19",
    attendance: 0,
  },
  {
    id: "1000000011",
    studentName: "Ama Ofori",
    class: "JHS 2",
    term: "second",
    academicYr: "2022/2023",
    date: "2023-03-13",
    attendance: 1,
  },
  {
    id: "1000000012",
    studentName: "Kwesi Antwi",
    class: "JHS 3",
    term: "third",
    academicYr: "2020/2021",
    date: "2021-06-11",
    attendance: 0,
  },
  {
    id: "1000000013",
    studentName: "Afia Konadu",
    class: "Nursery 1",
    term: "first",
    academicYr: "2022/2023",
    date: "2023-01-20",
    attendance: 1,
  },
  {
    id: "1000000014",
    studentName: "Kwaku Badu",
    class: "Nursery 2",
    term: "second",
    academicYr: "2021/2022",
    date: "2022-03-22",
    attendance: 1,
  },
  {
    id: "1000000015",
    studentName: "Akua Bonsu",
    class: "Creche",
    term: "third",
    academicYr: "2020/2021",
    date: "2021-07-30",
    attendance: 0,
  },

  {
    id: "1000000018",
    studentName: "Akosua Addo",
    class: "KG 1",
    term: "third",
    academicYr: "2020/2021",
    date: "2021-06-25",
    attendance: 1,
  },
  {
    id: "1000000019",
    studentName: "Yaw Tetteh",
    class: "KG 2",
    term: "first",
    academicYr: "2021/2022",
    date: "2021-12-08",
    attendance: 1,
  },
  {
    id: "1000000020",
    studentName: "Ama Dadzie",
    class: "Basic 1",
    term: "second",
    academicYr: "2022/2023",
    date: "2023-03-30",
    attendance: 0,
  },
  {
    id: "1000000021",
    studentName: "Kwame Nkrumah",
    class: "Basic 2",
    term: "third",
    academicYr: "2020/2021",
    date: "2021-08-27",
    attendance: 1,
  },
  {
    id: "1000000022",
    studentName: "Afia Danquah",
    class: "Basic 3",
    term: "first",
    academicYr: "2021/2022",
    date: "2021-09-13",
    attendance: 0,
  },
  {
    id: "1000000023",
    studentName: "Kojo Owusu",
    class: "Basic 4",
    term: "second",
    academicYr: "2022/2023",
    date: "2023-02-14",
    attendance: 1,
  },
  {
    id: "1000000024",
    studentName: "Esi Osei",
    class: "Basic 5",
    term: "third",
    academicYr: "2020/2021",
    date: "2021-05-19",
    attendance: 0,
  },
  {
    id: "1000000025",
    studentName: "Yaw Manu",
    class: "Basic 6",
    term: "first",
    academicYr: "2022/2023",
    date: "2023-01-11",
    attendance: 1,
  },
  {
    id: "1000000026",
    studentName: "Ama Anane",
    class: "JHS 1",
    term: "second",
    academicYr: "2021/2022",
    date: "2022-04-04",
    attendance: 0,
  },
  {
    id: "1000000027",
    studentName: "Kofi Aboagye",
    class: "JHS 2",
    term: "third",
    academicYr: "2020/2021",
    date: "2021-07-16",
    attendance: 1,
  },
  {
    id: "1000000028",
    studentName: "Akua Odoom",
    class: "JHS 3",
    term: "first",
    academicYr: "2021/2022",
    date: "2021-09-07",
    attendance: 1,
  },
  {
    id: "1000000029",
    studentName: "Kojo Darkwah",
    class: "Basic 2",
    term: "second",
    academicYr: "2022/2023",
    date: "2023-04-25",
    attendance: 0,
  },
  {
    id: "1000000030",
    studentName: "Afia Oteng",
    class: "Basic 3",
    term: "third",
    academicYr: "2020/2021",
    date: "2021-06-02",
    attendance: 1,
  },
  {
    id: "1000000031",
    studentName: "Kwame Sarpong",
    class: "Basic 4",
    term: "first",
    academicYr: "2021/2022",
    date: "2021-12-17",
    attendance: 1,
  },
  {
    id: "1000000032",
    studentName: "Ama Baah",
    class: "Basic 5",
    term: "second",
    academicYr: "2022/2023",
    date: "2023-05-11",
    attendance: 0,
  },
  {
    id: "1000000033",
    studentName: "Yaw Frimpong",
    class: "Basic 6",
    term: "third",
    academicYr: "2020/2021",
    date: "2021-07-28",
    attendance: 1,
  },
  {
    id: "1000000034",
    studentName: "Kojo Takyi",
    class: "JHS 1",
    term: "first",
    academicYr: "2021/2022",
    date: "2021-09-23",
    attendance: 0,
  },
  {
    id: "1000000035",
    studentName: "Akua Boakye",
    class: "JHS 2",
    term: "second",
    academicYr: "2022/2023",
    date: "2023-03-09",
    attendance: 1,
  },
  {
    id: "1000000036",
    studentName: "Esi Koomson",
    class: "JHS 3",
    term: "third",
    academicYr: "2020/2021",
    date: "2021-06-30",
    attendance: 0,
  },
  {
    id: "1000000037",
    studentName: "Yaw Asiedu",
    class: "Creche",
    term: "first",
    academicYr: "2022/2023",
    date: "2023-02-03",
    attendance: 1,
  },
  {
    id: "1000000038",
    studentName: "Ama Twum",
    class: "KG 1",
    term: "second",
    academicYr: "2021/2022",
    date: "2022-05-19",
    attendance: 0,
  },
  {
    id: "1000000039",
    studentName: "Kwame Addai",
    class: "KG 2",
    term: "third",
    academicYr: "2020/2021",
    date: "2021-08-05",
    attendance: 1,
  },
  {
    id: "1000000040",
    studentName: "Afia Wiredu",
    class: "Basic 1",
    term: "first",
    academicYr: "2021/2022",
    date: "2021-10-14",
    attendance: 1,
  },
  {
    id: "1000000041",
    studentName: "Kojo Ansah",
    class: "Basic 2",
    term: "second",
    academicYr: "2022/2023",
    date: "2023-04-06",
    attendance: 0,
  },
  {
    id: "1000000042",
    studentName: "Ama Poku",
    class: "Basic 3",
    term: "third",
    academicYr: "2020/2021",
    date: "2021-07-01",
    attendance: 1,
  },
  {
    id: "1000000043",
    studentName: "Yaw Owusu",
    class: "Basic 4",
    term: "first",
    academicYr: "2021/2022",
    date: "2021-12-22",
    attendance: 1,
  },
  {
    id: "1000000044",
    studentName: "Akua Amoako",
    class: "Basic 5",
    term: "second",
    academicYr: "2022/2023",
    date: "2023-06-14",
    attendance: 0,
  },
  {
    id: "1000000045",
    studentName: "Kwame Arthur",
    class: "Basic 6",
    term: "third",
    academicYr: "2020/2021",
    date: "2021-06-09",
    attendance: 1,
  },
  {
    id: "1000000046",
    studentName: "Esi Korang",
    class: "JHS 1",
    term: "first",
    academicYr: "2021/2022",
    date: "2021-11-05",
    attendance: 0,
  },
  {
    id: "1000000047",
    studentName: "Yaw Bonsu",
    class: "JHS 2",
    term: "second",
    academicYr: "2022/2023",
    date: "2023-02-28",
    attendance: 1,
  },
  {
    id: "1000000048",
    studentName: "Afia Nti",
    class: "JHS 3",
    term: "third",
    academicYr: "2020/2021",
    date: "2021-05-25",
    attendance: 0,
  },
  {
    id: "1000000049",
    studentName: "Kojo Aidoo",
    class: "Creche",
    term: "first",
    academicYr: "2022/2023",
    date: "2023-01-26",
    attendance: 1,
  },
  {
    id: "1000000050",
    studentName: "Akua Owusu",
    class: "KG 1",
    term: "second",
    academicYr: "2021/2022",
    date: "2022-04-20",
    attendance: 0,
  },
];

const AttendanceReport = () => {
  const [filters, setFilters] = useState({
    academicYr: "all",
    term: "all",
    class: "all",
  });
  const [chartType, setChartType] = useState("bar");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Get unique values for filter options
  const academicYears = [
    ...new Set(attendanceReport.map((item) => item.academicYr)),
  ].sort();
  const terms = ["first", "second", "third"];
  const [isPrinting, setIsPrinting] = useState(false);

  const classes = [
    "Creche",
    "Nursery 1",
    "Nursery 2",
    "KG 1",
    "KG 2",
    "Basic 1",
    "Basic 2",
    "Basic 3",
    "Basic 4",
    "Basic 5",
    "Basic 6",
    "JHS 1",
    "JHS 2",
    "JHS 3",
  ];

  const printRef = useRef(null);

  // Filter data based on selected filters
  const filteredData = useMemo(() => {
    return attendanceReport.filter((item) => {
      return (
        (filters.academicYr === "all" ||
          item.academicYr === filters.academicYr) &&
        (filters.term === "all" || item.term === filters.term) &&
        (filters.class === "all" || item.class === filters.class)
      );
    });
  }, [filters]);

  // Prepare chart data by class
  const chartData = useMemo(() => {
    const classStats = {};

    filteredData.forEach((item) => {
      if (!classStats[item.class]) {
        classStats[item.class] = { present: 0, absent: 0, total: 0 };
      }
      if (item.attendance === 1) {
        classStats[item.class].present++;
      } else {
        classStats[item.class].absent++;
      }
      classStats[item.class].total++;
    });

    return Object.entries(classStats).map(([className, stats]) => ({
      class: className,
      present: stats.present,
      absent: stats.absent,
      total: stats.total,
      percentage:
        stats.total > 0 ? ((stats.present / stats.total) * 100).toFixed(1) : 0,
    }));
  }, [filteredData]);

  // Pagination
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  const handlePrint = () => {
    setIsPrinting(true); // ✅ show all rows first
    setTimeout(() => {
      const printContents = printRef.current.innerHTML;
      const printWindow = window.open("", "", "width=900,height=650");
      printWindow.document.write(`
      <html>
        <head>
          <title>Attendance Report</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            h1, h2 { text-align: center; }
            table { width: 100%; border-collapse: collapse; margin-top: 20px; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f5f5f5; }
            @media print {
              button, select, input, .no-print { display: none !important; }
              #no-print{
              display: none !important;}
            }
          </style>
        </head>
        <body>
          ${printContents}
        </body>
      </html>
    `);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();

      setIsPrinting(false); // ✅ reset after printing
    }, 500); // delay ensures React re-renders all rows
  };

  const handleExportExcel = () => {
    // Mock Excel export - in real app, you'd use a library like xlsx
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "ID,Student Name,Class,Term,Academic Year,Date,Attendance\n" +
      filteredData
        .map(
          (row) =>
            `${row.id},${row.studentName},${row.class},${row.term},${
              row.academicYr
            },${row.date},${row.attendance ? "Present" : "Absent"}`
        )
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "attendance_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportPDF = () => {
    // Mock PDF export - in real app, you'd use a library like jsPDF
    alert("PDF export functionality would be implemented here");
  };

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  return (
    <div className="p-1 md:p-4 h-[80vh] bg-gray-100 ">
      <section className="flex flex-row justify-between ">
        <div className="lg:w-1/3 flex flex-row gap-2">
          {/* Academic Year Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Academic Year
            </label>
            <div className="relative">
              <select
                value={filters.academicYr}
                onChange={(e) =>
                  handleFilterChange("academicYr", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option value="all">All Years</option>
                {academicYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Term Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Term</label>
            <div className="relative">
              <select
                value={filters.term}
                onChange={(e) => handleFilterChange("term", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option value="all">All Terms</option>
                {terms.map((term) => (
                  <option key={term} value={term}>
                    {term.charAt(0).toUpperCase() + term.slice(1)}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Class Filter */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Class</label>
            <div className="relative">
              <select
                value={filters.class}
                onChange={(e) => handleFilterChange("class", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
              >
                <option value="all">All Classes</option>
                {classes.map((cls) => (
                  <option key={cls} value={cls}>
                    {cls}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
        {/* Chart Type */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Chart Type</label>
          <div className="relative">
            <select
              value={chartType}
              onChange={(e) => setChartType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
            >
              <option value="bar">Bar</option>
              <option value="pie">Pie</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </section>
      <div className=" h-[70vh] overflow-y-auto" ref={printRef}>
        {/* Chart Section */}
        <section className="mb-6 bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Chart Display */}
            <div className="lg:w-full">
              <h2 className="text-xl font-semibold mb-4">
                Attendance Overview
              </h2>
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  {chartType === "bar" ? (
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="class" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="present" fill="#00C49F" name="Present" />
                      <Bar dataKey="absent" fill="#FF8042" name="Absent" />
                    </BarChart>
                  ) : (
                    <PieChart>
                      <Pie
                        data={[
                          {
                            name: "Present",
                            value: chartData.reduce(
                              (sum, item) => sum + item.present,
                              0
                            ),
                          },
                          {
                            name: "Absent",
                            value: chartData.reduce(
                              (sum, item) => sum + item.absent,
                              0
                            ),
                          },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {[
                          { name: "Present", value: 0 },
                          { name: "Absent", value: 0 },
                        ].map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={index === 0 ? "#00C49F" : "#FF8042"}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  )}
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>

        {/* Table Section */}
        <section className="bg-white rounded-lg shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h1 className="text-2xl font-bold">Attendance Report Details</h1>

              {/* Export Buttons */}
              <div className="flex gap-2">
                <button
                  onClick={handlePrint}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  Print
                </button>
                <button
                  onClick={handleExportExcel}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Excel
                </button>
                <button
                  onClick={handleExportPDF}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  PDF
                </button>
              </div>
            </div>

            {/* Results Summary */}
            <p className="text-sm text-gray-600 mt-2">
              Showing {startIndex + 1} to{" "}
              {Math.min(startIndex + itemsPerPage, filteredData.length)} of{" "}
              {filteredData.length} records
            </p>
          </div>

          <div className="overflow-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2 border text-left">ID</th>
                  <th className="px-4 py-2 border text-left">Student Name</th>
                  <th className="px-4 py-2 border text-left">Class</th>
                  <th className="px-4 py-2 border text-left">Term</th>
                  <th className="px-4 py-2 border text-left">Academic Year</th>
                  <th className="px-4 py-2 border text-left">Date</th>
                  <th className="px-4 py-2 border text-center">Attendance</th>
                </tr>
              </thead>
              <tbody>
                {(isPrinting ? filteredData : paginatedData).map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 border">{item.id}</td>
                    <td className="px-4 py-2 border font-medium">
                      {item.studentName}
                    </td>
                    <td className="px-4 py-2 border">{item.class}</td>
                    <td className="px-4 py-2 border capitalize">{item.term}</td>
                    <td className="px-4 py-2 border">{item.academicYr}</td>
                    <td className="px-4 py-2 border">{item.date}</td>
                    <td className="px-4 py-2 border text-center">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          item.attendance === 1
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {item.attendance === 1 ? "Present" : "Absent"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="p-6 border-t border-gray-200">
              <div className="flex items-center justify-center gap-6">
                {/* Previous Button */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                  disabled={currentPage === 1}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Page Input */}
                <div className="flex items-center gap-2 text-sm" id="no-print">
                  <span>Page:</span>
                  <input
                    type="number"
                    min="1"
                    max={totalPages}
                    value={currentPage}
                    onChange={(e) => {
                      let page = Number(e.target.value);
                      if (!isNaN(page)) {
                        setCurrentPage(Math.min(Math.max(page, 1), totalPages));
                      }
                    }}
                    className="w-12 px-2 py-1 border border-gray-300 rounded-md text-center"
                  />
                  <span>of {totalPages}</span>
                </div>

                {/* Next Button */}
                <button
                  onClick={() =>
                    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Rows Per Page Dropdown */}
                <div className="flex items-center gap-2 text-sm" id="no-print">
                  <span>Rows per page:</span>
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                      // Optional: make itemsPerPage state dynamic
                      // but in your code it's fixed, so add useState for it
                    }}
                    className="px-2 py-1 border border-gray-300 rounded-md"
                  >
                    {[5, 10, 20, 50].map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AttendanceReport;
