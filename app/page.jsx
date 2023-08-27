'use client'
import React, { useState,useRef,useEffect } from "react"
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Help from "./components/Help";
import About from "./components/About";
import Education from "./components/Education";
import Work from "./components/Work";
import Bootcamp from "./components/Bootcamp";
import Project from "./components/Project";
import Organization from "./components/Organization";
import Skill from "./components/Skill";
import Social from "./components/Social";
import Source from "./components/Source";

export default function Home() {

  const [input, setInput] = useState('')
  const [output, setOutput] = useState('');
  const [history, setHistory] = useState([])

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setOutput('');

    let newOutput = ''
    if (input === 'help') {
      newOutput = <Help />
    } else if (input === 'about') {
      newOutput = <About />
    } else if (input === 'education') {
      newOutput = <Education />
    } else if (input === 'experience') {
      newOutput = <Work />
    } else if (input === 'bootcamp') {
      newOutput = <Bootcamp />
    } else if (input === 'project') {
      newOutput = <Project />
    } else if (input === 'organization') {
      newOutput = <Organization />
    } else if (input === 'skill') {
      newOutput = <Skill />
    } else if (input === 'social') {
      newOutput = <Social />
    } else if (input === 'source') {
      newOutput = <Source />
    } else if (input === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else {
      newOutput = <p>Command not found. Type <span className="text-slate-300">{'help'}</span> for available commands.</p>;
    }
    setOutput(newOutput)
    setHistory((prevHistory) => [...prevHistory, { input, output: newOutput }])
    setInput('')
  }

  const historyEndRef = useRef(null);
  const scrollToBottom = () => {
    historyEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [history]);

  const renderHistory = () => {
    if (history.length === 0) {
      return null
    }
    return (
      <div>
        {history.map((item, index) => (
          <div key={index}>
            <div><span className="text-emerald-600">guest69@suzuya</span> : <span className="text-blue-500">~</span>$ <span className="text-slate-300">{item.input}</span></div>
            <div>{item.output}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <main className='font-ubuntu text-white w-full p-5 flex flex-col h-screen'>
      <div className="sticky top-0 z-50">
        <Nav />
      </div>
      <section className='grow p-2'>
        <div className='container p-1'>
          <Intro />
          {renderHistory()}
          <div ref={historyEndRef} />
        </div>
      </section>
      <footer className='font-ubuntu text-white bg-zinc-800 rounded-b-xl sticky bottom-0 z-50'>
        <form onSubmit={handleFormSubmit}>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-sm text-gray-400 bg-gray-600 rounded-bl-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </span>
            <input type="text" value={input} onChange={handleInputChange} id="comand-input" className="bg-gray-900 text-slate-300 block flex-1 min-w-0 w-full text-sm p-2.5" placeholder="Type command here..." />
            <button type="submit" className="inline-flex items-center px-3 text-sm text-gray-400 bg-gray-900 rounded-br-xl">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </form>
      </footer>
    </main>
  )
}
