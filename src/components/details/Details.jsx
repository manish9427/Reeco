import React from "react";
import "./Details.css";
import { IoIosAdd, IoIosRemove, IoIosStar } from "react-icons/io";

const Details = () => {
  return (
    <div className="Details-main">
      <table>
        <thead>
          <tr>
            <th>
              <p>Supplier</p>
              <h1>East coast fruits & vegetables</h1>
            </th>
            <th>
              <p>Shipping date</p>
              <h1>Thu, Feb 10</h1>
            </th>
            <th>
              <p>Total</p>
              <h1>$15,028.3</h1>
            </th>
            <th>
              <p>Category</p>
              <div>
                <IoIosStar />
                <IoIosAdd />
                <IoIosRemove />
              </div>
            </th>
            <th>
              <p>Department</p>
              <h1>300-444-678</h1>
            </th>
            <th>
              <p>Status</p>
              <h1>Awaiting your approvel</h1>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default Details;
