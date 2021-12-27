import { NavLink } from "react-router-dom";
import Style from "./Footer.module.css";
import { BsInstagram, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

const Footer = () => {
  return (
    <section className={Style.footerContainer}>
      <footer className={Style.footer}>
        <div className={Style.contact}>
          <div className={Style.contactItem}>
            <a href="https://goo.gl/maps/zcHtVa4CmPGjUKWm8" target="_blank">
              <BiMap />
            </a>
            <h5>61 West Rock Maple Court, New York</h5>
          </div>
          <div className={Style.contactItem}>
            <a href="mailto:mahdizafari.mz@gmail.com">
              <AiOutlineMail />
            </a>
            <h5>mahdizafari.mz@gmail.com</h5>
          </div>
          <div className={Style.contactItem}>
            <a href="tel:0912-111-1111">
              <FiPhoneCall />
            </a>
            <h5>(+98) 9121111111</h5>
          </div>
        </div>
        <div className={Style.content}>
          <p>
            Due to differences in materials, processes and design fidelity, it
            is possible that a prototype may fiail to perform acceptably whereas
            the production design may have been sound
          </p>
        </div>
        <div className={Style.socialNetwork}>
          <div className={Style.iconContainer}>
            <a href="https://instagram.com/mahdizafarii" target="_blank">
              <BsInstagram color="#fff" />
            </a>
            <a href="#">
              <BsFacebook color="#fff" />
            </a>
            <a href="#">
              <BsWhatsapp color="#fff" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
