import { useEffect, useState } from 'react';
import { FormularioContainer, StyledForm, StyledInput, Button } from './styles'; 

function Formulario({botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar}){
    return(
        <FormularioContainer> 
            <StyledForm>
                <StyledInput type='text' value={obj.nome} onChange={eventoTeclado} name='nome' placeholder='Nome' />
                <StyledInput type='text' value={obj.cpf} onChange={eventoTeclado} name='cpf' placeholder='CPF' />
                <StyledInput type='text' value={obj.funcao} onChange={eventoTeclado} name='funcao' placeholder='Função' />
                {
                    botao
                    ?
                    <Button onClick={cadastrar} className='btn-primary'>Cadastrar</Button>
                    :
                    <div>
                        <Button onClick={alterar} className='btn-warning'>Alterar</Button>
                        <Button onClick={remover} className='btn-danger'>Remover</Button>
                        <Button onClick={cancelar} className='btn-secondary'>Cancelar</Button>
                    </div>
                }
            </StyledForm>
        </FormularioContainer>
    )
}

export default Formulario;
