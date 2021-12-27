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
          شرکت زیگورات فعالیت خود را از سال ۹۰ در زمینه طراحی و ساخت مصنوعات
          سنگی (طبیعی و مصنوعی) آغاز کرد و در این مسیر سعی شد محصولاتی با کیفیتی
          قابل رقابت با محصولات خارجی به مشتریان عزیز عرضه شود. شرکت زیگورات با
          کادری متخصص و مجرب می کوشد تا سابقه ی درخشان خود را حفظ و افزایش دهد.
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
