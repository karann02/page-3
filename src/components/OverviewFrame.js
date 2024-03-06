import "./OverviewFrame.css";

const OverviewFrame = () => {
  return (
    <header className="overview-frame">
      <div className="overview-frame-child" />
      <div className="appointments-frame">
        <img
          className="skinclublogo-logotype-white-1-icon1"
          loading="lazy"
          alt=""
          src="/skinclublogo-logotype-white-1@2x.png"
        />
      </div>
      <div className="messages-frame">
        <div className="support-frame">
          <h3 className="sunday-20-august1">Sunday, 20 August</h3>
        </div>
        <div className="pm1">1:50 PM</div>
        <div className="procedure-info-frame">
          <div className="procedure-info-frame-child" />
          <img
            className="health-assessment-frame1"
            loading="lazy"
            alt=""
            src="/vector3.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default OverviewFrame;
