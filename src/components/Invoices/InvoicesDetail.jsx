import React from "react";
import { Reply, ArrowDropDown } from "@mui/icons-material";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const InvoicesDetail = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {/* ---------=============  Invoice Details  ==========--------- */}

      <div className="estimatesDetail">
        {/* ---------=============  Invoice Details Header ==========--------- */}

        <div className="estimatesDetailHeader">
          {/* ---------=============  Invoice Details Header Left  ==========--------- */}

          <div className="estimatesDetailHeaderLeft">
            <p className="estimatesDetailHeaderAddress">
              1234 New Ballwin Road,mo 63011
            </p>
            <p>Phone:354-987-9876</p>
            <p className="estimatesDetailHeaderEmail">Email:3456@gmail.com</p>
          </div>
          {/* ---------=============  Invoice Details Header  Right ==========--------- */}

          <div
            className="estimatesDetailHeaderRight"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            <NavLink to="/Invoices">
              <Button
                variant="contained"
                startIcon={<Reply />}
                className="aktive "
                id="HeaderReturnBtn"
              >
                Return
              </Button>
            </NavLink>

            <div className="action" style={{ position: "relative" }}>
              <Button
                variant="contained"
                endIcon={<ArrowDropDown />}
                className="aktive "
                id="HeaderReturnBtn"
                onClick={toggleDropdown}
              >
                Action
              </Button>
              {isOpen && (
                <ul className="PaymentMethodSelection">
                  <li>Print</li>
                  <li>Copy</li>
                  <li>Download PDF</li>
                  <li>Share Link</li>
                  <li>Delete</li>
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* ---------=============  Invoice Details body ==========--------- */}

        <div className="estimateDetailBody">
          {/* ---------=============  Invoice Details Service ==========--------- */}

          <div className="estimateDetailBodyLeft">
            <div style={{ paddingRight: "10px" }}>
              {/* ---------=============  Invoice Details Service Heading ==========--------- */}

              <div className="estimateDetailBodyLeftHeader">
                {/* ---------=============  Invoice Details Service Invoice Id ==========--------- */}

                <div className="estimateDetailBodyLeftHeaderLeft">
                  <h1>Invoices #0271</h1>
                  <h3 style={{ color: "#E73844" }}>Unpaid</h3>
                </div>

                {/* ---------=============  Invoice Details Service Invoice Date ==========--------- */}

                <div className="estimateDetailBodyLeftHeaderRight">
                  <p>
                    Send On: <strong>Dec 31, 2022</strong>
                  </p>
                  <p>
                    Approved On: <strong>Nov 23, 2022</strong>
                  </p>
                </div>
              </div>

              {/* ---------=============  Invoice Details Service Invoice To ==========--------- */}

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

            {/* ---------=============   Invoice Service Provided==========--------- */}

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

              {/* ---------=============  Invoice Service Provided Total ==========--------- */}

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

          {/* ---------=============  Invoice Details Payment ==========--------- */}

          <div className="estimateDetailBodyRight">
            {/* ---------=============  Invoice Details Amount Due ==========--------- */}

            <div className="AmountPayment">
              <div>
                <h2>Amount due:</h2>
                <h2 style={{ fontWeight: "400" }}>$2500.00</h2>
              </div>
              <div>
                <h2>Make a payment</h2>
              </div>
            </div>

            {/* ---------=============  Invoice  Payment Details ==========--------- */}

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

            {/* ---------=============  Invoice Payment Submit Button ==========--------- */}

            <Button variant="contained" id="HeaderReturnBtn">
              Submit Payment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicesDetail;
