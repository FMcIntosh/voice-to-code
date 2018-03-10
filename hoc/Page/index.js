import MuiThemeWrapper from 'hoc/MuiThemeWrapper';
import { withTheme } from 'material-ui/styles';

const decorator = (ComposedComponent, mapStateToProps) => MuiThemeWrapper(ComposedComponent);

export default decorator;
