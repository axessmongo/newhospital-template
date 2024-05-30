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
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum
            quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui
            impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
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
      question: 'Non consectetur a erat nam at lectus urna duis?',
      answer:
        'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.'
    },
    {
      question: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
      answer:
        'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
    },
    {
      question: 'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi?',
      answer:
        'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis.'
    },
    {
      question: 'Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?',
      answer:
        'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.'
    },
    {
      question: 'Tempus quam pellentesque nec nam aliquam sem et tortor consequat?',
      answer:
        'Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.'
    },
    {
      question: 'Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor?',
      answer:
        'Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.'
    }
  ];

export default Faq