import './popup.css'
export default function PopUp({mode, text, textButton, state}){
    let theme = 'popup-container'
    if(mode===2){
        theme = 'popup-container2'
    }

    function handleClick(){
        state(true)
    }
    return <div className={theme}>
        <p>{text}</p>
        <button onClick={handleClick}>{textButton}</button>
    </div>
}