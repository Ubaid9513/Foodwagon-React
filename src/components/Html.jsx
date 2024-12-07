import React from "react";
// import "../assets/css/theme-rtl.css.map";
// import "../assets/css/theme-rtl.min.css";
// import "../assets/css/theme-rtl.min.css.map";
// import "../assets/css/theme.css";
// import "../assets/css/theme.css.map";
// import "../assets/css/theme.min.css";
// import "../assets/css/theme.min.css.map";
const Html = () => {
  return (
    <main className="main" id="top">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top"
        data-navbar-on-scroll="data-navbar-on-scroll"
      >
        <div className="container">
          <a className="navbar-brand d-inline-flex" href="index.html">
            <img
              className="d-inline-block"
              src="./src/assets/img/gallery/logo.svg"
              alt="logo"
            />
            <span className="text-1000 fs-3 fw-bold ms-2 text-gradient">
              foodwaGon
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div
            className="collapse navbar-collapse border-top border-lg-0 my-2 mt-lg-0"
            id="navbarSupportedContent"
          >
            <div className="mx-auto pt-5 pt-lg-0 d-block d-lg-none d-xl-block">
              <p className="mb-0 fw-bold text-lg-center">
                Deliver to:{" "}
                <i className="fas fa-map-marker-alt text-warning mx-2" />
                <span className="fw-normal">Current Location </span>
                <span>Mirpur 1 Bus Stand, Dhaka</span>
              </p>
            </div>
            <form className="d-flex mt-4 mt-lg-0 ms-lg-auto ms-xl-0">
              <div className="input-group-icon pe-2">
                <i className="fas fa-search input-box-icon text-primary" />
                <input
                  className="form-control border-0 input-box bg-100"
                  type="search"
                  placeholder="Search Food"
                  aria-label="Search"
                />
              </div>
              <button
                className="btn btn-white shadow-warning text-warning"
                type="submit"
              >
                {" "}
                <i className="fas fa-user me-2" />
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
      <section className="py-5 overflow-hidden bg-primary" id="home">
        <div className="container">
          <div className="row flex-center">
            <div className="col-md-5 col-lg-6 order-0 order-md-1 mt-8 mt-md-0">
              <a className="img-landing-banner" href="#!">
                <img
                  className="img-fluid"
                  src="./src/assets/img/gallery/hero-header.png"
                  alt="hero-header"
                />
              </a>
            </div>
            <div className="col-md-7 col-lg-6 py-8 text-md-start text-center">
              <h1 className="display-1 fs-md-5 fs-lg-6 fs-xl-8 text-light">
                Are you starving?
              </h1>
              <h1 className="text-800 mb-5 fs-4">
                Within a few clicks, find meals that
                <br className="d-none d-xxl-block" />
                are accessible near you
              </h1>
              <div className="card w-xxl-75">
                <div className="card-body">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <button
                        className="nav-link active mb-3"
                        id="nav-home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-home"
                        type="button"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        <i className="fas fa-motorcycle me-2" />
                        Delivery
                      </button>
                      <button
                        className="nav-link mb-3"
                        id="nav-profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#nav-profile"
                        type="button"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        <i className="fas fa-shopping-bag me-2" />
                        Pickup
                      </button>
                    </div>
                  </nav>
                  <div className="tab-content mt-3" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <form className="row gx-2 gy-2 align-items-center">
                        <div className="col">
                          <div className="input-group-icon">
                            <i className="fas fa-map-marker-alt text-danger input-box-icon" />
                            <label
                              className="visually-hidden"
                              htmlFor="inputDelivery"
                            >
                              Address
                            </label>
                            <input
                              className="form-control input-box form-foodwagon-control"
                              id="inputDelivery"
                              type="text"
                              placeholder="Enter Your Address"
                            />
                          </div>
                        </div>
                        <div className="d-grid gap-3 col-sm-auto">
                          <button className="btn btn-danger" type="submit">
                            Find Food
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      <form className="row gx-4 gy-2 align-items-center">
                        <div className="col">
                          <div className="input-group-icon">
                            <i className="fas fa-map-marker-alt text-danger input-box-icon" />
                            <label
                              className="visually-hidden"
                              htmlFor="inputPickup"
                            >
                              Address
                            </label>
                            <input
                              className="form-control input-box form-foodwagon-control"
                              id="inputPickup"
                              type="text"
                              placeholder="Enter Your Address"
                            />
                          </div>
                        </div>
                        <div className="d-grid gap-3 col-sm-auto">
                          <button className="btn btn-danger" type="submit">
                            Find Food
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="py-0">
        <div className="container">
          <div className="row h-100 gx-2 mt-7">
            <div className="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
              <div className="card card-span h-100">
                <div className="position-relative">
                  {" "}
                  <img
                    className="img-fluid rounded-3 w-100"
                    src="./src/assets/img/gallery/discount-item-1.png"
                    alt="..."
                  />
                  <div className="card-actions">
                    <div className="badge badge-foodwagon bg-primary p-4">
                      <div className="d-flex flex-between-center">
                        <div className="text-white fs-7">15</div>
                        <div className="d-block text-white fs-2">
                          % <br />
                          <div className="fw-normal fs-1 mt-2">Off</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body px-0">
                  <h5 className="fw-bold text-1000 text-truncate">
                    Flat Hill Slingback
                  </h5>
                  <span className="badge bg-soft-danger py-2 px-3">
                    <span className="fs-1 text-danger">6 days Remaining</span>
                  </span>
                </div>
                <a className="stretched-link" href="#" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
              <div className="card card-span h-100">
                <div className="position-relative">
                  {" "}
                  <img
                    className="img-fluid rounded-3 w-100"
                    src="./src/assets/img/gallery/discount-item-2.png"
                    alt="..."
                  />
                  <div className="card-actions">
                    <div className="badge badge-foodwagon bg-primary p-4">
                      <div className="d-flex flex-between-center">
                        <div className="text-white fs-7">10</div>
                        <div className="d-block text-white fs-2">
                          % <br />
                          <div className="fw-normal fs-1 mt-2">Off</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body px-0">
                  <h5 className="fw-bold text-1000 text-truncate">
                    Ocean Blue Ring
                  </h5>
                  <span className="badge bg-soft-danger py-2 px-3">
                    <span className="fs-1 text-danger">6 days Remaining</span>
                  </span>
                </div>
                <a className="stretched-link" href="#" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
              <div className="card card-span h-100">
                <div className="position-relative">
                  {" "}
                  <img
                    className="img-fluid rounded-3 w-100"
                    src="./src/assets/img/gallery/discount-item-3.png"
                    alt="..."
                  />
                  <div className="card-actions">
                    <div className="badge badge-foodwagon bg-primary p-4">
                      <div className="d-flex flex-between-center">
                        <div className="text-white fs-7">25</div>
                        <div className="d-block text-white fs-2">
                          % <br />
                          <div className="fw-normal fs-1 mt-2">Off</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body px-0">
                  <h5 className="fw-bold text-1000 text-truncate">
                    Brown Leathered Wallet
                  </h5>
                  <span className="badge bg-soft-danger py-2 px-3">
                    <span className="fs-1 text-danger">6 days Remaining</span>
                  </span>
                </div>
                <a className="stretched-link" href="#" />
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mb-3 mb-md-0 h-100 pb-4">
              <div className="card card-span h-100">
                <div className="position-relative">
                  {" "}
                  <img
                    className="img-fluid rounded-3 w-100"
                    src="./src/assets/img/gallery/discount-item-4.png"
                    alt="..."
                  />
                  <div className="card-actions">
                    <div className="badge badge-foodwagon bg-primary p-4">
                      <div className="d-flex flex-between-center">
                        <div className="text-white fs-7">20</div>
                        <div className="d-block text-white fs-2">
                          % <br />
                          <div className="fw-normal fs-1 mt-2">Off</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body px-0">
                  <h5 className="fw-bold text-1000 text-truncate">
                    Silverside Wristwatch
                  </h5>
                  <span className="badge bg-soft-danger py-2 px-3">
                    <span className="fs-1 text-danger">6 days Remaining</span>
                  </span>
                </div>
                <a className="stretched-link" href="#" />
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="py-0 bg-primary-gradient">
        <div className="container">
          <div className="row justify-content-center g-0">
            <div className="col-xl-9">
              <div className="col-lg-6 text-center mx-auto mb-3 mb-md-5 mt-4">
                <h5 className="fw-bold text-danger fs-3 fs-lg-5 lh-sm my-6">
                  How does it work
                </h5>
              </div>
              <div className="row">
                <div className="col-sm-6 col-md-3 mb-6">
                  <div className="text-center">
                    <img
                      className="shadow-icon"
                      src="./src/assets/img/gallery/location.png"
                      height={112}
                      alt="..."
                    />
                    <h5 className="mt-4 fw-bold">Select location</h5>
                    <p className="mb-md-0">
                      Choose the location where your food will be delivered.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 mb-6">
                  <div className="text-center">
                    <img
                      className="shadow-icon"
                      src="./src/assets/img/gallery/order.png"
                      height={112}
                      alt="..."
                    />
                    <h5 className="mt-4 fw-bold">Choose order</h5>
                    <p className="mb-md-0">
                      Check over hundreds of menus to pick your favorite food
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 mb-6">
                  <div className="text-center">
                    <img
                      className="shadow-icon"
                      src="./src/assets/img/gallery/pay.png"
                      height={112}
                      alt="..."
                    />
                    <h5 className="mt-4 fw-bold">Pay advanced</h5>
                    <p className="mb-md-0">
                      It's quick, safe, and simple. Select several methods of
                      payment
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 col-md-3 mb-6">
                  <div className="text-center">
                    <img
                      className="shadow-icon"
                      src="./src/assets/img/gallery/meals.png"
                      height={112}
                      alt="..."
                    />
                    <h5 className="mt-4 fw-bold">Enjoy meals</h5>
                    <p className="mb-md-0">
                      Food is made and delivered directly to your home.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="py-4 overflow-hidden">
        <div className="container">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto text-center mt-7 mb-5">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm">Popular items</h5>
            </div>
            <div className="col-12">
              <div
                className="carousel slide"
                id="carouselPopularItems"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval={10000}
                  >
                    <div className="row gx-3 h-100 align-items-center">
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/cheese-burger.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Cheese Burger
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Burger Arena</span>
                            </div>
                            <span className="text-1000 fw-bold">$3.88</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/toffes-cake.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Toffe's Cake
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Top Sticks</span>
                            </div>
                            <span className="text-1000 fw-bold">$4.00</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/dancake.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Dancake
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Cake World</span>
                            </div>
                            <span className="text-1000 fw-bold">$1.99</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/crispy-sandwitch.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Crispy Sandwitch
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">
                                Fastfood Dine
                              </span>
                            </div>
                            <span className="text-1000 fw-bold">$3.00</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/thai-soup.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Thai Soup
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Foody Man</span>
                            </div>
                            <span className="text-1000 fw-bold">$2.79</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={5000}>
                    <div className="row gx-3 h-100 align-items-center">
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/cheese-burger.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Cheese Burger
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Burger Arena</span>
                            </div>
                            <span className="text-1000 fw-bold">$3.88</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/toffes-cake.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Toffe's Cake
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Top Sticks</span>
                            </div>
                            <span className="text-1000 fw-bold">$4.00</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/dancake.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Dancake
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Cake World</span>
                            </div>
                            <span className="text-1000 fw-bold">$1.99</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/crispy-sandwitch.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Crispy Sandwitch
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">
                                Fastfood Dine
                              </span>
                            </div>
                            <span className="text-1000 fw-bold">$3.00</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/thai-soup.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Thai Soup
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Foody Man</span>
                            </div>
                            <span className="text-1000 fw-bold">$2.79</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={3000}>
                    <div className="row gx-3 h-100 align-items-center">
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/cheese-burger.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Cheese Burger
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Burger Arena</span>
                            </div>
                            <span className="text-1000 fw-bold">$3.88</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/toffes-cake.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Toffe's Cake
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Top Sticks</span>
                            </div>
                            <span className="text-1000 fw-bold">$4.00</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/dancake.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Dancake
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Cake World</span>
                            </div>
                            <span className="text-1000 fw-bold">$1.99</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/crispy-sandwitch.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Crispy Sandwitch
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">
                                Fastfood Dine
                              </span>
                            </div>
                            <span className="text-1000 fw-bold">$3.00</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/thai-soup.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Thai Soup
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Foody Man</span>
                            </div>
                            <span className="text-1000 fw-bold">$2.79</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row gx-3 h-100 align-items-center">
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/cheese-burger.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Cheese Burger
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Burger Arena</span>
                            </div>
                            <span className="text-1000 fw-bold">$3.88</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/toffes-cake.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Toffe's Cake
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Top Sticks</span>
                            </div>
                            <span className="text-1000 fw-bold">$4.00</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/dancake.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Dancake
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Cake World</span>
                            </div>
                            <span className="text-1000 fw-bold">$1.99</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/crispy-sandwitch.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Crispy Sandwitch
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">
                                Fastfood Dine
                              </span>
                            </div>
                            <span className="text-1000 fw-bold">$3.00</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-3">
                          <img
                            className="img-fluid rounded-3 h-100"
                            src="./src/assets/img/gallery/thai-soup.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="fw-bold text-1000 text-truncate mb-1">
                              Thai Soup
                            </h5>
                            <div>
                              <span className="text-warning me-2">
                                <i className="fas fa-map-marker-alt" />
                              </span>
                              <span className="text-primary">Foody Man</span>
                            </div>
                            <span className="text-1000 fw-bold">$2.79</span>
                          </div>
                        </div>
                        <div className="d-grid gap-2">
                          <a
                            className="btn btn-lg btn-danger"
                            href="#!"
                            role="button"
                          >
                            Order now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev carousel-icon"
                  type="button"
                  data-bs-target="#carouselPopularItems"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon hover-top-shadow"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next carousel-icon"
                  type="button"
                  data-bs-target="#carouselPopularItems"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon hover-top-shadow"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      <section id="testimonial">
        <div className="container">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto text-center mb-6">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">
                Featured Restaurants
              </h5>
            </div>
          </div>
          <div className="row gx-2">
            <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div className="card card-span h-100 text-white rounded-3">
                <img
                  className="img-fluid rounded-3 h-100"
                  src="./src/assets/img/gallery/food-world.png"
                  alt="..."
                />
                <div className="card-img-overlay ps-0">
                  <span className="badge bg-danger p-2 ms-3">
                    <i className="fas fa-tag me-2 fs-0" />
                    <span className="fs-0">20% off</span>
                  </span>
                  <span className="badge bg-primary ms-2 me-1 p-2">
                    <i className="fas fa-clock me-1 fs-0" />
                    <span className="fs-0">Fast</span>
                  </span>
                </div>
                <div className="card-body ps-0">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="img-fluid"
                      src="./src/assets/img/gallery/food-world-logo.png"
                      alt=""
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="mb-0 fw-bold text-1000">Food world</h5>
                      <span className="text-primary fs--1 me-1">
                        <i className="fas fa-star" />
                      </span>
                      <span className="mb-0 text-primary">46</span>
                    </div>
                  </div>
                  <span className="badge bg-soft-danger p-2">
                    <span className="fw-bold fs-1 text-danger">
                      Opens Tomorrow
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div className="card card-span h-100 text-white rounded-3">
                <img
                  className="img-fluid rounded-3 h-100"
                  src="./src/assets/img/gallery/pizza-hub.png"
                  alt="..."
                />
                <div className="card-img-overlay ps-0">
                  <span className="badge bg-danger p-2 ms-3">
                    <i className="fas fa-tag me-2 fs-0" />
                    <span className="fs-0">10% off</span>
                  </span>
                  <span className="badge bg-primary ms-2 me-1 p-2">
                    <i className="fas fa-clock me-1 fs-0" />
                    <span className="fs-0">Fast</span>
                  </span>
                </div>
                <div className="card-body ps-0">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="img-fluid"
                      src="./src/assets/img/gallery/pizzahub-logo.png"
                      alt=""
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="mb-0 fw-bold text-1000">Pizza hub</h5>
                      <span className="text-primary fs--1 me-1">
                        <i className="fas fa-star" />
                      </span>
                      <span className="mb-0 text-primary">40</span>
                    </div>
                  </div>
                  <span className="badge bg-soft-danger p-2">
                    <span className="fw-bold fs-1 text-danger">
                      Opens Tomorrow
                    </span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div className="card card-span h-100 text-white rounded-3">
                <img
                  className="img-fluid rounded-3 h-100"
                  src="./src/assets/img/gallery/donuts-hut.png"
                  alt="..."
                />
                <div className="card-img-overlay ps-0">
                  <span className="badge bg-danger p-2 ms-3">
                    <i className="fas fa-tag me-2 fs-0" />
                    <span className="fs-0">15% off</span>
                  </span>
                  <span className="badge bg-primary ms-2 me-1 p-2">
                    <i className="fas fa-clock me-1 fs-0" />
                    <span className="fs-0">Fast</span>
                  </span>
                </div>
                <div className="card-body ps-0">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="img-fluid"
                      src="./src/assets/img/gallery/donuts-hut-logo.png"
                      alt=""
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="mb-0 fw-bold text-1000">Donuts hut</h5>
                      <span className="text-primary fs--1 me-1">
                        <i className="fas fa-star" />
                      </span>
                      <span className="mb-0 text-primary">20</span>
                    </div>
                  </div>
                  <span className="badge bg-soft-success p-2">
                    <span className="fw-bold fs-1 text-success">Open Now</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div className="card card-span h-100 text-white rounded-3">
                <img
                  className="img-fluid rounded-3 h-100"
                  src="./src/assets/img/gallery/donuthut.png"
                  alt="..."
                />
                <div className="card-img-overlay ps-0">
                  <span className="badge bg-danger p-2 ms-3">
                    <i className="fas fa-tag me-2 fs-0" />
                    <span className="fs-0">15% off</span>
                  </span>
                  <span className="badge bg-primary ms-2 me-1 p-2">
                    <i className="fas fa-clock me-1 fs-0" />
                    <span className="fs-0">Fast</span>
                  </span>
                </div>
                <div className="card-body ps-0">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="img-fluid"
                      src="./src/assets/img/gallery/donut-hut-logo.png"
                      alt=""
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="mb-0 fw-bold text-1000">Donuts hut</h5>
                      <span className="text-primary fs--1 me-1">
                        <i className="fas fa-star" />
                      </span>
                      <span className="mb-0 text-primary">50</span>
                    </div>
                  </div>
                  <span className="badge bg-soft-success p-2">
                    <span className="fw-bold fs-1 text-success">Open Now</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div className="card card-span h-100 text-white rounded-3">
                <img
                  className="img-fluid rounded-3 h-100"
                  src="./src/assets/img/gallery/ruby-tuesday.png"
                  alt="..."
                />
                <div className="card-img-overlay ps-0">
                  <span className="badge bg-danger p-2 ms-3">
                    <i className="fas fa-tag me-2 fs-0" />
                    <span className="fs-0">10% off</span>
                  </span>
                  <span className="badge bg-primary ms-2 me-1 p-2">
                    <i className="fas fa-clock me-1 fs-0" />
                    <span className="fs-0">Fast</span>
                  </span>
                </div>
                <div className="card-body ps-0">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="img-fluid"
                      src="./src/assets/img/gallery/ruby-tuesday-logo.png"
                      alt=""
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="mb-0 fw-bold text-1000">Ruby tuesday</h5>
                      <span className="text-primary fs--1 me-1">
                        <i className="fas fa-star" />
                      </span>
                      <span className="mb-0 text-primary">50</span>
                    </div>
                  </div>
                  <span className="badge bg-soft-success p-2">
                    <span className="fw-bold fs-1 text-success">Open Now</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div className="card card-span h-100 text-white rounded-3">
                <img
                  className="img-fluid rounded-3 h-100"
                  src="./src/assets/img/gallery/kuakata.png"
                  alt="..."
                />
                <div className="card-img-overlay ps-0">
                  <span className="badge bg-danger p-2 ms-3">
                    <i className="fas fa-tag me-2 fs-0" />
                    <span className="fs-0">10% off</span>
                  </span>
                  <span className="badge bg-primary ms-2 me-1 p-2">
                    <i className="fas fa-clock me-1 fs-0" />
                    <span className="fs-0">Fast</span>
                  </span>
                </div>
                <div className="card-body ps-0">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="img-fluid"
                      src="./src/assets/img/gallery/kuakata-logo.png"
                      alt=""
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="mb-0 fw-bold text-1000">
                        Kuakata Fried Chicken
                      </h5>
                      <span className="text-primary fs--1 me-1">
                        <i className="fas fa-star" />
                      </span>
                      <span className="mb-0 text-primary">50</span>
                    </div>
                  </div>
                  <span className="badge bg-soft-success p-2">
                    <span className="fw-bold fs-1 text-success">Open Now</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div className="card card-span h-100 text-white rounded-3">
                <img
                  className="img-fluid rounded-3 h-100"
                  src="./src/assets/img/gallery/red-square.png"
                  alt="..."
                />
                <div className="card-img-overlay ps-0">
                  <span className="badge bg-danger p-2 ms-3">
                    <i className="fas fa-tag me-2 fs-0" />
                    <span className="fs-0">10% off</span>
                  </span>
                  <span className="badge bg-primary ms-2 me-1 p-2">
                    <i className="fas fa-clock me-1 fs-0" />
                    <span className="fs-0">Fast</span>
                  </span>
                </div>
                <div className="card-body ps-0">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="img-fluid"
                      src="./src/assets/img/gallery/red-square-logo.png"
                      alt=""
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="mb-0 fw-bold text-1000">
                        Kuakata Fried Chicken
                      </h5>
                      <span className="text-primary fs--1 me-1">
                        <i className="fas fa-star" />
                      </span>
                      <span className="mb-0 text-primary">50</span>
                    </div>
                  </div>
                  <span className="badge bg-soft-success p-2">
                    <span className="fw-bold fs-1 text-success">Open Now</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
              <div className="card card-span h-100 text-white rounded-3">
                <img
                  className="img-fluid rounded-3 h-100"
                  src="./src/assets/img/gallery/taco-bell.png"
                  alt="..."
                />
                <div className="card-img-overlay ps-0">
                  <span className="badge bg-danger p-2 ms-3">
                    <i className="fas fa-tag me-2 fs-0" />
                    <span className="fs-0">10% off</span>
                  </span>
                  <span className="badge bg-primary ms-2 me-1 p-2">
                    <i className="fas fa-clock me-1 fs-0" />
                    <span className="fs-0">Fast</span>
                  </span>
                </div>
                <div className="card-body ps-0">
                  <div className="d-flex align-items-center mb-3">
                    <img
                      className="img-fluid"
                      src="./src/assets/img/gallery/taco-bell-logo.png"
                      alt=""
                    />
                    <div className="flex-1 ms-3">
                      <h5 className="mb-0 fw-bold text-1000">Taco bell</h5>
                      <span className="text-primary fs--1 me-1">
                        <i className="fas fa-star" />
                      </span>
                      <span className="mb-0 text-primary">50</span>
                    </div>
                  </div>
                  <span className="badge bg-soft-success p-2">
                    <span className="fw-bold fs-1 text-success">Open Now</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-12 d-flex justify-content-center mt-5">
              {" "}
              <a className="btn btn-lg btn-primary" href="#!">
                View All <i className="fas fa-chevron-right ms-2"> </i>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="py-8 overflow-hidden">
        <div className="container">
          <div className="row flex-center mb-6">
            <div className="col-lg-7">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm text-center text-lg-start">
                Search by Food
              </h5>
            </div>
            <div className="col-lg-4 text-lg-end text-center">
              <a className="btn btn-lg text-800 me-2" href="#" role="button">
                VIEW ALL <i className="fas fa-chevron-right ms-2" />
              </a>
            </div>
            <div className="col-lg-auto position-relative">
              <button
                className="carousel-control-prev s-icon-prev carousel-icon"
                type="button"
                data-bs-target="#carouselSearchByFood"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon hover-top-shadow"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next s-icon-next carousel-icon"
                type="button"
                data-bs-target="#carouselSearchByFood"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon hover-top-shadow"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="row flex-center">
            <div className="col-12">
              <div
                className="carousel slide"
                id="carouselSearchByFood"
                data-bs-touch="false"
                data-bs-interval="false"
              >
                <div className="carousel-inner">
                  <div
                    className="carousel-item active"
                    data-bs-interval={10000}
                  >
                    <div className="row h-100 align-items-center">
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/search-pizza.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              pizza
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/burger.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Burger
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/noodles.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Noodles
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/sub-sandwich.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Sub-sandwiches
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/chowmein.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Chowmein
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/steak.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Steak
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={5000}>
                    <div className="row h-100 align-items-center">
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/search-pizza.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              pizza
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/burger.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Burger
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/noodles.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Noodles
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/sub-sandwich.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Sub-sandwiches
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/chowmein.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Chowmein
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/steak.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Steak
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item" data-bs-interval={3000}>
                    <div className="row h-100 align-items-center">
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/search-pizza.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              pizza
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/burger.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Burger
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/noodles.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Noodles
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/sub-sandwich.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Sub-sandwiches
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/chowmein.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Chowmein
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/steak.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Steak
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row h-100 align-items-center">
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/search-pizza.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              pizza
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/burger.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Burger
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/noodles.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Noodles
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/sub-sandwich.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Sub-sandwiches
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/chowmein.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Chowmein
                            </h5>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4 col-xl mb-5 h-100">
                        <div className="card card-span h-100 rounded-circle">
                          <img
                            className="img-fluid rounded-circle h-100"
                            src="./src/assets/img/gallery/steak.png"
                            alt="..."
                          />
                          <div className="card-body ps-0">
                            <h5 className="text-center fw-bold text-1000 text-truncate mb-2">
                              Steak
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      <section>
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/gallery/cta-one-bg.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-10">
              <div
                className="card card-span shadow-warning"
                style={{ borderRadius: 35 }}
              >
                <div className="card-body py-5">
                  <div className="row justify-content-evenly">
                    <div className="col-md-3">
                      <div className="d-flex d-md-block d-xl-flex justify-content-evenly justify-content-lg-between">
                        <img
                          src="./src/assets/img/icons/discounts.png"
                          width={100}
                          alt="..."
                        />
                        <div className="d-flex d-lg-block d-xl-flex flex-center">
                          <h2 className="fw-bolder text-1000 mb-0 text-gradient">
                            Daily
                            <br className="d-none d-md-block" />
                            Discounts{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 hr-vertical">
                      <div className="d-flex d-md-block d-xl-flex justify-content-evenly justify-content-lg-between">
                        <img
                          src="./src/assets/img/icons/live-tracking.png"
                          width={100}
                          alt="..."
                        />
                        <div className="d-flex d-lg-block d-xl-flex flex-center">
                          <h2 className="fw-bolder text-1000 mb-0 text-gradient">
                            Live Tracking
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3 hr-vertical">
                      <div className="d-flex d-md-block d-xl-flex justify-content-evenly justify-content-lg-between">
                        <img
                          src="./src/assets/img/icons/quick-delivery.png"
                          width={100}
                          alt="..."
                        />
                        <div className="d-flex d-lg-block d-xl-flex flex-center">
                          <h2 className="fw-bolder text-1000 mb-0 text-gradient">
                            Quick Delivery{" "}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex-center mt-md-8">
            <div
              className="col-lg-5 d-none d-lg-block"
              style={{ marginBottom: "-122px" }}
            >
              {" "}
              <img
                className="w-100"
                src="./src/assets/img/gallery/phone-cta-one.png"
                alt="..."
              />
            </div>
            <div className="col-lg-5 mt-7 mt-md-0">
              <h1 className="text-primary">Install the app</h1>
              <p>
                It's never been easier to order food. Look for the finest{" "}
                <br className="d-none d-xl-block" />
                discounts and you'll be lost in a world of delectable food.
              </p>
              <a
                className="pe-2"
                href="https://www.apple.com/app-store/"
                target="_blank"
              >
                <img
                  src="./src/assets/img/gallery/app-store.svg"
                  width={160}
                  alt=""
                />
              </a>
              <a href="https://play.google.com/store/apps" target="_blank">
                <img
                  src="./src/assets/img/gallery/google-play.svg"
                  width={160}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="pb-5 pt-8">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card card-span mb-3 shadow-lg">
                <div className="card-body py-0">
                  <div className="row justify-content-center">
                    <div className="col-md-5 col-xl-7 col-xxl-8 g-0 order-0 order-md-1">
                      <img
                        className="./src/img-fluid w-100 fit-cover h-100 rounded-top rounded-md-end rounded-md-top-0"
                        src="./src/assets/img/gallery/crispy-sandwiches.png"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                      <h1 className="card-title mt-xl-5 mb-4">
                        Best deals{" "}
                        <span className="text-primary"> Crispy Sandwiches</span>
                      </h1>
                      <p className="fs-1">
                        Enjoy the large size of sandwiches. Complete your meal
                        with the perfect slice of sandwiches.
                      </p>
                      <div className="d-grid bottom-0">
                        <a className="btn btn-lg btn-primary mt-xl-6" href="#!">
                          PROCEED TO ORDER
                          <i className="fas fa-chevron-right ms-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="py-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card card-span mb-3 shadow-lg">
                <div className="card-body py-0">
                  <div className="row justify-content-center">
                    <div className="col-md-5 col-xl-7 col-xxl-8 g-0 order-md-0">
                      <img
                        className="img-fluid w-100 fit-cover h-100 rounded-top rounded-md-start rounded-md-top-0"
                        src="./src/assets/img/gallery/fried-chicken.png"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                      <h1 className="card-title mt-xl-5 mb-4">
                        Celebrate parties with{" "}
                        <span className="text-primary">Fried Chicken</span>
                      </h1>
                      <p className="fs-1">
                        Get the best fried chicken smeared with a lip smacking
                        lemon chili flavor. Check out best deals for fried
                        chicken.
                      </p>
                      <div className="d-grid bottom-0">
                        <a className="btn btn-lg btn-primary mt-xl-6" href="#!">
                          PROCEED TO ORDER
                          <i className="fas fa-chevron-right ms-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="pt-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card card-span mb-3 shadow-lg">
                <div className="card-body py-0">
                  <div className="row justify-content-center">
                    <div className="col-md-5 col-xl-7 col-xxl-8 g-0 order-0 order-md-1">
                      <img
                        className="img-fluid w-100 fit-cover h-100 rounded-top rounded-md-end rounded-md-top-0"
                        src="./src/assets/img/gallery/pizza.png"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-7 col-xl-5 col-xxl-4 p-4 p-lg-5">
                      <h1 className="card-title mt-xl-5 mb-4">
                        Wanna eat hot &amp;{" "}
                        <span className="text-primary">spicy Pizza?</span>
                      </h1>
                      <p className="fs-1">
                        Pair up with a friend and enjoy the hot and crispy pizza
                        pops. Try it with the best deals.
                      </p>
                      <div className="d-grid bottom-0">
                        <a className="btn btn-lg btn-primary mt-xl-6" href="#!">
                          PROCEED TO ORDER
                          <i className="fas fa-chevron-right ms-2" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
      <section className="py-0">
        <div
          className="bg-holder"
          style={{
            backgroundImage: "url(assets/img/gallery/cta-two-bg.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row flex-center">
            <div className="col-xxl-9 py-7 text-center">
              <h1 className="fw-bold mb-4 text-white fs-6">
                Are you ready to order <br />
                with the best deals?{" "}
              </h1>
              <a className="btn btn-danger" href="#">
                {" "}
                PROCEED TO ORDER
                <i className="fas fa-chevron-right ms-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ============================================*/}
      {/* <section> begin ============================*/}
      <section className="py-0 pt-7 bg-1000">
        <div className="container">
          <div className="row justify-content-lg-between">
            <h5 className="lh-lg fw-bold text-white">OUR TOP CITIES</h5>
            <div className="col-6 col-md-4 col-lg-auto mb-3">
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    San Francisco
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Miami
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    San Diego
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    East Bay
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Long Beach
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-auto mb-3">
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Los Angeles
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Washington DC
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Seattle
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Portland
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Nashville
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-auto mb-3">
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    New York City
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Orange County
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Atlanta
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Charlotte
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Denver
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-auto mb-3">
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Chicago
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Phoenix
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Las Vegas
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Sacramento
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Oklahoma City
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-auto mb-3">
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Columbus
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    New Mexico
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Albuquerque
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Sacramento
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    New Orleans
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="text-900" />
          <div className="row">
            <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
              <h5 className="lh-lg fw-bold text-white">COMPANY</h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    About Us
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Team
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Careers
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xxl-2 col-lg-3 mb-3">
              <h5 className="lh-lg fw-bold text-white">CONTACT</h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Help &amp; Support
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Partner with us{" "}
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Ride with us
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Ride with us
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
              <h5 className="lh-lg fw-bold text-white">LEGAL</h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Refund &amp; Cancellation
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Privacy Policy
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xxl-2 mb-3">
              <h5 className="lh-lg fw-bold text-white">LEGAL</h5>
              <ul className="list-unstyled mb-md-4 mb-lg-0">
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Terms &amp; Conditions
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Refund &amp; Cancellation
                  </a>
                </li>
                <li className="lh-lg">
                  <a className="text-200 text-decoration-none" href="#!">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-8 col-lg-6 col-xxl-4">
              <h5 className="lh-lg fw-bold text-500">FOLLOW US</h5>
              <div className="text-start my-3">
                {" "}
                <a href="#!">
                  <svg
                    className="svg-inline--fa fa-instagram fa-w-14 fs-2 me-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="instagram"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="#BDBDBD"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                </a>
                <a href="#!">
                  <svg
                    className="svg-inline--fa fa-facebook fa-w-16 fs-2 mx-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="facebook"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#BDBDBD"
                      d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                    />
                  </svg>
                </a>
                <a href="#!">
                  <svg
                    className="svg-inline--fa fa-twitter fa-w-16 fs-2 mx-2"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="#BDBDBD"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                </a>
              </div>
              <h3 className="text-500 my-4">
                Receive exclusive offers and <br />
                discounts in your mailbox
              </h3>
              <div className="row input-group-icon mb-5">
                <div className="col-auto">
                  <i className="fas fa-envelope input-box-icon text-500 ms-3" />
                  <input
                    className="form-control input-box bg-800 border-0"
                    type="email"
                    placeholder="Enter Email"
                    aria-label="email"
                  />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className="border border-800" />
          <div className="row flex-center pb-3">
            <div className="col-md-6 order-0">
              <p className="text-200 text-center text-md-start">
                All rights Reserved © Your Company, 2024
              </p>
            </div>
            <div className="col-md-6 order-1">
              <p className="text-200 text-center text-md-end">
                {" "}
                Made with&nbsp;
                <svg
                  className="bi bi-suit-heart-fill"
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={15}
                  fill="#FFB30E"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                </svg>
                &nbsp;by&nbsp;
                <a
                  className="text-200 fw-bold"
                  href="https://themewagon.com/"
                  target="_blank"
                >
                  ThemeWagon{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      {/* <section> close ============================*/}
      {/* ============================================*/}
    </main>
  );
};

export default Html;
