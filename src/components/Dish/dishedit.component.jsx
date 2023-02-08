import React from "react";
import "./dishedit.style.scss";
import logo from "../../img/test.jpg";
function DishEdit() {
  return (
    <div className="dish-edit">
      <div className="dish-edit_image">
        <img src={logo} alt="Logo" />
      </div>
      <div className="dish-edit_infor">
        <form className="frm-dish-edit">
          <label className="dish-edit_label">
            Mã món ăn:
            <input type="text" disabled />
          </label>
          <label className="dish-edit_label">
            Tên món ăn: <span className="proirity">*</span>
            <input type="text" />
          </label>
          <label className="dish-edit_label">
            Giá (VNĐ): <span className="proirity">*</span>
            <input type="text" />
          </label>
          <label className="dish-edit_label">
            Địa chỉ: <span className="proirity">*</span>
            <input type="text" />
          </label>
          <label className="dish-edit_label">
            Mô tả: <span className="proirity">*</span>
            <textarea></textarea>
          </label>
          <label className="dish-edit_label">
            Trạng thái: <span className="proirity">*</span>
            <label className="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </label>
          <div className="action">
            <button type="submit" className="btn-success">
              Lưu
            </button>
            <button type="submit" className="btn-danger">
              Huỷ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default DishEdit;
