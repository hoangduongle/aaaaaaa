import "./useredit.style.scss";
function UserEdit({ data, closeModel }) {
  return (
    <div className="modelBackground">
      <div className="form-popup">
        <form action="" className="form-container">
          <div className="left">
            <img
              className="avatar"
              src={
                "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/318004607_3295825100734176_5675291227991595834_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jQKb45OgkLsAX_018gV&tn=vMqjf36MtxNlOrCx&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDI5VI0Z700m42ejLmTOT19CMUsL_V3Pr0XbkAsVuNeuA&oe=63E48E92"
              }
              alt=""
            />
          </div>
          <div className="right">
            <label>Mã nhân viên:</label>
            <input type="text" defaultValue={data.staffId} readOnly />
            <label>
              Tên đăng nhập: <span className="proirity">*</span>
            </label>
            <input type="text" value={data.theAccountForStaff.accountId} />

            <label>Mật khẩu:</label>
            <input type="password" value={"0000000"} />

            <label>
              Họ và tên: <span className="proirity">*</span>
            </label>
            <input type="text" defaultValue={data.staffFullName} />

            <label>
              Chức danh: <span className="proirity">*</span>
            </label>
            <input type="text" value={data.theAccountForStaff.roleId} />

            <label>
              Email: <span className="proirity">*</span>
            </label>
            <input type="text" defaultValue={data.staffEmail} />

            <label>
              Số điện thoại: <span className="proirity">*</span>
            </label>
            <input
              type="text"
              defaultValue={data.theAccountForStaff.phoneNumber}
            />

            <label>
              Địa chỉ: <span className="proirity">*</span>
            </label>
            <input type="text" defaultValue={""} />

            <label>Trạng thái: </label>
            <br></br>
            <input className="checkBoxStatus type" type="checkbox" />

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
        </form>
      </div>
    </div>
  );
}

export default UserEdit;
