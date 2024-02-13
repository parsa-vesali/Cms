import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PersonIcon from '@mui/icons-material/Person';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CommentIcon from "@mui/icons-material/Comment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import "./SideBar.css";
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
          <a href="#" className="sidebar-link">
            <DashboardIcon />
            داشبورد
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <PersonIcon />
             حساب کاربری
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <TrendingUpIcon />
            تجزیه و تحلیل
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <AddShoppingCartIcon />
            محصولات
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <CommentIcon />
            نظرات
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <PeopleAltIcon />
            کاربران
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <LocalMallIcon />
            سفارشات
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <MonetizationOnIcon />
            تخفیف ها
          </a>
        </li>
      </ul>
      
    </div>
  );
}
