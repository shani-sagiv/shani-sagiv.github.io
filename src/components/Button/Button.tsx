import React from "react";
import classnames from "classnames";
import "./Button.scss";

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary" | "secondary" | "danger";
  onClick: () => unknown;
  startIcon?: string;
  endIcon?: string;
  bold?: boolean;
  disabled?: boolean;
  iconClassname?: string;
  customClass?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
  startIcon,
  endIcon,
  iconClassname,
  bold,
  customClass = "button",
  style,
}) => {
  return (
    <div
      className={classnames(customClass, variant, { bold })}
      style={style}
      onClick={onClick}
    >
      {startIcon && <img className="startIcon" src={startIcon} />}
      {children}
      {endIcon && (
        <img className={classnames("endIcon", iconClassname)} src={endIcon} />
      )}
    </div>
  );
};

export default Button;
