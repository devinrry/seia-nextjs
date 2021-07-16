import css from 'styled-jsx/css';

export default css.global`
  .header {
    font-size: 14px;
  }

  .navbar .nav-item {
    font-size: 14px;
    font-weight: 600;
  }

  .navbar .nav-item:hover {
    color: #fe4a55;
  }

  .nav-item {
    padding: 0 10px;
  }

  .navbar-light .navbar-nav .nav-link:hover {
    color: #fe4a55;
  }

  .navbar-light .navbar-nav .nav-link.active {
    color: #fe4a55;
  }

  .dropdown-menu.show {
    min-width: 15rem;
    border: none;
    padding: 0;
    margin-top: 10px;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 10%);
  }

  .dropdown-item {
    padding: 1rem 1rem;
    color: rgba(0, 0, 0, 0.55);
  }

  .dropdown-item.active,
  .dropdown-item:active {
    color: #fe4a55;
    text-decoration: none;
    background-color: #e9ecef;
  }

  .main-banner {
    padding: 80px 0;
  }

  .banner-image {
    background-image: url('img/bg-e1604710640565.png');
    background-size: cover;
  }

  .default-btn {
    border: none;
    position: relative;
    display: inline-block;
    text-align: center;
    overflow: hidden;
    z-index: 1;
    color: #ffffff;
    -webkit-transition: 0.5s;
    transition: 0.5s;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    padding: 10px 30px;
    background-color: #fe4a55;
    margin-top: 20px;
  }

  /* .default-btn i {
    position: absolute;
    left: 30px;
    top: 10px;
}

.default-btn i.fa {
    font-size: 23px;
    left: 23px;
    display: inline-block;
} */

  .default-btn span {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: #221638;
    -webkit-transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
    transition: width 0.5s ease-in-out, height 0.5s ease-in-out;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    z-index: -1;
    border-radius: 5px;
  }

  .default-btn:hover {
    background-color: #221638;
    color: white;
  }

  .default-btn:hover span {
    width: 225%;
    height: 562.5px;
  }

  .btn-link {
    color: #fe4a55;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    display: inline-block;
    padding: 10px;
  }

  .btn-link:hover {
    color: #221638;
  }

  .card-content {
    margin: 100px auto;
  }

  .card-content .card {
    border: none;
    background-color: white;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 10%);
    padding: 20px;
  }

  .card-content .card:hover {
    transform: translateY(-10px);
  }

  .card-product .card {
    border: none;
    background-color: white;
    box-shadow: 0px 0px 15px 0px rgb(0 0 0 / 10%);
    padding: 20px;
  }

  .card-product .card-title {
    background-color: beige;
  }

  .card {
    border: none;
    padding: 20px;
  }

  .card-title {
    font-weight: 700;
    padding: 20px;
  }

  .card-text {
    font-size: 16px;
  }

  .contact {
    padding: 100px 300px;
    background-color: #fffaf3;
  }

  /* .contact-info ul li i {
    position: absolute;
    left: 0;
} */

  footer {
    background-color: #100f1f;
    padding: 60px;
  }

  footer ul {
    list-style-type: none;
    padding-left: 0;
  }

  footer ul li a {
    color: #e4e4e4;
    font-size: 13px;
    display: inline-block;
  }

  footer ul li a:hover {
    color: #fe4a55;
    padding-left: 7px;
  }

  .social-link li {
    display: inline-block;
  }

  .social-link li a {
    margin-top: 50px;
    width: 30px;
    height: 30px;
    text-align: center;
    color: #ffffff;
    background-color: #1e1d2f;
    font-size: 18px;
    position: relative;
    border-radius: 2px;
  }

  .content {
    margin: 100px auto auto;
  }

  .checkout {
    margin: 60px auto;
  }

  .content .features-list {
    padding-left: 0;
    list-style-type: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-bottom: 0;
    margin-top: -5px;
    margin-left: -8px;
    margin-right: -8px;
  }

  .content .features-list li {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 50%;
    flex: 0 0 50%;
    max-width: 50%;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 16px;
  }

  .content .features-list li span {
    display: block;
    position: relative;
    color: #221638;
    font-size: 18px;
    font-weight: 700;
    padding-left: 50px;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .about-content .features-list li span i {
    position: absolute;
    left: 0;
    top: -2px;
    width: 40px;
    height: 40px;
    overflow: hidden;
    text-align: center;
    font-weight: 500;
    line-height: 40px;
    font-size: 25px;
    /* background-image: url(../../assets/img/circle-border.png);
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat; */
  }
`;
