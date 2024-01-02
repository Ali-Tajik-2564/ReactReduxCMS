import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { useEffect } from 'react';
import { RemoveUsersFormServer } from '../../Redux/reducers/UserReducer';
import { useDispatch } from 'react-redux';
export default function UserItem(props) {
  const { lastname, firstname, username, email, _id, city, age } = props;
  const [isShowModal, setIsShowModal] = useState(false);
  const dispatch = useDispatch();
  const RemoveUser = (userID) => {
    swal({
      title: 'ایا از حذف خود مطمن هستید؟',
      icon: 'warning',
      buttons: ['خیر', 'بله'],
    }).then((res) => {
      console.log(res);
      if (res) {
        dispatch(
          RemoveUsersFormServer(
            `https://redux-cms.iran.liara.run/api/users/${userID}`
          )
        );
      }
    });
  };
  return (
    <>
      <div
        className={`modal ${isShowModal ? 'show-modal' : null}`}
        id="show-info-modal">
        <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">جزئیات</h4>
              <button
                type="button"
                class="btn-close py-0"
                data-bs-dismiss="modal"></button>
            </div>

            <div class="modal-body position-relative">
              <form action="#" class="form row mx-0">
                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-user form__icon icon-name-article"></span>
                  <input
                    type="text"
                    name=""
                    id="firstname"
                    value={`نام: ${firstname}`}
                    class="form-control form__input input-user-firstname"
                    readonly
                  />
                  <label for="firstname" class="form__label my-0">
                    نام{' '}
                  </label>
                </div>

                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-users form__icon"></span>
                  <input
                    type="text"
                    name=""
                    value={`نام خانوادگی: ${lastname}`}
                    id="lastname"
                    class="form-control form__input input-user-lastname"
                    readonly
                  />
                  <label for="lastname" class="form__label my-0">
                    نام خانوادگی
                  </label>
                </div>

                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-user form__icon"></span>
                  <input
                    lang="en"
                    type="text"
                    name=""
                    value={`نام کاربری: ${username}`}
                    id="username"
                    class="form-control form__input input-user-username"
                    readonly
                  />
                  <label for="username" class="form__label my-0">
                    نام کاربری
                  </label>
                </div>

                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-globe form__icon"></span>
                  <input
                    lang="en"
                    type="email"
                    name=""
                    value={`ایمیل: ${email}`}
                    id="email"
                    class="form-control form__input input-user-email"
                    readonly
                  />
                  <label for="email" class="form__label my-0" lang="en">
                    ایمیل
                  </label>
                </div>

                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-key form__icon"></span>
                  <input
                    type="text"
                    name=""
                    id="text"
                    value={`شهر: ${city}`}
                    class="form-control form__input input-user-password"
                    readonly
                  />
                  <label for="password" class="form__label my-0">
                    {' '}
                    شهر
                  </label>
                </div>
                <div class="form__box-input col-12 px-2">
                  <span class="fa fa-wallet form__icon"></span>
                  <input
                    type="text"
                    name=""
                    value={`سن: ${age}`}
                    id="count-product"
                    class="form-control form__input input-user-product"
                    readonly
                  />
                  <label for="count-product" class="form__label my-0">
                    سن
                  </label>
                </div>
              </form>
            </div>

            <div class="modal-footer">
              <button
                class="btn btn-danger btn-lg"
                data-bs-dismiss="modal"
                onClick={() => setIsShowModal(false)}>
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="uesrs__item">
        <div class="users__info">
          <img
            src="../../img/admin/profile/banana.png"
            alt="photo user"
            class="users__img"
          />
          <div class="users__details">
            <p class="users__name my-0">
              {firstname} {lastname}
            </p>
            <p lang="en" class="users__email">
              {email}
            </p>
          </div>
        </div>
        <div class="users__btns">
          <button class="btn-custome btn-custome--gray">پیام ها</button>
          <button
            class="btn-custome btn-custome__blue"
            onClick={() => setIsShowModal(true)}>
            اطلاعات
          </button>
          <button
            class="btn-custome btn-custome__red"
            onClick={() => RemoveUser(_id)}>
            حذف
          </button>
        </div>
      </div>
    </>
  );
}
