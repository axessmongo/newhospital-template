import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Faq() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div>
 <section id="faq" className="faq section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
          
        </div>

        <ul className="faq-list">
          {faqData.map((faq, index) => (
            <li key={index}>
              <div
                data-bs-toggle="collapse"
                className="collapsed question"
                href={`#faq${index + 1}`}
              >
                {faq.question}
                <i className="bi bi-chevron-down icon-show"></i>
                <i className="bi bi-chevron-up icon-close"></i>
              </div>
              <div
                id={`faq${index + 1}`}
                className="collapse"
                data-bs-parent=".faq-list"
              >
                <p>{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
    </div>
  )
}
const faqData = [
    {
      question: 'How do I make an appointment at Unity Health Center?',
      answer:
        'You can make an appointment by calling our reception at [phone number] or booking online through our website.'
    },
    {
      question: 'What are your visiting hours?',
      answer:
        'We are open [days of the week] from [opening time] to [closing time]. Emergenc services are available 24/7.'
    },
    {
      question: 'Do you accept insurance plans?',
      answer:
        'Yes, we accept a wide range of insurance plans. Please contact our billing department for specific details.'
    },
    {
      question: 'Can I access my medical records online?',
      answer:
        'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
    },
    {
      question: 'What should I do in case of a medical emergency?',
      answer:
        'For emergencies, please call [emergency contact number] or visit our emergency department immediately.'
    },
    {
      question: 'Do you offer telemedicine consultations?',
      answer:
        'Yes, we offer telemedicine services for certain appointments. Please inquire with our reception for availability and scheduling.'
    }
  ];

export default Faq