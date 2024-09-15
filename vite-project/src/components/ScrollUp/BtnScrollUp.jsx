import React, { useState, useEffect } from 'react';
import './BtnScrollUp.scss';

function BtnScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

  // Функция для обработки прокрутки страницы
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Обработчик для прокрутки страницы вверх
  const handlerScrollUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  // useEffect для добавления и удаления слушателя прокрутки
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className={'up'} onClick={handlerScrollUp}>&#9650;</div>
      )}
    </>
  );
}

export default BtnScrollUp;
