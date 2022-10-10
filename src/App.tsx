import React from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/Card'
import Profile from './components/Profile'
import { ReactComponent as PlayIcon } from './assets/icon-play.svg'
import { ReactComponent as WorkIcon } from './assets/icon-work.svg'
import { ReactComponent as StudyIcon } from './assets/icon-study.svg'
import { ReactComponent as ExecersieIcon } from './assets/icon-exercise.svg'
import { ReactComponent as SocialIcon } from './assets/icon-social.svg'
import { ReactComponent as SelfCareIcon } from './assets/icon-self-care.svg'

function App() {
  return (
    <div className='bg-gray-900 w-full h-full fixed overflow-auto'>
      <div className="items-center justify-center relative">
        <div className="flex md:flex-row flex-col place-content-center p-10">
          <Profile />
          <div className="md:ml-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:place-content-center mt-5 md:mt-0">
            <Card 
              title="Work"
              color="bg-orange-300"
              Icon={<WorkIcon className='-mt-2' />}/>
            <Card 
              title="Play"
              color="bg-sky-300"
              Icon={<PlayIcon className='-mt-2' />}/>
            <Card 
              title="Study"
              color="bg-red-300"
              Icon={<StudyIcon className='-mt-2' />}/>
            <Card 
              title="Exercise"
              color="bg-green-300"
              Icon={<ExecersieIcon className='-mt-2' />}/>
            <Card 
              title="Social"
              color="bg-violet-300"
              Icon={<SocialIcon className='-mt-2' />}/>
            <Card 
              title="Self Care"
              color="bg-yellow-300"
              Icon={<SelfCareIcon className='-mt-2' />}/>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
