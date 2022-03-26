import React from 'react';
import { Carousel } from 'react-bootstrap';
import Typed from 'react-typed';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import x1 from './image/instaClone.PNG';
import x2 from './image/Crypto.png';
import x3 from './image/memeg.png';

const Projects = () => {
    const [index, setIndex] = React.useState(0);
    const { ref, inView } = useInView()
    const boxVariant = {
        hidden: { x: -100 },
        visible: {
            x: 0,
            transition: {
                duration: 0.7,
                when: 'beforeChildren',
                staggerChildren: 0.2
            }
        }

    }
    const listVariant = {
        hidden: {
            x: -60,
            opacity: 0

        },
        visible: {
            x: 0,
            opacity: 1
        }

    }
    const projects = [
        {
            id: 1,
            src: x3,
            link: 'https://kadnaoui.github.io/Meme/'
        },
        {
            id: 2,
            src: x2,
            link: 'https://cryptocapp.netlify.app/'
        },
        {
            id: 3,
            src: x1,
            link: 'https://kdninstaclone.netlify.app/'
        }
    ]

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const [infos, setInfos] = React.useState([]);
    const [Title, setTitle] = React.useState();
    console.log(infos);
    React.useEffect(() => {
        switch (index) {
            case 0:
                setInfos(['Generate a random meme image from an Api and add your idea to it.'])
                setTitle('Meme Generator')
                break;
            case 1:
                setInfos(['', 'Check informations about crypto currancies and refresh to get newer data from the Api '])
                setTitle('Crypto currencies')
                break;
            case 2:
                setInfos(['', 'Create your account, add pictures or stories, follow any of the fake accounts, interact with others posts by leaving likes and comments, add your own posts and stories and all of that without the page refreghing', 'Create your account, add pictures or stories, follow any of the fake accounts, interact with others posts by leaving likes and comments, add your own posts and stories and all of that without the page refreshing. '])
                setTitle('Instagram Clone')
                break;


        }
    }, [index])

    return (
        <motion.div
            variants={boxVariant}
            animate={inView ? 'visible' : 'hidden'}
            transition='transition'
            className='projectsdiv'
            id='projects'
            ref={ref}

        >
            < motion.div
                variants={listVariant}
                className='carousel2'>
                <Carousel activeIndex={index} variant='dark' onSelect={handleSelect} fade indicators={false} >

                    {projects.map(i => {
                        return (
                            <Carousel.Item interval={20000} key={i.id}>
                                <img
                                    className="d-block w-100"
                                    src={i.src}
                                    onClick={() => window.open(i.link, '_blank')}
                                />

                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            </motion.div>
            <motion.div className='projectinfos' variants={listVariant}>

                <div className='Title'> {Title}</div>
                <Typed
                    className='typed2'
                    strings={infos}
                    typeSpeed={30}
                    backSpeed={10}
                />

            </motion.div>

        </motion.div >
    );
}
export default Projects;