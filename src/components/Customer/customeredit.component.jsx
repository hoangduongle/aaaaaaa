import React from "react";
import "./customeredit.style.scss";
import logo from "../../img/test.jpg";
function CustomerEdit() {
  return (
    <div className="customer-edit">
      <div className="customer-edit_image">
        <img src={logo} alt="Logo" />
      </div>
      <div className="customer-edit_infor">
        <form className="frm-customer-edit">
          <label className="customer-edit_label">
            Mã khách hàng:
            <input type="text" />
          </label>
          <label className="customer-edit_label">
            Tên khách hàng: <span className="proirity">*</span>
            <input type="text" />
          </label>
          <label className="customer-edit_label">
            Số điện thoại: <span className="proirity">*</span>
            <input type="text" />
          </label>
          <label className="customer-edit_label">
            Địa chỉ: <span className="proirity">*</span>
            <input type="text" />
          </label>
          <label className="customer-edit_label">
            Email: <span className="proirity">*</span>
            <input type="text" />
          </label>
          <label className="customer-edit_label">
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

export default CustomerEdit;
