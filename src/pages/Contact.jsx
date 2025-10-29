// // import React from "react";
// // import "../styles/contact.scss";
// // import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

// // const Contact = () => {
// //   return (
// //     <section className="contact-section py-5">
// //       <Container>
// //         {/* Header */}
// //         <div className="text-center mb-5">
// //           <h1 className="fw-bold">Get in Touch</h1>
// //           <p className="text-muted lead">
// //             Whether you’d like to collaborate, discuss a project, or just say hello — I’d love to hear from you.
// //           </p>
// //         </div>

// //         <Row className="align-items-center">
// //           {/* Contact Form */}
// //           <Col md={6}>
// //             <Card className="contact-card shadow-sm border-0 p-4">
// //               <Form>
// //                 <Form.Group className="mb-3">
// //                   <Form.Label>Name</Form.Label>
// //                   <Form.Control type="text" placeholder="Your Name" />
// //                 </Form.Group>

// //                 <Form.Group className="mb-3">
// //                   <Form.Label>Email</Form.Label>
// //                   <Form.Control type="email" placeholder="Your Email" />
// //                 </Form.Group>

// //                 <Form.Group className="mb-3">
// //                   <Form.Label>Message</Form.Label>
// //                   <Form.Control
// //                     as="textarea"
// //                     rows={4}
// //                     placeholder="Your Message"
// //                   />
// //                 </Form.Group>

// //                 <div className="text-center mt-4">
// //                   <Button variant="dark" type="submit" size="lg">
// //                     Send Message
// //                   </Button>
// //                 </div>
// //               </Form>
// //             </Card>
// //           </Col>

// //           {/* Map Section */}
// //           <Col md={6} className="mt-4 mt-md-0">
// //             <div className="map-container shadow-sm">
// //               <iframe
// //                 title="Bangalore Map"
// //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.296333178142!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f5d81b3b%3A0x79bfe7ec8e8a5dfc!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1696510000000!5m2!1sen!2sin"
// //                 width="100%"
// //                 height="400"
// //                 style={{ border: 0 }}
// //                 allowFullScreen=""
// //                 loading="lazy"
// //               ></iframe>
// //             </div>
// //           </Col>
// //         </Row>

// //         {/* Contact Info */}
// //         <Row className="text-center mt-5">
// //           <Col>
// //             <h5>Location</h5>
// //             <p className="text-muted">Bangalore, India</p>
// //           </Col>
// //           <Col>
// //             <h5>Email</h5>
// //             <p className="text-muted">
// //               <a href="mailto:udeshya.kumar30@email.com">udeshya.kumar30@email.com</a>
// //             </p>
// //           </Col>
// //           <Col>
// //             <h5>Connect</h5>
// //             <p className="text-muted">
// //               <a href="https://github.com/Udeshya30" target="_blank" rel="noreferrer">GitHub</a> ·{" "}
// //               <a href="https://www.linkedin.com/in/udeshyakumar" target="_blank" rel="noreferrer">LinkedIn</a>
// //             </p>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </section>
// //   );
// // };

// // export default Contact;









// import React, { useState } from "react";

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setStatus("Sending...");

//       const response = await fetch(
//         "https://script.google.com/macros/s/AKfycbwBSVrM2IRgzVaNOOPtJKYuwmZPA1MtpnvNP9gEj6qpQQjctZKimjlu-Ot_RIDzkS4j/exec", // your deployed web app URL
//         {
//           method: "POST",
//           mode: "no-cors", // ✅ avoids CORS block for localhost
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         }
//       );

//       setStatus("Thank you! Your message has been sent.");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (err) {
//       console.error("Error:", err);
//       setStatus("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md transition-all duration-300 hover:shadow-2xl"
//       >
//         <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
//           Contact Me
//         </h2>

//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//           className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />

//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />

//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//           className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           rows="5"
//         ></textarea>

//         <button
//           type="submit"
//           className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
//         >
//           Send Message
//         </button>

//         {status && (
//           <p className="text-center mt-4 text-sm text-gray-600">{status}</p>
//         )}
//       </form>
//     </div>
//   );
// }




import React, { useState } from "react";
import "../styles/contact.scss";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwBSVrM2IRgzVaNOOPtJKYuwmZPA1MtpnvNP9gEj6qpQQjctZKimjlu-Ot_RIDzkS4j/exec",
        {
          method: "POST",
          mode: "no-cors", // ✅ Needed for localhost or client-side call
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      setStatus("Thanks for your message! I’ll be in touch with you shortly.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="contact-section py-5">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Get in Touch</h1>
          <p className="text-muted lead">
            Whether you’d like to collaborate, discuss a project, or just say
            hello — I’d love to hear from you.
          </p>
        </div>

        <Row className="align-items-center">
          {/* Contact Form */}
          <Col md={6}>
            <Card className="contact-card shadow-sm border-0 p-4">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your Message"
                    required
                  />
                </Form.Group>

                <div className="text-center mt-4">
                  <Button variant="dark" type="submit" size="lg">
                    Send Message
                  </Button>
                </div>

                {status && (
                  <p className="text-center mt-3 text-muted small">{status}</p>
                )}
              </Form>
            </Card>
          </Col>

          {/* Map Section */}
          <Col md={6} className="mt-4 mt-md-0">
            <div className="map-container shadow-sm">
              <iframe
                title="Bangalore Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.296333178142!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f5d81b3b%3A0x79bfe7ec8e8a5dfc!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1696510000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* Contact Info */}
        <Row className="text-center mt-5">
          <Col>
            <h5>Location</h5>
            <p className="text-muted">Bangalore, India</p>
          </Col>
          <Col>
            <h5>Email</h5>
            <p className="text-muted">
              <a href="mailto:udeshya.kumar30@email.com">
                udeshya.kumar30@email.com
              </a>
            </p>
          </Col>
          <Col>
            <h5>Connect</h5>
            <p className="text-muted">
              <a
                href="https://github.com/Udeshya30"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>{" "}
              ·{" "}
              <a
                href="https://www.linkedin.com/in/udeshyakumar"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
