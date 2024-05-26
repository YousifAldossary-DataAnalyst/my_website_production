import "./contact.scss";
import { motion, useInView } from "framer-motion";
import message from "./SVG/message.gif";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contactlist = [
  {
    id: 1,
    item: "Mail",
    text: "ym-d@hotmail.com",
  },
  {
    id: 2,
    item: "Address",
    text: "Dhahran, Saudi Arabia",
  },
  {
    id: 3,
    item: "phone",
    text: "+966556171075",
  },
];

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggeredChildren: 0.1,
    },
  },
};
export const Contact = () => {
  const ref = useRef();

  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_gnwwwg2", "template_i8cux8b", formRef.current, "TSug4OIOqdVzwrBgc",
        )
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <div className="contactInfo">
      <h1 className="Title">Contact</h1>
      <motion.div
        className="contact"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="textcotainer" variants={variants}>
          <motion.h1 variants={variants}>Let's get in touch</motion.h1>
          <motion.div className="items" variants={variants}>
            {Contactlist.map((item) => (
              <div key={item.id}>
                <h2>{item.item}</h2>
                <span>{item.text}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <div className="formContainer">
          <motion.div
            className="phoneSvg"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0, x:500 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <motion.img
              src={message}
              alt="loading..."
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ delay: 3, duration: 1 }}
            />
          </motion.div>
          <motion.form
            onSubmit={sendEmail}
            ref={formRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <input type="text" required placeholder="Name" name="name" />
            <input type="email" required placeholder="Email" name="email" />
            <textarea rows={8} placeholder="Message" name="message" />
            <button>Send</button>
            {error && "Error"}
            {success && "Success"}
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
};
