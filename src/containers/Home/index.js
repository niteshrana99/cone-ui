import { connect } from 'react-redux';
import { setLoading } from '../App/meta/actions';
import Home from './components/Home';
import { selectIsLoading } from './meta/selectors';


const mapStateToProps = state => ({
    isLoading:selectIsLoading(state)
});

const mapDispatchToProps = ({
    setLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);