import Login from "./components/Login";
import { compose } from "redux";

const { connect } = require("react-redux");

const mapStateToProps = state => ({});

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)