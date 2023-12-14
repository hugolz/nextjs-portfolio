'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/app/utils';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-5 flex-col items-center justify-center bg-transparent '>
        <label
          htmlFor='name'
          className='mb-3 block text-base font-medium text-white'
        >
          Full Name
        </label>
        <input
          type='text'
          placeholder=' Full Name'
          className='rounded-md border sm:w-[40%] sm:h-8 border-gray-300 bg-white text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('name', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='mb-3 block text-base font-medium text-white'
        >
          Email Address
        </label>
        <input
          type='email'
          placeholder=' example@domain.com'
          className='rounded-md border sm:w-[40%] sm:h-8 border-gray-300 bg-white text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('email', { required: true })}
        />
      </div>
      <div className='mb-5'>
        <label
          htmlFor='message'
          className='mb-3 block text-base font-medium text-white'
        >
          Message
        </label>
        <textarea
          rows={4}
          placeholder=' Type your message'
          className='resize-none rounded-md sm:w-[40%] border border-gray-300 bg-white text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register('message', { required: true })}
        ></textarea>
      </div>
      <div>
        <button className='hover:shadow-form sm:w-[15%] sm:h-13 rounded-md bg-purple-500  text-base font-semibold text-white outline-none'>
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
