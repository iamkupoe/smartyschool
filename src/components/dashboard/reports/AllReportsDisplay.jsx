import { reportInfo } from "../../Constants";
import { Link } from "react-router-dom";

const AllReportsDisplay = () => {
  return (
    <div className="container mx-auto p-5 h-[88vh]   overflow-y-auto">
      <div className="flex flex-row justify-start flex-wrap gap-3">
        {reportInfo &&
          reportInfo.map((report, index) => (
            <div
              key={index}
              className=" mb-4 p-4 sm:w-[48%] lg:w-[32%] xl:w-[24%] h-[9rem] border rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold">{report.title}</h2>
              <p className="text-gray-700">{report.description}</p>
              <Link
                to={report.report_url}
                className="text-blue-500 hover:underline"
              >
                View report
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllReportsDisplay;
