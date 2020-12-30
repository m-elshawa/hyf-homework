import React, { Component } from "react";

class DeadLine extends Component {
  render() {
    return (
      <div class="dato">
        <form>
          <label>
            Deadline:
            <input type="date" name="name" />
          </label>
        </form>
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default DeadLine;
