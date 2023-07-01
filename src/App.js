import './App.css';


function App() {
  const handleDownloadClick = () => {
    // Redirect user to the Play Store download page
    window.location.href = 'https://play.google.com/store/apps/details?id=com.victaman.designmyhouse';
  };
  return (
    <div className="App" id='App'>
      <div className="content-wrapper">
        <div className="image-wrapper">
          <img src="https://github.com/avi-nas/designmyhouse/blob/gh-pages/coverimage%20(2).png?raw=true" alt="App Screenshot" className='coverImg' />
        </div>
        <div>

          <div className='navHome'><a >Home</a></div>
          <div className='navContect'><a href='#copyright'>Contact</a></div>
          <div className="logo-wrapper">
            <img src="https://github.com/avi-nas/designmyhouse/blob/gh-pages/DMH-Logo.png?raw=true" alt="Logo" className="logo" />
          </div>
        </div>
        <div className="text-wrapper">
          
          <div className='description'>
            <p>
            <h1>Design My House</h1>
              Design My House is the planning wing of SIPL (Sawna Infrabuild Private Limited). SIPL is a registered construction company that provides complete housing solutions starting from Planning to Finishing (Naksha se Nirman tak). SIPL has been reputedly in the market since 1999.
              Designmyhouse.app has an innovative & expert team of Professional Architects/Engineers who are providing customer satisfaction-oriented services with the undermentioned specifications:
            </p>
            <div className='buttonClass'>
            <button onClick={handleDownloadClick} >
            <img src="https://github.com/avi-nas/designmyhouse/blob/gh-pages/123.png?raw=true" alt="App Screenshot" className='screenshot' />
          </button>
          </div>
          </div>
          
        </div>

      </div>
      <div className='my-footer' style={{ width: '99vw' }}>
        <div class="row narrow section-intro with-bottom-sep animate-this fadeInUp animated">
          <div class="col-twelve">
            <h3>Contact</h3>
            <h2 color='black'>Get In Touch</h2>
            <div class="lead">Give us a call on <i class="fa fa-phone-square"></i><a class="links" href="tel:08409404033">+91-8409404033</a>  or drop mail at <i class="fa fa-envelope-square"></i><a href="mailto:ask2designmyhouse@gmail.com">ask2designmyhouse@gmail.com</a> by anytime, we endeavour to answer all enquiries within 24 hours on business days.</div>
            <div>Designed And Developed by <a href='https://www.victaman.com/'>Victaman Services Pvt. Ltd</a></div>
            <div class="copyright" id='copyright'>
              <span >© Copyright Sawna Infrabuild Pvt. Ltd 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>




  );
}

export default App;
