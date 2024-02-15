import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from "@mui/icons-material/Person";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CommentIcon from "@mui/icons-material/Comment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import "./SideBar.css";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div className="sidebar">
      <span className="sidebar__logo">
        <h2 className="sidebar__logo-text">MY.PANEL</h2>
        <img
          className="sidebar__logo-img"
          src="./img/svg/logo.png"
          alt="logo"
        />
      </span>

      <ul className="sidebar-list">
        <li className="sidebar-item active">
          <Link to={"/"} className="sidebar-link">
            <DashboardIcon />
            داشبورد
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to={"/Account"} className="sidebar-link">
            <PersonIcon />
            حساب کاربری
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to={"/Analysis"} className="sidebar-link">
            <TrendingUpIcon />
            تجزیه و تحلیل
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to={"/Products"} className="sidebar-link">
            <AddShoppingCartIcon />
            محصولات
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to={"/Comments"} className="sidebar-link">
            <CommentIcon />
            نظرات
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to={"/Users"} className="sidebar-link">
            <PeopleAltIcon />
            کاربران
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to={"/Orders"} className="sidebar-link">
            <LocalMallIcon />
            سفارشات
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to={"/Discounts"} className="sidebar-link">
            <MonetizationOnIcon />
            تخفیف ها
          </Link>
        </li>
      </ul>
    </div>
  );
}
