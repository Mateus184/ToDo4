import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { read } from 'fs';



function souCliente (){
    let nomeUsuario = readlineSync.question('Informe seu nome: ');
    let cpfUsuario = readlineSync.question('Informe seu CPF: ')    
       
    
    let usuario = ('Usuario '+ chalk.blue((nomeUsuario)) +' de CPF '+ (chalk.blue(cpfUsuario)))
    console.log(usuario + ' Localizado em nosso sistema!')
    let oqueUsuario = readlineSync.question('O que procura ' + (chalk.blue(nomeUsuario)) +' ? ')
    
    console.log((chalk.blue(nomeUsuario)) + ', seu pedido para ' + (chalk.blue(oqueUsuario))+ ' foi solicitado!')
    console.log('Aguarde um momento que logo vamos lhe atender.')
     
    }
function naoCliente (){
    let quer = readlineSync.question('gostaria de contratar nosso serviço?')

}

function oCliente(){
    eCliente = readlineSync.question ('Digite 1 para Sim Digite 2 para não')
}


let bot = console.log('Olá! Sou o atendente virtual do seu plano de dados mobile, irei te ajudar com seu atendimento')
console.log('Já cliente?')
let eCliente = readlineSync.question ('Digite 1 para Sim Digite 2 para não')
    if (eCliente == 1){
        console.log('Certo!')
        souCliente ()
    } else if (eCliente !=1 && eCliente !=2){
        console.log('Opção invalida')
        oCliente()
        if (eCliente !=1 && eCliente !=2){
            console.log ('Opção invalida! Tente novamente mais tarde!')
        }

    } else {
        naoCliente ()

    }


