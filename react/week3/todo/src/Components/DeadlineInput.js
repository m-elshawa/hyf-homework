import React, { Component } from "react";

class DeadlineInput extends Component {
  render() {
    return (
      <div class="dato">
        <form>
          <label>
            Deadline:
            <input type="date" name="name" />
          </label>
        </form>
        
      </div>
    );
  }
}

export default DeadlineInput;
