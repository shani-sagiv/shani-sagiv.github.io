import React from "react";
import "./Destination.scss";
import Card from "../../components/Card/Card";
import { useNavigate } from "react-router-dom";
import Title from "../../components/Title/Title";
import StickyHeaderScroll from "components/StickyHeaderScroll/StickyHeaderScroll";
import { Collapsibles } from "components";

interface CountryProps extends React.HTMLAttributes<HTMLDivElement> {}

const Destination: React.FC<CountryProps> = ({}) => {
  const navigate = useNavigate();
  const items = [
    {
      title: <h1>🐶</h1>,
      content: (
        <p>
          This is the content for section 1
          <div style={{ width: "100%", backgroundColor: "red", fontSize: 40 }}>
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
          <div
            style={{ width: "100%", backgroundColor: "orange", fontSize: 40 }}
          >
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
          <div style={{ width: "100%", backgroundColor: "blue", fontSize: 40 }}>
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
  const items2 = [
    {
      title: "Click to Expand 1",
      content:
        "This is the collapsible content that will be shown when clicked!",
    },
    {
      title: "Click to Expand 2",
      content:
        "This is the collapsible content that will be shown when clicked!",
    },
    {
      title: "Click to Expand 3",
      content:
        "This is the collapsible content that will be shown when clicked!",
    },
    {
      title: "Click to Expand 4",
      content:
        "This is the collapsible content that will be shown when clicked!",
    },
  ];

  return (
    <div className={"Destination"}>
      <Title title={"Destination"} />
      <Collapsibles items={items2} />
      <StickyHeaderScroll items={items} />
    </div>
  );
};

export default Destination;
