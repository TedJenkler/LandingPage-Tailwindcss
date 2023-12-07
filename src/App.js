import './App.css';
import logo from "./images/logo.svg"
import heroimg from "./images/illustration-mockups.svg"
import Items from './Components/Items';
import grow from './images/illustration-grow-together.svg'
import conversations from "./images/illustration-flowing-conversation.svg"
import users from "./images/illustration-your-users.svg"
import email from "./images/icon-email.svg"
import phone from "./images/icon-phone.svg"
import location from "./images/icon-location.svg"
import facebook from "./images/facebook.svg"
import twitter from "./images/square-twitter.svg"
import instagram from "./images/square-instagram.svg"
import chat from "./images/Path 3.png"
import {ReactComponent as Twitter} from './images/square-twitter.svg';
import bgimg from "./images/Path 2.png"

function App() {
  return (<>
    <header className='relative bg-header-bg pt-7 min-h-full w-full mb-14 bg-hero-patternm bg-no-repeat bg-right-top z-0 lg:min-h-max lg:bg-hero-patternd' >
        <img className='absolute top-0 right-48 z-10 lg:left-0' src={bgimg} alt='bgimg'/>
        <nav className='mx-4 flex items-center justify-between'>
          <img className='z-20' src={logo} alt='logo' width="104" height="16"/>
          <button className='rounded-xl py-1 px-3 bg-white hover:text-btn-text-effect'>Try It Free</button>
        </nav>
        <section className='mt-20 flex items-center flex-col justify-center mx-9 lg:flex-row lg:mb-40'>
          <div className='lg:w-1/2 flex flex-col justify-center items-center'>
          <h1 className='text-2xl text-center mx-3 mb-6 z-20'>Build The Community Your Fans Will Love</h1>
          <p className='text-center text-base mb-8 z-20'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
          <button className='mb-14 bg-btn-bg rounded-3xl px-4 py-2 text-white flex items-center justify-center z-20 hover:bg-btn-bg-effect'>Get Started For Free</button>
          </div>
          <img src={heroimg} alt='heroimg' className='mx-10 mb-9 lg:w-1/2' />
        </section>
      </header>
    <main className='min-h-screen w-screen m-0 p-0'>
      <Items img={grow} h1="Grow Together" p="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. "/>
      <Items id="middle" img={conversations} h1="Flowing Conversations" p="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."/>
      <Items img={users} h1="Your Users" p="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."/>
    </main>
    <footer className='bg-footer-bg text-white relative mt-60 lg:flex lg:items-center lg:justify-center'>
      <div className='absolute flex justify-center items-center flex-col bg-white text-black rounded-2xl px-3 py-10 mx-auto top-[-109px] left-3 right-3 shadow lg:left-80 lg:right-80'>
        <h1 className='mb-6 text-lg text-center'>Ready To Build Your Community?</h1>
        <button className='bg-btn-bg rounded-3xl py-2 px-4 text-white hover:bg-btn-bg-effect'>Get Started For Free</button>
      </div>
      <div className='flex flex-col items-start justify-center lg:ml-7'>
        <h1 className='text-4xl pt-36 ml-4 mb-6'><i></i>Huddle</h1>
        <p className='flex text-sm ml-4 mr-5 mb-6 gap-4'><i><img className='mr-4 h-6' src={location} alt='location' /></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <p className='flex items-center text-sm ml-4 mb-6'><i><img className='mr-4 h-6' src={phone} alt='phone' /></i>+1-543-123-4567</p>
        <p className='flex items-center text-sm ml-4 mb-10'><i><img className='mr-4 h-6' src={email} alt='email' /></i>example@fylo.com</p>
      </div>
      <ul className='lg:mt-48 lg:ml-20'>
        <li className='text-sm ml-4 mb-4 whitespace-nowrap'>About Us</li>
        <li className='text-sm ml-4 mb-4 whitespace-nowrap'>What We Do</li>
        <li className='text-sm ml-4 mb-4 whitespace-nowrap'>FAQ</li>
      </ul>
      <ul className='lg:mt-48 lg:ml-20'>
        <li className='text-sm ml-4 mb-4 whitespace-nowrap'>Career</li>
        <li className='text-sm ml-4 mb-4 whitespace-nowrap'>Blog</li>
        <li className='text-sm ml-4 mb-4 whitespace-nowrap'>Contact Us</li>
      </ul>
      <div className='lg:mt-48 lg:ml-40 lg:mr-20'>
      <div className='flex justify-center gap-3 mb-6 lg:mb-24 lg:justify-start'>
        <i className='h-8 w-8 bg-footer-bg'><img className='bg-white rounded-full h-8 w-8 hover:bg-btn-bg p-1' src={facebook} alt='facebook'/></i>
        <i className='h-8 w-8 bg-footer-bg'><img className='bg-white rounded-full h-8 w-8 hover:bg-btn-bg p-1' src={twitter} alt='twitter'></img></i>
        <i className='h-8 w-8 bg-footer-bg'><img className='bg-white rounded-full h-8 w-8 hover:bg-btn-bg p-1' src={instagram} alt='instagram'/></i>
      </div>
      <p className='text-center text-xs pb-12 whitespace-nowrap'>© Copyright 2018 Huddle. All rights reserved.</p>
      </div>
    </footer>
    </>);
}

export default App;
