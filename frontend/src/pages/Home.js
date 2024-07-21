import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Items from '../components/Items';
import { Chartss } from '../components/Chartss';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import LoadingBar from 'react-top-loading-bar';
import { createExpense, getUserExpenses } from '../utils/renders';
import NavBar from '../components/NavBar';

function Home({ credit, setCredit }) {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);
  const [selectDate, setSelectedDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [userdata] = useState(JSON.parse(localStorage.getItem('User')));
  const [userexp, setUserexp] = useState([]);
  const [saving, setSaving] = useState(Math.floor(localStorage.getItem('saving')) || 0);
  const [savingAmount, setSavingAmount] = useState(0);
  const [savingDate, setSavingDate] = useState("");
  localStorage.setItem('saving', saving);
  const ref = useRef(null);

  document.title = 'Home';

  useEffect(() => {
    if (!localStorage.getItem('User')) {
      navigate('/login');
    }
    getUserExpenses(userdata._id).then((data) => setUserexp(data));
  }, [userdata._id, navigate]);

  const getTotal = () => {
    let sum = 0;
    for (const item in userexp) {
      sum += userexp[item].amount;
    }
    return sum;
  };

  const addSaving = () => {
    setSaving(saving + parseInt(savingAmount));
    setCredit((Math.floor((savingAmount / 100) * 5) + credit));
    setSavingAmount(0);
  };

  return (
    <div className=' font-mont w-full bg-slate-300'>
      <LoadingBar color='orange' ref={ref}></LoadingBar>
      {/* <NavBar data={userexp}></NavBar> */}
      <div className='flex flex-col items-center w-full pt-16'>
        <div className='flex flex-row gap-4 mb-8'>
          <button
            type="button"
            onClick={() => setFlag(true)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Saving
          </button>
          {/* <button
            type="test"
            onClick={() => setCredit(0)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            test
          </button> */}

          <button
            type="button"
            onClick={() => setFlag(false)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Expense
          </button>
        </div>
        <div className='w-4/5 flex flex-col md:flex-row gap-8'>
          <div className='md:w-1/2 p-6 bg-gray-800 rounded-3xl'>
            <Chartss exdata={userexp}></Chartss>
          </div>
          <div className='md:w-1/2 flex flex-col items-center gap-10'>
            <div className='bg-gray-800 w-full rounded-3xl p-10 pb-6 pt-6 flex flex-col justify-center items-center gap-4'>
              <div className='font-bold text-3xl text-white'>
                {flag ? 'Add Saving' : 'Create Transaction'}
              </div>
              <div className='flex flex-row justify-center gap-4'>
                <input
                  type='number'
                  value={flag ? savingAmount : amount}
                  onChange={(e) => flag ? setSavingAmount(e.target.value) : setAmount(e.target.value)}
                  placeholder={flag ? 'Saving Amount' : 'Amount'}
                  className='mr-16 h-12 w-1/2 text-base placeholder-black p-4 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500'
                />
                {!flag && (
                  <select
                    id="categories"
                    onChange={(e) => setCategory(e.target.value)}
                    defaultValue=""
                    className="bg-white w-1/2 outline-none border border-gray-300 text-gray-900 text-sm rounded-xl p-2.5 focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="" disabled>--Select--</option>
                    <option value="Vehicle">Vehicle</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Travel">Travel</option>
                    <option value="Food">Food</option>
                    <option value="Fun">Fun</option>
                    <option value="Other">Other</option>
                  </select>
                )}
              </div>
              <div className=''>
                <DatePicker
                  selected={flag ? savingDate : selectDate}
                  onChange={(date) => flag ? setSavingDate(date) : setSelectedDate(date)}
                  className="w-36 mr-16 p-3 placeholder-black rounded-xl outline-none bg-white-900 text-black focus:ring-2 focus:ring-indigo-500"
                  placeholderText="Date"
                  showYearDropdown
                />
              </div>
              <button
                onClick={() => {
                  if (flag) {
                    addSaving();
                  } else {
                    const expInfo = {
                      usersid: userdata._id,
                      category,
                      date: selectDate,
                      amount
                    };
                    ref.current.staticStart();
                    createExpense(expInfo);
                    ref.current.complete();
                    // window.location.reload();
                  }
                }}
                className="w-full mt-4 text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl transition-all duration-300 ease-out"
              >
                <span className="font-bold text-2xl">+</span>
              </button>
            </div>
            <div className='w-full p-7 bg-gray-800 rounded-xl border-2 border-white overflow-y-scroll'>
              <div className='text-3xl text-white font-bold'>
                {flag ? `Total Savings: ₹ ${saving}` : `Total Expense: ₹ ${getTotal()}`}
              </div>
              {!flag && (
                <div className='grid grid-cols-2 gap-7 mt-4'>
                  {Object.keys(userexp).map((items) => (
                    <Items key={userexp[items]._id} data={userexp[items]}></Items>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
