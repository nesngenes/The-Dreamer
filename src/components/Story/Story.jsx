import React from 'react'

import './story.css'

const Story = () => {

  window.onload = () => {
    let path = document.querySelector('path')
    
    let pathLength = path.getTotalLength()
  
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    path.style.strokeDashoffset = pathLength;
  
    window.addEventListener('scroll', () => {
      var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      var drawLength = pathLength * scrollPercentage;
      path.style.strokeDashoffset = pathLength - drawLength;
    })
  }


  return (
    <div className='story-page'>
      <p>#1 Rule number one is that you gotta have fun</p>

      <div className="achilles">
        <svg viewBox="0 0 476 1607" fill="none" preserveAspectRatio='xMidYMax meet'>
          <path d="M169 0V384L423 604L475 494L169 734L1 648H169V1098L315 1012L1 1002L169 1256V1502M169 1502V1596L293 1502C251.54 1462.53 227.569 1444.52 169 1502ZM169 1502C109.721 1438.01 90.4109 1478.72 47 1502L169 1606" stroke="#38A0C0"/>
        </svg>
      </div>

      <p>YES YES YES I AGREE</p>

      <p>yEAH 
        i always try to enjoy everything i do 
        and trust myself 

        because when i enjoy it the results 
        will also be great
      </p>

      <p>I could finish all of my projects because i’m having fun while making it xD</p>

      <p>
      LaBuena Cafe is my first MERN Stack project.

      At first i didn’t think i could finish this project but i did it  because 
      the concept is actually my childhood dream. 
      
      When i was a kid (am i stil a kid ??) i dreamed to
      have my own restaurant that’s why i choose to make a restaurant
      website as my first project and yeah i’m really happy to make it 	&lt;3
      </p>

      <p>
      My 2nd MERN Stack project is Aone

      It is an online volleyball equipment store website

      I wanna try to implement Payment API in one of my projects,
      that’s why i choose online store as my 2nd project. 

      The fun part is, Haikyuu!! is one of my favorite anime. 
      It is a volleyball sport anime
      I love Haikyuu!! so much 	&gt;.&lt;
      </p>
    </div>
  )
}

export default Story