import React, {useState, useEffect} from "react";
import {styled, connect} from "frontity";

const Dashboard = () => {

  return(
    <>
      <div className="container py-3">
        <div className="row">
        <div className="col-12">
            <div className="card p-3 rounded-lg">
              <h3>Thống kê cá nhân</h3>
              <hr />
            </div>
        </div>
        <div className="col-12">
            <h3>Nhóm cổ phiếu hiện có</h3>
            <hr />
          </div>
          <div className="col-12">
            <h3>Phân bổ theo nhóm ngành</h3>
            <hr />
          </div>
          <div className="col-12">
            <h3>Những cổ phiếu đề xuất trong danh mục của bạn</h3>
            <hr />
          </div>
        </div> 
      </div> 
    </>
  ); 
}

export default connect(Dashboard);