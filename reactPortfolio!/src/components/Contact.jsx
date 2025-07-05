import {Mail, MapPin, Phone} from 'lucide-react'
const Contact = () => {
    return (
        <section id="Contact"
        className='pt-80 md:pb-60 pb-40'>
            <div className='text-2xl md:text-3xl font-bold animate-fade-in'>
                Get In <span className='text-primary'> Touch</span>
            </div>
            <p className='p-2 md:pl-52 md:pr-52 pb-24 animate-fade-in-delay-1'>
                Have a project in mind or want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities.
            </p>
            <div className='md:flex animate-fade-in-delay-2'>
                <a className='md:pl-80 container flex'>
                    <Mail size = {24}/>
                    <a href='mailto:gulraiz127094@gmail.com'
                        className='pl-2'>gulraiz127094@gmail.com</a>
                </a>
                <a className='md:pr-24 pt-4 md:pt-0 container flex'>
                    <MapPin/>
                    <a href="https://www.google.com/maps?q=Islamabad+Pakistan"
                       target="_blank"
                       rel="noopener noreferrer"
                       className='pl-1'>Islamabad, Pakistan</a>
                </a>
            </div>
        </section>
    )
}
export default Contact;