"use client";

import React from "react";
import Image from "next/image";
import "../styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  function handleClick(event: React.MouseEvent<SVGSVGElement, MouseEvent>) {
    const icon: SVGSVGElement | null = (event.target as Element)?.closest(
      "svg",
    );
    icon?.classList.toggle("toggle-icon");
    icon?.classList.toggle("rotated-icon");
    const closestDiv: HTMLDivElement | null = (
      event.target as Element
    )?.closest("div"); // Find the closest parent div
    const ulElement = closestDiv?.nextElementSibling; // Find the next sibling element

    if (ulElement && ulElement.tagName === "UL") {
      ulElement.classList.toggle("hide");
      ulElement.classList.toggle("show");
    }
  }

  return (
    <footer id="footer">
      {/*Be the first */}
      <div className="newsletter-section">
        <h4>Be the first to know</h4>
        <p className="small-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. this is simply dummy text.
        </p>
        <p className="normal-text">Sign up for updates from mettā muse.</p>
        <form>
          <input placeholder="Enter your e-mail..." />
          <button className="subscribe-btn">Subscribe</button>
        </form>
      </div>

      <div className="contact-section">
        {/*Contact*/}

        <div className="contact-container">
          <h4>CONTACT US</h4>
          <div className="wrapper">
            <a href="tel:+44 221 133 5360" className="contact-no">
              +44 221 133 5360
            </a>
            <div className="star"></div>
            <a
              href="mailto:customercare@mettamuse.com"
              className="email-address"
            >
              customercare@mettamuse.com
            </a>
          </div>
        </div>
        {/*Currrency*/}
        <div className="currency-container">
          <h4>Currency</h4>
          <div className="image-container">
            <Image
              src={"US-flag.svg"}
              alt={"Picture of US flag"}
              height={24}
              width={24}
              className="currency-image"
            />
            <div className="star"></div>
            USD
          </div>
          <p>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <hr />

      <div className="link-section">
        <div className="icon-wrapper">
          <h4>mettā muse</h4>
          <FontAwesomeIcon
            icon={faAngleRight}
            onClick={(event) => handleClick(event)}
            className="toggle-icon"
          />
        </div>
        <ul className="link-list hide">
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Stories</a>
          </li>
          <li>
            <a href="#">Artisans</a>
          </li>
          <li>
            <a href="#">Boutiques</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">EU Compliances Docs</a>
          </li>
        </ul>
      </div>
      <div className="link-section">
        <div className="icon-wrapper">
          <h4>Quick Links</h4>
          <FontAwesomeIcon
            icon={faAngleRight}
            onClick={(event) => handleClick(event)}
            className="toggle-icon"
          />
        </div>
        <ul className="link-list hide">
          <li>
            <a href="#">Orders & Shipping</a>
          </li>
          <li>
            <a href="#">Join/Login as a Seller</a>
          </li>
          <li>
            <a href="#">Payment & Pricing</a>
          </li>
          <li>
            <a href="#">Return & Refunds</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms $ Conditions</a>
          </li>
        </ul>
      </div>

      <div className="follow-section">
        {/* Follow us*/}
        <div className="icon-container">
          <h4>Follow Us</h4>
          <FontAwesomeIcon
            icon={faAngleRight}
            onClick={(event) => handleClick(event)}
            className="toggle-icon"
          />
        </div>

        <ul className="icon-list hide">
          <li>
            <Image
              src={"/instagram-logo.png"}
              alt={"Picture of Instagram Logo"}
              height={0}
              width={0}
              style={{ width: "1.25rem", height: "auto" }}
            />
          </li>

          <li>
            <Image
              src={"/linkedin-logo.png"}
              alt={"Picture of Linkedin Logo"}
              height={0}
              width={0}
              style={{ width: "1.25rem", height: "auto" }}
            />
          </li>
        </ul>

        <h4>mettā muse Accepts</h4>
        <ul className="apps-list">
          <li className="app-icon ">
            <Image
              src={"/G-Pay.svg"}
              width={0}
              height={0}
              alt={"Picture of G Pay"}
              style={{ width: "2.5rem", height: "auto" }}
            />
          </li>
          <li className="app-icon">
            <Image
              src={"/master-card.svg"}
              width={0}
              height={0}
              alt={"Picture of MasterCard"}
              style={{ width: "2rem", height: "auto" }}
            />
          </li>
          <li className="app-icon">
            <Image
              src={"/paypal.svg"}
              width={0}
              height={0}
              alt={"Picture of Paypal"}
              style={{ width: "1rem", height: "auto" }}
            />
          </li>
          <li className="app-icon amex">
            <Image
              src={"/amex.svg"}
              width={0}
              height={0}
              alt={"Picture of Amex"}
              style={{ width: "2.5rem", height: "auto" }}
            />
          </li>
          <li className="app-icon">
            <Image
              src={"/apple-pay.svg"}
              width={0}
              height={0}
              alt={"Picture of Apple Pay"}
              style={{ width: "2.5rem", height: "auto" }}
            />
          </li>
          <li className="app-icon O-pay">
            <Image
              src={"/O-pay.svg"}
              width={0}
              height={0}
              alt={"Picture of O Pay"}
              style={{ width: "2.5rem", height: "auto" }}
            />
          </li>
        </ul>
      </div>
      <p className="copy">
        Copyright &copy; 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
}
