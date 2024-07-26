import React, { useContext, useEffect, useState } from "react";
import "./SectionDiscount.scss";
import imageForm from "/src/assets/images/imageForm.jpeg";
import { ThemeContext } from "../../Theme/ThemeContext";
import { useForm } from "react-hook-form";
import Modal from "../../Modal/Modal/Modal";
import { IoMdClose } from "react-icons/io";

const SectionDiscount = () => {
  const { theme } = useContext(ThemeContext);

  // состояние отвечающее за видимость модального окна
  const [modalActive, setModalActive] = useState(false);

  // состояние отвечающее за отправку ответа на сервер
  const [isResponce, setIsResponce] = useState(false);

  //создание хука useForm
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
    },
  });

  // useEffect для отслеживания отправки формы и сброса данных в инпутах
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

  // создаем ф-ю onSubmit и вешаем ее на форму
  const onSubmit = (data) => {
    // отправка данных на сервер
    const fetchApi = async () => {
      const res = await fetch("https://exam-server-5c4e.onrender.com/sale/send", {
        method: "POST",
        body: JSON.stringify({ ...data }),
      });
      const results = await res.json();
      console.log(results.status);
      console.log(res);
      if (res.ok) {
        setIsResponce(!isResponce);
      } else {
        throw new Error(results);
      }
    };

    fetchApi();
  };

  return (
    <section className={`discount ${theme ? "discount-dark" : "discount-light"}`}>
      <div className="container">
        <div className="discount__form">
          <h3>5% off on the first order</h3>
          <div className="discount__content">
            {/* <div> */}
            <img src={imageForm} alt="Hands holding garden tools" />
            {/* </div> */}

            <div className="discount__form__container">
              <form onSubmit={handleSubmit(onSubmit)}>
                {errors.name && <span className="alert">{errors.name?.message}</span>}
                <input
                  type="text"
                  placeholder="Name"
                  {...register("name", {
                    required: "name is required",
                    maxLength: 30,
                  })}
                />
                {errors.name && <span className="alert">{errors.phone?.message}</span>}
                <input
                  type="tel"
                  placeholder="Phone number"
                  {...register("phone", {
                    required: "phone is required",
                    maxLength: 30,
                  })}
                />
                {errors.name && <span className="alert">{errors.email?.message}</span>}
                <input
                  type="email"
                  placeholder="e-mail"
                  {...register("email", {
                    required: "email is required",
                  })}
                />
                <button type="submit" onClick={() => setModalActive(true)}>
                  Get a discount
                </button>
              </form>
            </div>
          </div>
        </div>
        {isResponce && (
          <Modal active={modalActive} setActive={setModalActive} setResponce={setIsResponce}>
            <div className="modalCart">
              <div className="modalCart__description">
                <h3>Congratulations!</h3>
                <p>
                  You have a discount coupon 5%.
                </p>
              </div>
              <div className="modalCart__close">
                <IoMdClose
                  onClick={() => {
                    setModalActive(false);
                    setIsResponce(false);
                  }}
                />
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  );
};

export default SectionDiscount;
