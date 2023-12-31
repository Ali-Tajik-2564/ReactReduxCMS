import React, { useEffect } from 'react';

import './Course.css';
import CourseBox from '../../components/CourseBox/CourseBox';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCoursesFormServer } from '../../Redux/reducers/CourseReducer';

export default function Courses() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.course);
  console.log(courses);
  useEffect(() => {
    dispatch(
      getCoursesFormServer('https://redux-cms.iran.liara.run/api/courses')
    );
  }, []);
  return (
    <div class="col-8 content px-0">
      <div class="content__wrapper d-flex flex-column align-content-between">
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

        <div class="products products-container">
          <div class="products__list products-wrapper">
            {courses.map((course) => (
              <CourseBox key={course.id} {...course} />
            ))}
          </div>
        </div>

        <div class="new-course d-flex gap-2">
          <button
            class="btn-custome btn-custome__blue"
            data-bs-toggle="modal"
            data-bs-target="#new-product">
            افزودن دوره جدید
          </button>
          <button
            class="btn-custome btn-custome__red"
            data-bs-toggle="modal"
            data-bs-target="#add-discount-all-product">
            اعمال تخفیف همه دوره‌ها
          </button>
          <button
            class="btn-custome btn-custome__green btn-modal-new-category"
            data-bs-toggle="modal"
            data-bs-target="#add-new-category">
            افزودن دسته بندی
          </button>
        </div>
      </div>
    </div>
  );
}
