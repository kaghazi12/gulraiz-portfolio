import {Sun} from 'lucide-react';
const About = () => {
    return (
        <section id="About"
        className='pt-80'>
            <div className='pb-20 text-2xl md:text-3xl font-bold animate-fade-in'>
                About <span className='text-primary'>Me </span>
            </div>
            <div className='md:flex'>
                <a className='md:container md:pl-52 md:text-2xl text-xl animate-fade-in-delay-1 font-bold'>
                    Passionate web developer and Computer Science student
                    <p className='pl-10 pr-10 font-normal text-base pt-4 animate-fade-in-delay-2'>
                        I'm a passionate Computer Science student with a keen interest in web development, blockchain, and software engineering.
                    </p>
                    <p className='pl-10 pr-10 font-normal text-base pt-2 animate-fade-in-delay-2'>
                        I specialize in creating responsive, user-friendly applications using technologies like
                        JavaScript, React, and Tailwind CSS, backed by a strong foundation in C++, Java, and C#.
                    </p>
                    <p className='pb-16 md:pb-0 pl-10 pr-10 font-normal text-base pt-2 animate-fade-in-delay-2'>
                        I love turning ideas into impactful digital solutions and constantly strive to grow as a developer.
                    </p>
                </a>
                <a className='md:container md:pr-52 md:text-2xl text-xl animate-fade-in-delay-1 font-bold'>
                    Turning Ideas into Impactful Experiences
                    <p className= 'pl-10 pr-10 font-normal text-base pt-4 animate-fade-in-delay-2'>
                        Driven by curiosity and powered by code, I build websites that are not just functional but meaningful.
                        My journey in web development blends a deep understanding of design principles with a developer’s mindset.
                        From concept to deployment, I enjoy turning ideas into real-world solutions that perform smoothly across devices
                        and platforms.
                    </p>
                </a>
            </div>
        </section>
    )
}
export default About;