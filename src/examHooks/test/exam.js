import React, { useState } from "react";
import styles from "../examHooks.module.scss";
import Table from "../../component/table";
import Filter from "../../component/filter";
// skip, limit, total data

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

  const [studentsFilted, setStudentsFilted] = useState(students);

  const [pagination, setPagination] = useState({
    skip: 0,
    limit: 2,
    currentPage: 1,
  });

  const handleChangePagination = (newCurrentPage) => {
    setPagination({
      ...pagination,
      skip: pagination.limit * (newCurrentPage - 1),
      currentPage: newCurrentPage,
    });
  };

  const handleChangeFilter = (list) => {
    setPagination({
      skip: 0,
      limit: 2,
      currentPage: 1,
    });
    setStudentsFilted(list);
  };

  const renderPagination = () => {
    const totalData = studentsFilted.length;
    const totalPage = Math.ceil(totalData / pagination.limit);

    return [...Array(totalPage).keys()].map((index) => {
      const numberPage = index + 1;
      return (
        <li
          key={index}
          className={
            pagination.currentPage === numberPage ? styles["active"] : ""
          }
          onClick={() => handleChangePagination(numberPage)}
        >
          {numberPage}
        </li>
      );
    });
  };

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["table"]}>
        <Table studentsFilted={studentsFilted} pagination={pagination} />
        <ul className={styles["pagination"]}>{renderPagination()}</ul>
      </div>
      <Filter setStudentsFilted={handleChangeFilter} students={students} />
    </div>
  );
};

export default ExamHooks;
