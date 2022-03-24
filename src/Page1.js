import React from "react";
import image from './image/mecv.png';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function Page1() {
    const [windowSize, setWindowSize] = React.useState();
    React.useEffect(() => {
        function handleResize() {
            setWindowSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const [ref1, inView1] = useInView()
    const [ref2, inView2] = useInView()
    const infosVariant = {
        hidden: { x: -200 },
        visible: {
            x: 0,
            transition: {
                duration: 1.5
            }
        }

    }
    const imageVariant = windowSize < 900 ? {
        hidden: { x: 4, opacity: 0 },
        visible: {
            x: 0, opacity: 1,
            transition: { duration: 1.2 }
        }
    } : {
        hidden: { y: 200 },
        visible: {
            y: 0,
            transition: { duration: 0.7 }
        }
    }
    return (
        <div id="aboutme" >

            <motion.div
                variants={infosVariant}
                animate={inView1 ? 'visible' : 'hidden'}

                transition='transition'
                className="infos"

                ref={ref1}
            ><h1>About Me</h1>
                <p> Hi There, I’m Abderrahim Kadnaoui ,a motivated junior web developper looking for an opportunity
                    to grow front-end development skills in an innovative environment. <br />It's
                    been 2 years since i started web Development, I have developed few websites before and provided my services
                    to my colleagues at university by creating their projects. <br />

                    I recently learned React JS and i'm looking forward to learn more about frontend and grow as a developper. <br />
                    My Skill Set : HTML, CSS, JavaScript ,React ,SQl ,PHP.

                </p>
            </motion.div>
            <motion.div
                variants={imageVariant}
                animate={inView2 ? 'visible' : 'hidden'}
                transition='transition'
                className="img"
                ref={ref2}> <img src={image} alt="my photo" id="myphoto" /></motion.div>

        </div>

    )
}