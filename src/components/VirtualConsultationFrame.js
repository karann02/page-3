import "./VirtualConsultationFrame.css";

const VirtualConsultationFrame = () => {
  return (
    <div className="virtual-consultation-frame">
      <div className="virtual-consultation-frame-child" />
      <div className="invoice-frame">
        <h2 className="overview1">Overview</h2>
      </div>
      <div className="invoice-frame1">
        <h2 className="profile1">Profile</h2>
      </div>
      <div className="invoice-frame2">
        <h2 className="appointments1">Appointments</h2>
      </div>
      <div className="invoice-frame3">
        <h2 className="history1">History</h2>
      </div>
      <div className="invoice-frame4">
        <div className="videos-parent">
          <h3 className="videos1">Videos</h3>
          <h3 className="videos-library1">Videos Library</h3>
        </div>
      </div>
      <div className="invoice-frame5">
        <h2 className="messages1">Messages</h2>
      </div>
      <div className="invoice-frame6">
        <h2 className="support1">Support</h2>
      </div>
      <div className="invoice-frame7">
        <div className="faqs-parent">
          <h3 className="faqs1">FAQ’s</h3>
          <h3 className="procedure-information1">Procedure Information</h3>
        </div>
      </div>
      <div className="invoice-frame8">
        <h2 className="aftercare1">Aftercare</h2>
      </div>
      <div className="invoice-frame9">
        <h3 className="quizzes1">Quizzes</h3>
        <h3 className="health-skin1">{`Health & Skin Assesment`}</h3>
      </div>
      <div className="previews-section">
        <div className="skin-club-logo-frame">
          <h2 className="finances1">Finances</h2>
        </div>
        <button className="doctor-name-frame">
          <div className="doctor-name-frame-child" />
          <div className="virtual-consultation1">Virtual Consultation</div>
        </button>
      </div>
    </div>
  );
};

export default VirtualConsultationFrame;
