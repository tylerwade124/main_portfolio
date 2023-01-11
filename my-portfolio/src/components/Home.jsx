import Signature from "./Signature"

export default function Home () {
    return (
       <div className='home'>
            <h3 className='intro'>Hello, my name is</h3>
            <div className='signature'>
                <div className="white-box"></div>
                <Signature />
            </div>
            <div className="sub-text">
                    <p className="sub-text-1">Software Engineer</p>
                    <p className="sub-text-2">Full-Stack Web Developer</p>
            </div>
            
       </div>
    )
}