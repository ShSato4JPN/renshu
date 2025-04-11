import { useRef, useState, useEffect } from "react";

import "./App.css";

interface RefValue {
  [key: string]: { x: number; y: number; element: HTMLElement | null };
}

const animation = (node: HTMLElement, x: number, y: number, delay?: number) => {
  node.style.transition = "none";
  node.style.transform = `translate(${x}px,${y}px)`;

  if (delay) {
    setTimeout(() => {
      // 強制的にリフロー/レイアウト計算を実行させる
      node.style.transform = "";
      node.style.transition = "all 300ms";
    }, delay);
  } else {
    requestAnimationFrame(() => {
      // 強制的にリフロー/レイアウト計算を実行させる
      node.style.transform = "";
      node.style.transition = "all 300ms";
    });
  }
};

const HoverAnimeSample = ({
  anime,
  delay = 0,
}: {
  anime: boolean;
  delay?: number;
}) => {
  const [boxColors, setBoxColors] = useState(["red", "blue"]);

  const positions = useRef<RefValue>({
    red: { x: 0, y: 0, element: null },
    blue: { x: 0, y: 0, element: null },
  }).current;

  // 要素が入れ替えられた後のアニメーション処理
  useEffect(() => {
    if (!anime) return;

    Object.keys(positions).forEach((color) => {
      if (!positions[color].element) return;

      const element = positions[color].element!;
      const position = positions[color];
      const rect = element.getBoundingClientRect();

      if (position.x || position.y) {
        const x = position.x - rect.left;
        const y = position.y - rect.top;

        animation(element, x, y, delay);
      }

      // 新しい位置を保存
      position.x = rect.left;
      position.y = rect.top;
    });
  }, [boxColors, anime, delay, positions]);

  return (
    <section>
      <div className="container">
        {boxColors.map((color) => (
          <div key={color} className="box-wrapper">
            <div
              className={`box ${color}`}
              ref={(ele) => {
                if (!ele) return;
                positions[color].element = ele;
              }}
            >
              <p>Box</p>
            </div>

            <div className={`box-bg ${color}`} />
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          setBoxColors([...boxColors].reverse());
        }}
      >
        要素を入れ替える
      </button>
    </section>
  );
};

export default function App() {
  return (
    <div className="App">
      {/* <section>
        <h5>アニメーション無し</h5>
        <HoverAnimeSample anime={false} />
      </section> */}

      {/* <section>
        <h5>遅延させてアニメーション</h5>
        <HoverAnimeSample anime={true} delay={500} />
      </section> */}

      <section>
        <h5>遅延しないでアニメーション</h5>
        <HoverAnimeSample anime={true} />
      </section>
    </div>
  );
}
