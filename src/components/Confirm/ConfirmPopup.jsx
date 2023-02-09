import "./ConfirmPopup.scss";

function ConfirmPopup({ closeModel, title, btnYes, btnNo, id }) {
  return (
    <div className="modelBackground">
      <div className="confirm-container">
        <h3>Thông báo</h3>
        <p>{title}</p>
        <div className="confirm-button">
          <button type="submit" className="btn">
            {btnYes}
          </button>
          <button
            type="button"
            className="btn cancel"
            onClick={() => closeModel(false)}
          >
            {btnNo}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmPopup;
