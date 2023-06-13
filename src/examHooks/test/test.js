import React, { useState } from "react";
import styles from "./examHooks.module.scss";

const ExamHooks = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Nguyễn Văn A",
      gender: "Nam",
      class: "6A",
      yearOfBirth: 2010,
      fatherName: "Nguyễn Văn B",
      motherName: "Nguyễn Thị C",
      hometown: "Hà Nội",
    },
    {
      id: 2,
      name: "Trần Thị B",
      gender: "Nữ",
      class: "6B",
      yearOfBirth: 2010,
      fatherName: "Trần Văn D",
      motherName: "Trần Thị E",
      hometown: "Hà Tĩnh",
    },
    {
      id: 3,
      name: "Lê Văn C",
      gender: "Nam",
      class: "6A",
      yearOfBirth: 2010,
      fatherName: "Lê Văn D",
      motherName: "Lê Thị E",
      hometown: "Hải Phòng",
    },
    {
      id: 4,
      name: "Phạm Thị D",
      gender: "Nữ",
      class: "6C",
      yearOfBirth: 2010,
      fatherName: "Phạm Văn F",
      motherName: "Phạm Thị G",
      hometown: "Hà Nội",
    },
    {
      id: 5,
      name: "Nguyễn Thị E",
      gender: "Nữ",
      class: "6B",
      yearOfBirth: 2010,
      fatherName: "Nguyễn Văn F",
      motherName: "Nguyễn Thị G",
      hometown: "Hà Nam",
    },
    {
      id: 6,
      name: "Trần Văn F",
      gender: "Nam",
      class: "6C",
      yearOfBirth: 2010,
      fatherName: "Trần Văn G",
      motherName: "Trần Thị H",
      hometown: "Hà Nội",
    },
    {
      id: 7,
      name: "Lê Thị G",
      gender: "Nữ",
      class: "6A",
      yearOfBirth: 2010,
      fatherName: "Lê Văn H",
      motherName: "Lê Thị I",
      hometown: "Hà Nội",
    },
    {
      id: 8,
      name: "Phạm Văn H",
      gender: "Nam",
      class: "6B",
      yearOfBirth: 2010,
      fatherName: "Phạm Văn I",
      motherName: "Phạm Thị K",
      hometown: "Hải Dương",
    },
    {
      id: 9,
      name: "Nguyễn Thị I",
      gender: "Nữ",
      class: "6C",
      yearOfBirth: 2010,
      fatherName: "Nguyễn Văn K",
      motherName: "Nguyễn Thị L",
      hometown: "Thái Nguyên",
    },
    {
      id: 10,
      name: "Trần Văn K",
      gender: "Nam",
      class: "6A",
      yearOfBirth: 2010,
      fatherName: "Trần Văn L",
      motherName: "Trần Thị M",
      hometown: "Hà Nội",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 3;
  //currentPage: trang hiện tại
  //studentsPerPage: số lượng sinh viên được hiển thị trên mỗi trang

  const indexLastStudent = currentPage * studentsPerPage;
  const indexFirstStudent = indexLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexFirstStudent, indexLastStudent);
  //slice(): tạo ra một bản sao một phần của một mảng hoặc chuỗi

  console.log(indexFirstStudent);
  console.log(indexLastStudent);
  console.log(currentStudents);

  const pageNumbers = [];
  //   Math.ceil: làm tròn lên
  for (let i = 1; i <= Math.ceil(students.length / studentsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(pageNumbers);

  return (
    <div className={styles["wrapper"]}>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Tên</th>
            <th scope="col">Giới tính</th>
            <th scope="col">Lớp</th>
            <th scope="col">Năm sinh</th>
            <th scope="col">Họ tên cha</th>
            <th scope="col">Họ tên mẹ</th>
            <th scope="col">Quê quán</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student) => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.gender}</td>
              <td>{student.class}</td>
              <td>{student.yearOfBirth}</td>
              <td>{student.fatherName}</td>
              <td>{student.motherName}</td>
              <td>{student.hometown}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <ul className={styles["pagination"]}>
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={currentPage === number ? styles["active"] : ""}
            onClick={() => setCurrentPage(number)}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExamHooks;
