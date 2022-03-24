import React from 'react'
import Typed from 'react-typed'
import Particles from "./Par";



export default function Header() {



    return (
        <>


            <div id='home' className='header-wraper' >

                <Particles />
                <div className='main-info'>


                    <Typed
                        className='typed'
                        strings={['Abderrahim Kadnaoui', 'Web Developer', '(Frontend Developer) ']}
                        typeSpeed={50}
                        backSpeed={20}
                        loop
                    />


                </div>
            </div>
        </>
    )
}

