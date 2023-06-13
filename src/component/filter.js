import React, { useEffect, useState } from "react";
import styles from "../examHooks/examHooks.module.scss";

function Filter({
  handleGenderChange,
  handleClassChange,
  handleNameValue,
  selectedGender,
  selectedClass,
  valueName,
}) {
  return (
    <div className={styles["filter"]}>
      <div>
        <label>Chọn theo </label>
        <select value={selectedGender} onChange={handleGenderChange}>
          <option value="">Giới tính</option>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </select>
        <select value={selectedClass} onChange={handleClassChange}>
          <option value="">Lớp</option>
          <option value="6A">6A</option>
          <option value="6B">6B</option>
          <option value="6C">6C</option>
        </select>
      </div>
      <div>
        <label> Nhập tên học sinh </label>
        <input type="text" value={valueName} onChange={handleNameValue} />
      </div>
    </div>
  );
}

export default Filter;
