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

function App() {
  return (<>
    <header className=' bg-header-bg pt-7 min-h-full w-full mb-14'>
        <nav className='bg-header-bg mx-4 flex items-center justify-between'>
          <img className='' src={logo} alt='logo' width="104" height="16"/>
          <button className='rounded-xl py-1 px-3 bg-white'>Try It Free</button>
        </nav>
        <section className='mt-20 flex items-center flex-col justify-center mx-9 bg-header-bg'>
          <h1 className='text-2xl text-center mx-3 mb-6'>Build The Community Your Fans Will Love</h1>
          <p className='text-center text-base mb-8'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
          <button className='mb-14 bg-btn-bg rounded-3xl px-4 py-2 text-white flex items-center justify-center'>Get Started For Free</button>
          <img src={heroimg} alt='heroimg' className='mx-10 mb-9' />
        </section>
      </header>
    <main className='min-h-screen w-screen m-0 p-0'>
      <Items img={grow} h1="Grow Together" p="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. "/>
      <Items img={conversations} h1="Flowing Conversations" p="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."/>
      <Items img={users} h1="Your Users" p="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."/>
    </main>
    <footer className='bg-footer-bg text-white'>
      <div></div>
      <h1 className='text-4xl pt-36 ml-4 mb-6'><i></i>Huddle</h1>
      <p className='flex text-sm ml-4 mb-6'><i><img src={location} alt='location' /></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      <p className='flex items-center text-sm ml-4 mb-6'><i><img src={phone} alt='phone' /></i>+1-543-123-4567</p>
      <p className='flex items-center text-sm ml-4 mb-10'><i><img src={email} alt='email' /></i>example@fylo.com</p>
      <ul>
        <li className='text-sm ml-4 mb-4'>About Us</li>
        <li className='text-sm ml-4 mb-4'>What We Do</li>
        <li className='text-sm ml-4 mb-4'>FAQ</li>
        <li className='text-sm ml-4 mb-4'>Career</li>
        <li className='text-sm ml-4 mb-4'>Blog</li>
        <li className='text-sm ml-4 mb-4'>Contact Us</li>
      </ul>
      <div></div>
    </footer>
    </>);
}

export default App;
