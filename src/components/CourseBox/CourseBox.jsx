import React from 'react';

export default function CourseBox(props) {
  const { category, desc, discount, price, registersCount, title, id } = props;
  return (
    <div class="products__item">
      <img
        src="../../img/store/redux.png"
        alt="product-img-1"
        class="products__img"
      />
      <div class="products__details w-100">
        <div class="products__info">
          <h3 class="products__name">{title}</h3>
          <p class="products__short-desc">{desc}</p>
        </div>
        <div class="products__tags">
          <div class="products__boxes">
            <div class="products__price-box">
              <span class="fa fa-wallet"></span>

              <span class="product__teg-text">قیمت :</span>
              <span class="product__teg-text products__price-value">
                {price === 0 ? 'رایگان' : price.toLocaleString()}
              </span>
            </div>
            <div class="products__category-box">
              <span class="fa fa-folder"></span>

              <span class="product__teg-text">دسته بندی:</span>
              <span class="product__teg-text products__category">
                {category}
              </span>
            </div>
            <div class="products__shop-box">
              <span class="fa fa-users"></span>

              <span class="product__teg-text">تعداد فروش :</span>
              <span class="product__teg-text products__sell">
                {registersCount}
              </span>
            </div>
          </div>
          <div class="products__btns">
            <button class="btn btn-danger btn-lg">حذف</button>
            <button class="btn btn-info btn-lg">ویرایش</button>
          </div>
        </div>
      </div>

      <div class="product__discount-Box">{discount}%</div>
    </div>
  );
}
