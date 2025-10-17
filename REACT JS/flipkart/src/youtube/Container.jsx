import React from 'react'
import VideoPlayer from './VideoPlayer'
import VideoList from './VideoList'

const Container = ({state,vid,fun}) => {

  return (
    <div>
        <article>
        <aside>
            <VideoPlayer vid={vid}></VideoPlayer>
        </aside>

        {/* ======================================================================================================= */}

        <aside>
            {
                state.map((lio)=>{
                    return <VideoList  fun={fun} lio={lio}></VideoList>
                })
            }
        </aside>
        </article>
    </div>
  )
}

export default Container