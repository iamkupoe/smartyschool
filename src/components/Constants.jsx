import { AiFillFileText } from 'react-icons/ai';
import { FaBus, FaGraduationCap, FaToiletPaper } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';

export const summaryData = [
  {
    name: 'Tuition fees',
    paid: '8,500',
    expected: '10,500',
    balance: '2,000',
    icon: <FaGraduationCap className="text-[#ffffff] text-[50px] 2xl:text-[80px]" />,
  },
  {
    name: 'Transport fees',
    paid: '8,500',
    expected: '10,500',
    balance: '2,000',
    icon: <FaBus className="text-[#ffffff] text-[50px] 2xl:text-[80px]" />,
  },
  {
    name: 'Exams fees',
    paid: '8,500',
    expected: '10,500',
    balance: '2,000',
    icon: <AiFillFileText className="text-[#ffffff] text-[50px] 2xl:text-[80px]" />,
  },
  {
    name: 'Feeding fees',
    paid: '8,500',
    expected: '10,500',
    balance: '2,000',
    icon: <MdFastfood className="text-[#ffffff] text-[50px] 2xl:text-[80px]" />,
  },
  {
    name: 'Toiletories fee',
    paid: '8,500',
    expected: '10,500',
    balance: '2,000',
    icon: <FaToiletPaper className="text-[#ffffff] text-[50px] 2xl:text-[80px]" />,
  },
];

export const attendanceData = [
  { name: 'Mon', Boys: 50, Girls: 59, amt: 2400 },
  { name: 'Tue', Boys: 45, Girls: 70, amt: 2400 },
  { name: 'Wed', Boys: 48, Girls: 72, amt: 2400 },
  { name: 'Thu', Boys: 50, Girls: 70, amt: 2400 },
  { name: 'Fri', Boys: 53, Girls: 73, amt: 2400 },
];

export const enrollmentData = [
  { name: 'Boys', value: 60, fill:'#1338be' },
  { name: 'Girls', value: 44, fill:'#3cb043'},
];
