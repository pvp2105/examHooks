import { useState } from "react";
import styles from "../examHooks/examHooks.module.scss";

function Table({ studentsFilted, pagination }) {
  // const { skip, limit } = pagination;
  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 3;
  //currentPage: trang hiện tại
  //studentsPerPage: số lượng sinh viên được hiển thị trên mỗi trang

  const indexLastStudent = currentPage * studentsPerPage;
  const indexFirstStudent = indexLastStudent - studentsPerPage;

  const pageNumbers = [];
  //   Math.ceil: làm tròn lên
  for (
    let i = 1;
    i <= Math.ceil(studentsFilted.length / studentsPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <table className={styles["table"]}>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Tên</th>
            <th scope="col">Lớp</th>
            <th scope="col">Giới tính</th>
            <th scope="col">Năm sinh</th>
            <th scope="col">Họ tên cha</th>
            <th scope="col">Họ tên mẹ</th>
            <th scope="col">Quê quán</th>
          </tr>
        </thead>
        <tbody>
          {studentsFilted
            .slice(indexFirstStudent, indexLastStudent)
            .map((student) => (
              // {studentsFilted.slice(skip, skip + limit).map((student) => (
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
}

export default Table;
