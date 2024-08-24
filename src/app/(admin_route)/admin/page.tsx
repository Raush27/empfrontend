import React from "react";
import styles from "./admin.module.scss";

const Admin = async () => {
  return (
    <div className={styles.dashboard}>
      <div className="row">
        <div className="col-md-4">
          <div
            className={`card ${styles.card} ${styles.info_card} ${styles.sales_card}`}
          >
            <div className="card-body">
              <h5 className="card-title">
                Blogs <span>| Today</span>
              </h5>
              <div className="d-flex align-items-center">
                <div
                  className={`${styles.card_icon} rounded-circle d-flex align-items-center justify-content-center`}
                >
                  {/* <Icon iconName="JournalText" /> */}
                </div>
                <div className="ps-3">
                  <h6>{"120 +"}</h6>
                  <span className="text-success small pt-1 fw-bold">12%</span>
                  <span className="text-muted small pt-2 ps-1">increase</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div
            className={`card ${styles.card} ${styles.info_card} ${styles.revenue_card}`}
          >
            <div className="card-body">
              <h5 className="card-title">
                Jobs <span>| This Month</span>
              </h5>
              <div className="d-flex align-items-center">
                <div
                  className={`${styles.card_icon} rounded-circle d-flex align-items-center justify-content-center`}
                >
                  {/* <Icon iconName="PersonSlash" /> */}
                </div>
                <div className="ps-3">
                  <h6>{"664 +"}</h6>
                  <span className="text-success small pt-1 fw-bold">
                    8%
                  </span>{" "}
                  <span className="text-muted small pt-2 ps-1">increase</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div
            className={`card ${styles.card} ${styles.info_card} ${styles.customers_card}`}
          >
            <div className="card-body">
              <h5 className="card-title">
                Users <span>| This Year</span>
              </h5>
              <div className="d-flex align-items-center">
                <div
                  className={`${styles.card_icon} rounded-circle d-flex align-items-center justify-content-center`}
                >
                  {/* <Icon iconName="People" /> */}
                </div>
                <div className="ps-3">
                  <h6>{"1000 +"}</h6>
                  <span className="text-danger small pt-1 fw-bold">
                    12%
                  </span>{" "}
                  <span className="text-muted small pt-2 ps-1">decrease</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Admin;
