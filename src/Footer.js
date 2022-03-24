import React from "react";
import icon from './image/Icon.png';
import icon2 from './image/Icon2.png';
import icon4 from './image/Icon4.png';
import icon3 from './image/Icon3.png';
export default function Footer() {
    return (


        <footer id="footer">
            <div className="pinfo">
                <p>12 Hachache aek Mascara -Algeria- 29000</p>
                <p>(+213)672778417</p>
                <p>Abderrahimkdn@gmail.com</p>
            </div>
            <div className="site">
                <a href="#aboutme">About</a>
                <a href="#projects">Projects</a>
                <a href='#cntct'>Contact</a>
            </div>
            <div className="smedia">

                <a href="https://github.com/kadnaoui" target="_blank">
                    <img src={icon}></img>
                </a>
                <a href="https://www.instagram.com/abderrahimkadnaoui/" target="_blank">
                    <img src={icon2}></img>
                </a>
                <a href="https://www.facebook.com/abderrahim29" target="_blank">
                    <img src={icon3}></img>
                </a>

            </div>

        </footer>

    )
}