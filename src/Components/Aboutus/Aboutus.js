import Styles from "./Aboutus.module.css";
import image1 from "./opal-hookah-350x350.png";
import image2 from "./opal-luster-350x350.png";
import image3 from "./opal-pool-350x350.png";
import image4 from "./opal-sink-350x350.png";
import { motion } from "framer-motion";

const Aboutus = () => {
  return (
    <main className={Styles.container}>
      <section className={Styles.content}>
        <p>
          Opal company started its activity in 2012 in the field of design and
          manufacture of stone products (natural and artificial) and in this
          direction tried to offer quality products that can compete with
          foreign products to our dear customers. Opal Company, with its
          professional and experienced staff, strives to maintain and increase
          its brilliant history.
        </p>
        <div className={Styles.imgContainer}>
          <motion.img
            src={image1}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.img
            src={image2}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.img
            src={image3}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
          <motion.img
            src={image4}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        </div>
      </section>
    </main>
  );
};

export default Aboutus;
