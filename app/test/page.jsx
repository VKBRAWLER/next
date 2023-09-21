"use client";
import {React, useContext, useEffect } from 'react';
import NoteContext from '@/context/noteContext';

const page = () => {
  let a = useContext(NoteContext);

  return (
    <div>
      name is {a.state.name}
      and section is {a.state.class}
    </div>
  )
}

export default page;