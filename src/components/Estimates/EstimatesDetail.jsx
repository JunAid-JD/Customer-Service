import React from "react";
import "./EstimatesDetail.css";
import { Download, Reply, ArrowDropDown } from "@mui/icons-material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";

const EstimatesDetail = () => {
  return (
    <div className="estimatesDetail">
      {/* ---------=============  Estimate Details  ==========--------- */}

      {/* ---------=============  Estimate Details Header ==========--------- */}
      <div className="estimatesDetailHeader">
        {/* ---------=============  Estimate Details Header Left  ==========--------- */}

        <div className="estimatesDetailHeaderLeft">
          <p className="estimatesDetailHeaderAddress">
            1234 New Ballwin Road,mo 63011
          </p>
          <p>Phone:354-987-9876</p>
          <p className="estimatesDetailHeaderEmail">Email:3456@gmail.com</p>
        </div>
        {/* ---------=============  Estimate Details Header  Right ==========--------- */}

        <div className="estimatesDetailHeaderRight">
          <NavLink to="/ApproveEstimate">
            <Button
              variant="contained"
              className="aktive "
              id="HeaderReturnBtn"
            >
              <p style={{ fontWeight: "300" }}>Request Changes</p>
            </Button>
          </NavLink>

          <NavLink to="/RequestChanges">
            <Button
              variant="contained"
              className="aktive "
              id="HeaderReturnBtn"
            >
              <p style={{ fontWeight: "300" }}>Approve Estimate</p>
            </Button>
          </NavLink>
          <NavLink>
            <Button
              variant="contained"
              startIcon={<Download />}
              className="aktive "
              id="HeaderReturnBtn"
            >
              Download
            </Button>
          </NavLink>
          <NavLink to="/Estimates" style={{ marginRight: "30px" }}>
            <Button
              variant="contained"
              startIcon={<Reply />}
              className="aktive "
              id="HeaderReturnBtn"
            >
              Return
            </Button>
          </NavLink>
        </div>
      </div>

      {/* ---------=============  Estimate Details body ==========--------- */}

      <div className="estimateDetailBody">
        {/* ---------=============  Estimate Details Service ==========--------- */}

        <div className="estimateDetailBodyLeft">
          <div style={{ paddingRight: "10px" }}>
            {/* ---------=============  Estimate Details Service Heading ==========--------- */}

            <div className="estimateDetailBodyLeftHeader">
              {/* ---------=============  Estimate Details Service Invoice Id ==========--------- */}

              <div className="estimateDetailBodyLeftHeaderLeft">
                <h1>Estimate #0271</h1>
                <h3>Approved</h3>
              </div>
              {/* ---------=============  Estimate Details Service Invoice Date ==========--------- */}

              <div className="estimateDetailBodyLeftHeaderRight">
                <p>
                  Send On: <strong>Dec 31, 2022</strong>
                </p>
                <p>
                  Approved On: <strong>Nov 23, 2022</strong>
                </p>
              </div>
            </div>

            {/* ---------=============  Estimate Details Service Invoice To ==========--------- */}

            <div className="Bill-To">
              <h3>Bill To:</h3>
              <div className="BillToBody">
                <div className="BillToLeft">
                  <div className="BillToNameAddress">
                    <h3>James Doe</h3>
                    <p style={{ paddingBottom: "10px" }}>
                      {" "}
                      1234 New Ballwin Road,mo 63011
                    </p>
                  </div>
                  <div className="BillToPhoneEmail">
                    <p>(314-546-7896)</p>
                    <p>jamesdoe@outlook.com</p>
                  </div>
                </div>
                <div className="BillToRight">
                  <p style={{ paddingBottom: "10px" }}>
                    Thank you for your business.PLease contact us
                    {/* <br /> */}
                    with any question regarding this estimate.
                  </p>
                  <p>
                    If your estimate is showing deposit required,
                    {/* <br /> */}
                    please make your deposit so we can perform the job
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ---------=============   Estimate Service Provided==========--------- */}

          <div className="serviceProvided">
            <h1>Service Provided</h1>
            <div className="serviceProvidedTable">
              <div className="serviceProvidedTableRow serviceTableHeader">
                <p>SERVICE</p>
                <p>DESCRIPTION</p>
                <p>QTY</p>
                <p>PRICE</p>
                <p>TOTAL</p>
              </div>
              <div className="serviceProvidedTableRow">
                <p>Tree Removal Full Process</p>
                <p>Full Tree Removal Process and clean up</p>
                <p>1</p>
                <p>$700</p>
                <p>700</p>
              </div>
              <div className="serviceProvidedTableRow">
                <p>Tree Removal Full Process</p>
                <p>Full Tree Removal Process and clean up</p>
                <p>1</p>
                <p>$700</p>
                <p>700</p>
              </div>
            </div>

            {/* ---------=============  Estimate Service Provided Total ==========--------- */}

            <div className="TableTotal">
              <div className="TableTotalRow">
                <p>SUBTOTAL</p>
                <p>$1400.00</p>
              </div>
              <div className="TableTotalRow">
                <p>TAX</p>
                <p>5%</p>
              </div>
              <div className="TableTotalRow">
                <p>TOTAL</p>
                <p>$1400.00</p>
              </div>
              <div className="TableTotalRow">
                <p>ACCOUNT BALANCE</p>
                <p>$0.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------=============  Estimate Details Payment ==========--------- */}

        <div className="estimateDetailBodyRight">
          {/* ---------=============  Estimate Details Amount Due ==========--------- */}

          <div className="AmountPayment">
            <div>
              <h2>Amount due:</h2>
              <h2 style={{ fontWeight: "400" }}>$0.00</h2>
            </div>
            <div>
              <h2>Make a payment</h2>
              <Button
                variant="contained"
                endIcon={<ArrowDropDown />}
                className="aktive "
                id="HeaderReturnBtn"
              >
                <p style={{ fontWeight: "400", fontSize: "11px" }}>
                  Payment Method
                </p>
              </Button>
              <ul className="PaymentMethodSelection">
                <li>Debit/Credit Card</li>
                <li>Cash</li>
                <li>Check</li>
                <li>Bank Account</li>
              </ul>
            </div>
          </div>
          {/* ---------=============  Estimate  Payment Details ==========--------- */}

          <form className="PaymentForm">
            <input type="text" placeholder="Name on card" />
            <input type="text" placeholder="243-245-675-789" />
            <div className="amountPaymentFormDate">
              <input type="text" placeholder="MM/YY" />
              <input type="text" placeholder="CVV" />
              <input type="text" placeholder="ZIP Code" />
            </div>
            <input type="text" placeholder="Amount" />
            <input type="email" placeholder="Email" />
            <textarea rows="5" placeholder="Signature required" />
          </form>

          {/* ---------=============  Estimate Payment Submit Button ==========--------- */}

          <Button variant="contained" id="HeaderReturnBtn">
            Submit Payment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EstimatesDetail;
