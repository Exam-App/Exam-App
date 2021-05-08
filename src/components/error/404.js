import React from "react"
import "./404.css"

export default function error404() {
    return (
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h1>404</h1>
          </div>
          <h2>Oops! This Page Could Not Be Found</h2>
          <h3>
            It looks like one of the developers fell asleep 
          </h3>
          <p>
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporarily unavailable
            <br />
          </p>
          <a href="/">Go To Homepage</a>
        </div>
      </div>
    );
}