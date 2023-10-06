import "./generator.css"

export function Generator(){
    return(
        <div className="Generator--container">  
            <div className="Generator--inputs">
                <input className="Generator--inputFirst input" type="text" placeholder="Type Text..." />
                <input className="Generator--inputSecond input" type="text" placeholder="Type Text..." />
            </div>
            <button className="Generator--button">Get a new meme image  🖼</button>
            <div className="Generator--img">
                <p className="Img--textTop Img--text">Hei</p>
                <p className="Img--textBottom Img--text">Give My Money</p>
               
            </div>
        </div>
    )
}