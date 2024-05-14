import './popup.css'
export default function PopUp({mode, text, textButton}){
    let theme = 'popup-container'
    if(mode===2){
        theme = 'popup-container2'
    }
    return <div className={theme}>
        <p>{text}</p>
        <button>{textButton}</button>
    </div>
}