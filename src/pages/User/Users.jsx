import React, { useEffect } from 'react';
import './User.css';
import { Link } from 'react-router-dom';
import UserItem from '../../components/UserItem/UserItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  RemoveUsersFormServer,
  getUsersFormServer,
} from '../../Redux/reducers/UserReducer';
import swal from 'sweetalert';
export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(getUsersFormServer('https://redux-cms.iran.liara.run/api/users/'));
  }, []);

  return (
    <div class="col-8 content px-0">
      <div class="content__wrapper">
        <ul class="content__tabs">
          <li class="content__tab">
            <Link to="/users" class="content__tab-link">
              <span class="fa fa-user"></span>
              کاربران
            </Link>
          </li>
          <li class="content__tab">
            <Link to="/infos" class="content__tab-link">
              <span class="fa fa-book"></span>
              اطلاعات
            </Link>
          </li>
          <li class="content__tab">
            <Link to="/courses" class="content__tab-link">
              <span class="fa fa-store"></span>
              دوره‌ها
            </Link>
          </li>

          <li class="content__tab">
            <Link to="/articles" class="content__tab-link">
              <span class="fa fa-newspaper"></span>
              وبلاگ
            </Link>
          </li>
        </ul>

        <div class="users">
          <form action="#" class="form row justify-content-between gap-3 mx-0">
            <div class="form__box-input col-8 px-0">
              <span class="fa fa-search form__icon form__icon-search"></span>

              <input
                type="search"
                name=""
                id="search"
                placeholder="نام یا ایمیل کاربر را وارد کنید "
                class="form-control form__input"
                required
              />
            </div>
            <button type="reset" class="btn-custome btn-custome--gray col-3">
              حذف کاربر
            </button>
          </form>

          <div class="users__list-container">
            <div class="users__list users__list-wrapper">
              {users.map((user) => (
                <UserItem key={user.id} {...user} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
