import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <>
    <div className="page-title">
      <div className="heading">
        <div className="container">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-8">
              <h1>Privacy Policy</h1>
              <p className="mb-0">At <strong>Planet1</strong>, your privacy is our priority. This Privacy Policy outlines how we collect, use, and protect your information when you use our services. By accessing or using our website, you consent to the practices described in this policy.</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li><Link to="/">Home</Link></li>
            <li className="current">Privacy Policy</li>
          </ol>
        </div>
      </nav>
    </div>
    <div className="page-title">
    <div className="heading">
      <div className="container">
        <div className="row d-flex">
          <div className="col-lg-12" style={{ padding: "0 100px" }}>
            <h5>1. Information We Collect</h5>
            <p>We collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information: </strong>Name, email address, phone number, and payment details provided when you sign up or use our services.</li>
              <li><strong>Usage Data: </strong>Information on how you use our website, such as IP address, browser type, pages visited, and session duration.</li>
              <li><strong>Cookies: </strong>Data collected through cookies and similar technologies to improve your experience.</li>
            </ul>
            <hr />

            <h5>2. How We Use Your Information</h5>
            <p>We use the information collected to:</p>
            <ul>
              <li>Provide and improve our services.</li>
              <li>Process payments and manage subscriptions.</li>
              <li>Communicate with you regarding updates, promotions, and customer support.</li>
              <li>Ensure the security and proper functioning of our platform.</li>
            </ul>
            <hr />

            <h5>3. Sharing of Information</h5>
            <p>We respect your privacy and only share your information when necessary:</p>
            <ul>
              <li><strong>With Service Providers: </strong>For payment processing, hosting, and analytics purposes.</li>
              <li><strong>For Legal Compliance: </strong>When required by law or to protect our legal rights.</li>
              <li><strong>With Your Consent: </strong>For purposes explicitly approved by you.</li>
            </ul>
            <hr />

            <h5>4. Cookies and Tracking Technologies</h5>
            <ul>
              <li>We use cookies to enhance your user experience, analyze website performance, and deliver personalized content.</li>
              <li>You can manage cookie preferences through your browser settings.</li>
            </ul>
            <hr />

            <h5>5. Data Protection</h5>
            <p>We implement strict measures to protect your data, including:</p>
            <ul>
              <li>Encryption of sensitive information.</li>
              <li>Secure storage and restricted access to your data.</li>
              <li>Regular security assessments to safeguard our systems.</li>
            </ul>
            <hr />

            <h5>6. Your Rights</h5>
            <p>You have the following rights regarding your data:</p>
            <ul>
              <li><strong>Access: </strong>Request access to the personal data we hold about you.</li>
              <li><strong>Correction: </strong>Correct any inaccurate or incomplete data.</li>
              <li><strong>Deletion: </strong>Request the deletion of your data under certain circumstances.</li>
              <li><strong>Opt-Out: </strong>Unsubscribe from promotional emails or refuse certain data uses.</li>
            </ul>
            <hr />

            <h5>7. Third-Party Links</h5>
            <ul>
              <li>Our website may contain links to third-party sites. We are not responsible for their privacy practices and recommend reviewing their privacy policies.</li>
            </ul>
            <hr />

            <h5>8. Children's Privacy</h5>
            <ul>
              <li>Our services are not intended for children under 13. We do not knowingly collect personal information from children.</li>
            </ul>
            <hr />

            <h5>9. Updates to This Policy</h5>
            <ul>
              <li>We may update this Privacy Policy periodically. Changes will be effective immediately upon posting on this page.</li>
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

export default PrivacyPolicy;