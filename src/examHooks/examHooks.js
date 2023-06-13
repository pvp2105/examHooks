import React, { useEffect, useState } from "react";
import styles from "./examHooks.module.scss";
import Table from "../component/table";
import Filter from "../component/filter";

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

  const [selectedGender, setSelectedGender] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [valueName, setValueName] = useState("");

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };
  const handleNameValue = (event) => {
    setValueName(event.target.value);
  };
  useEffect(() => {
    const isAllGender = selectedGender === "";
    const isAllClass = selectedClass === "";
    const isAllName = valueName === "";
    setStudentsFilted(
      students.filter((student) => {
        //students.filter: filter trên bản gốc
        const lowerStudentName = student.name.toLowerCase();
        const lowerValueName = valueName.toLowerCase();
        return (
          (isAllGender && isAllClass && isAllName) ||
          (student.gender === selectedGender && isAllClass && isAllName) ||
          (isAllGender && student.class === selectedClass && isAllName) ||
          (isAllGender &&
            isAllClass &&
            lowerStudentName.includes(lowerValueName)) ||
          (isAllGender &&
            student.class === selectedClass &&
            lowerStudentName.includes(lowerValueName)) ||
          (student.gender === selectedGender &&
            isAllClass &&
            lowerStudentName.includes(lowerValueName)) ||
          (student.gender === selectedGender &&
            student.class === selectedClass &&
            isAllName) ||
          (student.gender === selectedGender &&
            student.class === selectedClass &&
            lowerStudentName.includes(lowerValueName))
        );
      })
    );
  }, [selectedGender, selectedClass, valueName]);

  // const memoValue = useMemo(() => {
  //   const newData = [...students];
  //   const isAllGender = selectedGender === "";
  //   const isAllClass = selectedClass === "";
  //   return newData.filter((item) => {
  //     return (
  //       (isAllGender && isAllClass && isAllName) ||
  // (student.gender === selectedGender && isAllClass && isAllName) ||
  // (isAllGender && student.class === selectedClass && isAllName) ||
  // (isAllGender &&
  //   isAllClass &&
  //   lowerStudentName.includes(lowerValueName)) ||
  // (isAllGender &&
  //   student.class === selectedClass &&
  //   lowerStudentName.includes(lowerValueName)) ||
  // (student.gender === selectedGender &&
  //   isAllClass &&
  //   lowerStudentName.includes(lowerValueName)) ||
  // (student.gender === selectedGender &&
  //   student.class === selectedClass &&
  //   isAllName) ||
  // (student.gender === selectedGender &&
  //   student.class === selectedClass &&
  //   lowerStudentName.includes(lowerValueName))
  //     );
  //   });
  // }, [selectedGender, selectedClass]);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["table"]}>
        <Table studentsFilted={studentsFilted} />
      </div>
      <Filter
        handleGenderChange={handleGenderChange}
        handleClassChange={handleClassChange}
        handleNameValue={handleNameValue}
        selectedGender={selectedGender}
        selectedClass={selectedClass}
        valueName={valueName}
      />
    </div>
  );
};

export default ExamHooks;
