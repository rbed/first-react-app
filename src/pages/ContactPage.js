import React from 'react'
import '../styles/ContactPage.css'
import {Prompt} from 'react-router-dom'
// NOWY KOMPONENT PROMPT który jest aktywowany kiedy następuje zmiana ścieżki (np można się nim upominać o chęć zmiany podstorny mimo niewypełnionych formularzy)

class ContactPage extends React.Component {
    state = {
        text: '',
        send: true
    }

    handleChange = (e) => {
        const text = e.target.value;
        this.setState({
            text: text,
            send: false
        })
    }

    handleSumbit = (e) => {
        e.preventDefault();
        this.setState({
            text: '',
            send: true})
    }

    render(){
        return(
            <div className='form'>
            <h2>Napisz do nas</h2>
            <form className='formBoxes' onSubmit={this.handleSumbit}>
                <textarea name='text' placeholder='pisz' value={this.state.text} onChange={this.handleChange} rows="10" cols="40" />
                <button>Wyślij</button>
            </form>
            
            {/* NOWY KOMPONENT PROMPT W AKCJI */}
            <Prompt  
                when={!this.state.send}
                message='masz niewypelniony formularz, czy na pewno chcesz opuścić stronę?'
            />
            </div>
        )
    }

}
 
export default ContactPage;