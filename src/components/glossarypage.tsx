import React, { Fragment, useState, useEffect } from 'react'
import { Popover, Transition, Dialog } from '@headlessui/react'
import { StaticImage } from "gatsby-plugin-image"
import { CheckIcon } from '@heroicons/react/outline'
import {glossary} from '../data';

const Glossary = () => {
  const [displayTerms, setDisplayTerms] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [modalTerm, setModalTerm] = useState([]); 
  const [activeBtn, setActiveBtn] = useState('A'); //if letter matches, pagination button gets className active-btn
  const terms = glossary.sort((a, b) => a.term > b.term ? 1 : -1);   
  const letters = [...new Set(terms.map((item) => item.term[0]))];

  //FILTERS TERMS BY FIRST LETTER
  const termsToFilter = (letter) => {
    const filterTerms = terms.filter((item) => item.term[0] === letter); 
    //if letter matches, pagination button gets a className active-btn
    setActiveBtn(letter);
    setDisplayTerms(filterTerms); 
  }

  const openModal = (obj) => {
    setIsModalOpen(true)
    const termToDisplay = terms.filter((item) => item.term === obj); 
    setModalTerm(termToDisplay); 
  }
  //When page first loads display term with letter A/or when search input is empty
  const displayAList = () => {
    const displayATerms = terms.filter((item) => item.term[0].toLowerCase() === 'a'); 
    setDisplayTerms(displayATerms); 
  }

  // SEARCH THROUGH GLOSSARY TERMS
  const handleChange = (event) => {
    setActiveBtn(""); 
    const searchTerms = terms.filter((item) => item.term.toLowerCase().includes(event.target.value.toLowerCase()));  
    setDisplayTerms(searchTerms); 

    if(!event.target.value || event.target.value === " ") {
      displayAList(); 
      setActiveBtn("A");
    }  
  }

  useEffect(() => {
    displayAList(); 
  }, []);

  return (
    <div className="bg-white">
        <div className="relative max-w-7xl mx-auto bg-indigo-100 sm:min-h-200 min-h-300">
          <div className="absolute inset-0">
            <StaticImage
              src="../images/pride_balloons-bw.jpg"
              alt="garden party"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0 bg-violet-lightest mix-blend-multiply"
              aria-hidden="true"
            ></div>
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div className="absolute inset-8">
              <h1 className="text-white text-4xl lg:text-7xl">Glossary</h1>
            </div>

      {/* SEARCH INPUT */}
      <div className="sm:px-6 lg:px-0">
          <div className="relative mx-auto lg:max-w-7xl">
              <div className="mt-3 sm:mt-4">
                <form className="mt-6">
                  <div>
                    <input
                      name="search"
                      type="text"
                      required
                      className="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:w-4/5 md:block md:mx-auto"
                      placeholder="Search"
                      onChange={handleChange}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* PAGINATION BUTTONS */}
        <nav className="border-t border-gray-200 px-4 flex items-center justify-between sm:px-0 pt-3">
        <div className="md:-mt-px md:flex mx-auto">
          {letters.map((item) => {
            return(
            <button
              onClick={() => termsToFilter(item)}
              className={`hover:cursor-pointer py-2 px-4 inline-flex items-center text-sm font-medium ${activeBtn === item[0] ? 'active-btn' : null}`}
              key={`${item}-key`}>
              {item[0]}
            </button>              
            )
          })}
        </div>
      </nav>

    {/* DISPLAY TERMS */}
    <div className="bg-white pt-2 pb-20 px-8 sm:px-6 md:px-0 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg sm:mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl lg:mx-auto">
        <div className="mt-12 grid gap-16 pt-12 md:grid-cols-3 lg:gap-x-5 lg:gap-y-20 lg:mt-2">
          {displayTerms.map((item) => (
            <div className="text-center" key={item.key}>
              <p className="text-xl font-semibold text-gray-900 pointer" onClick={() => openModal(item.term)}>{item.term}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* MODAL WINDOW */}
      <Transition.Root show={isModalOpen} as={Fragment}>
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setIsModalOpen}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                {/* DISPLAY 1 TERM AND DEFINITION */}
                {modalTerm.map((item) => {
                  const {term, def} = item; 
                  return (
                    <div key={`modalkey`}>
                      <div className="mt-3 text-center sm:mt-5">
                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                          {term}
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            {def}
                          </p>
                        </div>
                      </div>
                    </div>                     
                  )
                })}
                <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={() => setIsModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

    {/* EMAIL BUTTON */}
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 text-center sm:px-6 lg:px-8 lg:py-12 xl:rounded">
        <div className="space-y-8 sm:space-y-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl text-black">
            <h2 className="text-3xl font-semibold tracking-wider sm:text-4xl">
             Email us
            </h2>
            <a
            href="mailto:icc@outboulder.org"
            target="_blank"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-violet-dark sm:w-auto bg-violet"
          >
            Submit an edit here
          </a>  
            <p className="text-xl font-light"> 
            Would you like to add or edit something? We know our language changes rapidly and want to best represent the terms and identities listed above. 
            </p>
          </div>
        </div>
      </div>
    </div>      
    </div>
  )
}

export default Glossary