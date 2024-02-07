import { AiFillFileText } from 'react-icons/ai';
import { FaBus, FaGraduationCap, FaToiletPaper } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';

export const summaryData = [
  {
    name: 'Tuition fees',
    paid: '8,500',
    expected: '10,500',
    balance: '2,000',
    icon: <FaGraduationCap color="#fff" size={50} />,
  },
  {
    name: 'Transport fees',
    paid: '8,500',
    expected: '10,500',
    balance: '2,000',
    icon: <FaBus color="#fff" size={50} />,
  },
  {
    name: 'Exams fees',
    paid: '8,500',
    expected: '10,500',
    balance: '2,000',
    icon: <AiFillFileText color="#fff" size={50} />,
  },
  {
    name: 'Feeding fees',
    paid: '8,500',
    expected: '10,500',
    balance: '2,000',
    icon: <MdFastfood color="#fff" size={50} />,
  },
  {
    name: 'Toiletories fee',
    paid: '8,500',
    expected: '10,500',
    balance: '2,000',
    icon: <FaToiletPaper color="#fff" size={50} />,
  },
];

export const attendanceData = [
  { name: 'Mon', boys: 50, girls: 59, amt: 2400 },
  { name: 'Tue', boys: 45, girls: 70, amt: 2400 },
  { name: 'Wed', boys: 48, girls: 72, amt: 2400 },
  { name: 'Thu', boys: 50, girls: 70, amt: 2400 },
  { name: 'Fri', boys: 53, girls: 73, amt: 2400 },
];

export const enrollmentData = [
  { name: 'Boys', value: 60 },
  { name: 'Girls', value: 44 },
];
