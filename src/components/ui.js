import * as React from "react";
import { Link } from "gatsby";
import {btn} from './ui.module.css'

const Button = ({ link, children }) => {
  return <Link to={link} className={btn}>{children}</Link>;
};

export default Button;
