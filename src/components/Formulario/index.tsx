import React from 'react';
import TesteButton from '../button';

class Formulario extends React.Component{
    render(){
        return(
            <form>
                <div>
                    <label htmlFor='task'>
                    Adicione um novo estudo
                    </label>
                    <input 
                    type="text"
                    name="task"
                    id="task"
                    placeholder="Oque voce quer estudar"
                    required
                     />
                </div>
                <div>
                <label>

                </label>
                <input 
                type="time"
                step="1"
                name="time"
                id="time"
                min="00:00:00"
                max="01:30:00"
                 />
                </div>
                <TesteButton />
            </form>
        )
    }
}

export default Formulario