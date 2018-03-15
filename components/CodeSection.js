import SyntaxHighlighter from 'react-syntax-highlighter/prism';
import { okaidia } from 'react-syntax-highlighter/styles/prism';

export default ({ children }) => {
  return <SyntaxHighlighter language='javascript' style={okaidia}>{children}</SyntaxHighlighter>;  
}
