import { Registrations } from "../Constants";

export const students = [
    {
        id: '2302240927',
        surname: 'Nhyiraba',
        otherNames: 'Serwaa Danquah',
        stage: 'Basic 4',
        transport: false,
        status: 'regular',
    },
    
]



export const RegisterStudent = (data) => {
    Registrations.push(data);
    return "new student added";
}

export const EditStudentInfo = (id, newInfo) => {
    Registrations.map((student) => {
        if (student.id === id) {
            student.surname = newInfo.surname,
                student.stage = newInfo.stage,
                student.surname = newInfo.surname,
                student.otherNames = newInfo.otherNames,
                student.transport = newInfo.transport,
                student.status = newInfo.status
        }
        return "info updated"
    })
}