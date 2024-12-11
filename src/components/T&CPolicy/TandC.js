import React from 'react';
import { Link } from 'react-router-dom';


const TandC = () => {
  return (
    <>
      <div className="page-title">
        <div className="heading">
          <div className="container">
            <div className="row d-flex justify-content-center text-center">
              <div className="col-lg-8">
                <h1>Terms and Conditions</h1>
                <p className="mb-0">Welcome to <strong>Planet1</strong>! These Terms and Conditions outline the rules and regulations for using our website and services. By accessing or using Planet1, you agree to comply with these terms. If you do not agree, please do not use our services.</p>
              </div>
            </div>
          </div>
        </div>
        <nav className="breadcrumbs">
          <div className="container">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li className="current">Terms and Conditions</li>
            </ol>
          </div>
        </nav>
      </div>
      <div className="page-title">
        <div className="heading">
          <div className="container">
            <div className="row d-flex">
              <div className="col-lg-12" style={{ padding: "0 100px" }}>
                <h5>1. Introduction</h5>
                <ul>
                  <li>These terms govern your use of Planet1 and its services.</li>
                  <li>The terms "we," "our," or "us" refer to Planet1, while "you" refers to the user.</li>
                </ul>
                <hr />

                <h5>2. Use of Services</h5>
                <ul>
                  <li>You agree to use our services responsibly and only for lawful purposes.</li>
                  <li>Unauthorized use, including hacking, scraping, or distributing malicious content, is strictly prohibited.</li>
                </ul>
                <hr />

                <h5>3. Intellectual Property</h5>
                <ul>
                  <li>All content, designs, and features provided by Planet1 are our intellectual property.</li>
                  <li>You are not permitted to replicate, distribute, or use our intellectual property without prior written consent.</li>
                </ul>
                <hr />

                <h5>4. Payments and Subscriptions</h5>
                <ul>
                  <li>Payments for services must be made as per the selected plan (monthly or contract-based).</li>
                  <li>All fees are non-refundable unless stated otherwise in our Refund Policy.</li>
                  <li>Planet1 reserves the right to modify pricing or features with prior notice.</li>
                </ul>
                <hr />

                <h5>5. Termination of Services</h5>
                <ul>
                  <li>We reserve the right to suspend or terminate services if these terms are violated.</li>
                  <li>You may cancel services at any time, but no refunds will be provided for unused portions of the term.</li>
                </ul>
                <hr />

                <h5>6. Liability Limitations</h5>
                <ul>
                  <li>Planet1 is not liable for any direct, indirect, or consequential damages arising from the use of our services.</li>
                  <li>While we strive to provide secure and reliable services, we do not guarantee uninterrupted or error-free access.</li>
                </ul>
                <hr />

                <h5>7. Privacy and Data Protection</h5>
                <ul>
                  <li>Your privacy is important to us. Refer to our Privacy Policy for detailed information on data collection and usage.</li>
                </ul>
                <hr />

                <h5>8. Amendments to Terms</h5>
                <ul>
                  <li>Planet1 reserves the right to update these Terms and Conditions at any time.</li>
                  <li>Continued use of our services constitutes your acceptance of any changes.</li>
                </ul>
                <hr />

                <h5>9. Governing Law</h5>
                <ul>
                  <li>These terms are governed by the laws of India, without regard to its conflict of law principles.</li>
                </ul>
                <hr />

                <h5>10. Contact Us</h5>
                <p>If you have any questions about these terms, please contact us at:</p>
                <ul>
                  <li>Email: <Link to='mailto:planet1@outlook.com'>planet1@outlook.com</Link></li>
                  <li>Phone: <Link to='tel:9637744229'>+91 96377 44229</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default TandC;