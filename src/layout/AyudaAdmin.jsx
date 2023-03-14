import React from 'react'
import { MenuLateral } from '../components/MenuLateral'

export const AyudaAdmin = () => {
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://stored-1.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();
  return (
    <>
    <div className='flex'>

    <MenuLateral/> 
    <div className='bg-[#eef9fd] w-full block'>
<div id="disqus_thread"
className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white mt-10 rounded-md p-4'
></div>
    </div>
    </div>
    
    </>
  )
}
