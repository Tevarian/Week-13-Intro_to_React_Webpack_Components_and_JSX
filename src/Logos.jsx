import React, { Component } from "react";
import rushworksLogo from "/RUSHWORKS.svg";
import encoLogo from "/ENCO.svg";

export default class Logos extends Component {
  render() {
    return (
      <>
        <div>
          <a href="https://enco.com" target="_blank">
            <img src={encoLogo} className="logo" alt="ENCO logo" />
          </a>
          <a href="https://rushworks.tv" target="_blank">
            <img src={rushworksLogo} className="logo" alt="RUSHWORKS logo" />
          </a>
        </div>
        <h1>ENCO + RUSHWORKS</h1>
        <p>
          On January 1st of 2023 the company I work for, RUSHWORKS, was acquired
          by ENCO.
        </p>
        <p>
          I have nothing to do wither either website, but I did want to use a
          company theme on this project.
        </p>
      </>
    );
  }
}
