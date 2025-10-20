import { Code } from "bright";
import styles from "./CodeSnippet.module.css";
import theme from "./theme";
function CodeSnippet(props) {
  return (
    <div>
      <Code {...props} theme={theme} className={styles.wrapper} />
    </div>
  );
}

export default CodeSnippet;
