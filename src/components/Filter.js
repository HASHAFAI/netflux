import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ""}
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event) {
    this.props.onSelectChange(event.target.value);
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <section className="section filter">
        <div className="container">
          <form>
            <label className="movieTypeLabel" htmlFor="movieType">{this.props.type}</label>
            <select className="movieTypeSelect" id="movieType" onChange={this.onChangeHandler}>
              <option value="">{this.props.optionText}</option>
              <option value="Action">الأكشن</option>
              <option value="Thriller">الغموض</option>
              <option value="Drama">الدراما</option>
              <option value="Comedy">الكوميدي</option>
            </select>
          </form>
        </div>
      </section>
    );
  }
}

export default Filter;