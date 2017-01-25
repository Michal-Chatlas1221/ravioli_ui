import { connect } from 'react-redux'
import ScriptForCalculations from '../components/ScriptForCalculations.jsx'

const mapDispatchToProps = (dispatch) => {
  return {
    ScriptForCalculations: () => {
      dispatch(ScriptForCalculations())
    }
  }
}

const ScriptForCalculationsContainer = connect(
  mapDispatchToProps
)(ScriptForCalculations)

export default ScriptForCalculationsContainer
