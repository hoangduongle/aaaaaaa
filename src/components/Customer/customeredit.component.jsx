import React from "react";
function CustomerEdit({ data, closeModel }) {
  return (
    <div className="modelBackground">
      <div className="form-popup" style={{ top: "15%" }}>
        <form action="" className="form-container">
          <div className="left">
            <img
              className="avatar"
              src={
                "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/318004607_3295825100734176_5675291227991595834_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jQKb45OgkLsAX_018gV&tn=vMqjf36MtxNlOrCx&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDI5VI0Z700m42ejLmTOT19CMUsL_V3Pr0XbkAsVuNeuA&oe=63E48E92"
              }
              alt=""
            />
            <div className="right">
              <label>Mã khách hàng:</label>
              <input type="text" value={"data.customerId"} readOnly />
              <label>Tên khách hàng:</label>
              <input type="text" defaultValue={"data.customerName"} />
              <label>Số điện thoại:</label>
              <input type="text" defaultValue={"data.theAccount.phoneNumber"} />
              <label>Địa chỉ:</label>
              <input type="text" defaultValue={"data.address"} />
              <label>Email:</label>
              <input type="text" defaultValue={"data.email"} />
              <label>Trạng thái: </label>
              <br></br>
              <input className="checkBoxStatus type" type="checkbox" />
              {/* theAccount.status */}
              <div style={{ display: "flex", float: "right" }}>
                <button type="submit" className="btn">
                  Lưu
                </button>
                <button
                  type="button"
                  className="btn cancel"
                  onClick={() => closeModel(false)}
                >
                  Huỷ
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerEdit;
