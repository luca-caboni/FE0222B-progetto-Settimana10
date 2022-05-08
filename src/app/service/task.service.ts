import { Injectable } from '@angular/core';
import { ToDo } from '../interface/todo';

let listaDaFare: ToDo[] = [];
let listaFatti: ToDo[] = [];


export function aggiungi(task: ToDo){
  listaDaFare.push(task);
  return listaDaFare
};

export function recupera(){
  return listaDaFare
};

export function aggiungiFatto(task: ToDo){
  listaFatti.push(task)
}

export function recuperaFatti(){
  return listaFatti
}


