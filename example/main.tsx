import { createRoot } from "react-dom/client";
import { Choose, Otherwise, When } from "../packages/index";

function App() {
  return (
    <div>
      <div>
        <h1>Choose / When / Otherwise 组合使用</h1>
        <Choose>
          <When condition={true}>
            <p>true</p>
          </When>
          <When condition={false}>
            <p>false</p>
          </When>
          <Otherwise>
            <p>otherwise</p>
          </Otherwise>
        </Choose>
      </div>
      <div>
        <h1> When 单独使用</h1>
        <When condition={true}>
          <p>true</p>
        </When>
        <When condition={false} fallback={<p>condition is false</p>}>
          <p>false</p>
        </When>
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
