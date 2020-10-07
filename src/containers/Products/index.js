import ProductList from './components/ProductList';

const { connect } = require("react-redux");

const mapStateToProps = state => ({});

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)