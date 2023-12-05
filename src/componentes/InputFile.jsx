import { Icon } from '@iconify/react';
import React from 'react';

const InputFile = ({handle,titulo,name,fileImg,setFile}) => {

  return (
    <div className='w-full flex justify-center my-3'>
      <div className="relative overflow-hidden mr-2">
        <input 
          type="file"
          accept=".png, .jpg, .jpeg, .mp4"
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer file:cursor-pointer"
          onChange={handle}
        />
        <button className="bg-[#1e6994] hover:bg-[#1a5c83] active:bg-[#135074] px-4 h-10 rounded-md flex justify-center items-center font-[200] text-sm  truncate overflow-hidden">
          <Icon icon="clarity:attachment-line" width='22' className='mr-1'/>
          {fileImg !== undefined ? 
          <>
            {name}
            <Icon 
              icon="clarity:close-line" 
              width='25' color='white' 
              className='mx-1 z-10'
              onClick={()=>setFile()}
            />
          </>
          :
            `${titulo}`
          }
        </button>
      </div>
    </div>
  );
}
 
export default InputFile;