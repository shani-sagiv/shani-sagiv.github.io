import React from "react";
import "./Destination.scss";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import { Collapsible } from "components/Collapsible";
import StickyHeaderScroll from "components/StickyHeaderScroll/StickyHeaderScroll";

interface CountryProps extends React.HTMLAttributes<HTMLDivElement> {}

const Destination: React.FC<CountryProps> = ({}) => {
  const navigate = useNavigate();
  const items = [
    {
      title: <h1>🐶</h1>,
      content: (
        <p>
          This is the content for section 1
          <div style={{ width: 50, backgroundColor: "red" }}>
            🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🐔 🐧 🐦 🐤 🐣 🐥 🦆
            🦅 🦉 🦇 🦋 🐌 🐛 🐜 🐝 🐞 🦗 🦂 🦀 🐢 🐍 🦎 🦖 🦕 🐙 🐡 🐠 🐟 🐬 🐳
            🐋 🦈 🐊 🐅 🐆 🦓 🦍 🦧 🦣 🦒 🦌 🐘 🦏 🦛 🐪 🐫 🦙 🦥 🦦 🦨 🦘 🦡 🐃
            🐂 🐄 🐎 🐖 🐏 🐑 🦙 🦌 🐐 🐕 🐩 🐈 🐓 🦃 🦚 🦜 🦢 🦩 🦤 🐇 🐁 🐀 🦔
            🐿 🦝 🦨 🦦 🐾 🦡 🐉 🐲
          </div>
        </p>
      ),
    },
    {
      title: <h1>🌸</h1>,
      content: (
        <p>
          This is the content for section 2
          <div style={{ width: 50, backgroundColor: "orange" }}>
            🌸 🌼 💐 🌹 🏵 🌻 🌺 🌷 🌱 🌿 🍀 🍃 🍂 🍁 🌾 🌵 🌴 🌳 🌲 🌷 🌹 🌻 🌺
            🌸 🏵 💮 🥀 💐 🍁 🌼 🌱 🌿 🍀 🍂 🌷 🌹 🌻 🌺 🏵 🌸 💐 🥀 🌼 🌱 🌵 🌾
            🌷 🍃 🍂 🍁 🌸 🌹 🌿 🍀 🌻 🏵 🌷 🌺 💮 🌴 🌲 🌳 🌵 🍃 🌼 🥀 🌾 🍁 🍂
            🌿 🌱 💐 🏵 🌸 🌻 🌺 🌷 🍀 🌹 🍂 🍁 🍃 🌱 🌾 🌿 🥀 💐 🌵 🌲 🌳 🌸 🌷
            🌹 🌻 🌼 🏵 🌺 🌿 🌾 🍁
          </div>
        </p>
      ),
    },
    {
      title: <h1>🛸</h1>,
      content: (
        <p>
          This is the content for section 3
          <div style={{ width: 50, backgroundColor: "blue" }}>
            🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌚 🌝 🌛 🌜 🌞 🌙 💫 ⭐ 🌟 ✨ 🌌 🌠 🚀 🛰 🛸
            🌍 🌎 🌏 🪐 ☄️ 🌑 🌕 🌖 🌗 🌘 🌒 🌓 🌔 🌙 🌟 🌠 ✨ 🌌 🚀 🛰 🌍 🌎 🪐
            ☄️ 🌑 🌕 🌝 🌟 🌠 ✨ 🌌 🌑 🛰 🚀 🛸 ☄️ 🪐 🌍 🌎 🌏 🌔 🌕 🌖 🌗 🌘 🌒
            🌑 🌛 🌜 🌞 🌙 🌠 ⭐ ✨ 💫 🌌 🚀 🛰 🛸 ☄️ 🌍 🌏 🪐 🌔 🌗 🌑 🌖 🌝 🌛
            🌟 🌙 ✨ 💫 🌌 🌠 🛸 🚀
          </div>
        </p>
      ),
    },
  ];

  return (
    <div className={"Destination"}>
      <Title title={"Destination"} />

      {/* Container with collapsibles */}
      <div
        style={{
          width: "95%",
          height: "auto",
          border: "2px solid green",
          marginBottom: "20px",
        }}
      >
        <Collapsible title="Click to Expand 1">
          This is the collapsible content that will be shown when clicked!
        </Collapsible>
        <Collapsible title="Click to Expand 2">
          This is the collapsible content that will be shown when clicked!
        </Collapsible>
        <Collapsible title="Click to Expand 3">
          This is the collapsible content that will be shown when clicked!
        </Collapsible>
      </div>

      {/* Main container */}
      <StickyHeaderScroll items={items} />
    </div>
  );
};

export default Destination;
