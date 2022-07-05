import React from 'react'

import {SiEthereum} from 'react-icons/si'
import {BsInfoCircle} from 'react-icons/bs'
import Loader from './Loader'


const Welcome = () => {
const connectWallet = () =>{}
const handleSubmit =() =>{}
const Input =({placeholder,name,type,value,handleChange}) => (
  <input 
  placeholder={placeholder} 
  type={type}
  step="0.0001"
  value={value}
  onChange={(e)=> handleChange(e, name)}
  className='my-2 w-full rounded-sm p-2 bg-violet-400 text-white border-black bg-slate-800'

  />
)



  return (
    <div className='flex w-full justify-center item-center'>
      <div className='flex mf:flex-row flex-col items-start justify-between md:p-10 py-12 px-4'>
        <div className='flex flex-1 justify-start flex-col mf:mr-10'>
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
            Send Cryptocurrencies <br /> across the blockchain
          </h1>
          <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
            Buy and sell Cryptocurrencies within the Ethereum Network with ease. Experience true freedom
          </p>
          <button 
          type='button'
          onClick={connectWallet} 
          className='text-white flex flex-row justify-center items-center my-5 bg-[#86198f] p-3 rounded-full cursor-pointer hover:bg-[#d946ef]'>
            Connect Wallet
          </button>
        </div>
        <div className='flex flex-col flex-1 items-center justify-center w-full mf:mt-0 mt-10'>
          <div className='p-3 justify-end items-center flex-col rounded-xl h-25 sm:w-72 w-full my-5 eth-card '>
            <div className='flex justify-between flex-col w-full h-full'>
              <div className='flex justify-between items-start'>
                <div className='w-10 h-10 rounded-full border border-black flex justify-center items-center'>
                  <SiEthereum fontSize={24} color='#171717'/>
                </div>
                <p className='text-black font-bold text-lg mt-1 '>
                  Ethereum
                </p>
                <BsInfoCircle fontSize={16} color='#171717' />
              </div>
              <div className='flex-row-reverse'>
                <p className='text-black font-light text-sm mt-2 mb-1'>
                  Address
                </p>
               
              </div>
            </div>
          </div>
          <div className='p-5 sm:w-96 w-full flex flex-col justify-start items-center gradient-bg-form rounded-lg' >
            <Input placeholder="Receiver's Address" name="receiverAddress" type="text " handleChange={()=>{}} />
            <Input placeholder="Amount(ETH)" name="amount" type="number" handleChange={()=>{}} />
            <Input placeholder="Message" name="message" type="text " handleChange={()=>{}} />
            <div className='h-[2px] w-full bg-white my-3' /> 

            {true ? (
              <Loader />
            ) : (
              <button 
              type='button'
              onClick={handleSubmit}
              className='text-white flex flex-row justify-center items-center my-5 bg-[#86198f] p-3 rounded-full cursor-pointer hover:bg-[#d946ef]'>
              Send $ETH
              </button>
            )
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Welcome