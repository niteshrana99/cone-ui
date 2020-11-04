import ProductList from './components/ProductList';
import { getProducts } from './meta/actions';
import { selectVacations } from './meta/selectors';
const { connect } = require("react-redux");


const mapStateToProps = state => ({
    products: selectVacations(state)
});

const mapDispatchToProps = ({
    getProducts
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)