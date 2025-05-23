import { AiFillFileText } from 'react-icons/ai';
import { FaBus, FaGraduationCap, FaToiletPaper } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { TbSum } from 'react-icons/tb';
import { MdMore } from 'react-icons/md';

export const summaryData = [
  {
    name: 'Tuition fees',
    paid: '8,500',
    expected: '10,500',
    balance: '2,000',
    icon: (
      <FaGraduationCap className="text-[#ffffff] text-[50px] 2xl:text-[80px]" />
    ),
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
    icon: (
      <AiFillFileText className="text-[#ffffff] text-[50px] 2xl:text-[80px]" />
    ),
  },
  {
    name: 'Feeding fees',
    paid: '8,500',
    expected: '10,500',
    balance: '2,000',
    icon: <MdFastfood className="text-[#ffffff] text-[50px] 2xl:text-[80px]" />,
  },
  {
    name: 'Other fees',
    paid: '8,500',
    expected: '10,500',
    balance: '2,000',
    icon: <MdMore className="text-[#ffffff] text-[50px] 2xl:text-[80px]" />,
  },
  {
    name: 'Total fees',
    paid: '8,500',
    expected: '10,500',
    balance: '2,000',
    icon: <TbSum className="text-[#ffffff] text-[50px] 2xl:text-[80px]" />,
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
  { name: 'Boys', value: 60, fill: '#1338be' },
  { name: 'Girls', value: 44, fill: '#3cb043' },
];

export const classArray = [
  { name: 'Creche', value: 'Creche' },
  { name: 'Nursery 1', value: 'Nursery 1' },
  { name: 'Nursery 2', value: 'Nursery 2' },
  { name: 'KG 1', value: 'KG 1' },
  { name: 'KG 2', value: 'KG 2' },
  { name: 'Basic 1', value: 'Basic 1' },
  { name: 'Basic 2', value: 'Basic 2' },
  { name: 'Basic 3', value: 'Basic 3' },
  { name: 'Basic 4', value: 'Basic 4' },
  { name: 'Basic 5', value: 'Basic 5' },
  { name: 'Basic 6', value: 'Basic 6' },
  { name: 'JHS 1', value: 'JHS 1' },
  { name: 'JHS 2', value: 'JHS 2' },
  { name: 'JHS 3', value: 'JHS 3' },
];

export const Registrations = [
  {
    id: '2302240927',
    surname: 'Nhyiraba',
    otherNames: 'Serwaa Danquah',
    stage: 'Basic 4',
    transport: false,
    status: 'regular',
  },
  {
    id: '2202241005',
    surname: 'Sessi',
    otherNames: 'Xavier',
    stage: 'Basic 4',
    transport: false,
    status: 'regular',
  },
  {
    id: '2302240917',
    surname: 'Duker',
    otherNames: 'Claudia',
    stage: 'Basic 4',
    transport: true,
    status: 'regular',
  },
  {
    id: '2302240907',
    surname: 'Boateng',
    otherNames: 'Caleb Osei',
    stage: 'JHS 2',
    transport: true,
    status: 'scholarship',
  },
  {
    id: '2302240924',
    surname: 'Boateng',
    otherNames: 'Cara Amissah',
    stage: 'JHS 2',
    transport: true,
    status: 'scholarship',
  },
  {
    id: '2302240927',
    surname: 'Forson',
    otherNames: 'Nasira Forbah',
    stage: 'Basic 4',
    transport: false,
    status: 'regular',
  },
  {
    id: '2302240927',
    surname: 'Antwi',
    otherNames: 'Clarabel',
    stage: 'Basic 4',
    transport: false,
    status: 'regular',
  },
  {
    id: '2302240927',
    surname: 'Oppong',
    otherNames: 'Silvia',
    stage: 'Basic 5',
    transport: false,
    status: 'regular',
  },
  {
    id: '2302240927',
    surname: 'Tiwaa',
    otherNames: 'Olivia Nana',
    stage: 'Basic 2',
    transport: false,
    status: 'regular',
  },
  {
    id: '2302240927',
    surname: 'Boahemaa',
    otherNames: 'Silvia Ama',
    stage: 'Basic 2',
    transport: false,
    status: 'regular',
  },
  {
    id: '2302240927',
    surname: 'Bimpong',
    otherNames: 'Stephen',
    stage: 'Basic 6',
    transport: false,
    status: 'regular',
  },
  {
    id: '2302240927',
    surname: 'Anderson',
    otherNames: 'Benjamin',
    stage: 'Basic 5',
    transport: false,
    status: 'regular',
  },
  {
    id: '2302240927',
    surname: 'Ampong',
    otherNames: 'Samuel Sahene',
    stage: 'Basic 5',
    transport: false,
    status: 'regular',
  },
  {
    id: '2302240927',
    surname: 'Paintsil',
    otherNames: 'Philip Newman',
    stage: 'Basic 3',
    transport: false,
    status: 'regular',
  },
  {
    id: '2302240927',
    surname: 'Keelson',
    otherNames: 'Benjamin',
    stage: 'Basic 3',
    transport: false,
    status: 'regular',
  },
  {
    id: '2302240927',
    surname: 'Donkor',
    otherNames: 'Doreen',
    stage: 'Basic 2',
    transport: false,
    status: 'regular',
  },
];

export const Payments = [
  {
    receipt_num: 'A-00000',
    date: '04/04/2024 09:00 am',
    amnt: '500',
    as: 'tution',
    paid_for: 'Nhyiraba Serwaa Danquah',
    by: 'Mrs. Danquah',
    mode: 'cash',
  },
  {
    receipt_num: 'A-00001',
    date: '04/04/2024 11:00 am',
    amnt: '450',
    as: 'tution',
    paid_for: 'Nasira Forbah Forson',
    by: 'Mr. Forson',
    mode: 'momo',
  },
  {
    receipt_num: 'A-00002',
    date: '04/04/2024 11:30 am',
    amnt: '700',
    as: 'tution',
    paid_for: 'Liticia Sessi',
    by: 'Mrs. Sessi',
    mode: 'cash',
  },
  {
    receipt_num: 'A-00003',
    date: '04/04/2024 11:40 am',
    amnt: '350',
    as: 'tution',
    paid_for: 'Xavier Sessi',
    by: 'Mrs. Sessi',
    mode: 'cash',
  },
  {
    receipt_num: 'A-00004',
    date: '04/04/2024 09:00 am',
    amnt: '500',
    as: 'tution',
    paid_for: 'Nhyiraba Serwaa Danquah',
    by: 'Mrs. Danquah',
    mode: 'cash',
  },
  {
    receipt_num: 'A-00004',
    date: '04/04/2024 09:00 am',
    amnt: '500',
    as: 'tution',
    paid_for: 'Nhyiraba Serwaa Danquah',
    by: 'Mrs. Danquah',
    mode: 'cash',
  },
  {
    receipt_num: 'A-00005',
    date: '04/04/2024 09:00 am',
    amnt: '500',
    as: 'tution',
    paid_for: 'Nhyiraba Serwaa Danquah',
    by: 'Mrs. Danquah',
    mode: 'cash',
  },
  {
    receipt_num: 'A-00006',
    date: '04/04/2024 09:00 am',
    amnt: '500',
    as: 'tution',
    paid_for: 'Nhyiraba Serwaa Danquah',
    by: 'Mrs. Danquah',
    mode: 'cash',
  },
  {
    receipt_num: 'A-00007',
    date: '04/04/2024 09:00 am',
    amnt: '500',
    as: 'tution',
    paid_for: 'Nhyiraba Serwaa Danquah',
    by: 'Mrs. Danquah',
    mode: 'cash',
  },
  {
    receipt_num: 'A-00008',
    date: '04/04/2024 09:00 am',
    amnt: '500',
    as: 'tution',
    paid_for: 'Nhyiraba Serwaa Danquah',
    by: 'Mrs. Danquah',
    mode: 'cash',
  },
  {
    receipt_num: 'A-00009',
    date: '04/04/2024 09:00 am',
    amnt: '500',
    as: 'tution',
    paid_for: 'Nhyiraba Serwaa Danquah',
    by: 'Mrs. Danquah',
    mode: 'cash',
  },
];

export const preschool = ['OWOP', 'Writing', 'Numeracy', 'Science', 'Literacy'];

export const primary = [
  'OWOP',
  'History',
  'English Lanuage',
  'Mathematics',
  'ICT',
  'Science',
  'French',
  'Ghanaian Language',
  'Creative Arts',
];

export const jhs = [
  'English Language',
  'Social Studies',
  'Mathematics',
  'Science',
  'R.M.E',
  'Ghanaian Language',
  'Career Technology',
  'Creative Arts',
  'I.C.T'
];

export const performance =[
  {name:"Nhyiraba Serwaa Dankwah",exercise:"45/50",assignment:"57/60",test:"75/100",practical:"40/45", exams:"870/1000",},
  {name:"Xavier Sessi",exercise:"46/50",assignment:"54/60",test:"90/100",practical:"30/45", exams:"830/1000",},
  {name:"Precious Gyamfi",exercise:"37/50",assignment:"45/60",test:"80/100",practical:"30/45", exams:"730/1000",},
  {name:"Priscilla Kwafo",exercise:"37/50",assignment:"45/60",test:"80/100",practical:"30/45", exams:"730/1000",},
  {name:"Blessing Obeng",exercise:"37/50",assignment:"45/60",test:"80/100",practical:"30/45", exams:"730/1000",},
  {name:"Claudia Duker",exercise:"45/50",assignment:"56/60",test:"92/100",practical:"40/45", exams:"860/1000",},
  {name:"Priscilla Agyapong",exercise:"37/50",assignment:"45/60",test:"80/100",practical:"30/45", exams:"730/1000",},
  {name:"Stephen Oppong",exercise:"37/50",assignment:"45/60",test:"80/100",practical:"30/45", exams:"730/1000",},
  {name:"Micheal Otoo",exercise:"37/50",assignment:"45/60",test:"80/100",practical:"30/45", exams:"730/1000",},
  {name:"Clarabell Antwi",exercise:"43/50",assignment:"47/60",test:"75/100",practical:"36/45", exams:"780/1000",}
]

 export const inputStyle =
    'border border-[#000000] lg:p-[0.25rem] px-[0.25rem] outline-none';
  export const labelStyle = 'text-[1rem] lg:text-[1.5rem]';