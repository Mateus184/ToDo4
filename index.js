import readlineSync from 'readline-sync';
import chalk from 'chalk';
import { read } from 'fs';

let bot = console.log('Olá! Sou o atendente virtual do seu plano de dados mobile, irei te ajudar com seu atendimento')
let nomeUsuario = readlineSync.question('Informe seu nome: ');
let cpfUsuario = readlineSync.question('Informe seu CPF: ')
let usuario = ('Usuario '+ chalk.blue((nomeUsuario)) +' de CPF '+ (chalk.blue(cpfUsuario)))
console.log(usuario + ' Localizado em nosso sistema!')
let oqueUsuario = readlineSync.question('O que procura ' + (chalk.blue(nomeUsuario)) +' ? ')

console.log((chalk.blue(nomeUsuario)) + ', seu pedido para ' + (chalk.blue(oqueUsuario))+ ' foi solicitado!')
console.log('Aguarde um momento que logo vamos lhe atender.')


