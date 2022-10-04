import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import useStickyHeader from "../../header/StickyHeader";
import NotificationData from "../../../data/dashboard/notification-data.json";
import { type } from "@testing-library/user-event/dist/type";

const DashboardHeader = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);
  const BrandLogo = "img/core-img/dashboard-logo.png";

  let [check] = useState(true);
  const sticky = useStickyHeader(10);
  const stickyClass = `${sticky && check ? "sticky-on" : ""}`;

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  const userDropdownData = [
    {
      path: "/start",
      icon: "bi-person-circle",
      text: "Start",
    },
    {
      path: "/settings",
      icon: "bi-gear",
      text: "Settings",
    },
  ];

  const userInfo = [
    {
      thumbnail: "img/bg-img/u2.jpg",
      username: "ID: 23537",
      userType: "Driver",
    },
  ];

  const balanceCard = [
    {
      title: "Current balance",
      icon: "img/core-img/ethereum.png",
      balance: 4.0678,
      balanceType: "ETH",
    },
  ];

  const AdminNav = [
    {
      id: 1,
      path: "/start",
      icon: "bi-speedometer",
      text: "Start",
    },
    {
      id: 2,
      path: "/notifications",
      icon: "bi-bell",
      text: "Notifications",
    },
  ];
  const UserNav = [
    {
      id: 1,
      path: "/Dashboard",
      icon: "bi-speedometer",
      text: "Dashboard",
    },
    {
      id: 2,
      path: "/notifications",
      icon: "bi-bell",
      text: "Notifications",
    },
    {
      id: 3,
      path: "/Assign",
      icon: "bi-person",
      text: "Assign",
    },
  ];

  const userDropdownList = userDropdownData.map((elem, index) => (
    <li key={index}>
      <Link className="dropdown-item" to={elem.path}>
        <i className={`me-2 bi ${elem.icon}`} />
        {elem.text}
      </Link>
    </li>
  ));

  const notificationCards = NotificationData.slice(0, 4).map((elem, index) => (
    <li key={index}>
      <Link className="dropdown-item" to={`/notification-details/${elem.id}`}>
        <i
          className={`me-2 bg-${elem.icon[0].color} bi ${elem.icon[0].icon}`}
        />
        {elem.notification}
      </Link>
    </li>
  ));

  return (
    <>
      <header
        className={`header-area ${stickyClass} dashboard-header px-0 px-sm-0`}
      >
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <div className="d-flex align-items-center">
              {/* Brand Logo */}
              <div className="admin-logo me-2 me-sm-3">
                <Link className="d-block" to="/">
                  <img src={`${process.env.PUBLIC_URL}/${BrandLogo}`} alt="" />
                </Link>
              </div>

              {/* Search Form */}
              <div className="search-form">
                <Form
                  className="position-relative d-flex align-items-center"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search"
                  />
                  <button className="position-absolute" type="submit">
                    <i className="bi bi-search" />
                  </button>
                </Form>
              </div>
            </div>

            {/* Header Meta */}
            <div className="header-meta d-flex align-items-center">
              {/* Notification */}
              <Dropdown className="user-dropdown mx-1 mx-sm-3">
                <Dropdown.Toggle className="user-btn" id="userDropdown">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/core-img/notification.png`}
                    alt=""
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu className="mt-3 noti-dd-menu" align="end">
                  {notificationCards}
                  <li>
                    <Link
                      className="dropdown-item justify-content-center"
                      to="/notifications"
                    >
                      View all notifications
                    </Link>
                  </li>
                </Dropdown.Menu>
              </Dropdown>

              {/* User Dropdown */}
              <Dropdown className="user-dropdown">
                <Dropdown.Toggle className="user-btn" id="userDropdown">
                  <img
                    src={`${process.env.PUBLIC_URL}/img/core-img/user.png`}
                    alt=""
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu className="mt-3" align="end">
                  {userDropdownList}
                </Dropdown.Menu>
              </Dropdown>

              {/* Menu Toggler */}
              <div className="menu-toggler ms-1 ms-sm-3" onClick={handleToggle}>
                <i className="bi bi-list" />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div
        className={`admin-sidebar-wrap ${
          isActive ? "sidebar-active" : "sidebar-disabled"
        }`}
      >
        <div className="overflowY-scroll">
          {/* User Profile */}
          <div className="user-profile">
            {/* User Name */}
            <div className="user-name mb-5">
              <div className="d-flex align-items-center">
                <img
                  src={`${process.env.PUBLIC_URL}/${userInfo[0].thumbnail}`}
                  alt=""
                />
                <div className="ms-3">
                  <h6 className="lh-1 text-dark fz-18">
                    {userInfo[0].username}
                  </h6>
                  {user === "admin" ? (
                    <p className="badge bg-primary fz-12">Admin</p>
                  ) : (
                    <p className="badge bg-primary fz-12">Driver</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Sidenav */}
          {user === "admin" ? (
            <div className="sidenav">
              <ul>
                <li>Menu</li>
                {AdminNav.map((elem, index) => (
                  <li key={index}>
                    <NavLink to={elem.path}>
                      <i className={`bi ${elem.icon}`} />
                      {elem.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className="sidenav">
              <ul>
                <li>Menu</li>
                {UserNav.map((elem, index) => (
                  <li key={index}>
                    <NavLink to={elem.path}>
                      <i className={`bi ${elem.icon}`} />
                      {elem.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardHeader;
