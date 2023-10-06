import "./header.css"
export function Header(){
    return(
        <div className="header">
            <img className="header--img" src="/images/favicon.png" alt="" />
            <h1 className="header--tittel">Meme Generator</h1>
        </div>
    )
}